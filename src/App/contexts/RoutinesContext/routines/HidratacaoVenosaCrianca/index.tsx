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

export default function HidratacaoVenosaCrianca(): JSX.Element {
  return (
    <Routine
      id="hidratacao-venosa-criaca"
      name="Hidratação Venosa na Criança"
      categories={['emergencia']}
      authors={['francisco']}
      tags={[]}
    >
      <Section title="Aspectos Gerais">
        <P>
          A hidratação venosa é usada em diversas situações clínicas, sendo mais
          frequente na pediatria devido a facilidade de desidratação, já que a
          porcentagem de água corporal total na criança é maior. A maioria dos
          casos de desidratação pode ser resolvida através da terapia de
          reidratação oral, mas a terapia de hidratação venosa tem indicações
          precisas, como no choque hipovolêmico, em casos de jejum prolongado e
          outras. A hidratação venosa é usada como terapia de reparação,
          manutenção e reposição, e nesta sessão, abordaremos a terapia de
          manutenção.
        </P>
        <P>
          As crianças saudáveis conseguem tolerar grandes variações na ingesta
          de líquidos, glicose e eletrólitos devido a mecanismos homeostáticos
          que regulam a absorção e a excreção destes, porém quanto mais baixa a
          idade, mais facilmente essa poderá sofrer consequências deletérias.
          Algumas condições clínicas também exigem terapias um pouco diferentes,
          sendo necessário restringir ou aumentar volume, assim como alterar a
          composição do líquido a ser infundido intravenoso.
        </P>
        <P>
          Os líquidos de manutenção não fornecem a quantidade calórica adequada,
          logo os pacientes devem perder, aproximadamente, 0,5 a 1% do peso ao
          dia. Os líquidos habitualmente usados na hidratação venosa de
          manutenção contém glicose, sódio, potássio e cloro, não tendo outros
          elementos importantes como cálcio, fósforo, magnésio, bicarbonato,
          proteínas e lipídeos, isto não é problemático caso os pacientes
          recebam apenas líquidos intravenosos por poucos dias, mas caso este
          período se prolongue, na impossibilidade de usar a via digestiva,
          especialmente se o paciente for desnutrido, a nutrição parenteral
          total deve ser usada.
        </P>
        <P>
          O soro glicosado a 5%, fornece 17 kcal para cada 100 ml (1 g = 3,4
          kcal ), ou seja, aproximadamente, 20% das necessidades calóricas
          normais do paciente. Isto é suficiente para impedir que ocorra cetose
          relacionada ao jejum e para diminuir a degradação proteica que ocorre
          quando o paciente não recebe calorias. A glicose também provê a adição
          de osmóis, evitando assim a administração de líquidos hipotônicos que
          possam causar hemólise.
        </P>
        <P>
          Para cálculo da necessidade hídrica diária de manutenção (NHD)
          estima-se o consumo de quilocalorias (Kcal) basal, sendo este método o
          mais utilizado, devendo usar 1ml para cada kcal de consumo calórico
          basal. O cálculo do consumo calórico segue a tabela abaixo:
        </P>
        <Table
          colWidths={[100, 150, 150]}
          header={[
            'Peso Corporal',
            'Quantidade Calórica por dia',
            'Quantidade de líquido por dia'
          ]}
          data={[
            ['Até 10 kg', '100 Kcal/kg', '100 ml/kg'],
            [
              '11 - 2- kg',
              '1000 Kcal + 50 Kcal/kg pra cada Kg > 10kg',
              '1000ml + 50 ml/lg por Kg > 10kg'
            ],
            [
              '> 20 kg',
              '1500 Kcal + 20 Kcal/kg pra cada kg > 20kg',
              '1500ml + 20 ml/kg por Kg > 20kg máximo de 2400 ml/dia'
            ]
          ]}
          caption="Tabela 1. Necessidade hídrica diária de acordo com o consumo calórico basal em Kcal."
        />
        <Table
          colWidths={[100, 150]}
          header={['Elemento', 'Necessidade']}
          data={[
            ['Sódio', '13,6 mEq pra cada 100ml de líquido'],
            ['Potássio', '2,5 (2 a 3) mEq pra cada 100ml de líquido'],
            ['Glicose', '5 a 10 g pra cada 100ml de líquido']
          ]}
          caption="Tabela 2. Necessidade de sódio, potássio e glicose de acordo com o volume de líquido diário"
        />
        <P>
          É necessário saber que a hidratação venosa tem algumas complicações
          dentre elas, complicações com o acesso venoso e com os distúrbios
          provocados com a infusão de glicose e eletrólitos, podendo provocar
          iatrogenicamente distúrbios leves ou até mesmo graves. Para evitar
          esses distúrbios,padrões de infusão foram estabelecidos na literatura
          geral, fazendo ajustes de acordo com as perdas e exigências de cada
          criança, de acordo com suas comorbidades. O objetivo é infundir
          líquido de osmolaridade semelhante ao plasma, ou seja com concentração
          de sódio e glicose mais ajustadas. Assim como as comorbidades exigem
          terapias específicas, a idade também é um fator que deve ser analisado
          no momento da prescrição de fluidos intravenosos. Logo,{' '}
          <Bold>
            a prescrição de hidratação de manutenção com soro isotônico está
            contraindicada nas seguintes situações:
          </Bold>
        </P>
        <List>
          <LItem>Natremia maior que 150mEq/L;</LItem>
          <LItem>Pacientes no período neonatal;</LItem>
          <LItem>
            Doenças com perda de água livre (como diabetes insipidus);
          </LItem>
          <LItem>Hipertensão arterial sistêmica;</LItem>
          <LItem>
            Doenças renais pré-existentes que necessitem restrição de sódio.
          </LItem>
        </List>
        <P>
          Os lactentes que irão ficar em restrição de dieta deverão receber
          maior infusão de glicose que crianças maiores. Deve-se tomar cuidado
          também com a velocidade de infusão da hidratação, para evitar
          distúrbios iatrogênicos, e quanto menor a criança, maior deverá ser
          esse cuidado.
        </P>
        <P>
          De acordo com todo o exposto acima, pode-se elaborar uma hidratação
          venosa de manutenção para crianças sem comorbidades, e que ficarão sem
          dieta adequada por poucos dias, com os seguintes parâmetros:
        </P>
        <P>
          Necessidade hídrica de acordo com a tabela 1, sódio, potássio e
          glicose de acordo com a tabela 2, aumentando a infusão de glicose para
          os lactentes menores de 6 meses que não receberão nenhuma dieta a uma
          velocidade de infusão (VIG) de 3 a 5 mg/kg/min.
        </P>
      </Section>
      <Section title="Exemplos">
        <Subsection title="Exemplo 1">
          <P>
            Criança de 3 anos de idade, Peso: 14Kg, sem comorbidades com
            necessidade de hidratação venosa de manutenção em 24 horas:
          </P>
          <P>Volume: 1000ml + 50ml/kg {'>'} 10Kg</P>
          <P>Sódio: 13,6mEq%</P>
          <P>Potássio: 2,5mEq%</P>
          <P>Glicose: 5g%</P>
          <P>Prescrição: 3 etapas</P>
          <P>SG 5%: 400ml (total:1200ml)</P>
          <P>NaCl 20%: 16ml (total: 48ml)</P>
          <P>KCl 10%: 7,5ml (total: 22,5ml)</P>
        </Subsection>
        <Subsection title="Exemplo 2">
          <P>
            Lactente de 2 meses de vida, Peso: 4500g, sem comorbidades com
            necessidade de hidratação venosa de manutenção em 24 horas:
          </P>
          <P>Volume: 100ml</P>
          <P>Sódio: 13,6mEq%</P>
          <P>Potássio: 2,5mEq%</P>
          <P>Glicose: VIG 4,0 mg/kg/min</P>
          <P>
            Obs.: para o cálculo da glicose: 4(VIG)x4,5(Peso)x1440(tempo)/1000 =
            25,9g glicose
          </P>
          <P>Prescrição: IV a 19,8ml/h em Bomba de Infusão contínua</P>
          <P>SG 5%: 390ml</P>
          <P>SG 10%: 60ml</P>
          <P>NaCl 20%: 18ml</P>
          <P>KCl 10%: 8,4ml</P>
        </Subsection>
        <P></P>
        <List>
          <LItem>NaCl 20% - 3,4 mEq de sódio/ml</LItem>
          <LItem>KCl 10% - 1,34 mEq de potássio/ml</LItem>
          <LItem>KCl 15% - 2,0 mEq de potássio/ml</LItem>
          <LItem>KCl 19,1% - 2,5 mEq de potássio/ml</LItem>
          <LItem>SG 5% - 5g de glicose/100ml</LItem>
          <LItem>SG 10% - 10g glicose/100ml</LItem>
          <LItem>SG 50% - 50g glicose/100ml</LItem>
        </List>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Ferreira LGB. Terapia de Hidratação Venosa. Brazilian Journal of Health and Biomedical Sciences 2011;10(2):73-84."
        />
        <Reference
          idx={2}
          body="Naspitz L, Souza RL, Hirschheimer MR. Recomendações para uso de fluidoterapia isotônica. Atualização de Condutas em Pediatria Departamentos Científicos SPSP 2016;78."
        />
        <Reference
          idx={3}
          body="Piva JP, Garcia PCR. Medicina Intensiva em Pediatria. 2a Edição. São Paulo: Editora Revinter; 2014."
        />
        <Reference
          idx={4}
          body="Delgado AF, Kimura HM, Troster EJ. Pediatria – Instituto da Criança Hospital das Clínicas - Terapia Intensiva. 1a Edição. São Paulo: Editora Manole; 2010. p.185-192."
        />
      </Section>
    </Routine>
  )
}
