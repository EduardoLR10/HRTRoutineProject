import React from 'react'
import { useTheme } from 'styled-components'
import { Animated } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { TouchableRipple } from 'react-native-paper'
import Screen, { Main } from '../../shared/Screen'
import RoutinesContext from '../../contexts/RoutinesContext'
import UserContext from '../../contexts/UserContext'
import { WhitePortal } from 'react-native-portal'
import SideMenu from 'react-native-side-menu'
import ListItem from '../../shared/ListItem'
import Appbar from './components/Appbar'
import RoutineHeader from './components/RoutineHeader'
import { SectionProvider } from './contexts/SectionContext'

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
  const [sectionIdx, setSectionIdx] = React.useState(0)

  function Menu() {
    const theme = useTheme()

    return (
      <Screen>
        <Main
          style={{
            backgroundColor: theme.color.surface,
            marginLeft: 4
          }}
        >
          {routine.sections.map((section, idx) => (
            <TouchableRipple key={section} onPress={() => setSectionIdx(idx)}>
              <ListItem color={theme.color.onSurface}>{section}</ListItem>
            </TouchableRipple>
          ))}
        </Main>
      </Screen>
    )
  }

  return (
    <SectionProvider sectionIdx={sectionIdx} setSectionIdx={setSectionIdx}>
      <SideMenu
        menu={<Menu />}
        menuPosition="right"
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
    </SectionProvider>
  )
}
