/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, { useContext } from 'react'
import { View } from 'react-native'
import SectionContext from '../App/screens/RoutineScreen/contexts/SectionContext'

export type Routine = {
  id: string
  name: string
  categories: string[]
  authors: string[]
  tags: string[]
  Content: () => JSX.Element
  sections: string[]
}
export default Routine

export interface RoutineContentProps {
  id: string
  name: string
  categories: string[]
  authors: string[]
  tags: string[]
  children?: JSX.Element | JSX.Element[]
}
export function RoutineContent({ children }: RoutineContentProps): JSX.Element {
  const { sectionIdx } = useContext(SectionContext)
  const section = children.filter
    ? children.filter((_, idx) => sectionIdx === idx)
    : children

  return <View style={{ paddingHorizontal: 4 }}>{section}</View>
}

export function contentToRoutine(Content: () => JSX.Element): Routine {
  const elementContent = Content()
  const { id, name, categories, authors, tags } = elementContent.props

  // Get section names
  let sections: string[] = []
  if (elementContent.props.children.map) {
    // If there are multiple sections
    sections = elementContent.props.children.map(
      (child: any) => child.props.title
    )
  } else if (elementContent.props.children.props.title) {
    // If there is only one section
    sections = [elementContent.props.children.props.title]
  }

  return { id, name, categories, authors, tags, Content, sections }
}
