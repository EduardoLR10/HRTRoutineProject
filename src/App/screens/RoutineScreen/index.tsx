import React from 'react'
import { Animated, ScrollView, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import Screen, { Main } from '../../shared/Screen'
import RoutinesContext from '../../contexts/RoutinesContext'
import UserContext from '../../contexts/UserContext'
import { WhitePortal } from 'react-native-portal'
import SideMenu from 'react-native-side-menu'
import Appbar from './components/Appbar'
import RoutineHeader from './components/RoutineHeader'
import { SectionProvider } from './contexts/SectionContext'
import Button from '../../shared/Button'
import SectionMenu from './components/SectionMenu'

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
  const [sectionIdx, _setSectionIdx] = React.useState(0)

  const refScroll = React.useRef<ScrollView>(null)

  function setSectionIdx(sectionIdx: number): void {
    _setSectionIdx(sectionIdx)
    setIsMenuOpened(false)
    refScroll.current?.scrollTo({ y: 0, animated: true })
  }

  return (
    <SectionProvider sectionIdx={sectionIdx} setSectionIdx={setSectionIdx}>
      <SideMenu
        menu={
          <SectionMenu
            routine={routine}
            sectionIdx={sectionIdx}
            onSectionIdxChange={setSectionIdx}
          />
        }
        menuPosition="left"
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
          <Main ref={refScroll}>
            <RoutineHeader routine={routine} style={{ marginBottom: 32 }} />
            <routine.Content />
            <View
              style={{
                marginBottom: 32,
                flexDirection: 'row',
                paddingHorizontal: 8,
                justifyContent: 'space-between'
              }}
            >
              <Button
                disabled={sectionIdx === 0}
                onPress={() => setSectionIdx(sectionIdx - 1)}
              >
                Anterior
              </Button>
              <Button
                disabled={sectionIdx === routine.sections.length - 1}
                onPress={() => setSectionIdx(sectionIdx + 1)}
              >
                Próxima
              </Button>
            </View>
          </Main>
          <WhitePortal name="figureModal" />
        </Screen>
      </SideMenu>
    </SectionProvider>
  )
}
