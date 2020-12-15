import React from 'react'
import { useNavigation } from '@react-navigation/native'
import styled, { useTheme } from 'styled-components/native'
import Icon from '../../../shared/Icon'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Container = styled.View`
  box-shadow: ${props => props.theme.elevation[4]};
  padding: 16px;
  background: ${props => props.theme.color.primary};
  flex-direction: row;
`

const ActionsContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`

export default function Appbar(): JSX.Element {
  const theme = useTheme()
  const navigation = useNavigation()

  return (
    <Container>
      <TouchableOpacity onPress={navigation.goBack}>
        <Icon
          name="back"
          size={24}
          color={theme.color.onPrimary}
          style={{ marginRight: 24 }}
        />
      </TouchableOpacity>
      <ActionsContainer style={{ flex: 1 }}>
        <TouchableOpacity>
          <Icon
            name="star"
            size={24}
            color={theme.color.background}
            style={{ marginRight: 24 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="summary" size={24} color={theme.color.onPrimary} />
        </TouchableOpacity>
      </ActionsContainer>
    </Container>
  )
}
