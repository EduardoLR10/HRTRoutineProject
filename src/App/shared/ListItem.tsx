import React from 'react'
import { ImageSourcePropType } from 'react-native'
import styled from 'styled-components/native'
import { Subtitle1 } from './typography'

const Container = styled.View`
  padding: 16px;
  flex-direction: row;
  align-items: center;
`

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 40px;
`

export interface ListItemProps {
  avatar?: ImageSourcePropType
  children: string
  right?: React.ReactNode
}

export default function ListItem({
  avatar,
  children,
  right
}: ListItemProps): JSX.Element {
  return (
    <Container>
      {avatar && <Avatar source={avatar} style={{ marginRight: 16 }} />}
      <Subtitle1 style={{ flex: 1 }} numberOfLines={1}>
        {children}
      </Subtitle1>
      {right}
    </Container>
  )
}
