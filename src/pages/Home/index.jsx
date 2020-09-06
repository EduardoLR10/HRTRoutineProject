import React from 'react'
import { ScrollView } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { cardsListStyle, searchbarStyle } from './styles'
import RoutineCard from '../../components/RoutineCard'
import RoutinesService from '../../services/RoutinesService'
import Icon from 'react-native-vector-icons/MaterialIcons'
import HorizontalMenu from './HorizontalMenu'

// find-in-page text-search text-box-search-outline

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

  render = () =>
    <>
      <HorizontalMenu value={this.state.categoryIdx}
        value={this.state.categoryIdx} onChange={this.handleCategoryChange}
        options={this.routinesService.categories().map(
          (category, idx) => ({ value: idx, label: category })
        )}
      />
      <Searchbar placeholder={'Procurar'} onChangeText={this.handleSearchChange}
        icon={props => <Icon name="search" size={20} />}
        {...searchbarStyle}
      />
      <ScrollView {...cardsListStyle}>
        {this.displayedRoutines().map((Routine, idx) =>
          <RoutineCard key={idx} Routine={Routine} navigation={this.props.navigation} />)
        }
      </ScrollView>
    </>
}