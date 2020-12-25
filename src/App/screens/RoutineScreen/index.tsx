import React from 'react'
import { Animated } from 'react-native'
import { useRoute } from '@react-navigation/native'
import Screen, { Main } from '../../shared/Screen'
import Appbar from './components/Appbar'
import RoutineHeader from './components/RoutineHeader'
import RoutinesContext from '../../contexts/RoutinesContext'
import UserContext from '../../contexts/UserContext'
import { WhitePortal } from 'react-native-portal'
import SideMenu from 'react-native-side-menu'

import { Paragraph } from '../../shared/typography'

export interface RoutineScreenParams {
  routineId: string
}
export default function RoutineScreen(): JSX.Element {
  const { routineId } = useRoute().params as RoutineScreenParams
  const { routines } = React.useContext(RoutinesContext)
  const routine = routines[routineId]

  // Register user access in history.
  const { pushRoutineHistory } = React.useContext(UserContext)
  React.useEffect(() => pushRoutineHistory(routine), [])

  const [isMenuOpened, setIsMenuOpened] = React.useState(false)

  function Menu() {
    return (
      <Screen>
        <Main>
          <Paragraph>Olá</Paragraph>
        </Main>
      </Screen>
    )
  }

  return (
    <SideMenu
      menu={<Menu />}
      isOpen={isMenuOpened}
      onChange={setIsMenuOpened}
      animationFunction={(prop, value) =>
        Animated.spring(prop, {
          toValue: value,
          friction: 8,
          useNativeDriver: true
        })
      }
    >
      <Screen>
        <Appbar routine={routine} onOpenMenu={() => setIsMenuOpened(true)} />
        <Main>
          <RoutineHeader routine={routine} style={{ marginBottom: 32 }} />
          <routine.Content />
        </Main>
        <WhitePortal name="figureModal" />
      </Screen>
    </SideMenu>
  )
}
