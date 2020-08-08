import React from 'react'
import { Text, View } from 'react-native'
import { List } from 'react-native-paper'
import { containerStyle } from './styles'

export default class Section extends React.Component {

  state = {
    expanded: false,
  }

  toggleExpand = () => this.setState({ expanded: !this.state.expanded })

  render = () =>
    <List.Accordion {...(containerStyle(this.props, this.state))}
      title={this.props.title} expanded={this.state.expanded} onPress={this.toggleExpand}>
      {this.props.children}
    </List.Accordion>

  render2 = () =>
    <View>
      <Text style={{ fontSize: 20, color: 'blue', fontWeight: 'bold' }}>{this.props.title}</Text>
      {this.props.children}
    </View >
}