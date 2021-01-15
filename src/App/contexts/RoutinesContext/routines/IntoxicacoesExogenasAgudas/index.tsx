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

export default function IntoxicacoesExogenasAgudas(): JSX.Element {
  return (
    <Routine
      id="intoxiacacoes-exogenas"
      name="Intoxicações Exógenas Agudas"
      category="emergencia"
      authors={['ana-luiza']}
      tags={['exógena', 'intoxicação']}
    >
      <Section title="Introdução">
        <P>
          Toda intoxicação suspeita ou confirmada deverá ser tratada como uma
          situação clínica potencialmente grave, pois mesmo pacientes que não
          apresentam sintomas inicialmente, podem evoluir mal. Desta forma, a
          abordagem inicial deve ser feita de forma rápida e criteriosa.
        </P>
      </Section>
      <Section title="Avaliação Inicial">
        <P>
          O primeiro passo no atendimento de um paciente intoxicado é a
          realização de um breve exame físico para identificar as medidas
          imediatas necessárias para estabilização e evitar a piora clínica.
          Portanto, neste momento, é de fundamental importância checar:
        </P>
        <List>
          <LItem>Sinais vitais;</LItem>
          <LItem>Nível e estado de consciência;</LItem>
          <LItem>Pupilas (diâmetro e reatividade à luz);</LItem>
          <LItem>Temperatura e umidade da pele;</LItem>
          <LItem>Oximetria de pulso;</LItem>
          <LItem>Medida de glicose capilar (dextro);</LItem>
          <LItem>
            Obter ECG e realizar monitorização eletrocardiográfica se
            necessário;
          </LItem>
          <LItem>
            Manter vias aéreas abertas e realizar intubação orotraqueal (IOT),
            se necessário;
          </LItem>
          <LItem>
            Obter acesso venoso calibroso (neste momento, podem ser coletadas
            amostras para exames toxicológicos);
          </LItem>
          <LItem>
            Procurar sinais de trauma, infecção, marcas de agulha ou edema de
            extremidades.
          </LItem>
        </List>
      </Section>
      <Section title="Diagnóstico da Intoxicação">
        <P>
          A abordagem diagnóstica de uma suspeita de intoxicação envolve a{' '}
          <Bold>história da exposição</Bold>, o <Bold>exame físico</Bold> e{' '}
          <Bold>exames complementares</Bold> de rotina e toxicológicos.
        </P>
        <Subsection title="História da Exposição">
          <P>
            Utiliza-se a estratégia dos “5 Ws”, isto é, deve-se obter os dados
            relacionados ao paciente (Who? Quem?), à substância utilizada (What?
            - O quê?), horário da exposição (When? - Quando?), local da
            ocorrência (Where? - Onde?) e motivo da exposição (Why? - Por quê?).
          </P>
          <P>
            Atentar para o fato de que muitas informações podem ser distorcidas
            ou omitidas, principalmente quando há tentativas de suicídio ou
            homicídio envolvidas, uso de drogas ilícitas, abortamento ou maus
            tratos.
          </P>
          <List>
            <LItem>
              <Bold>Paciente:</Bold> histórico de doenças, medicações em uso,
              tentativas de suicídio anteriores, ocupação, acesso a substâncias,
              uso de drogas e gravidez.
            </LItem>
            <LItem>
              <Bold>Agente Tóxico:</Bold> substância utilizada e a quantidade.
              Sempre que possível, solicitar para os acompanhantes trazerem os
              frascos ou embalagens e questionar se pode ser um produto
              clandestino.
            </LItem>
            <LItem>
              <Bold>Tempo:</Bold> horário da exposição e por quanto tempo a
              substância foi utilizada, nos casos de exposições repetidas.
              Questionar se houve algum sintoma prévio à exposição.
            </LItem>
            <LItem>
              <Bold>Local:</Bold> onde ocorreu a exposição e se foram
              encontrados frascos, embalagens, seringas ou cartelas de
              comprimidos próximos ao paciente. Verificar quais medicamentos são
              utilizados pelos familiares ou pelas pessoas onde o indivíduo foi
              encontrado.
            </LItem>
            <LItem>
              <Bold>Motivo:</Bold> circunstância da exposição, já que é de
              extrema importância saber se foi tentativa de suicídio, homicídio,
              acidente, abuso de drogas e outras.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Exame Físico">
          <P>
            Realizar exame físico do paciente verificando os principais sinais e
            sintomas descritos abaixo:
          </P>
          <List>
            <LItem>
              <Bold>Odores característicos:</Bold> ex.: hálito etílico (uso de
              álcool), odor de alho (organofosforados);
            </LItem>
            <LItem>
              <Bold>Achados cutâneos:</Bold> sudorese, secura de mucosas,
              vermelhidão, palidez, cianose, desidratação, edema;
            </LItem>
            <LItem>
              <Bold>Temperatura:</Bold> hipo ou hipertermia;
            </LItem>
            <LItem>
              <Bold>Alterações de pupilas:</Bold> miose, midríase, anisocoria,
              alterações de reflexo pupilar;
            </LItem>
            <LItem>
              <Bold>Alterações da consciência:</Bold> agitação, sedação,
              confusão mental, alucinação, delírio, desorientação;
            </LItem>
            <LItem>
              <Bold>Anormalidades neurológicas:</Bold> convulsão, síncope,
              alteração de reflexos, alteração de tônus muscular, fasciculações,
              movimentos anormais;
            </LItem>
            <LItem>
              <Bold>Alterações cardiovasculares:</Bold> bradicardia,
              taquicardia, hipertensão, hipotensão, arritmias;
            </LItem>
            <LItem>
              <Bold>Anormalidades respiratórias:</Bold> bradipneia ou
              taquipneia, presença de ruídos adventícios pulmonares;
            </LItem>
            <LItem>
              <Bold>Achados do aparelho digestório:</Bold> sialorreia, vômitos,
              hematêmese, diarreia, rigidez abdominal, aumento ou diminuição de
              ruídos hidroaéreos.
            </LItem>
          </List>
          <P>
            Estes sinais e sintomas descritos, quando agrupados, podem
            caracterizar uma determinada síndrome tóxica. As principais
            síndromes tóxicas utilizadas para o diagnóstico da intoxicação aguda
            estão descritas na tabela abaixo:
          </P>
          <Table
            colWidths={[130, 100, 100, 100, 150, 150]}
            header={[
              'Síndromes Tóxicas',
              'Sinais Vitais',
              'Pupilas',
              'SNC',
              'Outros Sistemas',
              'Agentes Tóxicos'
            ]}
            data={[
              [
                'Hipnótica\nSedativa\nNarcótica',
                'Hipotermia\nBradicardia\nHipotensão\nBradipnéia',
                'Miose',
                'Depressão SNC\nDepressão Respiratória',
                'Hiporreflexia\nEdema\nPulmonar',
                'Barbitúricos\nBenzodiazepínicos\nOpióides'
              ],
              [
                'Colinérgica',
                'Hipotermia\nBradicardia\nHipotensão\nBradipnéia',
                'Miose',
                'Confusão Mental\nConvulsões\nComa',
                'Sialorréia Intensa\nSudorese\nLacrimejamento\nNáusea/vômito\nDiaspnéia\nBroncoconstrição\nFasciculações',
                'Organofosforados\nCarbamatos\nNicotina'
              ],
              [
                'Anticolinérgica',
                'Hipertermia\nTaquicardia\nHipertensão\nTaquipnéia',
                'Midríase',
                'Agitação\nAlucinação\nDelírio\nConvulsões',
                'Retenção Urinária\nMiocloniais\nConvulsões\nMucosas Secas',
                'Atropínicos\nAnti-histamínicos\nAntidepressivos Tricíclicos'
              ],
              [
                'Simpatomimética',
                'Hipertermia\nHipertensão\nTaquicardia\nHiperpnéia',
                'Midríase',
                'Diaforese\nTremores\nHiperreflexia',
                'Cocaína\nAnfetamina\nTeofilina\nEfedrina\nCafeína'
              ],
              [
                'Extrapiramidal',
                'Não característicos',
                'Midríase',
                'Sonolência\nCrise Oculógira',
                'Tremores\nHipertonia Muscular\nOpistótono Trismo',
                'Haloperidol\nFenotiazínicos\nMetoclopramida\nBromopida'
              ]
            ]}
          />
        </Subsection>
        <Subsection title="Exames Complementares">
          <List>
            <LItem>
              <Bold>Gerais:</Bold> Dependendo do agente envolvido podem ser
              solicitados exames laboratoriais, ECG, exames de imagem (RX, TC)
              ou endoscopia digestiva alta (EDA).
            </LItem>
            <LItem>
              <Bold>Toxicológicos</Bold> Direcionados ao agente suspeito.
            </LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Tratamento">
        <P>
          O manejo adequado de um paciente com suspeita de intoxicação depende
          do agente envolvido e da sua toxicidade, assim como do tempo decorrido
          entre a exposição e o atendimento. Além do suporte, o tratamento
          envolve medidas específicas como <Bold>descontaminação</Bold>,{' '}
          <Bold>administração de antídotos</Bold> e{' '}
          <Bold>técnicas de eliminação</Bold>.
        </P>
        <Subsection title="Descontaminação">
          <P>
            Visa remoção do agente tóxico com o intuito de diminuir a sua
            absorção. Tomar as precauções para se proteger da exposição ao
            agente tóxico.
          </P>
          <P>
            Os seguintes procedimentos estão indicados, de acordo com a via de
            exposição:
          </P>
          <List>
            <LItem>
              <Bold>Cutânea:</Bold> retirar roupas impregnadas com o agente
              tóxico e lavar a superfície exposta com água em abundância;
            </LItem>
            <LItem>
              <Bold>Respiratória:</Bold> remover a vítima do local da exposição
              e administrar oxigênio umidificado suplementar;
            </LItem>
            <LItem>
              <Bold>Ocular:</Bold> instilar uma ou duas gotas de colírio
              anestésico no olho afetado e proceder a lavagem com SF 0,9% ou
              água filtrada, sempre da região medial do olho para a região
              externa, com as pálpebras abertas durante pelo menos cinco
              minutos. Solicitar avaliação oftalmológica;
            </LItem>
            <LItem>
              <Bold>Gastrintestinal (GI):</Bold> consiste na remoção do agente
              tóxico do trato gastrintestinal no intuito de evitar ou diminuir
              sua absorção.
            </LItem>
          </List>
          <Subsection title="Descontaminação Gastrointestinal">
            <P>
              A indicação depende da substância ingerida, do tempo decorrido da
              ingestão, dos sintomas apresentados e do potencial de gravidade do
              caso. Recomenda-se avaliação criteriosa do nível de consciência do
              paciente, antes de iniciar o procedimento e sempre considerar
              intubação orotraqueal, caso julgar necessário, para proteção de
              vias aéreas.
            </P>
            <P>
              <Bold>Indicações:</Bold>
            </P>
            <List>
              <LItem>
                Na ausência de fatores de risco para complicações, como torpor e
                sonolência;
              </LItem>
              <LItem>
                Na ingestão de quantidades potencialmente tóxicas da(s)
                substância(s);
              </LItem>
              <LItem>
                Nas ingestões recentes, isto é, até 1 a 2 horas da exposição.
              </LItem>
            </List>
            <P>
              Nos casos envolvendo agentes que diminuam o trânsito intestinal
              (anticolinérgicos, fenobarbital, etc.) ou de substâncias de
              liberação prolongada, a indicação da descontaminação pode ser mais
              tardia.
            </P>
            <P>
              Habitualmente, o procedimento divide-se em duas etapas: lavagem
              gástrica e carvão ativado:
            </P>
            <Subsubsection title="Lavagem Gástrica (LG)">
              <P>
                Consiste na infusão e posterior aspiração de soro fisiológico a
                0,9% (SF 0,9%) através de sonda nasogástrica ou orogástrica, com
                o objetivo de retirar a substância ingerida. Sempre avaliar
                criteriosamente a relação risco x benefício antes de iniciar o
                procedimento, pois há grande risco de aspiração.
              </P>
              <P>
                <Bold></Bold>
              </P>
              <P>
                <Bold>Contraindicações:</Bold>
              </P>
              <P>
                Ingestão de cáusticos, derivados do petróleo, solventes e quando
                há risco de perfuração e sangramentos. Evitar a infusão de
                volumes superiores aos indicados, pois pode facilitar a passagem
                da substância ingerida pelo piloro e aumentar a absorção do
                agente tóxico.
              </P>
              <P>
                <Bold>Técnica:</Bold>
              </P>
              <P>
                Usar sonda de grande calibre, adultos de 18 a 22 e crianças de
                10 a 14, mantendo o paciente em decúbito lateral esquerdo para
                facilitar a retirada do agente tóxico, e diminuir a velocidade
                do esvaziamento gástrico para o intestino.
              </P>
              <P>
                Infundir e retirar sucessivamente o volume de SF 0,9%
                recomendado de acordo com a faixa etária, até completar o volume
                total recomendado ou até que se obtenha retorno límpido, da
                seguinte forma:
              </P>
              <P>
                <Bold>Crianças: 10 ml/Kg por infusão até volume total de:</Bold>
              </P>
              <List>
                <LItem>Escolares: 4 a 5 litros</LItem>
                <LItem>Lactentes: 2 a 3 litros</LItem>
                <LItem>RN: 0,5 litros</LItem>
                <LItem>
                  Adultos: 250 ml por vez até um volume total de 6 a 8 litros ou
                  até que retorne límpido.
                </LItem>
              </List>
            </Subsubsection>
            <Subsubsection title="Carvão Ativado (CA)">
              <P>
                É um pó obtido da pirólise de material orgânico, com partículas
                porosas com alto poder adsorvente do agente tóxico, que previne
                a sua absorção pelo organismo. Geralmente é utilizado após a LG,
                mas pode ser utilizado como medida única de descontaminação GI.
                Nestes casos, a administração pode ser por via oral sem
                necessidade da passagem de sonda nasogástrica.
              </P>
              <P>
                Na maioria das vezes deverá ser utilizado em dose única, porém
                pode ser administrado em doses múltiplas como medida de
                eliminação, em exposições a agentes de ação prolongada ou com
                circulação enterohepática, como o fenobarbital, carbamazepina,
                dapsona, clorpropamida, dentre outros.
              </P>
            </Subsubsection>
          </Subsection>
        </Subsection>
        <Subsection title="Formas de Administração">
          <Bold>Dose Única:</Bold>
          <List>
            <LItem>
              Crianças: 1 g/kg, em uma suspensão com água ou SF 0,9% na
              proporção de 4-8 ml/g.
            </LItem>
            <LItem>Adultos: 50 g em 250 ml de água ou SF 0,9%.</LItem>
          </List>
          <Bold>Múltiplas doses:</Bold>
          <List>
            <LItem>
              Intervalos de 4/4 horas; associar catártico, preferencialmente
              salino, junto à 3ª dose, e repetir quando necessário. Utilizar o
              catártico como parte da suspensão do CA. Exemplo: utilizar 100 ml
              Sulfato de Magnésio 10% (10 g), acrescentar 150 ml de SF 0,9%
              (total 250 ml) e acrescentar 50 g de Carvão Ativado (suspensão
              1:5).
            </LItem>
          </List>
          <Subsubsection title="Contraindicações">
            <P>
              RN, gestantes ou pacientes muito debilitados, cirurgia abdominal
              recente, administração de antídotos por VO.
            </P>
            <P>
              Pacientes que ingeriram cáusticos ou solventes ou que estão com
              obstrução intestinal.
            </P>
            <P>
              Pacientes intoxicados com substâncias que não são efetivamente
              adsorvidas pelo carvão, como os ácidos, álcalis, álcoois, cianeto
              e metais como lítio, ferro, entre outros.
            </P>
          </Subsubsection>
          <Subsubsection title="Complicações">
            <P>
              Constipação e impactação intestinal, principalmente quando
              utilizado em doses múltiplas.
            </P>
            <P>
              Broncoaspiração, especialmente quando realizado em pacientes
              torporosos, sem a proteção da via aérea.
            </P>
          </Subsubsection>
          <Subsubsection title="Lavagem Intestinal">
            <P>
              Consiste na administração de solução de polietilenoglicol (PEG)
              via sonda naso-enteral para induzir a eliminação do agente através
              do trato gastrointestinal pelas fezes.
            </P>
          </Subsubsection>
          <Subsubsection title="Indicação">
            <P>
              Ingestão de pacotes contendo drogas (body-packing) ou de
              quantidades potencialmente tóxicas de substâncias não absorvidas
              pelo carvão ativado (ex.; ferro, lítio, etc). Portanto, raramente
              é utilizado em pediatria.
            </P>
          </Subsubsection>
          <Subsubsection title="Contraindicação">
            <P>
              Presença de íleo paralítico, perfuração gastrintestinal,
              hemorragia gastrintestinal e instabilidade hemodinâmica.
            </P>
          </Subsubsection>
          <Subsubsection title="Dose Recomendada">
            <List>
              <LItem>Crianças de 9 meses a 6 anos: 500 ml/h.</LItem>
              <LItem>Crianças de 6 a 12 anos: 1000 ml/h.</LItem>
              <LItem>Adolescentes e adultos: 1500 a 2000 ml/h.</LItem>
            </List>
          </Subsubsection>
          <Table
            colWidths={[125, 200, 200, 200, 200]}
            header={[
              'Antídoto',
              'Apresentação',
              'Indicação',
              'Mecanismo de Ação',
              'Posologia'
            ]}
            data={[
              [
                'Atropina',
                'Solução injetável em Ampolas de 1 ml contendo 0,25 mg/ml ou 0,5 mg/ml',
                'Intoxicação por inibidores da acetilcolinesteras e: agrotóxicos, carbamatos, organofosforados, gás Sarin',
                'Antagonista da Acetilcolina apenas nos receptores muscarínicos do orgão efetor e em algumas sinapses colinérgicas centrais',
                'Dose IV inicial: 0,01-0,05 mg/Kg. Repetir em 5, 10, 15 ou 30 min, até obter atropinização adequada (Boa Sat.O2, FC em torno de 120 bpm e redução da hipersecreção pulmonar). Dose de manutenção: A dose e intervalo de administração devem ser modificados de acordo com a resposta clínica.'
              ],
              [
                'Azul de Metileno',
                'Manipular solução a 1% em ampolas de 5 ml',
                'Metemoglobinemia provocada por intoxicação por nitritos, anilina, dapsona, fenazopiridina, em pacientes sintomáticos ou com MetaHb > 30%',
                'Redução da metemoglobina à hemoglobina, via NADPH-metemoglobinaredutase',
                'Administrar 1 - 2 mg/kg (0,1 - 0,2 ml/Kg) de uma solução a 1% IV em 5 minutos. Repetir se necessário a cada 6 - 8 h, em caso de intoxicação por oxidantes de longa ação como Dapsona.'
              ],
              [
                'Bicarbonato de Sódio',
                'Bicarbonato de sódio a 8,4%: 84 mg/ml',
                'Alcalinização sanguínea em intoxicações por antidepressivos tricíclicos e antiarrítmicos',
                'Correção de acidose',
                'Crianças até 2 anos de idade: Recomenda-se solução a 4,2% e a taxa de administração IV não deve exceder 8 mEq/Kg/dia.'
              ],
              [
                'Biperideno/\nAkineton®',
                'Ampolas de 1 mL com 5 mg/ml',
                'Tratamento dos sintomas extrapiramidais ocasionados por intoxicações com neurolépticos (fenotiazinas haloperidol) e também com metoclopramida e bromoprida',
                'Agente anticolinérgico',
                'Crianças: 0,06 - 0,1 mg/Kg/dose 6/6h'
              ],
              [
                'Bromocriptina/\nPariodel®',
                'Comprimidos de 2,5 mg em embalagem contendo 28 comprimidos',
                'Síndrome neuroléptica maligna causada por neurolépticos (haloperidol e outros antipsicóticos)',
                'Agonista central da dopamina',
                'Administrar 2,5 - 10 mg VO ou por SNG 3 - 4 vezes ao dia'
              ],
              [
                'Ciproeptadina',
                'Disponível com associação (1 mg de cobamamida e 4 mg de ciproheptadina). Formulações comerciais: Cobavital®, cobactin®, etc.',
                'Síndrome sorotoninérgica: pode ser benéfica para aliviar sintomas leves a moderados.',
                'Parece antagonizar a estimulação excessiva dos receptores 5-HT1A e 5-HT2, resultando em Melhoria dos sintomas clínicos',
                'Crianças: 0,25 mg/Kg/dose 6/6 h, VO. Máximo: 12 mg/dia.'
              ],
              [
                'Diazepam',
                'Ampolas com 10 mg/2ml',
                'Casos em que haja necessidade de sedação como por exemplo: intoxicação por cocaína e ou por anfetaminas, síndrome neuroléptica maligna, convulsões, etc.',
                'Incremento da neurotransmissão do GABA em todo o SN',
                'Em caso de intoxicação por cocaína em adultos, pode-se utilizar até um máximo de 100 mg IV. Em crianças utilizar 0,3 a 0,5 mg/Kg IV ou Retal, podendo repetir se necessário.'
              ],
              [
                'Flumazenil',
                'Ampola de 5 ml com 0,5 mg (0,1 mg/ml)',
                'Intoxicações graves por Benzodiazepínicos',
                'Antagoniza a ação dos benzodiazepínicos (BZD), imidazopiridinas (Zolpidem®) e outros toxicantes que atuam nos receptores de BZD do SNC',
                'Crianças > 1 ano:\nDose inicial: 0,01 - 0,02 mg/Kg IV em 15 segundos, se não ocorrer reversão da sedação após os 45 segundos seguintes, repetir a mesma dose em intervalos de 1 minuto até por 4 vezes, totalizando 0,05 mg/Kg ou 1 mg.'
              ],
              [
                'N acetilcisteína',
                'Ampola de 3 mL (100 mg/ml)\nXarope pediátrico (20 mg/ml)\nGranulado (envelope) (100 mg/5g)',
                'Intoxicação por paracetamol',
                'Mantém níveis adequados de glutationa (GSH), contribuindo, assim para a proteção celular',
                'Dosagem oral inicial: 140 mg/Kg\nDose de manutenção: 70 mg/Kg a cada 4 horas.\nDose endovenosa: inicial de 150 mg/kg (40-60min); 1ª dose de manutenção de 50 mg/kg (em 4 horas); 2ª dose de manutenção 100 mg/kg (em 16 horas)'
              ]
            ]}
            title="Principais Antídotos"
          />
        </Subsection>
        <Subsection title="Medidas de Eliminação">
          <P>
            São utilizadas para potencializar a eliminação do agente tóxico. As
            principais medidas utilizadas são:
          </P>
          <List>
            <LItem>
              <Bold>Carvão ativado em dose-múltipla:</Bold> indicado em casos de
              intoxicação por medicamentos como fenobarbital, dapsona e
              carbamazepina.
            </LItem>
            <LItem>
              <Bold>Alcalinização urinária:</Bold> pode potencializar a excreção
              urinária de alguns agentes. Alcalinizar a urina favorece a
              conversão de ácidos fracos lipossolúveis (como fenobarbital e
              salicilatos) para a forma de sal, impedindo a sua reabsorção pelo
              túbulo renal. <Bold>Contraindicações:</Bold> insuficiência renal,
              edema pulmonar ou cerebral e doenças cardíacas.{' '}
              <Bold>Técnica:</Bold> o objetivo é atingir pH urinário {'>'} 7,5
              enquanto o pH sérico deve se manter em torno de 7,55 a 7,6.
              Portanto, é recomendada a administração em bolus de 1-2 mEq/Kg de
              bicarbonato de sódio (NaHCO3) a 8,4%, seguida por infusão contínua
              de 150 mEq de NaHCO3 em 1 litro de soro glicosado a 5% (SG 5%)
              (manter infusão entre 200-250 ml/h).
            </LItem>
            <LItem>
              <Bold>Hemodiálise ou hemoperfusão:</Bold> são técnicas raramente
              utilizadas. São geralmente indicadas quando a velocidade de
              depuração da substância pode ser maior pela remoção extracorpórea
              do que pelo próprio clearance endógeno, que ocorre nos casos de
              nítida deterioração do quadro clínico do paciente ou quando os
              níveis séricos da substância determinam mau prognóstico.
            </LItem>
          </List>
          <Subsubsection title="Ingestão de Substâncias Cáusticas">
            <P>
              <Bold>Diagnósticos Clínico:</Bold>
            </P>
            <P>
              Ingestões que ocorrerem em crianças maiores ou forem presenciadas
              por adultos poderão ser relatadas, incluindo o tempo decorrido
              desde a ingestão, o tipo de substância ingerida (álcali ou ácido),
              o estado físico (líquido ou sólido), se é um produto
              industrializado ou artesanal, o pH e a concentração da substância
              (se disponível), o volume ingerido, bem como os sinais e sintomas
              apresentados. Em crianças menores ou em casos nos quais a ingestão
              não tenha sido presenciada, sintomas como lesões orais, vômitos,
              saliva com sangue, disfagia, odinofagia, dor abdominal,
              hematêmese, dor retroesternal ou torácica, sialorreia, recusa
              alimentar, estridor, disfonia, tosse e dispneia podem sugerir o
              diagnóstico.
            </P>
            <P>
              Álcalis causam necrose por liquefação e, mais frequentemente,
              lesões esofágicas, enquanto ácidos tendem a provocar lesões mais
              graves no estômago.
            </P>
            <P>
              No exame físico pode ser avaliada a presença de lesões na boca e
              nas vias aéreas, além de sinais de complicações como dispneia,
              estridor e enfisema subcutâneo.
            </P>
            <P>
              IMPORTANTE: lembrar que a ausência de lesões na boca não permite
              excluir a presença de lesões no trato digestório.
            </P>
            <P>
              <Bold>Diagnóstico laboratorial e radiológico:</Bold>
            </P>
            <P>
              Exames laboratoriais, incluindo hemograma completo, PCR,
              gasometria, eletrólitos e avaliação da função renal podem ser
              úteis na avaliação de possíveis complicações. E podem ser
              solicitados de acordo com o tipo de substância ingerida e o quadro
              clínico do paciente.
            </P>
            <P>
              Radiografia simples: Radiografias de tórax e abdômen em AP e
              perfil estão indicadas se houver sintomas e sinais como estridor,
              dispneia, hematêmese, dor retroesternal ou dor abdominal,
              sugestivos de complicações. E podem evidenciar pneumomediastino,
              pneumoperitônio e alterações pulmonares, incluindo derrame
              pleural.
            </P>
            <P>
              Tomografia Computadorizada (TC): TC torácica e abdominal está
              indicada nos casos de suspeita de complicações, como perfuração,
              mediastinite, fístula ou peritonite. Alguns serviços têm utilizado
              a tomografia para classificar a gravidade das lesões e avaliar o
              prognóstico.
            </P>
            <P>
              <Bold>Endoscopia Digestiva Alta (EDA)</Bold>
            </P>
            <P>
              Indicação:{' '}
              <Bold>
                todos os casos de ingestão de substâncias cáusticas presenciada
                ou suspeita
              </Bold>
              , em pacientes com os sintomas e/ou sinais descritos
              anteriormente. Todos os pacientes, mesmo assintomáticos, com
              história de ingestão de ácidos e bases fortes, incluindo produtos
              de limpeza “caseiros”, que na maioria das vezes contêm soda
              cáustica, devem ser submetidos ao exame, pelo risco de lesões mais
              graves. Embora a ausência de lesões orais não exclua a
              possibilidade de lesões esofágicas ou gástricas, nos pacientes
              assintomáticos e sem lesões orais, quando o agente ingerido for
              alvejante ou água sanitária industrializada, pode-se avaliar a não
              realização da EDA e seguir uma conduta expectante, pelo baixo
              risco de lesões significativas.
            </P>
            <P>
              Contraindicação: suspeita clínica ou radiológica de perfuração ou
              se houver lesões graves de vias aéreas.
            </P>
            <P>
              Tempo ideal: de 12 a 24 horas, podendo ser postergado até 48
              horas. Antes disso, as lesões ainda não completamente
              estabelecidas poderiam ser subclassificadas. Após 48 horas da
              ingestão, deve-se individualizar a indicação do exame, pois a
              mucosa mais friável tem maior risco de perfuração. No entanto, a
              importância do exame para definir a conduta favorece que ele seja
              realizado mesmo após esse prazo.
            </P>
            <P>
              Por meio da EDA deve-se utilizar a Classificação de Zargar
              (descrita abaixo) para avaliar a gravidade das lesões, o que será
              útil para definir a conduta e o prognóstico.
            </P>
          </Subsubsection>
          <Subsubsection title="Conduta">
            <P>
              A conduta inicial compreende: estabilização hemodinâmica +
              cuidados para a manutenção de vias aéreas. Os pacientes devem ser
              mantidos em jejum pelo menos até o momento da EDA, sob hidratação
              venosa e em uso de sintomáticos como antieméticos e analgésicos
              por via endovenosa, se necessário. Se houver sinais clínicos de
              lesão de via aérea deve-se iniciar antibioticoterapia e
              corticóide.
            </P>
            <P>
              Alguns procedimentos podem agravar as lesões ou prejudicar a
              visualização da mucosa no momento da endoscopia e, portanto, NÃO
              DEVEM SER realizados, incluindo:
            </P>
            <List>
              <LItem>Lavados gástricos;</LItem>
              <LItem>Neutralização ácida;</LItem>
              <LItem>Diluição com leite ou água;</LItem>
              <LItem>Indução de vômitos;</LItem>
              <LItem>Carvão ativado;</LItem>
              <LItem>
                Passagem de sondas para alimentação antes da endoscopia.
              </LItem>
            </List>
            <P>
              O resultado do exame endoscópico, utilizando a Classificação de
              Zargar, deve guiar a conduta a partir de então, como descrito na
              Tabela abaixo:
            </P>
            <Table
              colWidths={[100, 250]}
              header={['Zargar', 'Conduta']}
              data={[
                ['0', 'Alta com orientações'],
                [
                  '1',
                  'Dieta oral líquida ⇒ pastosa ⇒ sólida\nIBP ou bloqueador H2\nAlta de acordo com a evolução clínica, em uso de bloqueador H2 ou IBP por 30 dias.\nReavaliação nos serviços da SES/DF'
                ],
                [
                  '2a',
                  'Dieta oral líquida 24-48 horas, seguida por dieta pastosa ⇒ sólida.\nSintomáticos (analgésico/antiemético)\nIBP ou bloqueador H2NAlta de acordo com a evolução clínica, em uso de bloqueador H2 ou IBP por 30 dias\nAmbulatório Esôfago HCB\nEDA/EED após 3-4 semanas da ingestão'
                ],
                [
                  '2b/3',
                  'Suporte nutricional (sonda ou nutrição parenteral)\nSintomáticos (analgésico/antiemético)\nIBP\nAntibiótico – se infecção e/ou uso de corticóide\nCorticosteróide – se lesões de VAS ou lesões 2b\nAlta após 7-10 dias, dependendo da evolução\nAmb. Esôfago HCB (1-4 semanas após a alta)\nEDA/ EED 3-4 semanas'
                ]
              ]}
            />
            <P>
              <Bold>
                ATENÇÃO! Em caso de dúvida quanto ao agente tóxico/tratamento
                entrar em contato com o CIATOX-DF: 0800 6446 774 ou 0800 7226
                001
              </Bold>
            </P>
          </Subsubsection>
        </Subsection>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Manual de Toxicologia Clínica: Orientações para assistência e vigilância das intoxicações agudas / [Organizadores] Edna Maria Miello Hernandez, Roberto Moacyr Ribeiro Rodrigues, Themis Mizerkowski Torres. São Paulo: Secretaria Municipal da Saúde, 2017. 465 p."
        />
        <Reference
          idx={2}
          body="Intoxicações agudas por medicamentos de uso comum em pediatria. Sociedade Brasileira de Pediatria. Departamento Científico de Toxicologia.  (1): 1-21. Rio de Janeiro, RJ: SBP. Fevereiro, 2018."
        />
        <Reference
          idx={3}
          body="Hospital da Criança de Brasília. Diretriz Interprofissional de Atenção à Criança e ao Adolescente com Ingestão de Substâncias Cáusticas/Silva, Ana Aurélia Rocha da. et al. Brasília: HCB, 2016. Disponível em: http://www.hcb.org.br/arquivos/downloads/hcb2016_manual_11_cadernohospital_vdigital_1.pdf Acessado em julho de 2018. "
        />
      </Section>
    </Routine>
  )
}
