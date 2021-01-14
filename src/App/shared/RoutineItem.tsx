/* eslint-disable indent */
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import Routine from '../../models/Routine'
import AuthorsContext from '../contexts/AuthorsContext'
import CategoriesContext from '../contexts/CategoriesContext'
import UserContext from '../contexts/UserContext'
import Icon from './Icon'
import { H5, Overline, Body } from './typography'

const Container = styled.TouchableOpacity`
  flex-direction: row;
  box-shadow: ${props => props.theme.elevation[1]};
  border-radius: 8px;
  padding: 8px;
  background: ${props => props.theme.color.surface};
`

const ColorBar = styled(LinearGradient)`
  width: 4px;
  border-radius: 100px;
`

const Col = styled.View`
  flex: 1 0 0;
`

const Header = styled.View`
  flex-direction: row;
`

const ColInfo = styled.View`
  flex: 1 0 0;
`

const ColActions = styled.View``

const Footer = styled.View``

export interface RoutineItemProps {
  routine: Routine
  style?: StyleProp<ViewStyle>
}

export default function RoutineItem({
  routine,
  style
}: RoutineItemProps): JSX.Element {
  const theme = useTheme()

  const navigation = useNavigation()

  const category = React.useContext(CategoriesContext).categories[
    routine.category
  ]

  const { authors } = React.useContext(AuthorsContext)
  const routineAuthors = routine.authors.reduce(
    (routineAuthors, authorId, idx, ids) =>
      idx + 1 === ids.length
        ? routineAuthors + authors[authorId].name
        : idx + 1 === ids.length - 1
        ? routineAuthors + authors[authorId].name + ' e '
        : routineAuthors + authors[authorId].name + ', ',
    ''
  )

  const { isFavoriteRoutine, toggleFavoriteRoutine } = React.useContext(
    UserContext
  )

  return (
    <Container
      style={style}
      onPress={() => navigation.navigate('Routine', { routineId: routine.id })}
    >
      <ColorBar
        colors={[
          `hsl(${category?.hueTheme}, 100%, 35%)`,
          `hsl(${category?.hueTheme}, 100%, 80%)`
        ]}
        style={{ marginRight: 8 }}
      />
      <Col>
        <Header style={{ marginBottom: 4 }}>
          <ColInfo style={{ marginRight: 8 }}>
            <Overline color={`hsl(${category.hueTheme}, 100%, 35%)`}>
              {category.name}
            </Overline>
            <H5 numberOfLines={2} ellipsizeMode="clip">
              {routine.name + '\n'}
            </H5>
          </ColInfo>
          <ColActions>
            <TouchableOpacity onPress={() => toggleFavoriteRoutine(routine)}>
              <Icon
                name="star"
                size={32}
                color={
                  isFavoriteRoutine(routine)
                    ? theme.color.warning
                    : theme.color.background
                }
              />
            </TouchableOpacity>
          </ColActions>
        </Header>
        <Footer>
          <Body numberOfLines={2}>
            <Icon
              name="authors"
              size={18}
              color={theme.color.primaryVariant}
              style={{ marginRight: 8 }}
            />
            {'  '}
            {routineAuthors}
          </Body>
        </Footer>
      </Col>
    </Container>
  )
}
