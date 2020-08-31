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

export default class PrimoinfeccaoEEncefaliteHerpetica extends React.Component {

	static title = "Primoinfecção e Encefalite Herpética"
	static category = "Infectologia"
    static authors = "Dr. Iúri Leão de Almeida"
    static tags = ["herpes", "gengivoestomatite", "estomatite"]

		render = () =>
			<Routine title={PrimoinfeccaoEEncefaliteHerpetica.title} category={PrimoinfeccaoEEncefaliteHerpetica.category} authors={PrimoinfeccaoEEncefaliteHerpetica.authors}>
				<Section title="Diagnóstico Clínico">
                    <P>
                        <Text style={{fontWeight: 'bold'}}>Fatores de Risco:</Text> Infecção ubíqua, sem sazonalidade, transmitida por contato próximo, através das mucosas. Cerca de 95% dos seres humanos tem sorologia positiva para o vírus do herpes.
                    </P>
                    <P>
                        Sinais e sintomas frequentes: ao contrário de manifestação recorrente de herpes labial dos adultos, a primoinfecção herpética nas crianças é geralmente bastante sintomática. Cursa com febre (de até 10 dias), lesões orais difusas (gengivoestomatite, úlceras em orofaringe, palato, língua) e consequente hiporexia importante, adinamia e irritabilidade.
                    </P>
                    <P>
                        Nos pacientes susceptíveis o herpes pode alcançar proporções sistêmicas sendo a forma mais grave a encefalite herpética, que se manifesta como febre, cefaleia, sinais meníngeos, rebaixamento sensorial e crises epilépticas de difícil controle.
                    </P>
                    <P>
                        Pacientes imunocomprometidos podem apresentar quadro de choque séptico.
                    </P>
                </Section>
                <Section title="Diagnóstico Laboratorial">
                    <P>
                        Os quadros de gengivoestomatite herpética simples não carecem de investigação laboratorial. Mesmo nos casos sistêmicos, as alterações laboratoriais são geralmente de caráter leve e inespecífico, até mesmo nos casos de encefalite herpética. A sorologia para o herpes pode ser de resultado tardio, portanto não deve atrasar o tratamento nos casos de suspeita de infecção grave. O IgM não é muito confiável e pode estar negativo em casos agudos. Os exames complementares mais significativos são: a pesquisa direta do vírus, por PCR, em especial no diagnóstico da encefalite, além do ENM e da RNM de encéfalo, que tipicamente apresentam alterações no lobo temporal.
                    </P>
                </Section>
                <Section title="Critérios de Internação">
                    <P>
                        Crianças com estado geral comprometido, que não conseguem ingerir líquidos, com infecções secundárias, ou imunocomprometidas.
                    </P>
                </Section>
                <Section title="Complicações Mais Frequentes">
                    <P>
                        A gengivoestomatite herpética pode cursar com infecção secundária bacteriana em boca e demandar antibioticoterapia.
                    </P>
                </Section>
                <Section title="Tratamento">
                    <P>
                        Nos casos de gengivoestomatite herpética, o tratamento quase sempre é dispensável, pelo caráter auto-limitado da doença. Todavia o uso do aciclovir (oral, na dose de 80 mg/kg/dia, de 6/6h ou venoso, na dose de 30 mg/kg/dia, de 8/8h) pode ser cogitado nos casos de queda do estado geral, comorbidades ou persistentes.
                    </P>
                    <P>
                        No caso de suspeita de encefalite herpética está indicado o aciclovir venoso, ainda que sem a confirmação diagnóstica, além do suporte para as convulsões.
                    </P>
                    <P>
                        CRITÉRIOS DE ALTA: Resolução das complicações, melhora da febre e sinais de melhora da aceitação oral.
                    </P>
                </Section>
                <Section title="Prognóstico e Orientações para o Seguimento">
                    <P>
                        Acompanhamento ambulatorial nos casos graves ou neurológicos, monitoramento para sequelas neurológicas.
                    </P>
                </Section>
				<Section title="Referências">
				<Reference idx={1} body="Klein, R. S. Herpes simplex vírus type 1 encephalitis. Setembro, 2018."/>
				<Reference idx={2} body="Kliegman, R. M. et al. Nelson: Tratado de pediatria. Editora Elsevier."/>
				</Section>
		</Routine>
}