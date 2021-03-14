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

export default function Insulinoterapia(): JSX.Element {
  return (
    <Routine
      id="insulinoterapia"
      name="Insulinoterapia"
      categories={['endocrinologia']}
      authors={['roberta']}
      tags={[]}
    >
      <Section title="Aspectos Gerais">
        <P>
          A internação no caso de crianças com diagnóstico recente, facilita o
          treinamento intensivo do paciente e de seus familiares e promove um
          bom controle posterior da doença.
        </P>
        <P>
          Regimes intensivos por múltiplas doses de insulina (MDI) ou terapia de
          bomba de insulina são o padrão-ouro, INCLUSIVE na pediatria. A atenção
          à dinâmica familiar também é essencial no desenvolvimento e na
          implementação de um esquema de tratamento para a doença.
        </P>
        <P>
          Em todas as faixas etárias, o mais próximo possível da reposição
          fisiológica de insulina e controle glicêmico deve ser o objetivo
          usando as insulinas basais (NPH ou Glargina ou Detemir ou Degludeca) e
          prandiais (Glulisina ou Aspart ou Lispro ou Fiasp®), disponíveis
          localmente na Secretaria de Estadual de Saúde do Distrito Federal
          (SES/DF). No entanto, embora nenhum regime de injeção de insulina
          imite satisfatoriamente a fisiologia normal.
        </P>
        <P>
          Em 2017 através da Portaria no 11, de 13 de março de 2017 da
          Secretaria de Ciência, Tecnologia e Insumos Estratégicos do Ministério
          da Saúde (SCTIE/MS), torna pública a decisão de incorporar a caneta
          descartável para injeção de insulina humana NPH e insulina humana
          regular, no SUS. Nessa mesma Portaria, há informação também sobre a
          distribuição e critérios para dispensação das canetas de insulina NPH
          e regular e agulhas para canetas de insulina. São contemplados
          pacientes com DM1 na faixa etária menor ou igual a 15 anos. Em 2019,
          através da Portaria no 19, de 27 de março de 2019, da Secretaria de
          Ciência, Tecnologia e Insumos Estratégicos do Ministério da Saúde
          (SCTIE/MS), torna pública a incorporação da insulina análoga
          prolongada para o tratamento de DM1 no SUS.
        </P>
        <P>
          Seja qual for o regime de insulina escolhido, deve ser apoiado por uma
          educação abrangente apropriado para a idade e necessidades individuais
          da criança e da família. A dosagem diária de insulina varia muito
          entre indivíduos e mudanças ao longo do tempo.
        </P>
        <P>
          Crianças e adolescentes devem ser encorajados a aplicar as injeções de
          insulina (abdômen, coxa, nádegas, braço), evitando aplicar
          repetidamente no mesmo local para prevenir a lipodistrofia.
        </P>
        <P>
          As insulinas precisam ser administradas por seringas de insulina (ou
          outros dispositivos de injeção como canetas ou Sistema de Infusão
          Contínua de Insulina-SICI) calibrado para a concentração de insulina
          em uso. A verificação regular dos locais de injeção, técnica de
          injeção e habilidades permanecem uma responsabilidade dos pais,
          prestadores de cuidados e profissionais de saúde.
        </P>
        <P>
          Os profissionais de saúde têm a responsabilidade de aconselhar os
          pais, outros prestadores de cuidados e os jovens a ajustar a terapia
          com insulina de forma segura e eficaz. Este treinamento requer
          revisão, reavaliação e reforço regulares nas consultas, sendo a
          educação em Diabetes um dos pilares mais importantes para a adesão ao
          tratamento.
        </P>
      </Section>
      <Section title="Orientação Alimentar / Atividade Física">
        <P>
          O plano alimentar implica evitar açúcares refinados, de absorção
          rápida, e instituir uma alimentação equilibrada do ponto de vista de
          conteúdo de carboidratos (50 a 60%), proteínas (15%) e gorduras (30%),
          o que propicia uma alimentação de alta qualidade e que deveria ser
          consumida por todos, com diabetes ou não, visto que é muito mais
          saudável do que a maioria dos esquemas alimentares consumidos por
          crianças que não tem diabetes. A ingestão calórica segue a regra de
          Holiday:
        </P>
        <List>
          <LItem>100 kcal/kg até 10 kg de peso corpóreo;</LItem>
          <LItem>
            1.000 + (kg − 10) x 50 em crianças com peso entre 10 e 20 kg;
          </LItem>
          <LItem>1.500 + (kg − 20) x 20 em crianças com mais de 20 kg.</LItem>
        </List>
        <P>
          A associação de um plano alimentar à contagem de carboidratos permite
          que a quantidade de insulina prescrita seja titulada com maior
          precisão, já que leva em conta o valor da glicemia e a quantidade e
          qualidade do alimento ingerido pelo paciente, sendo necessário que os
          cuidadores e pacientes façam um treinamento para adquirir as
          habilidades. Os pacientes sem condições de aprender a contagem de
          carboidrato, devem realizar aplicação de insulina com doses fixas para
          cada refeição, necessitando de prescrição de plano alimentar menos
          flexível.
        </P>
        <P>
          Todas as crianças devem ser encorajadas a realizar pelo menos 60
          minutos de atividade física todos os dias, de intensidade vigorosa e
          de fortalecimento osteomuscular. Nesses casos, devido a relativa
          imprevisibilidade da prática de exercícios físicos, o paciente deve
          ser orientado a reduzir sua dose de insulina de ação rápida (em média
          30 a 50%) antecedendo um programa de atividade física, assim como a
          ingesta de carboidrato periodicamente durante as atividades de longa
          duração. A monitorização da glicemia capilar deve ser feita durante o
          exercício e horas após a atividade, pois o risco de hipoglicemia não
          está limitado somente ao momento da atividade, mas até 12h depois
          dela.
        </P>
        <P>
          No caso de pacientes muito jovens, como pré-escolares, a atividade
          física não programada, como brincadeiras.
        </P>
        <Table
          colWidths={[150, 100, 100, 100]}
          header={[
            'Tipo de Insulina',
            'Início da Ação',
            'Pico da Ação',
            'Duração da Ação'
          ]}
          data={[
            [
              <Text key={1}>
                <Bold>Análoga de ação rápida</Bold>
                {'\n'}Aspart - (Novorapid){'\n'}Glulisina - (Apidra){'\n'}Lispro
                - (Humalog)
              </Text>,
              '15 minutos',
              '1 - 3 h',
              '3 - 5 h'
            ],
            [
              <Text key={2}>
                <Bold>Análoga de ação ultra-rápida</Bold>
                {'\n'}Fiasp (Aspart modificada)
              </Text>,
              '2 - 5 minutos',
              '1 - 2 h',
              '2,5 - 5 h'
            ],
            ['Regular SC (Humilin R)', '0,5 - 1 h', '2 - 4 h', '5 - 8 h'],
            [
              <Text key={3}>
                Regular <Bold>EV</Bold> (Humilin R)
              </Text>,
              'Imediato',
              '-',
              '4 a 5 minutos'
            ],
            ['NPH (Humilin R)', '2 - 4 h', '4 - 12 h', '12 - 24 h'],
            [
              'Glargina (Lantus ou Basaglar)',
              '2 - 4 h',
              '8 - 12 h (não pronunciada)',
              '22 - 24 h'
            ],
            [
              'Detemir (Levemir)',
              '1 - 2 h',
              '4 - 7 h (não pronunciada)',
              '20 - 24 h'
            ],
            ['Degludeca (Tresiba)', '0,5 - 1,5 h', 'Quase sem pico', '> 42 h']
          ]}
          title="Tabela 1. Tipos de preparações de insulina e perfis de ação sugeridos para administração"
        />
      </Section>
      <Section title="Concentração de Insulina">
        <P>
          A concentração mais amplamente disponível é de 100 UI / ml (U 100).
          Portanto, em um refil de 3 ml de insulina para uso em caneta, contém
          300 ui de insulina.
        </P>
      </Section>
      <Section title="Armazenamento de Insulina">
        <P>
          A insulina nunca deve ser congelada; nunca permitir luz solar direta
          ou aquecimento. Não utilizar insulina que tenha mudado de aparência
          (aglomeração, precipitação ou descoloração);
        </P>
        <P>
          A insulina não utilizada deve ser conservada no frigorífico (4-8°C),
          armazenada nas prateleiras do meio, nas da parte inferior, ou na
          gaveta de verduras, nunca deixar na porta da geladeira, em sua
          embalagem original e acondicionada em recipiente plástico ou de metal
          com tampa.
        </P>
        <P>
          Após o primeiro uso, um frasco de insulina deve ser descartado após 2
          meses se mantido a 2-8°C ou 4 semanas se mantido à temperatura
          ambiente. A insulina Degludeca tem validade de 56 dias após o seu
          primeiro uso à temperatura ambiente.
        </P>
      </Section>
      <Section title="Homogeneização das Suspensões de Insulina">
        <P>
          As suspensões de insulina NPH devem ser homogeneizadas corretamente
          antes do uso, para que os cristais de insulina entrem em suspensão. A
          homogeneização inadequada pode alterar a concentração de insulina,
          levando a respostas clínicas imprevisíveis. Para homogeneizar
          corretamente as suspensões de insulina, recomendam-se 20 movimentos
          (rolamentos entre as palmas das mãos, circulares ou em pêndulo)
          suaves. Se a agitação for vigorosa, aparecerão bolhas de ar no frasco,
          na seringa ou na caneta; caso não sejam removidas, acarretarão erro de
          dose, dificultando o preparo da insulina.
        </P>
      </Section>
      <Section title="Dispositivos para Aplicação de Insulina">
        <P>
          <Bold>Seringas:</Bold> ainda é o dispositivo mais utilizado no Brasil.
          As seringas de insulina possuem escala de graduação em unidades
          adequadas a concentração de insulina 100U disponíveis no Brasil, por
          isso também são identificadas como seringas U100. A seringa com agulha
          fixa é a recomendada para o preparo seguro da insulina por não conter
          espaço residual (espaço morto) que pode conter até 10 unidades de
          insulina, levando ao desperdício do produto e não aplicação da dose
          estipulada. Seringas com agulha fixa tem diferentes apresentações:
          capacidade para 100 unidades, sendo a escala graduada de 2 em 2
          unidades, capacidade para 50 unidades, sendo a escala graduada de 1 em
          1 unidade, e capacidade para 30 unidades, sendo a escala graduada de 1
          em 1 unidade e de 1/2 em 1/2 unidade. Recomenda-se manter o êmbolo
          pressionado e a agulha no tecido subcutâneo por, no mínimo, 5
          segundos.
        </P>
        <P>
          <Bold>Canetas:</Bold> tem se tornado uma opção popular nos últimos
          anos. Existem canetas recarregáveis e descartáveis. A caneta
          recarregável e o refil de insulina devem ser do mesmo fabricante, para
          garantir encaixe perfeito, bem como registro e injeção da dose
          corretos. Entre as vantagens da caneta, em relação a seringa, estão a
          praticidade de manuseio e de transporte e a disponibilidade de agulhas
          mais curtas, com 4, 5 ou 6 mm de comprimento. As agulhas mais curtas,
          com 4, 5 e 6 mm de comprimento, são mais seguras, mais bem toleradas,
          menos dolorosas e indicadas para todas as pessoas. Em crianças com
          idade igual ou menor que 6 anos, devem-se usar agulhas com 4 mm de
          comprimento e prega subcutâneo. Aconselha-se manter o botão injetor
          pressionado e a agulha no tecido subcutâneo por, no mínimo, 10
          segundos.
        </P>
        <P>
          Os fabricantes não recomendam guardar a caneta recarregável em
          geladeira, pois isso poderia causar danos ao mecanismo interno. Quanto
          ao transporte da insulina, é importante seguir as recomendações do
          fabricante, a fim de manter a sua integridade. O transporte doméstico
          pode ser feito em embalagem comum. Se for utilizada embalagem térmica
          ou isopor, devem-se tomar precauções para que a insulina não entre em
          contato direto com gelo ou similar, quando usado, e sempre deve ser
          transportada em bagagem de mão.
        </P>
        <P>
          <Bold>Sistema de Infusão Continua de Insulina (SICI)</Bold>, também
          conhecido como terapia com bomba de insulina, consiste em um
          dispositivo eletrônico que realiza infusão continuada de micro doses
          de análogo de insulina rápida (lispro, asparte ou glulisina), por meio
          de pré-programação individualizada, proporcionando tanto liberação
          contínua de insulina, chamada basal, como liberação de insulina{' '}
          <Italic>bolus</Italic> de uso prandial ou para eventuais correções de
          hiperglicemia. Para o funcionamento do sistema, as bombas possuem
          reservatório de insulina, conjunto de infusão (cateter e cânula) e
          bateria.
        </P>
      </Section>
      <Section title="Locais de Injeção">
        <P>
          A velocidade da absorção das insulinas humanas é diferente: abdômen
          (preferido quando é necessária a absorção mais rápida e pode ser menor
          afetado pela atividade muscular ou exercício); Frente da coxa/lateral
          da coxa (o local preferido para uma absorção mais lenta de uma atuação
          mais longa insulinas); O quadrante superior lateral das nádegas (todo
          o quadrante superior é útil); Aspecto lateral do braço (em crianças
          pequenas com pouca gordura subcutânea, a injeção intramuscular é mais
          provável e pode causar hematomas desagradáveis). Quanto aos análogos
          de insulina humana, a absorção é semelhante em todas as regiões de
          aplicação recomendadas.
        </P>
        <P>
          A rotação dos locais de injeção também é importante dentro da mesma
          área de injeção, recomendando-se manter as aplicações de insulina por
          7 dias na mesma região;
        </P>
        <P>
          A limpeza ou desinfecção da pele não é necessária, a menos que a
          higiene seja um problema real. A infecção nos locais de injeção é
          rara. Não realizar massagem local após a aplicação de insulina.
        </P>
        <P>
          Em agulhas com 4 ou 5 mm de comprimento, recomenda-se ângulo de 90°.
          Em agulhas com 6 ou 8 mm de comprimento, o ângulo recomendado é de
          45°. Agulhas com mais de 8 mm não sendo indicadas para crianças e
          adolescentes.
        </P>
        <P>
          O reuso de seringas e agulhas para canetas e cânulas de SICI não deve
          ser indicado nem estimulado por profissionais de saúde. Pacientes,
          responsáveis e cuidadores devem ser conscientizados dos riscos dessa
          prática.
        </P>
      </Section>
      <Section title="Dose Correta de Insulina">
        <P>
          É aquela que atinge o melhor controle glicêmico atingível para uma
          criança ou adolescente individual sem causar problemas de
          hipoglicemia.
        </P>
        <P>
          Durante a fase de remissão parcial, a dose diária total de insulina é
          frequentemente {'<'} 0,5 UI/kg/dia.
        </P>
        <P>
          Níveis mais elevados de glicose no sangue é observado durante a fase
          lútea do ciclo menstrual mediado pelo nível endógeno de progesterona.
        </P>
      </Section>
      <Section title="Doses de Insulina">
        <P>
          <Bold>
            Dose Total de Insulina (DTI): Insulina Basal + Insulina Bolus:
          </Bold>
        </P>
        <P>
          Diagnóstico novo (primodescompensação): Menores de 6 anos (0,3-0,5
          ui/kg/dia), entre 6-10 anos (0,5-1,0 ui/kg/dia), maiores de 10 anos
          (1,0-1,2 ui/kg/dia). No paciente com diagnóstico prévio os ajustes
          devem ser feitos nos horários de aplicação conforme a necessidade de
          acordo com as glicemias. Os alvos de glicose ao longo do dia devem
          corresponder ao alvo de HbA1c conforme tabela 2.
        </P>
      </Section>
      <Section title="Regimes de Injeção Ajustados à Glicose e à Refeição">
        <P>
          <Bold>Insulina Basal (NPH/Glargina/Determir/Degludeca):</Bold> 30% da
          DTI (crianças {'<'} 6 anos) e 40% da DTI (6-10 anos) e 50% da DTI (
          {'>'} 10 anos). Quando a escolha da insulina basal for a insulina NPH,
          fazer 2/3 da dose calculada pela manhã e 1/3 à noite. Quando a escolha
          for uma das outras insulinas lentas, realizar a dose calculada pela
          manhã.
        </P>
        <P>
          <Bold>Insulina Bolus (Lispro ou Glulisina ou Aspart):</Bold> restante
          das doses ajustadas (bolus refeição + bolus correção).
        </P>
        <P>
          *Bolus de refeição: injeção de insulina prandial <Bold>antes</Bold> de
          cada refeição (café da manhã, almoço e jantar), em casos excepcionais
          (crianças {'<'} 6 anos) pode-se fazer após a refeição. Regular (30
          minutos antes) ou rápida (15-20 minutos antes).
        </P>
        <P>
          *Bolus de correção: injeção de insulina necessária para corrigir
          hiperglicemias pré e/ou pós-prandiais ou no período interalimentar
          conforme o cálculo de FS (Fator de sensibilidade) e Meta de correção
          (valor glicemia ao qual será iniciado a dose de insulina).
        </P>
        <P>
          <Bold>A dosagem depende de muitos fatores, como:</Bold> Idade; Peso;
          Estágio da puberdade; Duração e fase do diabetes; Estado dos locais de
          injeção; Consumo e distribuição nutricional; Padrões de exercício;
          Rotina diária; Resultados da monitorização da glicose no sangue e
          hemoglobina glicada; Doença intercorrente.
        </P>
      </Section>
      <Section title="Etapas do Preparo de dois tipos de Insulina na mesma Seringa">
        <P>
          Serão consideradas, no preparo, as insulinas NPH e regular/análogo de
          insulina rápida (Lispro/Aspart/Glulisina):
        </P>
        <List>
          <LItem>
            1. Proceder a assepsia da borracha do frasco de insulina;
          </LItem>
          <LItem>
            2. Aspirar, na seringa, ar correspondente a dose de insulina NPH;
          </LItem>
          <LItem>
            3. Injetar o ar no frasco de insulina NPH, depois retirar a agulha
            do frasco sem aspirar a insulina NPH;
          </LItem>
          <LItem>
            4. Aspirar, na seringa, ar correspondente a dose de insulina
            Regular;
          </LItem>
          <LItem>
            5. Injetar o ar no frasco de insulina regular, virar o frasco e
            aspirar a dose prescrita de insulina regular;
          </LItem>
          <LItem>
            6. Colocar o frasco de insulina regular na posição inicial e retirar
            a agulha;
          </LItem>
          <LItem>
            7. Posicionar o frasco de insulina NPH de cabeça para baixo,
            introduzir a agulha da seringa que já está com a insulina regular e
            aspirar a dose correspondente a insulina NPH. O total de insulina na
            seringa deve corresponder a soma das doses das duas insulinas. Se a
            dose aspirada na seringa for maior que a soma das doses prescritas,
            o excesso não deve ser devolvido ao frasco. É necessário, então
            descartar a seringa com a insulina e reiniciar o procedimento com
            uma seringa nova.
          </LItem>
        </List>
        <Table
          colWidths={[100, 100, 150]}
          header={[
            'Glicemia',
            'Sem diabetes (mg/dL)',
            'Crianças/adolescentes com DM1#'
          ]}
          data={[
            ['Jejum ou pré-prandial', '65 a 100', '70 a 130'],
            ['Pós-prandial', '80 a 126', '90 a 180'],
            ['Ao deitar', '80 a 100', '120 a 180'],
            ['Na madrugada', '65 a 100', '80 a 140']
          ]}
          caption="O alvo da HbA1c para crianças e adolescentes é 7,5%. DM1: diabetes mellitus tipo 1.  # Segundo a Sociedade Internacional de Diabetes para Pediatria e Adolescência (International Society for Pediatric and Adolescent Diabetes, ISPAD) 2019-2020."
          title="Tabela 2. Objetivos glicêmicos para indivíduos com e sem DM1 nos diferentes momentos do dia"
        />
      </Section>
      <Section title="Monitorização Glicêmica">
        <P>
          A maioria dos glicosímetros utilizados quantifica glicose plasmática,
          e a faixa de medição vai de 10 a 600 mg/dL (dependendo da marca do
          monitor - na Secretaria Estadual de Saúde do DF/SES-DF é dispensado
          fitas reagentes da marca Accu-chek Active). Consideram-se adequados 14
          dias para análise e predição dos próximos 30 dias. Para pacientes em
          tratamento intensivo, com múltiplas injeções de insulina ou sistema de
          infusão contínua, a automonitorização deve ser feita no mínimo quatro
          vezes ao dia, geralmente antes do café, almoço e jantar e após 2h de
          alguma das refeições (pós-prandial) ou ao deitar-se. A medição de sete
          glicemias capilar ao dia (pré e 2h pós-prandial e as 3h da madrugada)
          deve ser feita durante a internação e por 3 dias antes da avaliação do
          perfil glicêmico na consulta médica.
        </P>
        <P>
          Nesse sentido, opções mais modernas de monitorização glicêmica, cada
          vez mais empregadas, são os sistemas monitorização contínua em{' '}
          <Italic>flash</Italic> (FGM, na sigla em inglês) chamado FreeStyle
          Libre (não disponível no serviço público até o momento), que fornecem
          valores de glicose intersticial de forma contínua, permitindo ao
          paciente e ao médico maior visualização das variações glicêmicas. O
          sensor de glicose substitui as glicemias capilares, permitindo ser
          usado por até 14 dias e para a leitura da glicemia, o paciente deve
          “escanear” ou passar o leitor por cima do sensor (que deve ser
          inserido na região posterior do braço). O sistema é resistente à água,
          mede a glicemia intersticial a cada minuto, mas acumula esses números
          a cada 15 minutos. Em caso de hipoglicemia ou glicemia {'>'} 250
          mg/dL, deve-se confirmar com a glicemia capilar.
        </P>
      </Section>
      <Section title="Contagem de Carboidratos">
        <P>
          Ao usar a contagem de carboidratos, elevações persistentes de glicemia
          capilar pós-refeição podem exigir ajuste na relação
          insulina/carboidrato. A “regra dos 500 ou 450 em crianças menores de 6
          anos” é frequentemente usada para obter relação inicial ao iniciar a
          contagem de carboidratos (dividir 500 ou 450 pela dose diária total de
          insulina basal e bolus - para encontrar a quantidade de carboidratos
          em gramas que 1 unidade de insulina irá cobrir). A razão
          insulina/carboidrato (I/CHO) para uma refeição individual, por exemplo
          café da manhã, pode ser calculada dividindo o conteúdo de carboidratos
          em gramas pela dose de insulina em unidades. Este método muitas vezes
          dá os resultados mais precisos para uma refeição individual, e pode
          preferencialmente ser usado no café da manhã, quando geralmente há um
          aumento da resistência à insulina. Se a glicose antes e após a
          refeição diferem mais do que 20-30 mg/dL, o fator de correção pode ser
          usado para calcular quanto mais (ou menos) insulina idealmente foram
          dadas para uma determinada refeição. Alguns pacientes também contam
          com proteína e gordura para calcular as necessidades de insulina
          quando usam bomba de insulina.
        </P>
      </Section>
      <Section title="Fator de Sensibilidade">
        <P>
          É a quantidade que 1 UI de insulina é capaz de reduzir a glicemia em
          mg/dL. Esse número varia entre indivíduos e horários do dia, como nas
          diferentes fases de crescimento. É usado para o cálculo do{' '}
          <Italic>bolus</Italic> de correção, aplicado quando a glicemia
          pré-prandial (refeição) está acima da meta estipulada. De acordo com a
          "regra 1800 ou (2000 para crianças menores de 6 anos)", isto é,
          dividir 1800 ou 2000 por dose diária total de insulina para obter a
          dose (em mg/dL) que 1 unidade de insulina análoga de ação rápida irá
          diminuir a glicose no sangue. Para insulina regular, uma "regra 1500"
          pode ser usado para resultados em mg/dL.
        </P>
        <P>
          Contudo, doses corretivas devem sempre ser ajustadas individualmente
          antes da administração, dependendo de outros fatores que afetam a
          resistência à insulina, como exercício.
        </P>
        <P>
          Aumento do nível da glicemia após o jantar → aumentar a dose de
          insulina análoga de ação rápida ou regular neste período.
        </P>
        <P>
          A hipoglicemia inexplicada requer reavaliação da terapia com insulina.
        </P>
        <P>
          A hiperglicemia inexplicada pode ser causada por um “fenômeno de
          rebote”- hipoglicemia seguida por hiperglicemia que é potencializada
          pela ingestão excessiva de carboidrato para curar a hipoglicemia,
          juntamente com a contra-regulação hormonal.
        </P>
        <P>
          Hiper ou hipoglicemia que ocorre na presença de doença intercorrente
          requer orientação por parte dos profissionais.
        </P>
        <P>
          Ajustes diários de insulina podem ser necessários para variações nas
          rotinas de estilo de vida, especialmente exercício ou mudanças na
          alimentação. Vários níveis de exercício exigem ajuste do controle do
          diabetes.
        </P>
        <P>
          <Bold>Importante:</Bold> utiliza-se apenas um cálculo inicial, que
          pode e deve ser modificado caso ele não se mostre adequado ao
          paciente. Para considerar esse cálculo adequado, a glicemia de 2 horas
          após a refeição não deve diferir por mais do que 20 a 30 mg/dL da
          glicemia pré-prandial (refeição).
        </P>
      </Section>
      <Section title="Orientações para Ajuste de Dose">
        <P>
          Nível da glicemia elevado antes do café da manhã → aumentar a dose de
          insulina de ação rápida prandial do pré-jantar ou a pré-ceia ou
          insulina de ação prolongada. (Os testes de glicemia capilar durante a
          madrugada são necessários para garantir que esta mudança não resulte
          em hipoglicemia noturna).
        </P>
        <P>
          Nível de glicemia aumentado após uma refeição → aumentar a insulina
          análoga de ação rápida no período pré-refeição.
        </P>
        <P>
          Nível de glicemia elevado antes do almoço ou jantar → aumentar a
          insulina basal da manhã ou aumentar a dose de insulina de ação rápida
          no café-da-manhã, se em regime basal-bolus.
        </P>
        <Table
          colWidths={[50, 100, 100]}
          header={['A1C(%)', 'Média da Glicemia mg/mL', '* mmol/L']}
          data={[
            ['5', '97 (76 - 120)', '5.4 (4.2 - 6.7)'],
            ['6', '126 (100 - 152)', '7.0 (5.5 - 8.5)'],
            ['7', '154 (123 - 185)', '8.6 (6.8 - 10.3)'],
            ['8', '183 (147 - 217)', '10.2 (8.1 - 12.1)'],
            ['9', '212 (170 - 249)', '11.8 (9.4 - 13.9)'],
            ['10', '240 (193 - 282)', '13.4 (10.7 - 15.7)'],
            ['11', '269 (217 - 314)', '14.9 (12.0 - 17.5)'],
            ['12', '298 (240 - 347)', '16.5 (13.3 - 19.3)']
          ]}
          caption="Fonte: Diretriz SBD-2019/2020"
          title="Tabela 3. Estimativa de Média de Glicemia (A1C - média das glicemias dos últimos 3 meses)"
        />
      </Section>
      <Section title="Hipoglicemia">
        <P>
          <Bold>Classificação de Hipoglicemia:</Bold>
        </P>
        <List>
          <LItem>
            <Bold>Hipoglicemia nível 1:</Bold> glicemia entre 70 mg/dl e 54
            mg/dl
          </LItem>
          <LItem>
            <Bold>Hipoglicemia nível 2:</Bold> glicemia menor que 54 mg/dl
          </LItem>
          <LItem>
            <Bold>Hipoglicemia nível 3:</Bold> hipoglicemia grave, associada a
            prejuízo cognitivo e/ou físico e necessidade de auxilio de terceiros
          </LItem>
        </List>
        <P>
          Tratamento de hipoglicemia pelo peso: peso x 0,3 g de carboidrato = g
          de glicose de absorção rápida. Para simplificar o tratamento da
          hipoglicemia no ambiente hospitalar, foi criado uma tabela com as
          fontes de carboidratos e sua quantidade. Após o tratamento deve-se
          avaliar a glicemia em 10-15 minutos, se não houver melhora, todo o
          processo deve ser repetido.
        </P>
        <Table
          colWidths={[100, 100, 100, 100]}
          header={['', '', '', '']}
          data={[
            ['Idade do Paciente', '< 5 anos', '5 a 10 anos', '10 anos'],
            ['Quantidade de Carboidrato', '5 g', '10 g', '15 g'],
            [
              'Fonte de Carboidratos\n\nSoro Glicosado (SG50%)\nSuco de Laranja\nSaché de Mel\nAçucar Comum',
              '\n\n1 ampola\n50 ml\n01 unidade\n01 colher de sobremesa',
              '\n\n2 ampolas\n100 ml\n02 unidades\n1/2 colher de sopa',
              '\n\n3 ampolas\n150 ml\n\n03 unidades\n01 colher de sopa'
            ]
          ]}
          title="Tabela 4. Tratamento da Hipoglecima leve conforme idade, adaptado para alimentos brasileiros"
          caption="Adaptado de Canadian Diabetes Association, 2018.149"
        />
      </Section>
      <Section title="Escola, férias, Viagens">
        <P>
          A monitorização da glicose e as aplicações de insulina devem ser
          gerenciadas constantemente, incluindo os períodos vividos na escola.
          Os pais, responsáveis e profissionais de saúde devem trabalhar juntos
          para fornecer aos sistemas escolares e prestadores de cuidados
          infantis informações necessárias para permitir que as crianças e os
          jovens com DM1 participem de forma plena e segura das experiências
          escolares, acampamentos e outras atividades. O profissional de saúde
          deve alertar pais, familiares e cuidadores da importância de manter o
          tratamento em viagens e férias. Ser negligente nesses períodos pode
          atrapalhar o lazer. Nessas ocasiões, sempre se deve levar todo o
          arsenal terapêutico utilizado na monitorização da glicose e no
          tratamento com insulina, sendo necessário calcular quantidades de uso
          de acordo com o tempo em viagem e, preferencialmente, levar o dobro do
          que se usaria em casa no mesmo período, tendo em vista que talvez não
          haja insulina nem dispositivo para a sua aplicação na região. Ainda,
          pode-se quebrar acidentalmente o frasco de insulina, o que exigiria a
          obtenção de receita com exigências locais.
        </P>
      </Section>
      <Section title="Dias de doença no Ambiente Domiciliar">
        <P>
          Nunca parar completamente a insulina. A manutenção da hidratação é
          essencial em todas as crianças com diabetes durante uma doença aguda.
          Fluidos orais com ou sem açúcar devem ser consumidos dependendo do
          nível de glicemia. Considerar a iniciação oportuna de fluidos EV se a
          criança não puder beber. Quando o vômito ocorre em uma
          criança/adolescente, sempre considerar um sinal de deficiência de
          insulina até que se prove o contrário.
        </P>
        <P>
          A dose de insulina geralmente precisa ser aumentada quando há: febre,
          com doença aguda (exceto para doenças gastrointestinais), durante ou
          após procedimentos cirúrgicos, tratamento com corticosteróides,
          qualquer estresse importante. MEDIR GLICEMIA A CADA 2 HORAS.
        </P>
        <Subsection title="EM CASO DE HIPERGLECIMIA SEM SINAIS DE CAD">
          <List>
            <LItem>
              Se Glicemia {'>'} 180-250 mg/dl: fazer o bolus habitual da receita
              médica.
            </LItem>
            <LItem>
              Se glicemia {'>'} 250-400 mg/dl: aumentar 5% na dose total diária
              de insulina ou 0,05ui/kg no bolus.
            </LItem>
            <LItem>
              Se glicemia {'>'} 400 mg/dl: aumentar 10% na dose total diária de
              insulina ou 0,1ui/kg no bolus + fluidos sem açúcar.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="EM CASO DE HIPERGLECIMIA COM SINAIS DE CAD">
          <List>
            <LItem>
              Se Glicemia {'>'} 180-250 mg/dl: aumentar 10% na dose total de
              insulina ou 0,1ui/kg no bolus ou 110% do bolus de correção
              calculado + fluidos sem açúcar.
            </LItem>
            <LItem>
              Se glicemia {'>'} 250-400 mg/dl: aumentar 20% na dose total de
              insulina ou 0,1 a 0,2ui/kg no bolus ou 120% do bolus de correção
              calculado + fluidos sem açúcar.
            </LItem>
            <LItem>
              Se glicemia {'>'} 400 mg/dl: aumentar 20% na dose total de
              insulina ou 0,1ui/kg no bolus + fluidos sem açúcar / em casos de
              vômitos, considerar SG5%/SF0,9% EV – PROCURAR EMERGÊNCIA.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="EM CASO DE HIPOGLICEMIA">
          <List>
            <LItem>Se Glicemia {'<'} 70 mg/dl: correção de hipoglicemia.</LItem>
            <LItem>
              Se glicemia entre 71 a 90 mg/dl: reduzir dose total diária de
              insulina em 20% + líquido açucarado ORAL.
            </LItem>
            <LItem>
              Se glicemia entre 90 a 180: não fazer bolus de insulina.
            </LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Exemplo">
        <P>
          <Bold>
            EXEMPLO DE PRESCRIÇÃO DE PACIENTE COM DM1 de 7 anos e 25 kg – RECÉM
            DIAGNÓSTICO
          </Bold>
        </P>
        <List>
          <LItem>1. Dieta para diabético com 1600 kcal/dia</LItem>
          <LItem>
            2. Insulinas (0,8 ui/kg/dia) - DTI: +- 20 ui/dia – basal (40%): 8 ui
            + bolus (60%): 12ui (fracionada em 50% em doses fixas 15 minutos
            antes do café, almoço, jantar + correção conforme cálculo de FS e
            meta de correção)
          </LItem>
          <List>
            <LItem>Insulina NPH (05 ui as 7h e 03 ui as 22h)</LItem>
            <LItem>
              Insulina Rápida (café, almoço, jantar: 2ui em cada, sempre 15
              minutos antes das refeições)
            </LItem>
            <LItem>
              Insulina Rápida (correção com meta de: 130 e FS: 1800/20=90) – 130
              a 220:1 ui, 221 a 310; 2UI, ≥311: 3UI
            </LItem>
          </List>
          <LItem>
            Em caso de glicemia ≤ 70 mg/dL: dar 10g de CHO (2 ampolas de SG50%)
            – medir glicemia capilar após 15 minutos, se persistir glicemia ≤ 70
            mg/dL: repetir a ingesta de 10 g de CHO
          </LItem>
          <LItem>Glicemia capilar antes do café, almoço e jantar</LItem>
          <LItem>
            Glicemia capilar 2 horas após café, almoço e jantar e as 3h da
            madrugada
          </LItem>
        </List>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="ISPAD Clinical Practice Consensus Guidelines 2018 / Diretrizes da Sociedade Brasileira de Diabetes 2019-2020"
        />
      </Section>
    </Routine>
  )
}
