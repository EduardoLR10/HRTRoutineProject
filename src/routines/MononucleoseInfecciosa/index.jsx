import React from 'react'
import { Text } from 'react-native';
import Figure from '../../components/templates/Figure'
import { List, LItem } from '../../components/templates/List'
import P from '../../components/templates/Paragraph'
import Reference from '../../components/templates/Reference'
import Routine from '../../components/templates/Routine'
import Section from '../../components/templates/Section'
import Subsection from '../../components/templates/Subsection'
import Subsubsection from '../../components/templates/Subsubsection'
import Table from '../../components/templates/Table'

export default class MononucleoseInfecciosa extends React.Component {

	static title = "Mononucleose Infecciosa"
	static category = "Infectologia"
    static authors = "Dr. Iúri Leão de Almeida e Dr. Marco Antonio Alves Cunha"
    static tags = ["EBV", "doença", "beijo"]

		render = () =>
			<Routine title={MononucleoseInfecciosa.title} category={MononucleoseInfecciosa.category} authors={MononucleoseInfecciosa.authors}>
				<Section title="Diagnóstico Clínico">
                    <P>
                        Fatores de risco: Embora o clássico seja a “doença do beijo” em adolescentes e adultos jovens, no nosso país as faixas etárias mais frequentes são a pré-escolar e escolar. O vírus Epstein-Barr (EBV) causa cerca de 90% dos casos da síndrome, mas outros vírus podem ser a causa, como CMV, herpes simplex, herpes tipo 6, rubéola, hepatites virais e HIV.
                    </P>
                    <P>
                        Sinais e sintomas frequentes: Nas crianças é provavelmente a mais frequente causa de febre de origem indeterminada. É mais comum uma síndrome oligosintomática do que a clássica síndrome da mononucleose infecciosa do adolescente e adulto jovem.
                    </P>
                    <P>
                        Após 1 mês de período de incubação surgem adinamia e fadiga por 1 a 2 semanas. Seguem-se cerca de 2 semanas de febre, dor de garganta, cefaleia, adenomegalias, esplenomegalia, mialgias e dor abdominal. O exantema micropapular leve ocorre em cerca de 10% dos casos, mas se eleva para cerca de 80% no caso de uso de penicilinas. Pode ocorrer edema bipalpebral bilateral frio no início do quadro (sinal de Hoagland).
                    </P>
                    <P>
                        Os principais diagnósticos diferenciais são com a amigdalite bacteriana e a toxoplasmose, ainda com a doença de Kawasaki.
                    </P>
                </Section>
                <Section title="Diagnóstico Laboratorial">
                    <P>
                        O hemograma frequentemente ajuda no diagnóstico. É comum leucocitose (embora possa ocorrer leucopenia) com predomínio de linfócitos e contagem de linfócitos atípicos maior que 10%. Quanto maior a proporção de linfócitos atípicos no hemograma, maior a chance de se tratar de infecção pelo EBV.
                    </P>
                    <P>
                        Quase todos os pacientes apresentam também elevações leves a moderadas das transaminases (80 a 600) e do DHL (800 a 1700).
                    </P>
                    <P>
                        A dosagem de anticorpos específicos contra o vírus EBV é muito útil: deve ser solicitada a pesquisa de anticorpos anti-capsídio viral (VCA) IgM e IgG. Frequentemente os anticorpos IgM estão positivos já no início dos sintomas, mas a ausência de comprovação sorológica não pode excluir a infecção pelo EBV. A sorologia por pesquisa de anticorpos heterófilos (monoteste e Paul-Bunnell-Davidsohn) geralmente é ineficaz na faixa etária pediátrica, com positividade menor que 30%.
                    </P>
                </Section>
                <Section title="Critérios de Internação">
                    <P>
                        Crianças com estado geral comprometido, com infecções secundárias, ou imunocomprometidas.
                    </P>
                </Section>
                <Section title="Complicações Mais Frequentes">
                    <P>
                        Hipertrofia acentuada de linfonodos cervicais pode causar desconforto respiratório. Esplenomegalia acentuada pode complicar em rotura de baço. Pacientes imunocomprometidos podem muito raramente evoluir com doença sistêmica grave a afecção de sistema nervoso central.
                    </P>
                </Section>
                <Section title="Tratamento">
                    <P>
                        Quase sempre dispensável. Para o tratamento de hipertrofia acentuada de tecido linfóide, cursos curtos de corticoide podem ser indicados:
                    </P>
                    <List>
                        <LItem>
                            Prednisolona ou prednisona 1 a 2 mg/kg/dia. Dexametasona 0,15 mg/kg/dose.
                        </LItem>
                        <LItem>
                            Aciclovir também pode ter efeito sobre o EBV, mas raramente oferece benefícios para o paciente imunocompetente.
                        </LItem>
                    </List>
                    <Subsection title="Critérios de Alta">
                        <P>
                            Resolução das complicações, melhora da febre e sinais de melhora no hemograma.
                        </P>
                    </Subsection>
                </Section>
                <Section title="Prognóstico e Orientações para o Seguimento">
                    <P>
                        Pacientes com mononucleose podem ter a cronificação da infecção e, por isso, devem ser acompanhados por pelo menos 6 meses no ambulatório de pediatria. No seguimento, monitorar a esplenomegalia que é um dos sinais de cronificação, solicitar pelo menos um hemograma para afastar plaquetopenia que é característica da infecção crônica, e verificar a queda dos títulos de anticorpos da classe IgM e elevação de anticorpos da classe IgG.
                    </P>
                </Section>
				<Section title="Referências">
				<Reference idx={1} body="Farhat CK, Carvalho ES, Carvalho LH, Succi RC, editors. Infectologia Pediátrica. 3.ed. São Paulo: Atheneu; 2007."/>
				<Reference idx={2} body="Krugman S, Katz SL, Gershon AA, Wilfert CM. Doenças Infecciosas na Infância. 9.ed. Rio de Janeiro: Guanabara Koogan; 1994."/>
				<Reference idx={3} body="Bolis V, et al. Atypical manifestations of Epstein-Barr virus in children: a diagnostic challenge. J Pediatr (Rio J). 2016;92(2):113-21."/>
				</Section>
		</Routine>
}