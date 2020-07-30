import React from 'react'
import styled from 'styled-components'
import Title from '../Title'

const SSubsubsection  = styled.View`
`

export default class Subsubsection extends React.Component {

  render = () =>
    <SSubsubsection>
      <Title>{this.props.title}</Title>
      {this.props.children}
    </SSubsubsection>
}
