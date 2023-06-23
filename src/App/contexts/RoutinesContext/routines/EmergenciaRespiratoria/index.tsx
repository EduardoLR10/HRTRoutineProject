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
import ListItem from '../../../../shared/ListItem'

export default function EmergenciaRespiratoria(): JSX.Element {
  return (
    <Routine
      id="emergencia-respiratoria"
      name="Emergência Respiratória"
      categories={['emergencia']}
      authors={['luiz']}
      tags={['criança', 'insuficiência', 'aguda']}
    >
      <Section title="Conceitos">
        <P>
          Aprender a abordar, diagnosticar e tratar uma emergência respiratória
          é fundamental para um profissional de saúde. Estudos demonstram que
          mais de 60% das morbimortalidades envolvem este sistema. A alta
          suscetibilidade das crianças em desenvolver falência respiratória é
          explicada pelo fato de possuírem uma via aérea menor, tórax mais
          complacente, reserva respiratória menor, demanda metabólica maior e
          mecanismos compensatórios inadequados. Se o reconhecimento e
          tratamento da falência respiratória for eficaz, a chance de
          recuperação é de cerca de 70%. No entanto, quando há atraso, o quadro
          pode se deteriorar e evoluir para a parada cardiorrespiratória, com
          chance de recuperação inferior a 10%.
        </P>
        <P>
          Uma criança gravemente enferma deverá ser abordada, segundo as
          diretrizes do <Italic>Pedriatic Advanced Life Support</Italic> – PALS
          2020. A sequência AVALIAR, DIAGNOSTICAR E INTERVIR irá ajudar a
          conduzir melhor cada caso. Devemos ter em mente as quatro situações
          comuns de complicações respiratórias: obstrução de via aérea superior,
          obstrução de via aérea inferior, doença do tecido pulmonar e distúrbio
          do controle respiratório.
        </P>
      </Section>
      <Section title="Obstrução Respiratória Superior">
        <P>
          Corresponde às estruturas extratorácicas – nariz, faringe e laringe.
          Manifesta-se clinicamente com estridor, rouquidão, tosse espasmódica,
          sialorreia e roncos. Ao exame, observa-se baixa expansibilidade
          torácica e ausculta com entrada de ar diminuída. As crianças maiores
          costumam adotar posição de conforto para buscar uma melhor respiração,
          que deve ser mantida para alívio dos sintomas. As patologias mais
          comuns são: crupe, angioedema, corpo estranho, traqueite e epiglotite.
        </P>
      </Section>
      <Section title="Obstrução Respiratória Inferior">
        <P>
          Corresponde às estruturas intratorácicas – traqueia, brônquios,
          bronquíolos e alvéolos. Manifesta-se clinicamente com sibilos,
          expiração prolongada e aumento do trabalho respiratório na expiração,
          tornando um processo ativo e não passivo. As patologias mais comuns
          são a asma e a bronquiolite.
        </P>
      </Section>
      <Section title="Doença do Tecido Pulmonar">
        <P>
          Envolve condições que alteram o parênquima. Manifesta-se clinicamente
          com gemido, hipoxemia, diminuição dos sons respiratórios e presença de
          estertores. As patologias mais comuns são: pneumonia, edema, contusão
          pulmonar e síndrome do desconforto respiratório agudo (SDRA).
        </P>
      </Section>
      <Section title="Distúrbio do Controle Respiratório Central">
        <P>
          Está associado a situações que alteram a função neurológica,
          comprometendo o nível de consciência e a mudança no padrão
          respiratório. Os sinais clínicos são irregularidade da frequência
          respiratória, esforço variável, respiração superficial e até apneia.
          As afecções mais comuns são as convulsões, infecções do SNC, tumores
          cerebrais, hidrocefalia, doenças neuromusculares e intoxicações.
        </P>
      </Section>
      <Section title="Avaliação e Diagnóstico">
        <P>
          Observar inicialmente o nível de consciência, padrão respiratório e
          coloração da pele por alguns segundos, como que por instinto, sem
          tocar no paciente. Observar em seguida a posição da cabeça e língua –
          criança com nível de consciência rebaixado pode apresentar dificuldade
          respiratória se estiver mal posicionada. Procure por algum tipo de
          secreção na cavidade oral ou nasal, como muco, sangue, resíduo de
          vômitos ou corpo estranho.
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
          Realizar ausculta pulmonar para detectar o tipo de som, enquanto se
          observa a amplitude e simetria do tórax, a frequência respiratória
          (tabela 1) e presença de esforço respiratório (tabela 2). Diante
          destes dados, classificar o tipo de distúrbio respiratório: obstrução
          respiratória alta, baixa, parenquimatosa ou central.
        </P>
        <Table
          colWidths={[100, 100, 150]}
          header={['', 'Normal', 'Anormal']}
          data={[
            [
              'Esforço Respiratório',
              '- Sem esforço\n- Expiração passiva',
              '- - Tiragens e retrações\nintercostais\nRetração de fúrcula esternal\nBatimento de asa nasal\nBalanço toracoabdominal'
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
          Após realizar a classificação, executar o tratamento da emergência
          respiratória que se baseia em melhorar a oferta de oxigênio e eliminar
          o gás carbônico. Em criança tem um drive respiratório adequado,
          deve-se aumentar a oferta de oxigênio. Quando o <Italic>drive</Italic>{' '}
          respiratório é inadequado, há necessidade de instituir ventilação com
          pressão positiva. Começar abrindo a via aérea, reposicionando a cabeça
          e língua, e aspirando secreções – aspiradores rígidos e de maior
          diâmetro são mais eficazes. Se a criança se apresenta consciente,
          apenas a deixe mais confortável, inclusive no colo materno se
          necessário.
        </P>
        <Subsection title="Oxigenioterapia">
          <P>
            O principal objetivo é evitar a hipoxemia grave e garantir a oferta
            adequada de oxigênio aos tecidos, especialmente ao cérebro. Atentar
            à toxicidade relacionada diretamente ao tempo e à concentração de
            oxigênio ofertada, sendo importante não usar a fração inspirada de
            oxigênio (fiO²) 100% de forma indiscriminada. A saturação deve ser
            monitorada e a FiO₂ utilizada deve ser a menor possível para manter
            a saturação {'>'}= 92%.
          </P>
          <P>
            Existem diversos acessórios para ofertar oxigênio conforme o grau de
            necessidade. Para cada litro, a FiO₂ aumenta em torno de 4 a 5%:
          </P>
          <List>
            <ListItem>
              Cateter ou cânula nasal – até 4l/min, FiO₂ até 46%;
            </ListItem>
            <ListItem>Máscara facial – de 5 a 10 l/min, FiO₂ até 60%;</ListItem>
            <ListItem>
              Máscara não reinalante com reservatório – de 10 a 15 l/min, FiO₂
              até 100%.
            </ListItem>
          </List>
          <P>
            Ventilação: o oxigênio é apenas uma parte da troca gasosa. A criança
            pode apresentar retenção de CO₂ e, nesses casos, o suporte
            ventilatório se faz necessário para eliminá-lo. Algumas formas de
            reduzir a retenção CO₂:
          </P>
          <List>
            <ListItem>
              Cateter de alto fluxo: o gás inspirado é aquecido e umidificado a
              100%, facilitando a entrada do ar, diminuindo o espaço morto
              anatômico e minimizando a reinalação do CO₂. Fluxo de 2 l/kg/min
              pode fazer um efeito de PEEP 4 a 6 cmH₂O.
            </ListItem>
            <ListItem>
              Ventilação não invasiva – diminui o trabalho respiratório, melhora
              a hipoventilação, aumenta a capacidade residual funcional e
              diminui o consumo de oxigênio. Sedação leve pode ser necessária.
            </ListItem>
            <ListItem>
              Ventilação invasiva – a intubação não deve ser postergada nos
              casos graves, principalmente em pacientes com alteração no nível
              de consciência e risco de falência respiratória, com consequente
              progressão para parada cardiorrespiratória.
            </ListItem>
          </List>
          <P>
            Circulação: monitorização contínua, acesso vascular e manter
            normovolemia são parâmetros que precisam estar alinhados com a
            condução respiratória. Mais detalhes estão na rotina “Emergência do
            Choque”.
          </P>
        </Subsection>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body={
            'http://www.bombeiros.pr.gov.br/arquivos/File/1gb/socorros/Viasaereas.pdf'
          }
        />
        <Reference
          idx={2}
          body={
            'American Heart Association, Suporte Avançado de vida em Pediatria. Manual do profissional, Orora visual, 3210 Innovative Way, Mesquite, Texas, EUA, edição em português, 2020;'
          }
        />
        <Reference
          idx={3}
          body={
            'Condutas pediátricas no pronto atendimento e na terapia intensiva / editoras Luciana Rodrigues Silva, Luanda Flores da Costa, 2. ed, Santana de Parnaíaba, SP, Editora Manole, 2020.'
          }
        />
        <Reference
          idx={4}
          body={
            'Pronto-socorro / coordenadores Claudio Schvartsman, Amélia Gorete Reis, Sylvia Costa Lima Farat, 3. ed, Barueri, SP, Editora Manole, 2018.'
          }
        />
        <Reference
          idx={5}
          body={
            'Urgências e Emergências Pediátricas, manual para rápida tomada de decisão / Adriana Pasmanik Eisencraft, Sylavia Costa Lima farah. - 1 ed, Rio de Janeiro, Editora Guanabara Koogan, 2021.'
          }
        />
      </Section>
    </Routine>
  )
}
