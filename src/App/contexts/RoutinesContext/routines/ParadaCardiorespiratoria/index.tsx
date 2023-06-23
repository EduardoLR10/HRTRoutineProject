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
      categories={['emergencia', 'cardiologia']}
      authors={['luiz']}
      tags={['PCR', 'PALS']}
    >
      <Section title="Introdução">
        <P>
          Esta rotina aborda ressuscitação cardiopulmonar em pediatria em
          ambiente hospitalar. É baseada nas diretrizes de 2020, do
          International Liaison Committee on Resuscitation (ILCOR), constituída
          pelos principais comitês de ressuscitação do mundo. Envolve um
          conjunto de medidas que visam restabelecer a função respiratória e
          circulatória e estão indicadas na parada cardiorrespiratória e na
          bradicardia com sinais de hipoperfusão.
        </P>
      </Section>
      <Section title="Definição">
        <P>
          Entende-se por parada cardiorrespiratória (PCR) a ausência de pulso, a
          apneia ou <Italic>gasping</Italic> e a ausência de responsividade.
          Ocorre a interrupção da circulação sanguínea como resultado da
          ausência ou ineficácia da atividade mecânica cardíaca.
        </P>
      </Section>
      <Section title="Causas">
        <P>
          Enquanto a PCR em adultos ocorre de maneira súbita, geralmente
          relacionada à fibrilação ou taquicardia ventricular, em crianças,
          ocorre mais frequentemente por hipóxia relacionada a uma piora
          respiratória ou cardiocirculatória progressiva. Portanto, esteja
          atento às situações de baixa oxigenação, ventilação e à perfusão
          tecidual inadequadas.
        </P>
      </Section>
      <Section title="Taxa de Sobrevida">
        <P>
          Variável de acordo com o local. Se ocorrer em ambiente hospitalar,
          está em torno de 43% e, extra-hospitalar, de 8%. Também será mais alta
          se o ritmo for chocável (25% a 34%) e de 7% a 24%, em casos de
          assistolia.
        </P>
      </Section>
      <Section title="Como proceder">
        <P>
          A avaliação, diagnóstico e conduta deve começar em no máximo 10
          segundos. A criança em PCR se apresentará sem responsividade, ou seja,
          sem contactuar, sem resposta verbal e sem resposta a dor. Estará em
          apneia ou <Italic>gasping</Italic>; não apresentará movimento
          respiratório ou, se este existir, não será suficiente para a captação
          de oxigênio. A avaliação é por inspeção. Os pulsos estarão ausentes,
          tanto os centrais quanto os periféricos, e a checagem se dá pela
          palpação dos principais pontos: braquial para os menores de 1 ano,
          carotídeo para os maiores de 1 ano e femoral e radial para todas as
          idades. Outros pulsos poderão ser checados. Estes três valores são
          suficientes para o diagnóstico de uma PCR (sem responsividade, apneia
          ou gasping e sem pulso palpável). Imediatamente, inicia-se a
          reanimação cardiopulmonar (RCP) de alta qualidade, que se baseia em
          manobras e ações auxiliares, como a monitorização contínua, a
          instalação de oxigênio, acesso vascular e glicemia capilar. As
          medicações e eletroterapia devem ser concomitantes de acordo com a
          necessidade de cada caso.
        </P>
        <P>
          A assistência adequada, em ambiente hospitalar, começa com uma boa
          equipe formada por profissionais que tenham experiência e domínio das
          habilidades de ressuscitação, bem como uma boa dinâmica e comunicação.
          É importante ter funções definidas, responsabilidades claras, conhecer
          as limitações de cada um, compartilhar conhecimentos, intervenção
          construtiva e respeito mútuo.
        </P>
        <Figure
          source={img1}
          size={[752, 555]}
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
                CO₂ exalado
              </Text>
            ],
            [
              'Observador / registrador',
              'Monitora o desempenho da equipe usando a lista de checagem de competências'
            ]
          ]}
        />
        <P>
          A RCP de alta qualidade se baseia em compressões torácicas e
          ventilações. A sequência recomendada nas diretrizes atuais começa com
          compressões, depois abertura de vias aéreas e ventilação.
        </P>
        <P>
          As compressões devem ser fortes o suficiente para pressionar o tórax
          no terço inferior do esterno, aproximadamente 4 a 5 cm de
          profundidade, permitir o retorno torácico por completo para que haja
          retorno venoso, numa frequência entre 100 e 120 compressões por
          minuto.
        </P>
        <P>
          Deve-se minimizar ao máximo as interrupções e evitar ventilações
          excessivas, pois isso pode ser prejudicial ao impedir o retorno venoso
          e diminuir o débito cardíaco. As ventilações precisam ser seguras e
          adequadas – a elevação do tórax deve ser observada.
        </P>
        <P>
          A ventilação com bolsa-valva-máscara é tão eficaz quanto a intubação e
          não se deve perder tempo tentando intubar se há dificuldade. A relação
          compressão-ventilação pode variar de acordo com o número de
          socorristas; quando há apenas 1 socorrista, executa-se 30:2 (30
          compressões para 2 ventilações) e quando há 2 socorristas, a proporção
          é 15:2 (15 compressões para 2 ventilações).
        </P>
        <P>
          Caso o paciente esteja intubado a relação compressão-ventilação não
          existe, enquanto 1 faz 100-120 compressões por minuto, o outro faz 1
          ventilação a cada 2 a 3 segundos. A cada dois minutos, ou menos se
          houver cansaço, os socorristas deverão se revezar nas compressões e o
          tempo de troca deverá ser o mínimo possível.
        </P>
        <P>
          A RCP não encerra o tratamento curativo, mas é um meio que permite a
          perfusão tecidual adequada até que a causa desencadeante seja
          controlada. O controle e estabilização do paciente são fundamentais
          para que possamos dar condições de remoção até uma unidade de terapia
          intensiva.
        </P>
        <P>
          Em PCR há ausência de pulso, o que chamamos de ritmo de colapso, que
          envolve quatro situações clínicas, cada uma com sua peculiaridade de
          complicação e tratamento e que só poderão ser diagnosticadas com o
          auxílio de um monitor cardíaco. Abaixo, há o padrão elétrico de cada
          um. Cada tratamento seguirá um algoritmo.
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
          size={[726, 693]}
          title="Algoritmo de Parada Cardiorrespiratória"
        />
        <P>
          <Bold>
            FV – fibrilação ventricular; TVSP – taquicardia ventricular sem
            pulso; AESP – atividade elétrica sem pulso.
          </Bold>
        </P>
        <P>
          Tamanho das pás: infantis para menores de 1 ano ou 10 kg e tipo adulto
          para os maiores.
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
          <Bold>Importante:</Bold> cursos avançados para o manejo de PCR(s) em
          crianças devem ser realizados, com a finalidade de aprimorar os
          conhecimentos e habilidades, multiplicando o aprendizado, para que
          cada vez mais, as crianças possam se recuperar com o mínimo de sequela
          possível.
        </P>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="http://www.bombeiros.pr.gov.br/arquivos/File/1gb/socorros/Viasaereas.pdf"
        />
        <Reference
          idx={2}
          body={
            'American Heart Association, Suporte Avançado de vida em Pediatria. Manual do profissional, Orora visual, 3210 Innovative Way, Mesquite, Texas, EUA, edição em português, 2020'
          }
        />
        <Reference
          idx={3}
          body="Condutas pediátricas no pronto atendimento e na terapia intensiva / editoras Luciana Rodrigues Silva, Luanda Flores da Costa, 2. ed, Santana de Parnaíaba, SP, Editora Manole, 2020."
        />
        <Reference
          idx={4}
          body={
            'Pronto-socorro / coordenadores Claudio Schvartsman, Amélia Gorete Reis, Sylvia Costa Lima Farat, 4. ed, Barueri, SP, Editora Manole,2023.'
          }
        />
        <Reference
          idx={5}
          body={
            'Urgências e Emergências Pediátricas, manual para rápida tomada de decisão / Adriana Pasmanik Eisencraft, Sylvia Costa Lima farah. - 1 ed, Rio de Janeiro, Editora Guanabara Koogan, 2021.'
          }
        />
      </Section>
    </Routine>
  )
}
