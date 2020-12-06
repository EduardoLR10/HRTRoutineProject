import React from 'react'
import * as Linking from 'expo-linking'
import { useTheme } from 'styled-components/native'
import AuthorsContext from '../../../contexts/AuthorsContext'
import Surface from '../../../shared/Surface'
import { Caption, H2 } from '../../../shared/typography'
import ListItem from '../../../shared/ListItem'
import { View, TouchableOpacity } from 'react-native'
import Icon from '../../../shared/Icon'

function CurriculumIcon({ url }: { url: string }) {
  const theme = useTheme()
  return (
    <TouchableOpacity onPress={() => Linking.openURL(url)}>
      <Icon name="library" color={theme.color.onSurface} size={24} />
    </TouchableOpacity>
  )
}

export default function PreceptorsSection(): JSX.Element {
  const { authors } = React.useContext(AuthorsContext)

  return (
    <Surface>
      <H2 style={{ marginBottom: 16 }}>Preceptores</H2>
      <View>
        <Caption style={{ opacity: 0.5, textAlign: 'right' }}>
          Ver currículo
        </Caption>
        {Object.values(authors).map(author => (
          <ListItem
            key={author.id}
            avatar={author.avatar}
            right={<CurriculumIcon url={author.curriculumLink} />}
          >
            {author.name}
          </ListItem>
        ))}
      </View>
    </Surface>
  )
}
