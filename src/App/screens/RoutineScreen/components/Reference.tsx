import React from 'react'
import { Body, Bold, Italic, Paragraph } from '../../../shared/typography'

export interface ReferenceProps {
  idx: number
  body?: string
  children?: React.ReactNode
}

export default function Reference({
  idx,
  body,
  children
}: ReferenceProps): JSX.Element {
  return (
    <Body style={{ marginBottom: 8 }}>
      <Bold>{idx}. </Bold> <Italic>{children || body}</Italic>
    </Body>
  )
}
