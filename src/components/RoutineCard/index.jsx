import React from 'react'
import { Button, View, Text, TouchableOpacity } from 'react-native'
import collorPallete from '../../assets/collorPallete'
import Icon from 'react-native-vector-icons/SimpleLineIcons'; Icon.loadFont()

export default class RoutineCard extends React.Component {

  navigate = () => this.props.navigation.navigate(this.props.Routine.title)

  render = () =>
    <TouchableOpacity style={{ marginVertical: 4, padding: 8, borderWidth: 1, borderColor: collorPallete.blueHalfPastel, borderRadius: 4 }} onPress={this.navigate}>
      <Text style={{ fontSize: 18, color: collorPallete.blue }}>{this.props.Routine.title}</Text>
      <Text style={{ fontSize: 12, color: collorPallete.black }}>
        <Icon name="people" size={10} color={collorPallete.red} /> {this.props.Routine.authors}
      </Text>
      <Text style={{ fontSize: 12, color: collorPallete.black }}>
        <Icon name="tag" size={10} color={collorPallete.red} /> {this.props.Routine.category}
      </Text>
    </TouchableOpacity>
}