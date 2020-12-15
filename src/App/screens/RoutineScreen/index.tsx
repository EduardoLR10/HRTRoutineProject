import React from 'react'
import { useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { H1 } from '../../shared/typography'
import Routine from '../../contexts/RoutinesContext/Routine'
import Screen, { Main } from '../../shared/Screen'
import Appbar from './components/Appbar'
import RoutineHeader from './components/RoutineHeader'

export interface RoutineScreenParams {
  routine: Routine
}

export default function RoutineScreen(): JSX.Element {
  const theme = useTheme()

  const route = useRoute()
  const { routine } = route.params as RoutineScreenParams

  return (
    <Screen>
      <Appbar />
      <Main>
        <RoutineHeader routine={routine} />
      </Main>
    </Screen>
  )
}
