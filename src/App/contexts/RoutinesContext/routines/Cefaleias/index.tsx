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

export default function TestRoutine(): JSX.Element {
  return (
    <Routine
      id="cefaleia"
      name="Cefaléias"
      categories={['neurologia', 'emergencia']}
      authors={['manuela']}
      tags={['dor', 'cabeça', 'cefaléia', 'enxaqueca']}
    >
      <Section title="Definições">
        <P>
          É uma queixa comum no pronto-socorro, sendo que 60% dos pacientes
          referem ao menos um evento entre 2 e 18 anos de idade. No entanto,
          raramente é a queixa principal que motivou o atendimento.
        </P>
        <P>
          Seu diagnóstico diferencial é amplo, sendo que a maioria dos casos é
          de curso benigno e autolimitado, como quadros virais de vias aéreas
          superiores e enxaqueca. No entanto, pode ser o primeiro sintoma de
          diversas doenças graves.
        </P>
        <P>
          A cefaleia pode ser classificada de acordo com o modo de instalação em
          aguda, aguda recorrente (&lt; 15 episódios ao mês) e crônica ( 15
          episódios ao mês). De acordo com a progressão, podem ser progressivas
          ou não progressivas. Cefaleias progressivas devem receber atenção
          especial na investigação de causas secundárias.
        </P>
        <P>Segundo a etiologia, as cefaleias podem ser:</P>
        <Subsection title="Primárias">
          <P>
            Causa não demonstrável por exames clínicos / laboratoriais. Ex.:
            enxaqueca, cefaleia tensional, cefaleia em salvas, cefaleias
            trigêmino-autonômicas;
          </P>
        </Subsection>
        <Subsection title="Secundárias">
          <P>
            Provocada por doenças que alteram os exames clínicos e
            laboratoriais.
          </P>
        </Subsection>
      </Section>
      <Section title="Diagnóstico Clínico">
        <P>
          Importante caracterizar clinicamente a dor do paciente, perguntando
          diretamente à criança e confirmando os dados com os pais:
        </P>
        <List>
          <LItem>Há quanto tempo sente dor?</LItem>
          <LItem>Localização unilateral, bilateral ou holocraniana?</LItem>
          <LItem>Tipo de dor: pulsátil, peso, aperto?</LItem>
          <LItem>Intensidade da dor: há limitação das atividades?</LItem>
          <LItem>Duração de cada evento?</LItem>
          <LItem>Frequência da dor? Houve piora recente?</LItem>
          <LItem>Qual horário mais comum?</LItem>
          <LItem>Quais os fatores desencadeantes?</LItem>
          <LItem>Quais os fatores de alívio?</LItem>
          <LItem>
            Há sintomas compatíveis com aura (pontos brilhantes, dificuldade
            para falar, amaurose, tontura, dormência / fraqueza em membros)?
          </LItem>
          <LItem>Há presença de náuseas / vômitos?</LItem>
          <LItem>A dor piora com a luz / barulho?</LItem>
          <LItem>História prévia de trauma?</LItem>
          <LItem>
            Há algum sintoma neurológico associado, como crises epilépticas,
            alteração do nível de consciência ou ataxia?
          </LItem>
          <LItem>História familiar de cefaleia, como enxaqueca?</LItem>
        </List>
        <P>
          O exame físico deve incluir medida de pressão arterial e exame
          neurológico, sendo importante avaliar a presença de sinais meníngeos,
          nível de consciência, presença de sinais localizatórios (força,
          coordenação, reflexos) e nervos cranianos, principalmente II nervo
          (óptico), III, IV e VI (movimentação ocular extrínseca).
        </P>
        <P>
          Se a história sugerir presença de hipertensão intracraniana (HIC) e a
          neuroimagem não mostrar alterações, há indicação da avaliação do fundo
          de olho.
        </P>
        <P>
          Pacientes com as seguintes condições, devem ser avaliados de maneira
          individual e serem submetidos a exames complementares de acordo com a
          sua doença de base: traumatismo cranioencefálico (TCE), febre, doença
          oncológica, coagulopatias, imunossuprimidos, doença falciforme,
          síndrome nefrótica, doença renal crônica, hidrocefalia com ou sem
          derivação ventricular.
        </P>
      </Section>
      <Section title="Exames Laboratoriais">
        <P>
          A investigação com neuroimagem deve ser feita em pacientes com sinais
          de alarme e suspeita de cefaleia secundária. A ressonância magnética é
          o exame de escolha em crianças, no entanto, pela sua menor
          disponibilidade, demora e necessidade de sedação, é usualmente
          substituída pela tomografia computadorizada de crânio nos atendimentos
          de pronto-socorro.
        </P>
        <Subsection title="Indicação de Neuroimagem">
          <List>
            <LItem>
              Cefaleia progressiva, cada vez mais forte e frequente;
            </LItem>
            <LItem>Piora da dor com esforço, tosse ou respirar;</LItem>
            <LItem>
              Início explosivo ou súbito de cefaleia de forte intensidade, com
              início &lt; 6 meses;
            </LItem>
            <LItem>
              Presença de sinais / sintomas neurológicos: alteração do nível de
              consciência, papiledema, alteração da movimentação ocular, ataxia,
              sinal focal, rigidez de nuca sem febre.
            </LItem>
            <LItem>
              Sintomas sistêmicos, como rash cutâneo, dor articular e febre
              associada a perda ponderal;
            </LItem>
            <LItem>Fatores de risco secundários (descritos acima);</LItem>
            <LItem>
              Cefaleia nova, de forte intensidade, mudança na frequência /
              intensidade da dor;
            </LItem>
            <LItem>
              Dor relacionada ao sono, com despertar noturno, ou sempre presente
              ao acordar.
            </LItem>
          </List>
          <P>
            Na suspeita de HIC com neuroimagem normal, há indicação da punção
            lombar com manometria (medida da pressão de abertura).
          </P>
        </Subsection>
      </Section>
      <Section title="Complicações mais Frequentes">
        <List>
          <LItem>
            Progressão de doença de base não diagnosticada, principalmente em
            casos com HIC;
          </LItem>
          <LItem>
            Uso abusivo de analgésicos com cefaleia crônica em pacientes com
            quadro de cefaleias primárias.
          </LItem>
        </List>
      </Section>
      <Section title="Tratamento">
        <P>
          Para as cefaleias primárias, é importante indicar as medidas não
          farmacológicas, como mudanças dos hábitos de vida, com sono adequado,
          atividade física regular, evitar jejum prolongado e uso abusivo de
          analgésicos (&gt; 2 vezes por semana), identificar alimentos
          associados à dor e evitar seu uso (principais: chocolate, alimentos
          com cafeína, alimentos com corante, glutamato monossódico, queijos).
          Durante a dor, importante o repouso em ambientes com pouca
          luminosidade e som.
        </P>
        <Table
          colWidths={[125, 100, 150, 200, 100, 100]}
          header={[
            'Medicação',
            'Idade',
            'Apresentação',
            'Dose',
            'Frequência',
            'Dose Máxima'
          ]}
          data={[
            [
              'Paracetamol',
              '> 3kg',
              'Solução 200 mg/ml',
              '13 mg/kg/dose = 1 gota/kg',
              '6/6 horas',
              '5 doses/dia'
            ],
            [
              'Dipirona',
              '> 3 meses',
              'Solução 50 mg/ml\nAmpola 500 mg/ml\nSupositório 300mg',
              '20-30 mg/kg/dose',
              '6/6 horas',
              '6 doses/dia'
            ],
            [
              'Ibuprofeno',
              '> 6 meses',
              'Solução 50 mg/ml\nSolução 100 mg/ml',
              '10 mg/kg/dose',
              '8/8 horas',
              '4 doses/dia'
            ],
            [
              'Cetoprofeno',
              '> 6 meses',
              'Solução 20 mg/ml\nAmpola 100 mg/ml',
              '1 mg/kg/dose',
              '8/8 horas',
              '4 doses/dia'
            ],
            [
              'Naproxeno',
              '> 2 anos',
              'Compromidos 250mg e 500mg',
              '10 mg/kg/dose',
              '12/12 horas',
              '1000 mg/dia'
            ],
            [
              'Sumatriptano',
              '> 6 anos',
              'Comprimidos 100mg SC 6mg',
              'Oral 25mg\nSC: 3-6mg',
              'Repetir em 2h, se necessário',
              'Oral 50mg\nSC: 6mg'
            ],
            [
              'Rizatriptano',
              '> 6 anos',
              'Comprimidos 10mg',
              '5mg',
              'Repetir em 2h, se necessário',
              '1- mg/dia'
            ],
            [
              'Dimenidrato',
              '> 2 anos',
              'Solução 25 mg/ml\nAmpola 30 mg/10ml',
              '1 mg/kg/dose',
              '6/6 horas',
              '30 mg/dose\nEV\n200 mg/dia\nVO'
            ],
            [
              'Ondansetrona',
              '> 1 mês',
              'Comprimido 4-8mg\nAmpola 2 mg/ml',
              '0.15 mg/kg/dose',
              '8/8 horas',
              '8 mg/dose'
            ]
          ]}
        />
        <P>
          A analgesia deve ser realizada de acordo com a intensidade da dor, com
          analgésicos comuns, AINES ou antieméticos, dependendo do quadro
          clínico. Os triptanos estão indicados para enxaquecas de forte
          intensidade e refratárias aos analgésicos comuns e / ou AINES.
        </P>
        <P>
          Não há indicação de opióides para o tratamento das cefaleias
          primárias, pois podem modificar a resposta à dor e levar ao seu uso
          abuso e adição.
        </P>
        <P>
          Durante as crises de enxaqueca, é comum a paresia gástrica e redução
          da absorção das medicações via oral, sendo indicada outra via de
          administração (venosa, retal, nasal).
        </P>
        <P>A analgesia deve ser sempre precoce.</P>
      </Section>
      <Section title="Critérios de Internação">
        <List>
          <LItem>
            Suspeita de causa secundária da dor com necessidade de investigação;
          </LItem>
          <LItem>
            Tratamento da doença de base, em pacientes com diagnóstico prévio;
          </LItem>
          <LItem>Ausência de controle adequado da dor.</LItem>
        </List>
      </Section>
      <Section title="Critérios de Alta">
        <List>
          <LItem>Melhora ou alívio da dor;</LItem>
          <LItem>
            Ausência de sinais de HIC ou outras cefaleias secundárias de
            potencial gravidade.
          </LItem>
        </List>
      </Section>
      <Section title="Observações">
        <P>
          Pacientes com cefaleias recorrentes, sugestivas de cefaleias
          primárias, como enxaqueca e cefaleia tensional, com frequência &gt; 3
          episódios ao mês e / ou prejuízo das suas atividades de vida diária,
          devem ser encaminhados para acompanhamento ambulatorial com
          Neuropediatra.
        </P>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Gelfand AA.  Pediatric and Adolescent Headache. Continuum (Minneap Minn). 2018 Aug;24(4, Headache):1108-1136."
        />
        <Reference
          idx={2}
          body="Blume HK. Childhood Headache: A Brief Review. Pediatr Ann. 2017 Apr 1;46(4):e155-e165."
        />
        <Reference
          idx={3}
          body="Merison K, Jacobs H. Diagnosis and Treatment of Childhood Migraine. Curr Treat Options Neurol. 2016 Nov;18(11):48."
        />
        <Reference
          idx={4}
          body="Munday S, Rao A. Always on my mind: Headache in children. Emerg Med Australas. 2016 Aug;28(4):376-8."
        />
        <Reference
          idx={5}
          body="Lanteri-Minet M, Valade D, Geraud G, Lucas C, Donnet A. Revised French guidelines for the diagnosis and management of migraine in adults and children. J Headache Pain. 2014 Jan 8;15:2."
        />
        <Reference
          idx={6}
          body="Abu-Arafeh I, Razak S, Sivaraman B, Graham C. Prevalence of headache and migraine in children and adolescents: a systematic review of population-based studies. Dev Med Child Neurol. 2010 Dec;52(12):1088-97."
        />
        <Reference
          idx={7}
          body="Lateef TM, Grewal M, McClintock W, Chamberlain J, Kaulas H, Nelson KB. Headache in young children in the emergency department: use of computed tomography. Pediatrics. 2009 Jul;124(1):e12-7."
        />
      </Section>
    </Routine>
  )
}
