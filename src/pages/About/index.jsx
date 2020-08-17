import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { Card, Avatar } from 'react-native-paper'
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
        <Card.Title title="Hospital Regional de Taguatinga" titleStyle={{ textAlign: 'center', color: 'blue' }} />
        <Card.Content>
          <Card.Cover source={imgHrt} style={{ marginBottom: 8 }} />
          <P>Sobre o Hospital Regional de Taguatinga</P>
        </Card.Content>
      </Card>

      <Card elevation={5} style={{ marginBottom: 10 }}>
        <Card.Title title="Idealizadora" titleStyle={{ textAlign: 'center', color: 'blue' }} />
        <Card.Content>
          <Card.Cover source={imgEduardo} style={{ marginBottom: 8 }} />
          <P>Sobre a Srª Lemos :)</P>
        </Card.Content>
      </Card>

      <Card elevation={5} style={{ marginBottom: 10 }}>
        <Card.Title title="Time de Desenvolvimento" titleStyle={{ textAlign: 'center', color: 'blue' }} />
        <Card.Content>
          <ListItem
            title="Eduardo Lemos Rocha"
            leftAvatar={<Avatar.Image source={imgEduardo} size={88} />}
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
            leftAvatar={<Avatar.Image source={imgLuigi} size={88} />}
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