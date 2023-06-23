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

export default function DorAbdominalAguda(): JSX.Element {
  return (
    <Routine
      id="dor-abdominal-aguda"
      name="Dor Abdominal Aguda"
      categories={['emergencia', 'gastroenterologia']}
      authors={['ana-luiza']}
      tags={['abdome', 'agudo', 'dor', 'barriga']}
    >
      <Section title="Introdução">
        <P>
          Há várias particularidades no atendimento da criança com dor
          abdominal. No exame clínico, evidenciando hematomas ou sinais de
          fratura óssea, afastar trauma acidental ou mesmo síndrome de maus
          tratos. A presença de febre no histórico ou durante o exame clínico
          orienta para a suspeita de infecção de trato urinário (ITU),
          gastroenterite, faringite, pneumonia e outras condições infecciosas.
          Palidez importante e dor abdominal podem ocorrer nas crises de
          falcização, assim como lesões de pele auxiliam o diagnóstico de
          púrpura de Henoch-Shönlein.
        </P>
        <P>
          A localização epigástrica pode indicar doença péptica em fase aguda,
          assim como dor vaga periumbilical, que se intensifica em algumas horas
          e passa a ser localizada na fossa ilíaca direita, aponta para a
          necessidade de se descartar apendicite aguda. Dor no flanco e fossa
          ilíaca esquerda, acompanhada de história de constipação intestinal,
          orienta para impactação de fezes em ampola retal. A presença de sangue
          nas fezes acompanhado de dor abdominal pode fazer parte dos quadros de
          colite infecciosa, intussuscepção intestinal, doença inflamatória
          intestinal e púrpura de Henoch-Shönlein.
        </P>
        <P>
          Litíase renal ou trauma renal em geral são acompanhados por hematúria,
          além do quadro de dor abdominal. Os processos agudos obstrutivos do
          trato intestinal com frequência apresentam-se com vômitos de
          intensidade variável e parada de eliminação de fezes. A etiologia da
          dor abdominal aguda é variável nas distintas faixas etárias.
        </P>
      </Section>
      <Section title="Anamnese">
        <P>
          Aspectos a serem enfatizados na anamnese da criança com dor abdominal
          aguda:
        </P>
        <List>
          <LItem>Idade;</LItem>
          <LItem>Comorbidades;</LItem>
          <LItem>Cirurgias prévias;</LItem>
          <LItem>Uso de medicações.</LItem>
        </List>
        <Subsection title="Quadro Clínico de Dor">
          <List>
            <LItem>Fatores de melhora e piora da dor;</LItem>
            <LItem>
              Tipo ou qualidade da dor (contínua, em cólica, aperto, pontada
              etc.);
            </LItem>
            <LItem>Local de início e irradiação;</LItem>
            <LItem>Gradação da dor (escala de 0 a 10);</LItem>
            <LItem>Duração e repetição do quadro;</LItem>
            <LItem>Febre;</LItem>
            <LItem>Última refeição;</LItem>
            <LItem>Hábito intestinal;</LItem>
            <LItem>Diarreia;</LItem>
            <LItem>Constipação;</LItem>
            <LItem>Náuseas;</LItem>
            <LItem>Vômitos;</LItem>
            <LItem>Disúria.</LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Exame Físico">
        <P>
          É extremamente valiosa a descrição da aparência geral do paciente.
          Sinais vitais, como: temperatura, pulso, pressão arterial, frequência
          respiratória e cardíaca, além de glicemia capilar, são fundamentais
          durante a avaliação da criança com dor abdominal aguda. As alterações
          dos sinais vitais pressupõem atendimento na unidade de emergência,
          descartando-se choque, desidratação, distúrbios hidroeletrolíticos e
          cetoacidose diabética. A ausência de ruídos hidroaéreos, acompanhado
          de distensão abdominal, pode indicar distúrbio metabólico grave ou
          quadro cirúrgico. O aumento dos ruídos hidroaéreos em quadros de dor
          abdominal é de ocorrência comum nas enteroinfecções e doença
          diarreica.
        </P>
        <P>
          A inspeção do abdome visa observar o aspecto da pele (sufusões,
          petéquias, icterícia), distensão localizada ou difusa, presença de
          contrações visíveis. Para a criança que verbaliza, pedir para que ela
          aponte a área de dor. Inicia-se a palpação do abdome de forma
          superficial e depois profunda, em geral, em área distante da região
          dolorosa. A palpação deve ser aprofundada gentilmente durante a
          inspiração, procurando-se observar intensidade da dor. Sinais de
          descompressão brusca orientam para irritação peritoneal, presente em
          especial nos casos de apendicite aguda. O toque retal, detectando a
          presença de massas fecais na ampola é um dado importante nos casos de
          impactação fecal ou em casos de abdome cirúrgico e abaulamentos da
          parede retal.
        </P>
      </Section>
      <Section title="Etiologia">
        <Subsection title="Dor Abdominal Aguda de Causa Cirúrgica">
          <P>
            É prudente considerar qualquer dor abdominal aguda intensa e
            contínua, com duração superior a 4 horas, como potencialmente
            cirúrgica.
          </P>
        </Subsection>
        <Subsection title="Procurar">
          <List>
            <LItem>Sinais de irritação peritoneal: dor e defesa;</LItem>
            <LItem>
              Atentar para a delicadeza na palpação abdominal a fim de evitar
              exacerbação desnecessária do sofrimento na criança (apendicite
              aguda, perfuração do intestino, peritonite, trauma, etc);
            </LItem>
            <LItem>
              Sinais de oclusão intestinal: vômitos, parada de eliminação de
              gases e fezes, silêncio abdominal ou hiper-peristaltismo
              (invaginação intestinal, volvo);
            </LItem>
            <LItem>Presença de sangue nas luvas, ao toque retal;</LItem>
            <LItem>Características do pulso.</LItem>
          </List>
        </Subsection>
        <Subsection title="Afecções Cirúrgicas mais Frequentes do Abdome">
          <List>
            <LItem>Apendicite aguda;</LItem>
            <LItem>Diverticulite aguda;</LItem>
            <LItem>Obstrução intestinal;</LItem>
            <LItem>Invaginação intestinal;</LItem>
            <LItem>Torções intestinais;</LItem>
            <LItem>Torção de ovário;</LItem>
            <LItem>Peritonite aguda.</LItem>
          </List>
        </Subsection>
        <Subsection title="Causas Não Cirúrgicas de Dor Abdominal">
          <List>
            <LItem>Dor abdominal aguda inespecífica;</LItem>
            <LItem>Dor abdominal crônica de diversas etiologias;</LItem>
            <LItem>Dispepsias;</LItem>
            <LItem>Constipação intestinal;</LItem>
            <LItem>Gastroenterites;</LItem>
            <LItem>Parasitoses intestinais;</LItem>
            <LItem>Pancreatite aguda;</LItem>
            <LItem>Hepatite aguda.</LItem>
          </List>
        </Subsection>
        <Subsection title="Causas de Dor Abdominal de Origem Extra-Abdominal">
          <List>
            <LItem>Amigdalite aguda;</LItem>
            <LItem>Pneumonia;</LItem>
            <LItem>
              Intoxicações e efeitos colaterais de medicamentos: abstinência a
              narcóticos, intoxicação por chumbos, picada de cobra e insetos;
            </LItem>
            <LItem>Anemia falciforme;</LItem>
            <LItem>Infecção do sistema nervoso central;</LItem>
            <LItem>Pericardite aguda;</LItem>
            <LItem>Cetoacidose diabética;</LItem>; Doenças reumáticas;
            <LItem>Leucemia aguda;</LItem>
            <LItem>Artrite coxofemoral.</LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Exames Complementares Iniciais">
        <P>
          Hemograma completo: exame importante no sentido de observar anemia,
          plaquetopenia, leucocitose com desvio à esquerda.
        </P>
        <P>
          Urina tipo I (EAS): avaliar hematúria em casos de litíase renal ou
          leucocitúria nas infecções urinárias deve rotineiramente ser
          solicitado.
        </P>
        <P>
          Os exames complementares, como: amilase e transaminases para dor
          abdominal epigástrica ou de localização no hipocôndrio direito podem
          ser úteis como complementação de investigação. Em situações de maior
          gravidade, eletrólitos e gasometria venosa ou arterial são exames
          extremamente úteis.
        </P>
        <P>Glicemia capilar: afastar cetoacidose diabética.</P>
        <P>
          Radiografia de abdome agudo (tórax e abdome, mínimo 3 incidências):
          avaliar pneumonia, sinais de pneumoperitônio, distensão de alças,
          níveis hidroaéreos, empilhamento de moedas, presença ou não de gás no
          reto.
        </P>
        <P>
          Ecografia de abdome total e/ou pelve: constitui exame não invasivo que
          pode trazer informações a respeito das vias biliares, pâncreas,
          ecotextura do fígado, baço e rins. O exame, ainda pode ser útil em
          casos de apendicite, torção de cisto ovariano ou presença de outros
          processos inflamatórios e coleções intra bdominais. Há casos duvidosos
          em que se deve complementar o estudo através de tomografia abdominal
          ou ressonância magnética.
        </P>
      </Section>
      <Section title="Tratamento">
        <P>
          Conforme descrito, dependendo da idade da criança, da história
          clínica, do exame físico e dos exames complementares, são várias as
          situações que podem apresentar-se com um quadro de abdome agudo e, a
          conduta deve ser tomada em função da etiologia.
        </P>
        <Figure
          source={img1}
          size={[756, 978]}
          caption="Figura 1. Fluxograma de investigação etiológica do paciente pediátrico com dor."
        />
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="CARVALHO E, Ferreira CT, Silva LR. Gastroenterologia e nutrição em pediatria. Barueri, SP: Manole, 2012."
        />
        <Reference
          idx={2}
          body="TOPOROVSKI MS. Avaliação clínica da dor abdominal aguda. Recomendações.  Atualização de Condutas em Pediatria. Departamentos Científicos da SPSP, nº 43 gestão 2007-2009. Disponível em: http://www.spsp.org.br/site/asp/recomendacoes/Rec_43_DorAbdominal.pdf "
        />
        <Reference
          idx={3}
          body="CARVALHO MCM, et al. Manual de protocolos terapêuticos em pediatria 1ª edição. Ministério da Saúde. 2010. Disponível em: https://www.minsaude.gov.cv/index.php/documentosite/outros-documentos/manuais/200-manual-protocolos-pediatria/file"
        />
      </Section>
    </Routine>
  )
}
