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
import img2 from './images/image2.png'
import img3 from './images/image3.png'
import img4 from './images/image4.png'

export default function ConceitosBasicosDeVentilacaoMecanica(): JSX.Element {
  return (
    <Routine
      id="conceitos-basicos-de-ventilacao"
      name="Conceitos Básicos de Ventilação Mecânica"
      categories={['emergencia']}
      authors={['rafael']}
      tags={['parâmetros', 'ventilador']}
    >
      <Section title="Introdução">
        <P>
          A ventilação mecânica (VM) é utilizada em unidades de tratamento
          intensivo pediátrico no mundo todo, sendo responsável pela maioria das
          indicações de internação em UTI pediátrica. Sua prática é baseada
          pricipalmente em cuidados que profissionais intensivistas adotaram em
          suas experiências com VM em adultos e também com pacientes neonatais.
          Pulmões de bebês e crianças não são pulmões em miniatura de um adulto;
          numerosas mudanças e remodelações ocorrem desde o nascimento até a
          idade adulta, e são características próprias da faixa etária, como
          vias aéreas periféricas mais apertadas, o que representa um importante
          fator de risco para doenças respiratórias na infância.
        </P>
        <P>
          Dessa forma, é necessário reconhecer e adotar estratégias de VM, que
          darão melhor suporte ao paciente pediátrico, evitando danos maiores.
          Sendo assim, uma VM adequada pode acelerar a recuperação e minimizar a
          morbidade pulmonar e sua concomitante mortalidade.
        </P>
      </Section>
      <Section title="Fisiologia Ventilatória em Pulmões Sadios">
        <P>
          Os parâmetros ventilatórios variam segundo a idade, tamanho e
          constituição física do paciente, no entanto, um volume corrente
          efetivo de 6 a 8 ml/kg de peso corporal, podendo chegar até 10 ml/kg é
          considerado adequado para a maioria dos pacientes.
        </P>
        <P>
          Dessa forma, quando selecionamos no ventilador mecânico o modo
          controlado a pressão, por exemplo, o pico de pressão inspiratória deve
          ser estabelecido a fim de gerar volumes correntes dentro do mesmo
          intervalo (6 a 8 ml/kg), controlando a pressão de pico (PI) que oscila
          aproximadamente entre 15 e 20 cmH ₂O.
        </P>
        <P>
          A pressão expiratória final positiva (PEEP) ou pressão nas vias aéreas
          no final da expiração, deve ser usada para diminuir a probabilidade de
          atelectasia. Seu valor fisiológico gira em torno de 4 a 6 cmH ₂O,
          podendo variar muito de acordo com a patologia em questão. Em
          pacientes intubados incapazes de respirar espontaneamente, deve-se dar
          muita atenção a essa pressão, sob o risco de trauma relacionado ao
          colabamento cíclico de seguimentos pulmonares.
        </P>
        <P>
          Outra variável importante a ser selecionada no ventilador mecânico, é
          o tempo inspiratório (TI). Geralmente é próximo àquele da respiração
          espontânea apropriada para a faixa etária: 0,4 segundos para os
          recém-nascidos, 0,6 segundos para crianças pequenas, 0,8 segundos para
          crianças mais velhas e 1 segundo para adolescentes e jovens adultos.
        </P>
        <P>
          A freqüência respiratória (FR) também é outro parâmetro, que
          relaciona-se à idade e ao tamanho do paciente, de forma inversa,
          quanto menor e mais novo maior. Ela deve ser ajustada para que resulte
          em normocapnia, conforme medido através da gasometria arterial
          seriada, ou através da capnografia.
        </P>
      </Section>
      <Section title="Situações Clínicas de Interesse">
        <Subsection title="Ventilação mecânica em doenças que levam à alteração da resistência das vias aéreas (asma e bronquiolite)">
          <P>
            Doenças de resistência anormal, caracterizam-se pela dificuldade do
            fluxo aéreo, principalmente na fase expiratória do ciclo ciclo
            respiratório. Assim sendo, esses pacientes apresentam tempos
            expiratórios prolongados, sibilância expiratória e hiperinsuflação
            pulmonar dinâmica. Pode ser decorrente de edema da mucosa, acúmulo
            de muco, detritos intraluminais, compressão extrínseca, sendo mais
            frequente por broncoespasmo.
          </P>
          <P>
            A asma é a doença que melhor representa essa condição clínica, sendo
            também observada na bronquiolite viral aguda. O objetivo da
            ventilação mecânica na asma aguda é reverter a hipoxemia (se
            presente), evitar a fadiga da musculatura respiratória e manter um
            nível de CO₂ dentro de um limite que gere pH aceitável, com menor
            dano ao pulmão, evitando trauma e hiperinsuflação iatrogênica
            (condição que poderia contribuir para o débito cardíaco de forma
            negativa).
          </P>
          <P>
            Uma mudança no manejo da ventilação de pacientes asmáticos ocorreu
            com a introdução da estratégia de hipoventilação controlada de
            Darioli & Perret. Ela é conhecida atualmente como Estratégia
            Ventilatória na Asma e consiste em: volumes correntes entre 8 e 12
            ml/kg, (supra fisiológicos) picos de pressão inspiratória de 40 a 45
            cmH₂O, frequência respiratória mais baixa 12 – 16 irpm e hipercapnia
            permissiva. Sabe-se que ela resultou em poucas complicações e
            nenhuma mortalidade ou morbidade a longo prazo em 19 crianças com
            asma quase-fatal submetidos à ventilação mecânica em estudo já
            realizado.
          </P>
          <P>
            Os modos ventilatórios para pacientes com asma aguda grave podem ser
            divididos em pressão controlada e volume controlado.
          </P>
          <P>
            O modo de pressão controlada tem a vantagem de garantir que o limite
            de pressão inspiratória desejado seja respeitado. A principal
            desvantagem é a variação do volume corrente de acordo com mudanças
            na resistência das vias aéreas.
          </P>
          <P>
            O modo de volume controlado oferece um volume corrente constante,
            porém, gera diferenças nas pressões das vias aéreas de acordo com a
            alterações na resistência da mesma.
          </P>
          <Figure source={img1} size={[413, 394]} />
          <P>
            Deve-se dar atenção ao uso de PEEP em asmáticos intubados para
            evitar: a hiperinsuflação pulmonar, as pressões das vias aéreas e
            intratorácica elevadas e o comprometimento circulatório. Para essa
            determinação, pode ser utilizada a medida de auto PEEP no
            ventilador, que calcula a pressão intrínseca da via aérea, e não se
            deve ofertar acima da mesma.
          </P>
          <Figure source={img3} size={[411, 514]} />
          <P>
            O uso da VNI nessas condições clínicas, asma e bronquiolite, mostrou
            o potencial desta modalidade em reduzir o trabalho respiratório,
            melhorar a ação dos broncodilatadores inalatórios, deixando muitas
            crianças subjetivamente mais confortáveis. Em muitos casos, a
            ventilação não-invasiva parece ter evitado a necessidade de
            intubação, todavia, ela deve ser usada somente em locais onde a
            intubação pode ser disponibilizada quando necessária.
          </P>
        </Subsection>
        <Subsection title="Ventilação mecânica em doenças que levam à alteração da complacência pulmonar (SRDA, Pneumonia, grande queimado, politrauma)">
          <P>
            A SDRA é a doença principal dessa condição. É caracterizada por uma
            resposta inflamatória grave a insultos locais (pulmonares) ou
            remotos (sistêmicos) que invariavelmente leva à anormalidades na
            troca gasosa e na mecânica pulmonar. Define-se por hipoxemia grave
            (razão PaO₂/FiO ₂ {'<'} 200) e infiltrados bilaterais na radiografia
            do tórax, sem evidência de disfunção cardíaca.
          </P>
          <Figure source={img2} size={[401, 329]} />
          <P>
            Na SDRA deve-se adotar estratégias ventilatórias que evitem a lesão
            pulmonar induzida pela ventilação mecânica, a LPIV.
          </P>
          <Subsubsection
            title={
              <>
                <Italic>Barotrauma versus volutrauma</Italic>
              </>
            }
          >
            <P>
              O volume corrente excessivo que resulta em hiperinsuflação
              regional, e não a pressão das vias aéreas, é o fator responsável
              por esse tipo de lesão, agora chamado de volutrauma.
            </P>
            <P>
              Na SDRA, há uma heterogeneidade do pulmão. Como resultado, até
              mesmo volumes correntes de 10 a 12 ml/kg podem levar a uma
              hiperinsuflação importante e à lesão nas regiões pulmonares
              não-dependentes mais hígidas, através da distribuição
              desproporcional do volume corrente a estas regiões com maior
              complacência.
            </P>
          </Subsubsection>
          <Subsubsection
            title={
              <>
                <Italic>Atelectrauma</Italic>
              </>
            }
          >
            <P>
              Na SDRA, os alvéolos mais dependentes geralmente atingem um volume
              crítico de fechamento no final da expiração, resultando em colapso
              alveolar e fechamento das vias aéreas, seguidos de reabertura dos
              alvéolos e das vias aéreas durante a inspiração seguinte. A
              repetição cíclica é um fenômeno chamado de atelectrauma. A
              utilização da PEEP adequada pode minimizar essa condição.
            </P>
          </Subsubsection>
        </Subsection>
        <Subsection title="Estratégia protetora pulmonar">
          <P>
            Utilização de medidas para que se tenha uma &quot;zona segura&quot;
            (Figura 4), com menor dano ao pulmão.
          </P>
          <Figure source={img4} size={[393, 366]} />
        </Subsection>
        <Subsection title="Hipercapnia Permissiva">
          <P>
            A hipercapnia permissiva pode ser definida como a presença de uma
            elevada PaCO₂, sem que haja uma alteração muito significante do pH
            (7,2 – 7,3). A longo prazo, a lesão e remodelação pulmonar serão
            menores diante dessa condição.
          </P>
        </Subsection>
        <Subsection title="Tratamentos Avançados">
          <P>
            No estado clínico crítico, com desenvolvimento de pressões
            inspiratórias elevadas, acidose profunda e instabilidade
            hemodinâmica, existem alternativas menos convencionais que podem ter
            um valor adicional, tais como: ventilação oscilatória de alta
            freqüência (VOAF), posição prona, óxido nítrico inalatório,
            surfactante exógeno ou ECMO. Contudo, uma discussão mais abrangente
            dessas modalidades de tratamento foge ao propósito dessa rotina.
          </P>
        </Subsection>
      </Section>
      <Section title="Conclusões">
        <P>
          Devemos dar atenção ao paciente e ao reconhecimento da sua patologia
          e, para isso, devemos adotar as melhores estratégias possíveis, nos
          guiando por gráficos, números e gasometria. Assim, a diminuir
          hiperinsuflação e tolerar a hipercapnia é a base principal do suporte
          mecânico de pacientes pediátricos com doenças de resistência anormal
          das vias aéreas, como por exemplo, a asma quase-fatal.
        </P>
        <P>
          Já em doenças que levam à alteração da complacência pulmonar, como a
          SDRA, a aplicação de uma estratégia protetora pulmonar que incorpore
          volumes correntes reduzidos, recrutamento pulmonar eficaz e PEEP
          adequada, minimizam a lesão pulmonar induzida pela ventilação.
        </P>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Rotta AT, Kunrath CL, Wiryawan B. [Management of the acute respiratory distress syndrome]. J Pediatr (Rio J). 2003;79 Suppl 2:S149-60."
        />
        <Reference
          idx={2}
          body="Dreyfuss D, Soler P, Basset G, Saumon G. High inflation pressure pulmonary edema. Respective effects of high airway pressure, high tidal volume, and positive end-expiratory pressure. Am Rev Respir Dis. 1988;137:1159-64."
        />
        <Reference
          idx={3}
          body="Rotta AT. Asthma. In: Fuhrman BP, Zimmerman J, editors. Pediatric critical care. Philadelphia: Mosby; 2006. p. 588-607."
        />
        <Reference
          idx={4}
          body="Bohn D, Kissoon N. Acute asthma. Pediatr Crit Care Med. 2001;2:151-63."
        />
        <Reference
          idx={5}
          body="Darioli R, Perret C. Mechanical controlled hypoventilation in status asthmaticus. Am Rev Respir Dis. 1984;129:385-7."
        />
      </Section>
    </Routine>
  )
}
