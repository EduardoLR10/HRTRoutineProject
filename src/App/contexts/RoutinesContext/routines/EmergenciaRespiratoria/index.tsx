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

export default function EmergenciaRespiratoria(): JSX.Element {
  return (
    <Routine
      id="emergencia-respiratoria"
      name="Emergência Respiratória"
      category="emergencia"
      authors={['luiz']}
      tags={['criança', 'insuficiência', 'aguda']}
    >
      <Section title="Introdução">
        <P>
          Aprender a abordar, diagnosticar e tratar uma emergência respiratória
          é fundamental para um profissional de saúde. Estudos demonstram que
          mais de 60% das morbimortalidades envolvem este sistema. A alta
          suscetibilidade para desenvolver falência respiratória é explicada
          pelo fato de as crianças possuírem via aérea menor, o tórax mais
          complacente, a reserva respiratória menor, a demanda metabólica maior,
          além de mecanismos compensatórios inadequados. Com reconhecimento
          precoce e tratamento eficaz, a chance de recuperação gira em torno de
          70%. Entretanto, nos casos que evolum para parada cardiorrespiratória
          a chance reduz para menos de 10%.
        </P>
        <P>
          Uma criança gravemente enferma deverá ser abordada, segundo as
          diretrizes do PALS 2015 – Pedriatic Advanced Life Support. A sequência
          AVALIAR, DIAGNOSTICAR E INTERVIR irá ajudar a conduzir melhor cada
          caso. Devemos ter em mente as quatro situações comuns de complicações
          respiratórias: a{')'} obstrução de via aérea superior, b{')'}{' '}
          obstrução de via aérea inferior, c{')'} doença do tecido pulmonar e d
          {')'} distúrbio do controle respiratório.
        </P>
        <P>
          O aumento da frequência respiratória associada a aumento do esforço
          como retrações e batimentos de asas nasais são comuns em todas as
          situações.
        </P>
      </Section>
      <Section title="Obstrução Respiratória Superior">
        <P>
          A via aérea superior compreende as estruturas extratorácicas (nariz,
          faringe e laringe). A obstrução desta, manifeta-se por: estridor,
          rouquidão, tosse espasmódica, sialorreia e roncos, com baixa
          expansibilidade torácica e murmúrio vesicular diminuído na ausculta.
          Como mecanismo compensatório, as crianças maiores adotam posição de
          conforto para buscar uma melhor respiração e, muitas vezes, é
          aconselhável que não as manipule. As patologias mais comuns que cursam
          com obstrução de vias aéreas superiores são crupe, angioedema, corpo
          estranho, traqueíte e epiglotite.
        </P>
      </Section>
      <Section title="Obstrução Respiratória Inferior">
        <P>
          A via aérea inferiorr é constituída pelas estruturas intratorácicas
          (traqueia, brônquios e bronquíolos). Sua obstrução manifesta-se por:
          sibilos, expiração prolongada e aumento do trabalho respiratório na
          expiração, tornando-a um processo ativo e não passivo. As patologias
          mais comuns destes tipos de obstrução são: a asma e bronquiolite.
        </P>
      </Section>
      <Section title="Doença do Tecido Pulmonar">
        <P>
          Envolve condições que alteram o parênquima pulmonar. Manifesta-se
          como: gemido, hipoxemia, diminuição dos sons respiratórios e presença
          de estertores. Pneumonia, edema, contusão pulmonar e síndrome do
          desconforto respiratório agudo (SDRA) são as patologias mais comuns
          deste tipo de acometimento.
        </P>
      </Section>
      <Section title="Distúrbio do Controle Respiratório Central">
        <P>
          Está associado a situações que alteram a função neurológica,
          comprometendo o nível de consciência e a mudança no padrão
          respiratório. Os sinais clínicos são irregularidade da frequência
          respiratória, esforço respiratório variável, respiração superficial e
          até apneia. As afecções mais comuns são: as convulsões, infecções do
          SNC, tumores cerebrais, hidrocefalia, doenças neuromusculares e
          intoxicações.
        </P>
      </Section>
      <Section title="Avaliação e Diagnóstico">
        <P>
          Comece observando se há alteração do nível de consciência, desconforto
          respiratório e alteração da cor da pele. Faca isso em alguns segundos,
          sem tocar no paciente. Observe também a posição da cabeça e da língua
          – uma criança com nível de consciência rebaixado apresenta dificuldade
          respiratória se estiver mal posicionada. Observe se há secreção na
          cavidade oral ou nasal, como, por exemplo, muco, sangue, resíduo de
          vômitos e até corpo estranho.
        </P>
        <Table
          colWidths={[100, 200]}
          header={['Idade', 'Respirações/minuto']}
          data={[
            ['Bebê (menos de 1 ano)', '30 a 60'],
            ['1ª Infância', '24 a 40'],
            ['Idade pré-escolar (4 a 5 anos)', '22 a 34'],
            ['Idade escolar (6 a 12 anos)', '18 a 30'],
            ['Adolescente', '12 a 16']
          ]}
          title="Tabela 1. Frequências Respiratórias Normais por Idade"
        />
        <P>
          Durante a ausculta pulmonar, observe a amplitude e simetria do tórax,
          a frequência respiratória (tabela 1) e esforço respiratório (tabela
          2). Diante destes dados, classifique o estado da criança em obstrução
          respiratória alta, baixa, por acometimento pulmonar parenquimatoso ou
          central.
        </P>
        <Table
          colWidths={[100, 100, 150]}
          header={['', 'Normal', 'Anormal']}
          data={[
            [
              'Esforço Respiratório',
              '- Som esforço\n- Expiração passiva',
              '- Esforço elevado, inadequado ou ausente\n- Batimento de asa nasal\n- Retrações e uso de musculatura acessória'
            ],
            [
              'Sons',
              'Sem sons anormais',
              '- Estridor e roncos\n- Sibilos\n- Crepitações e gemidos'
            ]
          ]}
          title="Tabela 2. Avaliação do Esforço Respiratório"
        />
      </Section>
      <Section title="Tratamento">
        <P>
          Após classificar o tipo de obstrução das vias aéreas, o tratamento da
          emergência respiratória será melhorar a oferta de oxigênio e facilitar
          a eliminação do gás carbônico. Se a criança tiver um bom drive
          respiratório, devemos apenas enriquecer o ar respirado. No caso de
          drive respiratório comprometido, devemos ventilar a criança com
          pressão positiva. Deve-se começar abrindo a via aérea, reposicionando
          a cabeça e a língua. Quando a criança estiver consciente apenas a
          deixamos o mais confortável possível (talvez o colo materno seja uma
          boa tática para deixá-la menos ansiosa). Aspirar secreções, sangue ou
          restos alimentares também pode ser necessário. Para isso, os
          aspiradores rígidos e de maior diâmetro são mais eficazes.
        </P>
        <Subsection title="Oxigenioterapia">
          <P>
            O principal objetivo é evitar a hipoxemia grave e garantir a oferta
            adequada de oxigênio aos tecidos, especialmente ao cérebro. Cuidado
            com a toxicidade que está relacionada diretamente ao tempo e à
            concentração ofertada, assim é importante não usar a fração
            inspirada de oxigênio (fiO<Subscript>2</Subscript>) 100% de forma
            indiscriminada. A saturação deve ser monitorada e a fiO
            <Subscript>2</Subscript> utilizada deve ser a menor possível para
            manter a saturação ≥ 94%.
          </P>
          <P>
            Existem diversos acessórios de ofertar oxigênio conforme o grau de
            necessidade; para cada litro a fiO
            <Subscript>2</Subscript> aumenta em torno de 4 a 5%.
          </P>
          <P>
            Cateter ou cânula nasal – até 3l/min – fiO
            <Subscript>2</Subscript> 45%;
          </P>
          <P>
            Máscara facial – de 4 a 8 l/min – fiO
            <Subscript>2</Subscript> 60%;
          </P>
          <P>
            Máscara não reinalante com reservatório – de 10 a 15 l/min – fiO
            <Subscript>2</Subscript> 100%;
          </P>
          <P>
            Ventilação: o oxigênio é apenas uma parte da troca gasosa. A criança
            pode apresentar retenção de CO<Subscript>2</Subscript> e o suporte
            ventilatório se faz necessário para eliminá-lo.
          </P>
          <P>
            Algumas formas de reduzir a retenção CO
            <Subscript>2</Subscript>:
          </P>
          <P>
            Cateter de alto fluxo – o gás inspirado é aquecido e umidificado a
            100% o que facilita a entrada do ar que diminuirá o espaço morto
            anatômico minimizando a reinalação do CO
            <Subscript>2</Subscript>. Fluxo de 2 l/kg/min pode fazer um efeito
            de PEEP 4 a 6 cmH
            <Subscript>2</Subscript>O.
          </P>
          <P>
            Ventilação não invasiva – diminui o trabalho respiratório, melhora a
            hipoventilação, aumenta a capacidade residual funcional e diminui o
            consumo de O<Subscript>2</Subscript>. Sedação leve pode ser
            necessária.
          </P>
          <P>
            Ventilação invasiva – a intubação não deve ser postergada nos casos
            graves com alteração no nível de consciência e risco de falência
            respiratória e progressão para a parada cardiorrespiratória.
          </P>
          <P>
            Circulação: monitorização contínua, acesso vascular e manter
            normovolemia são parâmetros que precisam estar alinhados com a
            condução respiratória. Mais detalhes sobre este assunto poderão ser
            complementados no capítulo emergência do choque.
          </P>
          <P>
            Para o tratamento específico verifique os capítulos correspondentes
            para cada patologia.
          </P>
        </Subsection>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Pronto-socorro / coordenadores Claudio Schvartsman, Amélia Gorete Reis, Silvya Costa Lima Farah, 3 ed, Barueri, SP, editora Manole, 2018."
        />
        <Reference
          idx={2}
          body="PALS, Pediatric Advance Life Support, manual do Profissional, edição em português 15-2224, Editora Orora Visual, 3210 Innovative Way, Mesquite, Texas, EUA, AHA, 2016."
        />
      </Section>
    </Routine>
  )
}
