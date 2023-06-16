import React from 'react'
import { View } from 'react-native'
import { H2 } from '../../../shared/typography'

export interface SectionProps {
  title: React.ReactNode
  children?: React.ReactNode
}

export function Section({ title, children }: SectionProps): JSX.Element {
  return (
    <View style={{ borderRadius: 16, marginBottom: 32, padding: 8 }}>
      <H2 style={{ marginBottom: 16, borderBottomWidth: 2 }}>{title}</H2>
      {children}
    </View>
  )
}
