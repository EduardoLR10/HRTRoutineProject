/* eslint-disable indent */
import React from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import AuthorsContext from '../contexts/AuthorsContext'
import CategoriesContext from '../contexts/CategoriesContext'
import Category from '../contexts/CategoriesContext/Category'
import Routine from '../contexts/RoutinesContext/Routine'
import Icon from './Icon'
import { H5, Overline, Body } from './typography'

const Container = styled.TouchableOpacity`
  flex-direction: row;
  box-shadow: ${props => props.theme.elevation[1]};
  border-radius: 8px;
  padding: 8px;
  background: ${props => props.theme.color.surface};
`

const ColorBar = styled.View<{ color: string }>`
  width: 4px;
  border-radius: 100px;
  background: ${props => props.color};
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
  style: StyleProp<ViewStyle>
}

export default function RoutineItem({
  routine,
  style
}: RoutineItemProps): JSX.Element {
  const theme = useTheme()
  const category: Category = React.useContext(CategoriesContext).categories[
    routine.category
  ]
  const { authors } = React.useContext(AuthorsContext)

  const routineAuthors = routine?.authors.reduce(
    (routineAuthors, authorId, idx, ids) =>
      idx + 1 === ids.length
        ? routineAuthors + authors[authorId].name
        : idx + 1 === ids.length - 1
        ? routineAuthors + authors[authorId].name + ' e '
        : routineAuthors + authors[authorId].name + ', ',
    ''
  )

  return (
    <Container style={style}>
      <ColorBar
        color={`hsl(${category?.hueTheme}, 100%, 60%)`}
        style={{ marginRight: 8 }}
      />
      <Col>
        <Header style={{ marginBottom: 4 }}>
          <ColInfo style={{ marginRight: 8 }}>
            <Overline color={`hsl(${category.hueTheme}, 100%, 60%)`}>
              {category.name}
            </Overline>
            <H5 numberOfLines={2} ellipsizeMode="clip">
              {routine.name + '\n'}
            </H5>
          </ColInfo>
          <ColActions>
            <TouchableOpacity>
              <Icon name="star" size={32} color={theme.color.background} />
            </TouchableOpacity>
          </ColActions>
        </Header>
        <Footer>
          <Body numberOfLines={2}>{routineAuthors}</Body>
        </Footer>
      </Col>
    </Container>
  )
}
