import React from 'react';
import styled from 'styled-components'

const SFigure = styled.View`
`

const SImage = styled.Image`
`

const Label = styled.Text`
`

export default class Figure extends React.Component {

  render = () =>
    <SFigure>
      <SImage source={this.props.source} />
      <Label>{this.props.label}</Label>
    </SFigure>

}