import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import styled from 'styled-components/native'
import Routine from '../../../../models/Routine'
import CategoriesContext from '../../../contexts/CategoriesContext'
import Chip from '../../../shared/Chip'
import { H1, Overline } from '../../../shared/typography'

const Container = styled.View`
  padding: 16px 8px;
  background: ${props => props.theme.color.surface};
  border-bottom-width: 2px;
  border-bottom-color: ${props => props.theme.color.primary};
`

const TagsList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`

export interface RoutineHeaderProps {
  routine: Routine
  style?: StyleProp<ViewStyle>
}

export default function RoutineHeader({
  routine,
  style
}: RoutineHeaderProps): JSX.Element {
  const { categories: categoriesMap } = React.useContext(CategoriesContext)
  const categories = routine.categories.map(id => categoriesMap[id])

  return (
    <Container style={style}>
      {categories.map(category => (
        <Overline
          key={category.id}
          color={`hsl(${category.hueTheme}, 100%, 35%)`}
        >
          {category.name}
        </Overline>
      ))}
      <H1>{routine.name}</H1>
      <TagsList style={{ marginTop: 8 }}>
        {routine.tags.map(tag => (
          <Chip key={tag} style={{ marginRight: 8, marginTop: 8 }}>
            {tag}
          </Chip>
        ))}
      </TagsList>
    </Container>
  )
}
