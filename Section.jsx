import React from 'react'
import {Text} from 'react-native'
import styled from 'styled-components'
import {Title} from './textComponents'

const SSection = styled.View`
`

export default class Section extends React.Component {

  render = () =>
    <SSection>
      <Title>{this.props.title}</Title>
      {this.props.children}
    </SSection>
}