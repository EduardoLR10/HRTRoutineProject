import React from 'react'
import { useRoute } from '@react-navigation/native'
import Screen, { Main } from '../../shared/Screen'
import Appbar from './components/Appbar'
import RoutineHeader from './components/RoutineHeader'
import RoutinesContext from '../../contexts/RoutinesContext'

export interface RoutineScreenParams {
  routineId: string
}

export default function RoutineScreen(): JSX.Element {
  const { routines } = React.useContext(RoutinesContext)

  const { routineId } = useRoute().params as RoutineScreenParams
  const routine = routines[routineId]
  const Content = routine.Content

  return (
    <Screen>
      <Appbar />
      <Main>
        <RoutineHeader routine={routine} style={{ marginBottom: 32 }} />
        {Content}
      </Main>
    </Screen>
  )
}
