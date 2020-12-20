import React from 'react'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { StyleProp, TextStyle } from 'react-native'

export type IconName =
  | 'list'
  | 'star'
  | 'info'
  | 'summary'
  | 'library'
  | 'github'
  | 'search'
  | 'clear'
  | 'back'
  | 'zoom'
  | 'unzoom'

export interface IconProps {
  name: IconName
  size?: number | undefined
  color?: string | undefined
  style?: StyleProp<TextStyle>
}

export default function Icon({
  name,
  size,
  color,
  style
}: IconProps): JSX.Element {
  return {
    list: <MaterialIcons name="list" size={size} color={color} style={style} />,
    star: <MaterialIcons name="star" size={size} color={color} style={style} />,
    info: <MaterialIcons name="info" size={size} color={color} style={style} />,
    summary: (
      <MaterialIcons name="view-list" size={size} color={color} style={style} />
    ),
    back: (
      <MaterialIcons
        name="arrow-back"
        size={size}
        color={color}
        style={style}
      />
    ),
    library: (
      <MaterialIcons
        name="library-books"
        size={size}
        color={color}
        style={style}
      />
    ),
    github: (
      <FontAwesome name="github" size={size} color={color} style={style} />
    ),
    search: (
      <MaterialIcons name="search" size={size} color={color} style={style} />
    ),
    clear: (
      <MaterialIcons name="clear" size={size} color={color} style={style} />
    ),
    zoom: (
      <MaterialIcons
        name="zoom-out-map"
        size={size}
        color={color}
        style={style}
      />
    ),
    unzoom: (
      <MaterialIcons name="close" size={size} color={color} style={style} />
    )
  }[name]
}
