import React from 'react'
import { View, ViewStyle } from 'react-native'
import Category from '../../../../models/Category'
import Routine from '../../../../models/Routine'
import Gap from '../../../shared/Gap'
import RoutineItem from '../../../shared/RoutineItem'
import { H2 } from '../../../shared/typography'

export interface RoutinesSectionProps {
  routines: Routine[]
  selectedCategory: Category | null
  style?: ViewStyle
}
export default function RoutinesSection({
  routines,
  selectedCategory,
  style
}: RoutinesSectionProps): JSX.Element {
  return (
    <View style={{ paddingHorizontal: 4, ...style }}>
      <H2 style={{ marginBottom: 16 }}>Rotinas Pediátricas</H2>
      {routines.map(routine => (
        <React.Fragment key={routine.id}>
          <RoutineItem routine={routine} selectedCategory={selectedCategory} />
          <Gap height={8} />
        </React.Fragment>
      ))}
    </View>
  )
}
