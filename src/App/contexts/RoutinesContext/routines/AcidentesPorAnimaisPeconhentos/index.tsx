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
import img5 from './images/image5.jpg'
import img6 from './images/image6.jpg'
import img7 from './images/image7.jpg'
import img8 from './images/image8.jpg'
import img9 from './images/image9.jpg'
import img10 from './images/image10.jpg'
import img11 from './images/image11.jpg'
import img12 from './images/image12.jpg'
import img13 from './images/image13.jpg'
import img14 from './images/image14.jpg'

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
          agosto de 2010, publicado na portaria Nº 2.472 (ratificada na portaria
          Nº 204, de 17 de fevereiro de 2016).
        </P>
        <P>
          No Brasil a incidência destes acidentes em 2000 era de 18,7 casos
          /1000000 hab/ano e saltou para 108,2 casos /1000000 hab/ano em 2017. A
          região centro-oeste saltou de 19,6 para 77,7 casos /1000000 hab/ano e
          no Distrito Federal de 21,9 para 41,5 casos /1000000 hab/ano, nos
          respectivos anos.
        </P>
        <P>
          O diagnóstico deve levar em consideração vários aspectos para
          determinar o tratamento, como o local do acidente, o tempo decorrido
          até a assistência, os sinais e sintomas iniciais e a evolução destes,
          os exames laboratoriais e o conhecimento do socorrista.
        </P>
        <P>
          Antes de descrevermos os acidentes é bom entender que para todos os
          casos deve haver um tratamento geral e outro específico.
        </P>
        <Subsection title="Tratamento Geral">
          <P>
            Consiste em dar suporte ao estado de hidratação, analgesia, suporte
            ventilatório e circulatório, renal e efeitos adversos dos
            medicamentos.
          </P>
        </Subsection>
        <Subsection title="Tratamento Específico">
          <P>
            O soro contra o veneno será descrito para cada caso, porém devemos
            saber que a dose calculada deve ser única, não fracionada, feita por
            via venosa, diluída ou não e que para crianças ou adultos a
            quantidade é a mesma, variando apenas conforme a gravidade. Em todos
            os casos não é recomendado fazer teste de sensibilidade, mas deve-se
            fazer pré-medicação com corticóide e anti-histamínico. Se ocorrer
            anafilaxia, o soro deve ser suspenso e o tratamento de suporte
            respiratório e circulatório deve ser instituído, assim como deverá
            ser iniciada adrenalina, corticóide e anti-histamínico. Tão logo o
            quadro seja controlado, o soro deve ser retomado, porém mais lento.
            Assim, se repete quantas vezes for necessária. A prednisona pode ser
            indicada para controle de reação tardia.
          </P>
        </Subsection>
        <P>
          Os principais animais peçonhentos que causam acidentes graves no
          Brasil são algumas espécies de serpentes, escorpiões, aranhas e
          lagartas.
        </P>
        <P>
          A reação à picada depende de algumas variáveis como a parte do corpo
          atingida, a quantidade de veneno injetado, o peso, as comorbidades da
          vítima, o tempo de início do tratamento e a espécie do animal
          envolvido.
        </P>
        <P>
          O diagnóstico e a classificação de gravidade são eminentemente
          clínicos, uma vez que o agente causador do acidente raramente é
          trazido ao hospital.
        </P>
        <P>
          O tratamento geral e específico depende das reações apresentadas que
          podem ser leves, moderadas ou graves. Especialistas recomendam às
          vítimas que recebam o soro o mais rápido possível, de preferência
          antes das primeiras três horas após o ataque.
        </P>
        <P>
          Pode haver necessidade de desbridamento de tecido necrótico ou
          fasciotomia por síndrome compartimental.
        </P>
      </Section>
      <Section title="Serpentes">
        <P>
          As cobras venenosas do Brasil são facilmente identificáveis por causa
          da fosseta loreal que consiste em dois orifícios situados entre a
          narina e o olho, um em cada lado da cabeça (com exceção da coral
          verdadeira) – fig.1.
        </P>
        <Figure source={img1} size={[120, 90]} caption="fig.1" />
        <Subsection title="Acidente Botrópico">
          <P>
            O acidente botrópico é causado por serpentes do grupo das jararacas,
            gênero <Italic>Bothrops</Italic> (fig.2). Causa a maioria dos
            acidentes com cobras no Brasil – 75% a 85%. O Cerrado é o seu
            principal habitat. Possuem escamas, é o que as diferencia de outras
            espécies. Variadas tonalidades de marrom.
          </P>
          <Figure source={img3} size={[346, 146]} caption="fig.2" />
          <Figure source={img2} size={[260, 194]} caption="fig.3" />
          <Subsubsection title="Manifestação Clínica">
            <P>
              Dor e inchaço no local da picada, às vezes com manchas arroxeadas
              e sangramento no ferimento causado pela picada – fig.3; podem
              ocorrer sangramentos em gengivas, pele e urina. As complicações
              mais importantes são infecção e necrose na região da picada,
              choque e insuficiência renal.
            </P>
          </Subsubsection>
          <Subsubsection title="Exames Laboratoriais">
            <P>
              Hemograma completo, uréia, creatinina, CK, DHL, bilirrubinas, TP,
              TTPA, TC, fibrinogênio e EAS (urina tipo 1).
            </P>
          </Subsubsection>
          <Subsubsection title="Tratamento Específico">
            <P>
              Soro antibotrópico (SAB) ou, na sua falta, pode-se usar o soro
              antibotrópico-crotálico (SABC). Se o TC (tempo de coagulação)
              permanecer alterado após 24h, após a soroterapia, está indicada
              dose adicional. Para casos leves de 2 a 4 ampolas, moderados de 4
              a 8 ampolas e graves 12 ampolas.
            </P>
          </Subsubsection>
        </Subsection>
        <Subsection title="Acidente Laquético">
          <P>
            O acidente laquético é causado por surucucu pico de jaca,
            surucutinga, gênero <Italic>Lachesis</Italic> (fig.4). Causa em
            torno de 3% dos acidentes com cobras no Brasil. Aparece mais na
            região da Amazônia, Mata atlântica e em áreas de matas úmidas do
            Nordeste.
          </P>
          <P>
            Apresentam no corpo desenhos típicos na forma de losangos que
            alternam entre as cores amarela e preta. Uma importante
            característica morfológica destas cobras é que a cauda apresenta a
            última fileira de escamas modificadas, sendo estas quilhadas e
            eriçadas além de apresentar um espinho terminal fig.5.
          </P>
          <Figure source={img5} size={[274, 184]} caption="fig.4" />
          <Figure source={img4} size={[617, 290]} caption="fig.5" />
          <Subsubsection title="Manifestação Clínica">
            <P>
              Quadro semelhante ao acidente botrópico, adicionalmente
              acompanhado de vômitos, diarreia, bradicardia e hipotensão
              arterial.
            </P>
          </Subsubsection>
          <Subsubsection title="Tratamento Específico">
            <P>
              Soro antilaquético (SAL). Para casos moderados 10 ampolas e graves
              20 ampolas.
            </P>
          </Subsubsection>
        </Subsection>
        <Subsection title="Acidente Crotálico">
          <P>
            O acidente crotálico é causado pela cascavel, gênero{' '}
            <Italic>Crotalus</Italic> (fig.6). Causa em torno de 7% dos
            acidentes com cobras no Brasil. A serpente habita áreas de matas e
            campos em grande parte do território brasileiro.
          </P>
          <P>
            Uma das principais características desta cobra é a presença de um
            chocalho na parte final de sua cauda. Possuem cor marrom escuro com
            presença de anéis claros e finos na cauda.
          </P>
          <Figure source={img7} size={[259, 194]} caption="fig.6" />
          <Figure source={img6} size={[190, 266]} caption="fig.7" />
          <Subsubsection title="Manifestação Clínica">
            <P>
              Sensação de formigamento no local da picada, sem lesão evidente;
              os sinais e sintomas sistêmicos são precoces, como: dificuldade de
              manter os olhos abertos, com aspecto sonolento – fig.7, visão
              turva ou dupla, dor e fraqueza muscular generalizadas, podendo
              evoluir até insuficiência respiratória e hematúria maciça.
            </P>
          </Subsubsection>
          <Subsubsection title="Exames Laboratoriais">
            <P>
              Hemograma completo, uréia, creatinina, TGO, TGP, CK, DHL, Cálcio,
              TP, TTPA, TC, fibrinogênio e EAS (urina tipo 1).
            </P>
          </Subsubsection>
          <Subsubsection title="Tratamento Específico">
            <P>
              Soro anticrotálico (SAC) ou, na sua falta, pode-se usar o soro
              antibotrópico-crotálico (SABC). Para casos leves 5 ampolas,
              moderados 10 ampolas e graves 20 ampolas.
            </P>
          </Subsubsection>
        </Subsection>
        <Subsection title="Acidente Elapídico">
          <P>
            O acidente elapídico é causado por coral verdadeira, gênero{' '}
            <Italic>Micrurus</Italic>, família <Italic>Elapidae</Italic>{' '}
            (fig.8). Corresponde a 1% dos acidentes por cobras no Brasil. É
            encontrada em matas das regiões sudeste e sul do Brasil.
          </P>
          <P>
            A coral verdadeira possui coloração forte e facilmente reconhecida:
            listrada em preto, vermelho e amarelo.
          </P>
          <P>
            É considerada uma das mais peçonhentas do Brasil em função da alta
            toxicidade de seu veneno. Uma vez picada, a pessoa pode morrer caso
            não receba atendimento médico rápido.
          </P>
          <Figure source={img9} size={[265, 190]} caption="fig.8" />
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
            <P>Hemograma completo e CK.</P>
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
                Neostigmina (0,5 mg) – crianças 0,05 mg/kg e adultos 0,5 mg – IV
              </LItem>
            </List>
          </Subsubsection>
        </Subsection>
      </Section>
      <Section title="Escorpiões">
        <P>
          Dentre os aracnídeos, são os que causam mais acidentes. Os escorpiões
          amarelos – fig.9 - e os pretos ou marrons – fig.10 - estão entre os
          tipos mais venenosos, sendo graves os acidentes causados por
          escorpiões amarelos. Um ataque pode ser fatal se acometer uma criança.
          São pouco agressivos, têm hábitos noturnos, e encontram-se em pilhas
          de madeira, pedras, cercas e residências.
        </P>
        <Figure source={img8} size={[289, 175]} caption="fig.9" />
        <Figure source={img12} size={[253, 199]} caption="fig.10" />
        <Subsection title="Manifestação Clínica">
          <P>
            Após a picada, ocorrem dor de moderada a intensa, e formigamento no
            local. Náuseas e vômitos, sudorese, agitação, tremores, sialorréia,
            taquicardia e hipertensão arterial sugerem gravidade e, para
            monitorar estes sinais e sintomas, os pacientes devem ser observados
            de 6 a 12 horas.
          </P>
        </Subsection>
        <Subsection title="Tratamento Específico">
          <P>
            Soro antiescorpiônico (SAE). Nos acidentes leves, a conduta é
            observação. Nos acidentes moderados, devem ser administradas 2 a 3
            ampolas e nos graves, de 4 a 6 ampolas.
          </P>
        </Subsection>
      </Section>
      <Section title="Aranhas">
        <Subsection
          title={
            <>
              <Italic>Phoneutria</Italic> (armadeira) fig.11
            </>
          }
        >
          <Figure source={img10} size={[286, 176]} caption="fig.11" />
          <P>
            Tem hábitos vespertinos e noturnos, são frequentes dentro de
            residências e na sua periferia. Gosta de ficar em entulhos, material
            de construção, lenhas e caixas de sapatos; também podem ser
            encontradas em árvores com grandes folhas e bananeiras. Raramente
            levam a quadro grave. Suas picadas ocorrem mais nos pés e mãos. É
            muito agressiva.
          </P>
          <Subsubsection title="Manifestação Clínica">
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
              Soro antiaracnídico (SAAr) de 2 a 4 ampolas IV para casos
              moderados e de 5 a 10 ampolas para casos graves.
            </P>
            <P>Crianças devem ser observadas por pelo menos 6 horas.</P>
          </Subsubsection>
        </Subsection>
        <Subsection
          title={
            <>
              <Italic>Loxosceles</Italic> (aranha marrom) fig.12
            </>
          }
        >
          <Figure source={img11} size={[275, 183]} caption="fig.12" />
          <P>
            Hábitos noturnos, vive em pilhas de tijolos, telhas, atrás de
            móveis, cortinas e eventualmente nas roupas, jardins e gramas. São
            pouco agressivas. Corresponde à forma mais grave dos acidentes por
            aracnídeos no Brasil. Acomete mais a área central – tronco e membros
            proximais.
          </P>
          <Subsubsection title="Manifestação Clínica">
            <P>
              Em torno de 90% ocorre manifestação local. A dor é fraca nas
              primeiras 12 horas e depois pode aumentar de intensidade, pode
              surgir sinais flogísticos formação de bolhas e até necrose local
              que pode durar até duas semanas e de difícil cicatrização.
              Astenia, febre e cefaleia. Nos casos graves (10%) pode apresentar
              exantema, prurido, petéquias, mialgia, náuseas e vômitos, visão
              turva, sonolência, torpor, irritabilidade e coma. Também pode
              ocorrer anemia, icterícia e hemoglobinúria devido a hemólise
              intravascular. Insuficiência renal aguda e coagulação
              intravascular disseminada é a principal causa de óbito.
            </P>
          </Subsubsection>
          <Subsubsection title="Exames Laboratoriais">
            <P>
              Hemograma com leucocitose e neutrofilia, anemia aguda,
              plaquetopenia, reticulocitose hiperbilirrubinemia indireta,
              hiperpotassemia, elevação de ureia e creatinina e coagulograma
              alterado.
            </P>
          </Subsubsection>
          <Subsubsection title="Tratamento Específico">
            <P>
              Soro antiloxoscélico (SALOx) ou soro antiaracnídico (SAAr).
              Infundir venoso 5 ampolas para os casos graves de manifestação
              cutânea e 10 ampolas para manifestações viscerais. A eficácia é
              reduzida após 36h do acidente loxoscélico.
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
            diferencial da <Italic>Loxosceles</Italic> por ocupar o mesmo
            habitat.
          </P>
          <Subsubsection title="Manifestação Clínica">
            <P>Flogose local leve.</P>
          </Subsubsection>
          <Subsubsection title="Tratamento">
            <P>Apenas sintomático.</P>
          </Subsubsection>
        </Subsection>
        <Subsection
          title={
            <>
              <Italic>Latrodectus</Italic> (viúvas-negras)
            </>
          }
        >
          <P>
            Habitam jardins, gramados, parques, plantações e residências. São
            sedentárias e não são agressivas. Os acidentes são raríssimos.
          </P>
          <Subsubsection title="Manifestação Clínica">
            <P>
              Dor local, mialgia, edema e adenite satélite. Pode haver tremores,
              espasmos musculares em membros, sudorese, ansiedade, cefaleia,
              excitabilidade, insônia, prurido, eritema facial e cervical,
              trismo, taquicardia, dor precordial, hipertensão e até
              bradicardia.
            </P>
          </Subsubsection>
          <Subsubsection title="Tratamento Específico">
            <P>
              Soro antilatrodectus (SALatr) para os casos graves – 1 a 2 ampolas
              IM. A melhora ocorre de 30 minutos até 3 horas após.
            </P>
          </Subsubsection>
        </Subsection>
        <Subsection title="Caranguejeiras">
          <P>Não tem muita importância médica.</P>
          <Subsubsection title="Manifestação Clínica">
            <P>
              Pode apresentar dor leve e de curta duração no local da picada
              associada a discreta hiperemia. Alguns casos podem apresentar
              urticária devido a reação causada pelo contato com os seus pelos.
            </P>
          </Subsubsection>
          <Subsubsection title="Tratamento">
            <P>Apenas sintomáticos.</P>
          </Subsubsection>
        </Subsection>
      </Section>
      <Section title="Taturanas">
        <P>
          <Italic>Lonomia</Italic> fig.13 – lagartas-de-fogo e orugas são larvas
          de mariposa.
        </P>
        <Figure source={img13} size={[264, 191]} caption="fig.13" />
        <Figure source={img14} size={[280, 180]} caption="fig.14" />
        <P>
          Vivem agrupadas em tronco e folhas das árvores. Os acidentes ocorrem
          por contato com seus espinhos.
        </P>
        <Subsection title="Manifestação Clínica">
          <P>
            Dor em queimação local, edema e eritema – fig14. Podem ocorrer
            prurido algumas vezes e adenite satélite. Pode evoluir para
            vesículas nas primeiras 24h e a regressão ocorre em até 3 dias.
            Síndrome hemorrágica é rara e pode levar a insuficiência renal e
            morte.
          </P>
        </Subsection>
        <Subsection title="Tratamento Específico">
          <P>
            Soro antilonômico (SALon) 5 ampolas para casos moderados e 10
            ampolas para os graves.
          </P>
        </Subsection>
      </Section>
      <Section title="RESUMO TERAPÊUTICO">
        <Table
          colWidths={[100, 100, 100, 100, 100]}
          header={['Etiologia', 'Leve', 'Moderado', 'Grave', 'Tipo de soro']}
          data={[
            ['Botrópico', '2 – 4', '4 - 8', '12', 'SAB ou SABC'],
            ['Laquético', '-', '10', '20', 'SAL ou SABL'],
            ['Crotálico', '5', '10', '20', 'SAB ou SABC'],
            ['Elapídico', '-', '-', '10', 'SAE'],
            ['Escorpiônico', '', '2 - 3', '4 - 6', 'SAE ou SAAr'],
            ['Phoneutria', '', '2 - 4', '5 - 10', 'SAAr'],
            ['Loxosceles', '', '5', '10', 'SALox ou SAA'],
            ['Latrodectus', '', '', '1 – 2', 'SALatr'],
            ['Lonomia', '', '5', '10', 'SALon']
          ]}
        />
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
      </Section>
    </Routine>
  )
}
