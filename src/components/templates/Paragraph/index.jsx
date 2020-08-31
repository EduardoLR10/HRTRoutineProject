import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

export default class Paragraph extends React.Component {

  render = () =>
    <Text {...this.props} style={[styles.paragraph, this.props.style]} >
      {this.props.children}
    </Text>
}
