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

import img1 from './images/image1.jpg'
import img2 from './images/image2.png'

export default function MausTratos(): JSX.Element {
  return (
    <Routine
      id="maus-tratos"
      name="Maus Tratos na Infância"
      category="emergencia"
      authors={['renato']}
      tags={[
        'abuso',
        'sexo',
        'criança',
        'violência',
        'sexual',
        'lactente',
        'psicológico',
        'física',
        'espancamento',
        'negligência'
      ]}
    >
      <Section title="Introdução">
        <P>
          A violência é considerada um grave problema de saúde pública no
          Brasil; crianças/adolescentes costumam ser alvo de maus-tratos que
          comprometem física e mentalmente a sua saúde.
        </P>
        <P>
          A Organização Mundial de Saúde define maus-tratos como “toda forma de
          maus-tratos físicos e/ou emocionais, abuso sexual, abandono ou trato
          negligente, exploração comercial ou outro tipo, da qual resulte um
          dano real ou potencial para a saúde, sobrevivência, desenvolvimento ou
          dignidade da criança, no contexto de uma relação de responsabilidade,
          confiança ou poder”.
        </P>
        <P>
          O diagnóstico de maus-tratos dificilmente se baseia em uma única lesão
          ou fator; na maioria dos casos, o Pediatra deve estar preparado para
          utilizar dados da história, do exame físico e exames complementares.
        </P>
      </Section>
      <Section title="Mortalidade Infantil">
        <P>
          Os dados do Sistema de Vigilância de Violências e Acidentes mostram
          que a violência se expressa de forma diferente entre os sexos. No
          masculino, as crianças na faixa etária entre 0 e 9 anos são as mais
          acometidas (33,6%), sendo a agressão física a forma mais frequente de
          violência; no sexo feminino, as adolescentes entre 10 e 19 anos são as
          principais vítimas (27,7%), sendo a violência psicológica, física e
          sexual os tipos mais prevalentes.
        </P>
        <P>
          Cerca de 70% dos casos de violência contra criança/adolescente são
          cometidos pelos pais (pai e/ou mãe). Seguidamente, estão aqueles que
          se ocupam ou convivem com a vítima cotidianamente como tios, avós,
          irmãos e outros. Em apenas 3,3% dos casos, o agressor não é conhecido,
          tratando-se, na maioria das ocorrências, de situações de violência
          sexual.
        </P>
      </Section>
      <Section title="Classificação">
        <P>
          Maus-tratos, violência ou abuso infantil é definido como toda ação ou
          omissão por parte do adulto cuidador ou adolescente de mais idade, que
          na qualidade de responsável permanente ou temporário, possa resultar
          em dano de desenvolvimento físico, emocional, intelectual ou social da
          criança/adolescente; assim como, praticada fora de sua moradia, por
          pessoas de detêm a guarda temporária ou por estranhos. Cada um dos
          tipos de violência pode se manifestar de formas diferentes, não
          excludentes entre si.
        </P>
        <Subsection title="Violência Física">
          <P>
            Caracteriza-se pelo uso da força física de forma intencional,
            podendo ferir, provocar danos ou mesmo levar à morte da
            criança/adolescente, deixando ou não marcas evidentes. Trata-se de
            uma forma de violência bastante denunciada e frequente nos laudos
            periciais do Instituto Médico Legal (IML), por ser de mais fácil
            diagnóstico e a que mais mobiliza as pessoas para a denúncia.
            Acomete todas as faixas etárias da criança, porém, predomina nos
            menores de 3 anos de idade.
          </P>
        </Subsection>
        <Subsection title="Diagnóstico">
          <P>
            Ao se avaliar uma criança/adolescente submetida a um trauma, a
            pergunta que se deve fazer sempre é: Trata-se de um trauma acidental
            ou intencional?”.
          </P>
          <P>
            A suspeita de maus-tratos surge, geralmente, no momento em que se
            procede a anamnese, no decorrer do exame físico e mais raramente, de
            exames complementares.
          </P>
          <Subsubsection title="Anamnese">
            <P>
              Comportamento da vítima: muito agressivo ou apático; hiperativo ou
              depressivo; medo dos pais; alega agressão dos pais; relato de
              causas pouco viáveis às lesões; fugas de casa; faltas frequentes à
              escola.
            </P>
            <P>
              Características da família: muitas vezes oculta às lesões,
              justificando-as de forma não convincente ou contraditórias;
              descreve a criança/adolescente como má e desobediente; abuso de
              álcool ou drogas ilícitas; defende uma disciplina severa; tem
              antecedentes de maus-tratos na família; pais separados; mães muito
              jovens.
            </P>
          </Subsubsection>
          <Subsubsection title="Exame Físico">
            <P>
              <Bold>Aspecto geral:</Bold>
            </P>
            <P>
              De maneira geral, deve-se levantar suspeitas de maus-tratos sempre
              que forem encontrados:
            </P>
            <List>
              <LItem>
                Lesões que não são compatíveis com a idade ou com o
                desenvolvimento psicomotor da criança/adolescente;
              </LItem>
              <LItem>
                Lesões que não se justificam pelo acidente relatado;
              </LItem>
              <LItem>
                Lesões em várias partes do corpo ou lesões bilaterais;
              </LItem>
              <LItem>
                Lesões que envolvem partes usualmente cobertas do corpo;
              </LItem>
              <LItem>
                Lesões em estágios diferentes de cicatrização ou cura.
              </LItem>
            </List>
            <P>
              Por ordem de frequência, as lesões por maus-tratos são mais
              comumente identificadas na pele e nas mucosas e, em seguida, no
              esqueleto, no sistema nervoso central (SNC) e nas estruturas
              torácicas e abdominais.
            </P>
            <Subsubsection title="Pele">
              <P>
                As lesões de pele, quando intencionais, apresentam
                características próprias. É importante que a avaliação das
                lesões seja feita com detalhe, considerando tamanho, bordas,
                localização e cor das mesmas.
              </P>
              <P>
                <Bold>Lesões de pele que sugerem lesão intencional:</Bold>
              </P>
              <List>
                <LItem>
                  Hematomas: são os sinais mais frequentemente encontrados. Para
                  datar o hematoma observar a coloração: Cor vermelha ou azul
                  (0-3dias); Cor verde ou amarela (4-7dias); Cor amarela ou
                  marrom (8-26dias).
                </LItem>
                <LItem>
                  Escoriações: podem acompanhar os hematomas. As lesões com
                  lacerações e as perfurocortantes podem requerer profilaxia do
                  tétano;
                </LItem>
                <LItem>
                  Queimaduras: especial atenção quando são de extremidades e
                  simétricas, principalmente, quando predominam em regiões de
                  extensão, sugerindo algum esboço de defesa pelo agredido;
                  atentar para áreas que envolvem áreas de flexão, região
                  genital e de nádegas. O encontro de linha regular até onde a
                  região do corpo foi mergulhada no líquido quente são
                  características de maus-tratos;
                </LItem>
                <LItem>
                  Mordeduras: as marcas costumam ser evidentes. Quando
                  múltiplas, são forte indício de tortura e, se encontradas em
                  região de pescoço, mamas ou próximas à região genital, deve
                  ser pesquisado abuso sexual. Mordeduras requerem o uso de
                  antibioticoprofilaxia, com Amoxicilina com Clavulanato, na
                  dose de 50mg/kg/dia, a cada 12 horas, por 5 dias;
                </LItem>
                <LItem>
                  Lesões circulares em pescoço, punhos ou tornozelos são
                  indícios de tentativa de enforcamento ou de que a
                  criança/adolescente está sendo mantida amarrada.
                </LItem>
              </List>
              <P>
                <Bold>Algumas patologias que simulam lesões de pele:</Bold>
              </P>
              <List>
                <LItem>Manchas mongólicas;</LItem>
                <LItem>Leucemia aguda;</LItem>
                <LItem>
                  Lesões purpúricas associadas a coagulopatias e a distúrbios
                  vasculares agudos (consequências de Púrpura de
                  Henoch-Schönlein);
                </LItem>
                <LItem>Púrpura Trombocitopênica Idiopática;</LItem>
                <LItem>Fitofotodermatose.</LItem>
              </List>
            </Subsubsection>
            <Subsubsection title="Fraturas">
              <P>
                Podem aparecer em até 40% das crianças com abuso físico e suas
                características são fundamentais para o diagnóstico. Os ossos
                longos como fêmur, tíbia, antebraço e úmero requerem uma maior
                força para sofrerem fraturas, o que dificilmente ocorrem em
                quedas de pequena altura. Até os 2 anos de idade, as fraturas
                acidentais são incomuns, principalmente as fraturas dos membros
                superiores em crianças abaixo de 4 meses e de membros inferiores
                em crianças que não andam.
              </P>
              <P>
                <Bold>Evolução de fratura óssea:</Bold>
              </P>
              <List>
                <LItem>
                  Edema e dor: 0-10dias; Formação periosteal: 7-14dias; Calo
                  mole: 14-21dias; Calo duro: 21-42dias.
                </LItem>
              </List>
              <P>
                <Bold>
                  Alguns tipos de fraturas encontradas em lesões intencionais:
                </Bold>
              </P>
              <List>
                <LItem>
                  Fraturas múltiplas, bilaterais ou em diferentes estágios de
                  consolidação;
                </LItem>
                <LItem>
                  Fraturas não-compatíveis com o desenvolvimento motor;
                </LItem>
                <LItem>Fraturas dos arcos costais;</LItem>
                <LItem>
                  Fraturas de crânio: múltiplas, complexas, bilaterais, que
                  cruzam a linha média;
                </LItem>
                <LItem>
                  Fraturas de vértebras sem história de trauma acidental de alta
                  energia (atropelamento, colisões automobilísticas, quedas de
                  grande altura);
                </LItem>
                <LItem>Fraturas de coluna vertebral;</LItem>
                <LItem>
                  Fratura de mandíbula sem outras lesões que a justifiquem.
                </LItem>
              </List>
              <P>
                <Bold>
                  Algumas patologias simulam lesões de fraturas
                  músculo-esqueléticas:
                </Bold>
              </P>
              <List>
                <LItem>
                  Traumas de alta energia (atropelamento, colisões
                  automobilísticas, quedas de grande altura);
                </LItem>
                <LItem>
                  Fraturas unilaterais de crânio em bebês a partir do quinto ou
                  sexto mês que caem da cama ou do trocador;
                </LItem>
                <LItem>
                  Lesões de cabeça e membros em quedas de bicicleta ou outros
                  veículos não-motorizados usados sem proteção;
                </LItem>
                <LItem>
                  Lesões de costelas (resultado de reanimação
                  cardiorrespiratória);
                </LItem>
                <LItem>
                  Algumas doenças mais raras: Osteogênese imperfeita,
                  Raquitismo.
                </LItem>
              </List>
            </Subsubsection>
            <Subsubsection title="Cabeça/Sistema Nervoso Central">
              <P>
                A frequência de lesão acidental na cabeça de crianças, de modo
                superficial, até o segundo ano de vida é relativamente alta;
                entretanto, quedas acidentais da própria altura de crianças com
                menos de 1,20 metros de altura muito raramente causam dano
                neurológico.
              </P>
              <P>
                <Bold>Lesões na cabeça que sugerem trauma intencional:</Bold>
              </P>
              <List>
                <LItem>
                  olhos: com frequência, há o aparecimento de edemas e
                  hematomas; algumas vezes, pode haver comprometimento de
                  cristalino ou mesmo retina, podendo levar à amaurose;
                </LItem>
                <LItem>
                  orelhas: podem aparecer deformidades por traumas repetitivos;
                </LItem>
                <LItem>
                  boca: as lesões na cavidade oral são frequentes; podem
                  aparecer também alterações dos dentes (amolecimento,
                  escurecimento).
                </LItem>
              </List>
              <P>
                Nos casos de Traumatismo Crânio Encefálico (TCE) deve-se
                solicitar Tomografia Computadorizada de crânio.
              </P>
            </Subsubsection>
            <Subsubsection title="Abdome e Tórax">
              <P>
                O mecanismo pode ser agressão direta, geralmente, pelo punho ou
                por brusca desaceleração após a criança/adolescente ser
                empurrado.
              </P>
              <P>
                <Bold>Regiões de lesão que sugerem lesão intencional:</Bold>
              </P>
              <P>
                Abdome: em traumas fechados (socos ou pontapés), podem haver
                perfurações de vísceras ocas ou rupturas de fígado ou baço,
                podendo levar a um quadro característico de abdome agudo;
              </P>
              <P>
                Tórax: pode haver hemotórax ou pneumotórax secundários às
                fraturas de costelas (bastante raras em traumas acidentais).
              </P>
            </Subsubsection>
          </Subsubsection>
          <Subsection title="Exames Complementares">
            <P>
              <Bold>
                Os exames complementares devem ser direcionados pelo quadro
                clínico:
              </Bold>
              .
            </P>
            <Table
              colWidths={[50, 150]}
              header={['', '']}
              data={[
                ['Hematológicos', 'Hemograma, Coagulograma'],
                [
                  'Bioquímicos',
                  'CPK, Amilase, Enzimas hepáticas, Eletrólitos, Intoxicação exógena'
                ],
                ['Urinários', 'Urina tipo I, Intoxicação exógena'],
                [
                  'Imagem',
                  'Radiografia Simples\n+ até 2 anos de idade e em crianças que não se comunicam: fazer corpo inteiro\n+ maiores de 2 anos de idade: com base na anamnese e no exame físico\nUltrassonografia: abdômen e fontanela, quando o quadro clínico sugerir algum agravo*\nTomografia Computadorizada: crânio, tórax e abdômen, quando o quadro clínico sugerir algum agravo*\nFundo de olho: quando sinais de hemorragia intracraniana'
                ]
              ]}
            />
            <P>
              Agravo: exame neurológico alterado, como diminuição do nível de
              consciência, irritabilidade, diminuição da aceitação alimentar,
              vômitos, convulsões, alteração da respiração, coma ou postura em
              opistótono.
            </P>
          </Subsection>
          <Subsection title="Observação: Síndrome de Bebê Sacudido (SBS)">
            <P>
              A aplicação de sacudidas violentas na criança com até 2 anos de
              vida é uma das formas mais graves de agressão à criança pequena,
              pois pode levar à lesão cerebral, podendo deixar sequelas, na
              dependência da força e intensidade aplicadas.
            </P>
            <P>
              As forças de aceleração e desaceleração, aliadas às de rotação,
              fazem com que a massa encefálica do bebê se movimente bruscamente,
              com velocidades diferentes a depender de sua estrutura, volume,
              peso e fixação e se choca com a calota craniana, provocando vários
              tipos de lesões vasculares e teciduais por contusão, rompimento ou
              cisalhamento.
            </P>
            <P>
              O tamanho da cabeça relativamente grande em relação ao corpo, a
              anatomia da coluna cervical e do forame magno, a fraqueza da
              musculatura cervical e o menor grau de mielinização fazem com que
              possa haver lesão de massa encefálica após o mecanismo descrito,
              sem que se evidenciem sinais externos evidentes de trauma. A SBS
              pode desencadear desde microemorragias do SNC até hemorragias
              maciças e morte, sem que haja fratura de calota craniana.
            </P>
            <Figure source={img1} size={[636, 550]} />
            <Figure source={img2} size={[411, 609]} />
            <P>
              A sintomatologia nem sempre é evidente, mas deve-se pensar nela
              sempre que uma criança com menos de 2 anos de idade apresentar
              sinais de comprometimento de SNC, sem existir sinais infecciosos
              ou histórico de convulsões graves. Os sintomas vão desde
              alterações do nível de consciência, irritabilidade ou sonolência,
              convulsões, déficits motores, problemas respiratórios, coma e,
              alguns casos, morte.
            </P>
            <P>
              A tríade clássica é composta de Encefalopatia aguda, Hematoma
              subdural (consequente à ruptura das veias pontes no espaço
              subdural) e Hemorragia Retiniana (crianças com TCE leve ou
              moderado, como os consequentes à queda do berço, ou até mesmo em
              traumas acidentais graves, como acidentes automobilísticos,
              dificilmente apresentam hemorragia retiniana).
            </P>
            <P>
              <Bold>
                Algumas características são mais presentes na SBS, entretanto
                não são patognomônicas:
              </Bold>
            </P>
            <List>
              <LItem>
                Lesões esqueléticas: aparecem em até 50% dos casos (fratura em
                arco posterior da costela reforça o diagnóstico da síndrome);
              </LItem>
              <LItem>
                Lesões oculares: lesão em ambos os olhos, sem que haja
                comprometimento do nariz. Presença de estrabismo que aparece de
                forma aguda, sem histórico anterior de desvio ou déficits de
                visão importante ou sem lesão.
              </LItem>
            </List>
            <P>
              Estima-se que menos de 20% dos pacientes com SBS têm evolução
              favorável; cerca de 30% morre rapidamente. Muitos sobreviventes
              apresentam sequelas neurológicas (lesões encefálicas, convulsões e
              lesões da coluna vertebral e medula espinal) ou oculares
              (hemorragias oculares, cegueira) importantes.
            </P>
          </Subsection>
        </Subsection>
      </Section>
      <Section title="Violência Psicológica">
        <P>
          Caracteriza-se pela submissão da criança/adolescente a ações verbais
          ou atitudes que visem à humilhação, à indiferença, à rejeição, à
          ameaça e à responsabilização excessiva que possam levar danos a seu
          desenvolvimento, tanto na área psíquica como na afetiva, moral e
          social. É uma forma de violência difícil de ser conceituada e
          diagnosticada, entretanto, costuma estar presente concomitantemente
          aos demais tipos de abuso. É importante o acompanhamento psicológico,
          evitando problemas futuros de adequação social.
        </P>
        <P>
          Comportamento da vítima: comportamentos infantis; enurese noturna;
          comportamentos extremos de timidez ou agressividade; distúrbios do
          sono; isolamento; baixo conceito de si próprio; abatimento profundo;
          autoflagelação; ideia e tentativa de suicídio.
        </P>
        <P>
          Características da família: tem expectativas irreais sobre a
          criança/adolescente; rejeita; aterroriza; ignora; desqualifica; exige
          em demasia; descreve a criança/adolescente como má/diferente das
          demais; filhos não desejados, mães adolescentes sem suporte
          psicossocial ou em situação de isolamento, falta de apoio familiar e
          de recursos; antecedentes de violência familiar e ruptura familiar;
          antecedentes psiquiátricos.
        </P>
        <P>
          <Bold>Formas de maus-tratos psicológicos:</Bold>
        </P>
        <List>
          <LItem>Castigos excessivos, recriminações, ameaças;</LItem>
          <LItem>Rejeição ou desqualificação da criança/adolescente;</LItem>
          <LItem>Responsabilidades excessivas para a idade;</LItem>
          <LItem>
            Isolamento devido a mudanças frequentes ou a proibições de convívio
            social;
          </LItem>
          <LItem>
            Clima de violência entre os pais e uso da criança como objeto de
            descarga emocional;
          </LItem>
        </List>
        <P>
          OBS: BULLYING: O termo <Italic>Bullying</Italic> compreende todas as
          atitudes agressivas, intencionais e repetidas, que ocorrem sem
          motivação evidente, adotadas por um ou mais indivíduos contra
          outro(s), causando dor e angústia. Pode ser em consequência da
          diferença de idade, tamanho, desenvolvimento físico ou emocional,
          dentre outros. Convencionou-se não considerar{' '}
          <Italic>bullying</Italic> os atos isolados, executados eventualmente,
          mas somente quando tais atos se tornam repetitivos, contando a partir
          da terceira vez.
        </P>
        <P>
          OBS: CYBERBULLYING: Violência praticada com o uso da tecnologia da
          informática e internet. Tem o potencial de ser replicado muitas vezes
          em curto período de tempo; é considerado bullying, mesmo quando
          praticado uma única vez.
        </P>
      </Section>
      <Section title="Negligência">
        <P>
          Caracteriza-se por atos ou atitudes de omissão, de forma crônica, com
          prejuízo à higiene, à nutrição, à saúde, à educação, à proteção e/ou
          ao afeto da criança/adolescente, apresentando-se em vários aspectos e
          níveis de gravidade, sendo o abandono o grau máximo. Dois critérios
          são necessários para caracterizar a negligência: a cronicidade e a
          omissão. Pode apresentar-se de forma intencional ou não.
        </P>
        <P>
          Apesar de frequente, a negligência apresenta grande dificuldade para
          ser definida e identificada, pois não há padrão para diferenciar o que
          é inabilidade ou impossibilidade e o que é falta de vontade dos pais
          ou responsáveis para prover às crianças/adolescentes das necessidades
          mínimas aceitáveis.
        </P>
        <P>
          <Bold>Comportamento da vítima:</Bold> comportamentos extremos de hiper
          ou hipoatividade; contínuas faltas ou atrasos à escola/ao médico;
          comportamentos infantis ou depressivos; dificuldade na aprendizagem.
        </P>
        <P>
          <Bold>Características da família:</Bold> é apática e passiva, não se
          importando muito com a situação da criança/adolescente; tem baixo
          autoestima e severo desleixo com higiene; é despreocupada em resolver
          as necessidades de atenção da criança/adolescente.
        </P>
        <P>
          O processo de recuperação terá maior probabilidade de ocorrer com o
          atendimento precoce e adequado, que inclua não só o tratamento dos
          agravos físicos e emocionais, como também a assistência familiar.
        </P>
      </Section>
      <Section title="Violência Sexual">
        <P>
          Caracteriza-se pelo uso da criança/adolescente para gratificação
          sexual e inclui desde carícias, manipulação de genitália, mama ou
          ânus, voyeurismo, pornografia, exibicionismo, exploração sexual, até o
          ato sexual com penetração oral, anal ou vaginal. Engloba ainda a
          situação de exploração sexual visando a lucros como prostituição e
          pornografia.
        </P>
        <P>
          A violência sexual destaca-se entre as diferentes formas de violência
          pelo forte conteúdo moral. O uso da violência física associada à
          violência sexual está presente apenas em uma pequena parte dos casos
          identificados. A maioria das situações de violência sexual é praticada
          por pessoas próximas (o companheiro da mãe aparece como maior
          agressor, seguido em segundo lugar pelo pai, depois o tio, o avô e
          parente próximo), que contam com a confiança da criança, e ocorrem de
          maneira gradual e progressiva por longos períodos de tempo. As
          sensações físicas do contato sexual, geralmente, são prazerosas e é
          bastante comum que crianças estimuladas sexualmente por adultos
          busquem a repetição desses estímulos, seja com adultos, seja com
          outras crianças; além de poder haver uma interpretação positiva da
          criança como uma forma de atenção ou de “dedicação” que talvez, até
          então, não conhecia.
        </P>
        <P>
          O Código Penal Brasileiro, no seu Artigo 224, determina que a
          violência sexual é sempre presumida em menores de 14 anos, deficientes
          mentais ou quando a vítima não puder, por qualquer outra causa,
          oferecer resistência.
        </P>
        <P>
          <Bold>
            Comportamento da vítima: comportamento sexual inadequado para a
            idade;
          </Bold>{' '}
          não confia em adultos; fugas de casa; regressão a estado de
          desenvolvimento anterior; brincadeiras sexuais agressivas;
          comportamento promíscuo; vergonha excessiva e alegações de abusos;
          ideias e tentativa de suicídio; autoflagelação.
        </P>
        <P>
          <Bold>
            Características da família: oculta frequentemente o abuso;
          </Bold>{' '}
          é muito possessiva, negando à criança/adolescente contatos sociais
          normais; acusa a criança/adolescente de promiscuidade, sedução sexual
          e de ter atividade sexual fora de casa; crê que o contato sexual é
          forma de amor familiar; alega outro agressor para proteger membro da
          família.
        </P>
        <P>
          De maneira esquemática, podem-se dividir as situações de violência
          sexual em agudas e crônicas.
        </P>
        <Subsection title="Violência Aguda">
          <P>
            Corresponde, em sua grande maioria, aos “assaltos sexuais” com
            ocorrência, principalmente, no espaço público. São mais frequentes
            no percurso de trânsito entre casa-escola/trabalho/lazer. As ameaças
            à vida ou à integridade física são bastante explícitas e estão
            associadas à violência física e acometem, principalmente,
            adolescentes adultas. O agressor, geralmente, é desconhecido, sem
            vinculação com a vítima. O atendimento a esse tipo de situação deve
            ser realizado o mais rápido possível em serviço de urgência, pela
            necessidade de avaliação imediata e tratamento de eventuais lesões
            físicas, e pelos prazos definidos para o início das profilaxias
            contra Infecção Sexualmente Transmissível (IST) e gestação
            indesejada.
          </P>
        </Subsection>
        <Subsection title="Violência Crônica">
          <P>
            Ocorre por períodos de tempo mais extensos, de maneira progressiva,
            cometidas contra ambos os sexos, principalmente por pessoas
            próximas, que contam com a confiança das crianças e das famílias. As
            ameaças são, geralmente, mais veladas, e o uso de violência física
            nem sempre está presente. Existe a possibilidade de contaminação por
            IST ou gestação, mas lacerações e lesões físicas graves são pouco
            frequentes.
          </P>
        </Subsection>
        <Subsection title="Atendimento">
          <P>
            A notificação criminal (boletim de ocorrência - BO) de crimes
            sexuais é um direito exclusivo da vítima ou de seu responsável
            legal, exceto quando o agressor possui o poder familiar sobre a
            vítima ou nenhum outro familiar quiser fazer a denúncia, caso em que
            o BO pode ser feito pela equipe de saúde, de acordo com o Artigo 245
            do Estatuto da Criança e do Adolescente. No seguimento de casos de
            violência sexual, o Conselho Tutelar (CT) deve ser acionado
            imediatamente; este encaminhará a vítima ao Departamento de Polícia
            (DP) para fazer um BO e posteriormente, é realizado o laudo pericial
            pelo IML. Deve-se atentar com falsas denúncias de abuso sexual,
            principalmente entre casais em situação de litígio.
          </P>
        </Subsection>
        <Subsection title="Diagnóstico">
          <Subsubsection title="Anamnese">
            <P>
              Ao atender uma situação em que haja suspeita de violência sexual,
              o profissional deve evitar fazer pré-julgamentos ou emitir
              diagnósticos precipitados. O profissional deve portar-se de modo
              atencioso e acolhedor. O registro deve ser o mais próximo possível
              da história relatada, evitando-se traduzir para termos técnicos.
              Importante a identificação dos diferentes relatores, a fim de
              permitir a análise posterior de possíveis contradições e omissões.
              Deve-se anotar as observações sobre o comportamento dos envolvidos
              antes, durante e depois da anamnese. Quando houver o relato
              espontâneo da criança, seu depoimento deve merecer toda a
              credibilidade, pois dificilmente ela seria capaz de elaborar uma
              falsa história de abuso sexual.
            </P>
          </Subsubsection>
          <Subsubsection title="Exame Físico">
            <P>
              O exame físico deve ser sempre realizado na presença de um dos
              responsáveis e esclarecido previamente à criança/adolescente sobre
              os procedimentos. Observar, de maneira cuidadosa e abrangente, a
              presença de lesões indicativas de violência física. Na grande
              maioria dos casos não se constatam lesões físicas evidentes e a
              gravidade das lesões internas nem sempre está correlacionada às
              lesões visíveis externamente. Os sinais de irritação peritoneal
              podem ser difíceis de ser avaliados em crianças muito pequenas,
              sendo necessária a complementação diagnóstica com métodos de
              imagem.
            </P>
            <P>
              As áreas usualmente envolvidas em atividades sexuais são boca,
              mamas, genitais, região perineal, nádegas e ânus.
            </P>
            <P>Sinais de alerta para abuso sexual:</P>
            <List>
              <LItem>Lesões em região genital;</LItem>
              <LItem>
                Hematomas ou lacerações em região próxima ou em área genital;
              </LItem>
              <LItem>Dilatação anal ou uretral, ou rompimento de hímen;</LItem>
              <LItem>
                Lesões como equimoses, hematomas, mordidas ou lacerações em
                mamas, pescoço, parte interna e/ou superior de coxas, baixo
                abdômen e/ou região do períneo;
              </LItem>
              <LItem>
                Sangramento vaginal em crianças pré-púberes, ou anal,
                acompanhados de dor;
              </LItem>
              <LItem>Lesões por IST.</LItem>
            </List>
          </Subsubsection>
          <Subsection title="Exames Complementares">
            <P>
              Devem ser colhidas, na urgência, secreções vaginais e anais e
              sorologias para as principais IST. Sempre que possível, coletar
              material que ajude a comprovar o abuso: pesquisa de sêmen, sangue
              e células epiteliais pode ser feita quando o abuso ocorreu há
              menos de 72 horas.
            </P>
            <P>
              <Bold>
                Solicitar exames no primeiro dia da consulta e programar os seus
                controles:
              </Bold>
            </P>
            <List>
              <LItem>Sorologias: VDRL, controle com 45 a 90 dias;</LItem>
              <LItem>Hepatite B e C, controle com 180 dias;</LItem>
              <LItem>Anti-HIV, controle com 90 e 180 dias;</LItem>
              <LItem>Cultura de secreção vaginal e endocervical;</LItem>
              <LItem>
                Hemograma completo e transaminases após os 28 dias de uso dos
                antirretrovirais.
              </LItem>
            </List>
            <P>
              Nos casos em que medicamentos antirretrovirais forem indicados, é
              necessário o monitoramento da função renal e hepática.
            </P>
          </Subsection>
          <Subsection title="Profilaxia">
            <P>
              Sempre que possível, solicitar avaliação conjunta do profissional
              ginecologista. Quando da alta hospitalar, a criança/adolescente
              deverá ser encaminhada para o Centro de Saúde de referência de
              IST/AIDS mais próximo, a fim de adquirir o restante das medicações
              antirretrovirais e fazer o acompanhamento
            </P>
            <P>
              <Bold>Profilaxia de emergência da gestação:</Bold>
            </P>
            <P>
              A profilaxia de emergência da gestação é realizada em pacientes
              que já menstruam e indicada nas primeiras 72 horas após o coito
              suspeito. A dosagem recomendada é de 2 comprimidos de
              levonorgestrel 0,75mg, via oral, em uma única tomada.
            </P>
            <Table
              colWidths={[50, 150, 200]}
              header={['', '', '']}
              data={[
                [
                  'Sífilis',
                  'Penicilina Benzatina\nEritromicina',
                  '50.000U/Kg, IM, dose única (dose máxima = 2.400.00U)\n50mg/Kg/dia (dose máxima = 2g/dia), VO, 6/6horas, por 15 dias'
                ],
                [
                  'Cancro Mole',
                  'Azitromicina',
                  '30mg/Kg, VO, dose única (dose máxima 1.500mg)'
                ],
                ['Gonorreia', 'Ceftriaxona', '250mg, IM, dose única'],
                [
                  'Tricomoníase',
                  'Metronidazol',
                  '15mg/Kg/dia (dose máxima = 750mg/dia), VO, 8/8horas, por 7 dias'
                ]
              ]}
              title="Profilaxia das IST não virais"
            />
            <P>
              <Bold>Profilaxia à Hepatite B:</Bold>
            </P>
            <P>
              Pacientes que não foram vacinadas contra Hepatite B ou com
              situação vacinal desconhecida, devem receber imunoglobulina
              específica, além da complementação do esquema vacinal. A dose
              recomendada da imunoglobulina anti-hepatite B é de 0,06mL/kg, IM,
              em dose única.
            </P>
            <P>
              <Bold>Quimioprofilaxia antirretroviral:</Bold>
            </P>
            <P>
              As medicações antirretrovirais devem ser utilizadas
              criteriosamente, pois devem ser tomadas por um período
              relativamente longo (28 dias) e não são isentas de efeitos
              colaterais.
            </P>
            <P>
              <Bold>
                Os critérios para a administração de antirretrovirais incluem:
              </Bold>
            </P>
            <List>
              <LItem>
                A forma de exposição: somente em casos com penetração anal ou
                vaginal;
              </LItem>
              <LItem>
                O intervalo entre a exposição e o início da tomada da medicação
                deve ser inferior a 72 horas;
              </LItem>
              <LItem>
                O status sorológico do agressor: sabidamente doente ou quando
                desconhecido.
              </LItem>
            </List>
            <P>
              O esquema recomendado para as crianças inclui dois Inibidores
              Nucleosídeos da Transcriptases Reversas e um Inibidor da
              Protease/r, sendo composto por Zidovudina (AZT) + Lamivudina (3TC)
              + Lopinavir-R (LPV/R).
            </P>
            <P>
              <Bold>
                As doses recomendadas para crianças/adolescentes com peso
                inferior ou igual a 45kg são:
              </Bold>
            </P>
            <Table
              colWidths={[50, 100, 100]}
              header={['Medicação', 'Apresentação', 'Posologia']}
              data={[
                ['AZT', '300mg/150mg', '1 comprimido a cada 12 horas'],
                [
                  '3TC',
                  'Solução oral 10 mg/ml',
                  '4mg/kg/dose a cada 12 horas (dose máxima: 150mg de 12/12horas)'
                ],
                [
                  'LPV/R',
                  'Solução oral 80mg\nSolução oral 20 mg/ml\nComprimidos 200mg',
                  '< 2anos: 300mg/m2 de 12/12horas\n> 2anos: 230mg/m² de 12/ 12horas (dose máxima 200mg de 12/12horas\nAdolescentes: 400mg 12/12horas'
                ]
              ]}
              caption="Superfície Corpórea (m²): (4 x Peso (kg) +7) / (Peso (kg) + 90)"
            />
          </Subsection>
        </Subsection>
      </Section>
      <Section title="Diagnóstico Diferencial">
        <List>
          <LItem>Distúrbios hormonais;</LItem>
          <LItem>Puberdade precoce;</LItem>
          <LItem>Fissuras anais por obstipação;</LItem>
          <LItem>Corpo estranho;</LItem>
          <LItem>Vulvovaginites inespecíficas.</LItem>
        </List>
      </Section>
      <Section title="Formas Peculiares de Violência">
        <Subsection title="Síndrome de Munchausen por Procuração/por Transferência (Smt)">
          <P>
            Caracteriza-se pela situação na qual o paciente é trazido para
            cuidados médicos, mas os sinais/sintomas que apresentam são
            inventados, simulados ou provocados por seus responsáveis; podem
            também ocorrer acréscimos de sintomas ou o aumento da frequência de
            um evento que ocorre espontaneamente. Essa prática impõe sofrimentos
            físicos ao paciente, como a exigência de exames complementares
            desnecessários, o uso de medicamentos ou ingestão forçada de
            substâncias, além de poder provocar danos psicológicos pelas
            múltiplas consultas e internações sem motivo.
          </P>
          <P>
            Os “agressores”, normalmente a mãe (85 a 95% dos casos), não são
            agressivos nem negligentes, ao contrário das outras formas de
            violência.
          </P>
          <P>
            É importante não confundir SMT com situações que podemos chamar de
            “por conveniência”, nas quais a doença é inventada ou simulada de
            modo fraudulento para obter vantagens, como afastamento do trabalho,
            recebimento do valor de um seguro.
          </P>
          <P>
            Há dificuldade na avaliação de incidência, devido dificuldade do
            diagnóstico. Sabe-se que ambos os sexos sofrem esse tipo de agressão
            na mesma proporção e a maior prevalência dá-se antes dos 5 anos de
            idade.
          </P>
          <P>
            As queixas referentes ao SNC são as mais comuns e representam 45% do
            total e incluem convulsões, apneia e depressão. As queixas
            gastrintestinais também são habituais e observadas em
            aproximadamente 10% dos casos. Os vômitos podem ser induzidos
            mecanicamente ou com o auxílio de fármacos. Algumas vezes, os
            vômitos podem ter aspecto fecalóide, simulado com a adição de fezes
            ao vômito. As diarreias podem ser causadas pela administração de
            laxativos. As erupções cutâneas, observadas em 10% dos casos, podem
            ser induzidas pela aplicação de substâncias cáusticas e tinturas na
            pele ou por atrito e escoriações. As queixas de febre são referidas
            em 10% das ocorrências. A elevação da temperatura pode ser por
            aquecimento do termômetro, aquecimento da própria criança ou por
            injeção de substâncias pirógenas. Os sangramentos são também queixas
            comuns (hematúria é a mais frequente). Podem ser simulados com
            sangue de outra pessoa ou com substâncias coloridas que aparentam
            ser sangue e/ou serem induzidos por administração de medicamentos
            anticoagulantes.
          </P>
          <P>
            A partir do aumento de idade, há uma tendência de que a criança
            passe a participar da fraude, associando-se ao responsável como
            cúmplice e, a partir da adolescência, pode tornar portadora da
            “Síndrome de Munchausen <Italic>by self</Italic>”, em que os
            sintomas passam a ser inventados, simulados ou produzidos por ela
            mesma.
          </P>
          <P>
            O tempo para a realização do diagnóstico varia de 3 a 6 meses e na
            maioria das vezes (75%-95%), os sinais e sintomas podem persistir
            com a criança internada, já que o responsável permanece ao lado
            dela.
          </P>
        </Subsection>
        <Subsection title="Siauações de alerta para diagnóstico de SMP">
          <List>
            <LItem>Doença prolongada inexplicável;</LItem>
            <LItem>
              Quadros repetidos, cíclicos ou contínuos, difíceis de
              caracterizar, com história, evolução, resultados de exames e
              respostas terapêuticas incomuns;
            </LItem>
            <LItem>
              Sintomas que parecem impróprios e incongruentes, que só ocorrem na
              presença da mãe e que predominam à noite, quando a supervisão por
              outras pessoas é menor;
            </LItem>
            <LItem>
              O resultado do tratamento é referido como ineficaz ou não é
              tolerado ou deixa de funcionar após algum tempo;
            </LItem>
            <LItem>A doença piora quando se cogita a alta hospitalar;</LItem>
            <LItem>
              Inconsistência do tipo “sangra, mas não causa anemia”, ou febre
              sem aumento concomitante da frequência cardíaca e respiratória;
            </LItem>
            <LItem>
              Sinais e sintomas desaparecem ou melhoram quando o agressor se
              afasta da criança.
            </LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Autoagressão">
        <P>
          Caracteriza-se pela violência do indivíduo contra ele próprio,
          representa uma ameaça grave à vida, sendo necessário o reconhecimento
          precoce dos sinais e condutas de risco, comuns em
          crianças/adolescentes portadores de distúrbios de comportamento e
          doenças psiquiátricas, mas que nem sempre apresentam manifestações
          evidentes. Pode ser considerada uma sequela das vítimas de
          maus-tratos, que usam as lesões como forma de chamar atenção para si
          ou para demonstrar o descaso com sua existência. Em
          criança/adolescente, a autoagressão mostra-se por meio de atividades
          de risco, procura direta de formas de lesar a si mesmo (
          <Italic>cutting</Italic>) e suicídio (grau máximo de autoagressão). Na
          maioria dos casos que chegam a óbito, pode-se encontrar, no histórico,
          atitudes de comportamento de risco e, geralmente, relato de uma ou
          mais tentativas anteriores de suicídio.
        </P>
      </Section>
      <Section title="Roteiro de Atendimento">
        <P>
          Os maus-tratos, o abuso ou qualquer tipo de violência doméstica devem
          ser reconhecidos como enfermidades, pois são assim identificados no
          Código Internacional de Doenças, e corresponde a categoria T74.0 –
          Síndrome de maus-tratos.
        </P>
        <P>
          Quando há um caso suspeito/confirmado de violência é importante dar
          atendimento humanizado à vítima/família, em ambiente adequado. Se
          possível, a criança/adolescente deve ser ouvida sozinha, com respeito
          e privacidade, utilizando as mesmas palavras que a vítima e não
          fazendo promessas que não se possa cumprir, nem prometer guardar
          segredo antes de saber o que será revelado.
        </P>
        <P>
          Ressalta-se que a criança/adolescente tem direito a sigilo e à
          confidencialidade das informações. No entanto, isso deve ser rompido
          nas situações previstas por lei, como nos casos de violência ou de
          risco à vida, sendo, portanto, necessária a notificação ao CT.
        </P>
        <P>
          Se o agressor é alguém da família, não é conveniente informá-lo
          imediatamente. Nesse caso, deve-se entrar em contato, de modo
          estratégico, com membros não agressores, de preferência com indicação
          da criança. Orientar sobre a importância do tratamento para o
          agressor, se ele for da família.
        </P>
        <P>
          Quando há um caso suspeito/confirmado de violência há necessidade de
          se preencher a Ficha de Notificação (FN) a ser encaminhada também à
          Vigilância Epidemiológica. Também deve-se verificar se há lesões
          graves e/ou risco de vitimização durante anamnese e exame físico. Após
          o atendimento médico, a família/o responsável pela criança/adolescente
          deverá ser orientado a lavrar BO em uma DP (da mulher ou da infância e
          juventude), que deverá encaminhar o paciente para exames e coleta de
          provas forenses pelos peritos do IML. Se possível, a
          criança/adolescente deve ser acompanhado pelo Técnico de Enfermagem ou
          Agente de Serviço Social ou outro profissional disponível.
        </P>
        <P>
          Quando a criança/adolescente em situação de violência apresentar
          lesões leves e não for detectado risco de revitimização com o seu
          retorno para a sua moradia, deve-se notificar o CT da região de
          moradia do paciente. A notificação pode ser mediante relatório
          institucional elaborado por um membro da equipe interprofissional.
          Considera-se como risco de revitimização o fato de o agressor não ser
          controlável ou a família ou cuidadores do paciente não parecerem
          competentes e capazes de proteger a criança/adolescente.
        </P>
        <P>
          Na presença de lesões graves ou quando o retorno da
          criança/adolescente para sua moradia puder resultar em revitimização,
          ela deve ser internada, para que permaneça sob a proteção da
          instituição hospitalar, devendo-se notificar o CT e a Vara da Infância
          e Juventude (VIJ) da região de moradia do paciente. Tal notificação
          precisa ser realizada mediante ofício contendo relatório da equipe
          multiprofissional. A alta hospitalar dependerá de critérios clínicos e
          da decisão judicial. Quando há lesão grave e/ou risco de
          revitimização, caso não haja restauração do vínculo familiar, haverá
          decisão judicial quanto à guarda da criança.
        </P>
        <P>
          Quando o CT recebe a notificação, primeiro apura-se a veracidade da
          situação através de conversas com a família e visita domiciliar;
          realiza um diagnóstico da situação de cada família e posteriormente
          poderá acionar os serviços da comunidade em que aquela família mora
          para ajudar em seus problemas (necessidade de apoio psicológico,
          inserção na escola, vaga em creche e outras demandas). Apenas nos
          casos mais graves ou em que o Conselho esgote as tentativas para a
          mudança daquela situação, o próprio Conselho irá acionar a VIJ ou o
          Ministério Público.
        </P>
        <P>
          Independentemente do tipo de violência e gravidade, após a alta
          hospitalar, a criança/adolescente, assim como suas famílias, deverão
          ser encaminhadas para acompanhamento ambulatorial/psicossocial por
          equipe interprofissional.
        </P>
      </Section>
      <Section title="Observações">
        <Subsection title="Em caso de Violência Física/Sexual">
          <P>
            <Bold>
              Notificação: ao detectar casos de violência, deve-se preencher e
              dar andamento às 4 vias da FN:
            </Bold>
          </P>
          <List>
            <LItem>Anexar 01 via ao prontuário;</LItem>
            <LItem>
              Encaminhar a criança, juntamente com 01 via, ao plantão policial
              do hospital, que as encaminhará à DP mais próxima ou à Delegacia
              Especial de Proteção à Criança e ao Adolescente (DPCA).
            </LItem>
            <LItem>
              Encaminhar 02 vias ao Serviço Social (SS) ou ao Programa de
              Prevenção e Atendimento às Vítimas de Violência (PAV) para sua
              intervenção e posterior encaminhamento das fichas ao CT e Sistema
              de Informação da SES/DF.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Em caso de Negligência/Violência Psicológica">
          <P>
            <Bold>
              Notificação: ao detectar casos de violência, deve-se preencher e
              dar andamento às 4 vias da FN:
            </Bold>
          </P>
          <List>
            <LItem>
              Anexar 01 via ao prontuário; somente em casos graves, encaminhar
              para DP;
            </LItem>
            <LItem>
              Encaminhar 02 vias ao SS ou ao PAV para sua intervenção e
              posterior encaminhamento das fichas ao CT e Sistema de Informação
              da SES/DF.
            </LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Barnnwart TH, Brino RF. Dificuldades enfrentadas para identificar e notificar casos de maus-tratos contra crianças e/ou adolescentes sob a óptica de médicos pediatras. Revista Paulista de Pediatria. São Paulo.2011;29(2)138-45."
        />
        <Reference
          idx={2}
          body="Fernandes CLC, Curra LCD. Violência intrafamiliar e atenção primária à saúde. IN: Sociedade Brasileira de Medicina de Família e Comunidade; Castro Filho ED, Anderson MIP, organizadores. PROMEF Programa de Atualização em Medicina de Família e Comunidade: Ciclo 2. Porto Alegre: Artmed Panamericana; 2007. p. 9-31. (Sistema de Educação Continuada a Distância, v. 1)."
        />
        <Reference
          idx={3}
          body="Ferreira AL et al. Guia de atuação frente a maus-tratos na infância e na adolescência. IN: Sociedade Brasileira de Pediatria. 2nd. Rio de Janeiro. 2001."
        />
        <Reference
          idx={4}
          body="Forlin E, Pfeiffer L. Maus-tratos na infância e adolescência. IN: Sociedade Brasileira de Traumatologia e Ortopedia. PROATO Programa de Atualização em Traumatologia e Ortopedia: Ciclo 1. Porto Alegre: Artmed Panamericana; 2005. p. 125-61. (Sistema de Educação Continuada a Distância, v. 1)."
        />
        <Reference
          idx={5}
          body="Hirschheimer MR. Abuso físico e sexual e a criança na unidade de terapia intensiva. IN: Sociedade Brasileira de Pediatria. PROTIPED Programa de Atualização em Medicina Intensiva Pediátrica: Ciclo 4. Porto Alegre: Artmed Panamericana; 2012. p. 71-133. (Sistema de Educação Continuada a Distância, v. 2)."
        />
        <Reference
          idx={6}
          body="Marques RM, Teixeira AMS, Barbosa GB. Violência sexual: abordagem no departamento de emergência. IN: Sociedade Brasileira de Clínica Médica; Lopes AC, Tallo FS, Lopes RD, Vendrame LS, organizadores. PROURGEM Programa de Atualização em Medicina de Urgência e Emergência: Ciclo 10. Porto Alegre: Artmed Panamericana; 2017. p. 129-50. (Sistema de Educação Continuada a Distância, v. 4)."
        />
        <Reference
          idx={7}
          body="Moriya RM, Canheu AC, Moryia LK. Atendimento inicial ao traumatismo cranioencefálico em crianças. IN: Sociedade Brasileira de Pediatria; Oliveira Filho EA, Nobrega M, organizadores. PROPED Programa de Atualização em Terapêutica Pediátrica: Ciclo 2. Porto Alegre: Artmed Panamericana; 2016. p. 9-68. (Sistema de Educação Continuada a Distância, v. 4)."
        />
        <Reference
          idx={8}
          body="Pfeiffer L. Assistência a crianças e adolescentes vítimas de violência sexual. IN: Sociedade Brasileira de Pediatria; Oliveira Filho EA, Nobrega M, organizadores. PROPED Programa de Atualização em Terapêutica Pediátrica: Ciclo 2. Porto Alegre: Artmed Panamericana; 2015. p. 63-109. (Sistema de Educação Continuada a Distância, v. 2)."
        />
        <Reference
          idx={9}
          body="Secretaria de Estado de Saúde do Distrito Federal – Manual para atendimento às vítimas de violência na rede de saúde pública do DF. 2nd. Brasília.2009. p. 9-66."
        />
        <Reference
          idx={10}
          body="Uhmann A, Kaufman A, Garcia CD, Lipinski RW. Violência e saúde de adolescentes e jovens – como o pediatra deve proceder. IN: Sociedade Brasileira de Pediatria; AZEVEDO AEBI, organizadores. Documento Científico – Departamento Científico de Adolescência. 2018. p. 1-12."
        />
      </Section>
    </Routine>
  )
}
