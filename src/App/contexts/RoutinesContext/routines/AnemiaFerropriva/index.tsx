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

export default function AnemiaFerropriva(): JSX.Element {
  return (
    <Routine
      id="anemia-ferropriva"
      name="Anemia Ferropriva"
      categories={['gastroenterologia', 'hematologia-reumatologia-nefrologia']}
      authors={['ana-luiza']}
      tags={['doença', 'deficiência', 'palidez']}
    >
      <Section title="Definição">
        <P>
          Anemia é, segundo a Organização Mundial da Saúde (OMS), a condição na
          qual a concentração sanguínea de hemoglobina se encontra abaixo dos
          valores esperados (inferior a -2DP), tornando-se insuficiente para
          atender as necessidades fisiológicas exigidas de acordo com idade,
          sexo, gestação e altitude. De origem multifatorial, pode ser
          ocasionada pela deficiência de ferro e/ ou diversos outros
          micronutrientes, por perdas sanguíneas, por processos infecciosos e
          patológicos concomitantes e por uso de medicações específicas que
          impeçam ou prejudiquem a absorção do ferro. A principal causa de
          anemia é a deficiência de ferro, estando associada a mais de 60% dos
          casos em todo o mundo.
        </P>
      </Section>
      <Section title="Diagnóstico Clínico e Laboratorial">
        <P>
          As manifestações clínicas da deficiência de ferro são determinadas
          pelos estágios de depleção, deficiência de ferro e anemia propriamente
          dita, quando as repercussões clínicas e fisiológicas são aparentes,
          como apatia, cansaço, irritabilidade, taquicardia e outros.
        </P>
      </Section>
      <Section title="Estágios da Anemia Ferropriva">
        <Subsection title="1º estágio (depleção de ferro)">
          <P>
            Diminuição dos depósitos de ferro no fígado, baço e medula óssea e
            pode ser diagnosticada a partir da ferritina sérica, principal
            parâmetro utilizado para avaliar as reservas de ferro, por
            apresentar forte correlação com o ferro armazenado nos tecidos.
          </P>
          <List>
            <LItem>
              Crianças {'<'} 5 anos: Ferritina {'<'} 12 μg/L.
            </LItem>
            <LItem>Crianças entre 5 e 12 anos: Ferritina {'<'} 15 μg/L.</LItem>
          </List>
          <P>
            OBS: Lembrar que a concentração de ferritina é influenciada pela
            presença de doenças hepáticas e processos infecciosos e
            inflamatórios, devendo ser interpretada com cautela.
          </P>
        </Subsection>
        <Subsection title="2º estágio (deficiência de ferro)">
          <List>
            <LItem>Ferro sérico {'<'} 30 mg/dl.</LItem>
            <LItem>
              Aumento da capacidade total de ligação da transferrina ({'>'} 250
              - 390 μg/dl).
            </LItem>
            <LItem>Diminuição da saturação da transferrina ({'<'} 16%).</LItem>
          </List>
        </Subsection>
        <Subsection title="3º estágio (anemia ferropriva)">
          <P>
            Diminuição sanguínea da hemoglobina e hematócrito e alterações
            hematimétricas
          </P>
          <P>Para hemoglobina:</P>
          <List>
            <LItem>Crianças de 6 a 60 meses: Hb {'<'} 11 g/L.</LItem>
            <LItem>Crianças de 5 a 11 anos: Hb {'<'} 11.5 g/L.</LItem>
          </List>
          <P>Para o hematócrito:</P>
          <List>
            <LItem>Crianças de 6 a 60 meses: Ht {'<'} 33%.</LItem>
            <LItem>Crianças de 5 a 11 anos: Ht {'<'} 34%.</LItem>
          </List>
          <P>
            OBS: Outros sinais indicativos de anemia ferropriva: Leucopenia e
            plaquetose; Contagem dos reticulócitos (indicador precoce) 🡪
            referência do valor relativo é de 0,5% a 2%, e do valor absoluto de
            25000-85000/mm.
          </P>
        </Subsection>
      </Section>
      <Section title="Sinais e Sintomas Frequentes">
        <P>
          Para o diagnóstico da anemia ferropriva também é necessário considerar
          os sinais clínicos da deficiência de ferro, que podem ser utilizados
          em conjunto com parâmetros bioquímicos e laboratoriais, tais como:
        </P>
        <P>
          Redução da acidez gástrica, gastrite atrófica, sangramento da mucosa
          intestinal, irritabilidade, distúrbios de conduta e percepção,
          distúrbio psicomotor, inibição da capacidade bactericida dos
          neutrófilos, diminuição de linfócitos T, diminuição da capacidade de
          trabalho e da tolerância a exercícios, palidez da face, das palmas das
          mãos e das mucosas conjuntival e oral, respiração ofegante, astenia e
          algia em membros inferiores, unhas quebradiças e rugosas e estomatite
          angular.
        </P>
      </Section>
      <Section title="Repercussões da Anemia">
        <P>
          Efeito no crescimento e desenvolvimento - pode comprometer o
          desenvolvimento cerebral (o possível impacto negativo permanece mesmo
          após o tratamento precoce por décadas, especialmente em crianças pouco
          estimuladas ou de baixo nível social e econômico).
        </P>
        <P>Predisposição a cáries dentárias.</P>
        <P>Menor discriminação e identificação de odores.</P>
        <P>
          Alterações na imunidade não específica, paladar e apetite (com
          associação a quadros de pica - alterações do sabor e apetite).
        </P>
        <P>
          Resposta alterada ao estresse metabólico e desenvolvimento
          audiovisual.
        </P>
        <P>
          Durante a gestação a anemia (especialmente no primeiro e segundo
          trimestres) associa-se a desfechos obstétricos desfavoráveis, como
          prematuridade, baixo peso ao nascer e aumento da mortalidade perinatal
          e neonatal.
        </P>
        <P>
          No período pós-parto se associa à redução da qualidade de vida e
          aumento nos níveis de depressão, o que pode implicar diretamente no
          cuidado com o recém-nascido e seu desenvolvimento, desfavorecendo o
          aleitamento materno.
        </P>
      </Section>
      <Section title="Tratamento">
        <P>Orientação nutricional para o consumo de alimentos fonte.</P>
        <P>
          Reposição de ferro - por via oral - com dose terapêutica de{' '}
          <Bold>
            3 a 5 mg/kg/dia de ferro elementar (fracionado ou em dose única)
          </Bold>
          <Text> para crianças </Text>
          <Bold>
            por mínimo de oito semanas.A suplementação deve ser continuada
            visando a reposição dos estoques de ferro,
          </Bold>
          <Text> o que</Text>
          <Bold>
            varia entre 2 a 6 meses ou até obtenção de ferritina sérica {'>'}{' '}
            15μg/dL
          </Bold>
          <Text>
            {' '}
            (ressalvando a importância de que o valor alcance os valores
            esperados entre 30 e 300μg/dL).
          </Text>
        </P>
        <P>
          Dentre os diversos tipos de sais de ferro disponíveis para a
          suplementação destacam-se o sulfato ferroso, o fumarato ferroso e o
          gluconato ferroso. Por sofrer influência dos componentes dietéticos, a
          suplementação com sais de ferro deve ser realizada{' '}
          <Bold>
            longe das refeições, recomendando-se a tomada em jejum, 1h antes das
            refeições ou antes de dormir.
          </Bold>
        </P>
      </Section>
      <Section title="Seguimento Clínico">
        <P>
          A monitorização do quadro deve ser realizada pelos parâmetros
          laboratoriais de reticulócitos, hemograma completo a cada 30 a 60
          dias, e dosagem de marcadores do estoque de ferro e ferritina, com 30
          e 90 dias. O tratamento deve durar até a reposição dos estoques de
          ferro, quase sempre por volta dos 6 meses de tratamento.
        </P>
      </Section>
      <Section title="Indicação de Reposição Parental de Ferro">
        <P>
          Além da suplementação de ferro via oral, a reposição parenteral de
          ferro é recomendada em casos excepcionais como os de hospitalização
          por anemia grave após falha terapêutica do tratamento oral,
          necessidade de reposição de ferro por perdas sanguíneas, doenças
          inflamatórias intestinais, quimioterapia ou diálise ou após cirurgias
          gástricas com acometimento do intestino delgado.
        </P>
      </Section>
      <Section title="Prevenção">
        <P>
          Estímulo ao acesso universal à alimentação adequada, ao aleitamento
          materno exclusivo e prolongado, de forma a aumentar o consumo de
          alimentos fontes de ferro, bem como de alimentos que aumentam a
          biodisponibilidade e a absorção do ferro na introdução de alimentos
          complementares.
        </P>
        <P>
          Incentivar a contraindicação de uso de leite de vaca in natura, não
          processado, em pó ou fluido antes dos 12 meses (limitação de consumo
          de 500ml/dia após os 12 meses)
        </P>
        <P>
          Acompanhamento nutricional adequado, com apoio de nutricionistas
          especialistas em caso de estilos de vida optantes por regimes de
          alimentação restritos para o uso de carnes e alimentos fontes de ferro
          hemínico, para garantir o consumo adequado de ferro e ou suplementação
          profilática sempre que necessário.
        </P>
        <P>
          Política nacional de fortificação de alimentos, prevendo atualmente a
          fortificação das farinhas de trigo e milho com fumarato ferroso e
          sulfato ferroso (de boa disponibilidade) em 4 a 9 mg para cada 100g de
          farinha.
        </P>
        <P>
          Suplementação profilática com sulfato ferroso via oral, conforme
          tabela abaixo:
        </P>
        <Table
          colWidths={[250, 250]}
          header={['Situação', 'Recomendação']}
          data={[
            [
              'Recém-nascidos a termo, de peso adequado para a idade gestacional em aleitamento materno.',
              <Text key={1}>
                <Bold>1 mg de Fe elementar/kg peso/dia</Bold> a partir do 3°
                mês, até o 24° mês de vida.
              </Text>
            ],
            [
              'Recém-nascidos a termo ou pré-termo de peso adequado para a idade gestacional ou com peso acima de 2500g.',
              <Text key={2}>
                <Bold>1 mg de Fe elementar/kg peso/dia</Bold> a partir do 3°
                mês, até o 24° mês de vida.
              </Text>
            ],
            [
              'Recém-nascidos pré-termo e a termo, entre 1500-2500g, a partir do 30° dia de vida.',
              <Text key={3}>
                <Bold>2 mg de Fe elementar/kg peso/dia</Bold>, durante um ano.
                Após este prazo, 1 mg/kg/dia mais um ano.
              </Text>
            ],
            [
              'Recém-nascidos pré-termo com peso entre 1500 e 1000g.',
              <Text key={4}>
                <Bold>3 mg de Fe elementar/kg peso/dia</Bold>, durante um ano.
                Após este prazo, 1 mg/kg/dia mais um ano.
              </Text>
            ],
            [
              'Recém-nascidos pré-termo com peso menor que 1000g.',
              <Text key={5}>
                <Bold>4 mg de Fe elementar/kg peso/dia</Bold>, durante um ano.
                Após este prazo, 1 mg/kg/dia mais um ano.
              </Text>
            ]
          ]}
        />
        <P>
          Ações em atenção básica à saúde, como o controle de doenças
          infecciosas e parasitárias, ampliação da rede de saneamento básico e
          higiene pessoal, bem como acesso a água tratada.
        </P>
        <P>
          Ações voltadas para a saúde reprodutiva da mulher, como a prevenção da
          gravidez na adolescência, planejamento familiar, estímulo ao
          acompanhamento nutricional no pré-natal precoce, acesso a cuidados
          perinatais e pós-natal (clampeamento adequado do cordão umbilical,
          prevenção de hemorragia pós-parto e intervalo intergestacional {'>'}18
          meses).
        </P>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Consenso Sobre Anemia Ferropriva: mais que uma doença, uma urgência médica! Sociedade Brasileira de Pediatria. Departamentos de Nutrologia e Hematologia-Hemoterapia.  (2): 1-12. Rio de Janeiro, RJ: SBP. Junho, 2018. "
        />
        <Reference
          idx={2}
          body="Manual de orientação para a alimentação do lactente, do pré-escolar, do escolar, do adolescente e na escola/Sociedade Brasileira de Pediatria. Departamento de Nutrologia, 3ª. ed. Rio de Janeiro, RJ: SBP, 2012.  "
        />
      </Section>
    </Routine>
  )
}
