import React, { useContext } from 'react'
import { Image } from 'react-native'
import AuthorsContext from '../../../contexts/AuthorsContext'
import Surface from '../../../shared/Surface'
import { Caption, H2, Paragraph as P } from '../../../shared/typography'

export default function CoordinatorSection(): JSX.Element {
  const { authors } = useContext(AuthorsContext)
  const daniaLemos = authors.dania

  return (
    <Surface>
      <H2 style={{ marginBottom: 16 }}>Coordenadora</H2>
      <Image
        source={daniaLemos.avatar}
        style={{
          width: undefined,
          height: undefined,
          aspectRatio: 332 / 350,
          borderRadius: 8
        }}
      />
      <Caption>Dra. Dania Lemos Dionízio</Caption>
      <P style={{ marginTop: 16 }}>
        Graduação em Medicina pela Universidade Federal do Triângulo Mineiro.
      </P>
      <P>
        Especialista em Pediatria, Reumatologia Pediátrica e Alergia e
        Imunologia.
      </P>
      <P>
        Professora do curso de Medicina - disciplina de Pediatria e de
        Reumatologia da Universidade Católica de Brasília(UCB) de 2005 a 2010 e
        Coordenadora do Internato em pediatria da UCB de 2006 a 2010.
      </P>
      <P>
        Professora do curso de Medicina da UNICEPLAC - União Educacional do
        Planalto Central desde fevereiro de 2019. Preceptora da Residência
        Médica em Pediatria - Secretaria Saúde do Distrito Federal desde 1998.
      </P>
      <P>
        Preceptora do Internato em Pediatria da Fundação de Ensino e Pesquisa em
        Ciências da Saúde (FEPECS) do Distrito Federal desde 2006.
      </P>
      <P>
        Supervisora do PRM (Programa de Residência Médica) em Pediatria do
        Hospital Regional de Taguatinga - SES / DF desde março de 2018.
      </P>
      <P>
        Compôs várias bancas de avaliação de TCC (trabalho de conclusão de
        curso) na residência de pediatria, tanto como Orientadora quanto como
        Avaliadora.
      </P>
      <P>Atua como médica com ênfase em Pediatria, Reumatologia e Alergia.</P>
    </Surface>
  )
}
