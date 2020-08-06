import React from 'react';
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'; Icon.loadFont()
import styles from './styles'

class List extends React.Component {

  render = () =>
    <View style={styles.list}>
      {this.props.children}
    </View>
}

class LItem extends React.Component {

  render = () =>
    <Text style={styles.litem}>
      <Icon name="dot-single" size={14} />{this.props.children}
    </Text>
}

export { List, LItem }