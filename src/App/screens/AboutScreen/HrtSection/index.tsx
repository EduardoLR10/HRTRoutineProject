import React from 'react'
import { Image } from 'react-native'
import Surface from '../../../shared/Surface'
import { H2, Paragraph as P } from '../../../shared/typography'
import hrtImage from './HRT.jpg'

export default function HrtSection(): JSX.Element {
  return (
    <Surface>
      <H2 style={{ marginBottom: 16 }}>HRT</H2>
      <Image
        source={hrtImage}
        style={{
          width: undefined,
          height: undefined,
          aspectRatio: 336 / 198,
          borderRadius: 8
        }}
      />
      <P style={{ marginTop: 16 }}>
        A unidade de pediatria do Hospital Regional de Taguatinga (HRT) possui
        uma longa tradição de ensino em Internato de Medicina e Residência
        Médica de Pediatria, desde 1976. Nossas atividades assistenciais e de
        treinamento em serviço são desenvolvidas nas Enfermarias, Pronto
        Socorro, Ambulatórios, Alojamento Conjunto, Berçário, Centro Obstétrico
        e UTI pediátrica.
      </P>
    </Surface>
  )
}
