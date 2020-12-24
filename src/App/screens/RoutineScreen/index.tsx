import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useRoute } from '@react-navigation/native'
import Screen, { Main } from '../../shared/Screen'
import Appbar from './components/Appbar'
import RoutineHeader from './components/RoutineHeader'
import RoutinesContext from '../../contexts/RoutinesContext'
import UserContext from '../../contexts/UserContext'
import { WhitePortal } from 'react-native-portal'

export interface RoutineScreenParams {
  routineId: string
}

const Drawer = createDrawerNavigator()

export default function RoutineScreen(): JSX.Element {
  const { routineId } = useRoute().params as RoutineScreenParams
  const { routines } = React.useContext(RoutinesContext)
  const routine = routines[routineId]
  const Content = routine.Content

  const { pushRoutineHistory } = React.useContext(UserContext)
  React.useEffect(() => pushRoutineHistory(routine), [])

  return (
    <Screen>
      <Appbar routine={routine} />
      <Main>
        <RoutineHeader routine={routine} style={{ marginBottom: 32 }} />
        <routine.Content />
      </Main>
      <WhitePortal name="figureModal" />
    </Screen>
  )
}
