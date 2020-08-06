import React from 'react'
import Figure from '../../components/templates/Figure'
import { List, LItem } from '../../components/templates/List'
import P from '../../components/templates/Paragraph'
import Reference from '../../components/templates/Reference'
import Routine from '../../components/templates/Routine'
import Section from '../../components/templates/Section'
import Subsection from '../../components/templates/Subsection'
import Subsubsection from '../../components/templates/Subsubsection'
import Table from '../../components/templates/Table'

export default class Coqueluche extends React.Component {

  static title = "Coqueluche"
  static category = "Lactentes"
  static authors = "Dr. Francisco Rufino Rosa Neto"

    render = () =>
      <Routine title={Coqueluche.title} category={Coqueluche.category} authors={Coqueluche.authors}>
        <Section title="Diagnóstico Clínico">
            <P>
                Doença infecciosa aguda do trato respiratório, de alta contagiosidade, causada pela bactéria <P style={{fontStyle: 'italic'}}>Bordetella pertussis</P>, podendo também, em menor frequência, ser causada pelas <P style={{fontStyle: 'italic'}}>Bordetella parapertussis</P>, <P style={{fontStyle: 'italic'}}>Bordetella bronchiseptica</P> e <P style={{fontStyle: 'italic'}}>bordetella avium</P>.
            </P>
        </Section>
        <Section title="Fatores de Risco">
            <List>
                <LItem>
                    Pessoas não vacinadas.
                </LItem>
                <LItem>
                    Aglomerados e frequentar creches.
                </LItem>
                <LItem>
                    RN e lactentes jovens.
                </LItem>
            </List>
        </Section>
        <Section title="Sinais e Sintomas Frequentes">
            <Subsection title="Fase Catarral">
                <P>
                    Dura de 1 a 2 semanas e apresenta sintomas respiratórios inespecíficos (tosse seca discreta, febrícula às vezes).
                </P>
            </Subsection>
            <Subsection title="Fase Paroxística">
                <P>
                    Dura de 4 a 8 semanas; classicamente vai apresentar tosse seca sem pausa inspiratória, que ocorre em crises, levando a pletora facial ou cianose com inspiração profunda ruidosa (“Guincho”) ao final da tosse, esses paroxismos podem apresentar ainda eliminação de secreção espessa e/ou vômito. Logo após o episódio da tosse o paciente vai se apresentar exausto, com taquidispneia que melhora após alguns minutos. Nos intervalos entre as crises, geralmente apresenta-se bem, sem alterações ao exame clínico.
                </P>
            </Subsection>
            <Subsection title="Fase de Convalescença">
                <P>
                    Dura de 3 a 4 semanas, os paroxismos vão diminuindo em número e intensidade até o desaparecimento.
                </P>
            </Subsection>
            <P>
                Importante: Nos lactentes jovens, principalmente abaixo de 3 meses, as fases podem ser de períodos diferentes e os sintomas não são clássicos, podendo não ter os “Guinchos” ou surgirem na fase de convalescença; na fase paroxística pode apresentar apneia e convulsões.
            </P>
        </Section>
        <Section title="Diagnóstico Laboratorial">
            <P>
                O diagnóstico é basicamente clínico, porém pode apresentar alterações bem sugestivas nos exames complementares.
            </P>
            <P>
                Hemograma apresenta leucocitose (geralmente {'>'} 20.000 células/mm3) e linfocitose relativa e absoluta.
            </P>
            <P>
                Radiografia de tórax na maioria das vezes é normal, podendo ter atelectasias variáveis, opacidades perihilares e paracardíaca (“coração felpudo”), pneumotórax e pneumomediastino.
            </P>
            <P>
                Isolamento da <P style={{fontStyle: 'italic'}}>Bordetella pertussis</P> através de cultura de secreção nasofaríngea, colhida por swab. Este exame tem baixa sensibilidade e alta especificidade, e deve ser colhida preferencialmente antes do início do tratamento ou até 72 horas após o seu início.
            </P>
        </Section>
        <Section title="Critérios de Internação">
            <List>
                <LItem>
                    Presença de cianose.
                </LItem>
                <LItem>
                    Vômitos.
                </LItem>
                <LItem>
                    Dificuldades alimentares.
                </LItem>
                <LItem>
                    Lactentes menores de 3 meses.
                </LItem>
                <LItem>
                    Leucocitose {'>'} 50.000 células/mm.
                </LItem>
                <LItem>
                    Presença de apneia.
                </LItem>
                <LItem>
                    Presença de convulsão.
                </LItem>
            </List>
        </Section>
        <Section title="Complicações Frequentes">
            <List>
                <LItem>
                    Desidratação.
                </LItem>
                <LItem>
                    Desnutrição.
                </LItem>
                <LItem>
                    Pneumonia bacteriana secundária.
                </LItem>
                <LItem>
                    Pneumotórax e Pneumomediastino.
                </LItem>
                <LItem>
                    Hemorragias (epistaxe, subconjuntival, petéquias em face).
                </LItem>
                <LItem>
                    Convulsão e apneia.
                </LItem>
            </List>
        </Section>
        <Section title="Tratamento de Suporte">
            <List>
                <LItem>
                    Oxigênio inalatório nos episódios de cianose.
                </LItem>
                <LItem>
                    Cuidados alimentares (fracionamento).
                </LItem>
                <LItem>
                    Hidratação venosa em situações de não aceitação de dieta e vômitos frequentes.
                </LItem>
                <LItem>
                    Internação em leito de isolamento nos primeiros 5 dias de tratamento medicamentoso.
                </LItem>
            </List>
        </Section>
        <Section title="Tratamento Medicamentoso">
            <List>
                <LItem>
                    Azitromicina 10mg/kg uma vez ao dia durante 5 dias.
                </LItem>
                <LItem>
                    Claritromicina 15mg/kg/dia dividida em 2 doses (12/12h) durante 7 a 10 dias.
                </LItem>
                <LItem>
                    Eritromicina 40 a 50mg/kg/dia dividida em 4 doses (6/6h) durante 14 dias – atualmente pouco usada devido a efeitos colaterais e dificuldades terapêuticas.
                </LItem>
            </List>
        </Section>
        <Section title="Tratamento de Contactantes">
            <P>
                Deve-se tratar os contactantes familiares, mesmo que sejam vacinados, com azitromicina ou claritromicina.
            </P>
        </Section>
        <Section title="Critérios de Alta">
            <List>
                <LItem>
                    Estar pelo menos há 48 horas sem apresentar cianose.
                </LItem>
                <LItem>
                    Boa aceitação da dieta.
                </LItem>
                <LItem>
                    Crises paroxísticas diminuídas.
                </LItem>
            </List>
        </Section>
        <Section title="Prognóstico e Orientações para Seguimento">
            <List>
                <LItem>
                    Geralmente bom, mas preocupante em leucocitoses intensas ({'>'} 50.000 células/mm3).
                </LItem>
                <LItem>
                    A doença imuniza o indivíduo, porém não isenta a necessidade da vacinação.
                </LItem>
                <LItem>
                    Retorno na enfermaria em 1 semana.
                </LItem>
                <LItem>
                    Encaminhamento para acompanhamento ambulatorial para seguimento e ver resultado de cultura.
                </LItem>
            </List>
        </Section>
        <Section title="Vacinação">
            <List>
                <LItem>
                    DTP ou DTPa em menores de 7 anos.
                </LItem>
                <LItem>
                    dTpa em adultos, inclusive gestantes.
                </LItem>
            </List>
        </Section>
        <Section title="Referências">
            <Reference idx={1} body="Farhat CK, Carvalho LHFR, Succi RCM. Infectologia Pediátrica. 3a Edição. São Paulo: Editora Atheneu; 2007. p.291-303."/>
            <Reference idx={2} body="Rozov T. Doenças Pulmonares em Pediatria: Diagnóstico e Tratamento. 1a Edição. São Paulo: Editora Atheneu; 1999. p.288-93."/>
            <Reference idx={3} body="Motta F, Cunha J. Coqueluche: uma revisão atual de uma antiga doença. Bol Cient de Pediatria. 2012; 1(2):42-46."/>
            <Reference idx={4} body="Liphaus BL, Gonçalves MIC, Marques TR. Coqueluche: epidemiologia e controle. BEPA. 2008; 5(53):3-8."/>
        </Section>
    </Routine>
}