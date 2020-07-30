import React from 'react'
import styled from 'styled-components'
import Title from '../Title'

const SSection = styled.View`
`

export default class Section extends React.Component {

  render = () =>
    <SSection>
      <Title>{this.props.title}</Title>
      {this.props.children}
    </SSection>
}