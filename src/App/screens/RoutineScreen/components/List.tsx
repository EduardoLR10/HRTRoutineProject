/* eslint-disable multiline-ternary */
import React from 'react'
import { View } from 'react-native'
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons'

import { Paragraph } from '../../../shared/typography'
import styled, { useTheme } from 'styled-components'

const ListContext = React.createContext<{ depth: number }>({ depth: -1 })

export interface ListProps {
  children: React.ReactNode
}

export function List({ children }: ListProps): JSX.Element {
  const { depth } = React.useContext(ListContext)

  return (
    <ListContext.Provider value={{ depth: depth + 1 }}>
      <View style={{ marginBottom: 8, paddingLeft: depth < 0 ? 0 : 16 }}>
        {children}
      </View>
    </ListContext.Provider>
  )
}

/// ////////////////////////////////////////////////////////////////////////////////////////////////

const Text = styled(Paragraph)`
  margin: 0px 0px 8px 0px;
  flex: 1;
`

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
      <Text>{children}</Text>
    </View>
  )
}
