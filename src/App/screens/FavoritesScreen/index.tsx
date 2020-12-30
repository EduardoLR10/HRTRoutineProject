import React, { useContext } from 'react'
import { View } from 'react-native'
import { Screen, Main } from '../../shared/Screen'
import BottomNav from '../../shared/BottomNav'
import { H1 } from '../../shared/typography'
import RoutineItem from '../../shared/RoutineItem'
import UserContext from '../../contexts/UserContext'

export default function FavoritesScreen(): JSX.Element {
  const { favoriteRoutines } = useContext(UserContext)

  return (
    <Screen>
      <Main
        contentContainerStyle={{ paddingVertical: 16, paddingHorizontal: 4 }}
      >
        <H1 style={{ marginBottom: 16 }}>Seus Favoritos</H1>
        <View>
          {favoriteRoutines.map(routine => (
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
