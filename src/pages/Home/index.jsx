import React from 'react'
import { View, ScrollView } from 'react-native'
import { ButtonGroup, SearchBar } from 'react-native-elements'
import styles, { buttonGroupStyles, searchBarSyles, cardsListStyles } from './styles'
import routines from '../../routines'
import RoutineCard from '../../components/RoutineCard'
import RoutinesService from '../../services/RoutinesService'

export default class Home extends React.Component {

  routinesService = RoutinesService.getInstance()

  state = {
    categoryIdx: 0,
    searchText: '',
  }

  handleCategoryChange = (categoryIdx) => {
    this.setState({ categoryIdx })
  }

  handleSearchChange = (searchText) => {
    this.setState({ searchText })
  }

  displayedRoutines = () => {
    const category = this.routinesService.categories()[this.state.categoryIdx]
    return this.routinesService.filteredRoutines(category, this.state.searchText)
  }

  // filteredRoutines = () => this.clusters[this.categories[this.state.categoryIdx]]
  //   .filter(Routine => (Routine.title.toLowerCase()).includes(this.state.searchText.toLowerCase()))

  render = () =>
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ButtonGroup buttons={this.routinesService.categories()}
          selectedIndex={this.state.categoryIdx} onPress={this.handleCategoryChange}
          {...buttonGroupStyles}
        />
      </ScrollView>
      <SearchBar
        placeholder="Procurar" value={this.state.searchText} {...searchBarSyles}
        onChangeText={this.handleSearchChange}
      />
      <ScrollView style={styles.cardList} {...cardsListStyles}>
        {this.displayedRoutines().map((Routine, idx) =>
          <RoutineCard key={idx} Routine={Routine} navigation={this.props.navigation} />)
        }
      </ScrollView>
    </View>
}