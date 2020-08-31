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

import img1 from './images/image1.png'

export default class CriseHipoxia extends React.Component {

  static title = "Crise Hipoxia"
  static category = "Cardiologia"
  static authors = "Dra. Luciany Almeida de Carvalho"
  static tags = ["oxigênio", "hipoxemia"]

    render = () =>
      <Routine title={CriseHipoxia.title} category={CriseHipoxia.category} authors={CriseHipoxia.authors}>
        <Section title="Introdução">
            <P>
                A crise de hipóxia caracteriza-se por piora súbita da hipóxia com consequente aumento no grau de cianose, hiperpnéia e agitação. Pode evoluir para hipotonia, sonolência chegando torpor, a crises convulsivas e até óbito, caso não haja reversão do quadro.
            </P>
            <P>
                Mais comum entre os 2 meses e 3 anos de idade, porém pode ocorrer desde o período neonatal até idade escolar.
            </P>
            <P>
                Ocorre em crianças portadoras de cardiopatias congênitas cianóticas:
            </P>
            <List>
                <LItem>
                    Tetralogia de Fallot (mais comum);
                </LItem>
                <LItem>
                    Atresia Pulmonar com comunicação interventricular;
                </LItem>
                <LItem>
                    Cardiopatias complexas que apresentem obstrução dinâmica ao fluxo pulmonar;
                </LItem>
                <LItem>
                    No período neonatal: cardiopatias com fluxo pulmonar canal dependente ocorrendo após fechamento deste.
                </LItem>
            </List>
        </Section>
        <Section title="Fisiopatologia">
            <P>
                Alteração básica causal é a redução do fluxo sanguíneo pulmonar e aumento do fluxo intracardíaco da direita para esquerda, ou seja, aumento do fluxo sanguíneo insaturado para circulação sistêmica.
            </P>
            <P>
                O espasmo da região infundibular do ventrículo direito leva a obstrução dinâmica ao fluxo pulmonar. Este fator justifica porque tal entidade é mais comum em pacientes portadores de Tetralogia de Fallot.
            </P>
            <P>
                Uma vez iniciada a crise, a redução na saturação de oxigênio sistêmico leva a acidose metabólica, diminuição da resistência sistêmica, taquipneia e consequente aumento do fluxo da direita para esquerda (Figura 1).
            </P>
            <Figure source={img1} bottom_label="Figura 1"/>
            <P>
                Principais fatores desencadeantes:
            </P>
            <List>
                <LItem>
                    Infecções, febre;
                </LItem>
                <LItem>
                    Desidratação;
                </LItem>
                <LItem>
                    Choro intenso;
                </LItem>
                <LItem>
                    Quadros de constipação;
                </LItem>
                <LItem>
                    Taquiarritmia;
                </LItem>
                <LItem>
                    Exercícios físicos;
                </LItem>
                <LItem>
                    Uso de medicações como beta-adrenérgicos, digital, alguns anestésicos;
                </LItem>
                <LItem>
                    Anemia.
                </LItem>
            </List>
            <P>
                Mais comum no período da manhã quando resistência vascular periférica é menor.
            </P>
        </Section>
        <Section title="Quadro Clínico">
            <P>
                Os lactentes apresentam irritabilidade intensa com choro inconsolável.
            </P>
            <P>
                Os pré-escolares e escolares em geral adotam a posição de cócoras.
            </P>
            <P>
                Ao exame físico, além da cianose intensa, taquipneia, taquicardia é habitual ser observado desaparecimento do sopro prévio.
            </P>
            <P>
                As crises menos intensas podem ser limitadas e assim apresentarem resolução espontânea, em geral, em torno de 15 minutos. Em casos mais graves, podem evoluir para alteração de nível da consciência, convulsões e óbito.
            </P>
        </Section>
        <Section title="Exames Complementares">
            <P>
                Diagnóstico da crise de hipóxia é clinico sendo os exames complementares úteis para auxiliar na definição e tratamento dos fatores desencadeantes.
            </P>
            <P>
                Solicitar no atendimento inicial: gasometria arterial, hemograma, eletrólitos, VHS, PCR, radiografia de tórax e eletrocardiograma. Entretanto, a realização de tais exames, bem como seus resultados, não deve retardar o início do tratamento para reversão da crise.
            </P>
            <P>
                Ecocardiograma deve ser solicitado para quadros com evolução desfavorável ou quando ainda não se tem diagnóstico da cardiopatia.
            </P>
        </Section>
        <Section title="Tratamento">
            <P>
                O tratamento consiste em medidas clínicas para reversão do quadro, tratamento dos fatores desencadeantes e, se necessário, tratamento cirúrgico.
            </P>
            <List>
                <LItem>
                    A posição genupeitoral: leva a aumento na resistência vascular periférica e diminuição no retorno venoso sistêmico por compressão das artérias femorais, levando a um aumento do fluxo pulmonar efetivo. Em crianças menores: fletir perna sobre a coxa e esta sobre quadril.
                </LItem>
                <LItem>
                    Oxigênio suplementar: deve ser ofertado por mascara ou cateter. Administração deve ser mantida desde que não aumente a irritabilidade da criança.
                </LItem>
                <LItem>
                    Morfina: 0,1mg/kg via intramuscular, subcutânea ou intravenosa. Dose pode ser repetida, se necessário. Permite sedação do paciente levando a redução da irritabilidade e redução no espasmo infundibular.
                </LItem>
                <LItem>
                    Betabloqueadores adrenérgicos (propranolol, metoprolol): reduzem o espasmo infundibular. Uso crônico auxilia na profilaxia das crises.
                </LItem>
                <LItem>
                    Medidas gerais: expansão de volume (20ml/kg), correção de anemia (se Hb {'<'}7g/dl), tratamento da hipoglicemia e distúrbios hidroeletrolíticos.
                </LItem>
                <LItem>
                    No período neonatal: iniciar prostaglandina contínua (0,01mcg/kg/min).
                </LItem>
                <LItem>
                    Vasoconstritores (noradrenalina, adrenalina) e suporte ventilatório invasivo com sedação contínua: para os casos graves e de difícil reversão, devendo o paciente estar ser transferido para unidade de terapia intensiva.
                </LItem>
                <LItem>
                    Cirurgia cardíaca de emergência será considerada para os quadros graves podendo ser indicada correção da cardiopatia ou cirurgia paliativa.
                </LItem>
            </List>
        </Section>
        <Section title="Referências">
        <Reference idx={1} body="CROTTI, Ulisses; MATTOS, Sandra; PINTO JR, Valdester; AIELLO, Vera. Cardiologia e Cirurgia Cardiovascular Pediatrica. 2ª ed. São Paulo: Saraiva, 2013"/>
        <Reference idx={2} body="DORIGO, Ana Helena. Crise cianótica: como diagnosticar e tratar. Rev SOCERJ Vol XIII. Mar, 2000."/>
        </Section>
    </Routine>
}