import React from 'react'
import { View } from 'react-native'
import { H4 } from '../../../shared/typography'

export interface SubsubsectionProps {
  title: React.ReactNode
  children?: React.ReactNode
}

export default function Subsubsection({
  title,
  children
}: SubsubsectionProps): JSX.Element {
  return (
    <View>
      <H4 style={{ marginVertical: 8 }}>{title}</H4>
      {children}
    </View>
  )
}
