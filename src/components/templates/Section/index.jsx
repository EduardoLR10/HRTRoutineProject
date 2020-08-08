import React from 'react'
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
}