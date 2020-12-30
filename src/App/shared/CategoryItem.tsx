import React from 'react'
import { TouchableRipple } from 'react-native-paper'
import styled from 'styled-components/native'
import Category from '../../models/Category'
import { Subtitle1 } from './../shared/typography'

const Container = styled(TouchableRipple)<{ hue: number; selected: boolean }>`
  width: 152px;
  height: 76px;
  border-radius: 8px;
  padding: 8px;
  background-color: hsl(${props => props.hue}, 100%, 80%);
  box-shadow: ${props => props.theme.elevation[1]};
  opacity: ${props => (props.selected ? 1 : 0.1)};
`
export interface CategoryItemProps {
  category: Category
  selected: boolean
  onPress?: () => void
}

export default function CategoryItem({
  category,
  onPress,
  selected
}: CategoryItemProps): JSX.Element {
  return (
    <Container hue={category.hueTheme} onPress={onPress} selected={selected}>
      <Subtitle1>{category.name}</Subtitle1>
    </Container>
  )
}
