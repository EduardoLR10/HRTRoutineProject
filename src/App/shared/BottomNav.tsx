import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import styled, { useTheme } from 'styled-components/native'
import Icon, { IconName } from './Icon'
import { Caption as BaseCaption } from './typography'

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.color.primaryVariant};
  box-shadow: ${props => props.theme.elevation[4]};
`

const Button = styled.TouchableOpacity<{ active?: boolean }>`
  flex: 1 1 0;
  padding: 4px 12px;
  max-width: 168px;
  opacity: ${props => (props.active ? 1 : 0.5)};
  align-items: center;
  justify-content: center;
`

const Caption = styled(BaseCaption)`
  color: ${props => props.theme.color.onPrimary};
`

export default function BottomNav(): JSX.Element {
  const theme = useTheme()

  const route = useRoute()
  const navigation = useNavigation()
  const screens: { name: string; label: string; icon: IconName }[] = [
    { name: 'Home', label: 'Rotinas', icon: 'list' },
    { name: 'Favorites', label: 'Favoritos', icon: 'star' },
    { name: 'About', label: 'Informações', icon: 'info' }
  ]

  return (
    <Container>
      {screens.map(screen => (
        <Button
          key={screen.name}
          active={route.name === screen.name}
          onPress={() => navigation.navigate(screen.name)}
        >
          <Icon name={screen.icon} color={theme.color.onPrimary} size={24} />
          {route.name === screen.name && <Caption>{screen.label}</Caption>}
        </Button>
      ))}
    </Container>
  )
}
