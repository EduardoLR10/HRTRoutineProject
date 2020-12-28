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

export default function Mastoidite(): JSX.Element {
  return (
    <Routine
      id="mastoidite"
      name="Mastoidite"
      category="infectologia"
      authors={['iuri', 'marco']}
      tags={[]}
    >
      <Section title="Conceito, etiologia e epidemiologia">
        <P>
          É uma complicação potencial de todos os casos de otite média aguda
          (OMA), constituindo a complicação mais grave e frequente. O
          revestimento mucoperiósteo da mastoide encontra-se em continuidade com
          o do ouvido médio e, por isso, a OMA acompanha-se de algum grau de
          inflamação mastoideia. Estes casos – mastoidite simples sem
          periosteíte/osteíte – não se associam à presença de sinais
          inflamatórios retroauriculares e não deverão ser considerados
          complicação da OMA. O processo mastoide é uma divisão do osso temporal
          que forma parte da lateral e base do crânio que se conecta com o
          ouvido médio pelo chamado <Italic>aditus ad antrum</Italic>, que é uma
          conexão estreita entre essas duas estruturas. O agente mais
          frequentemente envolvido é o <Italic>Streptococcus pneumoniae</Italic>
          ; outros agentes implicados são:{' '}
          <Italic>Haemophilus influenzae</Italic>,{' '}
          <Italic>Moraxella catarrhalis</Italic>,{' '}
          <Italic>Streptococcus pyogenes</Italic>,{' '}
          <Italic>Pseudomonas aeruginosa</Italic> e{' '}
          <Italic>Staphylococcus aureus</Italic>. Considerada aguda até 1 mês de
          evolução, sendo crônica a partir de então. A mastoidite aguda é mais
          frequente no sexo masculino, verificando-se que a maioria das crianças
          apresenta uma idade inferior a 4 anos, o que é concordante com o pico
          etário da OMA.
        </P>
        <P>
          <Bold>Fatores de risco:</Bold> é mais frequente em crianças do que em
          adultos e pode estar relacionada com pacientes imunossuprimidos,
          otites de repetição, o uso indiscriminado de antibióticos,
          condicionando o aumento das resistências do pneumococo à penicilina, e
          o aparecimento de sorotipos multirresistentes, nomeadamente o 19A e
          complicações cirúrgicas.
        </P>
      </Section>
      <Section title="Diagnóstico Clínico">
        <P>
          A clínica surge apenas quando o processo inflamatório evolui e envolve
          o periósteo que recobre a mastoide – mastoidite aguda com periosteíte.
          Numa fase posterior, ocorre acumulação de material purulento, cuja
          pressão conduz à desmineralização e necrose óssea – mastoidite com
          osteíte. Deste modo, o diagnóstico de mastoidite aguda é{' '}
          <Bold>eminentemente clínico</Bold> e está na dependência do estádio da
          doença. Na mastoidite com periosteíte ocorrem sinais inflamatórios a
          nível periauricular, resultando na típica protrusão do pavilhão
          auricular. Não existem diferenças clínicas entre a mastoidite com
          periosteíte e a mastoidite com osteíte, embora esta última se associe,
          geralmente, à presença de um abcesso subperiósteo. Sinais e sintomas
          frequentes: dor, flogose e abaulamento do processo mastoideo,
          geralmente unilateral, frequentemente com abaulamento da orelha.
          Deve-se atentar para não se confundir o quadro de mastoidite com
          adenites retroauriculares, cervicais ou parotidites. Uma palpação
          cautelosa da região geralmente é suficiente para que se discerne a
          mastoidite dos outros quadros. Geralmente o quadro é associado a
          febre, queda do estado geral (ainda que leve), otite média detectada
          ao exame otoscópico e sintomas respiratórios como tosse e coriza.
        </P>
        <Table
          colWidths={[100, 100, 150]}
          header={['', '', '']}
          data={[
            ['1ª fase', 'simples', 'inflamação da mucosa (na fase da OMA)'],
            [
              '2ª fase',
              '*com periosteíte',
              'propagação da infecção ao periósteo adjacente'
            ],
            [
              '3ª fase',
              'com osteíte',
              'destruição do osso trabeculado das células mastoideas'
            ]
          ]}
          title="As três fases evolutivas da mastoidite aguda"
          caption="* Quando surgem os sinais retroauriculares característicos."
        />
      </Section>
      <Section title="Diagnóstico Laboratorial">
        <P>
          A suspeição clínica pode ser confirmada com um exame tomográfico
          (tomografia de mastoide com contraste). Geralmente observa-se
          preenchimento das células mastóideas por líquido. Deve-se atentar,
          todavia que cerca de 60% dos exames tomográficos são falso-positivos,
          portanto, não se deve tratar crianças com exame alterado que não
          apresentem clínica compatível. A tomografia também permite avaliar
          complicações como abscessos e erosões ósseas. O hemograma pode ser
          normal ou apresentar leucocitose e pode haver aumento das provas de
          atividade inflamatória.
        </P>
      </Section>
      <Section title="Critérios de Internação">
        <P>
          A princípio, todas as crianças com suspeita de mastoidite devem ser
          internadas para realização da tomografia e início de tratamento com
          antibiótico endovenoso.
        </P>
      </Section>
      <Section title="Compliações Mais Frequentes">
        <P>
          São raras, mas podem acarretar necessidade de parecer cirúrgico.
          Dividem-se em dois grupos: intracranianas e extracranianas. As
          complicações extracranianas são: o abscesso subperiósteo, abscesso de
          Bezold (complicação muito rara que ocorre quando há disseminação do
          abscesso desde a ponta da mastoide para a região cervical, envolvendo
          o músculo esternocleidomastóideo), paralisia facial periférica,
          labirintite e petrosite. As complicações intracranianas incluem:
          meningite, empiema epidural e subdural, e trombose de seios venosos.
        </P>
      </Section>
      <Section title="Tratamento Empírico">
        <P>
          Rotineiramente, ceftriaxona na dose de 50 a 80 mg/kg/dia com máximo de
          2 gramas ao dia (100 mg/kg/dia com máximo de 4 gramas ao dia em caso
          de suspeita de meningite e reduzindo quando descartar).
        </P>
        <P>
          Uma segunda opção para casos mais brandos é ampicilina com sulbactam
          (200 mg/kg/dia), que permite mais facilmente a continuidade oral do
          tratamento no momento da alta.
        </P>
        <P>
          Em pacientes sadios, sem complicações, o tratamento venoso pode ser
          encurtado para 7 dias, mas rotineiramente se preconiza ao menos de 10
          a 14 dias de tratamento parenteral. Casos complicados podem demandar
          até 28 dias de tratamento venoso. A duração total do tratamento deve
          ser de 6 semanas e a droga oral de substituição do tratamento
          parenteral poderá ser com cefuroxima, na dose de 30 mg/Kg/dia ou
          amoxicilina com clavulanato na dose de 50 mg/kg/dia.
        </P>
      </Section>
      <Section title="Critérios de Alta">
        <P>
          Resolução dos sintomas infecciosos, mais de 48 horas afebril. No caso
          de alterações tomográficas significativas, <Bold>é necessário exame tomográfico de
          controle.</Bold>
        </P>
      </Section>
      <Section title="Prognóstico e Orientações para o Seguimento">
        <P>
          Acompanhamento ambulatorial nos casos graves ou neurológicos,
          monitoramento para sequelas. Acompanhamento na otorrinolaringologia no
          caso de complicações ou comorbidades.
        </P>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Kliegman, R. M. et al. Nelson: Tratado de pediatria. Editora Elsevier."
        />
        <Reference
          idx={2}
          body="DynaMed [Internet]. Ipswich (MA): EBSCO Information Services. 1995 - . Record No. 116609, Acute mastoiditis; [atualizado em 2018 Jul 11]"
        />
      </Section>
    </Routine>
  )
}
