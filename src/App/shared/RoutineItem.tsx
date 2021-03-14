/* eslint-disable indent */
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import Routine from '../../models/Routine'
import AuthorsContext from '../contexts/AuthorsContext'
import CategoriesContext from '../contexts/CategoriesContext'
import UserContext from '../contexts/UserContext'
import Icon from './Icon'
import { H5, Overline, Body } from './typography'
import Category from '../../models/Category'
import categories from '../contexts/CategoriesContext/categories'

const Container = styled.TouchableOpacity`
  flex-direction: row;
  box-shadow: ${props => props.theme.elevation[1]};
  border-radius: 8px;
  padding: 8px;
  background: ${props => props.theme.color.surface};
`

const ColorBar = styled(LinearGradient)`
  width: 4px;
  border-radius: 2px;
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

export type RoutineItemProps = {
  routine: Routine
  selectedCategory?: Category | null
  style?: StyleProp<ViewStyle>
}

export default function RoutineItem({
  routine,
  selectedCategory,
  style
}: RoutineItemProps): JSX.Element {
  const theme = useTheme()

  const navigation = useNavigation()

  /** The category shown in  card is by the default the first category in the array, named main
   * category. But, when there is a filter applied in the list of routines, the selected category
   * must be prioritezed to be shown in the card. */
  const category = useContext(CategoriesContext).categories[
    routine.categories.filter(id => id === selectedCategory?.id)[0] ??
      routine.categories[0]
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
          `hsl(${category?.hueTheme}, 100%, 30%)`,
          `hsl(${category?.hueTheme}, 100%, 55%)`
        ]}
        style={{ marginRight: 8 }}
      />
      <Col>
        <Header style={{ marginBottom: 4 }}>
          <ColInfo style={{ marginRight: 8 }}>
            <Overline color={`hsl(${category.hueTheme}, 100%, 35%)`}>
              {category.name}
            </Overline>
            <H5 style={{ minHeight: 64 }}>{routine.name}</H5>
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
