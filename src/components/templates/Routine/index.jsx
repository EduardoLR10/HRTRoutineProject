import React from 'react'
import styled from 'styled-components/native'
import Title from '../Title'
import P from '../Paragraph'
import collorPallete from '../../../assets/collorPallete'

const SRoutine = styled.ScrollView`
  background-color: ${collorPallete.white};
  padding: 0px 4px;
`

export default class Routine extends React.Component {

  render = () =>
    <SRoutine>
      <Title>{this.props.title}</Title>
      {this.props.children}
      <P>Rotina escrita por {this.props.authors}</P>
    </SRoutine>

}