import React from 'react'
import { ScrollView } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import routines from '../../routines'
import { View } from 'react-native'
import RoutineCard from '../../components/RoutineCard'

export default class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0
    }
  }

  buttons = ['Todas categorias', 'Emergência e Terapia Intensiva', 'Infectologia', 'Hematologia, Reumatologia e Nefrologia', 'Pneumologia', 'Lactentes', 'Cardiologia', 'Neurologia', 'Endocrinologia', 'Gastroenterologia', 'Neonatologia', 'Pediatria geral e puericultura']

  render = () =>
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ButtonGroup
          onPress={(selectedIndex) => this.setState({ selectedIndex })}
          selectedIndex={this.state.selectedIndex}
          buttons={this.buttons}
          containerStyle={{ backgroundColor: 'transparent', borderWidth: 0, margin:0 }}
          innerBorderStyle={{ width: 0 }}
          buttonContainerStyle={{ marginRight: 4 }}
          buttonStyle={{ minWidth: 70, maxWidth: 170, padding: 8, borderRadius: 4 }}
          textStyle={{ textAlign: 'center' }}
          selectedTextStyle={{ color: 'black' }}
          selectedButtonStyle={{ backgroundColor: 'lightgray' }}
        />
      </ScrollView>
      {routines.map((Routine, idx) => <RoutineCard key={idx} Routine={Routine} navigation={this.props.navigation} />)}
    </View>
}