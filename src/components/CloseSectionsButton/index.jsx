import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';  Icon.loadFont()
import emitter from 'tiny-emitter/instance'

export default class CloseSectionsButton extends React.Component {

  render = () =>
    <Icon style={{
      marginRight: 10,
      height: 20, width: 20
    }}
      name='angle-double-up' size={20}
      onPress={() => emitter.emit('closeSections')} />
}