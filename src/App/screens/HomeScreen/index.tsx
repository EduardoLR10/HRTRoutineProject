import React from 'react'
import styled from 'styled-components/native'
import Screen, { Main } from './../../shared/Screen'
import { View } from 'react-native'
import BottomNav from './../../shared/BottomNav'
import { H2 } from '../../shared/typography'
import RoutinesContext from '../../contexts/RoutinesContext'
import RoutineItem from '../../shared/RoutineItem'

const Gap = styled.View<{ width?: number; height?: number }>`
  height: ${props => props.height || 0}px;
  width: ${props => props.width || 0}px;
`

export default function HomeScreen(): JSX.Element {
  const { routines } = React.useContext(RoutinesContext)

  return (
    <Screen>
      <Main contentContainerStyle={{ paddingTop: 88, paddingHorizontal: 4 }}>
        <View style={{ marginBottom: 32 }}>
          <H2 style={{ marginBottom: 16 }}>Categorias</H2>
          <View style={{ backgroundColor: 'red', height: 76 }}></View>
        </View>
        <View>
          <H2 style={{ marginBottom: 16 }}>Rotinas Pediátricas</H2>
          {Object.values(routines).map(routine => (
            <React.Fragment key={routine.id}>
              <RoutineItem routine={routine} />
              <Gap height={8} />
            </React.Fragment>
          ))}
        </View>
      </Main>
      <BottomNav />
    </Screen>
  )
}
