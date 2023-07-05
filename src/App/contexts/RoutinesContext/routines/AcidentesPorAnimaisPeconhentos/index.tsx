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

import img1 from './images/image1.jpg'
import img2 from './images/image2.jpg'
import img3 from './images/image3.jpg'
import img4 from './images/image4.jpg'
import img5 from './images/image5.png'
import img6 from './images/image6.png'
import img7 from './images/image7.jpg'
import img8 from './images/image8.jpg'
import img9 from './images/image9.png'
import img10 from './images/image10.jpg'
import img11 from './images/image11.jpg'
import img12 from './images/image12.jpg'
import img13 from './images/image13.jpg'
import img14 from './images/image14.jpg'
import img15 from './images/image15.jpg'
import img16 from './images/image16.jpg'
import img17 from './images/image17.jpg'
import img18 from './images/image18.jpg'
import img19 from './images/image19.jpg'
export default function AcidentesPorAnimaisPeconhentos(): JSX.Element {
  return (
    <Routine
      id="acidentes-animais"
      name="Acidentes por Animais Peçonhentos"
      categories={['emergencia']}
      authors={['luiz']}
      tags={['acidente', 'ofídico', 'cobra', 'escorpião']}
    >
      <Section title="Introdução">
        <P>
          São aqueles provocados por picadas ou mordeduras de animais dotados de
          glândulas secretoras e aparelhos inoculadores de veneno.
        </P>
        <P>
          Estes acidentes são de notificação compulsória no Brasil, desde 31 de
          agosto de 2010, publicado na Portaria Nº 2.472 (ratificada na Portaria
          Nº 204, de 17 de fevereiro de 2016).
        </P>
        <P>
          O diagnóstico deve levar em consideração vários aspectos para
          determinar o tratamento, como o local do acidente, o tempo decorrido
          até a assistência, os sinais e sintomas iniciais e a evolução destes,
          os exames laboratoriais e o conhecimento do socorrista.
        </P>
        <P>O tratamento para todos os casos deve ser geral e específico.</P>
        <Subsection title="Tratamento Geral">
          <P>
            Consiste em dar suporte no estado de hidratação, analgesia, suporte
            ventilatório e circulatório, renal e manejar corretamente os efeitos
            adversos dos medicamentos utilizados.
          </P>
        </Subsection>
        <Subsection title="Tratamento Específico">
          <P>
            O soro contra o veneno para cada caso, deve ser administrado em dose
            calculada de aplicação única, não fracionada, IV, diluído (ou não) e{' '}
            <Bold>
              para crianças ou adultos a quantidade é a mesma, variando conforme
              a gravidade
            </Bold>
            . Não se faz teste de sensibilidade, e sim, medicação prévia de
            corticoide e anti-histamínico. Se ocorrer anafilaxia, o soro deve
            ser suspenso e o tratamento de suporte respiratório e circulatório
            deve ser instituído, assim como iniciar adrenalina, corticoide e
            anti-histamínico. Tão logo o quadro seja controlado o soro deve ser
            retomado, porém com infusão mais lenta. A dose pode ser repetida
            quantas vezes for necessária. A prednisona pode ser indicada para o
            controle de reação tardia.
          </P>
        </Subsection>
        <P>
          Os principais animais peçonhentos que causam acidentes graves no
          Brasil são algumas espécies de serpentes, de escorpiões, de aranhas e
          lagartas.
        </P>
        <P>
          A reação à picada depende de algumas variáveis como a parte do corpo
          atingida, a quantidade de veneno injetado, o peso e a(s)
          comorbidade(s) da vítima, o tempo de início do tratamento e a espécie
          do animal envolvido.
        </P>
        <P>
          O diagnóstico e a classificação de gravidade são eminentemente
          clínicos, uma vez que o agente causador do acidente raramente é
          trazido ao hospital.
        </P>
        <P>
          O tratamento geral e específico depende das reações apresentadas que
          podem ser leves, moderadas ou graves. Especialistas recomendam que as
          vítimas devem receber o soro o mais rápido possível, de preferência
          antes das primeiras três horas após o ataque.
        </P>
        <P>
          Operatório: quando houver necessidade de desbridamento de tecido
          necrótico ou fasciotomia por síndrome compartimental.
        </P>
      </Section>
      <Section title="Serpentes">
        <P>
          As cobras venenosas do Brasil são facilmente identificáveis por causa
          da fosseta loreal, que consiste em dois orifícios situados entre a
          narina e o olho, um em cada lado da cabeça (com exceção da coral
          verdadeira - Fig.1).
        </P>
        <Figure
          source={img1}
          size={[120, 90]}
          caption="Fig.1 - Fonte: Mundo Educação UOL"
        />
        <Subsection title="Acidente Botrópico">
          <P>Causado por serpentes do grupo das jararacas (Fig.2 e Fig 3).</P>
          <Figure
            source={img2}
            size={[246, 46]}
            caption="Fig.2 - Fonte: A Semana News"
          />
          <Figure
            source={img3}
            size={[160, 94]}
            caption="Fig.3 - Fonte: Agora MT"
          />
          <P>Causa a maioria dos acidentes com cobras no Brasil: 75% a 85%.</P>
          <P>O Cerrado é o seu principal habitat.</P>
          <P>
            Possuem escamas, é o que as diferencia de outras espécies. Variadas
            tonalidades de marrom.
          </P>
          <Subsubsection title="Manifestação Clínica">
            <P>
              Dor e inchaço no local da picada, às vezes com manchas arroxeadas
              e sangramento no ferimento causado pela picada (Fig.3); podem
              ocorrer sangramentos em gengivas, pele e urina. As complicações
              mais importantes são infecção e necrose na região da picada,
              choque e insuficiência renal. O quadro clínico pode ser
              classificado em leve, moderado e grave, o que determina a conduta
              (Quadro 1).
            </P>
            <Table
              title="Quadro 1"
              caption="SAB (soro antibotrópico); SABC (soro antibotrópico-crotálico); SABL (soro antibotrópico-laquético)"
              colWidths={[150, 150, 150, 150, 150, 150]}
              header={[
                'Classificação',
                'Manifestações locais',
                'Manifestações sistêmicas',
                'Tempo de coagulação',
                'Tempo entre o acidente e o atendomento',
                'Soroterapia SAB/SABC/SABL'
              ]}
              data={[
                [
                  'Mínima',
                  'mínimas ou ausentes',
                  'ausentes',
                  'normal',
                  'menor 6 horas',
                  'observação'
                ],
                [
                  'Leve',
                  'discretas',
                  'ausentes',
                  'normal ou alterado',
                  'menor que 6 horas',
                  '3 ampolas'
                ],
                [
                  'Moderada',
                  'evidentes',
                  'ausentes',
                  'normal ou alterado',
                  '6 horas',
                  '6 ampolas'
                ],
                [
                  'Grave',
                  'intensas',
                  'presentes',
                  'alterado',
                  'maior que 6 horas',
                  '12 ampolas'
                ]
              ]}
            />
          </Subsubsection>
          <Subsubsection title="Exames Laboratoriais">
            <List>
              <LItem>
                Hemograma completo com leucocitose e neutrofilia com desvio para
                a esquerda;
              </LItem>
              <LItem>
                Ureia e creatinina, CK, DHL, AST, ALT, ureia e creatinina, TS,
                TP, TTPA, TC;
              </LItem>
              <LItem>EAS com proteinúria, hematúria e leucocitúria.</LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Tratamento Específico">
            <P>
              Sem clínica de envenenamento botrópico na admissão, com marca da
              picada presente ou não, dor e edema mínimos ou ausentes, deixar o
              paciente em observação mínima de 12 horas.
            </P>
            <P>Se houver manifestação de envenenamento:</P>
            <P>
              Soro antibotrópico (SAB) ou na sua falta pode-se usar o soro
              antibotrópico-crotálico (SABC) ou soro antibotrópico-laquético. Se
              o TC (tempo de coagulação) permanecer alterado após 24h, depois da
              soroterapia, deve ser feita uma dose adicional. Para casos leves
              de 2 a 4 ampolas, moderados de 4 a 8 ampolas e graves 12 ampolas,
              conforme quadro 1.
            </P>
          </Subsubsection>
        </Subsection>
        <Subsection title="Acidente Laquético">
          <P>Causado pela surucucu pico de jaca, surucutinga (Fig.4).</P>
          <P>
            Causa em torno de 3% dos acidentes com cobras no Brasil. Aparece
            mais na região da Amazônia, Mata atlântica e em áreas de matas
            úmidas do Nordeste.
          </P>
          <P>
            Apresentam no corpo desenhos típicos na forma de losangos que
            alternam entre as cores amarela e preta. Uma importante
            característica morfológica destas cobras é que na cauda apresenta a
            última subfileira de escamas modificadas, sendo estas quilhadas e
            eriçadas além de apresentar um espinho terminal (Fig.5).
          </P>
          <Figure
            source={img4}
            size={[174, 84]}
            caption="Fig.4 - Fonte: JC Online UOL"
          />
          <Figure
            source={img5}
            size={[417, 90]}
            caption="Fig.5 - Fonte: Research Gate"
          />
          <Subsubsection title="Manifestação Clínica">
            <P>
              Quadro semelhante ao acidente botrópico, porém com evolução mais
              rápida e maior intensidade.
            </P>
          </Subsubsection>
          <Subsubsection title="Exames Laboratoriais">
            <List>
              <LItem>Hemograma completo;</LItem>
              <LItem>TC prolongado;</LItem>
              <LItem>Ureia e creatinina, eletrólitos e glicemia</LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Tratamento Específico">
            <P>
              Soro antilaquético (SAL). Para casos moderados 10 ampolas e graves
              20 ampolas.
            </P>
          </Subsubsection>
        </Subsection>
        <Subsection title="Acidente Crotálico">
          <P>Causado pela cascavel (Fig.6).</P>
          <P>
            Causa em torno de 7% dos acidentes com cobras no Brasil. Habita
            áreas de matas e campos em grande parte do território brasileiro.
          </P>
          <P>
            Uma das principais características desta cobra é a presença de um
            chocalho na parte final de sua cauda. Possuem cor marrom escuro com
            presença de anéis claros e finos na cauda.
          </P>
          <Figure
            source={img6}
            size={[159, 94]}
            caption="Fig.6 - Fonte: Plugbr.net"
          />
          <Figure
            source={img7}
            size={[90, 166]}
            caption="Fig.7 - Fonte: Cortesia de Dra. Caroline Walker"
          />
          <Subsubsection title="Manifestação Clínica">
            <P>
              Sensação de formigamento no local, sem lesão evidente; os sinais e
              sintomas sistêmicos são precoces, como: dificuldade de manter os
              olhos abertos, com aspecto miastênico (Fig.7), visão turva ou
              dupla, dor e fraqueza muscular generalizadas, podendo evoluir até
              insuficiência respiratória e hematúria maciça. O quadro clínico
              pode ser classificado em leve, moderado e grave, o que determina a
              conduta (Quadro 2).
            </P>

            <Table
              colWidths={[150, 150, 150, 150, 150, 150]}
              title="Quadro 2"
              caption="SAC (soro anticrotálico); SABC (soro antibotrópico-crotálico)"
              header={[
                'Classificação',
                'Facies miastênica',
                'Mialgia',
                'Urina vermelha',
                'Oligoanúria',
                'Tempo de coagulação',
                'Soroterapia SAC/SABC'
              ]}
              data={[
                [
                  'Leve',
                  'ausente ou tardia',
                  'ausente ou discreta',
                  'ausente',
                  'ausente',
                  'normal ou alterado',
                  '5 ampolas'
                ],
                [
                  'Moderado',
                  'discreta',
                  'discreta',
                  'ausente ou discreta',
                  'ausente',
                  'normal ou alterado',
                  '10 ampolas'
                ],
                [
                  'Grave',
                  'evidente',
                  'intensa',
                  'evidente',
                  'ausente ou presente',
                  'normal ou alterado',
                  '20 ampolas'
                ]
              ]}
            />
          </Subsubsection>
          <Subsubsection title="Exames Laboratoriais">
            <List>
              <LItem>
                Hemograma completo – leucocitose com neutrofilia (desvio para
                esquerda);
              </LItem>
              <LItem>TC prolongado;</LItem>
              <LItem>
                Ureia e creatinina, AST e ALT, CK, DHL, ácido úrico podem estar
                elevados nos quadros mais graves;
              </LItem>
              <LItem>
                Fósforo e potássio podem estar elevados e cálcio reduzido quando
                houver oligúria ou anúria;
              </LItem>
              <LItem>
                Urina tipo 1 (EAS) com mioglobinúria e proteinúria discreta.
              </LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Tratamento Específico">
            <P>
              Soro anticrotálico (SAC) ou na sua falta pode-se usar o soro
              antibotrópico-crotálico (SABC).
            </P>
            <P>
              Para casos leves 5 ampolas, moderados 10 ampolas e graves 20
              ampolas.
            </P>
          </Subsubsection>
        </Subsection>
        <Subsection title="Acidente Elapídico">
          <P>Causado por coral verdadeira (Fig.8).</P>
          <P>
            Corresponde a 1% dos acidentes por cobras no Brasil. É encontrada em
            matas das regiões sudeste e sul do Brasil.
          </P>
          <P>
            Possui coloração forte e facilmente reconhecida: listrada em preto,
            vermelho e amarelo.
          </P>
          <P>
            É considerada uma das mais peçonhentas do Brasil em função da alta
            toxidade de seu veneno.
          </P>
          <P>
            Uma vez picada, a pessoa corre risco de morte caso não receba
            atendimento médico rápido.
          </P>
          <Figure
            source={img8}
            size={[165, 90]}
            caption="Fig.8 - Fonte: UFRGS"
          />
          <Subsubsection title="Manifestação Clínica">
            <P>
              Os sintomas aparecem rapidamente: fácies miastênica com ptose
              palpebral, paralisia da musculatura respiratória, oftalmoplegia,
              paralisia velopalatina, paralisia flácida dos membros, quadro
              bastante semelhante ao de envenenamento crotálico, porém, de maior
              gravidade. O bloqueio da junção mioneural ocorre pós-sinapse.
            </P>
            <P>No local da picada não se observa alteração importante.</P>
          </Subsubsection>
          <Subsubsection title="Exames Laboratoriais">
            <P>
              Hemograma completo e CK. Demais exames, conforme a necessidade
              clínica.
            </P>
          </Subsubsection>
          <Subsubsection title="Tratamento Específico">
            <P>
              Soro antielapídico (SAE) 10 ampolas para todos os casos, devido à
              gravidade.
            </P>
            <P>
              Atenção: o bloqueio neuromuscular causado pelo efeito neurotóxico
              do veneno pode levar a insuficiência respiratória precoce e a
              indicação de anticolinesterásicos pode ser necessária!!!
            </P>
            <List>
              <LItem>
                Atropina (amp 0,25 mg) – crianças 0,05 mg/kg e adultos 0,5 mg –
                IV
              </LItem>
              <LItem>
                Neostigmina (amp 0,5 mg) – crianças 0,05 mg/kg e adultos 0,5 mg
                – IV
              </LItem>
            </List>
          </Subsubsection>
        </Subsection>
      </Section>
      <Section title="Escorpiões">
        <P>Dentre os aracnídeos são os que causam mais acidentes.</P>
        <P>
          O <Bold>escorpião amarelo</Bold>, o Titius serrulatus – Fig.9
          (provocam acidentes mais graves) e o escorpião{' '}
          <Bold>preto ou marrom</Bold>, o Titius bahiensis – Fig.10, estão entre
          os dois tipos mais venenosos. Um ataque pode ser fatal se acometer uma
          criança. São pouco agressivos, tem hábitos noturnos, encontram-se em
          pilhas de madeira e pedras, cercas e residências.
        </P>
        <Figure
          source={img9}
          size={[189, 75]}
          caption="Fig.9 - Fonte: Ribeira Dedetizadora"
        />
        <Figure
          source={img10}
          size={[153, 99]}
          caption="Fig.10 - Fonte: Personare"
        />
        <Subsection title="Manifestação Clínica">
          <P>
            Após a picada ocorre dor de moderada a intensa, formigamento no
            local. Distúrbio de comportamento, alteração do nível de
            consciência, tremores, convulsão, náuseas e vômitos, sialorréia, dor
            abdominal, diarreia, taquipneica, hiperpneia, crepitações,
            taquicardia e hiper ou hipotensão arterial, sudorese, extremidades
            frias e pálidas, pulsos finos e tempo de enchimento capilar maior
            que 3” sugerem gravidade e o paciente deve permanecer em observação
            por 6 a 12 horas.
          </P>
        </Subsection>
        <Subsection title="Exames Laboratoriais">
          <List>
            <LItem>Glicemia elevada nas primeiras 4 horas</LItem>
            <LItem>Amilase elevada em 80% dos casos</LItem>
            <LItem>Leucograma com leucocitose e neutrofilia</LItem>
            <LItem>Hiponatremia e hipocalemia</LItem>
            <LItem>CK e CKMB elevados</LItem>
            <LItem>TC crânio pode mostrar áreas de infartos cerebrais</LItem>
            <LItem>
              Rx tórax pode mostrar aumento de área cardíaca e edema pulmonar
              uni ou bilateral
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Tratamento Específico">
          <P>
            Soro antiescorpiônico (SAE) nos acidentes leves, a conduta é
            observação. Nos acidentes moderados, devem ser administrados 2 a 3
            ampolas e nos graves de 4 a 6 ampolas.
          </P>
        </Subsection>
      </Section>
      <Section title="Aranhas">
        <Subsection
          title={
            <>
              <Italic>Phoneutria</Italic> (armadeira) Fig.11
            </>
          }
        >
          <Figure
            source={img11}
            size={[186, 76]}
            caption="Fig.11 - Fonte: InfoEscola"
          />
          <P>
            Tem hábitos vespertinos e noturnos, são frequentes dentro de
            residências e na sua periferia. Gosta de ficar em entulhos, material
            de construção, lenhas e caixas de sapatos; também podem ser
            encontradas em árvores com grandes folhas e bananeiras. Raramente
            levam a quadro grave. Suas picadas ocorrem mais nos pés e mãos. É
            muito agressiva.
          </P>
          <Subsubsection title="Manifestações Clínicas">
            <P>
              Dor com ou sem irradiação e edema local, imediatamente após a
              picada, parestesia e sudorese. Se surgirem vômitos, hipertensão
              arterial, dificuldade respiratória, tremores, espasmos musculares
              devem ser tratados como acidente grave. Pode evoluir para choque e
              edema pulmonar.
            </P>
          </Subsubsection>
          <Subsubsection title="Tratamento Específico">
            <P>
              Soro antiaracnídeo (SAAr) de 2 a 4 ampolas IV para casos moderados
              e de 5 a 10 ampolas para casos graves.
            </P>
            <P>Crianças devem ser observadas por pelo menos 6 horas.</P>
          </Subsubsection>
        </Subsection>
        <Subsection
          title={
            <>
              <Italic>Loxosceles</Italic> (aranha marrom) Fig.12
            </>
          }
        >
          <Figure
            source={img12}
            size={[175, 83]}
            caption="Fig.12 - Fonte: Meio Ambiente Técnico"
          />
          <P>
            Hábitos noturnos, vive em pilhas de tijolos, telhas, atrás de
            móveis, cortinas e eventualmente nas roupas, jardins e gramas. São
            pouco agressivas. Corresponde à forma mais grave dos acidentes por
            aracnídeos no Brasil. Acomete mais a área central – tronco e membros
            proximais, geralmente ocorre quando a pessoa está se vestindo.
          </P>
          <Subsubsection title="Manifestação Clínica">
            <P>
              Em torno de 90% ocorre manifestação local. A dor é fraca nas
              primeiras 12 horas e depois pode aumentar de intensidade, pode
              surgir sinais flogísticos formação de bolhas e até necrose seca
              local, que pode durar até duas semanas e de difícil cicatrização.
              Astenia, febre e cefaleia. Nos casos graves (10%) pode apresentar
              exantema, prurido, petéquias, mialgia, náuseas e vômitos, visão
              turva, sonolência, torpor, irritabilidade e coma. Anemia,
              icterícia e hemoglobinúria devido a hemólise intravascular.
              Insuficiência renal aguda e CIVD é a principal causa de óbito.
            </P>
          </Subsubsection>
          <Subsubsection title="Exames Laboratoriais">
            <P>
              Hemograma com leucocitose e neutrofilia, anemia aguda,
              plaquetopenia, reticulocitose, hiperbilirrubinemia indireta,
              diminuição de haptoglobina, hiperpotassemia, elevação de ureia e
              creatinina e coagulograma alterado (hemólise intravascular e
              CIVD).
            </P>
          </Subsubsection>
          <Subsubsection title="Tratamento Específico">
            <P>
              Soro antiloxoscélico (SALOx) ou soro antiaracnídeo (SAAr). Infusão
              intravenosa de 5 ampolas para os casos graves de manifestação
              cutânea e 10 ampolas para manifestações viscerais. A eficácia é
              reduzida após 36h da infusão.
            </P>
          </Subsubsection>
        </Subsection>
        <Subsection
          title={
            <>
              <Italic>Lycosa</Italic> (aranha de jardim)
            </>
          }
        >
          <P>
            Encontrada em jardins e gramas. Não constrói teias. Não constituem
            problema de saúde pública. São importantes para diagnóstico
            diferencial da Lexósceles por ocupar o mesmo habitat (Fig 13).
          </P>
          <Figure
            source={img13}
            size={[391, 227]}
            caption="Fig.13 - Fonte: BioDiversity4All"
          ></Figure>
          <Subsubsection title="Manifestação Clínica">
            <P>Flogose local leve.</P>
          </Subsubsection>
          <Subsubsection title="Tratamento">
            <P>Apenas sintomático.</P>
          </Subsubsection>
        </Subsection>
        <Subsection title="Caranguejeiras">
          <P>
            É da família{' '}
            <Bold>
              <Italic>Theraphosidae</Italic>
            </Bold>{' '}
            de aranhas, que inclui as espécies conhecidas pelos nomes comuns de{' '}
            <Bold>tarântulas</Bold> (português europeu) ou
            <Bold>caranguejeiras</Bold> (português brasileiro), que se
            caracterizam por terem pernas longas com duas garras na ponta, e
            corpo revestido de cerdas urticantes. As tarântulas habitam as
            regiões temperadas e tropicais das Américas, Ásia, África e Oriente
            Médio. Enquanto crescem, têm uma fase de troca de pele chamada
            ecdise. Apesar do tamanho e aspecto sinistro, as tarântulas não são
            perigosas para a espécie humana, uma vez que não produzem toxinas
            nocivas aos humanos, por isso são eventualmente criadas como animais
            de estimação. Uma de suas defesas são os pêlos urticantes de suas
            costas e abdome, que irritam a pele do possível predador. Em média
            atingem de 15 cm a 25 cm de comprimento com as pernas estendidas.
          </P>
          <P>Não tem importância médica relevante (Fig. 14).</P>
          <Figure
            source={img14}
            size={[196, 224]}
            caption="Fig.14 - Fonte: Wikipédia"
          />
          <Subsubsection title="Manifestações Clínicas">
            <P>
              Pode apresentar dor leve e de curta duração no local da picada
              associada a discreta hiperemia. Alguns casos podem apresentar
              urticária devido a reação causada pelo contato com os seus pelos.
            </P>
          </Subsubsection>
          <Subsubsection title="Tratamento">
            <P>Apenas sintomáticos</P>
          </Subsubsection>
        </Subsection>
        <Subsection
          title={
            <>
              Viúvas-negras <Italic>(Latrodecta)</Italic>
            </>
          }
        >
          <P>
            Habitam jardins, gramados, parques, plantações e residências. São
            sedentárias e não são agressivas. Os acidentes são raríssimos e só
            acontecem que são pisadas (Fig 15).
          </P>
          <Figure
            source={img15}
            size={[119, 228]}
            caption="Fig.15 - Fonte: InfoEscola"
          />
          <Subsubsection title="Manifestação Clínica">
            <P>
              Dor local, mialgia, edema e adenite satélite. Pode apresentar
              tremores, espasmos musculares em membros, sudorese, ansiedade,
              cefaleia, excitabilidade, insônia, prurido, eritema facial e
              cervical, trismo, taquicardia, dor precordial, hipertensão e até
              bradicardia (Fig 16, Fig 17).
            </P>
            <Figure
              source={img16}
              size={[400, 275]}
              caption="Fig.16 - Fonte: Meus Animais"
            />
            <Figure
              source={img17}
              size={[400, 275]}
              caption="Fig.17 - Fonte: Portal News em Foco"
            />
          </Subsubsection>
          <Subsubsection title="Tratamento Específico">
            <P>
              Soro antilatrodectus (SALatr) para os casos graves – 1 a 2 ampolas
              IM. A melhora ocorre de 30 minutos até 3 horas após.
            </P>
          </Subsubsection>
        </Subsection>
        <Subsection title="Taturanas (Lonomia - Fig.18)">
          <P>Lagartas-de-fogo e orugas são larvas de mariposa</P>
          <Figure
            source={img18}
            size={[263, 104]}
            caption="Fig.18 - Fonte: Terra"
          />
          <Figure
            source={img19}
            size={[263, 104]}
            caption="Fig.19 - Fonte: Pinterest"
          />
          <P>
            Vivem agrupadas em tronco e folhas das árvores. Os acidentes ocorrem
            por contato com seus espinhos.
          </P>
          <Subsubsection title="Manifestações Clínicas">
            <P>
              Dor em queimação local, edema e eritema – fig.14. Pode ocorrer
              prurido algumas vezes e adenite satélite. Pode evoluir para
              vesículas nas primeiras 24h e a regressão ocorre em até 3 dias.
              Síndrome hemorrágica é rara e pode levar a insuficiência renal e
              morte.
            </P>
          </Subsubsection>
          <Subsubsection title="Tratamento Específico">
            <P>
              Soro antilonômico (SALon) 5 ampolas para casos moderados e 10
              ampolas para os graves - em estudo – entrar em contato com o CIT
              de sua cidade.
            </P>
            <Table
              title="Resumo Terapeutico"
              colWidths={[150, 150, 150, 150, 150]}
              header={[
                'Etiologia',
                'leve',
                'moderado',
                'grave',
                'tipo de soro'
              ]}
              data={[
                [
                  'Botrópico',
                  '2 – 4 amp',
                  '4 – 8 amp',
                  '12 amp',
                  'SAB ou SABC'
                ],
                ['Laquético', '', '10 amp', '20 amp', 'SAL ou SABL'],
                ['Crotálico', '5 amp', '10 amp', '20 amp', 'SAB ou SABC'],
                ['Elapídico', '', '', '10 amp', 'SAE'],
                ['Escorpiônico', '', '2 – 3 amp', ' 4 – 6 amp', 'SAE ou SAAr'],
                ['Phoneutria', '', '2 – 4 amp', '5 – 10 amp', 'SAAr'],
                ['Lexosceles', '', '5 amp', '10 amp', 'SALox ou SAA'],
                ['Latrodecta', '', '', '1 – 2 amp IM', 'SALatr'],
                ['Lonomia', '', '5 amp', '10 amp', 'SALon']
              ]}
            />
          </Subsubsection>
        </Subsection>
      </Section>
      <Section title="Referências">
        <Reference idx={1} body="http://www.fiocruz.br" />
        <Reference idx={2} body="http://www.butantan.gov.br" />
        <Reference idx={3} body="http://www.faunacps.cnpm.embrapa.br" />
        <Reference
          idx={4}
          body="http://bvsms.saude.gov.br/bvs/publicacoes/funasa/manu_peconhentos.pdf"
        />
        <Reference
          idx={5}
          body="http://portalms.saude.gov.br/saude-de-a-z/acidentes-por-animais-peconhentos, mar 2018."
        />
        <Reference
          idx={6}
          body="http://www.saude.sp.gov.br/resources/cve-centro-de-vigilancia-epidemiologica/areas-de-vigilancia/doencas-de-transmissao-por-vetores-e-zoonoses/doc/peconhentos"
        />
        <Reference
          idx={7}
          body="http://www.einstein.br/einstein-saude/vida-saudavel/primeiros-socorros/Paginas/acidentes-por-animais-peconhentos.aspx"
        />
        <Reference
          idx={8}
          body="FUNDAÇÃO NACIONAL DE SAÚDE. Manual de Diagnóstico e Tratamento de Acidentes por Animais Peçonhentos. Brasília: Ministério da Saúde, 2001."
        />
        <Reference
          idx={9}
          body="Acidente por Animais Peçonhentos: Manual de rotinas/Pedro Pereira de Oliveira Pardal, Maria Apolônia da Costa Gadelha - Belém: SESPA - Secretaria de Estado de Saúde Pública do Pará, 2010."
        />
        <Reference
          idx={10}
          body="Primeiros socorros: picadas ou mordeduras por animais peçonhentos, Albert Einstein, Sociedade Beneficente Israelita Brasileira, São Paulo, 2015."
        />
        <Reference
          idx={11}
          body="Condutas pediátricas no pronto atendimento e na terapia intensiva / editoras Luciana Rodrigues Silva, Luanda Flores da Costa, 2. ed, Santana de Parnaíaba, SP, Editora Manole, 2020."
        />
        <Reference
          idx={12}
          body="Pronto-socorro / coordenadores Claudio Schvartsman, Amélia Gorete Reis, Sylvia Costa Lima Farat, 3. ed, Barueri, SP, Editora Manole, 2018."
        />
        <Reference
          idx={13}
          body="Urgências e Emergências Pediátricas, manual para rápida tomada de decisão / Adriana Pasmanik Eisencraft, Sylavia Costa Lima farah. - 1 ed, Rio de Janeiro, Editora Guanabara Koogan, 2021."
        />
      </Section>
    </Routine>
  )
}
