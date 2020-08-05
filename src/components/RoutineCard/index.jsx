import React from 'react'
import { Button, View, Text } from 'react-native'

export default class RoutineCard extends React.Component {
  render = () =>
    <View>
      <Button title={this.props.Routine.title} onPress={() => this.props.navigation.navigate(this.props.Routine.title)} />
    </View>
}