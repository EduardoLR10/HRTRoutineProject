import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

const Background = styled(SafeAreaView)`
  flex: 1;
  background: ${props => props.theme.color.background};
`

export interface ScreenProps {
  children?: React.ReactNode
}

export function Screen({ children }: ScreenProps): JSX.Element {
  return <Background>{children}</Background>
}
