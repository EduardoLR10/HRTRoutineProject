import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

export default class Paragraph extends React.Component {

  render = () =>
    <Text style={styles.paragraph}>
      {this.props.children}
    </Text>
}