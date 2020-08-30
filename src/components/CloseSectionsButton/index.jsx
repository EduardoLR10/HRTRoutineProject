import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'; Icon.loadFont()
import emitter from 'tiny-emitter/instance'
import { containerStyles } from './styles';

export default class CloseSectionsButton extends React.Component {

  render = () =>
    <Icon name='angle-double-up' {...containerStyles}
      onPress={() => emitter.emit('closeSections')} />
}