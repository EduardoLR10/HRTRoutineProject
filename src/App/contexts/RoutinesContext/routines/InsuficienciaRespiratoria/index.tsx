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

export default function InsuficienciaRespiratoria(): JSX.Element {
  return (
    <Routine
      id="insuficiencia-respiratoria"
      name="Insuficiência Respiratória no RN"
      categories={['neonatologia', 'emergencia']}
      authors={['maria']}
      tags={['parada', 'cardiorrespiratória', 'recém', 'nascido']}
    >
      <Section title="Aspectos Gerais">
        <P>
          Essa rotina aborda a insuficiência respiratória no RN - manejo
          clínico.
        </P>
        <P>
          Pode representar o primeiro sinal de uma infecção grave e
          potencialmente letal, sendo fundamental o reconhecimento e avaliação
          precoces de todo bebê acometido. A maioria das doenças respiratórias
          neonatais manifesta-se nas primeiras horas de vida, de forma
          inespecífica e, muitas vezes, com sobreposição de sinais e sintomas. É
          possível alcançar o diagnóstico correto a partir da análise cuidadosa
          da história clínica materna e do parto, e dos sinais e sintomas
          clínicos, em conjunto com a propedêutica de diagnóstico por imagem.
        </P>
      </Section>
      <Section title="Avaliar">
        <Subsubsection title="Padrão Respiratório-Taquipneia">
          <P>
            Considera-se taquipneia quando, em repouso ou durante o sono, a
            frequência respiratória mantém-se persistentemente acima de 60
            movimentos por minuto.
          </P>
        </Subsubsection>
        <Subsubsection title="Ritmo">
          <P>Apneia e respiração periódica;</P>
          <P>
            É caracterizada por pausa respiratória superior a 20 segundos, ou
            entre 10 e 15 segundos se acompanhada de bradicardia, cianose ou
            queda de saturação de oxigênio;
          </P>
        </Subsubsection>
        <Subsubsection title="Batimento de asas nasais"></Subsubsection>
        <Subsubsection title="Gemido expiratório"></Subsubsection>
        <Subsubsection title="Retrações torácicas"></Subsubsection>
        <Subsubsection title="Cianose">
          <P>
            Pode-se classificar a cianose em localizada ou periférica, e
            generalizada ou central. A cianose central, envolvendo a mucosa
            oral, é observada quando a concentração de hemoglobina reduzida
            excede 5g/dl, condição comum durante a hipoxemia grave. A cianose
            central, quando presente, deve ser sempre investigada, procurando-se
            afastar cardiopatias congênitas, hipertensão pulmonar e afecções
            graves do parênquima pulmonar.
          </P>
        </Subsubsection>
      </Section>
      <Section title="Identificação dos Sinais de Alerta">
        <P>
          Sinais e sintomas respiratórios que indicam condição grave e
          necessidade de intervenção imediata em casos de:
        </P>
        <Subsection title="Obstrução de Vias Aéreas">
          <List>
            <LItem>Gasping;</LItem>
            <LItem>Sufocação;</LItem>
            <LItem>Estridor.</LItem>
          </List>
        </Subsection>
        <Subsection title="Falência Respiratória">
          <List>
            <LItem>Apneia;</LItem>
            <LItem>Esforço respiratório débil.</LItem>
          </List>
        </Subsection>
        <Subsection title="Colapso Circulatório">
          <List>
            <LItem>Bradicardia;</LItem>
            <LItem>Hipotensão arterial;</LItem>
            <LItem>Má perfusão periférica.</LItem>
          </List>
        </Subsection>
        <Subsection title="Má oxigenação">
          <List>
            <LItem>Cianose;</LItem>
            <LItem>Hipoxemia ou palidez;</LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Diagnóstico">
        <List>
          <LItem>História Clínica;</LItem>
          <LItem>Quadro Clínico;</LItem>
          <LItem>Quadro Radiológico.</LItem>
        </List>
      </Section>
      <Section title="Causas Frequentes no PS">
        <Subsection
          title={
            <>
              <Italic>Hipertensão Pulmonar Persistente</Italic>
            </>
          }
        >
          <P>
            A HPPN é uma síndrome clínica caracterizada por hipoxemia grave e
            refratária, proveniente da diminuição do fluxo sanguíneo pulmonar e
            shunt direito-esquerdo através do forame oval e/ou canal arterial. O
            curto-circuito extrapulmonar decorre do aumento relativo da pressão
            na artéria pulmonar em relação à sistêmica. Esse quadro pode ocorrer
            de forma primária ou secundária a uma série de doenças
            cardiorrespiratórias neonatais.
          </P>
          <Subsubsection title="Principais doenças associadas à HPPN">
            <List>
              <LItem>Síndrome da dificuldade respiratória.</LItem>
              <LItem>Síndrome da aspiração de mecônio.</LItem>
              <LItem>Hipoplasia pulmonar.</LItem>
              <LItem>Cardiopatias congênitas.</LItem>
              <LItem>Sepse, pneumonia.</LItem>
              <LItem>Asfixia perinatal.</LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Exames que auxiliam no diagnóstico">
            <P>
              <Bold>Ecocardiografia Doppler:</Bold>
            </P>
            <P>
              É o método de eleição para o diagnóstico e avaliação da eficácia
              das intervenções terapêuticas na HPPN. A ecocardiografia permite
              documentar o grau de shunt direito-esquerdo pelo canal arterial
              e/ou forame oval e a magnitude da hipertensão pulmonar. Além
              disso, o exame é fundamental para avaliar o estado da
              contratilidade miocárdica e afastar doenças estruturais cardíacas,
              em particular as cardiopatias dependentes de shunt
              direito-esquerdo, tais como estenose aórtica, interrupção do arco
              aórtico e síndrome da disfunção do ventrículo esquerdo.
            </P>
          </Subsubsection>
          <Subsubsection title="Critérios diagnósticos da HPP">
            <P>Um neonato pode ser considerado portador de HPPN quando:</P>
            <P>
              Estiver em ventilação mecânica com FiO ₂ de 1,0 mantendo cianose
              central.
            </P>
            <P>
              Apresentar labilidade nos níveis de oxigenação arterial, ou seja,
              mais de dois episódios de queda da SatO₂ abaixo de 85% no período
              de 12 horas, que necessitem de aumento no suporte ventilatório ou
              ventilação manual para revertê-los.
            </P>
            <P>
              Houver diferença da oxigenação arterial entre os sítios
              pré-ductais (membro superior direito) e pós-ductais (membros
              inferiores); considerar diferença significante quando o gradiente
              entre PaO₂ pré e pós-ductal for superior a 20mmHg ou de SatO₂ pré
              e pós-ductal superior a 5%.
            </P>
            <P>Houver evidências ecocardiográficas de hipertensão pulmonar.</P>
          </Subsubsection>
        </Subsection>
        <Subsection
          title={
            <>
              <Italic>Pneumonia / Sepse Neonatal</Italic>
            </>
          }
        >
          <P>
            A pneumonia neonatal é um processo inflamatório dos pulmões
            resultante de infecção bacteriana, viral ou fúngica ou de origem
            química. Com frequência, é um dos primeiros sinais de infecção
            sistêmica, estando associada a quadros como sepse e meningite
            neonatal.
          </P>
          <P>As pneumonias neonatais têm sido classicamente divididas em:</P>
          <List>
            <LItem>
              <Bold>Precoces</Bold> (até 48 horas de vida) – predomínio de
              bactérias gram-negativas.
            </LItem>
            <LItem>
              <Bold>Tardias</Bold> – (após 48 horas de vida) – predomínio de
              bactérias gram-positivas.
            </LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Levar em Consideração">
        <P>
          Fatores de risco e parâmetros clínicos, radiológicos e laboratoriais
          para definição de pneumonia neonatal;
        </P>
        <Subsection
          title={
            <>
              <Italic>Fatores de Risco Maternos</Italic>
            </>
          }
        >
          <P>
            <Bold>Corioamnionite clínica:</Bold>
          </P>
          <List>
            <LItem>Febre materna ({'>'} 38°C);</LItem>
            <LItem>FC materna {'>'} 100 bpm;</LItem>
            <LItem>GB materno {'>'} 20.000/mm³;</LItem>
            <LItem>Fc fetal {'>'} 160 bpm;</LItem>
            <LItem>Útero doloroso - Fisiometria;</LItem>
            <LItem>Rotura de membranas amnióticas {'>'}18h;</LItem>
            <LItem>Trabalho de parto prematuro sem causa aparente;</LItem>
            <LItem>
              Colonização materna por estreptococo beta hemolítico do grupo B.
            </LItem>
          </List>
        </Subsection>
        <Subsection
          title={
            <>
              <Italic>Sinais clínicos sugestivos de Sepse</Italic>
            </>
          }
        >
          <List>
            <LItem>Intolerância alimentar;</LItem>
            <LItem>Letargia;</LItem>
            <LItem>Hipotonia;</LItem>
            <LItem>Hipo ou hipertermia;</LItem>
            <LItem>Distensão abdominal.</LItem>
          </List>
        </Subsection>
        <Subsection
          title={
            <>
              <Italic>
                Imagens radiológicas que permanecem inalteradas por mais de 48
                horas
              </Italic>
            </>
          }
        >
          <List>
            <LItem>Infiltrado nodular ou grosseiro;</LItem>
            <LItem>Infiltrado granular fino e irregular;</LItem>
            <LItem>Broncogramas aéreos;</LItem>
            <LItem>Edema pulmonar;</LItem>
            <LItem>Consolidação segmentar ou lobar.</LItem>
          </List>
        </Subsection>
        <Subsection
          title={
            <>
              <Italic>Triagem laboratorial positiva para Sepse</Italic>
            </>
          }
        >
          <List>
            <LItem>Escore hematológico de Rodwell ≥3;</LItem>
            <LItem>Proteína C reativa positiva.</LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Tratamento">
        <Subsection title="Pneumonia Tardia">
          <List>
            <LItem>
              Depende da prevalência das bactérias no hospital e na comunidade;
            </LItem>
            <LItem>Vancomicina + aminoglicosídeo;</LItem>
            <LItem>
              Ceftazidime + aminoglicosídeo (
              <Italic>Pseudomanas aeroginosa</Italic>).
            </LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Cardiopatias Congênitas">
        <P>
          Diante de um RN com suspeita de cardiopatia congênita, pode-se
          realizar o teste de hiperóxia com o objetivo de auxiliar no
          diagnóstico diferencial entre cardiopatia congênita, pneumopatia
          neonatal e hipertensão pulmonar persistente do RN.
        </P>
        <P>
          O teste consiste em oferecer oxigênio a 100% para o RN e obter pO2 por
          gasometria arterial da região pré-ductal (membro superior direito) e
          pós-ductal (um dos membros inferiores).
        </P>
        <P>
          De acordo com o valor da pO2 , o teste é interpretado da seguinte
          maneira:
        </P>
        <Subsection title="Teste Positivo">
          <List>
            <LItem>
              pO2 {'>'} 250 mmHg: excluídas as cardiopatias congênitas críticas.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Teste Positivo">
          <List>
            <LItem>
              pO2 {'<'} 100 mmHg: provável cardiopatia congênita cianótica
              crítica com fluxo pulmonar canal-dependente (atresia pulmonar) ou
              circulação em paralelo (transposição das grandes artérias).
            </LItem>
            <LItem>
              pO2 entre 100 e 250 mmHg: possível cardiopatia congênita com shunt
              misto (Ex.: tronco arterial comum, ventrículo único sem estenose
              pulmonar, síndrome de hipoplasia do coração esquerdo).
            </LItem>
          </List>
          <P>
            Caso ocorra diferença entre a pO2 pré e pós-ductal acima de 20 mmHg,
            deve-se suspeitar de hipertensão pulmonar persistente do RN.
          </P>
          <P>
            O RN que apresentar teste de hiperóxia negativo tem grande chance de
            ser portador de cardiopatia com fluxo pulmonar ou sistêmico
            dependente do canal arterial, devendo receber prostaglandina E1 até
            que se realize o diagnóstico anatômico correto.
          </P>
        </Subsection>
      </Section>
      <Section title="Exames Complementares">
        <Subsection title="Radiografia de Tórax">
          <Subsubsection
            title={
              <>
                <Italic>Dois aspectos principais devem ser observados</Italic>
              </>
            }
          >
            <P>
              <Italic>Tamanho da área cardíaca</Italic>: presença de
              cardiomegalia sugere cardiopatia, embora a presença de área
              cardíaca normal não exclua esse diagnóstico.
            </P>
            <P>
              <Italic>Avaliação da trama vascular pulmonar</Italic>: quando
              diminuída, sugere cardiopatias com fluxo pulmonar dependente do
              canal arterial (atresia pulmonar); quando aumentada, sugere
              cardiopatias com fluxo sistêmico dependente do canal arterial,
              cardiopatias com shunt misto e cardiopatias com shunt
              esquerda-direita.
            </P>
          </Subsubsection>
        </Subsection>
        <Subsection title="Ecocardiograma com mapeamento de fluxo em cores">
          <P>
            O ecocardiograma é exame obrigatório em qualquer RN com suspeita de
            cardiopatia.
          </P>
          <P>
            <Bold>Tratamento:</Bold>
          </P>
          <P>
            Existem duas situações em que se deve iniciar imediatamente o uso de
            PGE1, mesmo antes da confirmação diagnóstica de cardiopatia:
          </P>
          <List>
            <LItem>
              Quando o RN apresenta cianose acentuada não responsiva ao uso de
              oxigênio (teste de hiperóxia negativo).
            </LItem>
            <LItem>
              Quando o RN apresenta quadro de choque, sem boa resposta às
              medidas iniciais de tratamento.
            </LItem>
          </List>
        </Subsection>
        <Subsubsection title="O uso de PGE1 está indicado nas seguintes cardiopatias congênitas">
          <List>
            <LItem>
              Cardiopatias com fluxo pulmonar dependente do canal arterial (Ex.:
              atresia pulmonar);
            </LItem>
            <LItem>
              Cardiopatias com fluxo sistêmico dependente do canal arterial
              (Ex.: atresia aórtica);
            </LItem>
            <LItem>
              Cardiopatias com circulação em paralelo (Ex.: transposição das
              grandes artérias).
            </LItem>
          </List>
          <P>
            <Bold>Dose Utilizada:</Bold>
          </P>
          <P>
            A PGE1 deve ser utilizada em infusão contínua. A dose inicial é de
            0,01µg/kg/min. Caso não haja resposta adequada, essa dose pode ser
            aumentada até 0,1µg/kg/min. É indicativa de boa resposta à
            administração da PGE1, uma melhora clínica dentro de 30 a 60
            minutos, seja da cianose, seja dos sinais de baixo débito sistêmico.
          </P>
        </Subsubsection>
      </Section>
      <Section title="Tratamento">
        <List>
          <LItem>DIETA ZERO. SOG ABERTA;</LItem>
          <LItem>HIDRATAÇÃO VENOSA, conforme peso e idade;</LItem>
          <LItem>
            SUPORTE COM O<Subscript>2, por HOOD, CPAP nasal ou VMA.</Subscript>
          </LItem>
        </List>
        <P>
          <Bold>
            Uma vez ajustados os parâmetros do suporte respiratório é
            fundamental verificar:
          </Bold>
        </P>
        <List>
          <LItem>
            Sinais clínicos de aumento do trabalho respiratório (agitação e
            retrações da caixa torácica) e cianose;
          </LItem>
          <LItem>
            Estado hemodinâmico: pulsos, perfusão periférica, pressão arterial,
            débito urinário e frequência cardíaca;
          </LItem>
          <LItem>
            Gasometria arterial: a análise dos gases sanguíneos, aliada aos
            parâmetros clínicos é, ainda, o melhor indicador da necessidade de
            modificações do suporte ventilatório.
          </LItem>
        </List>
        <P>
          <Bold>Avaliar a necessidade de administrar analgésicos: </Bold>
        </P>
        <P>Fentanil 1 a 2µg/kg por hora, EV contínuo.</P>
        <P>
          <Bold>Avaliar a necessidade de associar sedativos: </Bold>
        </P>
        <P>Midazolam (0,01 a 0,06mg/kg por hora, EV contínuo)</P>
      </Section>
      <Section title="Como proceder a Exturbação Traqueal">
        <P>
          É importante estabelecer um protocolo para a extubação traqueal,
          seguindo as seguintes recomendações:
        </P>
        <P>
          Considerar a extubação traqueal se o RN mantiver quadro respiratório
          estável por no mínimo 6 horas, com os seguintes parâmetros
          ventilatórios: FR {'<'} 20cpm, PIP {'<'} 20cmH ₂O, PEEP de 4cmH ₂ O e
          FiO ₂ {'<'} 0,40.
        </P>
        <P>
          <Bold>
            O RN deve estar estável em relação aos seguintes sistemas:
          </Bold>
        </P>
        <List>
          <LItem>
            <Bold>Hemodinâmico:</Bold> PA, perfusão periférica e FC devem
            situar-se nos limites da normalidade sem suporte ou sob infusão
            mínima de drogas vasoativas.
          </LItem>
          <LItem>
            <Bold>Infeccioso:</Bold> se o RN tem sepse e/ou meningite e/ou
            enterocolite necrosante, essas infecções devem estar controladas.
            Hematológico: o RN deve ter hematócrito mínimo de 35% para preservar
            a capacidade carreadora de oxigênio.
          </LItem>
          <LItem>
            <Bold>Metabólico:</Bold> o neonato deve estar euglicêmico e com
            níveis normais de sódio, potássio, cálcio e magnésio.
          </LItem>
          <LItem>
            <Bold>Neurológico:</Bold> verificar se o RN é capaz de manter a
            respiração espontânea de maneira rítmica e regular. Se ele é
            portador de alguma lesão cerebral, a extensão da afecção não deve
            comprometer o funcionamento do centro respiratório.
          </LItem>
        </List>
        <P>
          Administrar corticosteróide para prevenir edema de laringe e/ou
          subglótico nos RN que permaneceram intubados por períodos superiores a
          duas semanas ou que apresentaram falha em extubação prévia devido à
          obstrução de vias aéreas superiores.
        </P>
        <P>
          Iniciar com dexametasona 0,1mg/kg por dose, 3 doses, sendo a primeira
          cerca de 4 horas antes da extubação e as duas subsequentes a cada 8
          horas após a extubação. Nos casos de extubação não planejada,
          ministrar a primeira dose logo após a extubação e as duas doses
          subsequentes a cada 8 horas.
        </P>
      </Section>
      <Section title="Cuidados Pós-Extubação">
        <P>Manter jejum por cerca de 2 horas após o procedimento.</P>
        <P>
          Realizar inalação com 1,0 ml de solução milesimal de L-adrenalina
          pura, imediatamente após a extubação e depois a cada 4 horas, conforme
          indicação clínica. Monitorizar cuidadosamente o RN, em relação aos
          efeitos sistêmicos da adrenalina, como taquicardia, arritmias
          cardíacas e hipertensão arterial, entre outros.
        </P>
        <P>
          Se o concepto tiver sido exposto a situação de alto risco infeccioso
          (corioamnionite, amniorrexe prolongada, infecção materna, etc.), e/ou
          os exames laboratoriais estiverem alterados e/ou houver algum sinal
          clínico sugestivo de sepse, deve-se introduzir antibioticoterapia
          sistêmica - ampicilina + aminoglicosídeo.
        </P>
        <Subsection title="Broncodilatadores">
          <P>
            As crianças com displasia broncopulmonar (DBP) podem apresentar
            crises recorrentes de broncospasmo, devido à hipertrofia da
            musculatura lisa e hiperreatividade de vias aéreas.
          </P>
          <P>
            O uso de beta-agonistas melhora transitoriamente as trocas gasosas e
            a função pulmonar, porém não altera a evolução da DBP.
          </P>
          <P>
            Deve-se lembrar dos efeitos colaterais cardiovasculares
            (taquicardia, hipertensão arterial e arritmias cardíacas),
            alterações na relação ventilação-perfusão com piora do shunt
            intrapulmonar e agravamento da malácia brônquica e traqueal.
          </P>
          <P>Pode-se utilizar as seguintes medicações:</P>
          <P>
            Fenoterol: - Solução para nebulização (1ml = 5mg): 0,05 a 0,1mg/kg
            por dose em 3ml de SF0,9%, a cada 6 a 8 horas.
          </P>
        </Subsection>
        <Subsection title="Salbutamol">
          <P>
            Solução para nebulização (1ml = 5mg): 0,1 a 0,5mg/kg por dose em 3ml
            de SF0,9%, a cada 4 a 6 horas.
          </P>
          <P>
            Aerossol dosimetrado (1 dose = 100µg): 1 a 2 doses por vez, a cada 6
            a 8 horas.
          </P>
          <P>
            <Bold>Brometo de ipratrópio:</Bold> é um broncodilatador
            anticolinérgico que age de modo sinérgico com os beta-agonistas,
            sendo normalmente utilizado em associação com essas medicações.
          </P>
          <P>Utilizar na seguinte posologia:</P>
          <P>
            Solução para nebulização (1ml = 250µg): 125 a 250µg por dose em 3mL
            de SF0,9%, a cada 6 a 8 horas.
          </P>
        </Subsection>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="http://www.redeblh.fiocruz.br/media/arn_v3.pdf"
        />
      </Section>
    </Routine>
  )
}
