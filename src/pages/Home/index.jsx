import React from 'react'
import routines from '../../routines'
import { View } from 'react-native'
import RoutineCard from '../../components/RoutineCard'

export default class Home extends React.Component {

  render = () =>
    <View>{
      routines.map((Routine, idx) => <RoutineCard key={idx} Routine={Routine} navigation={this.props.navigation} />)
    }</View>
}