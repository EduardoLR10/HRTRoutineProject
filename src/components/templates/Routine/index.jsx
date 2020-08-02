import React from 'react'
import styled from 'styled-components/native'
import Title from '../Title'
import P from '../Paragraph'

const SRoutine = styled.ScrollView`
`

export default class Routine extends React.Component {

  render = () =>
    <SRoutine>
      <Title>{this.props.title}</Title>
      {this.props.children}
      <P>Rotina escrita por {this.props.authors}</P>
    </SRoutine>

}