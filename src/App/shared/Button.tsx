import React from 'react'
import { TouchableRipple } from 'react-native-paper'
import styled, { useTheme } from 'styled-components/native'
import { Button as ButtonTxt } from './typography'

const Container = styled(TouchableRipple)<{ disabled: boolean }>`
  opacity: ${props => (props.disabled ? 0.3 : 1)};
  height: 36px;
  padding: 0px 16px;
  border-radius: 8px;
  background-color: ${props => props.theme.color.primary};
  justify-content: center;
`

export interface ButtonProps {
  disabled?: boolean
  children?: string
  onPress?: () => void
}

export default function Button({
  disabled = false,
  children,
  onPress
}: ButtonProps): JSX.Element {
  const theme = useTheme()
  return (
    <Container disabled={disabled} onPress={onPress}>
      <ButtonTxt color={theme.color.onPrimary}>{children}</ButtonTxt>
    </Container>
  )
}
