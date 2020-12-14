import React from 'react'
import { View } from 'react-native'
import { Screen, Main } from '../../shared/Screen'
import BottomNav from '../../shared/BottomNav'
import { H1 } from '../../shared/typography'
import RoutinesContext from '../../contexts/RoutinesContext'
import RoutineItem from '../../shared/RoutineItem'

export default function FavoritesScreen(): JSX.Element {
  const { routines } = React.useContext(RoutinesContext)
  return (
    <Screen>
      <Main
        contentContainerStyle={{ paddingVertical: 16, paddingHorizontal: 4 }}
      >
        <H1 style={{ marginBottom: 16 }}>Seus Favoritos</H1>
        <View>
          {Object.values(routines).map(routine => (
            <RoutineItem
              key={routine.id}
              routine={routine}
              style={{ marginBottom: 8 }}
            />
          ))}
        </View>
      </Main>
      <BottomNav />
    </Screen>
  )
}
