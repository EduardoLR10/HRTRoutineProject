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

export default function DoencaDeKawasaki(): JSX.Element {
  return (
    <Routine
      id="doenca-kawasaki"
      name="Doença de Kawasaki - DK"
      category="hematologia-reumatologia-nefrologia"
      authors={['dania']}
      tags={['síndrome', 'mucocutânea', 'ganglionar']}
    >
      <Section title="Aspectos Gerais">
        <P>
          Ou Síndrome Mucocutânea Ganglionar, é uma vasculite de médios vasos,
          aguda, difusa, de etiologia desconhecida, autolimitada e, na maioria
          das vezes, benigna. Predomina em crianças abaixo dos 5 anos (85%), com
          pico entre 1 e 2 anos, especialmente no sexo masculino (1,5 : 1) e em
          crianças japonesas em relação às caucasianas. Caracterizada por febre
          alta prolongada, inflamação difusa de mucosas, alterações de pele e
          linfadenopatia cervical não-supurativa. É mais comum nos meses de
          inverno e primavera. Nos países desenvolvidos, em que a Febre
          Reumática já foi controlada, é a primeira causa de cardiopatia
          adquirida na infância.
        </P>
      </Section>
      <Section title="Patologia">
        <P>
          As alterações histológicas encontradas na DK consistem em vasculite
          sistêmica generalizada, afetando predominantemente vasos de médio
          calibre com predileção pelas artérias coronárias. Alterações
          inflamatórias sistêmicas podem ser observadas em vários órgãos
          causando miocardite, pericardite, vasculites, meningite asséptica,
          pneumonite, linfadenite e hepatite.
        </P>
      </Section>
      <Section title="Critérios Diagnósticos">
        <Subsection title="Critérios Mandatório">
          <P>Febre por cinco dias ou mais.</P>
        </Subsection>
        <Subsection title="Mais 4 dos seguintes Critérios">
          <List>
            <LItem>
              Hiperemia conjuntival bilateral, não purulenta (80 – 90%);
            </LItem>
            <LItem>
              Língua em framboesa, eritema e edema de orofaringe, fissuras e
              eritema labial (80 – 90%);
            </LItem>
            <LItem>
              Eritema e edema de mãos e pés (fase aguda) ou descamação
              periungueal (na fase de convalescença) – 80%;
            </LItem>
            <LItem>
              Exantema polimórfico, especialmente no tronco, não vesicular (
              {'>'}90%);
            </LItem>
            <LItem>
              Linfonodomegalia cervical, com. Pelo menos, um linfonodo ≥ 1,5cm
              (50%).
            </LItem>
          </List>
          <P>
            Alguns pacientes (15 a 20%) são diagnosticados como portadores de{' '}
            <Bold>DK atípica ou incompleta</Bold> uma vez que não preenchem
            todos os critérios diagnósticos propostos. O termo mais apropriado é{' '}
            <Bold>DK incompleta</Bold>, pois esses pacientes apresentam alguns
            dos sintomas típicos da doença e não manifestações atípicas. A DK
            incompleta deve ser considerada em todas as crianças com febre
            inexplicada por mais de 5 dias associada a 2 ou 3 dos principais
            achados clínicos da DK. A forma incompleta é mais frequente em
            crianças menores de 6 meses. O diagnóstico da DK incompleta é
            baseado em achados ecocardiográficos de alterações nas artérias
            coronárias; mesmo naqueles pacientes com menos de 3 critérios
            diagnósticos, porém com lesão coronariana, o tratamento é indicado
            com imunoglobulina intravenosa. Os critérios diagnósticos
            convencionais propostos pela American Heart Association são falhos
            para reconhecer a forma incompleta da doença.
          </P>
        </Subsection>
      </Section>
      <Section title="Quadro Clínico">
        <Subsection title="Febre">
          <P>
            É um sinal característico da fase aguda da doença, é geralmente alta
            (acima de 39°C-40°C), remitente e acompanhada de extrema
            irritabilidade. O primeiro dia de febre é considerado o 1º dia de
            doença. A febre dura, em média, 1 a 2 semanas, podendo, na ausência
            de tratamento, estender-se até 3 ou 4 semanas. Responde parcialmente
            ao uso de antipiréticos, mas não cessa com a introdução de
            antibióticos. Com o início da imunoglobulina intravenosa (IGIV) e
            aspirina a febre cessa em 2 dias.
          </P>
        </Subsection>
        <Subsection title="Conjuntivite">
          <P>
            É bilateral não exsudativa e envolve principalmente a conjuntiva
            bulbar em relação às conjuntivas palpebral e tarsal, é indolor e
            ocorre na fase aguda da doença.
          </P>
        </Subsection>
        <Subsection title="Alterações da Mucosa Oral">
          <P>
            São caracterizadas por eritema difuso da orofaringe, lábios secos,
            fissurados, vermelhos e sangrantes e a língua se apresenta com
            aspecto de “framboesa” ou “morango” (eritema intenso com papilas
            gustativas proeminentes).
          </P>
        </Subsection>
        <Subsection title="Alterações de Extremidades">
          <P>
            Na fase aguda da doença também são descritos o eritema e/ou
            induração de regiões palmar e plantar acompanhados de aumento da
            sensibilidade dolorosa; após 2 ou 3 semanas de doença – fase
            subaguda – inicia-se a descamação periungueal dos pés e mãos, que
            progride para palmas e plantas. Um ou dois meses após instalado o
            quadro, podem surgir linhas de Beau (sulcos transversais) nas unhas
            afetadas.
          </P>
        </Subsection>
        <Subsection title="Exantema">
          <P>
            É de caráter variado, não pruriginoso, polimórfico (macular,
            papular, eritrodérmico, escarlatiniforme), surge inicialmente no
            tronco, distribui-se em membros e se torna confluente na região
            perineal, durando, em média, 7 dias.
          </P>
        </Subsection>
        <Subsection title="Linfadenodomegalia">
          <P>
            Há aumento de gânglios cervicais (≥ 1,5cm), geralmente anteriores,
            uni ou bilaterais. Após 3 ou 4 dias começam a regredir. Os
            linfonodos afetados são indolores ou pouco dolorosos, não flutuantes
            e não supurativos; o eritema da pele suprajacente pode ocorrer.
          </P>
        </Subsection>
        <Figure source={img1} size={[815, 467]} />
        <P>
          <Bold>
            A DK é dividida em 3 fases clínicas: aguda, subaguda e de
            convalescença
          </Bold>
        </P>
        <Subsection title="Fase Aguda">
          <P>
            Dura 1 a 2 semanas, compreende febre e os demais critérios
            diagnósticos, além de achados clínicos associados, como miocardite,
            derrame pericárdico, meningite asséptica (10-25%), diarreia (15%),
            disfunção hepática (5%), uveíte (17%) e artrite e/ou artralgia
            (30%).
          </P>
        </Subsection>
        <Subsection title="Fase Subaguda">
          <P>
            Inicia-se quando a febre, o rash e a linfadenopatia apresentam
            resolução, 1 a 2 semanas depois do início da doença, porém há
            irritabilidade, anorexia e conjuntivite. Nessa fase, cuja duração é
            de cerca de 4 semanas, ocorrem descamação periungueal, trombocitose,
            formação de aneurismas coronarianos, e o risco de morte súbita é
            maior. Complicações neurológicas podem surgir em 1% dos casos e
            incluem paralisia de nervo facial, ataxia, encefalopatia, hemiplegia
            e infarto cerebral.
          </P>
        </Subsection>
        <Subsection title="Fase de Convalescença">
          <P>
            Começa quando os sinais clínicos desaparecem e vai até a
            normalização da velocidade de hemossedimentação (VHS), durando,
            usualmente, de 6 a 8 semanas após o início do quadro febril.
          </P>
        </Subsection>
        <Subsection title="Achados clínicos secundários da Doença de Kawasaki">
          <Subsubsection title="Aparelho Cardiovascular">
            <P>
              Miocardite, pericardite, regurgitação valvular, aneurismas de
              artérias coronárias.
            </P>
          </Subsubsection>
          <Subsubsection title="Aparelho Musculoesquelético">
            <P>Poliartrite e/ou artralgia, rabdomiólise.</P>
          </Subsubsection>
          <Subsubsection title="Aparelho Gastrointestinal">
            <P>
              Diarréia, dor abdominal, vômitos, disfunção hepática, pancreatite,
              vesícula hidrópica, colangite, intussuscepção, pseudo-obstrução
              intestinal, ascite, infarto esplênico.
            </P>
          </Subsubsection>
          <Subsubsection title="Aparelho Pulmonar">
            <P>
              Sintomas{' '}
              <Text style={{ fontStyle: 'italic' }}>influenza-like</Text>,
              derrame pleural, infiltrado pulmonar reticulogranula, atelectasia.
            </P>
          </Subsubsection>
          <Subsubsection title="Aparelho Geniturinário">
            <P>
              Uretrite, prostatite, cistite, priapismo, insuficiência renal
              aguda, nefrite intersticial, orquite, síndrome nefrótica.
            </P>
          </Subsubsection>
          <Subsubsection title="Sistema Nervoso Central">
            <P>Meningite asséptica, surdez neurossensorial.</P>
          </Subsubsection>
          <Subsubsection title="Pele e Anexos">
            <P>
              Eritema e induração em sítio de vacinação de BCG, linhas de Beau,
              gangrena de dedos.
            </P>
          </Subsubsection>
        </Subsection>
      </Section>
      <Section title="Exames Complementares">
        <List>
          <LItem>Leucocitose com neutrofilia e desvio para esquerda;</LItem>
          <LItem>Anemia normocítica e normocrômica;</LItem>
          <LItem>Elevação da velocidade de hemossedimentação;</LItem>
          <LItem>Elevação da proteína C reativa;</LItem>
          <LItem>Trombocitose (fase subaguda);</LItem>
          <LItem>Aumento moderado de transaminases;</LItem>
          <LItem>Hipoalbuminemia;</LItem>
          <LItem>Piúria estéril;</LItem>
          <LItem>Líquor com pleocitose com predomínio de mononucleares;</LItem>
          <LItem>Hiponatremia;</LItem>
          <LItem>Líquido sinovial com leucocitose.</LItem>
        </List>
      </Section>
      <Section title="Ecocardiografia Bidimensional">
        <P>
          Por volta do 10º dia de doença pode demonstrar dilatações coronarianas
          e o pico de sua ocorrência se dá com 4 semanas de doença.
        </P>
      </Section>
      <Section title="Solicitar no Pronto Socorro">
        <P>
          Hemograma, VHS e PCR (quando houver), hemocultura, transaminases,
          sódio, potássio, albumina sérica.
        </P>
        <Subsection title="Avaliar Necessidade">
          <List>
            <LItem>Urina tipo1;</LItem>
            <LItem>Líquor;</LItem>
            <LItem>RX de tórax.</LItem>
          </List>
        </Subsection>
        <Subsection title="Assim que possível">
          <List>
            <LItem>Ecocardiograma.</LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Diagnóstico Diferencial">
        <List>
          <LItem>Síndrome de Stevens Johnson;</LItem>
          <LItem>Farmacodermias;</LItem>
          <LItem>
            Exantemas virais febris (sarampo, adenovírus, enterovírus, vírus
            Epstein-Barr);
          </LItem>
          <LItem>Artrite reumatóide juvenil;</LItem>
          <LItem>Síndrome da pele escaldada estafilocócica;</LItem>
          <LItem>Síndrome do choque tóxico;</LItem>
          <LItem>Leptospirose;</LItem>
          <LItem>Intoxicação por mercúrio;</LItem>
          <LItem>Sarampo;</LItem>
          <LItem>Escarlatina;</LItem>
          <LItem>Febre maculosa;</LItem>
          <LItem>Eritema perineal toxina mediado recorrente;</LItem>
          <LItem>Linfadenites cervicais bacterianas.</LItem>
        </List>
      </Section>
      <Section title="Tratamento">
        <P>
          Objetivo: reduzir a inflamação e o dano arterial e prevenir a trombose
          naqueles com anormalidades da artéria coronária.
        </P>
        <Subsection title="IVIG">
          <P>Deve ser instituída nos primeiros 10 dias de início da doença.</P>
          <List>
            <LItem>Efeito anti-inflamatório generalizado;</LItem>
            <LItem>
              Dose alta: 2g/kg, em dose única, geralmente administrada durante
              10 a 12 horas, em BI;
            </LItem>
          </List>
          <P>
            <Bold>
              <Italic>
                Mesmo quando tratados com regimes de IVIG em dose alta nos
                primeiros 10 dias de doença:
              </Italic>
            </Bold>
          </P>
          <List>
            <LItem>
              20% das crianças desenvolverão dilatação transitória da artéria
              coronária;
            </LItem>
            <LItem>
              5% desenvolverão aneurismas da artéria coronária ({' '}
              <Text style={{ fontStyle: 'italic' }}></Text> {'>'} 2,5);
            </LItem>
            <LItem>1% desenvolverá aneurismas gigantes;</LItem>
            <LItem>
              As imunizações contra o sarampo, a caxumba e a varicela devem ser
              adiadas por 11 meses após o recebimento de IVIG em dose alta.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Ácido Acetilsalicílico (AAS)">
          <List>
            <LItem>
              Importante atividade anti-inflamatória e antiagregante
              plaquetária;
            </LItem>
            <LItem>Não diminui frequência de anormalidades coronarianas.</LItem>
          </List>
        </Subsection>
        <Subsection title="Observações">
          <Subsubsection title="Fase Aguda">
            <List>
              <LItem>80 a 100 mg/kg/dia;</LItem>
              <LItem>
                O momento da redução da dose do AAS: 48 a 72 horas sem febre;
              </LItem>
              <LItem>
                AAS dose baixa (3 a 5 mg/kg/dia ): manter até que o paciente não
                tenha evidências de alterações coronarianas (6 a 8 semanas após
                o início da doença);
              </LItem>
              <LItem>
                Anormalidades coronarianas demonstradas pelo ecocardiograma: AAS
                contínuo (dose baixa);
              </LItem>
            </List>
            <P>
              <Bold>ATENÇÃO</Bold> O uso concomitante de ibuprofeno antagoniza a
              antiagregação plaquetária induzida pelo AAS portanto seu uso deve
              ser evitado em crianças com aneurismas da artéria coronária.
            </P>
          </Subsubsection>
        </Subsection>
      </Section>
      <Section title="Outras Terapias">
        <Subsection title="Corticoesteróides">
          <List>
            <LItem>
              Reduz a prevalência de anormalidades da artéria coronária, duração
              da febre e inflamação;
            </LItem>
            <LItem>
              Pode ser considerada para o tratamento de pacientes de alto risco
              com doença coronariana aguda por DK;
            </LItem>
            <LItem>
              Normalmente, metilprednisolona 20-30 mg / kg por via intravenosa
              durante 3 dias, seguida ou não da prednisona oral.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Imunobiológicos">
          <List>
            <LItem>
              Infliximabe (5 mg/kg): redução da resistência à IVIG de 20% para
              5%;
            </LItem>
            <LItem>Etarnecepte (0,8 mg/kg).</LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Casos resistentes ao Tratamento Inicial">
        <P>
          10% a 20% dos pacientes com DK mantêm febre 36 horas após o término da
          infusão de IVIG são classificados como resistentes à IVIG.
        </P>
        <P>
          Os pacientes que são resistentes à IVIG inicial estão em maior risco
          de desenvolver anormalidades da artéria coronária.
        </P>
        <Subsection title="Tratamento">
          <List>
            <LItem>Retratamento com IVIG 2g / kg;</LItem>
            <LItem>Corticoesteróides;</LItem>
            <LItem>Infliximabe.</LItem>
          </List>
        </Subsection>
        <Subsection title="Seguimento">
          <P>
            Todos os pacientes devem fazer seguimento ambulatorial com
            reumatologista pediátrico e, quando necessário, com cardiopediatra
            também.
          </P>
          <Bold>Pacientes sem comprometimento cardíaco:</Bold>
          <P>Pacientes sem comprometimento cardíaco:</P>
          <P>
            Realizar o ecocardiograma ao diagnóstico, na 2ª semana e entre a 6ª
            e 8ª semana.
          </P>
          <P>
            Pacientes com anormalidades da artéria coronária importantes e em
            evolução (escores <Text style={{ fontStyle: 'italic' }}>Z</Text>{' '}
            {'>'} 2,5):
          </P>
          <P>
            Realizar ecocardiografia pelo menos 2 vezes por semana até que pare
            de evoluir, 1 vez por semana nos primeiros 45 dias de doença e, em
            seguida, mensalmente até o 3º mês.
          </P>
        </Subsection>
      </Section>
      <Section title="Evolução e Prognóstico">
        <P>
          A DK é uma doença aguda e autolimitada. Após a fase febril aguda,
          todas as outras manifestações irão regredir na fase subaguda ou na
          fase de convalescença, sem deixar sequelas, exceto as alterações
          cardiovasculares. Cerca de 50% dos aneurismas regridem em 1 a 2 anos.
          A DK pode recorrer em 1,5 a 3% dos pacientes. O índice de letalidade
          no Japão caiu para 0,1%. Nos EUA, a mortalidade intra-hospitalar dos
          pacientes com DK é de aproximadamente 0,17%. As mortes são decorrentes
          de comprometimento cardíaco agudo ou por suas sequelas. O pico de
          mortalidade ocorre entre 15 e 45 dias após o início da febre; muitos
          casos, porém, aparecem tardiamente por infarto agudo do miocárdio
          secundário à trombose coronariana em áreas de aneurisma ou, mais
          raramente, por ruptura de aneurismas.
        </P>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Reumatologia para pediatras. Sheila Knupp de Oliveira. 2.ed – Rio de Janeiro : Revinter, 2014."
        />
        <Reference
          idx={2}
          body="Castro PA, Urbano LMF, Costa. Doença de Kawasaki. IMCAn Bras Dermatol. 2009;84(4):317-31."
        />
        <Reference
          idx={3}
          body="McCrindle, BW, et al; Diagnosis, Treatment, and Long-Term Management of Kawasaki Disease. Circulation. 2017 Apr 25. "
        />
        <Reference
          idx={4}
          body="Freeman AF1, Shulman ST. Kawasaki disease: summary of the American Heart Association guidelines. Am Fam Physician. 2006 Oct 1;74(7):1141-8. "
        />
        <Reference
          idx={5}
          body="Castro, PA, et al. Doença de Kawasaki. An. Bras. Dermatol. vol.84 no.4 Rio de JaneiroJuly/Aug. 2009."
        />
      </Section>
    </Routine>
  )
}
