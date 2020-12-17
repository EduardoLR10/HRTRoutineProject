import React from 'react'
import Surface from '../../../shared/Surface'
import { H2 } from '../../../shared/typography'

export interface SectionProps {
  title: string
  children?: React.ReactNode
}

export default function Section({
  title,
  children
}: SectionProps): JSX.Element {
  return (
    <Surface style={{ borderRadius: 16, marginBottom: 32 }}>
      <H2 style={{ marginBottom: 16 }}>{title}</H2>
      {children}
    </Surface>
  )
}
