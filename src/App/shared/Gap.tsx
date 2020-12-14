import styled from 'styled-components/native'

const Gap = styled.View<{ width?: number; height?: number }>`
  height: ${props => props.height || 0}px;
  width: ${props => props.width || 0}px;
`
Gap.displayName = 'Gap'
export default Gap
