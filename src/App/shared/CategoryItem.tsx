import React from 'react'
import styled from 'styled-components/native'
import Category from '../../models/Category'
import { Subtitle1 } from './../shared/typography'

const Container = styled.TouchableOpacity<{ hue: number }>`
  width: 152px;
  height: 76px;
  border-radius: 8px;
  padding: 8px;
  background-color: hsl(${props => props.hue}, 100%, 80%);
  box-shadow: ${props => props.theme.elevation[1]};
`
export interface CategoryItemProps {
  category: Category
  onPress?: () => void
}

export default function CategoryItem({
  category,
  onPress
}: CategoryItemProps): JSX.Element {
  return (
    <Container hue={category.hueTheme} onPress={onPress}>
      <Subtitle1>{category.name}</Subtitle1>
    </Container>
  )
}
