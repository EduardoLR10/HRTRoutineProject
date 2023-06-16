import React from 'react'
import { View } from 'react-native'
import { H3 } from '../../../shared/typography'

export interface SubsectionProps {
  title: React.ReactNode
  children?: React.ReactNode
}

export function Subsection({ title, children }: SubsectionProps): JSX.Element {
  return (
    <View>
      <H3 style={{ marginVertical: 8 }}>{title}</H3>
      {children}
    </View>
  )
}
