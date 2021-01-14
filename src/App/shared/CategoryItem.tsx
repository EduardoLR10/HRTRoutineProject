import { HeaderBackground } from '@react-navigation/stack'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { TouchableRipple } from 'react-native-paper'
import styled, { useTheme } from 'styled-components/native'
import Category from '../../models/Category'
import { Subtitle1 } from './../shared/typography'

const Background = styled(LinearGradient)<{ selected: boolean }>`
  width: 152px;
  height: 76px;
  border-radius: 8px;
  box-shadow: ${props => props.theme.elevation[1]};
  opacity: ${props => (props.selected ? 1 : 0.25)};
  overflow: hidden;
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
  const theme = useTheme()
  return (
    <Background
      selected={selected}
      colors={[
        `hsl(${category.hueTheme}, 100%, 35%)`,
        `hsl(${category.hueTheme}, 100%, 50%)`
      ]}
      start={[0, 0]}
      end={[1, 0]}
    >
      <TouchableRipple style={{ flexGrow: 1, padding: 8 }} onPress={onPress}>
        <Subtitle1 color={theme.color.onPrimary}>{category.name}</Subtitle1>
      </TouchableRipple>
    </Background>
  )
}
