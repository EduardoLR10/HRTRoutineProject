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

export default function PrimoInfeccaoEEncefaliteHerpetica(): JSX.Element {
  return (
    <Routine
      id="primoinfeccao-e-encefalite"
      name="Primoinfecção e Encefalite Herpética"
      categories={['infectologia']}
      authors={['iuri']}
      tags={['herpes', 'gengivoestomatite', 'estomatite']}
    >
      <Section title="Etiologia, epidemiologia e fatores de risco para recidivas">
        <P>
          O vírus do Herpes Simples (HSV) é comumente associado a lesões de
          membranas mucosas e pele, ao redor da cavidade oral (herpes orolabial)
          e da genitália (herpes anogenital). Determina quadros variáveis
          benignos ou graves, é infecção ubíqua, sem sazonalidade. Há dois tipos
          de vírus: o tipo 1 (mais comum na faixa etária pediátrica),
          responsável por infecções na face e tronco, transmitida por contato
          próximo, e o tipo 2, relacionado às infecções na genitália e é de
          transmissão geralmente sexual. Ambos os vírus podem infectar qualquer
          área da pele ou das mucosas. As manifestações clínicas são distintas e
          relacionadas ao estado imunológico do hospedeiro. Cerca de 95% dos
          seres humanos tem sorologia positiva para o vírus do herpes. Após a
          infecção primária, o vírus pode ficar em estado de latência em
          gânglios de nervos cranianos ou da medula. Quando reativado por várias
          causas, migra através do nervo periférico, retorna a pele ou mucosa e
          produz a erupção do Herpes Simples recidivante. A recorrência das
          lesões pode estar associada à febre, exposição à radiação
          ultravioleta, traumatismos, menstruação, estresse físico ou emocional,
          antibioticoterapia prolongada e imunodeficiência.
        </P>
      </Section>
      <Section title="Diagnóstico Clínico">
        <P>
          Sinais e sintomas frequentes: ao contrário de manifestação recorrente
          de herpes labial dos adultos, a primoinfecção herpética nas crianças é
          geralmente bastante sintomática. Após um período de incubação que
          varia de 1 a 26 dias depois do contágio (média de 7 dias), o quadro
          cursa com febre (de até 10 dias), lesões orais vesicoerosivas difusas
          (gengivoestomatite, úlceras em orofaringe, palato, língua) e
          consequente hiporexia importante, adinamia e irritabilidade. Com o
          rompimento das vesículas, formam-se exulcerações, a gengiva
          edemacia-se e a alimentação é dificultada. A faringe pode ser
          atingida. Nos pacientes susceptíveis, o herpes pode alcançar
          proporções sistêmicas, sendo a forma mais grave a encefalite
          herpética, que se manifesta como febre, cefaleia, sinais meníngeos,
          rebaixamento sensorial e crises epilépticas de difícil controle.
          Pacientes imunocomprometidos podem apresentar quadro de choque
          séptico.
        </P>
      </Section>
      <Section title="Diagnóstico Laboratorial">
        <P>
          Os quadros de gengivoestomatite herpética simples não carecem de
          investigação laboratorial. Mesmo nos casos sistêmicos, as alterações
          laboratoriais são geralmente de caráter leve e inespecífico, até mesmo
          nos casos de encefalite herpética. A sorologia para o herpes pode ser
          de resultado tardio, portanto não deve atrasar o tratamento nos casos
          de suspeita de infecção grave. O IgM não é muito confiável e pode
          estar negativo em casos agudos. Os exames complementares mais
          significativos são: a pesquisa direta do vírus por PCR, em especial no
          diagnóstico da encefalite, além da ENM e da RNM de encéfalo, que
          tipicamente apresentam alterações no lobo temporal.
        </P>
      </Section>
      <Section title="Critérios de Internação">
        <P>
          Crianças com estado geral comprometido, que não conseguem ingerir
          líquidos, com infecções secundárias, ou imunocomprometidas.
        </P>
      </Section>
      <Section title="Complicações mais Frequentes">
        <P>
          A gengivoestomatite herpética pode cursar com infecção secundária
          bacteriana em boca e demandar antibioticoterapia.
        </P>
      </Section>
      <Section title="Tratamento">
        <P>
          Nos casos de gengivoestomatite herpética, o tratamento quase sempre é
          dispensável, pelo caráter autolimitado da doença. Todavia, o uso do
          aciclovir (oral, na dose de 80 mg/kg/dia, de 6/6h ou intravenoso, na
          dose de 30 mg/kg/dia, de 8/8h) pode ser cogitado nos casos de queda do
          estado geral, comorbidades ou de quadros persistentes.
        </P>
        <P>
          No caso de suspeita de encefalite herpética, está indicado o aciclovir
          intravenoso, ainda que sem a confirmação diagnóstica, além do suporte
          para as convulsões.
        </P>
        <P>
          CRITÉRIOS DE ALTA: Resolução das complicações, melhora da febre e
          sinais de melhora da aceitação oral.
        </P>
      </Section>
      <Section title="Critérios de Alta">
        <List>
          <LItem>Resolução das complicações;</LItem>
          <LItem>Melhora da febre;</LItem>
          <LItem>Sinais de melhora de aceitação oral.</LItem>
        </List>
      </Section>
      <Section title="Prognóstico e Orientações para o Seguimento">
        <P>
          Acompanhamento ambulatorial nos casos graves ou neurológicos,
          monitoramento para sequelas neurológicas.
        </P>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Klein, R. S. Herpes simplex vírus type 1 encephalitis. Setembro, 2018."
        />
        <Reference
          idx={2}
          body="Kliegman, R. M. et al. Nelson: Tratado de pediatria. Editora Elsevier."
        />
      </Section>
    </Routine>
  )
}
