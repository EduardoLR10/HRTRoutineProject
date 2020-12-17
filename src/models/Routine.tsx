import styled from 'styled-components/native'

export default class Routine {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly category: string,
    public readonly authors: string[],
    public readonly tags: string[],
    public Content: () => JSX.Element
  ) {}
}

export const RoutineContent = styled.View`
  padding: 0px 4px;
`
