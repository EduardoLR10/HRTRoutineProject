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

import img1 from './images/image1.png'

export default function HidratacaoVenosaRN(): JSX.Element {
  return (
    <Routine
      id="hidratacao-venosa-no-rn"
      name="Hidratação Venosa no RN"
      category="emergencia"
      authors={['carlos', 'katia']}
      tags={['recém', 'nascido']}
    >
      <Section title="Rotina">
        <P>
          A composição dos organismos requer água para manutenção da homeostasia
          em funções múltiplas como a assimilação, transporte e excreção de
          produtos do metabolism, controle térmico corporal, entre outros. Em
          situações normais, a água corporal total circula em subcompartimentos
          intra (LIC) e extracelular (LEC). O segundo, é compreendido pela água
          intersticial e a do componente intravascular. A circulação da água
          nestes compartimentos é regida por diversas interações do ambiente
          tissular, contudo a mais relevante é aquela determinada pelas
          concentrações iônicas e pela osmolaridade nos subcompartimentos. O
          equilíbrio iônico e osmótico se deve principalmente a participação dos
          íons sódio (Na+), cloro (Cl-) e proteínas de cargas negativas,
          abundantes no LEC e do potássio (K+), magnésio (Mg++), fosfatos e
          bicarbonato, predominantes na composição do LIC.
        </P>
        <P>
          Na vida fetal precoce, a água corporal total constitui 95% do peso do
          concepto. Com o curso da gestação ocorre sua diminuição,
          principalmente, às custas da redução do compartimento extracelular.
          Nos primeiros dias de vida extrauterina, essa redução é mais brusca,
          clinicamente evidente com a perda ponderal do RN. Os recém nascidos a
          termo e saudáveis perdem entre 5 e 10% do peso de nascimento e os
          prematuros e de muito baixo peso, podem perder, em média, 10 a 15% do
          peso na primeira semana de vida. Tal perda fisiológica deve ser
          acompanhada, contudo, nem sempre requer intervenções e não poderá ser
          evitada, mesmo com uma oferta excessiva de líquidos/nutrientes, seja
          por via enteral ou parenteral.
        </P>
        <P>
          Quando indicada, a hidratação venosa do RN tem como objetivo manter ou
          restituir um volume adequado do componente extracelular do líquido
          corporal total, bem como a osmolaridade deste e do componente
          intracelular. Para o recém nascido (RN), os mesmos princípios da
          criança maior são seguidos, respeitando-se suas peculiaridades de
          adaptação à vida extrauterina, composição corporal (hidreletrolítica
          de cada subcompartimento); perdas insensíveis; função renal e controle
          neuroendócrino.
        </P>
        <Figure source={img1} size={[326, 122]} />
        <P>
          O balanço hídrico do RN é influenciado pela quantidade de líquidos
          ofertados a ele, somados à sua produção endógena de água (AE) e
          descontadas suas perdas perceptíveis (diurese, evacuações, débitos por
          sondas, etc) e imperceptíveis - perdas insensíveis (PI).
        </P>
        <P>
          De maneira geral, a elevada área de superfície corporal, o ritmo
          respiratório acelerado, a maior quantidade proporcional de água
          corporal, leva os RN(s) a uma maior taxa de perdas insensíveis de
          água, em relação às crianças maiores e adultos. Além disso, quanto
          menor a idade gestacional (IG), maior a perda hídrica do prematuro em
          relação aos outros RN(s). A perda de água transepidérmica, além da IG,
          sofre influências da idade pós natal, temperatura corporal, umidade
          relativa do ar, uso de fonte extra de calor e lesões de continuidade
          de pele.
        </P>
        <P>
          Além das perdas insensíveis, a perda urinária pode repercutir de
          maneira importante no estado de hidratação do RN. Logo após o
          nascimento (24 a 48h), há um período de diminuição do fluxo urinário,
          seguido por uma fase de natriurese. A <Bold>fase pré-diurética</Bold>{' '}
          (primeiras 48h) é caracterizada por menor débito urinário e
          prevalência das PI no balanço hídrico do bebê. Na{' '}
          <Bold>fase diurética</Bold> (2° ao 5° dia de vida), sob o efeito do
          peptídeo natriurético atrial, há maior fluxo urinário, com contração
          do LEC e perda de peso. Por fim, há a <Bold>fase pós diurética</Bold>{' '}
          (após o 5° dia de vida), quando as variações do débito urinário
          estarão diretamente relacionadas às alterações da taxa hídrica.
        </P>
        <P>
          Além da questão do volume urinário, as concentrações iônicas estão
          diretamente afetadas pela função renal do RN. Uma menor resposta aos
          mecanismos de controle do sódio, seja por menor resposta a
          aldosterona, por redução da enzima Na/K ATPase (responsável pela
          reabsorção tubular de sódio), pela imaturidade renal ou por maior
          quantidade de LEC, faz com que haja, nos RN(s), uma maior perda renal
          de sódio, agravados pela prematuridade. Quanto ao potássio, há uma
          baixa capacidade de excreção do mesmo (por redução da filtração
          glomerular), principalmente nas primeiras horas de vida, agravados
          quando houver balanço nitrogenado negativo, como nos prematuros de
          baixo peso.
        </P>
        <P>
          Além da função renal, as atividades dos sistemas de adaptação
          (neurológico/endócrino) também são determinantes na regulação do
          estado de hidratação do RN e apenas ao final da primeira semana, o
          recém nascido de termo já consegue responder bem a fatores
          regulatórios, como a secreção de hormônio antidiurético (ADH) e à ação
          do sistema renina-angiotensina-aldosterona.
        </P>
        <P>
          Cabe também comentar sobre o cálcio, que mesmo não tendo papel
          primordial na regulação hidroeletrolítica, exerce funções relevantes
          na contratilidade muscular (estriada, estriada cardíaca e na
          musculatura lisa), no controles de mensageiros intracelulares e
          excreção de neurotransmissores e na coagulação, entre outras. Desde o
          final da gestação, há um predomínio da função da calcitonina, frente
          ao efeito das paratireoides do RN; ocorre ainda um regime de
          hipoparatieroidismo transitório inerente ao bebê nas primeiras horas
          de vida (somados a sua hipercalcitoninemia relativa) e sendo assim,
          após o parto, há necessidade externa de cálcio para manter as funções
          orgânicas reguladas por este. A oferta hídrica e de eletrólitos não é,
          por si só, suficiente para manter as funções celulares. Desta maneira,
          é premente a oferta de glicose como aporte energético de consumo
          rápido. No RN, a velocidade em que ocorre o aporte de glicose a partir
          da glicogenólise hepática, para suprir demandas metabólicas
          fisiológicas está em torno de 4 a 6 mg/Kg/min. Assim sendo, a oferta
          venosa de glicose para o RN deve ser iniciada com uma velocidade/taxa
          de infusão de glicose (VIG ou TIG) nestes parâmetros, com ajustes
          posteriores, quando necessários.
        </P>
        <Table
          colWidths={[100, 100, 100, 100, 100, 100, 100, 100, 100]}
          header={[
            '',
            '1° dia de vida',
            '2° dia de vida',
            '3° dia de vida',
            '4° dia de vida',
            '5° dia de vida',
            '6° dia de vida',
            '7° dia de vida',
            'A partir do 8° dia de vida'
          ]}
          data={[
            [
              'Água',
              '80 mg/kg/dia',
              '90 mg/kg/dia',
              '100 mg/kg/dia',
              '110 mg/kg/dia',
              '120 mg/kg/dia',
              '130 mg/kg/dia',
              '140 mg/kg/dia',
              '150 mg/kg/dia'
            ],
            [
              'Na+',
              '0 mEq%',
              '1 mEq%',
              '2 mEq%',
              '3 mEq%',
              '3 mEq%',
              '3 mEq%',
              '3 mEq%',
              '3 mEq%'
            ],
            [
              'K+',
              '0 mEq%',
              '0,5 mEq%',
              '1 mEq%',
              '2 mEq%',
              '2 mEq%',
              '2 mEq%',
              '2 mEq%',
              '2 mEq%'
            ],
            [
              'Ca++',
              '1 mEq/Kg',
              '1 mEq/Kg',
              '1 mEq/Kg',
              '1 mEq/Kg',
              '1 mEq/Kg',
              '1 mEq/Kg',
              '1 mEq/Kg',
              '1 mEq/Kg'
            ],
            [
              'Glicose',
              '4,5 a 6,5 mg/Kg/min',
              '4,5 a 6,5 mg/Kg/min',
              '4,5 a 6,5 mg/Kg/min',
              '4,5 a 6,5 mg/Kg/min',
              '4,5 a 6,5 mg/Kg/min',
              '4,5 a 6,5 mg/Kg/min',
              '4,5 a 6,5 mg/Kg/min',
              '4,5 a 6,5 mg/Kg/min'
            ]
          ]}
          caption="Tabela 1: Necessidade de água, eletrólitos e glicose para o RN a termo"
        />
        <Table
          colWidths={[100, 100, 100]}
          header={[
            '',
            '≤ 750g',
            '750 a 1.000g',
            '1.000 a 1.500g',
            '1.500 a 2.500g',
            '> 2.500g'
          ]}
          data={[
            [
              '1° dia de vida',
              '90 a 120 ml/Kg/dia',
              '90 a 120 ml/Kg/dia',
              '80 a 100 ml/Kg/dia',
              '70 a 90 ml/Kg/dia',
              '60 a 70 ml/Kg/dia'
            ],
            [
              '2° dia de vida',
              '100 a 150 ml/Kg/dia',
              '100 a 130 ml/Kg/dia',
              '100 a 120 ml/Kg/dia',
              '90 a 110 ml/Kg/dia',
              '80 a 90 ml/Kg/dia'
            ],
            [
              '3° dia de vida',
              '120 a 160 ml/Kg/dia',
              '120 a 150 ml/Kg/dia',
              '120 a 140 ml/Kg/dia',
              '100 a 140 ml/Kg/dia',
              '100 a 110 ml/Kg/dia'
            ],
            [
              'Glicose',
              'SG a 5%\n3 a 5,5 mg/Kg/min',
              'SG a 5%\n4 a 5,5 mg/Kg/min',
              'SG a 10%\n4 a 6 mg/Kg/min',
              'SG a 10%\n4 a 6 mg/Kg/min',
              'SG a 10%\n4,5 a 6,5 mg/Kg/min'
            ]
          ]}
          caption="Tabela 2: Necessidades de água e glicose para o RN prematuro"
        />
        <Table
          colWidths={[150, 100, 100]}
          header={['Solução Padronizada no HRT', 'Quantidade', 'Composição']}
          data={[
            ['Cloreto de Sódio 20%', '1 ml', '3,4 mEq de sódio'],
            ['Cloreto de Potássio 10%', '1 ml', '1,34 mEq de potássio'],
            ['Cloreto de Potássio 15%', '1 ml', '2 mEq de potássio'],
            ['Gluconato de Cálcio 10%', '1 ml', '0,5 mEq de cálcio'],
            [
              'Soro Glicosado a 5%\nSoro Glicosado a 10%\nSoro Glicosado a 25%\nSoro Glicosado a 50%',
              '100 ml',
              '5 g de glicose\n10 g de glicose\n 25 g de glicose\n50 g de glicose'
            ]
          ]}
          caption="Tabela 3: Soluções utilizadas para terapia de hidratação venosa no HRT."
        />
        <P>
          <Bold>
            O volume total a ser oferecido ao RN deve levar em conta a oferta
            enteral (medicações e dieta) e parenteral (medicações, nutrição
            parenteral ou hidratação venosa).
          </Bold>
        </P>
        <P>
          Os parâmetros não invasivos mais utilizados para o controle da oferta
          hídrica adequada no período neonatal são: o peso, densidade urinária e
          volume de diurese diária e a aferição da pressão arterial. Quanto ao
          último, deve-se ter em mente que existem outros fatores que afetam a
          pressão arterial, além de hipovolemia, a fim de não incorrer em
          exageros de expansão volêmica desnecessárias e retardo no início de
          terapia com vasopressores. Atualmente, a avaliação ultrassonográfica
          da veia cava inferior é capaz de inferir com boa acurácia sobre o grau
          de hidratação do paciente. Há ainda parâmetros laboratoriais que podem
          ser usados com a mesma intenção, que são as dosagens séricas de sódio,
          hematócrito e proteínas séricas. Sobre a oferta de glicose, deve-se
          avaliar a presença de glicosúria e a própria glicemia capilar como
          parâmetros de adequação da oferta.
        </P>
        <Section title="Exemplo Prático">
          <P>
            Exemplo prático: Considerando um bebê a termo, com 2 Kg, no 4° dia
            de vida, em dieta zero e imaginando que o volume de líquido usado
            para a diluição de medicamentos corresponda a 15 ml/kg/dia e que não
            haja outros fatores envolvidos. A hidratação venosa (HV), usando SG
            10%; NaCl 20%; KCl 10%; Gluconato de Cálcio 10% e TIG 5 mg/kg/min,
            seria calculada da seguinte forma:
          </P>
          <P>
            As necessidades no 4° dia são: TH 110 ml/kg/dia; sódio 3 mEq%;
            potássio 2mEq%; cálcio 1 mEq/Kg e glicose 5 mg/Kg/min e, de acordo
            com as tabelas 2 e 4, o paciente do exemplo deverá receber:
          </P>
          <List>
            <LItem>
              THT (110) = TH Dieta (0) + TH Medicação (15) + TH HV = 95
              ml/kg/dia, que corresponde a 190 ml;
            </LItem>
            <LItem>
              Sódio: 3 mEq para cada 100 ml infundido, como receberá 190 ml,
              serão 5,7 mEq, que correspondem a 1,6 ml do NaCl a 20%;
            </LItem>
            <LItem>
              Potássio: 2 mEq para cada 100 ml infundido, como receberá 190 ml,
              serão 3,8 mEq, que correspondem a 2,8 ml do KCl a 10% ou 1,9 ml do
              KCl a 15%;
            </LItem>
            <LItem>
              Cálcio: 1 mEq para cada Kg de peso, como tem 2 Kg receberá 2 mEq,
              que correspondem a 4 ml do gluconato de cálcio a 10%;
            </LItem>
            <LItem>
              Glicose: TIG de 5 mg/Kg/min, assim deverá receber (5 x 2 x 1440)
              14.400 mg de glicose. Quando considerarmos gramas serão 14,4 g em
              24 horas, que corresponde a 144 ml de SG a 10%.
            </LItem>
          </List>
          <P>Tal HV seria prescrita com:</P>
          <P>1 - HV para 24 horas (TH 95 ml/Kg/dia e TIG de 5 ml/Kg/min)</P>
          <List>
            <LItem>SG a 10% ----- 144 ml</LItem>
            <LItem>AD ----- 37,6 ml</LItem>
            <LItem>NaCl 20% ----- 1,6 ml</LItem>
            <LItem>KCl 10% ----- 2,8 ml</LItem>
            <LItem>G. Cal 10% ----- 4 ml</LItem>
            <LItem>Correr EV (190 ml) a 7,9 ml/h</LItem>
          </List>
          <P>2 - Aferir débito e densidade urinária</P>
          <P>3 - Aferir glicosúria</P>
          <P>4 - Aferir glicemia capilar duas horas após alterações da HV</P>
          <P>5 - Aferir peso diário</P>
        </Section>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Brasil. Atenção à Saúde do Recém Nascido – Guia para profissionais de Saúde. 2a. Edição Volume 3. Brasília, 2014 http://bvsms.saude.gov.br/bvs/publicacoes/atencao_saude_recem_nascido_profissionais_2.pdf"
        />
        <Reference
          idx={2}
          body="Margotto, PR. Assistência ao Recém Nascido de Risco. 3° Edição. Brasília, 2013."
        />
        <Reference
          idx={3}
          body="Alves Filho, N. Perinatologia básica. Rio de Janeiro: Guanabara Koogan, 2006."
        />
      </Section>
    </Routine>
  )
}
