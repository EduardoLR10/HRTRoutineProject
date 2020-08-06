import React from 'react'
import { View, ScrollView } from 'react-native'
import { ButtonGroup, SearchBar } from 'react-native-elements'
import styles, { buttonGroupStyles, searchBarSyles, cardsListStyles } from './styles'
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
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ButtonGroup buttons={this.categories} selectedIndex={this.state.categoryIdx}
          {...buttonGroupStyles} onPress={(categoryIdx) => this.setState({ categoryIdx })}
        />
      </ScrollView>
      <SearchBar
        placeholder="Procurar" value={this.state.searchText} {...searchBarSyles}
        onChangeText={(searchText) => this.setState({ searchText })}
      />
      <ScrollView style={styles.cardList} {...cardsListStyles}>
        {this.filteredRoutines().map((Routine, idx) =>
          <RoutineCard key={idx} Routine={Routine} navigation={this.props.navigation} />)
        }
      </ScrollView>
    </View>
}