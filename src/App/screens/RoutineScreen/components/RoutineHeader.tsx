import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import styled from 'styled-components/native'
import CategoriesContext from '../../../contexts/CategoriesContext'
import Routine from '../../../contexts/RoutinesContext/Routine'
import Chip from '../../../shared/Chip'
import { H1, Overline } from '../../../shared/typography'

const Container = styled.View`
  padding: 16px 8px;
  background: ${props => props.theme.color.surface};
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
  const category = React.useContext(CategoriesContext).categories[
    routine.category
  ]

  return (
    <Container style={style}>
      <TagsList style={{ marginBottom: 8 }}>
        {routine.tags.map(tag => (
          <Chip key={tag} style={{ marginRight: 8, marginBottom: 8 }}>
            {tag}
          </Chip>
        ))}
      </TagsList>
      <Overline color={`hsl(${category.hueTheme}, 100%, 60%)`}>
        {category.name}
      </Overline>
      <H1>{routine.name}</H1>
    </Container>
  )
}
