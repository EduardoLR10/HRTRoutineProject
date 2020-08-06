import React from 'react'
import { Text, View } from 'react-native'

export default class Subsection extends React.Component {

  render = () =>
    <View>
      <Text style={{ fontSize: 18, color: 'blue' }}>{this.props.title}</Text>
      {this.props.children}
    </View >
}