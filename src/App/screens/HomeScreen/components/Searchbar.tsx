import React from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styled, { useTheme } from 'styled-components/native'
import Icon from '../../../shared/Icon'

const Container = styled.View`
  box-shadow: ${props => props.theme.elevation[3]};
  border-radius: 8px;
  height: 40px;
  padding: 4px 8px;
  background: ${props => props.theme.color.surface};
  flex-direction: row;
  align-items: center;
`

export interface SearchbarProps extends TextInputProps {
  onEnterPress?: () => void
}

export default function Searchbar({
  value,
  onChangeText,
  returnKeyType = 'search',
  ...textProps
}: SearchbarProps): JSX.Element {
  const theme = useTheme()

  return (
    <Container>
      <Icon
        name="search"
        size={24}
        color={theme.color.onSurface}
        style={{ marginRight: 8 }}
      />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        returnKeyType={returnKeyType}
        style={{ flex: 1 }}
        {...textProps}
      />
      {value !== '' && (
        <TouchableOpacity onPress={() => onChangeText?.('')}>
          <Icon name="clear" size={24} color={theme.color.onSurface} />
        </TouchableOpacity>
      )}
    </Container>
  )
}
