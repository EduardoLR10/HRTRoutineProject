import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import { Avatar, Subheading, List, Divider } from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign'; Icon.loadFont()
import P from './../../components/templates/Paragraph';
import styles, { contactIconStyle, avatarStyle } from './styles'

import Card from './Card'
import preceptors from '../../preceptors'

import imgHrt from '../../assets/images/HRT.jpg'
import imgLuigi from '../../assets/images/LuigiMinardi.png'
import imgEduardo from '../../assets/images/EduardoLemos.jpg'
import imgMissLemos from '../../assets/images/MissLemos.jpg'

export default class About extends React.Component {

  render = () =>
    <ScrollView>
      <Card title="HRT" image={imgHrt}>
        <P>
          A unidade de pediatria do Hospital Regional de Taguatinga (HRT) possui uma longa tradição de ensino em Internato de Medicina e Residência Médica de Pediatria, desde 1976. Nossas atividades assistenciais e de treinamento em serviço são desenvolvidas nas Enfermarias, Pronto Socorro, Ambulatórios, Alojamento Conjunto, Berçário, Centro Obstétrico e UTI pediátrica.
        </P>
      </Card>

      <Card title="Propósito">
        <P>
          Esse trabalho é o resultado de um esforço conjunto dos Preceptores do Programa de Residência Médica (PRM) de Pediatria do HRT, com o objetivo de reunir e uniformizar de um modo simples, prático e atual, as informações necessárias ao diagnóstico e tratamento das principais doenças e demais condições patológicas da pediatria. Nossa intenção é de aprimorar o atendimento às crianças, tornando-o mais ágil e eficaz, reduzindo prejuízos físicos e emocionais decorrentes de atrasos diagnósticos e tratamentos inadequados.
        </P>
        <P>
          Dedicamos esse trabalho às crianças que serão as principais favorecidas e constituem nosso verdadeiro incentivo profissional.
        </P>
        <P>
          Agradeço a todos os colegas pediatras que colaboraram para tornar real essa obra que será bastante útil a todos que prestam atendimento a crianças.
        </P>
        <P style={styles.signature}>
          <Text style={{ fontWeight: 'bold' }}>Dra. Dania Lemos Dionízio</Text>
          – Supervisora do PRM de Pediatria HRT
        </P>
      </Card>

      <Card title='Coordenadora' /** image={imgMissLemos} */>
        <Image source={imgMissLemos} style={styles.coordinatorImage} />
        <Subheading style={{ textAlign: 'center' }}>Dra. Dania Lemos Dionízio</Subheading>
        <P>
          Graduação em Medicina pela Universidade Federal do Triângulo Mineiro.
        </P>
        <P>
          Especialista em Pediatria, Reumatologia Pediátrica e Alergia e Imunologia.
        </P>
        <P>
          Professora do curso de Medicina - disciplina de Pediatria e de Reumatologia da Universidade Católica de Brasília(UCB) de 2005 a 2010 e Coordenadora do Internato em pediatria da UCB de 2006 a 2010.
        </P>
        <P>
          Professora do curso de Medicina da UNICEPLAC - União Educacional do Planalto Central desde fevereiro de 2019.
        </P>
        <P>
          Preceptora da Residência Médica em Pediatria - Secretaria Saúde do Distrito Federal desde 1998.
        </P>
        <P>
          Preceptora do Internato em Pediatria da Fundação de Ensino e Pesquisa em Ciências da Saúde(FEPECS) do Distrito Federal desde 2006.
        </P>
        <P>
          Supervisora do PRM (Programa de Residência Médica) em Pediatria do Hospital Regional de Taguatinga - SES / DF desde março de 2018.
        </P>
        <P>
          Compôs várias bancas de avaliação de TCC (trabalho de conclusão de curso) na residência de pediatria, tanto como Orientadora quanto como Avaliadora.
        </P>
        <P>
          Atua como médica com ênfase em Pediatria, Reumatologia e Alergia.
        </P>
      </Card>

      <Card title="Preceptores">
        {preceptors.map(({ name, image }, idx) => <>
          <List.Item key={idx}
            title={name}
            left={props => <Avatar.Image source={image} />}
            titleNumberOfLines={0}
          />
          {idx < preceptors.length - 1 ? <Divider /> : <></>}
        </>)}
      </Card>

      <Card title="Equipe de desenvolvimento">
        <List.Item
          title={'Luigi Minardi Ferreira Maia'}
          left={props => <Avatar.Image source={imgLuigi} {...avatarStyle} />}
          description={props =>
            <View>
              <Text>
                Estudante de Engenharia da Computação da Universidade de Brasília.
            </Text>
              <Text><Icon name="mail" {...contactIconStyle} /> luigiminardimgmail.com</Text>
              <Text><Icon name="github" {...contactIconStyle} /> luigiminardim</Text>
            </View>
          }
        />
        <Divider />
        <List.Item
          title={'Eduardo Lemos Rocha'}
          left={props => <Avatar.Image source={imgEduardo} {...avatarStyle} />}
          description={props =>
            <View>
              <Text>
                Estudante de Engenharia da Computação da Universidade de Brasília.
            </Text>
              <Text><Icon name="mail" {...contactIconStyle} /> dudulr10@gmai.com</Text>
              <Text><Icon name="github" {...contactIconStyle} /> EduardoLR10</Text>
            </View>
          }
        />
      </Card>

    </ScrollView >
}