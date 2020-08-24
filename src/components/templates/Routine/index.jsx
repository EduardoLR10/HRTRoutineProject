import React from 'react'
import { ScrollView, Text } from 'react-native'
import styles from './styles'
import P from '../Paragraph'

export default class Routine extends React.Component {

  render = () =>
    <ScrollView style={styles.routine}>
      {this.props.children}
      <Text style={styles.authorText}>Rotina escrita por <Text style={styles.authorName}>{this.props.authors}</Text></Text>
    </ScrollView>

}