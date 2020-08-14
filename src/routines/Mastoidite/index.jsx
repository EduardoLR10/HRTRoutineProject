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

export default class Mastoidite extends React.Component {

	static title = "Mastoidite"
	static category = "Infectologia"
	static authors = "Dr. Iurí Leão de Almeida e Dr. Marco Antonio Cunha"

		render = () =>
			<Routine title={Mastoidite.title} category={Mastoidite.category} authors={Mastoidite.authors}>
				<Section title="Diagnóstico Clínico">
                    <P>
                        Fatores de risco: a mastoidite é uma infecção supurativa que ocorre geralmente como complicação de uma otite média aguda. É mais frequente em crianças do que em adultos e pode estar relacionada com pacientes imunossuprimidos, otites de repetição e complicações cirúrgicas.
                    </P>
                    <P>
                        Sinais e sintomas frequentes: dor, flogose e abaulamento do processo mastóideo, geralmente unilateral, frequentemente com abaulamento da orelha. Deve-se atentar para não se confundir o quadro de mastoidite com adenites retroauriculares, cervicais ou parotidites. Uma palpação cautelosa da região geralmente é suficiente para que se discerne a mastoidite dos outros quadros. Geralmente o quadro é associado a febre, queda do estado geral (ainda que leve), otite média recente e sintomas respiratórios como tosse e coriza.
                    </P>
                </Section>
                <Section title="Diagnóstico Laboratorial">
                    <P>
                        A suspeição clínica pode ser confirmada com um exame tomográfico (tomografia de mastoide com contraste). Geralmente observa-se preenchimento das células mastóideas por líquido. Deve-se atentar, todavia que cerca de 60% dos exames tomográficos desse tipos são falso-positivos, portanto, não se deve tratar crianças com exame alterado que não apresentem clínica compatível. A tomografia também permite avaliar complicações como abscessos e erosões ósseas. O hemograma pode ser normal ou apresentar leucocitose.
                    </P>
                </Section>
                <Section title="Critérios de Internação">
                    <P>
                        A princípio todas as crianças com suspeita de mastoidite devem ser internadas para realização da tomografia e início de tratamento com antibiótico endovenoso.
                    </P>
                </Section>
                <Section title="Compliações Mais Frequentes">
                    <P>
                        São raras, mas podem acarretar necessidade de parecer cirúrgico, como abscessos, destruição óssea ou complicações intracranianas (meningite, abscesso).
                    </P>
                </Section>
                <Section title="Tratamento Empírico">
                    <P>
                        Rotineiramente, ceftriaxona na dose de 50 a 80 mg/kg/dia com máximo de 2 gramas ao dia (100 mg/kg/dia com máximo de 4 gramas ao dia em caso de suspeita de meningite e reduzindo quando descartar). Uma segunda opção para casos mais brandos é ampicilina com sulbactam (200 mg/kg/dia), que permite mais facilmente a continuidade oral do tratamento no momento da alta. Em pacientes sadios, sem complicações, o tratamento venoso pode ser encurtado para 7 dias, mas rotineiramente se preconiza ao menos de 10 a 14 dias de tratamento parenteral. Casos complicados podem demandar até 28 dias de tratamento venoso. A duração total do tratamento deve ser de 6 semanas e a droga oral de substituição do tratamento parenteral poderá ser amoxicilina com clavulanato na dose de 50 mg/kg/dia.
                    </P>
                </Section>
                <Section title="Critérios de Alta">
                    <P>
                        Resolução dos sintomas infecciosos, mais de 48 horas afebril. No caso de alterações tomográficas significativas, é necessário exame de controle.
                    </P>
                </Section>
                <Section title="Prognóstico e Orientações para o Seguinte">
                    <P>
                        Acompanhamento ambulatorial nos casos graves ou neurológicos, monitoramento para sequelas. Acompanhamento na otorrinolaringologia no caso de complicações ou comorbidades.
                    </P>
                </Section>
				<Section title="Referências">
				<Reference idx={1} body="Kliegman, R. M. et al. Nelson: Tratado de pediatria. Editora Elsevier."/>
				<Reference idx={2} body="DynaMed [Internet]. Ipswich (MA): EBSCO Information Services. 1995 - . Record No. 116609, Acute mastoiditis; [atualizado em 2018 Jul 11]"/>
				</Section>
		</Routine>
}