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

import img1 from './images/image1.jpg'

export default class ColoqueONomeDaRotinaAqui extends React.Component {

	static title = ""
	static category = ""
	static authors = ""

		render = () =>
			<Routine title={ColoqueONomeDaRotinaAqui.title} category={ColoqueONomeDaRotinaAqui.category} authors={ColoqueONomeDaRotinaAqui.authors}>
				<Table head={['Etiologia', 'Leve', 'Moderado', 'Grave', 'Tipo de soro']} data={[
					['Botrópico', '2 – 4', '4 - 8', '12', 'SAB ou SABC'],
					['Laquético', '-', '10', '20', 'SAL ou SABL'],
					['Crotálico', '5', '10', '20', 'SAB ou SABC'],
					['Elapídico', '-', '-', '10', 'SAE'],
					['Escorpiônico', '', '2 - 3', '4 - 6', 'SAE ou SAAr'],
					['Phoneutria', '', '2 - 4', '5 - 10', 'SAAr'],
					['Lexósceles', '', '5', '10', 'SALox ou SAA'],
					['Latrodecta', '', '', '1 – 2', 'IM', 'SALatr'],
					['Lonomia', '', '5', '10', 'SALon']
				]} />
				<Section title="Referências">
				<Reference idx={1} body=""/>
				<Reference idx={2} body=""/>
				<Reference idx={3} body=""/>
				<Reference idx={4} body=""/>
				</Section>
		</Routine>
}