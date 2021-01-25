import React, { useContext, useEffect, useRef, useState } from 'react'
import { ScrollView, View } from 'react-native'
import {
  DrawerActions,
  useNavigation,
  useRoute
} from '@react-navigation/native'
import Screen, { Main } from '../../shared/Screen'
import RoutinesContext from '../../contexts/RoutinesContext'
import UserContext from '../../contexts/UserContext'
import { WhitePortal } from 'react-native-portal'
import Appbar from './components/Appbar'
import RoutineHeader from './components/RoutineHeader'
import SectionContext, { SectionProvider } from './contexts/SectionContext'
import Button from '../../shared/Button'
import SectionMenu from './components/SectionMenu'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useTheme } from 'styled-components/native'

const Drawer = createDrawerNavigator()

function RoutineMain(): JSX.Element {
  const theme = useTheme()
  const { routines } = useContext(RoutinesContext)
  const route = useRoute()
  const routine = routines[route.name]
  const navigation = useNavigation()
  const { sectionIdx, setSectionIdx } = useContext(SectionContext)
  const mainRef = useRef<ScrollView>(null)
  useEffect(() => mainRef.current?.scrollTo({ y: 0 }), [sectionIdx])

  return (
    <Screen style={{ backgroundColor: theme.color.surface }}>
      <Appbar
        routine={routine}
        onOpenMenu={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <Main ref={mainRef}>
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
  )
}

export interface RoutineScreenParams {
  routineId: string
}
export default function RoutineScreen(): JSX.Element {
  const { routineId } = useRoute().params as RoutineScreenParams
  const { routines } = React.useContext(RoutinesContext)
  const routine = routines[routineId]
  const navigation = useNavigation()

  // Register user access in history.
  const { pushRoutineHistory } = useContext(UserContext)
  useEffect(() => pushRoutineHistory(routine), [])

  const [sectionIdx, _setSectionIdx] = useState(0)
  function setSectionIdx(sectionIdx: number): void {
    navigation.dispatch(DrawerActions.closeDrawer())
    _setSectionIdx(sectionIdx)
  }

  return (
    <SectionProvider sectionIdx={sectionIdx} setSectionIdx={setSectionIdx}>
      <Drawer.Navigator drawerContent={props => <SectionMenu />}>
        <Drawer.Screen name={routine.id} component={RoutineMain} />
      </Drawer.Navigator>
    </SectionProvider>
  )
}
