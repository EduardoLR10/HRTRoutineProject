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

import img1 from './images/image1.png'

export default function ReanimacaoNeonatal(): JSX.Element {
  return (
    <Routine
      id="reanimacao-neonatal"
      name="Reanimação Neonatal"
      categories={['emergencia', 'neonatologia']}
      authors={['carlos']}
      tags={['ressucitação', 'ressuscitar', 'recém', 'nascido']}
    >
      <Section title="Aspectos Gerais">
        <P>
          Essa rotina aborda reanimação neonatal (para maiores de 34 semanas).
        </P>
        <P>
          A atenção ao recém-nascido, imediatamente após o nascimento, é uma
          etapa importante para a garantia da vitalidade do bebê e a asfixia, é
          uma causa notável de mortalidade neonatal em todo o mundo. Desta
          maneira, os profissionais, que atuam nestes ambientes, precisam estar
          preparados para reconhecer qualquer situação comprometedora e, se
          necessário, realizar as manobras de reanimação neonatal.
        </P>
        <P>
          A Sociedade Brasileira de Pediatria, baseada em protocolos da Academia
          Americana de Pediatria, sugere intervenções que garantam a
          permeabilidade de vias aéreas e manutenção da temperatura corpórea,
          bem como circulação adequada e respiração eficaz, desde o nascimento.
        </P>
      </Section>
      <Section title="Preparo para Assistência">
        <P>
          O preparo para assistência deve levar em conta a antecipação de
          riscos. De uma forma geral, esta antecipação é suportada por três
          aspectos principais: a história de vida desta criança, que se inicia
          antes mesmo do nascimento, com ênfase à história materna prévia e
          gestacional; existência de material adequado para a assistência
          completa dos recém-nascidos e a existência de uma equipe preparada
          para executar todos os procedimentos necessários a uma eventual
          reanimação neonatal.
        </P>
        <Subsection title="História de vida do concepto, com ênfase à história materna">
          <P>
            É conveniente que, antes do parto, existam registros sobre a saúde
            materna prévia e gestacional, além da elaboração de uma boa história
            perinatal. Com isto, busca-se identificar fatores de risco que
            possam levar a necessidade de uma atenção específica no pós-parto
            imediato ou mediato. Com frequência, um maior risco de necessidade
            de reanimação neonatal está ligado a fatores relacionados a
            características maternas e do parto.
          </P>
        </Subsection>
        <Subsection title="Existência de material adequado para a assistência completa dos recém-nascidos (RN)">
          <P>
            É fundamental que os equipamentos necessários para reanimação
            estejam sempre disponíveis e testados antes da ocorrência de
            qualquer nascimento, sendo acessível sua localização. Para prevenir
            imprevistos, sempre que se chegar ao ambiente do parto, todos os
            equipamentos devem ser checados, mesmo que não seja a primeira
            intervenção realizada naquele período. Os materiais, de maneira
            geral, se destinam à manutenção da temperatura do RN, liberação das
            vias aéreas e ventilação adequada e material para administração de
            medicações, além dos materiais de biossegurança.
          </P>
        </Subsection>
        <Subsection title="Existência de uma equipe preparada para executar todos os procedimentos necessários">
          <P>
            Durante a assistência ao parto, é fundamental a presença de pelo
            menos um profissional capaz de realizar a reanimação adequadamente.
            Quando se menciona profissional capaz, se faz menção a um preparo
            técnico (cognitivo), mas também a uma condição emocional segura no
            momento da assistência. Manter o ambiente em condições favoráveis,
            mesmo em situações extremamente negativas, faz parte das atribuições
            do líder da reanimação. Uma liderança técnica e emocionalmente
            adequada poderá instrumentalizar os auxiliares que estiverem
            presentes para uma reanimação bem-sucedida. Os auxiliares atuando
            junto ao líder devem estar dedicados exclusivamente a um reanimando.
            Em casos de recém-nascidos gêmeos, deve haver uma equipe exclusiva
            de assistência individual para cada criança.
          </P>
        </Subsection>
        <Subsection title="Cuidados com o recém-nascido maior ou igual a 34 semanas">
          <P>Cuidados com o recém-nascido maior ou igual a 34 semanas:</P>
          <P>
            Segundo as diretrizes atuais da Organização Mundial da Saúde,
            recomenda-se, para recém-nascidos ≥ 34 semanas com respiração
            adequada e tônus muscular em flexão ao nascimento, clampear o cordão
            umbilical entre 1 e 3 minutos depois da sua saída completa do
            claustro uterino. O neonato pode ser posicionado no abdome ou tórax
            materno durante esse período. Já para os casos onde a circulação
            placentária não esteja intacta (descolamento prematuro de placenta,
            placenta prévia, rotura placentária, prolapso ou nó verdadeiro de
            cordão) ou naqueles onde os recém-nascidos ≥ 34 semanas não iniciem
            respiração efetiva ou não demonstrem tônus muscular em flexão,
            recomenda-se o clampeamento imediato do cordão.
          </P>
          <P>
            Quando, ao nascimento, o recém-nascido for de termo e apresentar boa
            vitalidade, deverá continuar junto de sua mãe depois do clampeamento
            do cordão umbilical. Esta aproximação ajuda na recuperação da mãe,
            tranquilizando-a e estimulando também na produção do leite. O
            contato pele-a-pele entre mãe e bebê favorece o início precoce da
            amamentação e aumenta a chance do aleitamento materno exclusivo
            prolongado, além de assegurar que o recém-nascido receba, a partir
            do colostro, diversos fatores protetores ainda na primeira hora
            pós-parto.
          </P>
          <P>
            No momento do pós-parto imediato, enquanto o RN estiver junto à sua
            mãe, será imprecindível a provisão de calor, manutenção da
            permeabilidade das vias aéreas e a avaliação de sua vitalidade de
            maneira contínua.
          </P>
          <P>
            Por outro lado, pacientes com idade gestacional diferente do termo;
            recém-nascidos que não iniciam movimentos respiratórios regulares
            e/ou aqueles em que o tônus muscular estiver flácido, serão
            conduzidos à mesa de reanimação. Ao chegar à mesa de reanimação,
            instituem-se os passos iniciais da estabilização, na seguinte
            sequência: oferta de calor; posicionamento da cabeça em leve
            extensão; aspiração de boca e narinas (se necessário) e secagem do
            RN, com retirada dos campos úmidos imediatamente. Tais passos devem
            ser executados em, no máximo, 30 segundos.
          </P>
          <P>
            O RN deverá ser levado à mesa de reanimação envolto em campos
            aquecidos e posicionado sob calor radiante, em decúbito dorsal, com
            a cabeça voltada para o profissional de saúde. A mesa de reanimação
            não deve ter qualquer inclinação. Apesar da provisão de calor,
            deve-se tomar cuidado especial para evitar a hipertermia ({'>'} 37,5
            °C), pois pode agravar a lesão cerebral em pacientes asfixiados.
          </P>
          <P>
            A fim de assegurar a permeabilidade das vias aéreas, após o
            posicionamento adequado do recém nascido (pescoço em leve extensão,
            mas sem hiperextensão ou flexão exagerada, muitas vezes obtida com
            uso de um coxim sob os ombros) pode ser procedida a aspiração, que,
            contudo, está reservada a pacientes que apresentam obstrução de vias
            aéreas por excesso de secreções. Deve-se evitar a introdução da
            sonda de aspiração de maneira brusca ou na faringe posterior, pois
            pode induzir à resposta parassimpática com espasmo laríngeo,
            sialorréia, apneia e bradicardia.
          </P>
          <P>
            No caso de bebês que necessitarem ser conduzidos à mesa de
            reanimação, por não serem de termo; por não apresentarem respiração
            regular ou ainda por hipotonia, recomenda-se, na presença de líquido
            amniótico meconial, a aspiração de boca e narinas, com sonda de
            aspiração calibrosa (n° 10).
          </P>
          <P>
            Para os recém nascidos em que foram realizados os passos iniciais da
            estabilização e à avaliação mantiverem-se com respiração inefetiva
            e/ou FC {'<'}100 bpm, iniciar a VPP (ventilação com pressão
            positiva) nos primeiros 60 segundos após o nascimento e acompanhar a
            FC pelo monitor cardíaco e a saturação de oxigênio (SatO
            <Subscript>2</Subscript>) pelo oxímetro de pulso.
          </P>
        </Subsection>
        <Subsection title="Assistência ao RN com líquido amniótico meconial">
          <P>
            Ao contrário do preconizado anteriormente, na vigência de líquido
            amniótico meconial, independentemente de sua viscosidade, a
            aspiração das vias aéreas ao desprendimento do polo cefálico do
            concepto não deve mais ser realizada. Segue-se sequência prevista
            para aqueles sem a presença de mecônio. Também para os
            recém-nascidos com líquido amniótico meconial de qualquer
            viscosidade, levados à mesa de reanimação para os passos iniciais,
            que apresentem apneia, respiração irregular e/ou FC {'<'} 100 bpm, é
            fundamental iniciar a VPP com máscara facial e ar ambiente nos
            primeiros 60 segundos de vida. Se após 30 segundos de ventilação
            efetiva, o neonato não melhorar e houver forte suspeita de obstrução
            de vias aéreas, indica-se a retirada do mecônio residual da
            hipofaringe e da traqueia sob visualização direta. A aspiração
            traqueal propriamente dita, é feita através da cânula traqueal
            conectada a um dispositivo para aspiração de mecônio e ao aspirador
            a vácuo. Nessa situação, aspirar o excesso de mecônio uma única vez,
            já que há necessidade do início rápido da ventilação em todo RN que
            não apresente respiração regular ou esteja bradicárdico no 1º minuto
            após o nascimento.
          </P>
        </Subsection>
        <Subsection title="Ventilação com pressão positiva (VPP)">
          <P>
            O ponto crítico para o sucesso da reanimação é a ventilação
            adequada, fazendo com que os pulmões se inflem permitindo dilatação
            da vasculatura pulmonar e hematose apropriada. Assim, após os
            cuidados para manter a temperatura e a permeabilidade das vias
            aéreas do RN, a presença de apneia, respiração irregular e/ou FC{' '}
            {'<'}100 bpm indica a VPP, que precisa ser iniciada nos primeiros 60
            segundos de vida. A ventilação pulmonar é o procedimento mais
            simples, importante e efetivo na reanimação do RN em sala de parto.
          </P>
        </Subsection>
        <Subsection title="Oxigênio suplementar">
          <P>
            Se indicada, a VPP para recém nascidos ≥ 34 semanas deverá ser feita
            inicialmente com ar ambiente (oxigênio a 21%). Iniciada a
            ventilação, recomenda-se o uso da oximetria de pulso pré-ductal para
            monitorar a oferta do oxigênio suplementar. Se houver débito
            cardíaco suficiente para manter a perfusão periférica, a leitura
            confiável da SatO2 demorará cerca de 1 a 2 minutos após o
            nascimento. Salienta-se que o processo de transição normal para
            alcançar uma SatO<Subscript>2</Subscript> {'>'} 90% requer cerca de
            5 minutos ou mais em RN saudáveis que respiram ar ambiente.
          </P>
          <Table
            colWidths={[150, 200]}
            header={['Minutos de Vida', 'Saturação pré-ductal']}
            data={[
              ['Até 5 minutos', '70 a 80%'],
              ['Entre 5 e 10 minutos', '80 a 90%'],
              ['Após 10 minutos', '85 a 95%']
            ]}
            caption="Tabela 1: Valores de saturação desejáveis, segundo idade pós natal."
          />
          <P>
            A monitorização da saturação de O<Subscript>2</Subscript>{' '}
            possibilita o uso criterioso e racional de oxigênio. Assim, quando o
            recém-nascido não melhora e/ou não atinge os valores desejáveis de
            SatO
            <Subscript>2</Subscript> com a VPP em ar ambiente, recomenda-se
            sempre verificar e corrigir a técnica da ventilação antes de
            oferecer oxigênio suplementar. A necessidade de oxigênio suplementar
            é excepcional em RN ≥ 34 semanas se a VPP é feita com a técnica
            adequada. Nos poucos casos em que isto é necessário, indica-se a
            aplicação da mistura O<Subscript>2</Subscript>/ar comprimido,
            ajustando-se a concentração mínima necessária de oxigênio, por meio
            de um blender, para atingir a SatO<Subscript>2</Subscript> alvo.
            Diante de qualquer modificação da FiO
            <Subscript>2</Subscript> ofertada, é necessário um período de cerca
            de 30 segundos para haver equilíbrio da concentração de oxigênio por
            toda a área pulmonar do RN. Por tal razão, sugere-se, que nos raros
            pacientes em que há necessidade de oxigênio suplementar durante a
            ventilação, fazer incrementos de 20% e aguardar cerca de 30 segundos
            para verificar a SatO
            <Subscript>2</Subscript> antes de indicar novos incrementos,
            ressaltando-se que a VPP com a técnica correta é fundamental para a
            melhora do paciente.
          </P>
        </Subsection>
        <Subsection title="Equipamentos para a ventilação">
          <P>
            Apesar de não permitir PEEP, o balão autoinflável é de baixo custo,
            sendo o único equipamento de ventilação em sala de parto que não
            necessita de fonte de gás comprimido para funcionar. Neste, a
            pressão inspiratória máxima é variável, e apenas será conhecida na
            existência de manômetro, não disponível nos modelos do HRT. A
            pressão inspiratória deverá ser limitada, pela válvula de escape,
            calibrada para ser ativada em torno de 30-40 cm de água, para evitar
            o barotrauma. Na ausência do uso do blender, um balão autoinflável
            fornece concentração de oxigênio de 21% (ar ambiente, quando não
            está conectado ao oxigênio), de FiO
            <Subscript>2</Subscript> variável (se conectado apenas à fonte de
            oxigênio, a depender do fluxo usado, marca do balão, pressão e
            frequência das compressões, bem como da força exercida e tempo de
            compressão do balão) e 90 - 100% (quando conectado ao oxigênio e a
            um reservatório).
          </P>
          <P>
            O ventilador mecânico manual de fluxo contínuo, é controlado a fluxo
            e limitado a pressão. Para o funcionamento do ventilador, há
            necessidade de uma fonte de gás comprimido. A concentração de
            oxigênio ao paciente pode ser titulada quando o equipamento está
            ligado ao blender ou pelo conhecimento da mistura gasosa oferecida a
            partir do cálculo dos fluxos de ar e oxigênio utilizados. O manuseio
            de tal ventilador, permite ajustar/administrar pressão inspiratória
            e pressão expiratória, no final da expiração, constantes, de acordo
            com a resposta clínica do RN, além de permitir a aplicação de CPAP
            nos pacientes que respiram espontaneamente.
          </P>
          <Subsection title="Exemplo">
            <P>
              FiO<Subscript>2</Subscript> = [(qtde. litros de Ar comprimido x
              21) + (qtde. litros de O<Subscript>2</Subscript> x 100)]/total de
              litros da mistura.
            </P>
            <P>
              Ex: FiO<Subscript>2</Subscript> de um dispositivo de ventilação
              (balão auto inflável ou ventilador de fluxo contínuo) sendo usado
              com 1 litro de oxigênio e 4 litros de ar acomprimido.
            </P>
            <P>
              FiO<Subscript>2</Subscript> = [(4x21) + (1x100)] / 5 = 36%
            </P>
          </Subsection>
          <P>
            A interface entre o equipamento para ventilação e o RN ≥ 34 semanas,
            pode ser feita por meio de máscaras (facial ou laríngea) e por
            cânula traqueal. As máscaras estão disponíveis em três tamanhos
            (para o RN termo, prematuro e para o prematuro extremo) e devem
            possibilitar a cobertura da ponta do queixo, a boca e nariz. Já as
            cânulas traqueais, devem ser de diâmetro uniforme, sem balão, com
            linha radiopaca e marcador de corda vocal.
          </P>
        </Subsection>
        <Subsection title="VPP por meio da máscara facial">
          <P>
            Sendo o procedimento mais simples e efetivo na reanimação do recém
            nascido em sala de parto, estará indicada na presença de apneia,
            respiração irregular e/ou FC {'<'}100 bpm, após os passos iniciais.
            É fundamental, contudo, que seja iniciada ainda nos primeiros 60
            segundos de vida, período conhecido identificado como “Minuto de
            ouro”. Nos bebês ≥ 34 semanas, a ventilação com balão autoinflável
            ou ventilador mecânico manual de fluxo contínuo deve ser iniciada
            preferencialmente, por meio de máscara facial.
          </P>
          <P>
            Após posicionar adequadamente o recém-nascido (pescoço em leve
            extensão) e aplicar a máscara na face (do queixo até o nariz),
            deve-se envolver as bordas da máscara com os dedos indicador e
            polegar, formando a letra “C”, para fixá-la na região correta, com
            uma leve pressão em sua borda. Ainda para se obter uma boa
            ventilação, os dedos médio, anular e mínimo formam a letra “E”,
            mantendo a permeabilidade das vias aéreas.
          </P>
          <P>
            A frequência indicada para a ventilação com balão autoinflável e
            máscara é de 40-60 movimentos/minuto, sendo um tempo usado para
            inspiração e dois para a expiração (“aperta/solta/solta”). A pressão
            a ser aplicada deve ser individualizada para que o RN alcance e
            mantenha FC {'>'}100 bpm. De modo geral, iniciar com pressão
            inspiratória ao redor de 20 cm de água, sendo raramente necessário
            alcançar 30-40 cm de água para pacientes com pulmões imaturos ou
            doentes. Após as cinco primeiras ventilações, é prudente reajustar a
            pressão inspiratória, de modo a visualizar o movimento torácico leve
            e auscultar a entrada de ar nos pulmões.
          </P>
          <P>
            Se optado pelo o uso do ventilador mecânico de fluxo contínuo, é
            necessário fixar um fluxo gasoso (entre 5 e 15 litros/minuto),
            limitar a pressão máxima do circuito (30 a 40 cm de água),
            selecionar a pressão inspiratória a ser aplicada em cada ventilação
            (20 a 25 cm de água), e ajustar a PEEP (5 cm de água). Da mesma
            maneira que com o uso do balão auto inflável, após as cinco
            primeiras ventilações, deverá ser reajustada a pressão inspiratória,
            mantendo-se contudo, a ventilação efetiva, com FR entre 40 e 60 ipm.
          </P>
          <P>
            A ventilação objetiva uma adequada expansão pulmonar, sem levar à
            superdistensão. Portanto, durante este procedimento, o executante
            deve ser capaz de detectar e corrigir possíveis falhas de adaptação
            do material e da técnica usada, que possam interferir na
            permeabilidade das vias aéreas e uso de pressão adequada, de modo
            rápido. Para tal, é preciso monitorar a FC, a respiração e a SatO
            <Subscript>2</Subscript>. O indicador mais importante de que a VPP
            está sendo efetiva é o aumento da FC. Uma ventilação efetiva deve
            provocar inicialmente a elevação da FC e, depois, o estabelecimento
            da respiração espontânea. Se, após 30 segundos de VPP com máscara, o
            paciente apresentar FC {'>'}100 bpm e respiração espontânea e
            regular, suspender o procedimento.
          </P>
          <P>
            Da mesma forma, considera-se como falha se, após 30 segundos de VPP
            com máscara, o RN mantém FC {'<'} 100 bpm ou não retoma a respiração
            espontânea rítmica e regular. Apenas se houver certeza do uso de
            material e técnica adequadas, a falha deverá ser rebatida com oferta
            crescente de oxigênio suplementar. A necessidade de oxigênio
            suplementar é excepcional em RN ≥ 34 semanas, se a VPP é feita com a
            técnica adequada.
          </P>
          <P>
            Se o paciente, após a correção da técnica da ventilação e elevação
            da FiO<Subscript>2</Subscript> ofertada, não melhorar, está indicado
            o uso da cânula traqueal como interface para a ventilação com
            pressão positiva. Recomenda-se, contudo, que durante períodos
            prolongados de ventilação com máscara, seja inserida uma sonda
            orogástrica para descompressão gástrica, causada pela aerofagia.
          </P>
        </Subsection>
        <Subsection title="VPP por meio da cânula traqueal">
          <P>
            Está indicada a ventilação com pressão positiva sob cânula traqueal
            em sala de parto quando a ventilação com máscara facial não for
            efetiva e/ou quando houver necessidade de massagem cardíaca externa.
            Além dessas situações, a intubação traqueal e a inserção imediata de
            sonda gástrica são indicadas nos pacientes portadores de hérnia
            diafragmática que necessitarem de ventilação com pressão positiva.
          </P>
          <Table
            colWidths={[150, 150, 250]}
            header={[
              'Idade Gestacional',
              'Peso Estimado',
              'Tamanho do Diâmetro interno da Cânula Traqueal'
            ]}
            data={[
              ['34 - 38 semanas', '2000 - 3000g', '3,5 mm'],
              ['> 38 semanas', '> 3000g', '3,5 - 4,0 mm']
            ]}
            caption="Tabela 2: Tamanho de cânulas traqueais para > 34 semanas, segundo idade gestacional (IG) e/ou peso estimado."
          />
          <P>
            <Bold>Obs:</Bold> deixar sempre à disposição uma cânula de diâmetro
            superior e outra inferior àquela escolhida.
          </P>
          <P>
            É prudente que cada tentativa de intubação dure, no máximo, 30
            segundos, com ventilação por máscara, até a estabilização do
            paciente antes de realizada nova tentativa.
          </P>
          <P>
            O posicionamento adequado da cânula deve ser sempre realizado,
            principalmente na vigência de bradicardia não responsiva às medidas
            de reanimação. Além da resposta de elevação da FC, são usados como
            indicadores a inspeção da expansibilidade torácica, a ausculta das
            regiões de maior aeração (ápices e regiões axilares) e da região
            gástrica, para reconhecimento de intubação inadvertida do esôfago.
            Em caso de necessidade de permanência da intubação, a localização
            radiográfica da cânula deverá ser procedida o mais rápido possível,
            nunca contudo, interferindo ou retardando as manobras de reanimação.
          </P>
          <P>
            Na sala de parto, recomenda-se usar a regra prática “peso estimado
            (kg) + 6” para calcular o comprimento da cânula a ser inserido na
            traqueia, sendo o resultado correspondente à marca, em centímetros,
            a ser fixada no lábio superior. Pode-se ainda utilizar a idade
            gestacional para calcular o comprimento da cânula a ser inserido na
            traqueia, considerando a distância entre a ponta da cânula e a
            marca, em centímetros, a ser fixada no lábio superior. Para a
            localização radiográfica, a ponta distal da cânula deve estar
            localizada no terço médio da traqueia, na altura da 1ª. vértebra
            torácica.
          </P>
          <Table
            colWidths={[100, 300]}
            header={[
              'Idade Gestacinal',
              'Marca (cm) a ser considerada no lábio superior, para fixação'
            ]}
            data={[
              ['34 semanas', '7,5 cm'],
              ['35 a 37 semanas', '8,0 cm'],
              ['38 a 40 semanas', '8,5 cm'],
              ['41 ou mais semanas', '9,0 cm']
            ]}
            caption="Tabela 3: Comprimento da cânula a ser inserida na traqueia, segundo IG"
          />
          <P>
            Após a intubação, inicia-se a ventilação com balão autoinflável ou
            com ventilador mecânico de fluxo contínuo na mesma frequência (40 a
            60 ipm) e pressão (ao redor de 20 cm de água) descritas para a
            ventilação com máscara, contudo, deve-se proceder os ajustes
            individualizados observando-se a expansibilidade torácica e a
            manutenção de uma FC {'>'}100 bpm.
          </P>
          <P>
            Quanto ao uso de oxigênio suplementar durante a VPP por meio da
            cânula traqueal, quando a intubação foi indicada por ventilação com
            máscara facial inadequada (a tentativa de correção da técnica da VPP
            não foi bem sucedida), é possível iniciar a VPP por cânula traqueal
            com ar ambiente e, após 30 segundos, monitorar a SatO
            <Subscript>2</Subscript>. Com a mesma recomendação de incrementos de
            20% em intervalos de pelo menos 30 segundos, antes de novas
            elevações da oferta do oxigênio. Quando, por outro lado, a intubação
            foi indicada porque o RN permaneceu com FC {'<'}100 bpm em
            ventilação com máscara facial e técnica adequada, a VPP com cânula
            traqueal pode ser iniciada na mesma concentração de O
            <Subscript>2</Subscript> que estava sendo oferecida antes da
            intubação, seguindo-se a mesma recomendação de monitoramento da SatO
            <Subscript>2</Subscript>, após 30 segundos.
          </P>
          <P>
            A ventilação será suspensa e o paciente extubado se, nas avaliações
            subsequentes (a cada 30 segundos, da respiração, FC e SatO
            <Subscript>2</Subscript>), houver FC {'>'} 100 bpm e movimentos
            respiratórios espontâneos e regulares. Considera-se como falha se,
            após 30 segundos de VPP por meio da cânula traqueal, o RN mantiver
            FC {'<'}100 bpm ou não retomar a respiração espontânea ou, ainda, se
            a SatO<Subscript>2</Subscript> permanecer abaixo dos valores
            desejáveis/não detectável. Nesses casos, devem ser verificadas e
            corrigidas possíveis falhas técnicas, em geral relacionadas ao
            posicionamento da cânula, à permeabilidade das vias aéreas e à
            pressão que está sendo aplicada. Após essa correção, pode-se
            aumentar a oferta de oxigênio. Se o RN mantém apneia ou respiração
            irregular, continuar a ventilação por cânula traqueal. Se a FC está{' '}
            {'<'}60bpm, indicar a massagem cardíaca.
          </P>
        </Subsection>
        <Subsection title="Massagem cardíaca externa (MCE)">
          <P>
            A MCE só é indicada se, após 30 segundos de VPP com técnica
            adequada, se a FC estiver {'<'} 60 bpm, uma vez que sua realização
            diminui a eficácia da ventilação - que é a ação mais efetiva na
            reanimação neonatal. As compressões só devem ser iniciadas quando a
            expansão e a ventilação pulmonares estiverem bem estabelecidas.
            Portanto, na reanimação de um RN, não é admissível a realização de
            MCE antes da melhor aplicação possível da VPP (intubação traqueal e
            uso de concentração de oxigênio de 60-100%).
          </P>
          <P>
            As compressões torácicas são realizadas no terço inferior do
            esterno, onde se situa a maior parte do ventrículo esquerdo. Podem
            ser aplicadas as técnicas bimanual ou bidigital. Os dedos serão
            localizados no terço inferior do esterno, logo abaixo da linha
            intermamilar e poupando o apêndice xifóide. O restante das mãos
            circundam o tórax, dando suporte ao dorso durante a massagem. O
            profissional que vai executar a massagem cardíaca se posiciona atrás
            da cabeça do RN, enquanto aquele que ventila se desloca para um dos
            lados. A profundidade da compressão deve corresponder a 1/3 da
            dimensão ântero-posterior do tórax, de maneira a produzir um pulso
            palpável. Após a compressão, é necessário que haja a reexpansão
            plena do tórax para haver enchimento das câmaras ventriculares e das
            coronárias, sem que se retire os dedos do tórax. As complicações da
            massagem cardíaca incluem a fratura de costelas, com pneumotórax e
            hemotórax, e laceração de fígado.
          </P>
          <P>
            É importante a sincronia entre os movimentos ventilatórios e a MCE.
            Desta maneira, o reanimador principal deverá garantir tal
            sincronicidade. Será mantida uma relação de 3:1 (3 movimentos de MCE
            para 1 movimento de ventilação). A única situação em que se pode
            considerar a aplicação de 15 compressões cardíacas intercaladas com
            2 ventilações será a de pacientes internados em unidade neonatal,
            cuja origem da parada cardiorrespiratória seja provavelmente
            cardíaca, como nos portadores de cardiopatias congênitas.
          </P>
          <P>
            A reavaliação, durante a MCE, deve ser feita a cada 60 segundos,
            pois este é o tempo mínimo para que a massagem cardíaca efetiva
            possa restabelecer a pressão de perfusão coronariana. O monitor
            cardíaco é útil, portanto, para avaliar de forma contínua e
            instantânea a FC, sem interromper a ventilação e a massagem. A
            massagem deve continuar enquanto a FC estiver {'<'} 60 bpm.
          </P>
          <P>
            A melhora é considerada quando, após a VPP acompanhada de massagem
            cardíaca por 60 segundos, o RN apresentar FC {'>'} 60 bpm. Neste
            momento, interrompe-se apenas a massagem. A VPP será interrompida
            apenas quando o paciente apresentar respirações espontâneas
            regulares com FC {'>'}100 bpm.
          </P>
          <P>
            Considera-se a falha do procedimento se, após 60 segundos de VPP com
            cânula traqueal e oxigênio a 100% e MCE com adequada técnica de
            aplicação (sincronia entre ventilação e compressões cardíacas,
            frequência de compressões adequada, profundidade correta, oferta de
            um tempo de diástole para o enchimento coronariano e ventricular), o
            RN mantiver FC {'<'} 60 bpm. Nesse caso, verificar a posição da
            cânula, a permeabilidade das vias aéreas e a técnica da ventilação e
            da massagem, corrigindo o que for necessário. Se, após a correção da
            técnica da VPP e massagem, não houver melhora, considera-se o
            cateterismo venoso umbilical de urgência e indica-se a adrenalina.
          </P>
        </Subsection>
      </Section>
      <Section title="Medicações">
        <P>
          Quando a FC permanecer {'<'} 60 bpm, a despeito de ventilação efetiva
          por cânula traqueal com oxigênio a 100% e acompanhada de massagem
          cardíaca adequada, o uso de adrenalina, expansor de volume ou ambos
          está indicado. Não está mais recomendado o uso de bicarbonato de
          sódio, naloxone, atropina, albumina e outros vasopressores na
          reanimação do RN em sala de parto.
        </P>
        <P>
          A via preferencial para a infusão de medicações na sala de parto é a
          endovenosa, sendo a veia umbilical um acesso fácil e rápido. O cateter
          venoso umbilical deve ser inserido apenas 1-2 cm após o ânulo,
          mantendo-o periférico, de modo a evitar sua localização em nível
          hepático. Enquanto o cateterismo venoso umbilical está sendo
          realizado, pode-se administrar uma única dose de adrenalina (0,05-0,10
          mg/kg) por via traqueal, mas sua eficácia é questionável. Caso
          utilizada a via traqueal, se não houver aumento imediato da FC,
          administrar a adrenalina endovenosa (0,01-0,03 mg/kg). A adrenalina
          disponível apresenta-se em ampolas na diluição de 1:1.000, que deverá
          ser diluída em 9 ml de solução fisiológica (1:10.000), para aplicação
          na reanimação neonatal. Quando não houver reversão da bradicardia com
          a adrenalina endovenosa, assegurar que a VPP e a massagem cardíaca
          estão adequadas, repetir a administração de adrenalina a cada 3-5
          minutos (sempre por via endovenosa na dose 0,03 mg/kg) e considerar o
          uso do expansor de volume.
        </P>
        <P>
          O expansor de volume pode ser necessário para reanimar o RN com
          hipovolemia. A suspeita é feita se não houver aumento da FC em
          resposta às outras medidas de reanimação e/ou se houver perda de
          sangue ou sinais de choque hipovolêmico. A expansão de volume é feita
          com soro fisiológico na dose de 10 ml/kg lentamente, em 5-10 minutos,
          podendo ser repetida a critério clínico. Com o uso do expansor,
          espera-se o aumento da FC e a melhora dos pulsos e da palidez.
        </P>
        <Table
          colWidths={[150, 150, 150, 150]}
          header={[
            '',
            'Adrenalina Traqueal',
            'Adrenalina Venosa',
            'Expansor de Volume'
          ]}
          data={[
            [
              <Text key={1}>
                <Bold>Diluição</Bold>
              </Text>,
              '1 ml de adrenalina em 9 ml de SF a 0,9%',
              '1 ml de adrenalina em 9 ml de SF a 0,9%',
              'SF a 0,9%'
            ],
            [
              <Text key={2}>
                <Bold>Preparo</Bold>
              </Text>,
              '5 ml',
              '1 ml',
              '2x (20 ml)'
            ],
            [
              <Text key={3}>
                <Bold>Dose</Bold>
              </Text>,
              '0,5 - 1,0 ml/Kg',
              '0,1 - 0,3 ml/Kg',
              '10 ml/Kg EV'
            ],
            [
              <Text key={4}>
                <Bold>
                  Peso ao Nascer{'\n'}1 Kg{'\n'}2 Kg{'\n'}3 Kg{'\n'}4 Kg
                </Bold>
              </Text>,
              '\n0,5 - 1,0 ml\n1,0 - 2,0 ml\n1,5 - 3,0 ml\n2,0 - 4,0 ml',
              '\n0,1 - 0,3 ml\n0,2 - 0,6 ml\n0,3 - 0,9 ml\n0,4 - 1,2 ml',
              '\n10 ml\n20 ml\n30 ml\n40 ml'
            ],
            [
              'Velocidade/Precauções',
              'Infundir diretamente na cânula traqueal e ventilar a seguir. USO ÚNICO',
              'Infundir rápido na veia umbilical e, a seguir, infundir 0,5 - 1,0 ml de SF 0,9%',
              'Infundir o expansor de volume na veia umbilical lentamente, em 5 a 10 minutos'
            ]
          ]}
          caption="Tabela 4: Preparo e doses das medicações disponíveis para uso em sala de parto."
        />
        <Subsection title="Aspectos éticos da assistência ao recém-nascido ≥ 34 semanas na sala de parto">
          <P>
            O primeiro aspecto ético controverso refere-se à decisão de não
            iniciar a reanimação na sala de parto. Para o RN ≥ 34 semanas, essa
            questão só se coloca diante de malformações congênitas letais ou
            potencialmente letais. É necessário ter a comprovação diagnóstica
            antenatal e considerar a vontade dos pais e os avanços terapêuticos
            existentes para decidir quanto à conduta em sala de parto. Se não
            houver certeza quanto à decisão de não reanimar o RN, todos os
            procedimentos necessários devem ser feitos de acordo com o
            fluxograma da reanimação neonatal.
          </P>
          <P>
            Outro aspecto ético controverso refere-se à interrupção da
            reanimação em sala de parto. A presença de assistolia aos 10 minutos
            de vida, já é reconhecido cientificamente como forte preditor
            positivo para a interrupção da reanimação.
          </P>
          <P>
            Qualquer decisão quanto a reanimação neonatal tomada na sala de
            parto deve ser reportada de modo fidedigno no prontuário médico
            materno e/ou do recém-nascido.
          </P>
        </Subsection>
        <Figure source={img1} size={[710, 945]} />
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Sociedade Brasileira de Pediatria. Reanimação do recém-nascido ≥ 34 semanas em sala de parto: Diretrizes 2016 da Sociedade Brasileira de Pediatria, 2016. www.sbp.com.br/reanimacao"
        />
      </Section>
    </Routine>
  )
}
