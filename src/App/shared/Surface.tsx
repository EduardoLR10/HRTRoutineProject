import styled from 'styled-components/native'

const Surface = styled.View`
  border-radius: ${props => props.theme.round.md};
  padding: 8px;
  background: ${props => props.theme.color.surface};
  box-shadow: ${props => props.theme.elevation[1]};
`

export default Surface
