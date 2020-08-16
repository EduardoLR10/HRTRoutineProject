import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'; Icon.loadFont()
import { Card, ListItem } from 'react-native-elements'

import imgLuigi from '../../assets/images/LuigiMinardi.png'
import imgEduardo from '../../assets/images/EduardoLemos.jpg'


export default class About extends React.Component {

  static Context = React.createContext({
    isVisible: false,
    setVisible: () => { }
  })

  static contextType = About.Context

  render = () =>
    <ScrollView>
      <ListItem
        title="Luigi Minardi Ferreira Maia"
        leftAvatar={{ source: imgLuigi }}
        subtitle={
          <View>
            <Text>
              Estudante de Engenharia da Computação da Universidade de Brasília.
            </Text>
            <Text>
              <Icon name="mail" color="red" /> luigiminardim@gmail.com
            </Text>
            <Text>
              <Icon name="github" color="red" /> luigiminadim
            </Text>
          </View>
        }
        bottomDivider
      />
      <ListItem
        title="Eduardo Lemos Rocha"
        leftAvatar={{ source: imgEduardo }}
        subtitle={
          <View>
            <Text>
              Idade: 21 anos
            </Text>
            <Text>
              Aluno da Universidade de Brasília, cursando sétimo semestre de Engenharia de Computação.
            </Text>
            <Text>
              <Icon name="mail" color="red" /> dudulr10@gmail.com
            </Text>
          </View>
        }
        bottomDivider
      />
    </ScrollView>
}