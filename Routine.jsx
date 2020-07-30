import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { Title } from './textComponents'

const SRoutine = styled.ScrollView`
  margin-top: 20px;
  margin-bottom: 0;
`

export default class Routine extends React.Component {

  render = () =>
    <SRoutine>
      <Title>{this.props.title}</Title>
      {this.props.children}
    </SRoutine>

}