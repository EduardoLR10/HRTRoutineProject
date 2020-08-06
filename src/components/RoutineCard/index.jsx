import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'; Icon.loadFont()
import styles, { iconStyles } from './styles'

export default class RoutineCard extends React.Component {

  navigate = () => this.props.navigation.navigate(this.props.Routine.title)

  render = () =>
    <TouchableOpacity style={styles.container} onPress={this.navigate}>
      <Text style={styles.title}>{this.props.Routine.title}</Text>
      <Text style={styles.info}>
        <Icon name="people" {...iconStyles} /> {this.props.Routine.authors}
      </Text>
      <Text style={styles.info}>
        <Icon name="tag" {...iconStyles} /> {this.props.Routine.category}
      </Text>
    </TouchableOpacity>
}