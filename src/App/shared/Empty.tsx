import React from 'react'
import { View, ViewStyle } from 'react-native'
import Icon, { IconName } from './Icon'
import { Caption } from './typography'

export interface EmptyProps {
  icon?: IconName
  message?: string | React.ReactNode
  color?: string
  style?: ViewStyle
}
export default function Empty({
  icon = 'empty',
  message = 'Not founded',
  color = '#000000',
  style
}: EmptyProps): JSX.Element {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', ...style }}>
      <Icon name={icon} size={128} color={color} />
      <Caption color={color}>{message}</Caption>
    </View>
  )
}
