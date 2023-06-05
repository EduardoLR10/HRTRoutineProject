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

export default function CetoacidoseDiabetica(): JSX.Element {
  return (
    <Routine
      id="cetoacidose-diabetica"
      name="Cetoacidose Diabética (CAD)"
      categories={['emergencia', 'endocrinologia']}
      authors={['renato']}
      tags={['diabetes', 'tipo', '1', 'descompensação']}
    >
      <Section title="Sinais Clínicos">
        <List>
          <LItem>Desidratação (que pode ser difícil de detectar);</LItem>
          <LItem>
            Taquicardia, taquipnéia (que pode ser confundida com pneumonia ou
            asma);
          </LItem>
          <LItem>Respiração de Kussmaul;</LItem>
          <LItem>
            Náuseas e/ou vômitos (que podem ser confundidos com gastroenterite);
          </LItem>
          <LItem>Dor abdominal, que pode imitar um abdominal agudo;</LItem>
          <LItem>
            Visão embaçada, confusão, sonolência, redução progressiva em nível
            de consciência;
          </LItem>
          <LItem>Eventualmente coma.</LItem>
        </List>
      </Section>
      <Section title="Fatores de Risco">
        <Subsection title="Pacientes Recém-diagnosticado">
          <List>
            <LItem>
              Idade {'<'} 5 anos, diagóstico tardio, menor nível socieconômico.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="CAD">
          <List>
            <LItem>Omissão de insulina por várias vezes;</LItem>
            <LItem>Infecção viral ou bacteriana;</LItem>
            <LItem>Transgressão alimentar;</LItem>
            <LItem>Transtornos psiquiátricos.</LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Critérios diagnósticos para CAD">
        <Subsection title="Glicemia">
          <List>
            <LItem>
              Glicemia {'>'} 200 mg/dl, pH arterial {'<'} 7,3 <Bold>ou</Bold>{' '}
              bicarbonato sérico {'<'} 15 mEq/l (gasometria venosa);
            </LItem>
            <LItem>
              Cetonúria (≥ 2+ no EAS) (se “+”: glicemia sérica {'>'} 180 mg/dl /
              se “++”: glicemia sérica ≥ 250).
            </LItem>
          </List>
          <P>
            Em alguns casos, a glicemia pode encontrar-se normal ou levemente
            alta, em razão do uso prévio e/ou inadequado de insulina.
          </P>
        </Subsection>
      </Section>
      <Section title="Avaliação Laboratorial Inicial (após 1ª hora de fase de expansão)">
        <List>
          <LItem>
            Glicemia plasmática, Na, K, uréia, creatinina, hemograma;
          </LItem>
          <LItem>
            Eletrocardiograma (na impossibilidade de dosar K sérico).
          </LItem>
        </List>
        <P>
          <Bold>Atenção:</Bold>
        </P>
        <P>NÃO UTILIZAR VALOR DE "K" DA GASOMETRIA.</P>
        <P>EM SUSPEITA DE INFECÇÃO, solicitar:</P>
        <P>Raio-x de tórax, culturas de sangue e urina e TC de crânio.</P>
      </Section>
      <Section title="Grau de Gravidade da CAD">
        <List>
          <LItem>
            Leve: pH venoso {'<'} 7,3 / Bicarbonato {'<'} 15 mmol/l.
          </LItem>
          <LItem>
            Moderada: pH {'<'} 7,2 / Bicarbonato {'<'} 10 mmol/l.
          </LItem>
          <LItem>
            Grave: pH venoso {'<'} 7,1 / Bicarbonato {'<'} 5 mmol/l.
          </LItem>
        </List>
      </Section>
      <Section title="Estimativa da Gravidade da Desidratação">
        <Subsection title="Avaliação Clínica">
          <List>
            <LItem>
              <Bold>Leve (5%):</Bold> turgor de pele diminuído, mucosas secas,
              taquicardia.
            </LItem>
            <LItem>
              <Bold>Moderada (10%):</Bold> tempo de enchimento capilar maior que
              3 segundos, olhos encovados.
            </LItem>
            <LItem>
              <Bold>Grave (15%):</Bold> pulsos periféricos fracos ou
              impalpáveis, hipotensão, choque e oligúria.
            </LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Objetivo do tratamento das Crises Hiperglicêmicas Agudas">
        <List>
          <LItem>Manutenção das vias respiratórias pérvias;</LItem>
          <LItem>Correção da desidratação;</LItem>
          <LItem>Correção dos distúrbios eletrolíticos e acido-básicos;</LItem>
          <LItem>Redução da hiperglicemia e da osmolalidade;</LItem>
          <LItem>Identificação e tratamento do fator precipitante.</LItem>
        </List>
        <Subsection title="Abordagem Inicial">
          <List>
            <LItem>Pesar o paciente;</LItem>
            <LItem>
              Avaliar o grau de desidratação e nível de consciência;
            </LItem>
            <LItem>
              Assegurar vias aéreas / Sonda nasogástrica (aspirar) – se
              necessário;
            </LItem>
            <LItem>Acesso venoso periférico / Monitorização;</LItem>
            <LItem>
              O<Subscript>2</Subscript> se sinais de choque / Identificar causa
              da descompensação.
            </LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Reposição de Líquidos e de Eletrólitos">
        <P>
          De forma <Bold>lenta</Bold>, para evitar a rápida redução da glicemia.
        </P>
        <Subsection title="Fase de Ressuscitação ou 1ª Fase">
          <List>
            <LItem>
              <Bold>
                Infusão salina isotônica de cloreto de sódio (NaCl) a 0,9%:
              </Bold>{' '}
              10 a 20 ml/kg em 60 minutos (na primeira hora);
            </LItem>
            <LItem>
              <Bold>CHOQUE: 20 ml/kg (em 30 minutos).</Bold>
            </LItem>
          </List>
          <P>
            REAVALIAÇÃO AO FINAL DA 1ª HORA E REPETIR SOMENTE 1 vez, caso
            necessário (a escolha subsequente de fluidos dependerá da evolução
            dos eletrólitos séricos e da diurese).
          </P>
        </Subsection>
        <Subsection title="Fase de Reposição ou 2ª Fase">
          <List>
            <LItem>
              Volume da solução: nas primeiras 24 horas após o cumprimento da 1ª
              fase de hidratação: necessidades de manutenção diária (
              <Bold>HOLLIDAY</Bold>) + déficit (D) baseado no grau de
              desidratação;
            </LItem>
            <LItem>
              Subtrair do déficit a ser administrado, o volume de líquidos já
              infundido na 1ª fase;
            </LItem>
            <LItem>
              Não ultrapassar 5 litros/dia (a ser infundido nas primeiras 24
              horas).
            </LItem>
          </List>
          <P>Se sódio elevado (≥ 150 mEq/l): NaCl a 0,45% - 10 a 14 ml/kg/h.</P>
          <P>Manter o potássio sérico entre 4 e 5 mEq/l.</P>
          <Subsubsection title="Exemplo">
            <Bold>
              Déficit (ml) = [Grau de desidratação (%) x 10 x Peso (Kg)]
            </Bold>
            <P>
              Lactente de 10 Kg, desidratação grave (15%) / Déficit = 15% x 10 x
              10 Kg = 1.500 ml.
            </P>
            <P>
              Recebeu na 1ª fase ou fase de expansão: 500 ml de SF 0,9%, EV.
            </P>
            <P>
              Para prosseguir para a 2ª fase da hidratação ou fase de reposição:
            </P>
            <List>
              <LItem>
                Volume da solução (HOLLIDAY) (1.000 ml) + D (1.500 ml).
              </LItem>
              <LItem>
                Total: 2.500 ml - Déficit – 1ª fase (1.500 – 500 = 1.000 ml).
              </LItem>
            </List>
            <P>
              Assim, o volume de líquido a ser infundido nas próximas 24 horas:
            </P>
            <Bold>
              (HOLLIDAY) = 1.000 ml + D corrigido (1000 ml) = 2.000 ml/ 24 horas
            </Bold>
          </Subsubsection>
          <Table
            colWidths={[75, 150]}
            header={['-', 'Necessidade diária (HOLLIDAY)']}
            data={[
              [
                'Água',
                '< 10 kg: 100 ml/kg/24h\n11-20 kg: 1000 ml + 50 ml/kg/24h\n>21 kg: 1500 ml + 20 ml/kg/24h'
              ],
              ['Sódio', '2-4 mEq/l'],
              ['Potássio', '2-3 mEq/l'],
              ['Cloreto', '2-3 mEq/l'],
              ['Fosfato', '1-2 mEq/l']
            ]}
            title="Perdas de Fluidos na CAD e necessidades diárias de manutenção em Criança Normal"
          />
        </Subsection>
      </Section>
      <Section title="Insulinoterapia">
        <P>Iniciar após a 1ª hora de expansão.</P>
        <List>
          <LItem>Se "k" {'>'} 3,3 mEq/l - iniciar insulina</LItem>
          <LItem>
            CAD <Bold>leve ou moderada</Bold> - dose: 0.1 U/Kg, 1/1h ou 2/2h
          </LItem>
          <List>
            <LItem>
              Insulina regular, IM ou análogos rápidos (lispro, glulisina ou
              aspart) SC (<Bold>não fazer insulina rápida EV</Bold>);
            </LItem>
          </List>
          <LItem>
            NÃO FAZER <Italic>bolus</Italic> intravenoso de insulina regular - (
            <Bold>risco de edema cerebral</Bold>).
          </LItem>
          <LItem>
            Glicemia em torno de 250 mg/dl sem condições de alimentar-se (ou se
            queda de glicemia capilar superior a 90mg/dL) – associar SG
            5%/SF0,9% (1:1) + Reduzir insulina para 0,03 a 0,05 ui/kg/h (NUNCA
            PARAR INFUSÃO ANTES DA RESOLUÇÃO DA CAD)
          </LItem>
          <LItem>
            CAD <Bold>grave</Bold> - insulina regurar, EV, dose: 0.05 - 0.1
            U/kg/h (<Bold>em bomba de infusão</Bold>)
          </LItem>
          <List>
            <LItem>
              Diluir 50 U de insulina em 50 ml de SF0,9% (1U = 1ml);
            </LItem>
            <LItem>
              Manter até normoglicemia, pH {'>'} 7,30, bicarbonato {'>'}15
              mmol/L.
            </LItem>
          </List>
        </List>

        <P>
          <Bold>Atenção:</Bold> velocidade de decaimento da hiperglicemia: 50-80
          mg/hora.
        </P>
      </Section>
      <Section title="Critérios de Controle Laboratorial (RESOLUÇÃO) da CAD">
        <P>
          Glicemia ≤ 200 mg/dl + Bicarbonato sérico ≥ 15 mEq/l + pH ≥ 7,3
          (gasometria venosa).
        </P>
        <Subsection title="Potássio">
          <List>
            <LItem>K sérico 4,5 - 6 mEq/l: solução com 20 mEq/l de K.</LItem>
            <LItem>K sérico {'<'} 4,5 mEq/l: solução com 40 mEq/l de K.</LItem>
          </List>
          <P>
            Respeitar a velocidade máxima de infusão de potássio, que é de 0,5
            mEq/kg/h.
          </P>
        </Subsection>
        <Subsection title="Bicarbonato">
          <P>
            Se pH {'<'} 7,0 e choque com falência miocárdica ou Hiperpotassemia
            grave;
          </P>
          <P>A correção pode ser feita baseada na fórmula:</P>
          <P>
            {' '}
            NaHCO<Subscript>3</Subscript> = 0,3 x Peso x (15 - Bicarbonato
            observado), correr em 2 a 4 horas.
          </P>
          <P>Riscos do uso inapropriado do bicarbonato são:</P>
          <List>
            <LItem>Alcalose metabólica / Acidose liquórica paradoxal;</LItem>
            <LItem>Edema cerebral / Hipopotassemia / Anóxia tecidual.</LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Possíveis Complicações (atenção)">
        <List>
          <LItem>Edema cerebral (0,5 a 1% dos casos).</LItem>
          <LItem>Fenômenos trombóticos (secundários À hemoconcentração);</LItem>
          <LItem>
            Arritmias cardíacas (secundárias à distúrbios eletrolíticos);
          </LItem>
          <LItem>Hipoglicemia.</LItem>
        </List>
      </Section>
      <Section title="Sinais e Sintomas de Edema Cerebral">
        <List>
          <LItem>Cefaléia e desaceleração da frequência cardíaca;</LItem>
          <LItem>
            Alteração no estado neurológico (inquietação, irritabilidade e
            sonolência excessiva);
          </LItem>
          <LItem>
            Sinais neurológicos específicos (paralisia de nervo craniano,
            papiledema);
          </LItem>
          <LItem>Aumento da pressão sanguínea;</LItem>
          <LItem>
            Diminuição da saturação de 0<Subscript>2</Subscript>.
          </LItem>
        </List>
        <Subsection title="Tratamento do Edema Cerebral na CAD">
          <List>
            <LItem>Diminuir taxa de infusão de fluidos em 1/3;</LItem>
            <LItem>
              Manitol: 0,5 a 1g/kg, em 10-15 minutos. Repetir se não melhorar em
              30 min a 2h;
            </LItem>
            <LItem>OU NaCl 3%: 2,5 a 5ml/kg, em 30 minutos;</LItem>
            <LItem>Elevação da cabeceira;</LItem>
            <LItem>TC de crânio (excluir trombose/ hemorragia).</LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Condições Alimentar + Bom Controle Clínico/Laboratorial">
        <P>INICIAR INSULINOTERAPIA: BASAL/BOLUS (40%/60%):</P>
        <List>
          <LItem>
            BASAL: Insulina Humana de ação intermediária (NPH) – 2/3 pela manhã
            e 1/3 às 22h ou análogo de insulina de longa ação (Glargina) – pela
            manhã.
          </LItem>
          <LItem>
            BOLUS: Insulina Rápida (glulisina ou aspart ou lispro)- 15 minutos
            antes das refeições.
          </LItem>
        </List>
        <P>
          CORREÇÃO (meta: 150 / FS: 100 para crianças {'<'} 10 anos, FS: 50 para{' '}
          {'>'} 10 anos)
        </P>
        <P>
          Na enfermaria, serão feitos ajustes para uso de insulina bolus (dose
          fixa + correção) .
        </P>
        <P>
          <Bold>
            EM CASO DE FALTA DE INSULINA RÁPIDA, USAR INSULINA REGULAR.
          </Bold>
        </P>
      </Section>
      <Section title="DOSE TOTAL DIÁRIA DE INÍCIO">
        <P>
          <Bold>
            Menores de 6 anos (0,3-0,5 U/kg/dia) / 6-10 anos (0,5-1,0 U/kg/dia)
            / {'>'} 10 anos (1,0-1,2 U/kg/dia).
          </Bold>
        </P>
      </Section>
      <Section title="Resumo do Tratamento da CAD">
        <Table
          colWidths={[75, 150, 150, 125, 125, 125]}
          header={[
            'Hora',
            'Hidratação',
            'Insulina',
            'Potássio',
            'Bicarbonato',
            'Exames'
          ]}
          data={[
            [
              '1ª',
              'SF 10 a 20 ml/kg/h\nReavaliar em 1h (se necessário repetir somente 1x)',
              'NÃO USAR NA 1ª HORA',
              'NÃO USAR NA 1ª HORA\nDOSAR "K"',
              'Se pH < 7.0 e choque com falência miocárdia ou Hiperpotassemia grave\nVER CÁLCULO',
              'Glicemia capilar e sérica, Na, K, Gasometrica venosa, EAS'
            ],
            [
              '2ª',
              'SF 10 a 20 ml/kg/h (se necessário)',
              <Text key={1}>
                <Bold>
                  Grave:{'\n'}Somente se K {'>'} 3,3 mEq/l
                </Bold>
                {'\n'}Regular EV contínua em Bl 0,05 - 0,1 U/kg/h (50 ml-SF0.9%/
                50 U-insulina) ou IM{'\n'}
                <Bold>Leve/Moderado:</Bold>
                {'\n'}Análogos SC 0.1 U/kg/h{'\n'}Até resolução da CAD
              </Text>,
              '40 mEq/l se K < 4,5\n20 mEq/l se K entre 4,5 a 6',
              'Igual a 1ª hora',
              '-'
            ],
            [
              '3-6ª',
              <Text key={2}>
                SF/SG5% conforme avaliação (
                <Bold>
                  calcular o volume total em 24h descontar do volume feito em 2h
                </Bold>
                )
              </Text>,
              'Igual a 2ª hora',
              'Igual a 1ª hora',
              '-',
              'Glicemia capilar, eletrólitos Ur, Cr, a cada 3-6 horas e Gasometria venosa a cada 2/3h'
            ],
            [
              '12-24ª',
              'Reduzir até suspensão conforme aceitação de alimentos',
              'Igual a 2ª hora',
              '-',
              '-',
              '-'
            ]
          ]}
        />
      </Section>
      <Section title="Observações Importantes">
        <P>
          Para prevenir hiperglicemia de rebote, NA PRESCRIÇÃO DE INSULINA
          BASAL/BOLUS, a primeira injeção de insulina SC deve ser 30 minutos
          (insulina de ação rápida-Lispro/Aspart/Glulisina) ou 1h (insulina
          regular) <Bold>antes</Bold> da parada da infusão contínua de insulina.
        </P>
        <P>
          Com insulina intermediária ou longa (NPH ou Glargina), a sobreposição
          deve ser mais longa e a taxa de infusão de insulina gradualmente
          baixada em 50%:{' '}
          <Italic>
            a primeira dose da insulina basal deve ser feita à noite e a parada
            da infusão de insulina contínua é feita pela manhã.
          </Italic>
        </P>
        <P>
          “O diagnóstico de DM1 causa um forte impacto sobre o paciente e seus
          familiares. É necessária uma boa orientação inicial para que entendam
          os objetivos do tratamento, o que se pretende com os esquemas
          propostos e a forma de monitorização dos resultados. Essa primeira
          orientação deve capacitá-los a administrar a insulina adequadamente,
          monitorizar e interpretar os valores glicêmicos, reconhecer sinais e
          sintomas de hipoglicemia e agir para normalizar a situação. É preciso
          preencher todos esses requisitos para se optar pelo tratamento
          domiciliar do DM”.
        </P>
        <P>
          A ROTINA FOI CONFECCIONADA PARA ATENDER AS NECESSIDADES DO SERVIÇO,
          UMA VEZ QUE EM ALGUNS PERÍODOS, FALTAM MATERIAIS PARA REALIZAÇÃO DE
          ALGUNS EXAMES, NÃO PREJUDICANDO A QUALIDADE DO ATENDIMENTO AO
          PACIENTE.
        </P>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="ISPAD Clinical Practice Consensus Guidelines 2018 / Diretrizes da Sociedade Brasileira de Diabetes 2019-2020 / NICE Pathway last updated: 19 November 2019."
        />
      </Section>
    </Routine>
  )
}
