import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

export default class Subsubsection extends React.Component {

  render = () =>
    <View style={styles.container}>
      <Text style={styles.title}>{this.props.title}</Text>
      {this.props.children}
    </View >
}