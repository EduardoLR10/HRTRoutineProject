import { useRoute } from '@react-navigation/native'
import React, { useContext } from 'react'
import { TouchableRipple } from 'react-native-paper'
import { useTheme } from 'styled-components/native'
import { RoutineScreenParams } from '..'
import RoutinesContext from '../../../contexts/RoutinesContext'
import ListItem from '../../../shared/ListItem'
import Screen, { Main } from '../../../shared/Screen'
import SectionContext from '../contexts/SectionContext'

export default function SectionMenu(): JSX.Element {
  const theme = useTheme()

  const { routineId } = useRoute().params as RoutineScreenParams
  const { routines } = useContext(RoutinesContext)
  const routine = routines[routineId]

  const { sectionIdx, setSectionIdx } = useContext(SectionContext)

  return (
    <Screen>
      <Main
        style={{
          backgroundColor: theme.color.surface,
          marginLeft: 4,
          borderRightWidth: 4,
          borderRightColor: theme.color.primaryVariant
        }}
      >
        {routine.sections.map((section, idx) => (
          <TouchableRipple
            key={section}
            style={{
              backgroundColor:
                sectionIdx === idx ? theme.color.primaryVariant : undefined
            }}
            onPress={() => setSectionIdx(idx)}
          >
            <ListItem
              color={
                sectionIdx === idx
                  ? theme.color.onPrimary
                  : theme.color.onSurface
              }
              numberOfLines={0}
            >
              {section}
            </ListItem>
          </TouchableRipple>
        ))}
      </Main>
    </Screen>
  )
}
