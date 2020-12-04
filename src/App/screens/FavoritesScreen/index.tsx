import React from 'react'
import { Screen } from '../../shared/Screen'
import { Text } from 'react-native'
import BottomNav from '../../shared/BottomNav'

export default function FavoritesScreen(): JSX.Element {
  return (
    <Screen>
      <Text style={{ flex: 1 }}>Favorites</Text>
      <BottomNav />
    </Screen>
  )
}
