import React from 'react'
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons'

export type IconName = 'list' | 'star' | 'info' | 'summary'

export interface IconProps {
  name: IconName
  size?: number | undefined
  color?: string | undefined
}

export default function Icon({ name, size, color }: IconProps): JSX.Element {
  const materialName = {
    list: 'list',
    star: 'star',
    info: 'info',
    summary: 'view-list',
    back: 'arrow_back'
  }[name]

  return <MaterialIcons name={materialName} size={size} color={color} />
}
