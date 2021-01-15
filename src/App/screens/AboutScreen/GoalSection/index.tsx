import React from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'
import Chip from '../../../shared/Chip'
import Gap from '../../../shared/Gap'
import Surface from '../../../shared/Surface'
import {
  Subtitle1,
  H2,
  Overline,
  Paragraph as P
} from '../../../shared/typography'
import missLemos from './MissLemos.jpg'

const AuthorContainer = styled.View`
  align-items: flex-end;
`

function MissLemos() {
  return (
    <Image
      source={missLemos}
      style={{ width: undefined, height: undefined }}
    ></Image>
  )
}

export default function GoalSection(): JSX.Element {
  return (
    <Surface>
      <H2 style={{ marginBottom: 16 }}>Propósito</H2>
      <P>
        Esse trabalho é o resultado de um esforço conjunto dos Preceptores do
        Programa de Residência Médica (PRM) de Pediatria do HRT, com o objetivo
        de reunir e uniformizar de um modo simples, prático e atual, as
        informações necessárias ao diagnóstico e tratamento das principais
        doenças e demais codições patológicas da pediatria. Nossa intenção é de
        aprimorar o atendimento às crianças, tornando-o mais ágil e eficaz,
        reduzindo prejuízos físicos e emocionais decorrentes de atrasos
        diagnósticos e tratamentos inadequados.
      </P>
      <P>
        Dedicamos esse trabalho às crianças que serão as principais favorecidas
        e constituem nosso verdadeiro incentivo profissional.
      </P>
      <P>
        Agradeço a todos os colegas pediatras que colaboraram para tornar real
        essa obra que será bastante útil a todos que prestam atendimento a
        crianças.
      </P>
      <AuthorContainer>
        <Overline>Supervisora do PRM de Pediatria HRT</Overline>
        <Chip avatar={missLemos}>Dra. Dania Lemos Dionízio</Chip>
        <Overline>2020 - 2021</Overline>
      </AuthorContainer>
    </Surface>
  )
}
