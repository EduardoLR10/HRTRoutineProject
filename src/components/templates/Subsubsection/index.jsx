import React from 'react'
import { Text, View } from 'react-native'

export default class Subsubsection extends React.Component {

  render = () =>
    <View>
      <Text style={{ fontSize: 16, color: 'blue', fontWeight:"100"}}>{this.props.title}</Text>
      {this.props.children}
    </View >
}