import React, {Context} from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import P from '../Paragraph'

styles.closeAllButton = {
  position: 'absolute', top: -10, left: 0,
}

export default class Routine extends React.Component {

  render = () =>
    <>
      <ScrollView style={styles.routine}>
        {this.props.children}
        <P>Rotina escrita por {this.props.authors}</P>
      </ScrollView>
      <CloseSectionsButton />
    </>

}

class CloseSectionsButton extends React.Component {
  render = () =>
    <TouchableOpacity style={{
      position: 'absolute', top: 4, right: 4,
      padding: 2, borderRadius: 2,
      elevation: 3, borderWidth: 1, borderColor: 'red',
      backgroundColor: 'white',
    }}>
      <Text style={{ color: 'red', fontSize: 10 }}>Fechar seções</Text>
    </TouchableOpacity>
}