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

export default function DisturbioMetabolico(): JSX.Element {
  return (
    <Routine
      id="disturbio-metabolico"
      name="Distúrbio Metabólico"
      category="neonatologia"
      authors={['fabricio']}
      tags={[
        'metabolismo',
        'hematúria',
        'litíase',
        'renal',
        'cólica',
        'nefrética',
        'sangramento',
        'urinário',
        'pedra',
        'rins'
      ]}
    >
      <Section title="Aspectos Gerais e Fisiopatogenia">
        <P>
          A rotina aborda distúrbio metabólico, litíase renal e cólica
          nefrética.
        </P>
        <P>
          No Brasil, a verdadeira incidência do distúrbio metabólico (DM) e da
          nefrolitíase no grupo pediátrico ainda permanece desconhecida. O
          crescente entendimento da fisiopatologia dos cálculos tem permitido
          conhecer um pouco do mecanismo de sua formação, possibilitando
          intervenções farmacológicas e dietéticas eficazes. A formação de
          cálculos nos rins e nas vias urinárias depende de cristais e da matriz
          esquelética. Fatores epidemiológicos – gênero, idade, raça, dietéticos
          (hábitos alimentares), ambientais, clima, genéticos, anatômicos,
          metabólicos (hiper e hipoexcreções de elementos na urina) e
          infecciosos (infecções e alterações anatômicas do trato urinário)
          contribuem para a litogênese. Esses fatores, aliados a alterações
          físico-químicas e fisiológicas na urina, alteram os elementos
          promotores e inibidores da agregação e do crescimento dos cristais,
          culminando com a formação de cálculos. A hipercalciúria, a
          hiperuricosúria e a hipocitratúria idiopáticas correspondem a mais de
          95% dos DMs da infância.
        </P>
      </Section>
      <Section title="Hipercalciúria Idiopática (HCa)">
        <P>
          Significa hiperexcreção urinária de cálcio na ausência de estados
          hipercalcêmicos ou de qualquer outra enfermidade primária. A HCa é a
          principal causa relacionada à calculose urinária na infância (10 a
          80%) e responde por até 35% das causas de hematúria. É definida como
          excreção urinária de cálcio igual ou acima de 4 mg/kg/24horas para
          qualquer sexo ou faixa etária. Abaixo de 2 anos de idade usamos a
          relação Ca/Creatinina em amostra isolada de urina. Idealmente, o
          diagnóstico deve se basear em coleta de urina de 24h, em até 3
          coletas, se necessário.
        </P>
        <Table
          colWidths={[100, 100]}
          header={['Idade', 'UCa/UCr (mg / mg)']}
          data={[
            ['0 a 6 meses', '< 0,8'],
            ['6 a 12 meses', '< 0,6'],
            ['> 2 anos', '< 0,2']
          ]}
        />
      </Section>
      <Section title="Hiperuricosúria Idiopática (HU)">
        <P>
          Significa hiperexcreção urinária de ácido úrico na urina. É o segundo
          DM mais frequente (5 a 25%). É decorrente da elevada produção endógena
          desse ácido e/ou excessiva ingestão de alimentos ricos em purinas.
          Cristais de ácido úrico podem agir como núcleo heterogêneo para
          promover cristalização de sais de cálcio ou podem precipitar a
          formação de cálculo puro de ácido úrico. O diagnóstico também deve se
          basear em coleta de urina de 24h, em até 3 coletas, se necessário.
        </P>
        <Table
          colWidths={[100, 200]}
          header={['Idade', 'Ácido Úrico (mg/Kg/24h)']}
          data={[
            ['Pré-Escolar', '< 15'],
            ['Escolar', '< 11'],
            ['Adolescente', '< 9']
          ]}
        />
        <P>
          Outro critério utilizado é a excreção de ácido úrico em urina de
          amostra única matinal colhida com jejum, corrigida pelo clearance de
          creatinina, segundo a fórmula:
        </P>
        <P>Eau = Uau x Scr x Ucr</P>
        <P>Em que:</P>
        <List>
          <LItem>Eau = excreção urinária de ácido úrico em mg/dl;</LItem>
          <LItem>Uau = concentração de ácido úrico na urina em mg/dl;</LItem>
          <LItem>Scr = concentração de creatinina sérica em mg/dl;</LItem>
          <LItem>Ucr = concentração de creatinina na urina em mg/dl;</LItem>
        </List>
        <P>
          Valores maiores ou iguais a 0,56, para qualquer faixa etária, são
          considerados hiperexcreção de ácido úrico. Para a relação ácido úrico
          (mg/dL)/creatinina (mg/dL) os valores maiores que 0,65 são
          considerados hiperexcreção.
        </P>
      </Section>
      <Section title="Hipocitratúria (HC)">
        <P>
          O citrato é um importante inibidor da cristalização urinária,
          particularmente dos cristais de cálcio. É definida como uma excreção
          de citrato em urina de 24 horas {'<'} 400 mg/g de creatinina. Na urina
          de amostra única, podem ser utilizados os seguintes valores de
          normalidade para excreção de citrato relacionado à creatinina, se o
          paciente não possui controle esfincteriano vesical diurno e noturno:
        </P>
        <P>
          Citrato/creatinina (mmol/L): {'<'} 0,28 (corrigido pela creatinina) ou
        </P>
        <P>
          Urina amostra única (mg/L): 100ml RFG {'<'} 0,18 (corrigido pelo Ritmo
          de Filtração Glomerular)
        </P>
        <P>
          Quadro clínico: depende da localização/mobilização do cálculo. Na
          criança, o quadro clínico é inespecífico e, frequentemente, confunde o
          diagnóstico. É mais comum a dor abdominal com hematúria ou hematúria
          isolada como apresentação clínica desses pacientes. A cólica nefrética
          clássica ocorre em torno de 10% a 20% dos casos, com dor abdominal /
          lombar intensa, hematúria macroscópica, com ou sem sintomas urinários
          baixos. Sintomas gerais – como náuseas, vômitos, dor abdominal
          inespecífica, anorexia e mal-estar – podem estar presentes, assim como
          infecção do trato urinário.
        </P>
      </Section>
      <Section title="Exames Complementares">
        <P>
          Ainda na emergência: HC, uréia, creatinina, Urina 1, Urocultura, Raio
          X de abdome, US renal e vias urinárias*, TC helicoidal de rins e vias
          urinárias.*
        </P>
        <P>
          *Exames realizáveis, de acordo com cada caso, ainda na emergência.
        </P>
        <P>
          Na enfermaria ou ambulatório: urina de 24h para dosagem de cálcio,
          ácido úrico e citrato, e, avaliando caso a caso, Urografia excretora,
          Cintilografia renal, Cistoscopia.
        </P>
        <Subsection title="Tratamento">
          <Subsubsection title="Fase Aguda - Cólica Nefrética">
            <List>
              <LItem>Internação;</LItem>
              <LItem>
                Hidratação venosa adequada, com soro fisiológico ou
                glicofisiológico;
              </LItem>
              <LItem>
                Controle da DOR: anti-espasmódico (Hioscina 0,5mg/Kg/dose, IV, a
                cada 6 a 8h, máximo de 20 mg/dose), associado à analgésico
                (Dipirona 15mg/Kg/dose, a cada 4 a 6h) e anti-inflamatório
                (Diclofenaco de sódio 2 a 3 mg/Kg/dia, a cada 8 a 12h, máximo de
                150 mg/dia ou Tenoxicam 20 a 40 mg/dia, a cada 12 a 24h ).
              </LItem>
              <LItem>
                Controle dos vômitos: ondansetrona, na dose de 0,15 mg/Kg/dose,
                a cada 6 a 8h, máximo de 4 mg/dose se criança até 12 anos. Se{' '}
                {'>'}12 anos, máximo de 8 mg/dose. Antibioticoterapia: quando
                houver associação com ITU.
              </LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Fase de Manutenção">
            <P>
              Hidratação: ingesta hídrica de 20 a 30 ml/Kg/dia (máximo de 3
              litros/dia), para diluir a concentração de substâncias litogênicas
              na urina.
            </P>
            <P>
              Dieta: orienta-se uma dieta saudável e equilibrada, com redução
              dos excessos de:
            </P>
            <List>
              <LItem>
                Sódio (sal), pois leva ao aumento da excreção urinária de
                cálcio;
              </LItem>
              <LItem>
                Acúcares e Gorduras, por aumentarem a incidência de
                hipercalciúria e hiperoxalúria;
              </LItem>
              <LItem>
                Proteínas, por aumentarem a excreção urinária de cálcio, ácido
                úrico e ácido oxálico
              </LItem>
            </List>
            <P>
              Exercícios físicos: devem ser regulares, uma vez que o
              sedentarismo aumenta a incidência de cálculos.
            </P>
          </Subsubsection>
        </Subsection>
      </Section>
      <Section title="Citrato de Potássio (CP)">
        <P>
          É amplamente utilizado no tratamento e também é muito efetivo na
          prevenção da litíase renal causada por HCa, HU e HC. Ele alcaliniza o
          pH da urina, induzindo a dissolução dos cálculos de ácido úrico e
          promove modificações na bioquímica e físico-química urinárias,
          reduzindo a tendência de cristalização dos sais de cálcio e de ácido
          úrico. O CP é manipulado na forma de xarope ou em cápsulas e a dose
          recomendada é de 0,5 a 1,0 mEq/Kg/dia (pode chegar até 4 mEq/Kg/dia
          nos casos de HU), VO, dividida em 2 ou 3 tomadas.
        </P>
      </Section>
      <Section title="Hidroclorotiazida">
        <P>
          É indicado nos casos onde as medidas conservadoras não foram
          suficientes para reduzir os quadros de hematúria macroscópica com idas
          à Emergência por crises agudas de cólica nefrética. Na dose de 1 a 2
          mg/Kg/dia, VO, dividido em 2 doses diárias, máximo de 200 mg/dia, é o
          tratamento de escolha para HCa, por sua capacidade de reduzir o cálcio
          urinário. Todos esses pacientes devem fazer rigoroso seguimento
          ambulatorial. Apresentação em comprimidos de 25 e de 50 mg.
        </P>
      </Section>
      <Section title="Alopurinol">
        <P>
          É indicado apenas nos casos onde as medidas dietéticas não foram
          suficientes para reduzir as crises agudas de cólica nefrética e/ou de
          hematúria macroscópica. Na dose de 10 mg/Kg/dia, em 3 ou 4 tomadas
          diárias, máximo de 800 mg/dia, é o tratamento de escolha para HU, por
          sua capacidade de alcalinizar a urina, prevenindo a formação de
          cálculos puros de ácido úrico. Todos esses pacientes devem fazer
          rigoroso seguimento ambulatorial. Apresentação em comprimidos de 100 e
          de 300 mg.
        </P>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Peres LAB e col. Nefrolitíase em pacientes pediátricos: investigação metabólica e anatômica. J Bras Nefrol 2011;33(1):50-54."
        />
        <Reference
          idx={2}
          body="Amancio L e col. Urolitíase pediátrica: experiência de um hospital infantil de cuidados terciários. J Bras Nefrol 2016;38(1):90-98."
        />
        <Reference
          idx={3}
          body="Toporovski Julio (coord.). Nefrologia Pediátrica.2.ed. Rio de Janeiro: Guanabara Koogan, 2006."
        />
        <Reference
          idx={4}
          body="Andrade MC. Nefrologia para pediatras. 1.ed. São Paulo: Atheneu, 2010."
        />
        <Reference
          idx={5}
          body="Garrone GO, Ortiz V, Ambrogini C. Litíase urinária em criança. Projeto Diretrizes, Sociedade Brasileira de Urologia, 2006."
        />
      </Section>
    </Routine>
  )
}
