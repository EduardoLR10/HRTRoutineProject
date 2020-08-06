import React from 'react'
import { ScrollView } from 'react-native'
import styles from './styles'
import P from '../Paragraph'

export default class Routine extends React.Component {

  render = () =>
    <ScrollView style={styles.routine}>
      {this.props.children}
      <P>Rotina escrita por {this.props.authors}</P>
    </ScrollView>

}