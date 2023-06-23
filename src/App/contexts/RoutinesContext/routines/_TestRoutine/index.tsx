import React from 'react'
import { RoutineContent as Routine } from '../../../../../models/Routine'
import {
  Text,
  P,
  Bold,
  Italic,
  Subscript,
  Table,
  Figure,
  List,
  LItem,
  Section,
  Subsection,
  Subsubsection,
  Reference
} from '../../../../screens/RoutineScreen/components'

import imgScorpion from './images/scorpion.png'

export default function TestRoutine(): JSX.Element {
  return (
    <Routine
      id="test_routine"
      name="Rotina de Testes"
      categories={['cardiologia', 'emergencia', 'endocrinologia']}
      authors={['ana-luiza', 'carlos']}
      tags={['tag1', 'tag2', 'tag3', 'tag4']}
    >
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
        <Figure
          title="Use imagens!"
          source={imgScorpion}
          size={[200, 100]}
          caption="Mas também sinta-se a vontade para adicionar as legendas necessárias para a imagem."
        />
        <P>
          Além do mais, pode-se incluir tabelas responsivas como as vistas à
          baixo.
        </P>

        <Table
          colWidths={[200, 200, 200]}
          title="Título da tabela"
          caption={
            'A Tabela possui uma matrix de dados e um array de header. Você pode usar tanto strings quanto JSX.Elements dentros deles'
          }
          header={[
            'Título da Coluna Um Com um nome muito grande',
            'Título da Coluna Dois',
            'Título da coluna Três'
          ]}
          data={[
            [
              'Escreva com strings na tabela',
              <Text key={1}>
                Se necessário, use textos em <Bold>negrito</Bold> ou{' '}
                <Italic>itálico</Italic>
              </Text>,
              <Text key={2}>
                Você também pode escrever textos usando subscripts
                <Subscript>1</Subscript>.
              </Text>
            ],
            ['Você ', 'pode', 'usar'],
            ['múltiplas', 'colunas', 'com conteúdo']
          ]}
        />
      </Section>
      <Section title="Listas">
        <P>Também podemos adicionar listas ao nosso critério</P>
        <List>
          <LItem>Primeiro item da lista</LItem>
          <LItem>Item muito muito muito muito muito muito longo da lista</LItem>
          <List>
            <LItem>Lista interna à lista.</LItem>
            <List>
              <LItem>Mais um nível</LItem>
            </List>
          </List>
        </List>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Farhat CK, Carvalho ES, Carvalho LH, Succi RC, editors. Infectologia Pediátrica. 3.ed. São Paulo: Atheneu; 2007."
        />
        <Reference
          idx={2}
          body="Krugman S, Katz SL, Gershon AA, Wilfert CM. Doenças Infecciosas na Infância. 9.ed. Rio de Janeiro: Guanabara Koogan; 1994."
        />
        <Reference
          idx={3}
          body="Kelly CS, Kelly Jr RE. Lymphadenopathy in Children. Pediatr Clin North Am 1998 Aug;45 (4):875-88."
        />
        <Reference
          idx={4}
          body="Freire LM, Teixeira Júnior JF. Diagnóstico Diferencial das Adenomegalias. In: : Tonelli E, Freire LM, editors. Doenças Infecciosas na Infância e Adolescência. 2.ed. Rio de Janeiro: Editora Medsi; 2000. p.1850-67."
        />
      </Section>
      <Section
        title={
          <>
            Subseção com texto em <Italic>itálico</Italic>
          </>
        }
      >
        <Subsection
          title={
            <>
              Subseção com título em <Bold>negrito</Bold>
            </>
          }
        >
          <Subsubsection
            title={
              <>
                Título com texto em <Subscript>subscrito </Subscript>
              </>
            }
          ></Subsubsection>
        </Subsection>
      </Section>
    </Routine>
  )
}
