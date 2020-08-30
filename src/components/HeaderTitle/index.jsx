import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

export default class HeaderTitle extends React.Component {

  render = () =>
    <Text style={styles.container}>{this.props.title}</Text>
}