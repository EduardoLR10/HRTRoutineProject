import React from 'react'
import Icon from 'react-native-vector-icons/Octicons'; Icon.loadFont()
import About from '../../pages/About';

export default class AboutButton extends React.Component {

  render = () =>
    <Icon style={{
      marginRight: 10,
      height: 25, width: 25,
      color: 'black',
    }}
      name='info' size={20}
      onPress={() => this.props.navigation.navigate('About')} />
}