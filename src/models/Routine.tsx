import styled from 'styled-components/native'

export type Routine = {
  id: string
  name: string
  category: string
  authors: string[]
  tags: string[]
  Content: () => JSX.Element
  sections: string[]
}
export default Routine

export interface RoutineContentProps {
  id: string
  name: string
  category: string
  authors: string[]
  tags: string[]
}
export const RoutineContent = styled.View<RoutineContentProps>`
  padding: 0px 4px;
`
export function contentToRoutine(Content: () => JSX.Element): Routine {
  const elementContent = Content()
  const { id, name, category, authors, tags } = elementContent.props

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

  return { id, name, category, authors, tags, Content, sections }
}
