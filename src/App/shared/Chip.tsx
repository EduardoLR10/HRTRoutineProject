import React from 'react'
import styled from 'styled-components/native'
import { Body } from './typography'

const Container = styled.View<{ avatar: boolean }>`
  height: 32px;
  border-radius: 32px;
  padding: ${props => (props.avatar ? '0px 8px 0px 4px' : '0px 8px')};
  background: ${props => props.theme.color.onSurface}1E;
  flex-direction: row;
  align-items: center;
`

const Avatar = styled.Image`
  height: 24px;
  width: 24px;
  border-radius: 32px;
`

const Text = styled(Body)`
  color: ${props => props.theme.color.onSurface};
`

export interface ChipProps {
  children: string
  avatar: string
}

export default function Chip({ children, avatar }: ChipProps): JSX.Element {
  return (
    <Container avatar={avatar}>
      <Avatar source={avatar} style={{ marginRight: 8 }} />
      <Text>{children}</Text>
    </Container>
  )
}
