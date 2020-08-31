import React from 'react'
import Icon from 'react-native-vector-icons/Octicons'; Icon.loadFont()
import styles from './styles'

export default class AboutButton extends React.Component {

  render = () =>
    <Icon style={styles.container}
      name='info' size={20}
      onPress={() => this.props.navigation.navigate('About')} />
}