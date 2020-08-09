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

  clustirezeRoutines = (routines) => {
    const unsortedClusters = routines.reduce((clusters, Routine) => {
      if (!clusters[Routine.category]) {
        clusters[Routine.category] = []
      }
      clusters[Routine.category].push(Routine)
      return clusters
    }, {})
    return this.sortRoutines(unsortedClusters)
  }

  sortRoutines = (unsortedClusters) => {
    const categories = Object.keys(unsortedClusters).sort()
    const sortedClusters = categories.reduce((clusters, category) => {
      clusters[category] = unsortedClusters[category]
      clusters['Todas Categorias'] = clusters['Todas Categorias'].concat(unsortedClusters[category])
      return clusters
    }, { 'Todas Categorias': [] })
    for (category of Object.keys(sortedClusters)) {
      sortedClusters[category].sort((routine0, routine1) => routine0.title.localeCompare(routine1.title))
    }
    return sortedClusters
  }


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