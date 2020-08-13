import React from 'react'
import { Text } from 'react-native'

export default class HeaderTitle extends React.Component {

  render = () =>
    <Text style={{ fontSize: 20, color: 'red' }}>{this.props.title}</Text>
}