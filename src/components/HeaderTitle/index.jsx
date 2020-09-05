import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

export default class HeaderTitle extends React.Component {

  render = () =>
    <Text numberOfLines={2} style={styles.container(this.props.title)}>
      {this.props.title}
    </Text>
}