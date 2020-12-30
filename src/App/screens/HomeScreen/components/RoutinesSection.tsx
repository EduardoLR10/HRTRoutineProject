import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import Routine from '../../../../models/Routine'
import Gap from '../../../shared/Gap'
import RoutineItem from '../../../shared/RoutineItem'
import { H2 } from '../../../shared/typography'

export interface RoutinesSectionProps {
  routines: Routine[]
  style?: ViewStyle
}
export default function RoutinesSection({
  routines,
  style
}: RoutinesSectionProps): JSX.Element {
  return (
    <View style={{ paddingHorizontal: 4, ...style }}>
      <H2 style={{ marginBottom: 16 }}>Rotinas Pediátricas</H2>
      {routines.map(routine => (
        <React.Fragment key={routine.id}>
          <RoutineItem routine={routine} />
          <Gap height={8} />
        </React.Fragment>
      ))}
    </View>
  )
}
