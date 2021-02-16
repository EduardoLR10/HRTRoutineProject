import React from 'react'
import { Body, Bold } from '../../../shared/typography'

export interface ReferenceProps {
  idx: number
  body: string
}

export default function Reference({
  idx,
  body
}: // children
ReferenceProps): JSX.Element {
  return (
    <Body style={{ marginBottom: 8 }}>
      <Bold>{idx}. </Bold> {body}
    </Body>
  )
}
