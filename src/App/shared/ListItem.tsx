import React from 'react'
import { ImageSourcePropType, StyleProp, ViewProps } from 'react-native'
import styled from 'styled-components/native'
import { Subtitle1 } from './typography'

const Container = styled.View`
  padding: 16px;
  flex-direction: row;
  align-items: center;
`

const Avatar = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 45px;
`

export interface ListItemProps {
  avatar?: ImageSourcePropType
  children: string
  right?: React.ReactNode
  style?: StyleProp<ViewProps>
  color?: string
  numberOfLines?: number
}

export default function ListItem({
  avatar,
  children,
  right,
  style,
  color,
  numberOfLines = 1
}: ListItemProps): JSX.Element {
  return (
    <Container style={style}>
      {avatar && <Avatar source={avatar} style={{ marginRight: 16 }} />}
      <Subtitle1
        style={{ marginRight: 16, flex: 1 }}
        numberOfLines={numberOfLines}
        color={color}
      >
        {children}
      </Subtitle1>
      {right}
    </Container>
  )
}
