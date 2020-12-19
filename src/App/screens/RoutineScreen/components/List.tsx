/* eslint-disable multiline-ternary */
import React from 'react'
import { View } from 'react-native'
import {
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
  Octicons
} from '@expo/vector-icons'

import { Paragraph } from '../../../shared/typography'
import { useTheme } from 'styled-components'

const ListContext = React.createContext<{ depth: number }>({ depth: -1 })

export interface ListProps {
  children: React.ReactNode
}

export function List({ children }: ListProps): JSX.Element {
  const { depth } = React.useContext(ListContext)

  return (
    <ListContext.Provider value={{ depth: depth + 1 }}>
      <View style={{ paddingLeft: depth < 0 ? 0 : 16 }}>{children}</View>
    </ListContext.Provider>
  )
}

export interface LItemProps {
  children?: React.ReactNode
}

export function LItem({ children }: LItemProps): JSX.Element {
  const { depth } = React.useContext(ListContext)
  const theme = useTheme()

  const Icon =
    depth === 0 ? (
      <Octicons
        name="primitive-dot"
        size={8}
        color={theme.color.onSurface}
        style={{ margin: 8 }}
      />
    ) : depth === 1 ? (
      <MaterialCommunityIcons
        name="radiobox-blank"
        size={8}
        color={theme.color.onSurface}
        style={{ margin: 8 }}
      />
    ) : (
      <MaterialCommunityIcons
        name="checkbox-blank-outline"
        size={8}
        color={theme.color.onSurface}
        style={{ margin: 8 }}
      />
    )

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start'
      }}
    >
      {Icon}
      <Paragraph style={{ flex: 1, margin: 0 }}>{children}</Paragraph>
    </View>
  )
}
