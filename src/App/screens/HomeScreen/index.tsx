import React from 'react'
import { Screen } from '../../shared/Screen'
import { Text } from 'react-native'
import BottomNav from '../../shared/BottomNav'

export default function HomeScreen(): JSX.Element {
  return (
    <Screen>
      <Text style={{ flex: 1 }}>Home</Text>
      <BottomNav />
    </Screen>
  )
}
