import React from 'react'
import { View, ScrollView } from 'react-native'
import { ButtonGroup, SearchBar } from 'react-native-elements'
import routines from '../../routines'
import RoutineCard from '../../components/RoutineCard'
import collorPallete from '../../assets/collorPallete'


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
    <View style={{ backgroundColor: 'white' }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ButtonGroup
          selectedIndex={this.state.categoryIdx} onPress={(categoryIdx) => this.setState({ categoryIdx })}
          buttons={this.categories}
          containerStyle={{ borderWidth: 0, }}
          innerBorderStyle={{ width: 0 }}
          buttonContainerStyle={{paddingVertical: 2}}
          buttonStyle={{ marginHorizontal: 2, minWidth: 70, maxWidth: 170, borderRadius: 4, padding: 4 }}
          textStyle={{ textAlign: 'center', color: collorPallete.black }}
          selectedTextStyle={{ color: collorPallete.red }}
          selectedButtonStyle={{ backgroundColor: collorPallete.redPastel }}
        />
      </ScrollView>
      <SearchBar
        placeholder="Procurar" value={this.state.searchText}
        onChangeText={(searchText) => this.setState({ searchText })}
        lightTheme
        containerStyle={{ marginVertical: 8, height: 35, backgroundColor: 'transparent', padding: 0, elevation: 1}}
        inputContainerStyle={{ backgroundColor: collorPallete.white, paddingBottom: 4 }}
        inputStyle={{ color: 'black', fontSize: 14, justifyContent: 'center'}}
      />
      <ScrollView style={{ paddingHorizontal: 8}} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingVertical: 10, paddingBottom: 128}}>
        {this.filteredRoutines().map((Routine, idx) =>
          <RoutineCard key={idx} Routine={Routine} navigation={this.props.navigation} />)
        }
      </ScrollView>
    </View>
}