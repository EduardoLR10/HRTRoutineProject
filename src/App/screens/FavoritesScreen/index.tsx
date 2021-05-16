import React, { useContext } from 'react'
import { View } from 'react-native'
import { Screen, Main } from '../../shared/Screen'
import BottomNav from '../../shared/BottomNav'
import { H1 } from '../../shared/typography'
import RoutineItem from '../../shared/RoutineItem'
import UserContext from '../../contexts/UserContext'
import Empty from '../../shared/Empty'
import { FlatList } from 'react-native-gesture-handler'

export default function FavoritesScreen(): JSX.Element {
  const { favoriteRoutines } = useContext(UserContext)

  return (
    <Screen>
      <FlatList
        ListHeaderComponent={
          <H1 style={{ marginBottom: 16 }}>Seus Favoritos</H1>
        }
        data={favoriteRoutines}
        renderItem={({ item }) => (
          <RoutineItem routine={item} style={{ marginBottom: 8 }} />
        )}
        ListEmptyComponent={
          <Empty message="Nenhuma rotina favoritada." style={{ padding: 32 }} />
        }
      />
      <BottomNav />
    </Screen>
  )
}
