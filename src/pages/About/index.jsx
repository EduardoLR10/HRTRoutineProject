import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { Card, Title, Paragraph, Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign'; Icon.loadFont()
import { ListItem } from 'react-native-elements'
import P from './../../components/templates/Paragraph';

import imgHrt from '../../assets/images/HRT.jpg'
import imgLuigi from '../../assets/images/LuigiMinardi.png'
import imgEduardo from '../../assets/images/EduardoLemos.jpg'

export default class About extends React.Component {

  render = () =>
    <ScrollView>
      <Card elevation={5} style={{ marginBottom: 10 }}>
        <Card.Title title="Hospital Regional de Taguatinga" titleStyle={{ color: 'blue' }} />
        <Card.Content>
          <Card.Cover source={imgHrt} />
          <P>Sobre o Hospital Regional de Taguatinga</P>
        </Card.Content>
      </Card>

      <Card elevation={5} style={{ marginBottom: 10 }}>
        <Card.Title title="Idealizadora" titleStyle={{ color: 'blue' }} />
        <Card.Content>
          <Card.Cover source={imgEduardo} />
          <P>Sobre a Srª Lemos :)</P>
        </Card.Content>
      </Card>

      <Card elevation={5} style={{ marginBottom: 10 }}>
        <Card.Title title="Time de Desenvolvimento" titleStyle={{ color: 'blue' }} />
        <Card.Content>
          <ListItem
            title="Eduardo Lemos Rocha"
            leftAvatar={{ source: imgEduardo }}
            subtitle={
              <View>
                <Text>
                  Estudante de Engenharia da Computação da Universidade de Brasília.
            </Text>
                <Text>
                  <Icon name="mail" color="red" /> dudulr10@gmail.com
            </Text>
                <Text>
                  <Icon name="github" color="red" /> EduardoLR10
            </Text>
              </View>
            }
            bottomDivider
          />
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
                  <Icon name="github" color="red" /> luigiminardim
            </Text>
              </View>
            }
          />
        </Card.Content>
      </Card>

    </ScrollView>
}