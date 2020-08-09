import React, { Context } from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import emitter from 'tiny-emitter/instance'
import styles from './styles'
import P from '../Paragraph'

export default class Routine extends React.Component {

  render = () =>
    <ScrollView style={styles.routine}>
      {this.props.children}
      <P>Rotina escrita por {this.props.authors}</P>
    </ScrollView>

}