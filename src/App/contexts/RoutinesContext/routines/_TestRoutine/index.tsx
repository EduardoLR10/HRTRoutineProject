import React from 'react'
import { Image } from 'react-native'
import Routine, { RoutineContent } from '../../../../../models/Routine'
import Figure from '../../../../screens/RoutineScreen/components/Figure'
import Section from '../../../../screens/RoutineScreen/components/Section'
import Subsection from '../../../../screens/RoutineScreen/components/Subsection'
import Subsubsection from '../../../../screens/RoutineScreen/components/Subsubsection'
import { Bold, Italic, Paragraph as P } from '../../../../shared/typography'

import imgScorpion from './images/scorpion.png'

export default new Routine(
  'test_routine',
  'Rotina de Testes',
  'test_category',
  ['test_author'],
  ['tag1', 'tag2', 'tag3', 'tag4'],
  () => (
    <RoutineContent>
      <Section title="Sobre a Rotina de Testes">
        <P>
          Você pode escrever paragrafos à vontade. Incluido utilizando{' '}
          <Italic>itálico</Italic> ou <Bold>negrito</Bold> no meio das frases.
        </P>
        <P>
          Esta rotina não será incluida na versão final do aplicativo. Ela
          apenas está aqui para fins de teste de desenvolvimento. Deste modo,
          podemos garantir a melhor experiência para o desenvolvedor que
          escreverá as rotinas.
        </P>
        <Subsection title="Subseção">
          <P>
            Subseções dentro de seções também são bem vindas. Separando o
            conteúdo em diversas seções e subseções ajudam o autor a organizar o
            conteúdo.
          </P>
        </Subsection>
        <Subsection title="Segunda subseção">
          <P>Utilizando multiplas mutiseções, fica ainda melhor a leitura.</P>
          <Subsubsection title="Subsubseções dentro de subseções">
            <P>
              Devido a possíveis mudanças na implementação dos componentes, é
              melhor assumir que apenas subseções podem ter subsubseções.
            </P>
          </Subsubsection>
        </Subsection>
      </Section>
      <Section title="Figuras e tabelas">
        <P>
          Também é possível adicionar figuras e tabelas como as colocadas a
          baixo
        </P>
        <Figure source={imgScorpion} size={[300, 200]} />
      </Section>
    </RoutineContent>
  )
)
