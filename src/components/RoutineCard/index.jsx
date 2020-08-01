import React from 'react'
import { Button } from 'react-native'

export default class RoutineCard extends React.Component {
  render = () =>
    <Button title={this.props.Routine.title} onPress={() => this.props.navigation.navigate(this.props.Routine.title)} />
}