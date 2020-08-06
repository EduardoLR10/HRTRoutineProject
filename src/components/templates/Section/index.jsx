import React from 'react'
import { Text, View } from 'react-native'


export default class Section extends React.Component {

  render = () =>
    <View>
      <Text style={{ fontSize: 20, color: 'blue', fontWeight: 'bold'}}>{this.props.title}</Text>
      {this.props.children}
    </View >
}