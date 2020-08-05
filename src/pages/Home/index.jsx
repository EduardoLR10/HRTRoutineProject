import React from 'react'
import { View, ScrollView } from 'react-native'
import { ButtonGroup, SearchBar } from 'react-native-elements'
import routines from '../../routines'
import RoutineCard from '../../components/RoutineCard'


export default class Home extends React.Component {

  constructor(props) {
    super(props)
    this.clusters = this.clustirezeRoutines(routines)
    this.categories = Object.keys(this.clusters)
    this.state = {
      categoryIdx: 0,
      searchText: ''
    }
  }

  clustirezeRoutines = (routines) =>
    routines.reduce((clusters, Routine) => {
      if (!clusters[Routine.category]) {
        clusters[Routine.category] = []
      }
      clusters['Todas Categorias'].push(Routine)
      clusters[Routine.category].push(Routine)
      return clusters
    }, { 'Todas Categorias': [] })


  filteredRoutines = () => this.clusters[this.categories[this.state.categoryIdx]]
    .filter(Routine => (Routine.title.toLowerCase()).includes(this.state.searchText.toLowerCase()))

  render = () =>
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ButtonGroup
          onPress={(categoryIdx) => this.setState({ categoryIdx })}
          selectedIndex={this.state.categoryIdx}
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
      <SearchBar
        placeholder="Procurar" value={this.state.searchText}
        onChangeText={(searchText) => this.setState({ searchText })}
        lightTheme
        containerStyle={{ padding: 2, backgroundColor: 'transparent' }}
        inputContainerStyle={{ height: 32, margin: 0, padding: 0, backgroundColor: 'white', borderRadius: 4 }}
        inputStyle={{ color: 'black', fontSize: 12, height: 20 }}
      />
      <ScrollView style={{ marginBottom: 80 }} showsVerticalScrollIndicator={false}>
        {this.filteredRoutines().map((Routine, idx) =>
          <RoutineCard key={idx} Routine={Routine} navigation={this.props.navigation} />)
        }
      </ScrollView>
    </View>
}