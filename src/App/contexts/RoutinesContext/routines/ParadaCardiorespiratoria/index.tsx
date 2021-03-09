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
import img2 from './images/image2.png'
import img3 from './images/image3.png'
import img4 from './images/image4.png'
import img5 from './images/image5.png'
import img6 from './images/image6.png'

export default function ParadaRespiratoria(): JSX.Element {
  return (
    <Routine
      id="parada-respiratoria"
      name="Parada Cardiorrespiratória"
      category="emergencia"
      authors={['luiz']}
      tags={['PCR', 'PALS']}
    >
      <Section title="Introdução">
        <P>
          Esta rotina aborda ressuscitação cardiopulmonar em pediatria em
          ambiente hospitalar. É é baseada nas diretrizes do International
          Liaison Committee on Resuscitation (ILCOR), de 2020, constituída pelos
          principais comitês de ressuscitação do mundo. Envolve um conjunto de
          medidas que visa restabelecer a função respiratória e circulatória, e
          estão indicadas na parada cardiorrespiratória e na bradicardia com
          sinais de hipoperfusão.
        </P>
      </Section>
      <Section title="Definição">
        <P>
          Entende-se por parada cardiorrespiratória (PCR) a ausência de pulso, a
          apneia ou gasping e a ausência de responsividade. Ocorre a interrupção
          da circulação sanguínea como resultado da ausência ou ineficácia da
          atividade mecânica cardíaca.
        </P>
      </Section>
      <Section title="Causas">
        <P>
          Enquanto a PCR em adultos ocorre de maneira súbita, geralmente
          relacionada à fibrilação ou taquicardia ventricular, em crianças,
          ocorre mais frequentemente por <Bold>hipóxia</Bold> relacionada a uma
          piora respiratória ou cardiocirculatória progressiva. Portanto,
          deve-se atentar para as situações de baixa oxigenação, de baixa
          ventilação e de perfusão tecidual inadequadas.
        </P>
        <P>
          Taxa de sobrevida: variável de acordo com o local. Se ocorrer em
          ambiente hospitalar está em torno de 43% e extra-hospitalar de 8%.
          Também será mais alta se o ritmo for chocável – 25% a 34% e de 7% a
          24% se for assistolia.
        </P>
      </Section>
      <Section title="Como proceder">
        <P>
          A avaliação, diagnóstico e conduta devem começar em, no máximo, 10
          segundos. A criança em PCR se apresentará irresponsiva, ou seja, sem
          contactuar, sem resposta verbal e sem resposta à dor. Estará em apneia
          ou em <Italic>gasping</Italic>; não apresentará movimento respiratório
          ou se este existir, será insuficiente para a captação de oxigênio. A
          avaliação é <Bold>por inspeção</Bold>. Os pulsos estarão ausentes,
          tanto os centrais quanto os periféricos, e a checagem se dá pela
          palpação dos principais pontos: braquial para os menores de um ano,
          carotídeo para os maiores de 1 ano e femoral e radial para todas as
          idades. Outros pulsos também poderão ser checados. Estes três
          elementos avaliados são suficientes para o diagnóstico de uma PCR
          (criança irresponsiva, em apneia ou <Italic>gasping</Italic> e sem
          pulso palpável). Imediatamente, inicia-se a RCP de alta qualidade,
          baseada em manobras que serão descritas logo a seguir e de ações
          auxiliares, como a monitorização contínua, a instalação de oxigênio,
          obtenção de acesso vascular e aferição da glicemia capilar. As
          medicações e eletroterapia devem ser concomitantes de acordo com a
          necessidade de cada caso.
        </P>
        <P>
          A assistência adequada, em ambiente hospitalar, começa com uma boa
          equipe formada por profissionais que tenham experiência médica e
          domínio das habilidades de ressuscitação, bem como uma boa dinâmica e
          comunicação. É importante ter funções definidas, responsabilidades
          claras, conhecer as limitações de cada um, compartilhar conhecimentos,
          intervenção construtiva e respeito mútuo.
        </P>
        <Figure
          source={img1}
          size={[852, 655]}
          title="Disposição dos Socorristas"
        />
        <Table
          colWidths={[100, 200]}
          header={['Função', 'Responsabilidades']}
          data={[
            [
              'Líder',
              'Coordena a tentativa de ressuscitação\nMonitora o desempenho das tarefas\nImprime um comportamento excelente na equipe'
            ],
            [
              'Ventilação',
              'Checa o equipamento e oferece oxigênio\nInsere a cânula nasofaríngea ou orofaríngea\nAplica ventilação com bolsa-valva-máscara\nInsere o tubo nasogástrico ou orogástrico\nPrepara/realiza a intubação endotraqueal'
            ],
            ['Compressão', 'Aplica as compressões torácicas'],
            [
              'IV / IO',
              'Obtém um acesso IV/IO\nPrepara e administra os medicamentos e os fluidos'
            ],
            [
              'Monitor / desfibrilador / capnógrafo',
              <Text key={1}>
                Estabelece e opera o equipamento{'\n'}ECG{'\n'}Analisa o pulso e
                CO<Subscript>2</Subscript> exalado
              </Text>
            ],
            [
              'Observador / registrador',
              'Monitora o desempenho da equipe usando a lista de checagem de competências'
            ]
          ]}
        />
        <P>
          A RCP de alta qualidade baseia-se em{' '}
          <Bold>compressões torácicas e ventilações</Bold>. A sequência
          recomendada nas diretrizes atuais começa com compressões, depois,
          abertura de vias aéreas e ventilação. As <Bold>compressões</Bold>{' '}
          devem ser fortes o suficiente para pressionar o tórax no terço
          inferior do esterno, aproximadamente 4 a 5 cm de profundidade,
          permitir o retorno torácico por completo para que haja retorno venoso;
          numa frequência entre 100 e 120 compressões por minuto, deve-se
          minimizar ao máximo as interrupções e evitar ventilações excessivas,
          pois isso pode ser prejudicial, uma vez que impede o retorno venoso e
          diminui e débito cardíaco. As <Bold>ventilações</Bold> precisam ser
          seguras e adequadas, ou seja, com o paciente intubado e conectado a
          uma fonte de oxigênio – a elevação do tórax deve ser observada. A
          ventilação com bolsa-valva-máscara é tão eficaz quanto a intubação,
          por isso, orienta-se a não perder tempo tentando intubar quando há
          dificuldade. A relação compressão-ventilação pode variar de acordo com
          o número de socorristas. Via de regra, quando há apenas 1 socorrista,
          executa-se 30:2 (30 compressões para 2 ventilações) e quando tem 2
          socorristas, a proporção é de 15:2. Enquanto a execução das manobras
          de ressuscitação utilizar bolsa e máscara para ventilação, segue-se a
          relação descrita anteriormente e, caso haja intubação do paciente,
          aquele que estiver fazendo as compressões deve manter uma frequência
          entre 100 a 120 por minuto e quem estiver na ventilação, executa-a 1
          vez a cada 2 a 3 segundos, o que resultará em 20 a 30 ventilações por
          minuto. A cada 2 minutos (ou menos, se houver cansaço) os socorristas
          deverão se revezar nas compressões e o tempo de troca deverá ser o
          mínimo possível.
        </P>
        <P>
          A ressuscitação cardiopulmonar (RCP) não encerra o tratamento
          curativo, mas permite uma perfusão tecidual adequada até que a causa
          deflagradora da parada cardiorespiratória seja controlada. O controle
          e estabilização do paciente são fundamentais para que o mesmo possa
          adquirir condições de ser removido até uma unidade de terapia
          intensiva.
        </P>
        <P>
          Em PCR há ausência de pulso, o que chamamos de{' '}
          <Bold>ritmo de colapso</Bold>, que envolve quatro situações clínicas,
          cada uma com suas peculiaridades, potencial de complicações e
          tratamentos distintos, e que só poderão ser diagnosticadas com o
          auxílio de um monitor cardíaco. A seguir, mostraremos o padrão
          elétrico de cada uma. O tratamento será mostrado no algoritmo,
          adiante.
        </P>
        <Figure
          source={img2}
          size={[276, 63]}
          title="Taquicardia Ventricular sem Pulso"
        />
        <Figure source={img3} size={[283, 79]} title="Fibrilação Ventricular" />
        <Figure source={img4} size={[186, 46]} title="Assistolia" />
        <Figure
          source={img5}
          size={[303, 58]}
          title="Atividade Elétrica sem Pulso"
        />
        <Figure
          source={img6}
          size={[826, 793]}
          title="Algoritmo de Parada Cardiorrespiratória"
        />
        <P>
          <Bold>
            Fibrilação ventricular (FV); Taquicardia ventricular sem pulso
            (TVSP); Atividade eleétrica sem pulso (AESP).
          </Bold>
        </P>
        <P>
          Tamanho das pás: infantis para menores de 1 ano ou de 10 kg{' '}
          <Bold>e</Bold> tipo adulto para os maiores.
        </P>
        <P>
          <Bold>Atividade elétrica sem pulso (AESP)</Bold>
        </P>
        <P>
          <Bold>
            <Italic>Trate a causa</Italic>
          </Bold>
        </P>
        <P>Causas:</P>
        <List>
          <LItem>Hipovolemia;</LItem>
          <LItem>Hipóxima;</LItem>
          <LItem>Hidrogênio (acidose);</LItem>
          <LItem>Hipo/Hiperpotassemia;</LItem>
          <LItem>Hipoglicemia;</LItem>
          <LItem>Hipotermia;</LItem>
          <LItem>Toxinas;</LItem>
          <LItem>Tamponamento cardíaco;</LItem>
          <LItem>Tensão no tórax (pneumotórax);</LItem>
          <LItem>Tromboembolismo pulmonar;</LItem>
          <LItem>Trombose coronária.</LItem>
        </List>
      </Section>
      <Section title="Algumas Drogas">
        <List>
          <LItem>
            <Bold>Adrenalina:</Bold> 0,01 mg/kg (0,1 ml/kg solução 1:10000) IV
            ou IO a cada 3 a 5 minutos;
          </LItem>
          <LItem>
            <Bold>Atropina:</Bold> 0,02 mg/kg (máx 0,5 mg em crianças e 1g em
            adolescentes) – bloqueio e atividade vagal;
          </LItem>
          <LItem>
            <Bold>Amiodarona:</Bold> 5 mg/kg – pode ser repetida até 2x;
          </LItem>
          <LItem>
            <Bold>Lidocaína:</Bold> 1 mg/kg.
          </LItem>
        </List>
        <P>
          <Bold>Importante:</Bold> sugere-se a realização de cursos
          teórico-práticos avançados sobre o tema - PCR em pediatria, com o
          objetivo de aprimorar os conhecimentos e habilidades dos pediatras,
          multiplicando o aprendizado, para que cada vez mais, as crianças
          tenham uma boa recuperação, minimizando sequelas.
        </P>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="American Heart Association, Suporte Avançado de vida em Pediatria. Manual do profissional, Orora visual, 3210 Innovative Way, Mesquite, Texas, EUA, edição em português, 2017."
        />
        <Reference
          idx={2}
          body="Schvartsman C, Reis A, Farhat S, Pronto-socorro, 3ª edição, Barueri SP, Ed. Manole, 2018."
        />
      </Section>
    </Routine>
  )
}
