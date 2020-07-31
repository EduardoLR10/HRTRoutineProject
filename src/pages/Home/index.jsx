import React from 'react'
import AcidentesPorAnimaisPeconhentos from '../../routines/AcidentesPorAnimaisPeconhentos'
import routines from '../../routines'
import { Text } from 'react-native'

export default class Home extends React.Component {

  render = () =>
    routines.map((routine, idx) =>
      <Text key={idx}>{JSON.stringify(routine)}</Text>
    )
  // < AcidentesPorAnimaisPeconhentos />
}