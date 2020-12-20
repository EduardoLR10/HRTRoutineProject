import React from 'react'
import { useTheme } from 'styled-components/native'
import { TouchableOpacity, View } from 'react-native'
import * as Linking from 'expo-linking'
import Icon from '../../../shared/Icon'
import ListItem from '../../../shared/ListItem'
import Surface from '../../../shared/Surface'
import { Caption, H2 } from '../../../shared/typography'
import avatarEduardoLemos from './images/EduardoLemos.jpg'
import avatarLuigiMinardi from './images/LuigiMinardi.png'

function GithubIcon({ url }: { url: string }) {
  const theme = useTheme()

  return (
    <TouchableOpacity onPress={() => Linking.openURL(url)}>
      <Icon name="github" size={24} color={theme.color.onSurface} />
    </TouchableOpacity>
  )
}

export default function DevelopersSection(): JSX.Element {
  const developers = [
    {
      name: 'Eduardo Lemos Rocha',
      avatar: avatarEduardoLemos,
      githubUrl: 'https://github.com/EduardoLR10'
    },
    {
      name: 'Luigi Minardi Ferreira Maia',
      avatar: avatarLuigiMinardi,
      githubUrl: 'https://github.com/luigiminardim'
    }
  ]
  return (
    <Surface>
      <H2>Mantido por</H2>
      <View>
        <Caption style={{ opacity: 0.5, textAlign: 'right' }}>
          Ver GitHub
        </Caption>
        {developers.map(developer => (
          <ListItem
            key={developer.name}
            avatar={developer.avatar}
            right={<GithubIcon url={developer.githubUrl} />}
          >
            {developer.name}
          </ListItem>
        ))}
      </View>
    </Surface>
  )
}
