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

export default class ColoqueONomeDaRotinaAqui extends React.Component {

  static title = ""
  static category = ""
  static authors = ""

    render = () =>
      <Routine title={ColoqueONomeDaRotinaAqui.title} category={ColoqueONomeDaRotinaAqui.category} authors={ColoqueONomeDaRotinaAqui.authors}>
        <Section title="Referências">
        <Reference idx={1} authors=""/>
        <Reference idx={2} authors=""/>
        <Reference idx={3} authors=""/>
        <Reference idx={4} authors=""/>
        </Section>
    </Routine>
}