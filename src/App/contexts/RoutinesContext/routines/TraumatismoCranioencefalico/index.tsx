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

export default function TraumatismoCraniocenfalico(): JSX.Element {
  return (
    <Routine
      id="traumatismo-craniocenfalico"
      name="Traumatismo Cranioencefálico"
      categories={['emergencia', 'neurologia']}
      authors={['manuela']}
      tags={['TCE', 'craniano']}
    >
      <Section title="Introdução">
        <P>
          Os traumatismos cranioencefálicos (TCE) são frequentes e
          potencialmente graves na infância, no entanto, a sua real incidência é
          difícil de apurar. Cerca de 75% a 90% dos TCE observados em um pronto
          socorro pediátrico são leves, ou seja, com escala de coma de Glasgow
          (ECG) igual ou superior a 14. Nos TCE leves, as taxas de
          morbimortalidade são geralmente baixas, ao contrário dos casos de
          morte e sequelas que ocorrem com maior frequência nos TCE moderados ou
          graves.
        </P>
        <P>
          A maioria dos pacientes pediátricos com TCE leve podem ser liberados
          após um breve período de observação clínica. No entanto, uma pequena
          parcela destes pacientes (cerca de 0,5%) pode apresentar deterioração
          neurológica e necessidade de intervenção cirúrgica. O tratamento
          cirúrgico precoce dos hematomas intracranianos é fundamental para uma
          boa evolução, sendo a tomografia computadorizada (TC) de crânio o
          exame de escolha para a detecção das patologias intracranianas
          traumáticas.
        </P>
        <P>
          A incidência de lesões intracranianas no TCE leve é muito baixa,
          principalmente lesões que necessitem de intervenção cirúrgica urgente.
          Além disso, a radiação ionizante tem conhecidamente efeitos deletérios
          e cumulativos, com risco aumentado de neoplasias, atraso do
          desenvolvimento e distúrbios endocrinológicos. Desta forma, a
          indicação dos exames de neuroimagem deve ser criteriosa.
        </P>
      </Section>
      <Section title="Diagnóstico Clínico">
        <P>
          Todo paciente vítima de TCE deve ser avaliado em até 15 minutos após a
          entrada na emergência. A avaliação inicial consistirá na anamnese
          (mecanismo do trauma e sintomas pós-trauma) e no exame físico.
        </P>
        <Subsection title="Mecanismo do Trauma">
          <List>
            <LItem>Atropelamento;</LItem>
            <LItem>
              Queda: altura, local, possibilidade de amortecimento da queda,
              posição na queda;
            </LItem>
            <LItem>
              Veículo envolvido e velocidade (carro, bicicleta, patins) e uso de
              dispositivos de segurança (cinto, capacete,{' '}
              <Italic>airbag</Italic>);
            </LItem>
            <LItem>
              Corrida contra objeto estacionado e a natureza deste objeto;
            </LItem>
            <LItem>
              Características do objeto lançado contra a cabeça: bola, objeto
              metálico, objeto pesado;
            </LItem>
            <LItem>Outros mecanismos.</LItem>
          </List>
        </Subsection>
        <Subsection title="Mecanismos de Trauma Grave">
          <List>
            <LItem>Ejeção do carro;</LItem>
            <LItem>
              Acidente automobilístico com morte de um dos passageiros;
            </LItem>
            <LItem>Capotamento;</LItem>
            <LItem>Atropelamento de pedestre ou ciclista sem capacete;</LItem>
            <LItem>
              Quedas de mais de 0,9m (&lt; 2 anos) e mais de 1,5m (≥ 2 anos);
            </LItem>
            <LItem>Trauma ocasionado por objeto de alto impacto.</LItem>
          </List>
        </Subsection>
        <Subsection title="Sintomas Pós-Trauma">
          <List>
            <LItem>Amnésia: duração;</LItem>
            <LItem>
              Perda de consciência: &lt; 5 segundos, 5 – 60 segundos, 1 – 5
              minutos, &gt; 5 minutos;
            </LItem>
            <LItem>
              Crises epilépticas pós-trauma: tipo, tempo de início após o
              trauma, duração;
            </LItem>
            <LItem>
              Cefaleia: intensidade, início do sintoma, duração, localização;
            </LItem>
            <LItem>Vômitos: número de episódios, momento após o trauma;</LItem>
            <LItem>
              Náuseas ou vertigem: duração, persistência, intensidade;
            </LItem>
            <LItem>Comportamento comparado ao habitual.</LItem>
          </List>
        </Subsection>
        <Subsection title="Exame Físico">
          <List>
            <LItem>
              Escala de coma de Glasgow (adaptada para a faixa etária
              pediátrica);
            </LItem>
            <LItem>
              Sinais de alteração do estado mental: agitação, sonolência,
              questionamento repetitivo, respostas lentificadas;
            </LItem>
            <LItem>Abaulamento de fontanela;</LItem>
            <LItem>
              Sinais de fratura de base de crânio: hematoma retroauricular
              (Sinal de Battle), hematoma periorbitário (Sinal de Guaxinin),
              hemotímpano, perda de líquor otorreia / rinorreia;
            </LItem>
            <LItem>Fratura de crânio palpável;</LItem>
            <LItem>Hematoma subgaleal: local, tamanho;</LItem>
            <LItem>Déficit neurológico: força e sensibilidade;</LItem>
            <LItem>
              Sinais de intoxicação: álcool, medicações, drogas ilícitas.
            </LItem>
          </List>
          <Table
            colWidths={[100, 100, 100, 100]}
            header={['', 'Escolar', 'Pontos', 'Lactente']}
            data={[
              [
                'Abertura ocular',
                'Espontânea\nCom a fala\nÀ dor\nAusente',
                '4\n3\n2\n1',
                'Espontânea\nCom a fala\nÀ dor\nAusente'
              ],
              [
                'Resposta verbal',
                'Orientada\nConfusa\nInapropriada\nSons Incompreesíveis\nAusente',
                '15\n4\n3\n2\n1',
                'Balbucio\nChoro Irritado\nChoro à dor\nGeme à dor\nAusente'
              ],
              [
                'Resposta motora',
                'Obedece a comandos\nLocaliza a dor\nRetira à dor\nFlexão anormal\nExtensão anormal\nAusente',
                '6\n5\n4\n3\n2\n1',
                'Movimentos espontâneos normais\nRetira ao toque\nRetira à dor\nFlexão anormal\nExtensão anormal\nAusente'
              ]
            ]}
            title="Escala de Coma de Glascow - Pediatria"
          />
        </Subsection>
      </Section>
      <Section title="Examples Complementares">
        <P>
          Todos os pacientes com TCE moderado ou grave (ECG &lt;= 13 e perda de
          consciência &gt; 30 minutos, além dos mecanismos já descritos
          anteriormente) devem ser conduzidos como politraumatizados por equipe
          especializada e têm indicação de realizar TC de crânio.
        </P>
        <P>
          O Colégio Brasileiro de Cirurgiões, após análise criteriosa de
          algoritmos para indicação de TC de crânio em pacientes pediátricos com
          TCE leve, indica o protocolo proposto pelo estudo PECARN, por ser de
          simples utilização, além de validado com uma amostra grande de
          pacientes com TCE leve.
        </P>
        <P>
          Para a estratificação de risco, os pacientes são divididos
          inicialmente de acordo com a faixa etária em menores e maiores que 2
          anos de idade. Nos pacientes com risco moderado, a decisão entre
          realizar a TC de crânio ou permanecer em observação por um período
          maior (4 a 6 horas) será determinada pela experiência do médico,
          outras questões clínicas associadas (como doenças prévias), piora dos
          sintomas na evolução, idade &lt; 3 meses ou preferência dos pais.
        </P>
        <P>
          <Bold>
            Não há indicação da realização de radiografia de crânio no TCE.
          </Bold>
        </P>
        <Table
          colWidths={[200, 200]}
          header={[
            'Crianças com idade < 2 anos',
            'Crianças com idade ≥ 2 anos'
          ]}
          data={[
            ['ECG ≤ 14', 'ECG ≤ 14'],
            [
              'Alterações do nível de consciência',
              'Alterações do nível de consciência'
            ],
            [
              'Fratura de crânio palpável',
              'Sinais de fratura de base de crânio'
            ]
          ]}
          title="Algoritmo de decisão para trauma craniano leve - PECARN"
          caption="Risco alto de lesões intracranianas: TC de crânio"
        />
        <Table
          colWidths={[200, 200]}
          header={[
            'Crianças com idade < 2 anos',
            'Crianças com idade ≥ 2 anos'
          ]}
          data={[
            [
              'Hematoma subgaleal parietal, temporal ou occipital',
              'Perda de consciência'
            ],
            ['Perda de consciência > 5 segundos', 'Vômitos'],
            [
              'Mecanismo de trauma importante',
              'Mecanismo de trauma importante'
            ],
            ['Mudança de comportamento segundos os pais', 'Cefaléia importante']
          ]}
          caption="Risco moderado de lesões intracranianas: TC de crânio ou observação"
        />
      </Section>
      <Section title="Critérios de Alta Hospitalar">
        <List>
          <LItem>
            Pacientes de baixo risco para lesões intracranianas, ou seja, que
            não preencham os critérios acima descritos, podem receber alta
            hospitalar com orientações para observação domiciliar e retorno se
            sinais de alarme;
          </LItem>
          <LItem>
            Pacientes de risco moderado / alto, submetidos a TC de crânio normal
            devem permanecer em observação por 4-6 horas, com anotação dos
            sinais vitais e estado neurológico (FC, PA, ECG, diâmetro e reflexo
            pupilar), pelo menos a cada 30 minutos nas primeiras 2 horas, a cada
            hora até 4 horas e a cada 2 horas após. Alta de após este período se
            apresentar ECG = 15.
          </LItem>
        </List>
      </Section>
      <Section title="Critérios de internação e avaliação do especialista">
        <List>
          <LItem>Pacientes com alteração na TC de crânio;</LItem>
          <LItem>
            Paciente que não apresenta ECG = 15 após realização da TC de crânio,
            independente do resultado do exame;
          </LItem>
          <LItem>
            Paciente com indicação de realizar a TC de crânio, mas que não tenha
            realizado por qualquer condição (indisponibilidade, agitação) deve
            permanecer em observação por pelo menos 12 horas;
          </LItem>
          <LItem>
            Persistência dos sinais de alerta – vômitos, cefaleia intensa e
            refrataria, rebaixamento do nível de consciência;
          </LItem>
          <LItem>
            Piora importante da cefaleia durante o período de observação;
          </LItem>
          <LItem>
            Outras condições clínicas como alteração da coagulação, intoxicação,
            suspeita de maus tratos, outras lesões.
          </LItem>
        </List>
      </Section>
      <Section title="Complicações Mais Frequentes">
        <P>
          Rebaixamento do nível de consciência ou agitação secundários a
          hipertensão intracraniana por edema cerebral ou hematoma.
        </P>
      </Section>
      <Section title="Observações">
        <P>
          Embora haja um risco baixo, lesões encefálicas podem ocorrer em
          pacientes de baixo risco. Por isso, todo paciente atendido após TCE
          deve receber orientações, de preferência por escrito, das instruções
          que devem ser seguidas após a alta.
        </P>
        <P>
          Importante ressaltar ao responsável que as primeiras 48 horas são
          consideradas as mais críticas e que, durante este período, a criança
          deve permanecer acompanhada de um adulto capaz de auxiliá-la e levá-la
          ao hospital em caso de piora do quadro clínico.
        </P>
        <P>
          Nas primeiras 24 horas, é recomendado que alguém verifique se a
          criança está bem a cada 3-4 horas.
        </P>
        <P>
          Prescrever analgesia com analgésicos comuns ou AINES (dipirona,
          paracetamol, ibuprofeno), caso necessário. Evitar uso de opioides.
          Nunca prescrever medicações que possam alterar o nível de consciência
          (ex. antieméticos, antialérgicos).
        </P>
        <P>
          Indicar o afastamento de atividades esportivas por pelo menos 48
          horas.
        </P>
        <P>Indicar retornar ao pronto socorro em casos de:</P>
        <List>
          <LItem>Perda de consciência, desmaios ou sonolência excessiva;</LItem>
          <LItem>Alteração do tamanho ou discrepância entre as pupilas;</LItem>
          <LItem>Abaulamento da fontanela;</LItem>
          <LItem>
            Dor de cabeça forte e persistente, apesar do uso de analgésicos;
          </LItem>
          <LItem>Irritabilidade excessiva ou recusa das mamadas;</LItem>
          <LItem>
            Fraqueza nos membros, sensação de formigamento ou adormecimentos de
            partes do corpo;
          </LItem>
          <LItem>Náuseas ou vômitos persistentes (&gt; 2 episódios);</LItem>
          <LItem>
            Perda de memória ou não conseguir reconhecer pessoas / lugares;
          </LItem>
          <LItem>
            Mudança de comportamento, como falar coisas sem sentido ou agir de
            forma estranha / inadequada;
          </LItem>
          <LItem>
            Diminuição da atividade normal da criança, apesar dos estímulos;
          </LItem>
          <LItem>Alteração visual ou fala incompreensível;</LItem>
          <LItem>Crises epilépticas;</LItem>
          <LItem>Alteração do equilíbrio ou tontura;</LItem>
          <LItem>Sangramento nasal ou pela orelha.</LItem>
        </List>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Lumba-Brown A, Yeates KO, Sarmiento K, et al. Centers for Disease Control and Prevention Guideline on the Diagnosis and Management of Mild Traumatic Brain Injury Among Children. JAMA Pediatr. 2018 Sep 4:e182853."
        />
        <Reference
          idx={2}
          body="Kuppermann N, Holmes JF, Dayan PS, et al. Identification of children at very low risk of clinically-important brain injuries after head trauma: a prospective cohort study. Lancet. 2009;374:1160-70."
        />
        <Reference
          idx={3}
          body="Brenner DJ, Hall EJ. Computed tomography - An increasing source of radiation exposure. N Engl J Med. 2007;357: 2277-84."
        />
        <Reference
          idx={4}
          body="Haydel MJ, Preston CA, Mills TJ, et al. Indications for computed tomography in patients with minor head injury. N Engl J Med. 2000;343:100-5."
        />
        <Reference
          idx={5}
          body="Dunning J, Daly JP, Malhotra R, et al. The implications of NICE guidelines on the management of children presenting with head injury. Arch Dis Child. 2004;89:763-7."
        />
        <Reference
          idx={6}
          body="Ghizoni T, Fraga A, et al. Indications for head computed tomography in children with mild traumatic brain injury. Rev. Col. Bras. Cir. 2013; 40(6): 515-519."
        />
        <Reference
          idx={7}
          body="Matias J1, Almeida S, et al. The Experience of a Protocol for the Management of Pediatric Minor Head Injury: A Three Years Longitudinal Study. Acta Med Port. 2017 Oct 31;30(10):704-712."
        />
      </Section>
    </Routine>
  )
}
