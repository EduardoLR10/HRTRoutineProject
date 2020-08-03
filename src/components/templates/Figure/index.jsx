import React from 'react';
import { ScrollView } from 'react-native'
import { SFigure, SImage, TopLabel, BottomLabel } from './styles'

export default class Figure extends React.Component {

  render = () =>
    <SFigure>
      <TopLabel>{this.props.top_label}</TopLabel>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{alignContent: 'center'}}>
        <SImage source={this.props.source} />
      </ScrollView>
      <BottomLabel>{this.props.bottom_label}</BottomLabel>
    </SFigure>

}