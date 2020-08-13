import React from 'react'
import Icon from 'react-native-vector-icons/Feather'; Icon.loadFont()

export default class AboutButton extends React.Component {

  render = () =>
    <Icon style={{
      marginRight: 10,
      height: 25, width: 25,
      color: 'black',
    }}
      name='more-vertical' size={20}
      onPress={() => { }} />
}