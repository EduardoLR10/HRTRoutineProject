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

export default function DisturbiosEletroliticos(): JSX.Element {
  return (
    <Routine
      id="disturbios-eletroliticos"
      name="Distúrbios Eletrolíticos"
      category="emergencia"
      authors={['francisco']}
      tags={[
        'sódio',
        'potássio',
        'hipopotassemia',
        'hiponatremia',
        'hiperpotassemia',
        'hipernatremia'
      ]}
    >
      <Section title="Introdução">
        <P>
          Os desequilíbrios eletrolíticos são alterações encontradas com
          frequência nas emergências e podem ser fatais se não corrigidos
          adequadamente. Os distúrbios podem ocorrer isoladamente, o que
          facilitaria o tratamento, porém cuidados especiais devem ser dados aos
          pacientes com distúrbios mistos, insuficiência cardíaca, arritmias
          cardíacas, insuficiência renal, hepatopatias, grandes queimados,
          sepses, cetoacidose diabética e pacientes pós quimioterapias. As
          causas iatrogênicas também acontecem com frequência.
        </P>
      </Section>
      <Section title="Distúrbios do Sódio">
        <P>
          O sódio é o principal cátion extracelular, responsável pelo controle
          da osmolaridade sanguínea, e seu valor sérico normal é entre 135 a 145
          mEq/L.
        </P>
        <Subsection title="Hiponatremia">
          <P>
            É quando a concentração sérica de sódio está abaixo de 135 mEq/L, é
            o distúrbio eletrolítico mais comum e está relacionado com o aumento
            da mortalidade. De acordo com a velocidade de instalação da
            hiponatremia e a intensidade da mesma, os sintomas podem ser mais
            intensos e preocupantes, sendo assim, as hiponatremias crônicas são
            menos sintomáticas pois há uma adaptação cerebral. São considerados
            emergências os casos de instalação aguda ({'<'} 48h) e graves ({'<'}{' '}
            125 mEq/L).
          </P>
          <P>
            Os sintomas mais comuns vão surgir em situações de Na {'<'} 130
            mEq/L e são: náuseas e vômitos, letargia, cefaleia, desorientação,
            convulsão e coma.
          </P>
          <P>
            Na avaliação da hiponatremia deve ser considerado diversos fatores,
            como a velocidade de instalação, severidade, sintomatologia,
            osmolaridade e diagnóstico etiológico.
          </P>
          <P>
            As hiponatremias devem ser avaliadas juntamente com a volemia e o
            tratamento vai depender dessa avaliação em conjunto, pois em muitos
            casos, a hiponatremia não é verdadeira. Em situações de hiponatremia
            verdadeira, sempre haverá diminuição da osmolaridade.
          </P>
          <P>
            No cálculo da osmolaridade usa-se o sódio sérico, a glicemia e uréia
            séricas, segundo a fórmula:
          </P>
          <P>
            OSMOLARIDADE SÉRICA= 2 x Na + glicemia/18 + uréia/6 e o valor normal
            está entre 275 a 295mOsm/L.
          </P>
          <P>
            O objetivo da correção das hiponatremias é tratar a causa base e
            retirar dos níveis graves, portanto, em muitas vezes não será
            necessário infusão de sódio e sim, corrigir o que está levando ao
            distúrbio através do controle da volemia.
          </P>
          <P>
            Em situações onde há hipervolemia, devemos eliminar água livre e
            restringir a ingesta, outras vezes repor hormônios. Se houver
            hipovolemia, em muitas vezes conseguimos a correção com a reposição
            da volemia com NaCl 0,9%.
          </P>
          <P>
            Em situações onde realmente há a necessidade de infusão de sódio
            para aumentarmos seus níveis, preconiza-se a administração de NaCl a
            3%, com o objetivo de corrigir até 10 mEq/L/dia.
          </P>
          <P>Usa-se a seguinte fórmula para correção:</P>
          <P>
            Na a infundir = (Na desejado – Na encontrado) x 0,6 x Peso, onde o
            Na desejado deverá ser 130 ou 10 a mais que o encontrado, com o
            objetivo de não fazer grandes correções do sódio sérico e evitar a
            mielinólise pontina.
          </P>
        </Subsection>
        <Subsection title="Hipernatremia">
          <P>
            Hipernatremia é a concentração sérica de Na {'>'} 145mEq/L e ocorre
            pelo ganho excessivo de sódio ou perda de água livre, ou por
            associação dos dois mecanismos.
          </P>
          <P>
            As causas mais comuns são iatrogênicas (infusão endovenosa de
            solução hipertônica, ingestão excessiva de sódio), perda excessiva
            de água, diabetes insípido, falta de ingesta de água.
          </P>
          <P>
            Os sintomas mais comuns geralmente são vistos em concentrações {'>'}{' '}
            150mEq/L, iniciando com sede intensa, seguindo-se com anorexia,
            náuseas e vômitos. De acordo com o aumento do sódio sérico
            observa-se agitação e irritabilidade, letargia, sinais de irritação
            meníngea, hiperreflexia, convulsões e coma.
          </P>
          <P>
            O tratamento consiste em calcular o déficit de água livre e fazer a
            reposição com solução hipotônica, e, em alguns casos, eliminar o
            sódio.
          </P>
          <P>
            Caso haja desidratação, deve-se primeiramente, corrigi-la com
            solução isotônica de NaCl 0,9%, para depois calcular o déficit de
            água livre.
          </P>
          <P>
            A redução da concentração de sódio deve ser lenta, para evitar o
            edema cerebral secundário, não devendo ser mais rápida que 0,5
            mEq/L/hora.
          </P>
          <P>
            A solução deve ser com solução de isotônica (NaCl 0,9%) ou
            hipotônica (diluição de NaCl 0,9% com Solução de glicose a 5% 1:1).
          </P>
          <P>Para o cálculo de Déficit de água livre (DAL) usa-se a fórmula:</P>
          <P>DAL = (Na encontrado – 150)/150 x 0,6 x Peso</P>
          <P>
            Em situações de grande aumento (Na {'>'} 170mEq/L) usa-se apenas SG
            5% e usa a fórmula:
          </P>
          <P>DAL = (Na encontrado – 170)/170 x 0,6 x Peso.</P>
          <P>Em todas as situações deve-se vigiar o possível edema cerebral.</P>
        </Subsection>
      </Section>
      <Section title="Distúrbios do Potássio">
        <P>
          O potássio é o principal cátion intracelular e seu valor sérico normal
          está entre 3,5 a 5 mEq/L. O potássio sérico tem grande relação com o
          controle ácido-base devido a troca pela membrana celular e ainda com a
          ingestão e eliminação renal ou perda gastrointestinal.
        </P>
        <Subsection title="Hiperpotassemia">
          <P>
            Definida como concentração sérica de K {'>'} 5,5 mEq/L, tem como
            causas mais comuns a acidemia, iatrogênica (ingesta ou infusão
            venosa aumentada), insuficiência renal, intoxicação por drogas.
          </P>
          <P>
            Os sintomas variam de acordo com o grau de aumento do potássio
            sérico, causando alterações neuromusculares (fraqueza, parestesias,
            hiperreflexia) e alterações cardíacas (somente alterações
            eletrocardiográficas ou mesmo clínicas – fibrilação ventricular e
            parada ventricular).
          </P>
          <P>
            As alterações eletrocardiográficas geralmente aparecem em níveis
            maiores que 6,5 mEq/L, iniciando com ondas T estreitas e apiculadas,
            encurtamento do intervalo QT, seguindo de alargamento do complexo
            QRS e diminuição da amplitude de onda P, e depois fibrilação
            ventricular e parada ventricular.
          </P>
          <P>
            O tratamento consiste em melhorar a distribuição do íon restaurando
            o gradiente celular (controle do distúrbio ácido-base), estabilizar
            a membrana cardíaca e remover o potássio do organismo quando
            necessário usando resina de troca ou até mesmo diálise.
          </P>
          <Table
            colWidths={[150, 200, 200]}
            header={['Nível Sérico', 'Medicação', 'Dose']}
            data={[
              [
                '5,5 a 6,5 mEq/L',
                'ECG normal = suspensão do K\nECG alterado = resina de troca',
                'Sorcal: 0,5 a 1 g/Kg VO/VR 4 a 6 vezes ao dia'
              ],
              [
                '6,5 a 7,5 mEq/L',
                'Iniciar solução glicose e insulina ou bicarbonato de sódio',
                'Glicose: 0,5 a 1 g/Kg IV e insulina 1 unidade/4g glicose\nNaHCO3 - 1 a 2 mEq/Kg IV'
              ],
              [
                '> que 7,5 mEq/L',
                'Iniciar gluconato de cálcio',
                'Gluconato de Cálcio a 10%: 0,5 a 1 ml/kg IV em 5 minutos'
              ]
            ]}
          />
        </Subsection>
        <Subsection title="Hipopotassemia">
          <P>
            Definida como concentração sérica {'<'} 3,5mEq/L, tem como causas
            mais comuns a alcalemia, perdas renais e gastrointestinais e
            iatrogênicas (baixa ingesta ou baixa infusão IV).
          </P>
          <P>
            Sintomas variam de acordo com o grau da hipopotassemia, causando
            fraqueza muscular, hiporreflexia, distensão abdominal, náuseas e
            vômitos, aumento da diurese, íleo paralítico, e alterações cardíacas
            (alterações ECG e clínicas – arritmias e assistolia).
          </P>
          <P>
            As alterações eletrocardiográficas geralmente surgem em níveis {'<'}{' '}
            que 2,5mEq/L e são mais intensas quanto menor a concentração sérica
            de K, iniciam com achatamento da onda T e inversão da mesma,
            extrassístoles com depressão do segmento ST, aumento da amplitude da
            onda P, bloqueios atrioventriculares, parada ventricular.
          </P>
          <P>
            O tratamento consiste em repor o íon e diminuir a perda se
            necessário.
          </P>
          <P>
            Se não houver alterações eletrocardiográficas, a reposição oral pode
            ser feita com xarope de KCl 6% ou em infusões aumentadas em
            hidratação de manutenção.
          </P>
          <P>
            Se houver alterações eletrocardiográficas ou K {'<'} 2,0 mEq/L,
            fazer infusão de potássio em velocidade de 0,3 a 0,5 mEq/kg/h
            durante 2 a 5 horas em solução com concentração de 40 a 50 mEq/l, em
            condições especiais pode chegar a concentração máxima de 80 mEq/L.
          </P>
        </Subsection>
      </Section>
      <Section title="Distúrbios do Cálcio">
        <P>
          A concentração sérica do cálcio varia de 9 a 11mg/dl (4,5 a 5,5mEq/L)
          e suas ações neuromusculares dependem de interações com outros íons,
          principalmente magnésio e potássio.
        </P>
        <Subsection title="Hipocalcemia">
          <P>
            Ocorre quando o cálcio está {'<'} 9mg/dl ou cálcio iônico {'<'}{' '}
            3,5mg/dl, tem como causas mais comuns a prematuridade (acometendo o
            RN), diminuição de Mg e hipoparatireoidismo, raquitismo, uso
            prolongado de corticóide, apresentando sintomas geralmente em
            valores inferiores a 7mg/dl (iônico {'<'} 2,5mg/dl) que consistem
            basicamente em alterações neuromusculares (hipotonias, tremores,
            espasmos, convulsões generalizadas) e cardíacas (bradicardia,
            bloqueios).
          </P>
          <P>
            O tratamento, sempre que possível será por via oral, gluconato de
            cálcio 10% na dose de 2 a 4ml/kg/dia ou cálcio elementar na dose de
            300 a 500mg/kg/dia fracionada em 4 doses.
          </P>
          <P>
            Em casos de urgência/emergência ou na impossibilidade de usar a via
            oral, utilizar gluconato de cálcio 10% - 2ml/kg/dose IV em infusão
            lenta (em 5 minutos), atentando para alterações cardíacas.
          </P>
          <P>
            Deve-se tratar a causa base e os distúrbios associados quando
            existirem.
          </P>
        </Subsection>
        <Subsection title="Hipercalcemia">
          <P>
            Distúrbio pouco comum, considerado quando Ca {'>'} 11mg/dl (iônico{' '}
            {'>'} 5mg/dl), mais preocupante quando o Ca {'>'} 15mg/dl.
          </P>
          <P>As causas variam de acordo com a idade:</P>
          <List>
            <LItem>
              Neonatal: Hipoparatireoidismo materno, Necrose gordurosa
              subcutânea
            </LItem>
            <LItem>
              Após o período neonatal: hiperparatireoidismo primário,
              hipervitaminose D, imobilização prolongada, neoplasias, doença
              granulomatosa.
            </LItem>
          </List>
          <P>
            Geralmente é assintomático ou oligossintomático, com cefaleia,
            fraqueza, náuseas e vômitos. Na crise hipercalcêmica podem ocorrer
            bradicardia e arritmias, dores ósseas, letargia e coma. Pode haver
            também nefrocalcinose e pancreatite.
          </P>
          <P>
            O tratamento consiste em tratar a doença de base, diuréticos,
            hidrocortisona e diálise em situações graves.
          </P>
        </Subsection>
      </Section>
      <Section title="Distúrbios de Magnésio">
        <P>
          São pouco comuns, o Mg é considerado normal quando a concentração
          sérica está entre 1,5 a 2mEq/l.
        </P>
        <Subsection title="Hipomagnesemia">
          <P>
            Ocorre quando o magnésio atinge níveis abaixo de 1,4mEq/L e
            geralmente apresenta sintomas quando {'<'} 1,0mEq/L e, habitualmente
            são alterações cardíacas.
          </P>
          <P>
            As causas podem ser: diarreia crônica, fístulas intestinais,
            hipervitaminose D, insuficiência renal crônica, hiperaldosteronismo,
            hipoparatireoidismo, queimadura extensa.
          </P>
          <P>
            O tratamento, se <Bold>assintomático</Bold>, é feito por via oral
            com aumento da ingesta e acréscimo na dieta de preparações de
            hidróxido de magnésio; se for
            <Bold>sintomático</Bold> é feito com a reposição parenteral com
            Sulfato de Mg 50% - 0,2ml/kg IM.
          </P>
        </Subsection>
        <Subsection title="Hipermagnesemia">
          <P>
            Considerado quando níveis {'>'} 2mEq/L. As causas podem ser
            iatrogênicas (enema de sulfato de Mg), medicação oral com Mg, RN de
            mães com eclâmpsia que foram tratadas com Sulfato de Mg,
            insuficiência renal, doença de Addison, hipotireoidismo.
          </P>
          <P>
            Geralmente é sintomático quando Mg {'>'} 4mEq/L, podendo apresentar
            hiporreflexia, depressão respiratória, sonolência, coma, hipotensão,
            bradicardia.
          </P>
          <P>
            O tratamento consiste em tratar a causa base, suprimir a oferta de
            Mg e aumentar sua eliminação, com a administração de diurético
            (furosemida) e diálise nas situações graves e refratárias. Também
            podem ser usadas soluções salinas e gluconato de cálcio IV.
          </P>
        </Subsection>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Delgado AF, Kimura HM, Troster EJ. Pediatria – Instituto da Criança Hospital das Clínicas - Terapia Intensiva. 1a Edição. São Paulo: Editora Manole; 2010. p.185-192."
        />
        <Reference
          idx={2}
          body="Piva JP, Garcia PCR. Medicina Intensiva em Pediatria. 2a Edição. São Paulo: Editora Revinter; 2014."
        />
        <Reference
          idx={3}
          body="Stape A, Troster EJ, Kimura HM. Terapia Intensiva Pediátrica. 1a Edição. São Paulo: Editora Sarvier; 1998."
        />
        <Reference
          idx={4}
          body="Dutra VF, Tallo FS, Rodrigues FT, Vendrame LS, Lopes RD, Lopes AC. "
        />
        <Reference
          idx={5}
          body="Desequilíbrios hidroeletrolíticos na sala de emergência. Rev Bras Clin Med São Paulo. 2012 set-out;10(5):410-9."
        />
        <Reference
          idx={6}
          body="Rocha PN. Hiponatremia: conceitos básicos e abordagem prática. J Bras Nefrol. 2011;33(2):248-260."
        />
      </Section>
    </Routine>
  )
}
