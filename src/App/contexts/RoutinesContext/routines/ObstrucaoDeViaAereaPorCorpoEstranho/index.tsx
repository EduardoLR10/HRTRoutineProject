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
import img3 from './images/image3.jpg'
import img4 from './images/image4.png'
import img5 from './images/image5.png'

export default function ObstrucaoDeViaAereaPorCorpoEstranho(): JSX.Element {
  return (
    <Routine
      id="obstrucao-de-via-aerea"
      name="Obstrução de Via Aérea por Corpo Estranho (OVACE)"
      categories={['emergencia']}
      authors={['luiz']}
      tags={['ovace', 'engasgo', 'engasgar']}
    >
      <Section title="Aspectos Gerais">
        <P>
          A OVACE ocorre em menores de 5 anos de idade em cerca de 90% dos casos e destes, mais de 50% são em lactentes. Sendo crianças pequenas, a grande maioria tem um cuidador adulto por perto que, se tivesse um treinamento básico, o socorro poderia ser imediato, reduzindo as sequelas. O ideal seria se estas ocorrências fossem evitadas através de medidas preventivas.  
        </P>
        <P>
          A OVACE ocorre de maneira súbita, em crianças previamente hígidas e
          que rapidamente apresentam-se com sinais de asfixia.
        </P>
        <P>
          O sinal universal de obstrução de via aérea está expresso na fig.1.
        </P>
        <Figure source={img1} size={[188, 207]} caption="fig.1" />
      </Section>
      <Section title="Classificação">
        <Subsection title="Leve">
          <P>
            Tosse eficaz e forte, voz compreensível, corado e leve dispneia.
          </P>
        </Subsection>
        <Subsection title="Moderada a grave">
          <P>
            Tosse ineficaz, voz abafada, estridor e gemência, cianose, acentuada
            dispneia.
          </P>
        </Subsection>
      </Section>
      <Section title="Causas">
        <Subsection title="Lactentes e Bebês">
          <List>
            <LItem>
              Aspiração de pequenos objetos e alimentos (feijão, balas,
              chicletes, brinquedos, etc.)
            </LItem>
            <LItem>Aspiração de leite regurgitado</LItem>
          </List>
        </Subsection>
        <Subsection title="Crianças maiores e Adultos">
          <List>
            <LItem>Alimentos – carnes principalmente;</LItem>
            <LItem>Balas e chicletes;</LItem>
            <LItem>Fragmentos e sangue nos traumas;</LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Diagnóstico">
        <P>
          Para quadros leves e duvidosos a radiografia de tórax ou a tomografia
          computadorizada podem ajudar.
        </P>
        <P>
          A{' '}<Italic>larigotraqueobroncoscopia</Italic> é o exame que elucida e
          trata definitivamente os casos que puderem ser submetidos a este
          procedimento.
        </P>
        <P>
          Nos casos graves, o diagnóstico é iminentemente clínico e não deve
          perder tempo para tomar as condutas de desobstrução.
        </P>
        <Subsection title={'Condutas'}>
          <Subsubsection title="Consciente">
            <Table
              colWidths={[200, 200]}
              header={['Menores de 1 ano', 'Maiores de 1 ano até adulto']}
              data={[
                [
                  'Se consegue tossir, apenas incentive a tosse',
                  'Se consegue tossir, apenas incentive a tosse'
                ],
                [
                  'Se a tosse é ineficaz, inicie as manobras',
                  'Se a tosse é ineficaz, inicie as manobras'
                ],
                [
                  '5 golpes nas costas e 5 compressões torácicas (fig.2 e 3)',
                  'Manobra de Heimlich (fig.4)'
                ],
                [
                  'Repita até expelir o corpo estranho ou perder a consciência',
                  'Repita até expelir o corpo estranho ou perder a consciência'
                ]
              ]}
            />
          </Subsubsection>
          <Subsubsection title="Inconsciente - para todas as idades">
            <List>
              <LItem>
                Se estiver sozinho no socorro, grite por ajuda se ainda não o
                fez;
              </LItem>
              <LItem>
                Coloque o paciente numa superfície dura e avalie. Se não
                responde e não respira, inicie a RCP de alta qualidade;
              </LItem>
              <LItem>
                Toda vez que abrir a via aérea para administrar ventilações,
                olhe dentro da boca. Caso veja algum objeto que possa ser
                removido, remova-o (fig.5). Caso não o veja, continue a RCP. Não
                faça varredura digital às cegas, isso pode empurrar o corpo
                estranho e piorar o quadro!
              </LItem>
              <LItem>
                Repita a RCP por 2 minutos. Se ainda estiver sozinho, é o
                momento de parar e chamar por ajuda. Ligue 191 para os Bombeiros
                ou 192 para o SAMU.
              </LItem>
              <LItem>
                Continue com as manobras até a chegada de profissionais
                equipados e capacitados.
              </LItem>
            </List>
            <P>
              <Bold>Atenção:</Bold> todos os pacientes que forem submetidos às
              manobras de desobstrução de via aérea, mesmo que tenham tido
              êxito, devem ser removidos para uma unidade hospitalar a fim de
              que sejam avaliados, pois podem ocorrer traumas ósseos e/ou
              viscerais.
            </P>
            <Figure source={img2} size={[251, 234]} caption="fig.2" />
            <Figure source={img3} size={[244, 230]} caption="fig.3" />
            <Figure source={img4} size={[182, 251]} caption="fig.4" />
            <Figure source={img5} size={[192, 156]} caption="fig.5" />
            <P>
              Todos os pacientes que se submeteram as manobras de desobstrução
              de via aérea, mesmo que tenham tido êxito, devem ser removido para
              uma unidade hospitalar a fim de que seja avaliado, pois podem
              ocorrer traumas ósseos e/ou viscerais.
            </P>
          </Subsubsection>
        </Subsection>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="http://www.bombeiros.pr.gov.br/arquivos/File/1gb/socorros/Viasaereas.pdf"
        />
        <Reference
          idx={2}
          body="American Heart Association, Suporte Avançado de vida em Pediatria. Manual do profissional, Orora visual, 3210 Innovative Way, Mesquite, Texas, EUA, edição em português, 2017."
        />
        <Reference
          idx={3}
          body="Schvartsman C, Reis A, Farhat S, Pronto-socorro, 3ª edição, Barueri SP, Ed. Manole, 2018."
        />
      </Section>
    </Routine>
  )
}
