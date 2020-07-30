import React from 'react'
import styled from 'styled-components'
import Title from '../Title'

const SSubsection = styled.View`
`

export default class Subsection extends React.Component {

  render = () =>
    <SSubsection>
      <Title>{this.props.title}</Title>
      {this.props.children}
    </SSubsection>
}