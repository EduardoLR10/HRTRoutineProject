import React from 'react'
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons'

export type IconName = 'list' | 'star' | 'info' | 'summary' | 'library'

export interface IconProps {
  name: IconName
  size?: number | undefined
  color?: string | undefined
}

export default function Icon({ name, size, color }: IconProps): JSX.Element {
  return {
    list: <MaterialIcons name="list" size={size} color={color} />,
    star: <MaterialIcons name="star" size={size} color={color} />,
    info: <MaterialIcons name="info" size={size} color={color} />,
    summary: <MaterialIcons name="view-list" size={size} color={color} />,
    back: <MaterialIcons name="arrow_back" size={size} color={color} />,
    library: <MaterialIcons name="library-books" size={size} color={color} />
  }[name]
}
