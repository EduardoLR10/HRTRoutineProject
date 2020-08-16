import React from 'react'
import { ScrollView, Text } from 'react-native'

export default class About extends React.Component {

  static Context = React.createContext({
    isVisible: false,
    setVisible: () => { }
  })

  static contextType = About.Context

  render = () =>
    <ScrollView>
      <Text>Works</Text>
    </ScrollView>
}