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

import img1 from './images/image6.png'

export default function ChoqueSeptico(): JSX.Element {
  return (
    <Routine
      id="choque-septico"
      name="Choque Séptico"
      categories={['emergencia']}
      authors={['rafael']}
      tags={['sepsis', 'vasoativas']}
    >
      <Section title="Introdução">
        <P>Essa rotina aborda choque séptico / drogas vasoativas.</P>
        <P>
          Apesar dos avanços na terapia antimicrobiana, manejo de drogas
          vasoativas e novos métodos de suporte avançado de vida, o choque
          séptico permanece uma importante causa de morbimortalidade em Unidades
          de Terapia Intensiva (UTI). Dados recentes têm demonstrado uma melhora
          da sobrevida em crianças com choque séptico, relacionada ao advento
          das UTIs Pediátrica e Neonatal e ao uso da terapêutica guiada por
          metas (semelhante à sugerida pelo American College of Critical Care
          Medicine” (ACCM) – “Clinical Parameters for Hemodynamic Support in
          Pediatric and Neonatal Septic Shock”).
        </P>
      </Section>
      <Section title="Diagnóstico de Sepse">
        <Subsection title="Sinais de Alarme">
          <List>
            <LItem>Febre;</LItem>
            <LItem>
              Alteração Neurológica (sonolência, não fixação do olhar,
              comportamento diferente do habitual);
            </LItem>
            <LItem>Leucocitose.</LItem>
          </List>
        </Subsection>
        <Subsection title="Definições">
          <P>
            Se alteração de 2 ou mais parâmetros (exceto a combinação de febre +
            leucocitose) -{'>'} SEPSE GRAVE -{'>'} Fazer PEWS. Se febre +
            leucocitose, mas com outros parâmetros normais -{'>'} DOENÇA FEBRIL
            GRAVE (fazer antibióticos + hidratação venosa, mas protocolo de
            sepse/ choque séptico <Bold>não se aplica</Bold>)
          </P>
        </Subsection>
        <Subsection title="SIRS Modificado">
          <List>
            <LItem>
              Temperatura {'>'} 38.5 °C ou {'<'} 36 °C;
            </LItem>
            <LItem>
              Alteração neurológica (sonolento, não fixação do olhar,
              comportamento diferente do basal);
            </LItem>
            <LItem>Hemograma anormal;</LItem>
            <LItem>Taquipneia;</LItem>
            <LItem>Frequência cardíaca alterada para idade.</LItem>
          </List>
          <Table
            colWidths={[100, 100, 125, 100, 100]}
            header={[
              'Idade',
              'Frequência Cardíaca',
              'Frequência Respiratória',
              'Pressão Arterial Sistólica',
              'Leucócitos 1000/mm³'
            ]}
            data={[
              ['1 mês a 1 ano', '> 180\n< 90', '> 34', '< 94', '> 17.5\n< 5'],
              ['1 ano a 5 anos', '> 140', '> 22', '< 100', '> 15.5\n< 6'],
              ['6 anos a 12 anos', '> 130', '> 18', '< 105', '> 13.5\n< 4.5'],
              ['13 anos a 18 anos', '> 110', '> 14', '< 117', '> 11.5\n< 4.5']
            ]}
          />
        </Subsection>
        <Subsection title="PEWS Modificado">
          <Table
            colWidths={[100, 150, 150, 150, 150]}
            header={['', '0', '1', '2', '3']}
            data={[
              [
                'Comportamento',
                'Brincando/apropriado ou Dormindo, mas despertável',
                'Inquieto, mas consolável',
                'Irritado, difícil de consolar',
                'Letárgico/confuso\nResposta reduzida a dor'
              ],
              [
                'Cardiovascular',
                'Corado ou Perfusão capilar 1-2 segundos',
                'Pálido OU Perfusão capilar 3 segundos',
                'Cianótio OU Enchimento capilar acima de 4 segundos OU FC no limite ou acima do normal para a idade',
                'Cianótico e moteado OU Perfusão capilar 5 segundos OU Taquicardia > 10 limite normal para a idade OU FC < 60 para idade 4 anos e maior'
              ],
              [
                'Respiratório',
                'Parâmetros normais\nSem uso de musculatura acessória\nAusência de retrações',
                <Text key={1}>
                  FR no limite ou acima do normal OU Uso de musculatura
                  acessória OU O₂ suplementar
                </Text>,
                <Text key={2}>
                  FR {'>'} 10 acima do limite normal para a idade\nRetratações
                  OU FiO₂ 40% OU Alto-Fluxo/CPAP/VNI
                </Text>,
                <Text key={3}>
                  FR {'<'}Text 20 para lactentes, {'<'} 10 para 4 anos e maior,
                  com retratações e gemência OU - FiO₂ {'>'} 50% / Alto-Fluxo{' '}
                  {'>'} 4 l/min OU Salbutamol contínuo
                </Text>
              ]
            ]}
          />
        </Subsection>
        <Subsection title="SE">
          <P>
            PEWS 3-5 pontos, colher gasometria + lactato e repetir PEWS em 30
            minutos OU considerar início do tratamento.
          </P>
          <P>
            PEWS 6-9 -{'>'} CHOQUE SÉPTICO, Iniciar tratamento conforme
            protocolo.
          </P>
          <P>
            SE: SIRS alterado + Hipotensão OU Lactato aumentado -{'>'} CHOQUE
            SÉPTICO, Iniciar tratamento conforme protocolo
          </P>
        </Subsection>
      </Section>
      <Section title="Tratamento">
        <Subsection title="Metas Básicas">
          <P>
            Bolus IV 20 ml/kg de soro fisiológico em 5-10 minutos ou o mais
            rápido possível. Antibióticos de largo espectro imediatamente, na
            dose máxima permitida. Coleta de hemocultura. Gasometria e Lactato
            (arterial ou venoso), glicemia, cálcio (iônico de preferência), Na /
            K, creatinina, hemograma (se ainda não foi colhido), PCR. Se
            possível, exames adicionais: TGO/TGP, bilirrubinas, uréia.
          </P>
        </Subsection>
        <Subsection title="Metas Adicionais">
          <Subsubsection title="Oferta de Oxigênio">
            <P>
              Oferecer oxigênio por cateter nasal de alto fluxo ou máscara não
              reinalante para todos os pacientes. Considerar VNI ou intubação
              orotraqueal conforme gravidade ou se houver necessidade de sedação
              para realização de procedimentos invasivos.
            </P>
          </Subsubsection>
          <Subsubsection title="Acesso Vascular">
            <P>
              Dois acessos venosos imediatamente. Se não for possível acesso
              periférico, obter acesso intraósseo. Considerar, assim que
              possível, a colocação de acesso central. A concentração máxima de
              adrenalina para ser feita em veia periférica deverá ser de 20 mcg/
              ml ou menor.
            </P>
          </Subsubsection>
          <Subsubsection title="Administração de Fluidos">
            <P>
              Administração de fluidos: infusões sequenciais de 20 ml/kg de
              solução cristalóide, podendo chegar até um total de 60 ml/kg.
              Infundir o volume de forma rápida, sempre com reavaliação clínica
              da perfusão, pressão arterial, saturação venosa central e
              ecocardiograma, quando disponíveis entre as infusões. Se
              necessário infusões adicionais, utilizar colóides (albumina 5%).
              Se observada hepatomegalia ou estertores pulmonares e aumento do
              esforço respiratório, interromper as infusões e considerar
              furosemida.
            </P>
          </Subsubsection>
          <Subsubsection title="Drogas Inotrópicas">
            <P>
              A droga inicial de escolha é a adrenalina. Iniciar com a dose de
              0.1 mcg/kg/min e aumentar progressivamente (0,1 a 1,0 mcg/kg/min)
              se necessário, conforme avaliação clínica. Em caso de hipotensão
              refratária, associar noradrenalina (0,1 a 1,0 mcg/kg/min).
            </P>
            <P>
              Outras drogas vasoativas podem ser necessárias, como a milrinona,
              no caso do choque frio, com resistência periférica aumentada. O
              que leva ao aumento da PA. (Milrinona 0,25 a 0,75mcg/kg/min
              iniciar com dose baixa e aumentar lentamente, droga tem meia vida
              longa {'>'} 4h).
            </P>
            <Table
              colWidths={[100, 175, 125, 125]}
              header={['Droga', 'Dose (mcg/kg/min)', 'Apresentação', 'MCG/ML']}
              data={[
                ['Dobutamina', '5 - 20', '250 mg/20ml', '12.500 mcg/ml'],
                ['Dopamina', '5 - 20', '50 mg/10ml', '5.000 mcg/ml'],
                ['Epinefrina', '0,1 - 1,0', '1 mg/ml', '1.000 mcg/ml'],
                ['Norepinefrina', '0,1 - 1,0', '4 mg/4ml*', '1.000 mcg/ml'],
                ['Milrinona', '0,25 - 0,75', '20 mg/20ml', '1.000 mcg/ml']
              ]}
              caption="*Hemitartarato de Norepinefrina, na ampola há descrição de 2 mg/ml, no entanto apenas 1mg é a parte ativa da solução. A outra parte é apenas veículo, sendo a dose = 1 mg/ml."
            />
            <Figure source={img1} size={[940, 1436]} />
          </Subsubsection>
          <Subsubsection title="Nível de Hemoglobina">
            <P>
              A meta para nível de hemoglobina é de 7 g/dl. Nos pacientes
              descompensados mais graves, considerar transfusão para obter nível
              igual ou maior a 9 g/dl. Nas crianças com anemia grave ({'<'} 5
              g/dl), por hemólise autoimune, sangramento ou crise de falcização,
              não expandir com cristalóides, pois devem receber primeiro
              concentrado de hemácias.
            </P>
          </Subsubsection>
          <Subsubsection title="Correção de glicose e cálcio">
            <P>
              Recomenda-se 1 mg/kg de glicose em <Italic>bolus</Italic>:
              lactentes e crianças SG 25% 4 ml/kg; adolescentes SG25% 4 ml/kg ou
              SG 50% 20 ml. Gluconato de cálcio a 10%, na dose de 1 ml/kg,
              máximo de 20 ml, infusão em 30 minutos. Fazer em acesso central.
            </P>
          </Subsubsection>
          <Subsubsection title="Antibióticos">
            <P>
              Devem ser administrados o quanto antes, dentro da primeira hora de
              atendimento. Ceftriaxona para criança com foco domiciliar,
              previamente hígida. Associar clindamicina se síndrome do choque
              tóxico. Crianças com doença de base, foco intra-hospitalar ou
              internação prévia recente: cefepime ou meropenem + vancomicina (se
              dispositivos invasivos ou imunodeprimido): Considerar indicações
              de antivirais ou antifúngicos conforme o caso.
            </P>
          </Subsubsection>
          <Subsubsection title="Corticóide">
            <P>
              Nos casos de Púrpura fulminans ou uso crônico de corticosteróides.
              Preescrever hidrocortisona 2 mg/kg/dia dividida em 3 doses, com
              diminuição gradual após 5 dias.
            </P>
          </Subsubsection>
        </Subsection>
      </Section>
      <Section title="Monitorização">
        <Subsection title="Na Primeira hora do Choque">
          <List>
            <LItem>
              Oximetria de pulso contínua (dar preferência ao oxímetro Masimo e
              monitorizar o índice de perfusão);
            </LItem>
            <LItem>Monitorização cardíaca: ECG contínuo;</LItem>
            <LItem>Controle de pressão arterial (PA) de 15/15 minutos;</LItem>
            <LItem>Monitorização de temperatura;</LItem>
            <LItem>Monitorização de débito urinário por sonda vesical;</LItem>
            <LItem>Ecocardiograma funcional, se disponível.</LItem>
          </List>
        </Subsection>
        <Subsection title="Após a Primeira Hora">
          <List>
            <LItem>
              Monitorização da pressão arterial invasiva (Pai), através de
              cateterização arterial;
            </LItem>
            <LItem>
              Monitorização da saturação venosa central de oxigênio: através da
              coleta de gasometria venosa central seriada;
            </LItem>
            <LItem>
              Ecocardiograma funcional: avaliação do débito cardíaco e
              complacência da veia cava inferior.
            </LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Outras Considerações">
        <List>
          <LItem>
            PLASMA: se coagulopatia presente E sangramento ativo ou necessidade
            de procedimento invasivo;
          </LItem>
          <LItem>PLAQUETAS: se plaquetas {'<'} 50.000 mm³;</LItem>
          <LItem>
            VENTILAÇÃO MECÂNICA: estratégias de ventilação protetora;
          </LItem>
          <LItem>
            SEDAÇÃO E ANALGESIA: evitar uso de etomidato (bloqueio da adrenal) e
            propofol (hipotensão);
          </LItem>
          <LItem>
            CONTROLE DA GLICEMIA: manter glicemia abaixo de 180 mg%;
          </LItem>
          <LItem>
            DIURÉTICOS: usar diuréticos de forma precoce, uma vez atingida a
            estabilidade hemodinâmica para evitar balanço hídrico acumulado
            positivo acima de 10% do peso corporal;
          </LItem>
          <LItem>NUTRIÇÃO: dar preferência a nutrição enteral;</LItem>
          <LItem>
            IMUNOGLOBULINA ENDOVENOSA: considerar no choque tóxico e fasciíte
            necrosante.
          </LItem>
        </List>
      </Section>
      <Section title="Indicadores">
        <List>
          <LItem>Mortalidade institucional de sepse e choque séptico;</LItem>
          <LItem>
            Taxa de aderência ao tratamento inicial (antibióticos, fluido,
            inotrópico, hemocultura, acessos venosos, monitorização);
          </LItem>
          <LItem>
            Tempo para dose de antibióticos (meta {'<'} 60 minutos);
          </LItem>
          <LItem>
            Tempo para fluidos (SF) (meta 40 mL/kg {'<'} 60 minutos).
          </LItem>
        </List>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Dellinger R, et al. Surviving Sepsis Campaign: International Guidelines for Management of Severe Sepsis and Septic Shock: 2012. CritCareMed 2013 Vol 41, No. 2 ."
        />
        <Reference
          idx={2}
          body="Brierley J, et al. Clinical practice parameters for hemodynamic support of pediatric and neonatal septic shock: 2007 update from the American College of Critical Care Medicine. Crit Care Med 2009 Vol. 37, No. 2."
        />
        <Reference
          idx={3}
          body="Goldstein B, et al. International pediatric sepsis consensus conference: Definitions for sepsis and organ dysfunction in pediatric. PediatrCrit Care Med 2005 Vol. 6, No. 1 ."
        />
        <Reference
          idx={4}
          body="Kissoon N. Sepsis guideline implementation: benefits, pitfalls and possible solutions. Crit Care. 2014;18(2):207."
        />
        <Reference
          idx={5}
          body="Kissoon N. Sepsis guidelines: Suggestions to improve adherence. J Infect. 2015;71 Suppl 1:S36-41."
        />
        <Reference
          idx={6}
          body="Noritomi DT, Ranzani OT, Monteiro MB, Ferreira EM, Santos SR, Leibel F, et al. Implementation of a multifaceted sepsis education program in an emerging country setting: clinical outcomes and cost-effectiveness in a long-term follow-up study. Intensive Care Med. 2014;40(2):182-91."
        />
      </Section>
    </Routine>
  )
}
