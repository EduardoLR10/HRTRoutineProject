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

export default function FormulasLacteas(): JSX.Element {
  return (
    <Routine
      id="formulas-lacteas"
      name="Fórmulas Lácteas"
      categories={['lactentes']}
      authors={['francisco']}
      tags={[
        'leite',
        'artificial',
        'mamadeira',
        'soja',
        'hidrolisado',
        'aminoácido'
      ]}
    >
      <Section title="Aspectos Gerais">
        <P>
          Essa rotina aborda fórmulas lácteas na impossibilidade do aleitamento
          materno.
        </P>
        <P>
          O leite materno é o melhor alimento para o RN e lactentes até 6 meses,
          sendo muito importante o esforço para conseguir uma amamentação
          exclusiva durante esse período. Após os 6 meses de vida, deve ser
          introduzida a dieta complementar e o ideal é que se mantenha o leite
          materno até dois de idade anos ou mais.
        </P>
        <P>
          Há inúmeros benefícios quando se consegue o aleitamento materno,
          dentre eles: a melhora da imunidade do lactente, diminuição dos riscos
          de alergia, economia financeira, microbiologicamente seguro, promove o
          crescimento da mandíbula e fortalece a musculatura da face, promove
          melhor crescimento da arcada dentária e ainda assegura benefícios
          maternos, como diminuição da obesidade, diminuição do câncer de mama,
          anticoncepção, menor sangramento materno.
        </P>
        <P>
          Por razões diversas, o aleitamento materno não é possível e nesses
          momentos, é necessário o uso de fórmulas infantis. O aleitamento
          materno pode estar contra indicado de forma temporária ou de forma
          absoluta.
        </P>
        <P>
          Contra indicações ou dificuldades para o aleitamento materno de forma
          absoluta estão: galactosemia no RN, mãe HIV ou HTLV positiva, uso de
          quimioterápicos e/ou radioterápicos maternos, mastectomia.
        </P>
        <P>
          Contra indicações temporárias ou parciais estão: fenilcetonúria,
          varicela materna, uso de alguns medicamentos pela mãe e radioisótopos.
        </P>
        <P>
          As fórmulas infantis têm evoluído bastante na sua composição, visando
          manter a qualidade nutricional, com fórmulas variadas para etapas
          diferentes do crescimento e situações especiais da vida da criança. A
          escolha da fórmula deve ser a mais apropriada para cada situação e o
          pediatra é o profissional mais adequado a prescrevê-la.
        </P>
        <P>
          O volume da dieta e número de vezes a ser prescrito irá depender se a
          fórmula será usada em forma de <Bold>complemento</Bold> ao leite
          materno ou se será utilizada de forma <Bold>exclusiva</Bold>.
        </P>
        <P>
          Quando for prescrita como complemento ao leite materno, a quantidade
          será empírica e acertada a cada consulta, de acordo com a necessidade
          e o ganho de peso do bebê, e nesses casos, a melhor maneira de
          prescrever seria por translactação (na mama) ou no copo, para que não
          atrapalhe ainda mais a amamentação no seio materno.
        </P>
        <P>
          Nos casos em que o aleitamento materno for totalmente impossibilitado,
          a prescrição da fórmula poderá ser feita na mamadeira ou no copo, e
          então seguiremos um volume de acordo com idade e peso do bebê (20 a
          30ml/kg por dieta, de 6 a 8 vezes ao dia) para que tenhamos uma taxa
          calórica entre 110 e 140 cal/kg/dia.
        </P>
        <P>
          De acordo com a OMS e também as sociedades de nutrologia e pediatria
          (ESPGHAN, AAP, SBP), a <Bold>alimentação complementar</Bold> nunca
          deve ser introduzida antes dos 4 meses, e necessita de desenvolvimento
          neurológico suficiente para a deglutição dos alimentos, sendo possível
          iniciá-la entre 4 e 6 meses de vida.
        </P>
        <Table
          colWidths={[100, 100, 100]}
          header={['Idade', 'Volume por Refeição', 'Número de refeições/dia']}
          data={[
            ['Nascimento a 30 dias', '60 a 120 ml', '6 a 8 vezes'],
            ['30 a 60 dias', '120 a 150 ml', '6 a 8 vezes'],
            ['2 a 3 meses', '150 a 180 ml', '5 a 6 vezes'],
            ['3 a 4 ou 6 meses', '180 a 210 ml', '4 a 5 vezes'],
            ['> 4 ou > 6 meses', '180 a 210 ml', '2 a 3 vezes']
          ]}
          title="Sugestão de Volume de Refeições Láctas por Faixa Etária"
        />
        <P>
          As fórmulas seguem padrões na sua composição de proteínas, gorduras,
          carboidratos, micronutrientes e vitaminas para atender as várias
          faixas etárias e diferentes situações.
        </P>
        <P>
          Para crianças saudáveis sem nenhuma restrição alimentar, indica-se as
          fórmulas a base do leite de vaca - as fórmulas infantis:
        </P>
        <List>
          <LItem>
            Fórmula Infantil de Partida ou fórmula 1: de 0 a 6 meses;
          </LItem>
          <LItem>
            Fórmula Infantil de Seguimento ou fórmula 2: de 6 a 12 meses;
          </LItem>
          <LItem>
            Fórmula Infantil de Transição ou fórmula 3: de 12 a 24 meses.
          </LItem>
        </List>
        <P>
          Entre as várias fórmulas de várias marcas, deve-se optar por aquelas
          que contenham na sua formulação, os nutrientes mais adequados e mais
          parecidos aos do leite materno, em quantidade de proteínas, gorduras,
          carboidratos, DHA (ácido docosahexaenóico), ARA (ácido graxo de cadeia
          longa - ácido araquidônico), relação proteínas do soro/caseína
          (70/30), osmolaridade, micronutrientes, vitaminas e que estejam de
          acordo com CODEX Alimentarius (órgão que regulamenta a composição das
          fórmulas). Importante lembrar que o ARA e DHA são os principais ácidos
          graxos de cadeia longa ômega-6 e ômega-3 encontrados no leite materno.
        </P>
        <P>
          A diluição recomendada é de 1 medida (4,3g) do pó para cada 30ml de
          água filtrada, ressaltando-se que nessa diluição, a fórmula oferecerá
          0,67 Kcal/ml. A precrição deverá ser sempre em múltiplos de 30ml,
          facilitando a preparação pela família.
        </P>
        <P>
          Após os 2 anos de idade, indica-se a fórmula de transição ou os
          compostos lácteos, pois possuem quantidades de nutrientes mais
          apropriados que o leite integral na sua formulação.
        </P>
        <P>
          Salienta-se que a fórmula infantil de transição pode ser usada até os
          3 anos de idade, assim como o leite integral também pode ser
          introduzido na alimentação da criança nessa faixa etária.
        </P>
        <Table
          colWidths={[100, 100, 125]}
          header={['Nutriente', 'Fórmula de Partida', 'Fórmula de Seguimento']}
          data={[
            ['Proteínas', '1,4 a 1,7 g/100ml', '2,2 a 2,5 g/100ml'],
            ['Carboidratos', '7,5 g/100ml', '8 g/100ml'],
            ['Lipídios', '3,5 g/100ml', '3 g/100ml'],
            ['Calorias', '67 Kcal/100ml', '67 Kcal/100ml']
          ]}
          title="Composição dos Principais Nutrientes das Fórmulas no Primeiro Ano de Vida"
        />
      </Section>
      <Section title="Fórmulas Infantis para Situações Especiais">
        <Subsection title="Fórmula com Proteína Isolada de Soja">
          <P>
            Indicada para bebês maiores de 6 meses de vida com diagnóstico de
            alergia à proteína do leite de vaca (APLV) (IgE mediada) ou com
            intolerância à lactose. Contém os nutrientes adequados e fornece as
            mesmas calorias que as fórmulas infantis de seguimento. No Distrito
            Federal, é fornecido pela SES (Secretaria de Estado de Saúde) após
            avaliação do pediatra e do nutricionista, credenciados na rede
            pública.
          </P>
        </Subsection>
        <Subsection title="Fórmula com Proteína Parcialmente Hidrolisada">
          <P>
            A fórmula com proteína parcialmente hidrolisada é uma fórmula
            composta a partir do leite de vaca, com proteínas do soro
            parcialmente hidrolisadas e tem menor teor de lactose. Tem como
            benefício a melhor digestibilidade e esvaziamento gástrico, quando
            comparada às outras fórmulas de partida. Possui as mesmas
            características quanto à presençca e concentração de DHA e ARA,
            lipídeos, micronutrientes e vitaminas e possui a mesma taxa calórica
            por 100 ml de fórmula. Está contra-indicada para crianças com
            diagnóstico de APLV. Alguns estudos defendem a possibilidade de
            usá-la como tentativa de prevenir a alergia ao leite em crianças de
            baixo a médio risco, mas ainda há muitas controvérsias sobre o tema.
          </P>
        </Subsection>
        <Subsection title="Fórmula com Proteína Extensamente Hidrolisada">
          <P>
            A fórmula com proteína extensamente hidrolisada consiste em uma
            dieta semi-elementar e está indicada para crianças diagnosticadas
            com alergia a proteína do leite de vaca (APLV) e alergia à soja.
            Também é formulada a partir do leite de vaca, porém com as proteínas
            do soro hidrolisadas a pequenos peptídeos. Tem a mesma densidade
            calórica que as fórmulas de partida e de seguimento.
          </P>
          <P>
            No mercado, há disponibilidade de marcas contendo a molécula de
            lactose adicionada ou não. Nas fórmulas que contêm a lactose, esta é
            purificada, e não prejudica o tratamento da APLV. As fórmulas que
            contêm lactose têm melhor palatabilidade e menor preço.
          </P>
          <P>
            Em situações de APLV com diarreia ou sangramento intestinal, deve
            ser prescrito primeiro a fórmula extensamente hidrolisada isenta de
            lactose para, posteriormente, oferecer a fórmula com lactose. Essas
            fórmulas são de custo elevado e quando necessário, após avaliação do
            pediatra e nutricionista credenciados da rede pública, são
            fornecidas pela SES/DF até os 2 anos de idade.
          </P>
        </Subsection>
        <Subsection title="Fórmula à Base de Aminoácidos Livres">
          <P>
            Dieta elementar, esta fórmula também é feita a partir do leite de
            vaca, mas nesse caso, a proteína é reduzida a aminoácidos livres, e,
            em sua forma comum, tem a mesma densidade calórica. Existem
            formulações de alguns fabricantes que são mais calóricas e com
            teores diferentes de proteínas e gorduras, mas todas são apropriadas
            a indicadas para quadros de alergias graves que não responderam ao
            tratamento com fórmula de proteína extensamente hidrolisada. Na
            maioria das fórmulas, 50% dos lipídeos são TCM (triglicerídeos de
            cadeia média) e todas isentas de lactose.
          </P>
          <P>
            Essas fórmulas também são de alto custo e são fornecidas pela SES/DF
            quando necessário, após avaliação do pediatra e nutricionista
            credenciados da rede pública.
          </P>
        </Subsection>
        <Subsection title="Fórmula sem Lactose">
          <P>
            Indicada para intolerância à lactose, mas sem alergia à proteína do
            leite de vaca. Não possui a distinção para lactentes menores e
            maiores de 6 meses, e sua composição é semelhante à fórmula de
            partida, com a mesma concentração calórica.
          </P>
        </Subsection>
        <Subsection title="Fórmula para Prematuros">
          <P>
            Indicada para RNs prematuros e/ou baixo peso ao nascer até 3 meses
            de idade corrigida.
          </P>
          <P>
            No mercado, há fórmulas diferenciadas, algumas em que a proteína não
            passa por nenhum processo de quebra, ficando intacta, e outras em
            que as proteínas são parcialmente hidrolisadas. Todas possuem
            lactose na sua composição, sendo contraindicada nos casos de APLV e
            na intolerância à lactose. Possuem maior teor proteico e maior
            densidade calórica quando comparadas às fórmulas de partida, têm TCM
            como parte dos lipídeos, DHA e ARA. Essas fórmulas também são de
            preço mais elevado e não são fornecidas pela SES/DF.
          </P>
        </Subsection>
        <Subsection title="Fórmula Anti Regurgitação (AR)">
          <P>
            Esta fórmula infantil possuem espessante na sua composição e é
            indicada com o objetivo de diminuir as regurgitações exageradas dos
            lactentes. Não devem ser usadas quando houver suspeita de alergia
            alimentar. Possui características semelhantes às das fórmulas de
            partida.
          </P>
        </Subsection>
        <Subsection title="Fórmulas Hipercalóricas">
          <P>
            Existem fórmulas onde a densidade calórica é aumentada, algumas com
            proteínas extensamente hidrolisadas, outras com proteína intacta e
            também a base de aminoácidos livres, cada uma com algumas
            particularidades, mas no geral, com composição nutricional adequada
            para a idade.
          </P>
          <P>
            Algumas fórmulas são para lactentes abaixo de 1 ano e outras para
            bebês maiores de 1 ano.
          </P>
          <P>
            Segue abaixo um quadro com exemplos de algumas marcas
            comercializadas.
          </P>
        </Subsection>
        <Table
          colWidths={[125, 135, 110]}
          header={[
            'Característica da Fórmula',
            'Marcas\nComercializadas',
            'Fornecida pela SES/DF'
          ]}
          data={[
            ['Fórmula de Partida', 'NAN 1\nAptamil 1\nEnfamil 1', 'Não'],
            ['Fórmula de Seguimento', 'NAN 2\nAptamil 2\nEnfamil 2', 'Não'],
            ['Fórmula de Transição', 'NAN 3\nAptamil 3\nEnfagrow', 'Não'],
            [
              'Proteína Isolada de Soja',
              'NAN Soy\nAptamil soja 1 e 2\nEnfamil soja',
              'Sim'
            ],
            [
              'Proteína Parcialmente Hidrolisada',
              'NAN supreme 1 e 2\nAptamil HA\nEnfamil Gentlease',
              'Não'
            ],
            [
              'Proteína Extensamente Hidrolisada com Lactose',
              'Althera\nAptamil Pepti',
              'Sim'
            ],
            [
              'Proteína Extensamente Hidrolisada sem Lactose',
              'Alfaré\nPregomim Pepti\nNutramigen\nPregestimil',
              'Sim'
            ],
            ['Aminoácidos Livres', 'Alfamino\nNeocate\nPuramino', 'Sim'],
            [
              'Fórmula sem Lactose',
              'NAN sem Lactose\nAptamil SL\nEnfamil sem Lactose',
              'Não'
            ],
            [
              'Fórmula para Prematuros',
              'Pre NAN\nAptamil Pre PDF\nEnfamil Pre ou Enfacare',
              'Não'
            ],
            [
              'Fórmula Anti Regurgitação',
              'NANA AR\nAptamil AR\nEnfamil AR',
              'Não'
            ],
            [
              'Fórmula Hipercalórica com Proteína Intacta',
              'Infatrini (< 1 ano)\nFortini (> 1 ano)',
              'Sim'
            ],
            [
              'Fórmula Hipercalórica com Proteína Extensamente Hidrolisada',
              'Peptamen junior',
              'Sim'
            ],
            [
              'Fórmula Hipercalórica com Aminoácidos Livres',
              'NeoForte\nNeospoon (pó para mingau)',
              'Não'
            ]
          ]}
          title="Exemplos de Marcas Comercializadas de acordo com a característica das Fórmulas"
        />
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Ferreira CT, Seidman E. Alergia Alimentar: atualização prática do ponto de vista gastroenterológico. Jornal de Pediatria (Rio J) 2007;83(1):7-20."
        />
        <Reference
          idx={2}
          body="Chung CS, Yamini S, Trumbo PR. FDA’s health claim review: whey-protein partially hydrolyzed infant formula and atopic dermatitis. Pediatrics 2012;130:e408-14."
        />
        <Reference
          idx={3}
          body="ASBAI & SBAN. Guia prático da APLV mediada pela IgE. Rev bras alerg imunopatol. 2012; 35(6):p203-233."
        />
        <Reference
          idx={4}
          body="Danonebabyprofissionais [homepage na internet]. Fórmula infantis [acesso em 23/02/2019]. Disponível em www.danonebabyprofissionais.com.br"
        />
      </Section>
    </Routine>
  )
}
