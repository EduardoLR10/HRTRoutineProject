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
import img5 from './images/image5.png'
import img6 from './images/image6.png'

export default function CetoacidoseDiabetica(): JSX.Element {
  return (
    <Routine
      id="cetoacidose-diabetica"
      name="Cetoacidose Diabética (CAD)"
      categories={['emergencia', 'endocrinologia']}
      authors={['renato']}
      tags={['diabetes', 'tipo', '1', 'descompensação']}
    >
      <Section title="Introdução">
        <P>
          A Cetoacidose Diabética (CAD) é uma complicação aguda grave e se não
          tratada adequadamente leva ao risco de morte. Há possibilidade da CAD
          manifestar-se em qualquer idade, porém tem maior incidência em menores
          de 2 anos e prevalência no período escolar e na adolescência.
        </P>
        <P>
          Ressalta-se que os pacientes com CAD apresentam alterações metabólicas
          que vêm ocorrendo há algum tempo, e tentativas de normalização rápida
          de parâmetros metabólicos/glicêmicos (como uso inadequado e precoce de
          insulina na CAD) podem retirar o organismo deste equilíbrio,
          aumentando a probabilidade de desencadear complicações, dentre elas,
          edema cerebral.
        </P>
      </Section>
      <Section title="Cálculos e Fórmulas para Tratamento">
        <P>
          <Bold>
            CÁLCULOS/FÓRMULAS UTILIZADOS DURANTE O TRATAMENTO DO PACIENTE EM CAD
          </Bold>
        </P>
        <Subsection title="Ânion GAP">
          <P>Em mMol/L (Valor de Referência: 8 - 12mMol/L).</P>
          <P>
            Obs.: queda da glicemia sem melhora do AG ou da acidose não indica
            melhora clínica.
          </P>
        </Subsection>
        <Subsection title="Cálculo da Superfície Corpórea (SCo)">
          <P>Em m².</P>
          <P>Obs.: máximo de 4 litros/m2/dia.</P>
          <P>SCo = [(Peso em Kg x 4) + 7] / [(Peso em Kg + 90)]</P>
        </Subsection>
        <Subsection title="Potássio (K) Corrigido">
          <P>Em mEq/L.</P>
          <P>Redução 0,6mEq/L de K -{'>'}; a cada 0,1 abaixo do pH 7,4.</P>
        </Subsection>
        <Subsection title="Sódio (Na) Corrigido">
          <P>Em mEq/L.</P>
          <P>
            Na corrigido = Na + 1,6 x [(glicemia – 100) / 100] /// Na corrigido
            = Na + 2 x [(glicemia – 100) / 100] – ISPAD
          </P>
          <P>
            *ISPAD: International Society for Pediatric and Adolescent Diabetes.
          </P>
        </Subsection>
        <Subsection title="Cálculo de Reposição de Sódio">
          <P>Em mEq.</P>
          <P>mEq: (130 – Na atual) x 0,6 x Peso (kg)</P>
        </Subsection>
        <Subsection title="Cálculo da Osmolaridade Sérica Efetiva (OsSeE)">
          <P>Em mEq/L (Valor de Referência: 280 - 300mEq/L).</P>
          <P>
            Obs.: valores {'>'} 320mEq/L associam-se a redução do nível de
            consciência.
          </P>
          <P>OsSeE = (2 x Na) + (glicose / 18) + (ureia / 6)</P>
        </Subsection>
        <Subsection title="Cálculo do Volume de Solução (Cálculo de Holliday)">
          <P>Etapa de Manutenção – em mL.</P>
          <P>Peso {'<'}= 10kg -{'>'}; X mL = 100mL por Kg de peso</P>
          <P>
            Peso entre 10 e 20 (inclusive) Kg -{'>'}; X mL = 1000mL + (50mL
            por Kg de peso acima de 10kg)
          </P>
          <P>
            Peso {'>'} 20Kg -{'>'}; X mL = 1500mL + (20mL por Kg de peso
            acima de 20kg)
          </P>
        </Subsection>
        <Subsection title="Velocidade de Gotejamento (VG)">
          <P>Em gotas/minuto.</P>
          <P>
            VG = Volume total da solução (mililitros) / (3 x Tempo (horas) em
            que irá correr o volume total)
          </P>
        </Subsection>
        <Subsection title="Velocidade em Bomba de Infusão Contínua (BIC)">
          <P>Em mL/hora.</P>
          <P>
            Velocidade em BIC = Volume total da solução (mililitros) / 24
            (horas)
          </P>
        </Subsection>
      </Section>
      <Section title="Definição e Características de Cetoacidose Diabética">
        <P>
          <Bold>Glicemia - Hiperglicemia ( {'>'}= 200mg/dL)</Bold>
        </P>
        <P>
          <Bold>
            Gasometria - Acidose Metabólica (pH {'<'} 7,3 e/ou HCO3 {'<'}{' '}
            15mEq/L)
          </Bold>
        </P>
        <P>
          <Bold>Cetonemia ({'>'}= 3mMol/L)</Bold>
        </P>
        <P>
          <Bold>
            Exame de Urina Rotina tipo I (EAS) – Cetonúria (moderada ou grave)
            (95% de sensibilidade)
          </Bold>
        </P>
        <Table
          colWidths={[75, 50, 75, 100]}
          header={[
            'Classificação',
            'pH',
            <Text key={1}>
              HCO<Subscript>3</Subscript> (mMol/L)
            </Text>,
            'Nível de Consciência'
          ]}
          data={[
            ['Leve', '≥ 7,2 e < 7,3', '≥ 10 e < 15', 'Alerta'],
            ['Moderada', '≥ 7,1 e < 7,2', '≥ 5 e < 10', 'Sonolento'],
            ['Grave', '< 7,1', '< 5', 'Estupor']
          ]}
          caption="Obs.: os dados da gasometria (pH e HCO3) são equiparáveis no sangue venoso e arterial. Indica-se, preferencialmente, gasometria venosa, pois a arterial é mais dolorosa e possui maior risco durante a coleta, reservando-se quando caso de Insuficiência Respiratória Aguda."
        />
        <Table
          colWidths={[200, 50]}
          header={[
            'Cetonemia (dosagem de Ácido Beta-Hidroxibutirato - ABH)',
            'mMol/L'
          ]}
          data={[
            ['Normal', '< 0,6'],
            ['Risco de desenvolver CAD', '0,6 a < 1,5'],
            ['Alto risco de desenvolver CAD', '1,5 a < 3,0'],
            ['CAD confirmada', '≥ 3,0']
          ]}
        />
        <Table
          colWidths={[75, 75, 75]}
          header={['Classificação', 'ABH (mMol/L)', 'Cetonúria']}
          data={[
            ['Leve', '0,1 a 0,9', '+'],
            ['Moderada', '0,2 a 1,8', '++'],
            ['Grave', '1,4 a 5,2', '+++']
          ]}
          title="Correspôndencia entre ABH e Cetonúria"
          caption="Obs.: alguns pacientes diabéticos podem apresentar “CAD Euglicêmica” (glicemias baixas); isso é observado, com mais frequência, quando uso prévio e inadequado (aumentado) de insulina, em paciente em jejum prolongado ou naqueles com baixa ingesta oral e/ou presença de vômitos persistentes."
        />
      </Section>
      <Section title="Fatores Desencadeantes da Cetoacidose Diabética">
        <P>
          A CAD é a manifestação inicial em 15% - 70% dos casos novos de DM1;
          sendo que em 2% - 10% dos casos não é possível identificar o fator
          precipitante. Alguns destes possíveis fatores, dentre outros, são:
        </P>
        <P>
          <Bold></Bold>
        </P>
        <Subsection title="Nos Diagnósticos Novos de DM1 / Primodiagnóstico">
          <List>
            <LItem>
              Infecções (30% - 40% dos casos) principalmente do trato urinário e
              pulmonar;
            </LItem>
            <LItem>Diagnóstico tardio;</LItem>
            <LItem>Menores de 5 anos;</LItem>
            <LItem>Altas doses de corticosteroides;</LItem>
            <LItem>
              Antipsicóticos atípicos (como Clorpromazina, Clozapina,
              Quetiapina, Risperidona);
            </LItem>
            <LItem>Diazóxido (anti-hipertensivo, hiperglicemiante);</LItem>
            <LItem>Algumas drogas imunossupressoras;</LItem>
            <LItem>Pancreatite Aguda;</LItem>
            <LItem>Trauma;</LItem>
            <LItem>Doença gastrointestinal com diarreia e vômito;</LItem>
            <LItem>Drogas ilícitas, sendo a Cocaína a mais prevalente.</LItem>
          </List>
        </Subsection>
        <Subsection title="Nos Previamente Diabéticos">
          <List>
            <LItem>
              Má aderência ao tratamento (principal) (normalmente relacionado à
              não adesão adequada ao tratamento com insulina – dose, horário,
              local –, alimentação incorreta e sedentarismo);
            </LItem>
            <LItem>Infecções;</LItem>
            <LItem>Distúrbios psiquiátricos;</LItem>
            <LItem>Distúrbios alimentares;</LItem>
            <LItem>Adolescentes do sexo feminino (período menstrual);</LItem>
            <LItem>
              Interrupção, mesmo que transitória, da terapia insulínica por
              Sistema de Infusão Contínua de Insulina.
            </LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Abordagem Inicial do Paciente em Cetoacidose Diabética">
        <Subsection title="Anamnese">
          <List>
            <LItem>
              Sintomas típicos: polidipsia, poliúria, polifagia e perda de peso;
            </LItem>
            <LItem>
              Sintomas evolutivos: dor abdominal, náusea, vômito, fadiga,
              taquipneia, taquicardia, hipotensão, visão embaçada e
              sinais/sintomas de desidratação;
            </LItem>
            <LItem>Hálito cetônico (aroma adocicado de maça verde);</LItem>
            <LItem>
              Febre (temperatura ≥ 37,8c) (associado a processo infeccioso);
            </LItem>
            <LItem>
              Hipotermia (temperatura ≤ 35,5c) (sinal de mau prognóstico);
            </LItem>
            <LItem>Obnubilação progressiva e perda de consciência;</LItem>
            <LItem>Fraqueza muscular;</LItem>
            <LItem>Outras queixas.</LItem>
          </List>
        </Subsection>
        <Subsection title="Avaliação Clínica">
          <List>
            <LItem>
              <Bold>Peso</Bold> - para cálculos referentes ao tratamento.
            </LItem>
            <LItem>
              <Bold>
                Temperatura (T), Pressão Arterial (PA), Frequência Cardíaca
                (FC), Frequência Respiratória (FR), SAT e Padrão Respiratório
              </Bold>{' '}
              - para acompanhamento clínico.
            </LItem>
            <LItem>
              <Bold>Desidratação</Bold> - na CAD, a desidratação é do tipo
              Hiperosmolar.
            </LItem>
            <LItem>
              <Bold>Exame Abdominal</Bold> – a dor abdominal, presente em 40% -
              75% dos casos de CAD, pode ter várias causas; quando é devida à
              CAD, geralmente melhora com a hidratação, correção dos distúrbios
              eletrolíticos e insulinoterapia.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="História Pregressa">
          <List>
            <LItem>
              Últimas aplicações de insulina (tipo, dose, horário e local)
            </LItem>
            <LItem>Uso de hipoglicemiantes;</LItem>
            <LItem>Uso de outras medicações e drogas ilícitas;</LItem>
            <LItem>Outras comorbidades;</LItem>
            <LItem>Período menstrual (sexo feminino);</LItem>
            <LItem>Alimentação recente.</LItem>
          </List>
        </Subsection>
        <Subsection title="Avaliação Laboratorial">
          <P>Coletar glicemia capilar (GC) na admissão.</P>
          <P>
            Caso GC {'>'}= 200mg/dL ou paciente em ruim/regular estado geral,
            mesmo com GC {'<'} 200mg/dL, deve-se coletar gasometria
            venosa/arterial E/OU cetonemia E/OU dosagem de cetona na urina (fita
            urinária) E/OU URINA TIPO1 (EAS).
          </P>
          <P>
            Caso confirmação da CAD, coletar alguns exames obrigatórios
            (indicados pelo símbolo {'"'}#{'"'}) e avaliar necessidade dos
            demais; posteriormente coletar a cada 3 horas (ou a cada intervalo
            indicado, posteriormente, em relação aos eletrólitos), até
            normalização do valor do AG, da acidose (pH {'>'}= 7,3 e HCO
            <Subscript>3</Subscript> {'>'}= 15) e glicemia {'<'} 200mg/dL.
          </P>
          <Table
            colWidths={[75, 150]}
            header={[
              'Glicose Venosa',
              'Gasometria Venosa/Arterial (confirmação de CAD e a cada 3 horas)'
            ]}
            data={[
              ['Sódio #', 'Ácido Lático'],
              [
                'Potássio #',
                'Hemograma (se suspeita de infecção sem foco aparente)'
              ],
              [
                'Cálcio #',
                'HbA1c (no primodiagnóstico ou quando não tenha resultado dos últimos 3 meses)'
              ],
              [
                'Fósforo #',
                'Radiografia de Tórax (se suspeita de infecção respiratória)'
              ],
              ['Cloro #', 'Radiografia de Abdômen Simples (se dor abdominal)'],
              [
                'Magnésio #',
                'Eletrocardiograma (ECaG) (se CAD grave ou distúrbios de potássio)'
              ],
              [
                'Ureia # e Creatinina #',
                'Urocultura + Hemocultura (se suspeita de infecção)'
              ]
            ]}
            caption="Obs.: quando presença de infecção, sem foco aparente, indicado uso de Cefalosporina de 3ª geração (Ceftriaxona); caso presença de foco, o tratamento deverá ser específico. Iniciar antibioticoterapia apenas após coleta de exames admissionais necessários.\nObs.: a Amilase está frequentemente elevada na CAD. Caso suspeita de Pancreatite, convém repetir a dosagem com a evolução do tratamento e/ou dosar a Lipase (exame mais específico para o diagnóstico).
                Obs.: a Creatinina sérica pode estar elevada. Caso suspeita de Insuficiência Renal, convém dosar níveis de Ureia plasmática.
                "
          />
        </Subsection>
      </Section>
      <Section title="Medidas de Suporte Inicial no Paciente em Cetoacidose Diabética">
        <Subsection title="Assegurar Via Aérea">
          <P>Naqueles com ECG ≤ 8 há necessidade de intubação.</P>
        </Subsection>
        <Subsection title="Oxigênio">
          <P>
            Indicado naqueles com instabilidade hemodinâmica ou com SAT {'<'}{' '}
            94% em ar ambiente.
          </P>
          <P>
            Faz-se uso de Cateter Nasal até 4litros/minuto e, se necessário, uso
            de Máscara de 6 a 12litros/minuto.
          </P>
          <P>
            Obs.: quando presença de Respiração de Kussmaul sempre indicado uso
            de oxigenioterapia sob máscara.
          </P>
        </Subsection>
        <Subsection title="Monitor Cardiáco/Eletrocardiograma">
          <P>Avaliar onda T (corresponde à repolarização ventricular).</P>
        </Subsection>
        <Subsection title="Acesso Venoso Periférico">
          <P>Mínimo de 2 acessos.</P>
          <P>
            Obs.: caso indicada a correção da acidose com Bicarbonato de Sódio,
            há necessidade de um terceiro acesso.
          </P>
          <P>
            Obs.: sugere-se deixar um membro superior sem acesso, para facilitar
            a coleta de exames laboratoriais, quando necessário. O resultado dos
            exames pode mostrar-se alterado quando soluções ricas em glicose
            (principalmente) ou outras soluções são infundidas próximas ao sítio
            de coleta.
          </P>
        </Subsection>
        <Subsection title="Expansão Volumétrica">
          <P>
            Expansão Volumétrica ({'"'}Etapa de Expansão{'"'}/Primeira Fase) -
            infundir Solução Isotônica (NaCl 0,9%) em BIC.
          </P>
        </Subsection>
        <Subsection title="Sonda Nasogástrica">
          <P>
            Indicada naqueles pacientes com vômitos frequentes ou com alteração
            do nível de consciência.
          </P>
        </Subsection>
        <Subsection title="Sonda Vesical de Demora">
          <P>
            Indicada naqueles pacientes inconscientes ou sonolentos e nas
            crianças menores de 2 anos de idade, devido a necessidade de
            monitorização da diurese.
          </P>
        </Subsection>
      </Section>
      <Section title="Tratamento do Paciente em Cetoacidose Diabética">
        <Subsection title="Princípios Básicos">
          <P>
            É preciso proceder a redução dos níveis glicêmicos e, ao mesmo
            tempo, evitar a ocorrência de hipoglicemia e grande variabilidade
            glicêmica (ambos determinantes de maior morbimortalidade).
          </P>
          <P>
            É indicado utilizar uma {'"'}Folha de Fluxo{'"'} com anotação de
            dados. Importante anotação dos seguintes aspectos:
          </P>
          <List>
            <LItem>Sinais vitais (T, PA, FC, FR, SAT);</LItem>
            <LItem>Avaliação neurológica (ECG e sinais/sintomas de EC);</LItem>
            <LItem>Entrada e Perdas de volumes (Balanço Hídrico);</LItem>
            <LItem>Determinação da quantidade de insulina;</LItem>
            <LItem>
              Resultados de exames (glicemia capilar, glicose venosa,
              eletrólitos (principalmente K+, Na+, Cl-, Ca+2, P-3, Mg+2),
              gasometria (pH, HCO<Subscript>3</Subscript>), função renal);
            </LItem>
            <LItem>Outras medicações.</LItem>
          </List>
        </Subsection>
        <Subsection title="Reposição Volêmica">
          <Subsubsection title="Etapa de Expansão / Primeira Fase">
            <P>
              Os pacientes com CAD estão sempre com depleção de volume. Para a
              correção da desidratação, na ausência de comprometimento crônico
              das funções cardíaca e/ou renal, indica-se infundir 20ml/kg de
              peso de NaCl 0,9% – via endovenosa (EV) – ao longo de 30 minutos;
              devendo-se repetir, por no mínimo 1 hora (2 etapas) e no máximo 2
              horas (4 etapas). Caso paciente esteja hidratado após 1 hora
              pode-se iniciar insulinoterapia contínua EV em BIC.
            </P>
          </Subsubsection>
          <Subsubsection title="Etapa de Manutenção / Segunda Fase">
            <P>
              Após a {'"'}Etapa de Expansão{'"'}, prosseguir com a {'"'}Etapa de
              Manutenção{'"'} cujos componentes da solução inicial (SG5% e NaCl
              0,9%) variam conforme valor da glicemia e do eletrólito {'"'}sódio
              {'"'}:
            </P>
            <Table
              colWidths={[75, 75, 75, 75]}
              header={[
                'Glicemia',
                'Soro Glicosado 5%',
                'Solução Hipo/Isotônica',
                'Propoção'
              ]}
              data={[
                ['≥ 300mg/dL', '0%', '100% (BIC: x ml/hora)', '-'],
                [
                  '250 a < 300mg/dL',
                  '50% (BIC: x/2 ml/hora)',
                  '50% (BIC: x/2 ml/hora)',
                  '1:1'
                ],
                [
                  '200 a < 250mg/dL',
                  '75% (BIC: 3x/4 ml/hora)',
                  '25% (x/4 ml/hora)',
                  '3:1'
                ],
                ['<200mg/dL', '100% (BIC: x ml/hora)', '0%', '-']
              ]}
            />
            <List>
              <LItem>
                Se sódio {'>'}= 150 mEq/L: prescrever Solução Hipotônica (NaCl
                0,45%).
              </LItem>
              <LItem>
                Se sódio {'<'} 150 mEq/L: prescrever Solução Isotônica de (NaCl
                0,9%).
              </LItem>
            </List>
            <P>
              Preparo da Solução Hipotônica (NaCl 0,45%): NaCl 0,9% mais Água
              Bidestilada na proporção de 1:1.
            </P>
            <P>
              O volume (em 24 horas) desta etapa corresponde ao valor de {'"'}
              Volume de Manutenção Diário{'"'} (<Italic>Holliday</Italic>) (vide
              anteriormente) acrescido do {'"'}Déficit Hídrico{'"'} (DH)
              (baseado no grau de desidratação) (vide anteriormente) menos o
              volume corrido (durante a Primeira Fase) e outras soluções
              administradas.
            </P>
            <Figure source={img1} size={[678, 542]} />
            <P>
              Ex: Paciente 20kg com Desidratação Grave, apresentando-se
              hidratado após 4 etapas (2 horas) de Expansão, sem sinais/sintomas
              de Choque.
            </P>
            <P>
              Volume de Manutenção Diário: 1500mL / DH: 15(%) x 10 x 20 = 3000mL
              / Primeira Fase: 20ml/kg (2 horas) = 1600mL
            </P>
            <P>Volume (24horas): 1500 + 3000 – 1600 = 2900mL</P>
            <P>
              Calculado volume de 2900ml na {'"'}Etapa de Manutenção{'"'},
              volume este que não ultrapassa o volume máximo de 3160ml (em 24
              horas) calculado pela SCo = 0,79m2 (vide anteriormente).
            </P>
            <P>
              Portanto o volume total da {'"'}Etapa de Manutenção{'"'} será de
              2900ml em 24 horas:
            </P>
            <P>
              - (em 24 horas) com uma VG de 40gotas/minuto ou em BIC
              (preferencialmente) a 120ml/hora.
            </P>
            <P>
              Obs.: não se indica retornar para uso exclusivo de Solução
              Hipo/Isotônica, quando já do início de SG como componente da
              solução.
            </P>
            <P>
              Obs.: as perdas urinárias não devem ser adicionadas rotineiramente
              ao cálculo de fluido de reposição.
            </P>
          </Subsubsection>
        </Subsection>
        <Subsection title="Reposição de Eletrólitos">
          <P>
            A dosagem de eletrólitos na gasometria não deve substituir a dosagem
            sérica.
          </P>
          <Subsubsection title="Potássio (K) (Cloreto de Potássio 10% (KCl 10%) – 1,34mEq/mL)">
            <P>
              Durante a terapia da CAD, a maioria dos pacientes requer reposição
              para prevenir a Hipopotassemia. A meta é manter os níveis séricos
              entre 4 - 5 mEq/L, enquanto apresentar cetoacidose. Deve-se
              calcular o {'"'}potássio corrigido{'"'} para avaliar o verdadeiro
              grau de Hipopotassemia.
            </P>
            <P>
              Deve-se acrescentar K+ na solução de reidratação, na forma de KCl
              10%, conforme os valores abaixo:
            </P>
            <List>
              <LItem>
                K sérico {'<'} 4,5mEq/L -{'>'}; 40mEq/L de K (15mL de KCl
                10% em um soro de 500mL);
              </LItem>
              <LItem>
                K sérico entre 4,5 - 6,0mEq/L -{'>'}; 20 - 30mEq/L de K
                (7,5 - 11mL de KCl 10% em um soro de 500mL);
              </LItem>
              <LItem>K sérico {'>'} 6,0mEq/L -{'>'}; não usar K.</LItem>
            </List>
            <P>
              Obs.: caso não seja possível medição de potássio sérico, solicitar
              Eletrocardiograma (EcaG) para avaliação inicial deste eletrólito.
              Até resultado do EcaG, recomenda-se acrescentar 40mEq/L de
              potássio na {'"'}Etapa de Manutenção{'"'}.
            </P>
            <Figure source={img2} size={[678, 542]} />
            <Figure source={img3} size={[678, 542]} />
            <P>Obs.: máximo de reposição: 400mEq/dia.</P>
            <P>
              Obs.: velocidade máxima de infusão: 0,5mEq/kg/hora (40mEq/hora).
            </P>
            <P>
              Obs.: a administração de insulina deve ser retardada até que os
              níveis de K sérico sejam {'>'} 3,3mEq/L, devido ao risco de
              arritmias associado à Hipopotassemia.
            </P>
          </Subsubsection>
          <Subsubsection title="Sódio (Na) (Cloreto de Sódio 20% (NaCl 20%) – 3,4mEq/mL)">
            <P>
              Devido a força osmótica da glicose, o valor do sódio coletado, a
              partir da amostra sanguínea, não corresponde ao real valor; para
              avaliar a gravidade do déficit, o valor deve ser do {'"'}sódio
              corrigido{'"'}.
            </P>
            <P>
              Se Hiponatremia Significativa ({'<'} 130mEq/L), corrigir conforme
              fórmula – corrigir em 12 a 24 horas – EV.
            </P>
            <P>
              Se Hiponatremia Grave ({'<'} 120mEq/L), convulsão ou sintomas
              neurológicos graves, indica-se fazer uso de Solução Salina
              Hipertônica 3% (NaCl 3%) – 4 a 6mL/kg de peso – EV – 1 hora.
            </P>
            <List>
              <LItem>
                Preparo da Solução Hipertônica: NaCl 3% = 3g de NaCl em 100mL de
                solução;
              </LItem>
              <LItem>
                NaCl 20% = 20g de NaCl em 100mL de solução -{'>'}; 15mL de
                NaCl 20% = 3g de NaCl;
              </LItem>
              <LItem>
                15mL de NaCl 20% + 85mL de Água Bidestilada = 3g de NaCl/100mL.
              </LItem>
            </List>
          </Subsubsection>
        </Subsection>
        <Subsection title="Insulinoterapia">
          <P>
            A insulinoterapia deve começar pelo menos 1 hora após iniciar a
            reposição volêmica com NaCl 0,9%, quando paciente hidratado e K
            sérico {'>'} 3,3mEq/L, para evitar complicações como arritmias
            cardíacas, parada cardíaca e fraqueza dos músculos respiratórios.
          </P>
          <Subsubsection title="Insulina Endovenosa">
            <P>
              A Infusão Endovenosa Contínua de Insulina (IECI) é o método mais
              aceito de tratamento durante uma CAD, em virtude da ação imediata
              e da meia-vida curta da insulina por via EV, em comparação com
              outras vias de administração; sendo utilizada a Insulina Rápida
              (Insulina Regular – InRe –).
            </P>
            <P>
              A insulina EV é iniciada após 1 hora da Etapa de Expansão, quando
              paciente hidratado OU após 2 horas de reposição de fluidos, caso
              paciente não apresente Choque.
            </P>
            <P>
              Inicialmente preconiza-se uma Taxa de Infusão de Insulina (TII) de
              0,10 UI/kg/hora.
            </P>
            <P>
              Obs.: preparo da solução (estável por 6 horas): em 250mL de NaCl
              0,9%, adiciona-se 25 UI de InRe.
            </P>
            <P>
              Uma velocidade de infusão de 1mL/kg/hora dessa solução equivale a
              uma TII de 0,10 UI/kg/hora.
            </P>
            <P>
              Ex.: paciente com 10kg de peso, deve-se correr, inicialmente, a
              uma velocidade de 10mL/hora em BIC.
            </P>
            <P>
              Obs.: após o preparo da solução, deve-se desprezar cerca de 50mL
              correndo-a pelo equipo, para que o contato da insulina com o
              plástico dessensibilize os receptores inespecíficos de proteínas
              presentes na superfície do material; assim, a insulina
              administrada ao paciente, ficará livre da interferência desses
              receptores.
            </P>
            <P>
              Com a IECI espera-se uma redução da glicemia entre 50 e
              80mg/dL/hora.
            </P>
            <P>
              Se a redução for menor que 50mg/dL/hora, deve-se aumentar a TII
              para 0,15 a 0,20 UI/kg/hora. Após estabilização, é importante
              retornar para 0,10 UI/kg/hora.
            </P>
            <P>
              Se a redução da glicemia for maior que 80mg/dL/hora ou quando
              glicemia {'<'} 250mg/dL, deve-se aumentar a concentração de
              glicose na solução (“Etapa de Manutenção”) [Solução
              Glicofisiológico (SGF) 3:1 ou uso de SG5% exclusivo] e não
              diminuir a velocidade de administração de insulina.
            </P>
            <P>
              A TII só deve ser reduzida para 0,03 a 0,05 UI/kg/hora, ou mesmo
              suspensa (por curto período de tempo) nos casos de hipoglicemia ou
              redução abrupta da glicemia (queda maior que 80mg/dL/hora) apesar
              da solução plena com SG5%. Após estabilização, é importante
              retornar para 0,10UI/kg/hora.
            </P>
            <P>
              Obs.: a IECI deve ser suspensa quando todas as situações abaixo
              estiverem presentes:
            </P>
            <P>
              Glicemia {'<'} 200 mg/dL / pH sanguíneo {'>'}= 7,3 / Bicarbonato
              sérico {'>'}= 15 / G entre 8 e 12 / Alimentação oral tolerada.
            </P>
            <P>
              Deve-se aplicar uma dose de Insulina Basal 2 horas antes da
              suspensão da insulina EV por BIC:
            </P>
            <List>
              <LItem>
                Se o paciente for sabidamente diabético, aplicar a dose que
                consta na receita.
              </LItem>
              <LItem>
                Se for paciente no primodiagnóstico, aplicar Insulina
                Intermediária (Insulina NPH): 0,5 a 1,0 UI/kg de peso (aplicar
                2/3 da dose total);
              </LItem>
            </List>
            <P>
              Deve-se também aplicar <Italic>bolus</Italic> de InRe via
              subcutânea (SC), na dose de 0,10 UI/Kg de peso, 30 minutos antes
              da suspensão da insulina EV por BIC.
            </P>
          </Subsubsection>
          <Subsubsection title="Insulina Intramuscular e Insulina Subcutânea">
            <P>
              Na impossibilidade de uso de Insulina EV, por algum motivo, ou CAD
              Leve/Moderada e circulação periférica prejudicada, as opções
              validadas são a InRe – IM – 0,20 UI/kg de peso – (máximo 5
              UI/dose) a cada 1 hora (mais dolorosa para o paciente) ou o
              Análogo de Ação Ultrarrápida (Insulina Ultrarrápida – InURa –)
              (SC) – dose inicial de 0,3 UI/kg de peso seguido de 0,1 UI/kg de
              peso a cada 1 hora (preferencial) ou 0,15 a 0,20UI/kg de peso a
              cada 2 a 3 horas.
            </P>
            <P>
              Administração SC de InRe a cada 4 horas também é uma alternativa
              eficaz à insulina EV, quando CAD Leve/Moderada e paciente
              hidratado. A dose inicial é de 0,8 UI/kg de peso/dia e as doses
              subsequentes podem ser ajustadas em 10% a 20% (para mais ou para
              menos) com base no nível glicêmico antes da próxima aplicação de
              insulina.
            </P>
          </Subsubsection>
        </Subsection>
        <Subsection title="Aplicação de Insulina após cessar da CAD">
          <P>A reposição insulínica é feita com aplicação de:</P>
          <List>
            <LItem>Insulina Basal (dose fixa)</LItem>
            <LItem>Insulina Bolus</LItem>
          </List>
          <P>
            --- {'"'}Bolus Prandial{'"'} (dose fixa)
          </P>
          <P>
            --- {'"'}Bolus Correção{'"'} (dose variável)
          </P>
          <P>
            Obs.: deve-se pesar o paciente após cessar da CAD, principalmente se
            primodiagnóstico, para efetuar cálculos de dose das insulinas.
          </P>
          <P>
            A Dose Total Diária de Insulina (DTDI) (Dose Fixa – Insulina Basal e
            Bolus) pode ser prescrita de 2 maneiras:
          </P>
          <List>
            <LItem>
              Paciente previamente diabético: utilizar a DTDI (tipo, dose,
              horário) conforme verificado na receita do paciente.
            </LItem>
            <LItem>
              Primodiagnóstico: calcular a DTDI com base no Peso do paciente.
              Indica-se proporção de 0,5 a 1,0 UI/kg de peso (Dose Fixa):
              <List>
                <LItem>
                  Metade desta dose será de Insulina Basal (NPH) dividida em:
                  2/3 do valor antes do desjejum e 1/3 antes do jantar (iniciar
                  preferencialmente no período matutino). Importante definir
                  {'"'}horário exato{'"'} de aplicação.
                </LItem>
                <LItem>
                  Metade desta dose será de Insulina Bolus ({'"'}Bolus Prandial
                  {'"'}) dividida em: 1/3 antes do desjejum, 1/3 antes do almoço
                  e 1/3 antes do jantar.
                </LItem>
              </List>
            </LItem>
          </List>
          <P>
            Obs.: caso a opção seja por Insulina Glargina (Insulina Basal), a
            dose será aplicada uma única vez ao dia. Importante definir {'"'}
            horário exato{'"'} de aplicação (iniciar preferencialmente no
            período matutino).
          </P>
          <P>
            Obs.: caso o paciente faça uso de InURa indica-se aplicar
            imediatamente antes do desejejum, do almoço e do jantar.
          </P>
          <P>
            Obs.: caso o paciente faça uso de InRe, indica-se aplicar 30 minutos
            antes do desjejum, do almoço e do jantar.
          </P>
          <P>
            A Dose de Insulina Bolus ({'"'}Bolus Prandial{'"'} e {'"'}Bolus
            Correção{'"'}) pode ser prescrita de 2 maneiras:
          </P>
          <List>
            <LItem>
              Paciente previamente diabético: utilizar valor da {'"'}Meta
              glicêmica pré-prandial{'"'} e Fator de Sensibilidade (FS) conforme
              verificado na receita do paciente.
            </LItem>
            <LItem>
              Primodiagnóstico: iniciar com Meta glicêmica pré-prandial: 150 -
              200mg/dL (preferencialmente).
            </LItem>
          </List>
          <P>FS de 100mg/dL se paciente de 2 até 10 anos;</P>
          <P>FS de 50mg/dL se paciente com 10 anos ou mais.</P>
          <P>
            Obs.: os valores da Meta glicêmica pré-prandial e do FS, em relação
            a um paciente primodiagnóstico, <Bold>lactente</Bold>, diferem dos
            mencionados acima; pois normalmente são pacientes muito sensíveis à
            insulina, precisando de pequena quantidade desse hormônio para
            conseguir baixar os níveis de glicose no sangue. O FS estipulado
            inicialmente é elevado, assim como a Meta glicêmica.
          </P>
          <Figure source={img4} size={[678, 542]} />
          <Subsubsection title="Modelo de Prescrição">
            <P>Insulina NPH – Via Subcutânea</P>
            <List>
              <LItem>Aplicar 6UI às 8:00 horas da manhã;</LItem>
              <LItem>Aplicar 3UI às 22:00horas (10h da noite).</LItem>
            </List>
            <P>Insulina Ultrarrápida – Via Subcutânea</P>
            <List>
              <LItem>
                {'"'}Bolus Prandial{'"'} (Dose Fixa);
              </LItem>
              <LItem>Aplicar 3UI imediatamente antes do desjejum;</LItem>
              <LItem>Aplicar 3UI imediatamente antes do almoço;</LItem>
              <LItem>Aplicar 3UI imediatamente antes do jantar.</LItem>
            </List>
            <P>MAIS</P>
            <List>
              <LItem>
                {'"'}Bolus Correção{'"'} (Meta glicêmica pré-prandial: 150mg/dL
                – Fator de Sensibilidade: 50);
              </LItem>
              <LItem>Se glicemia até 150mg/dL 🡪 não aplicar;</LItem>
              <LItem>Se glicemia 151 - 200mg/dL 🡪 aplicar 1UI;</LItem>
              <LItem>Se glicemia 201 - 250mg/dL 🡪 aplicar 2UI;</LItem>
              <LItem>Se glicemia 251 - 300mg/dL 🡪 aplicar 3UI;</LItem>
              <LItem>Se glicemia 301 - 350mg/dL 🡪 aplicar 4UI;</LItem>
              <LItem>Se glicemia maior que 350mg/dL 🡪 aplicar 5UI.</LItem>
            </List>
          </Subsubsection>
        </Subsection>
        <Subsection title="Dieta Via Oral">
          <P>
            Ofertada quando paciente consciente, ausência de vômitos e melhora
            da acidose (pH {'>'}= 7,3 e HCO<Subscript>3</Subscript> {'>'}= 15).
          </P>
        </Subsection>
      </Section>
      <Section title="Acidose Metabólica">
        <P>
          A acidose metabólica é causada pelo acúmulo de cetonas e ácidos
          orgânicos e quando grave pode levar à contratilidade cardíaca
          insuficiente, à vasodilatação cerebral e ao coma, bem como a várias
          complicações gastrintestinais.
        </P>
        <Subsection title="Tratamento">
          <P>
            NaHCO<Subscript>3</Subscript> (8,4% -{'>'}; 1mL = 1mEq OU 10%
            -{'>'}; 1mL = 1,2mEq).
          </P>
          <P>A utilização de NaHCO3 está indicada quando pacientes:</P>
          <List>
            <LItem>
              Mantém pH {'<'} 6,9 após 2 horas da “Etapa de Expansão” OU;
            </LItem>
            <LItem>
              Acidose persistente com Hipercloremia (Cl sérico {'>'} 125mEq/L)
              OU;
            </LItem>
            <LItem>
              Hiperpotassemia grave (K sérico {'>'} 7mEq/L), com repercussão no
              eletrocardiograma.
            </LItem>
          </List>
          <P>A correção dá-se pela fórmula:</P>
          <P>
            mEq HCO<Subscript>3</Subscript> = 0,3 x Peso x (15 – Bicarbonato
            observado) – EV – em 2 a 4 horas – em BIC.
          </P>
          <P>Obs.: máximo de 80mEq/m2 de SCo.</P>
          <P>
            Obs.: diluir o Bicarbonato de Sódio em Água Bidestilada na proporção
            de 1:2.
          </P>
          <Subsubsection title="Exemplo">
            <P>
              Ex: Paciente 20kg, mantendo pH 6,8 (HCO3: 5) após 2 horas de
              {'"'}Etapa da Expansão{'"'}.
            </P>
            <List>
              <LItem>
                mEq HCO<Subscript>3</Subscript> = 0,3 x Peso x (15 – Bicarbonato
                observado)
              </LItem>
              <LItem>
                mEq HCO<Subscript>3</Subscript> = 0,3 x 20 x (15 – 5)
              </LItem>
              <LItem>
                mEq HCO<Subscript>3</Subscript> = 0,3 x 200 = 60
              </LItem>
            </List>
            <P>
              Cálculo 60mEq, com SCo = 0,79m2 (vide anteriormente) e assim valor
              máximo de 63mEq.
            </P>
            <P>
              Sabendo que NaHCO<Subscript>3</Subscript> 8,4% (1mL = 1mEq) 🡪
              60mEq corresponde a 60ml de NaHCO<Subscript>3</Subscript>.
            </P>
            <P>
              Sabendo que indica-se a diluição de Bicarbonato de Sódio em Água
              Bidestilada na proporção de 1:2.
            </P>
            <P>
              Diluição 60ml NaHCO<Subscript>3</Subscript> com 120ml de Água
              Bidestilada = volume total de 180ml
            </P>
            <P>
              Portanto, deve-se correr a solução com 180ml (60ml NaHCO3 de +
              120ml de Água Bidestilada) em BIC - 45 a 90ml/hora.
            </P>
          </Subsubsection>
          <P>
            Obs.: Não deve ser administrado em <Italic>bolus</Italic> pelo risco
            de arritmia cardíaca.
          </P>
          <P>
            Obs.: Não se indica a correção pela fórmula clássica (BE x 0,3 x
            Peso), devido ao maior risco de Alcalose Metabólica.
          </P>
        </Subsection>
      </Section>
      <Section title="Complicações Possíveis no Paciente durante o Tratamento da CAD">
        <Subsection title="Edema Cerebral">
          <P>
            Geralmente ocorre 4 - 12 horas após o início do tratamento e no
            momento em que a acidose, a desidratação, a hiperglicemia e o estado
            geral do paciente já estão melhorando.
          </P>
          <P>
            Os sinais e sintomas iniciais são: início ou piora progressiva de
            cefaleia e diminuição da consciência que evoluem rapidamente para
            deteriorização do sensório, pupilas dilatadas e queda da SAT; sendo
            a presença de hipertensão arterial associada a bradicardia e
            depressão respiratória, os sinais clássicos.
          </P>
          <P>
            O aumento da produção de urina relacionado ao aumento acentuado de
            sódio sérico é um sinal de Herniação Cerebral, causando interrupção
            do fluxo sanguíneo para a glândula pituitária (hipófise). Quando há
            herniação, a mortalidade é alta, mesmo com tratamento.
          </P>
          <P>
            Para prevenção do EC é importante manter a glicemia entre 200 -
            250mg/dL até a resolução da CAD.
          </P>
          <Subsubsection title="Fatores de Risco">
            <List>
              <LItem>
                Idade menor que 5 anos (sendo mais prevalente principalmente nos{' '}
                {'<'} 2 anos);
              </LItem>
              <LItem>Diagnóstico novo de DM1 (mais prevalente);</LItem>
              <LItem>
                Duração e gravidade dos sintomas antes do tratamento (mais
                prevalente);
              </LItem>
              <LItem>Hiperglicemia {'>'} 600mg/dL;</LItem>
              <LItem>Desidratação grave/Choque Hipovolêmico;</LItem>
              <LItem>
                Administração excessiva de fluidos ( {'>'} 4litros/m2 de
                SCo/dia);
              </LItem>
              <LItem>Uso de insulina com queda brusca da hiperglicemia;</LItem>
              <LItem>Tratamento com Bicarbonato de Sódio (NaHCO3);</LItem>
              <LItem>
                Queda rápida na concentração de osmolaridade e no Na plasmático
                (corrigido) durante o tratamento;
              </LItem>
              <LItem>Altos níveis de Ureia;</LItem>
              <LItem>Intubação e hiperventilação.</LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Diagnóstico">
            <P>
              Um método diagnóstico clínico, baseado em critérios
              clínicos/neurológicos, é indicado e possui sensibilidade de 92% e
              taxa de falso positivo de apenas 4%. Atentar que os sinais que já
              estavam presentes antes do início do tratamento, não devem ser
              considerados para o diagnóstico de Edema Cerebral:
            </P>
            <List>
              <LItem>Um Critério Diagnóstico;</LItem>
              <LItem>Dois Critérios Maiores;</LItem>
              <LItem>Um Critério Maior e Dois Critérios Menores.</LItem>
            </List>
            <P>Critérios Diagnósticos:</P>
            <List>
              <LItem>Resposta motora ou verbal anormal à dor;</LItem>
              <LItem>
                Paralisia dos nervos cranianos relacionados ao globo ocular
                (especialmente III-oculomotor, IV-troclear e VI-abdutor);
              </LItem>
              <LItem>
                Padrão respiratório anormal neurogênico (gemência, taquipneia,
                apneia, Respiração de <Italic>Cheyne-Stokes</Italic>).
              </LItem>
            </List>
            <Figure
              source={img5}
              size={[678, 542]}
              caption="Obs.: Respiração de Cheyne-Stokes: apresenta-se como período de apneia seguido por aumento progressivo da amplitude respiratória (há inspiração e expiração), até atingir um máximo, quando então diminui progressivamente, entrando em um novo período de apneia."
            />
            <P>Critérios Maiores:</P>
            <List>
              <LItem>Confusão, nível de consciência flutuante;</LItem>
              <LItem>
                Desaceleração sustentada da FC (diminuição de mais de 20
                batimentos/minuto não atribuível ao volume intravascular
                melhorado ou estado de sono);
              </LItem>
              <LItem>Incontinência urinária inadequada para a idade.</LItem>
            </List>
            <P>Critérios Menores:</P>
            <List>
              <LItem>Vômito;</LItem>
              <LItem>Cefaleia;</LItem>
              <LItem>Letargia ou difícil de acordar;</LItem>
              <LItem>PA diastólica {'>'} 90mmHg;</LItem>
              <LItem>Idade menor de 5 anos.</LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Tratamento">
            <P>
              O tratamento, a partir de uma monitorização frequente e rigorosa
              do estado de consciência, deve iniciar assim que houver suspeita
              clínica; e consiste em aumentar rapidamente a pressão osmótica do
              plasma, a partir de:
            </P>
            <List>
              <LItem>Manutenção da cabeceira elevada – 30˚;</LItem>
              <LItem>
                Normovolemia – diminuir administração de fluidos em 1/3;
              </LItem>
              <LItem>
                Uso de Manitol 20% (200mg/mL) 0,5 a 1,0 g/Kg de peso em 15
                minutos – EV – (em BIC) (o efeito deve ser aparente em até 15
                minutos e deverá durar cerca de 2 horas. Se necessário, a dose
                pode ser repetida após 30 minutos);
              </LItem>
              <LItem>
                Uso de NaCl 3% 2,5 a 5mL/kg de peso em 15 minutos – EV – (em
                BIC) com manutenção do Na (valor corrigido) entre 150 a 160mEq/L
                (opção alternativa ou associada, quando necessário, a uma
                segunda dose de Manitol).
              </LItem>
            </List>
            <P>
              Obs.: importante realizar Tomografia Computadorizada de Crânio,
              após paciente estabilizado, com o intuito de verificar presença de
              trombose cerebrovascular e hemorragia intracraniana.
            </P>
          </Subsubsection>
        </Subsection>
        <Subsection title="Hipoglicemia">
          <P>
            É a complicação mais comum. Considera-se hipoglicemia valor
            glicêmico {'<'} 70mg/dL
          </P>
          <P>
            Na literatura, observa-se indicações de correção de várias maneiras,
            entretanto deve-se sempre avaliar o estado clínico do paciente e a
            presença de acesso venoso pérvio, buscando melhora glicêmica e
            clínica do paciente. A correção da Hipoglicemia é considerada eficaz
            quando glicemia {'>'}= 100mg/dL.
          </P>
          <Subsubsection title="Uso de SG10%">
            <List>
              <LItem>
                Aplicar <Italic>bolus</Italic> 5 a 10ml de SG10% por kg de peso
                – EV – e verificar nova glicemia após 5 minutos; se não houver
                reversão da hipoglicemia, repetir o processo – PALS (Pediatric
                Advanced Life Support).
              </LItem>
              <LItem>
                Aplicar <Italic>bolus</Italic> de 2ml SG 10% por kg de peso – EV
                – e verificar nova glicemia após 5 minutos; se não houver
                reversão da hipoglicemia, repetir o processo – Sociedade
                Brasileira de Pediatria (SBP)
              </LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Uso de SG50%">
            <Figure source={img6} size={[678, 542]} />
          </Subsubsection>
          <Subsubsection title="Uso de Glucagon">
            <P>
              Uso de Glucagon (paciente inconsciente e sem acesso venoso): IM ou
              SC.
            </P>
            <P>
              Aplicar 1mg de Glucagon se paciente ≥ 25kg e 0,5mg para paciente{' '}
              {'<'} 25kg.
            </P>
            <P>Obs.: O PALS considera hipoglicemia valor glicêmico, 60mg/dL.</P>
          </Subsubsection>
        </Subsection>
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
