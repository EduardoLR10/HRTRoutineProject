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

export default function Coqueluche(): JSX.Element {
  return (
    <Routine
      id="coqueluche"
      name="Coqueluche"
      categories={['lactentes']}
      authors={['francisco']}
      tags={['tosse', 'pertussis']}
    >
      <Section title="Diagnóstico Clínico">
        <P>
          Doença infecciosa aguda do trato respiratório, de alta contagiosidade,
          causada pela bactéria <Italic>Bordetella pertussis</Italic>, podendo
          também, em menor frequência, ser causada pelas{' '}
          <Italic>Bordetella parapertussis</Italic>,{' '}
          <Italic>Bordetella bronchiseptica</Italic> e{' '}
          <Italic>bordetella avium</Italic>.
        </P>
      </Section>
      <Section title="Fatores de Risco">
        <List>
          <LItem>Pessoas não vacinadas.</LItem>
          <LItem>Convívio em aglomerados e frequentar creches.</LItem>
          <LItem>RN e lactentes jovens.</LItem>
        </List>
      </Section>
      <Section title="Sinais e Sintomas Frequentes">
        <Subsection title="Fase Catarral">
          <P>
            Dura de 1 a 2 semanas e apresenta sintomas respiratórios
            inespecíficos (tosse seca discreta, febrícula às vezes).
          </P>
        </Subsection>
        <Subsection title="Fase Paroxística">
          <P>
            Dura de 4 a 8 semanas; caracterizada classicamente porr tosse seca
            sem pausa inspiratória, que ocorre em crises, levando a pletora
            facial ou cianose com inspiração profunda ruidosa (“guincho”) ao
            final da tosse, esses paroxismos podem apresentar ainda eliminação
            de secreção espessa e/ou vômito. Logo após o episódio da tosse o
            paciente vai se apresentar exausto, com taquidispneia que melhora
            após alguns minutos. Nos intervalos entre as crises, geralmente
            apresenta-se bem, sem alterações ao exame clínico.
          </P>
        </Subsection>
        <Subsection title="Fase de Convalescença">
          <P>
            Dura de 3 a 4 semanas, os paroxismos vão diminuindo em número e
            intensidade até o desaparecimento.
          </P>
        </Subsection>
        <P>
          <Bold>Importante:</Bold> nos lactentes mais jovens, principalmente
          abaixo de 3 meses, as fases podem ser de períodos diferentes e os
          sintomas podem não ser clássicos, não apresentando os “guinchos” ou
          surgirem na fase de convalescença; na fase paroxística podem
          apresentar apneia e convulsões.
        </P>
      </Section>
      <Section title="Diagnóstico Laboratorial">
        <P>
          O diagnóstico é basicamente clínico, porém pode apresentar algumas
          alterações bem sugestivas nos exames complementares, a seguir.
        </P>
        <P>
          O hemograma geralmente apresenta leucocitose (geralmente {'>'} 20.000
          células/mm³), com linfocitose relativa e absoluta.
        </P>
        <P>
          A radiografia de tórax, na maioria das vezes, é normal, podendo ter
          atelectasias variáveis, opacidades perihilares e paracardíaca
          (“coração felpudo”), pneumotórax e pneumomediastino.
        </P>
        <P>
          O isolamento da <Italic>Bordetella pertussis</Italic> através de
          cultura é feito pela coleta de secreção nasofaríngea, colhida por
          swab. Este exame tem baixa sensibilidade e alta especificidade, e deve
          ser colhido preferencialmente, antes do início do tratamento ou até 72
          horas após o seu início.
        </P>
      </Section>
      <Section title="Critérios de Internação">
        <List>
          <LItem>Presença de cianose.</LItem>
          <LItem>Vômitos.</LItem>
          <LItem>Dificuldades alimentares.</LItem>
          <LItem>Lactentes menores de 3 meses.</LItem>
          <LItem>Leucocitose {'>'} 50.000 células/mm.</LItem>
          <LItem>Presença de apneia.</LItem>
          <LItem>Presença de convulsão.</LItem>
        </List>
      </Section>
      <Section title="Complicações Frequentes">
        <List>
          <LItem>Desidratação.</LItem>
          <LItem>Desnutrição.</LItem>
          <LItem>Pneumonia bacteriana secundária.</LItem>
          <LItem>Pneumotórax e Pneumomediastino.</LItem>
          <LItem>
            Hemorragias (epistaxe, subconjuntival, petéquias em face).
          </LItem>
          <LItem>Convulsão e apneia.</LItem>
        </List>
      </Section>
      <Section title="Tratamento de Suporte">
        <List>
          <LItem>Oxigênio inalatório nos episódios de cianose.</LItem>
          <LItem>Cuidados alimentares (fracionamento).</LItem>
          <LItem>
            Hidratação venosa em situações de não aceitação de dieta e vômitos
            frequentes.
          </LItem>
          <LItem>
            Internação em leito de isolamento nos primeiros 5 dias de tratamento
            medicamentoso.
          </LItem>
        </List>
      </Section>
      <Section title="Tratamento Medicamentoso">
        <List>
          <LItem>Azitromicina 10mg/kg, 1 vez ao dia durante 5 dias.</LItem>
          <LItem>
            Claritromicina 15mg/kg/dia, dividida em 2 doses (12/12h) durante 7 a
            10 dias.
          </LItem>
          <LItem>
            Eritromicina 40 a 50mg/kg/dia, dividida em 4 doses (6/6h) durante 14
            dias – atualmente pouco usada devido a efeitos colaterais e
            dificuldades terapêuticas.
          </LItem>
        </List>
      </Section>
      <Section title="Tratamento de Contactantes">
        <P>
          Deve-se tratar os contactantes familiares, mesmo que sejam vacinados,
          com azitromicina ou claritromicina.
        </P>
      </Section>
      <Section title="Critérios de Alta">
        <List>
          <LItem>
            A criança deve estar há, pelo menos, 48 horas sem apresentar
            cianose.
          </LItem>
          <LItem>Boa aceitação da dieta.</LItem>
          <LItem>Crises paroxísticas diminuídas.</LItem>
        </List>
      </Section>
      <Section title="Prognóstico e Orientações para Seguimento">
        <List>
          <LItem>
            Geralmente bom, mas preocupante em leucocitoses intensas ({'>'}{' '}
            50.000 células/mm³).
          </LItem>
          <LItem>
            A doença imuniza o indivíduo, porém não isenta a necessidade da
            vacinação.
          </LItem>
          <LItem>
            Retorno na enfermaria em 1 semana para reavaliação clínica.
          </LItem>
          <LItem>
            Encaminhamento para acompanhamento ambulatorial para seguimento e
            resgate do resultado de cultura.
          </LItem>
        </List>
      </Section>
      <Section title="Vacinação">
        <List>
          <LItem>DTP ou DTPa em menores de 7 anos.</LItem>
          <LItem>dTpa em adultos, inclusive gestantes.</LItem>
        </List>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Farhat CK, Carvalho LHFR, Succi RCM. Infectologia Pediátrica. 3a Edição. São Paulo: Editora Atheneu; 2007. p.291-303."
        />
        <Reference
          idx={2}
          body="Rozov T. Doenças Pulmonares em Pediatria: Diagnóstico e Tratamento. 1a Edição. São Paulo: Editora Atheneu; 1999. p.288-93."
        />
        <Reference
          idx={3}
          body="Motta F, Cunha J. Coqueluche: uma revisão atual de uma antiga doença. Bol Cient de Pediatria. 2012; 1(2):42-46."
        />
        <Reference
          idx={4}
          body="Liphaus BL, Gonçalves MIC, Marques TR. Coqueluche: epidemiologia e controle. BEPA. 2008; 5(53):3-8."
        />
      </Section>
    </Routine>
  )
}
