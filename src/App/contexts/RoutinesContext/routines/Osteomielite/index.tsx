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

export default function Osteomielite(): JSX.Element {
  return (
    <Routine
      id="osteomielite"
      name="Osteomielite"
      categories={['hematologia-reumatologia-nefrologia', 'emergencia']}
      authors={['fabricio', 'dania']}
      tags={['infecção', 'óssea']}
    >
      <Section title="Definição">
        <P>
          A osteomielite hematogênica aguda é uma infecção óssea causada por
          germes piogênicos que se proliferam no tecido ósseo após disseminação
          pela circulação sanguínea. É considerada uma doença bacteriana
          invasiva e figura, ainda, como causa importante de morbidade na
          infância.
        </P>
        <P>
          Epidemiologia: apresenta um pico de ocorrência até os 2 anos e outro
          ao redor dos 7 a 9 anos de idade. Os pacientes do sexo masculino são
          mais acometidos na proporção de 3:1. Sua incidência anual não sofreu
          mudanças nas últimas décadas, variando de 1:5.000 a 1:10.000 crianças.
          O trauma local aumentou a frequência de infecção óssea quando
          comparado a ossos não-traumatizados.
        </P>
        <P>
          Aspectos gerais: a osteomielite ocorre principalmente nas metáfises
          com maior velocidade de crescimento e sendo as metáfises distais do
          fêmur e proximal da tíbia (ossos longos) as mais freqüentemente
          acometidas. Cerca de 72% das osteomielites ocorrem nos membros
          inferiores e 8% nos superiores.
        </P>
        <P>
          Quadro clínico: febre, edema com dor local e perda de função do membro
          acometido.
        </P>
      </Section>
      <Section title="Diagnóstico">
        <P>
          Depende fundamentalmente da suspeita clínica e é confirmado por exames
          de imagem.
        </P>
      </Section>
      <Section title="Exames Complementares">
        <List>
          <LItem>
            <Bold>Hemocultura:</Bold> (30 a 50% de positividade): deve ser
            solicitada em todos os casos suspeitos e cultura da secreção
            extraída do sítio afetado com agulha grossa (havendo ou não abscesso
            subperiostal), punção esta que deve ser realizada pela ortopedia (50
            a 80% de positividade).
          </LItem>
          <LItem>
            <Bold>Hemograma:</Bold> pode se mostrar normal no início ou com uma
            anemia leve. Leucocitose com desvio a esquerda podem ocorrer na
            evolução.
          </LItem>
          <LItem>
            <Bold>PAI:</Bold> há aumento precoce da PCR e do VHS, de maneira
            evolutivamente importante.
          </LItem>
          <LItem>
            <Bold>Raio X Simples:</Bold> é a primeira etapa na investigação por
            métodos de imagem em osteomielite, porque pode sugerir o diagnóstico
            correto, excluir outras doenças ou fornecer indícios para outras
            condições patológicas. Entretanto, demora de 10 a 21 dias para que
            uma lesão óssea se torne visível em um exame radiográfico
            convencional.
          </LItem>
        </List>
        <P>
          <Bold>Cintilografia óssea</Bold> com tecnécio, a tomografia
          computadorizada (TC) e a ressonância magnética (RM) são úteis para a
          detecção precoce da osteomielite.
        </P>
        <P>
          <Bold>GERMES MAIS COMUNS:</Bold> a epidemiologia da osteomielite
          hematogênica aguda na infância mudou desde que a imunização
          sistemática contra hemófilo do tipo B foi introduzida, no início dos
          anos 90. Atualmente, o agente mais comum em todas as faixas etárias é
          o <Bold>estafilococo aureus</Bold>. Entre os casos que tiveram o
          agente etiológico identificado, ele representa entre 25% a 60%. Outros
          agentes etiológicos incluem o estreptococo do grupo B e o pneumococo.
          Existem grupos com maior risco de acometimento de determinados
          agentes, como o estreptococo do grupo B, em neonatos, e salmonela sp,
          em portadores de anemia falciforme. É importante salientar que em
          muitos serviços, não são utilizados rotineiramente métodos de
          identificação da <Italic>Kingella kingae</Italic>, patógeno que vem se
          mostrando importante em infecções osteoarticulares na faixa etária
          pediátrica, especialmente em menores de dois anos de idade.
        </P>
        <P>
          <Bold>Abordagem:</Bold> uma opção importante para o
          diagnóstico/avaliação da osteomielite é a exploração cirúrgica aberta,
          biópsia e drenagem, que além de fornecer material para análise,
          oferece visão do osso infectado e área circundante. Na abordagem
          cirúrgica aberta, o procedimento tanto serve para ajudar firmar o
          diagnóstico com coleta de material para análise, quanto para
          tratamento, pois é possível desbridar áreas, realizar limpeza com
          retirada de material necrótico, favorecendo a cura da infecção.
        </P>
      </Section>
      <Section title="Tratamento">
        <P>
          Na osteomielite, a drenagem cirúrgica está indicada sempre que houver
          presença ou suspeita de coleção purulenta no osso. A
          antibioticoterapia empírica é iniciada com base no agente etiológico
          mais provável, devendo cobrir, em todas as faixas etárias, o
          estafilococos aureus. No período neonatal, há necessidade de cobertura
          adicional para bactérias Gram negativas e nos falcêmicos, cobertura
          também para salmonela. O tempo de administração do antibiótico
          parenteral tem sido objeto de debate, inicialmente de 6 semanas,
          diminuiu mais recentemente para 3. O tempo total do tratamento
          geralmente é prolongado, variando entre os diferentes estudos de 6 a
          12 semanas para osteomielites agudas, sendo sua suspensão determinada
          pela melhora do aspecto da lesão e do estado geral do paciente, bem
          como pela queda dos níveis séricos das provas inflamatórias, em
          especial da PCR e do VHS.
        </P>
      </Section>
      <Section title="Complicações">
        <P>
          A taxa de mortalidade decaiu muito nos últimos anos antibioticoterapia
          a fim de se evitar necrose progressiva do tecido e complicações (5%
          dos casos). Tais complicações incluem a evolução para osteomielite
          crônica, ocorrência de fratura patológica, instabilidade articular e
          alteração na placa epifisária, levando a deformidades secundárias e
          osteonecrose. Taxa de mortalidade atualmente, é próxima de zero.
        </P>
      </Section>
      <Section title="Prognóstico">
        <P>
          A literatura sugere que a melhor evolução do quadro esteja relacionada
          principalmente ao uso do antibiótico adequado, à rápida constatação e
          limpesa do pus e do tecido necrótico do osso, à ausência de
          comorbidades e à precocidade no diagnóstico.
        </P>
        <Table
          colWidths={[100, 100, 100, 100]}
          header={[
            <Text key={1}>
              <Bold>Drogas IV</Bold>
            </Text>,
            'Doses (mg/Kg/dia)',
            'Intervalo (em horas)',
            'Dose Máxima'
          ]}
          data={[
            ['Amicacina', '15 - 22', '24/24', '1.500 mg/dia'],
            ['Gentamicina', '5 - 7,5', '24/24', '300 mg/dia'],
            [
              'Ceftriaxona',
              '100',
              '24/24',
              '3 g/dia (adolescente muito grave: 4 g/dia)'
            ],
            ['Oxacilina', '200', '6/6', '6 g/dia'],
            ['Cefazolina', '50 - 100', '6/6', '6 g/dia'],
            ['Clindamicina', '40', '6/6', '4,8 g/dia'],
            ['Vancomicina', '40 - 60', '6/6', '2 g/dia']
          ]}
        />
        <Table
          colWidths={[100, 100, 100, 100]}
          header={[
            <Text key={1}>
              <Bold>Drogas VO</Bold>
            </Text>,
            'Doses (mg/Kg/dia)',
            'Intervalo (em horas)',
            'Dose Máxima'
          ]}
          data={[
            ['Cefalexina', '50 - 100', '6/6', '2 g/dia'],
            ['Cefadroxila', '25 - 30', '12/12', '2 g/dia'],
            ['Clindamicina', '20 - 30', '8/8', '2 g/dia']
          ]}
        />
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Cunha LAM, Oliveira Filho OBA, Ohara G, Skaf AY. Osteomielite Hematogênica Aguda. Sociedade Brasileira de Ortopedia e Traumatologia, Projeto Diretrizes, 2007."
        />
        <Reference
          idx={2}
          body="Puccini PF, Ferrarini MAG, Iazzett AV. Osteomielite hematogênica aguda em Pediatria: análise de casos atendidos em hospital universitário. Rev Paul Pediatr 2012;30(3):353-8."
        />
        <Reference
          idx={3}
          body="Pereira RA. Osteomielite aguda na infância, revisão da literatura. Universidade Estadual do Sudoeste da Bahia, 2015."
        />
        <Reference
          idx={4}
          body="Moreira Jr. Infecções osteoarticulares em pediatria, revisão.  Pediatria moderna, Dez 2014  V50 N12: 560-5."
        />
      </Section>
    </Routine>
  )
}
