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

export default function ArtriteSeptica(): JSX.Element {
  return (
    <Routine
      id="artrite-sep"
      name="Artrite Séptica (AS)"
      categories={['hematologia-reumatologia-nefrologia', 'emergencia']}
      authors={['dania', 'fabricio']}
      tags={['séptico']}
    >
      <Section title="Definição">
        <P>
          A artrite séptica (AS) pode ser definida como uma reação inflamatória
          resultante da invasão do espaço articular por micro-organismos.
        </P>
      </Section>
      <Section title="Aspectos Gerais">
        <P>
          Pode ocorrer em qualquer faixa etária, mas é mais prevalente em
          crianças. Seu início é geralmente agudo, manifestando-se clinicamente
          com dor, edema, limitação de movimento e, se não tratada, há
          destruição da articulação, com déficit motor permanente.
        </P>
      </Section>
      <Section title="Importância">
        <P>
          Apesar da baixa incidência da doença, os avanços nos métodos
          diagnósticos e na terapêutica não foram suficientes para reduzir sua
          elevada morbimortalidade. Dessa maneira, o tema continua relevante
          para a prática médica, uma vez que um elevado índice de suspeição
          clínica é a chave para um diagnóstico precoce e consequente sucesso
          terapêutico.
        </P>
      </Section>
      <Section title="Epidemiologia">
        <P>
          Predomina na faixa etária infantojuvenil, sendo que aproximadamente
          metade dos casos ocorre antes dos 20 anos de idade (com predomínio nos
          menores de 3 anos). Sua incidência oscila de 5,5 a 12 casos em cada
          100.000 crianças, e o sexo masculino é 2 a 3 vezes mais atingido do
          que o feminino. Os joelhos e os quadris são as articulações mais
          acometidas.
        </P>
      </Section>
      <Section title="Fatores de Risco">
        <P>
          Trauma, doença falciforme, hemofilia, imunodeficiências primária e
          secundária, artrite reumatóide, artrites crônicas, próteses
          articulares, uso de drogas venosas, história de cirurgias recentes,
          diabetes mellitus, hemodiálise e presença de infecções cutâneas.
        </P>
      </Section>
      <Section title="Etiologia">
        <P>
          O estafilococo aureus é o microorganismo mais frequente em todas as
          faixas etárias, exceto no período neonatal, no qual há predomínio do
          estreptococo do grupo B, seguido pelo S. aureus. Outros agentes
          comumente isolados são os estreptococos beta-hemolíticos do grupo A,
          pneumococo e hemofilo (atualmente menos frequente, após inclusão da
          vacinação de rotina no primeiro ano de vida). A salmonela deve ser
          considerada em crianças com doença de pele, portadores de anemia
          falciforme e lúpus eritematoso sistêmico. A Kingella kingae tem sido
          considerada importante bactéria em pacientes com menos de dois anos de
          idade, sobretudo nas infecções ósseas e articulares de etiologia
          indefinida precedidas por estomatite e infecção das vias aéreas
          superiores.
        </P>
      </Section>
      <Section title="Fisiopatogenia">
        <P>
          A penetração da bactéria no líquido sinovial pode ser por via
          hematogênica associada à bacteremia persistente ou transitória, como
          ocorre na presença de catéteres, em caso de uso de drogas intravenosas
          ou na endocardite bacteriana. Ocorre também associada com a
          contiguidade de outro foco infeccioso, como na osteomielite, celulite
          ou abscesso e inoculação direta devido a procedimento cirúrgico
          (punção da veia femoral, injeção intra-articular, trauma penetrante).
          Na criança, há predomínio da via hematogênica, o que é favorecido pela
          grande vascularização da sinóvia e pela comunicação da epífise com a
          metáfise por vasos sanguíneos.
        </P>
        <P>
          Necessidade de <Bold>urgência diagnóstica:</Bold> a invasão do espaço
          articular por bactérias segue-se pela liberação de endotoxinas e
          consequente estímulo à produção de citocinas, como o fator de necrose
          tumoral e interleucina-1, que por sua vez incitam a migração de
          leucócitos e a liberação de enzimas proteolíticas. Esses fatores
          combinados proporcionam a destruição da sinóvia e da matriz
          cartilaginosa, que se inicia logo nas primeiras 24 a 48 horas.
        </P>
      </Section>
      <Section title="Quadro Clínico">
        <P>
          As manifestações clínicas geralmente precedem a internação hospitalar
          por 4 a 7 dias e dependem da faixa etária do paciente, do sítio de
          infecção e do agente etiológico. É predominantemente
          <Bold> monoarticular</Bold> acometendo grandes articulações, sendo as
          principais os joelhos e quadris, além dos tornozelos, respondendo,
          pelo menos, por 80% dos casos. Os sintomas mais importantes são a dor
          de início súbito, rubor, calor, aumento de volume articular com
          limitação funcional (claudicação ou recusa a andar), postura antálgica
          em repouso e febre.
        </P>
      </Section>
      <Section title="Diagnóstico">
        <P>
          A artrite séptica deve ser suspeitada em crianças que apresentam
          síndrome febril, dor monoarticular, edema e limitação de movimentos. O
          diagnóstico é confirmado pelo isolamento da bactéria no líquido
          sinovial ou em hemocultura.
        </P>
      </Section>
      <Section title="Diagnóstico Diferencial">
        <P>
          Sinovite transitória, dor pós-traumática, a doença de
          Legg-Calvé-Perthes, monoartrite tuberculosa, tumores, artrite
          reacional ou pós-infecciosa, doenças reumatológicas, entre outras.
        </P>
      </Section>
      <Section title="Exames">
        <P>
          A aspiração do líquido sinovial e sua análise devem ser feitas
          <Bold> imediatamente</Bold> quando se suspeita de artrite séptica. No
          hemograma pode haver anemia leve a moderada, leucocitose com
          neutrofilia e desvio a esquerda, há aumento da velocidade de
          hemossedimentação (VHS), proteína C reativa aumentada (PCR),
          hemocultura (positiva em 40% dos casos) e análise do líquido sinovial
          para contagem de leucócitos, Gram e cultura.
        </P>
      </Section>
      <Section title="Exames de Imagem">
        <P>
          A radiografia da articulação é de pouca validade diagnóstica, uma vez
          que as alterações características, ocorrem em estágio tardio da
          doença. A tomografia computadorizada não é realizada rotineiramente,
          mas é de grande valia para a avaliação de áreas de anatomia complexa
          (ombros, quadril e junção sacroilíaca). A ressonância magnética é mais
          sensível do que outras modalidades de exames de imagem no que se
          refere à detecção precoce de fluido articular. A ultrassonografia é
          útil para avaliar a presença de líquido nas articulações, em especial
          as mais profundas como a do quadril, bem como para guiar a punção
          articular, mas tem baixa especificidade. A cintilografia óssea é
          bastante sensível e, juntamente com a suspeita clínica, sua
          impregnação corrobora com o diagnóstico.
        </P>
      </Section>
      <Section title="Tratamento">
        <P>
          Inclui esterilização, descompressão do espaço articular e remoção de
          debris inflamatórios, a fim de aliviar a dor e evitar deformidades ou
          sequelas funcionais. A drenagem articular e a antibioticoterapia são
          os pilares do tratamento. A escolha do antibiótico inicial deve ser
          baseada na faixa etária e em fatores de risco, podendo sofrer os
          ajustes necessários após resultado da cultura do líquido sinovial. A
          via de administração do antibiótico deve ser parenteral, por 2 a 4
          semanas, podendo ser mudada para esquema oral desde que os parâmetros
          clinico-laboratoriais tenham melhorado, com tempo total de tratamento
          entre 4 e 8 semanas. Os esquemas antibióticos consistem basicamente na
          associação de penicilina antiestafilocócica, como a oxacilina, a uma
          cefalosporina de terceira geração, como a ceftriaxona ou a cefotaxima.
          Esse esquema cobre cocos Gram positivos, em especial estafilococo
          aureus e estreptococo sp., além de bacilos Gram negativos. Em
          pacientes previamente hígidos, entretanto, pode-se omitir a
          cefalosporina de terceira geração e cobrir apenas cocos Gram
          positivos. A Kingella pode ser tratada com uma cefalosporina de
          segunda ou terceira geração, penicilina cristalina ou ampicilina.
        </P>
      </Section>
      <Section title="Prognóstico">
        <P>
          Depende do diagnóstico precoce e do início adequado do tratamento,
          sendo ambos de extrema importância para se evitar a destruição, a
          formação de sequelas e a perda irreversível da função articular. As
          taxas de letalidade giram em torno de 10%. A artrite séptica apresenta
          alta morbidade, sendo que 25 a 50% dos pacientes podem evoluir com
          acometimento ósseo, anquilose, necrose avascular e luxação do quadril.
          Nas crianças, nota-se frequentemente alterações do crescimento do
          membro por acometimento da cartilagem de crescimento.
        </P>
        <Table
          colWidths={[150, 200, 150, 200, 200]}
          header={[
            'Idade',
            'Germes Prováveis',
            'Antibiótico',
            'Dose (mg/Kg/dia)',
            'Número de doses/dia'
          ]}
          data={[
            [
              'Neonato',
              'Estreptococo B\nEstafilo aureus\nEnterobactérias',
              'Oxacilina +\nCefotaxima ou \nCeftriaxona',
              '100\n150\n75-100',
              '4\n3\n1'
            ],
            [
              '< 5 anos',
              'Estafilo aureus\nEstrepto grupo A\nPneumococo Hemófilo',
              'Oxacilina +\nCefotaxima ou\nCeftriaxona',
              '100\n150\n75-100',
              '4\n3\n1'
            ],
            [
              '> 5 anos',
              'Estrepto grupo A\nEstafilo aureus',
              'Oxacilina ou\nClindamicina ou\nCefazolina',
              '100\n20-40\n100',
              '4\n3 ou 4\n4'
            ],
            [
              'Adolescentes',
              'Organismos\nanteriores\n\nGonococo',
              'Oxacilina ou\nClindamicina ou\nCefazolina\nCeftriaxona',
              '100\n20-40\n100\n75-100',
              '4\n3 ou 4\n4\n1'
            ],
            [
              'Antibiótico oral',
              '',
              'Cefalexina ou\nClindamicina',
              '75-10\n20-40',
              '4\n3 ou 4'
            ]
          ]}
        />
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Moreira Jr. Infecções osteoarticulares em pediatria, revisão.  Pediatria moderna, Dez 2014 V50 N12: 560-5."
        />
        <Reference
          idx={2}
          body="Nassif KC e col. Artrite séptica em pediatria, revisão. Rev Med Minas Gerais 2009; 19(2 Supl 3): S39-S45."
        />
        <Reference
          idx={3}
          body="Prezzi SH e col. Medicina Interna na Prática Clínica. Porto Alegre: Artmed; 2013."
        />
      </Section>
    </Routine>
  )
}
