import React from 'react'
import { ScrollView } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import routines from '../../routines'
import { View } from 'react-native'
import RoutineCard from '../../components/RoutineCard'

export default class Home extends React.Component {

  constructor(props) {
    super(props)
    this.clusters = this.clustirezeRoutines(routines)
    this.categories = Object.keys(this.clusters)
    this.state = {
      selectedCategory: 0,
    }
  }

  clustirezeRoutines = (routines) =>
    routines.reduce((clusters, Routine) => {
      if (!clusters[Routine.category]) {
        clusters[Routine.category] = []
      }
      clusters['Todas categorias'].push(Routine)
      clusters[Routine.category].push(Routine)
      return clusters
    }, { 'Todas categorias': [] })

  render = () =>
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ButtonGroup
          onPress={(selectedCategory) => this.setState({ selectedCategory })}
          selectedIndex={this.state.selectedCategory}
          buttons={this.categories}
          containerStyle={{ backgroundColor: 'transparent', borderWidth: 0, margin: 0 }}
          innerBorderStyle={{ width: 0 }}
          buttonContainerStyle={{ marginRight: 4 }}
          buttonStyle={{ minWidth: 70, maxWidth: 170, padding: 8, borderRadius: 4 }}
          textStyle={{ textAlign: 'center' }}
          selectedTextStyle={{ color: 'black' }}
          selectedButtonStyle={{ backgroundColor: 'lightgray' }}
        />
      </ScrollView>
      {this.clusters[this.categories[this.state.selectedCategory]].map((Routine, idx) =>
        <RoutineCard key={idx} Routine={Routine} navigation={this.props.navigation} />)
      }
    </View>
}