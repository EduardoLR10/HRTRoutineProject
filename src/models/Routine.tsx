import styled from 'styled-components/native'

export default class Routine {
  public readonly id: string
  public readonly name: string
  public readonly category: string
  public readonly authors: string[]
  public readonly tags: string[]

  private _sectionsNames: undefined | string[]

  constructor(public Content: JSX.Element) {
    this.id = Content.props.id
    this.name = Content.props.name
    this.category = Content.props.category
    this.authors = Content.props.authors
    this.tags = Content.props.tags
  }

  get sectionNames(): string[] {
    if (this._sectionsNames) {
      this._sectionsNames = this.Content.props.children.map(
        (section: any) => section.props.title
      )
    }
    return this._sectionsNames as string[]
  }
}

export const RoutineContent = styled.View<{
  id: string
  name: string
  category: string
  authors: string[]
  tags: string[]
}>`
  padding: 0px 4px;
`
