import React from 'react'
import AcidentesPorAnimaisPeconhentos from '../../routines/AcidentesPorAnimaisPeconhentos'
import routines from '../../routines'
import { Text, View } from 'react-native'

export default class Home extends React.Component {

  render = () =>
    routines.map((Routine, idx) =>
      <View key={idx}>
        <Text>{Routine.title}</Text>
        <Routine />
      </View>
    )
  // < AcidentesPorAnimaisPeconhentos />
}