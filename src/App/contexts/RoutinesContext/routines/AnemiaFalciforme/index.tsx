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

export default function AnemiaFalciforme(): JSX.Element {
  return (
    <Routine
      id="anemia-facilforme"
      name="Anemia Falciforme"
      categories={['emergencia', 'hematologia-reumatologia-nefrologia']}
      authors={['dania', 'fabricio']}
      tags={['doença', 'hemolítica']}
    >
      <Section title="Introdução">
        <P>
          As hemoglobinopatias têm cerca de 4% de prevalência na população
          brasileira, sendo a AF a doença hereditária mais frequente no país.
          Possui caráter autossômico recessivo e é chamada de AF a homozigose
          para a Hb S (Hb SS). Associações da Hb S com hemoglobinas anormais (Hb
          D, C, Talassemias) constituem um grupo chamado de Doença Falciforme (DF),
          incluindo também a AF (Hb SS). Ocorre especialmente na raça negra,
          porém com o alto grau de miscigenação brasileiro, a doença pode ser
          encontrada indistintamente em indivíduos de diversas etnias.
        </P>
      </Section>
      <Section title="Fisiopatologia">
        <P>
          A Hb S é uma Hb mutante, resultante da troca do ácido glutâmico pela valina na posição 6 da cadeia beta da Hb. Em situações de estresse com baixa tensão de oxigênio (O2), induzindo à hipóxia, como febre, desidratação, infecções, exaustão física e frio intenso, a Hb S pode sofrer polimerização, levando à deformidade da hemácea, a qual adquire forma de foice, resultando em obstrução vascular, crises de dor, lesões endoteliais de caráter inflamatório crônico e lesões orgânicas, com isquemia, infarto, necrose e disfunção.
        </P>
      </Section>
      <Section title="Diagnóstico">
        <Subsection title="Screening Neonatal - Teste do Pezinho">
          <P>
            As hemácias do recém-nascido (RN) normal contêm maior concentração de
            Hb F do que de Hb, resultando num padrão “FA”. O RN que apresenta o
            traço falciforme tem fenótipo “FAS”, com mais Hb A do que Hb S. As
            crianças com doença SC têm padrão “FSC”; aquelas com doença SS,
            S/beta0-talassemia e S associada com a persistência da Hb F
            apresentam o fenótipo “FS” na triagem neonatal. A Hb F vai
            diminuindo gradativamente dentro do 1º ano de. vida, concomitante ao
            aumento progressivo da Hb A1.
          </P>
        </Subsection>
        <Subsection title="Eletroferese de Hb">
          <P>
            Exame de eleição para avaliação das hemoglobinas normais (A1, A2 e
            F) e para detectar as hemoglobinas anormais (S, C, D, E,
            Talassemias). Consiste na separação eletroforética das diferentes
            hemoglobinas, em acetato de celulose, de acordo com suas cargas
            elétricas.
          </P>
        </Subsection>
        <Table
          colWidths={[150, 100, 100, 100, 100, 100, 100, 100, 100, 100]}
          header={[
            '-',
            'Genótipo',
            'Hemólise',
            'Vaso-oclusão',
            'Triagem neonatal',
            'Hb A1',
            'Hb A2',
            'Hb F',
            'Hb S',
            'Hb C'
          ]}
          data={[
            [
              'Anemia Falciforme',
              'SS',
              '++++',
              '++++',
              'FS',
              '0',
              '< 3.5%',
              '2 - 20%',
              '80 - 95%',
              '0'
            ],
            [
              'Beta° talassemia',
              'SBeta°',
              '+++',
              '+++',
              'FS',
              '0',
              '3.5% - 7.5%',
              '2 - 15%',
              '80 - 92%',
              '0'
            ],
            [
              'Hemoglob.SC',
              'SC',
              '+',
              '++',
              'FSC',
              '0',
              'Não medida com a Hb C',
              '1 - 5%',
              '45 - 50%',
              '40 - 50%'
            ],
            [
              'Beta talassemia',
              'SBeta+',
              '+',
              '+',
              'FSA',
              '5 - 30%',
              '3.5 - 6%',
              '2 - 10%',
              '65 - 90%',
              '0'
            ],
            [
              'Traço falciforme',
              'AS',
              '0',
              '0',
              'FAS',
              '50 - 60%',
              '< 3.5%',
              '< 2%',
              '35 - 45%',
              '0'
            ],
            [
              'Normal',
              'AA',
              '0',
              '0',
              'FA',
              '95 - 98%',
              '< 3.5%',
              '< 2%',
              '0',
              '0'
            ]
          ]}
        />
      </Section>
      <Section title="Hemograma">
        <P>
          Anemia normocítica e normocrômica, com reticulocitose (entre 5-20%) e
          índices de Ht de 20-25%e Hb entre 6-10g/dl, devendo-se obter o nível
          basal de cada paciente, pois esses valores tendem a se manter, sendo
          um índice de seguimento clínico. A leucocitose é um achado frequente,
          podendo existir desvio para esquerda, mesmo com o paciente fora de
          crise. Há eritroblastos circulantes (entre 5 – 20%) e a plaquetose é
          comum, podendo atingir níveis de até 1.000.000/mm3. É importante
          ressaltar que tanto a plaquetose quanto a leucocitose decorrem da
          hiperplasia da medula óssea, na presença de hipofunção esplênica.
        </P>
        <Subsection title="Quadro Clínico">
          <P>
            Nos períodos intercrises, são encontrados no exame físico, palidez
            (anemia), icterícia e, dependendo da faixa etária e da
            hemoglobinopatia, esplenomegalia. Nas crises, as manifestações
            agudas incluem: crises vaso-oclusivas, sequestro esplênico, crise
            aplástica ou hemolítica e sob a forma de complicações, secundárias à
            hipóxia e hemólise crônicas, as quais resultam em comprometimento
            sistêmico, envolvendo todos os órgãos e sistemas.
          </P>
        </Subsection>
        <List>
          <LItem>
            1. Crise vaso-oclusiva (crises de dor): é a manifestação clínica mais comum da DF. A crise é causada pelo dano tissular isquêmico secundário à obstrução do fluxo sanguíneo pelas hemácias falcizadas. Os pacientes referem dor importante em extremidades, no abdome, na coluna ou em qualquer outra região do corpo. A 1ª manifestação, na maioria das crianças, é a dactilite (ou síndrome mão-pé), quando ainda lactentes. São necessárias medidas racionais e efetivas para controlar a dor, desde uma avaliação clínica global até a utilização de medicações analgésicas com critério e em doses adequadas. Manuseio da dor: inclui 3 classes de medicamentos, os analgésicos, anti-inflamatórios não-hormonais e os opióides. É importante ressaltar que o paciente que chega à emergência com crise álgica já deve ter sido medicado em casa, pela própria família, com analgésico, anti-inflamatório e, muitas vezes, com codeína, portanto, aquela crise dolorosa deve ser classificada de Moderada a grave ou Grave. Nesse sentido, é prioritário controlar a dor do paciente, sendo necessário a prescrição imediata das medicações – analgésico (dipirona, IV , a cada 4 ou a cada 6h) ; anti-inflamatório, especialmente para queixas de dor em território ósseo (cetoprofeno, ibuprofeno, VO, a cada 6 ou 8h ou tenoxicam, IV, 1 ou 2x/dia, para os maiores de 12 anos) ; morfina ( IV, a cada 3, 4 ou 6h, puro, sem diluir. Se necessário, prescrever em infusão contínua). Atentar para os potenciais efeitos adversos dessas medicações: gastropatia, nefropatias e alterações hemostáticas com os analgésicos e anti-inflamatórios; prurido, retenção urinária, constipação intestinal, náuseas, vômitos e sonolência com a morfina. Avaliar a resposta ao tratamento para dor após 24h de esquema analgésico, se melhora, é recomendado reduzir as doses (redução de 20 a 30% de cada vez), iniciando pela morfina, mantendo-se os intervalos, até o controle adequado e suspensão da medicação. Deve-se evitar a hiper-hidratação no paciente com DF, eles têm água corporal aumentada e principalmente naqueles que já possuem algum grau de cardiopatia, há risco de deflagrar edema agudo de pulmão. A taxa hídrica total deve corresponder a 1 – 1,5 vezes a taxa de manutenção normal, salvo nas situações clínicas onde houver perdas líquidas, por exemplo, nas GECA(s), com vômitos e diarréia. Medicações adjuvantes: anti-histamínicos, protetores gástricos, anti-eméticos e anti-depressivos.
          </LItem>
          <LItem>
            2. Síndrome torácica aguda (STA): caracterizada por febre, tosse, dor torácica, taquidispnéia, com hipoxemia (saturação < 96%, desde que associada à sinais e sintomas respiratórios), sibilos, e o surgimento de um infiltrado pulmonar novo no RX de tórax. Ao diagnóstico, além do quadro clínico, nota-se também queda de, pelo menos, 2 g/dl na Hb basal do paciente e uma paO2 < 75% à gasometria arterial. As etiologias incluem vaso-oclusão pulmonar e isquemia,
            embolização gordurosa e tromboembolismo, crises agudas de asma e
            infecção. É mais frequente nas crianças que em adultos, com pico
            entre 2 – 4 anos e os episódios recorrentes são comuns. A STA ocorre
            após episódios de infecções do trato respiratório, virais ou
            bacterianas, onde já foram identificados vários agentes etiológicos
            diferentes: Pneumococo, Hemófilo, Estafilococo, Salmonela,
            Klebisiela, Clamídia, Micoplasma, Vírus Sincicial Respiratório,
            Parvovírus B10. Por cursar com comprometimento alveolar e devido às
            infecções estarem entre as etiologias descritas, o diagnóstico
            diferencial com pneumonia bacteriana é difícil, impondo-se a
            necessidade do tratamento com antibióticos para garantir a abordagem
            desta doença. Está indicado esquema de antibiótico com largo
            espectro: ceftriaxona (bactérias encapsuladas) + macrolídeo ou
            quinolona (germes atípicos). Manuseio da STA: oxigênio suplementar
            para corrigir a hipoxemia (a saturação deve ser mantida &gt;= 96% ou a saturação basal do paciente);
            hidratação venosa adequada (máximo 1,5 vezes o volume de
            manutenção); transfusão de concentrado de hemácias (10ml/Kg, máximo
            de 300 ml, o que corresponde a uma bolsa), o objetivo é manter os
            níveis de Hb entre 10 – 11g/%; antibioticoterapia – ceftriaxona (75
            – 100mg/Kg, IV, a cada 24h. Não ultrapassar 4g/dia) e azitromicina
            (10 mg/Kg, VO, a cada 24h, máximo de 500 mg/dia). Quinolonas podem
            ser utilizadas nas crianças maiores e adolescentes – levofloxacino
            (500 – 750 mg/dia, a cada 24h).
          </LItem>
          <LItem>
            3. Sequestro esplênico: é o aprisionamento agudo de sangue dentro do
            baço levando à anemia severa e hipovolemia, de rápida evolução,
            constituindo, portanto, uma urgência médica. Tem maior incidência
            entre os 6 meses a 3 anos de idade e nos portadores de outras
            síndromes falciformes que permanecem com o baço aumentado. Nessas
            crises, o baço aumenta rapidamente de volume e ocorre queda súbita
            da Hb, maior que 2 g/dl do nível basal do paciente, com
            reticulocitose, podendo provocar choque hipovolêmico e morte.
            Clinicamente se manifesta com astenia, palidez acentuada, letargia,
            aumento do volume abdominal pelo aumento abrupto do baço.
            Possibilidade de recorrência de 50%. Manuseio da crise de
            sequestração esplênica: o paciente deve ser prontamente internado e
            submetido à restauração da volemia. Colher sangue para dosar Hb e Ht
            antes da transfusão, juntamente com a prova cruzada. Prescrever
            concentrado de hemácias se Ht &lt; 30% (10 ml/kg, máximo de 300 ml)
            e exsanguíneotransfusão parcial se Ht &gt; 30%. A transfusão deve
            ser realizada imediatamente, mesmo que o sangue disponível não seja
            fenotipado. Atenção: não prescrever uma 2ª transfusão sem antes
            fazer um exame (hemograma) de controle.
          </LItem>
          <LItem>
            4. Crise de hiper-hemólise: ocorre geralmente após infecções por
            micoplasma, quando há associação com esferocitose ou deficiência de
            G6PD. Clinicamente, se manifesta com icterícia súbita e progressiva,
            às custas de Bb indireta, queda da Hb e reticulocitose. Indica-se a
            transfusão de concentrado de hemácias nos casos em que há queda de 2
            g/dl da Hb basal do paciente ou quando houver sinais clínicos de
            descompensação hemodinâmica.
          </LItem>
          <LItem>
            5. Crise aplástica: não é frequente e ocorre geralmente após
            processos infecciosos relacionados ao Parvovírus B19. Há supressão
            temporária da eritropoiese medular que, associada a menor sobrevida
            das hemácias dos pacientes, resultam numa anemia severa.
            Clinicamente, há sintomas decorrentes de uma anemia aguda, sem
            visceromegalias, podendo alguma vezes, estar presentes sinais de
            choque hipovolêmico. Podem ser encontrados ainda, febre, sinais de
            infecção respiratória ou gastrointestinal. A principal
            característica laboratorial é a reticulocitopenia na ausência de
            icterícia. Deve-se colher sorologia para o Parvovírus B19 e realizar
            transfusão de concentrado de hemácias (10 ml/kg, máximo de 300 ml),
            com controle do hemograma 24h após. É indicado o uso da
            gamaglobulina venosa – GGIV, na dose de 2g/kg, dose única, correr em
            bomba de infusão, em 12h.
          </LItem>
          <LItem>
            6. Acidente vascular encefálico (AVE): uma das mais graves
            complicações da AF, é um evento neurológico agudo que ocorre em
            cerca de 10% das crianças com Hb SS, secundário à vaso- oclusão ou
            hemorragia, cujos sintomas são: hemi ou monoparesia, distúrbios
            visuais, afasia ou disfasia, convulsões, coma. O diagnóstico é
            confirmado pela TC (sem contraste) ou RM. Manuseio do AVE: o
            paciente deve ser prontamente submetido à transfusão (colher sangue
            para dosar Hb e Ht antes). Prescrever concentrado de hemácias se Ht
            &lt; 30% (10 ml/kg, máximo de 300 ml) e exsanguíneotransfusão
            parcial se Ht &gt; 30%. A transfusão deve ser realizada
            imediatamente, mesmo que o sangue disponível não seja fenotipado.
            Atenção: não elevar a Hb para mais que 10 mg/dl e nunca prescrever
            uma 2ª transfusão sem antes fazer um exame (hemograma) de controle.
            Após a regressão do quadro agudo, o paciente deve se mantido em
            regime crônico de transfusões ( a cada 3 – 4 semanas), visando
            manter a concentração de Hb S inferior a 30%, uma vez que o índice
            de recorrência do AVE alcança 67% dos pacientes entre 12 e 24 meses
            após o primeiro episódio e 80% nos 3 primeiros anos, quando não
            transfundidos cronicamente. Mesmo os pacientes em esquema
            transfusional podem apresentar recorrência de 10%. O nível de
            hemoglobina pré-transfusional deve ser mantido entre 8 e 9 g/dl e
            hemoglobina pós-transfusional ao redor de 10g/dl. É recomendado
            realizar a triagem de pacientes com doppler transcraniano nos
            pacientes falcêmicos entre 2 – 17 anos, para avaliar a velocidade de
            fluxo sanguíneo e identificar os pacientes com alto risco para AVE.
            Aqueles com velocidade &gt; 200 cm/seg devem ser colocados em regime
            de transfusões seriadas para impedir a 1ª crise de AVE.
          </LItem>
          <LItem>
            7. Fígado e vias biliares: as crises de falcização intra-hepática
            levam a um quadro de colestase, caracterizada por hepatomegalia,
            aumento das transaminases e níveis de Bb elevados com predomínio da
            fração direta. A colelitíase ocorre em 14% das crianças &lt; 10
            anos, em 30% dos adolescentes e em 75% dos adultos com AF, com
            início frequentemente a partir dos 6 anos. Podem evoluir de modo
            assintomático ou apresentar crises de dor em hipocôndrio direito.
            Podem ocorrer complicações como a colecistite aguda, a obstrução do
            ducto biliar comum e pancreatite aguda. A US de abdome é o método
            diagnóstico mais utilizado. A retirada eletiva dos cálculos biliares
            assintomáticos é preferencial. Os episódios de colecistite aguda
            devem ser tratados conservadoramente com antibióticos, manutenção do
            balanço hidroeletrolítico e cuidados gerais, até regressão da crise,
            quando, então, a colecistectomia deverá ser realizada.
          </LItem>
          <LItem>
            8. Priapismo: há 2 grandes formas de apresentação, aguda e crônica.
            O episódio agudo é caracterizado por uma ereção dolorosa prolongada
            que persiste por várias horas, por decorrência da congestão dos
            corpos cavernosos e/ou esponjosos do pênis por hemácias falciformes.
            A forma crônica caracteriza-se por ereções dolorosas repetitivas e
            reversíveis. A conduta inicial baseia-se em analgesia sistêmica. A
            exsanguíneotransfusão parcial é indicada se não houver melhora após
            12h de analgesia adequada (não deixar Hb final &gt; 10 g/dl). Se não
            houver melhora após 24h do início das manifestações clínicas,
            realizar punção aspirativa do corpo cavernoso e, mantendo-se ainda o
            priapismo, indica-se intervenção cirúrgica, com realização de shunts
            entre a glande e o corpo cavernoso ou com fístula safenocavernosa. O
            tratamento deve ser imediato, não ultrapassando 24h, devido ao risco
            de sequelas, principalmente impotência.
          </LItem>
          <LItem>
            9. Ossos e articulações: tanto as metáfises e epífises ósseas quanto
            as articulações adjacentes são acometidas no paciente com AF. Nos
            ossos longos, os infartos levam a edema de partes moles, podendo
            mimetizar um quadro de osteomielite. A necrose avascular, principalmente da cabeça do fêmur, é uma alteração marcante nesses pacientes (mais comum no Hb SC), caracterizada por dor persistente
            no quadril que piora à deambulação e alivia com o repouso. O
            diagnóstico precoce é realizado através de RM ou cintilografia
            óssea.
          </LItem>
          <LItem>
            10. Complicações cardiopulmonares: são resultantes da destruição
            tecidual por infecções e lesões vasculares recorrentes na circulação
            pulmonar, com consequente diminuição da complacência pulmonar,
            hipertensão pulmonar (verificada em 6 – 10% dos pacientes),
            insuficiência cardíaca de alto débito (estado hipercinético). Vários
            estudos recentes têm sugerido maior prevalência de asma entre os
            falcêmicos do que nas crianças sem esta doença. A presença de
            sibilância no exame físico deve conduzir à investigação para asma,
            mas, nos doentes falciformes, os sibilos podem ocorrer mesmo sem
            estarem associados à asma. Portanto, sibilância e asma são fatores
            de risco independentes, mas ambos conferem aumento da gravidade aos
            eventos vaso-oclusivos e de STA. Na DF existe diminuição da
            viscosidade sanguínea, levando a um maior desgaste cardíaco.
            Clinicamente, há taquicardia, sopro cardíaco e, eventualmente, 3ª
            bulha, com sinais de insuficiência cardíaca. Além das avaliações
            clínicas periódicas, exames de controle regulares devem ser
            realizados: RX de tórax, provas de função pulmonar – espirometria,
            ECG, ecocardiograma e cateterismo arterial para casos indicados. O
            uso de vasodilatadores periféricos, hidroxiuréia e transfusões
            regulares têm sido utilizados, pesando-se os riscos e benefícios de
            cada um.
          </LItem>
          <LItem>
            11. Úlcera de perna: ocorrem em 8 – 10% dos pacientes com DF,
            principalmente após a 1ª década de vida, mais frequente no sexo
            masculino e nos portadores de Hb SS. Têm etiologia variável, podendo
            ser traumática, por picada de insetos ou espontâneas, por crises
            vaso-oclusivas crônicas. Atingem preferencialmente o terço inferior
            da perna, ao redor do maléolo medial ou lateral e podem se infectar
            secundariamente, principalmente por Staphylococcus aureus,
            Pseudomonas sp, Streptococcus sp e por bactérias anaeróbias. O
            tratamento se assemelha ao das úlceras de outras etiologias, com
            cuidados locais, limpeza, desbridamento e antibioticoterapia quando
            necessário.
          </LItem>
          <LItem>
            12. Infecções: constituem a maior causa de morbimortalidade dos
            pacientes falcêmicos. Os sítios mais comuns de infecção são os
            pulmões, trato urinário, SNC, ossos e articulações. Os falcêmicos
            são mais propensos às infecções por apresentarem asplenia, por não
            produzirem anticorpos IgG específicos contra antígenos
            polissacarídicos e pela deficiência na opsonização, além da hipóxia
            tecidual, que facilita surgimento de focos de infecção localizados. A
            febre é um fator preocupante e deve ser conduzida e investigada com
            cuidados especiais. Os pacientes devem realizar, ainda na
            emergência, HC e VHS, coleta de culturas (sangue e urina), RX tórax
            e de SAF e exame de urina tipoo 1 (EAS). Nos casos de febre sem sinais localizatórios em &lt;
            2 anos de idade e toxemiados, proceder também a coleta do líquor (LCR). Os
            germes mais relacionados são: Pneumococo, Hemófilo, salmonela, E.
            coli, Klebisiella, Micoplasma, Clamídia. Medidas preventivas devem ser
            realizadas, como as vacinas (calendário completo de imunizações) e
            instituição da penicilina profilática a partir do 3º mês de vida,
            até os 5 anos de idade. Utiliza-se a penicilina V – oral 200.000 UI
            (2,5 ml) VO, de 12/12h, até 1 ano de idade. Para crianças &gt; 10
            Kg, 400.000 UI (5 ml) VO, de 12/12h. Pode-se usar também a
            penicilina benzatina: 600.000 UI, IM, de 21/21 dias para crianças
            com até 20 Kg e 1.200.000 UI para &gt; 20 Kg.
          </LItem>
        </List>
        <Table
          colWidths={[125, 200, 100, 200, 200, 100]}
          header={[
            '-',
            'Dose',
            'Intervalo',
            'Dose Máxima',
            'Apresentação',
            'Nomes Comerciais'
          ]}
          data={[
            [
              'Dipirona',
              'VO: 10-25 mg/Kg/dose, IV: 15 mg/Kg/dose (0,03ml/Kg/dose, de ampolas de 500mg/ml)',
              '4/4 ou 6/6h',
              'Se gotas: 40 gts, 6x Adolescentes: 2 g/dia Adultos: 4 g/dia',
              'Compr. de 500 mg\nAmps (2 e 5ml = 500 mg/ml)\nSusp gotas 25mg/gota\nXarope sol. oral 50 mg/ml',
              'Novalgina, Magnopirol, Maxiliv'
            ],
            [
              'Parecetamol (acetaminofen)',
              '10-15 mg/Kg/dose VO',
              '4/4 ou 6/6h',
              '65 mg/Kg/dia ou 4 g/dia',
              'Comprs. de 500 e 750 mg\nBebê 5mg/gota (100mg/ml)\nGotas 10 mg/gota (200mg/ml)\nCriança susp. oral 160 mg/ml',
              'Tylenol, Dôrico'
            ],
            [
              'Cetoprofeno',
              '0,5-1,0 mg/Kg/dose, VO\nDe 7-11anos: 25mg, 3-4x\n>11anos: 50mg, 3-4x,VO',
              '6/6 ou 8/8h',
              '300 mg/dia',
              'Cáps. de 50 mg\nAmps (2ml = 100mg)\nSusp gotas 20 mg/ml\nXarope 1 mg/ml',
              'Profenid'
            ],
            [
              'Ibuprofeno',
              '30-50 mgKg/dia',
              '6/6 ou 8/8h',
              '2.400 mg/dia',
              'Comprs. de 200, 300, 400, 500, 600mg Sol. gotas 100 ou 200 mg/ml\nXarope susp 5ml/100mg',
              'Alivium, Dalsy, Advil'
            ],
            [
              'Naproxeno',
              '10-20mg/Kg/dia, VO',
              '8/8 ou 12/12h',
              '1.500 mg/dia',
              'Compr. de 250, 275, 500, 550 mg',
              'Flanax, Naprosyn'
            ],
            [
              'Diclofenaco',
              '2-3 mg/Kg/dia, VO  50 mg/dose, 3x, para adolescentes',
              '6/6 ou 8/8h',
              '150 mg/dia',
              'Compr. de 50 mg e amp. (3ml = 75mg)\nSusp gotas 15mg/ml',
              'Cataflan, Voltarem'
            ],
            [
              'Tenoxicam',
              'Para > 12 anos: 20-40 mg/dia',
              '12/12 ou 24/24h, IV ou VO',
              '40 mg/dia',
              'Ampolas e Compr. de 20mg',
              'Tilatil, Tefran, Tenoxil'
            ],
            [
              'Tramadol',
              '5 mg/Kg/dia',
              '6/6 ou 8/8h',
              '400 mg/dia ou 100mg, 6/6h',
              'Comprs ou cáps 50mg\nGotas 100mg/ml\nAmps de 1 ou 2ml (50mg/ml)',
              'Tramal'
            ],
            [
              'Codeína',
              '0,5-1,0 mg/Kg/dose, VO',
              '4/4 ou 6/6h',
              '60 mg/dia',
              'Compr.7,5 mg de codeína com 500mg de paracetamol Compr.30mg de codeína com 500mg de paracetamol',
              'Tylex, Codex'
            ],
            [
              'Morfina',
              '0,1 – 0,15 (máx 0,2) mg/kg/dose, IV OU 20 microg/kg/h, na BI',
              '3/3, 4/4 ou 6/6h ou em BI contínua',
              '10 mg/dose',
              'Comprs. de 10 e 30mg\nAmpolas de 1 ou 2 ml (1ml=10mg)',
              'Dimorf'
            ]
          ]}
          caption="A tabela acima contém as medicações utilizadas para analgesia na DF"
        />
        <P>
          Hidroxiuréia(HU) na AF: é um agente quimioterápico citotóxico que aumenta a produção de Hb F em 60% das pessoas tratadas. Sua concentração elevada pode diminuir a polimerização da Hb S e produzir melhora do curso clínico das crises (crises álgicas, STA, AVE). Outras ações verificadas com o uso da HU é a elevação da taxa de hemoglobina e do volume corpuscular médio (VCM), assim como redução do número de reticulócitos. Há ainda a diminuição da expressão de moléculas de adesão, tais como fosfatidilserina da superfície eritrocitária e plaquetária e da anexina V, bem como das proteínas receptoras localizadas nas células endoteliais. Diminui a adesão vascular contribuindo, desse modo, para a redução das crises vaso-oclusivas.  É indicado a partir dos 3 anos de vida, havendo um histórico de três ou mais episódios de crises vaso-oclusivas, com necessidade de atendimento médico; uma crise torácica aguda recidivante; um ou mais acidentes vasculares encefálicos; priapismo recorrente; e para pacientes com disfunções orgânicas graves. A dose de HU varia de 10 a 30 mg/kg/dia, e deve ser administrada de uma só vez. Medicação dispensada através de solicitação específica em serviço especializado.
        </P>
        <P>
          Glutamina: foi aprovada pelo FDA em 2017 e pela ANVISA em 2019 para uso em pacientes portadores de AF {'>'} 5 anos de idade. É um aminoácido abundante nos fluidos intra e extracelular. Sua síntese, estocagem e liberação são realizadas pelo tecido muscular esquelético. Ação: reduz os fenômenos oxidativos / inflamatórios, diminuindo os episódios de crise álgica e de internações. Não há efeitos adversos importantes relatados em diversos estudos. Dose: 0,5g/Kg/dia (10 a 20 g/dia).
        </P>
        <P>
          Transfusão na AF: está indicada a transfusão de concentrado de
          hemácias em qualquer situação que leve à exacerbação da anemia com
          descompensação hemodinâmica. <Bold>Atenção:</Bold> deve-se coletar amostra de sangue para fenotipagem antes da primeira transfusão do paciente falcêmico! Outras situações em que a transfusão
          também é mandatória:
        </P>
        <List>
          <LItem>Sequestro esplênico ou hepático;</LItem>
          <LItem>STA;</LItem>
          <LItem>AVE;</LItem>
          <LItem>Crise aplástica;</LItem>
          <LItem>Crise de hiper-hemólise;</LItem>
          <LItem>Priapismo;</LItem>
          <LItem>Procedimentos de alto risco: anestesia geral;</LItem>
          <LItem>
            Programa de transfusão crônica: AVE, sequestro esplênico recorrente,
            gravidez.
          </LItem>
        </List>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Ministério da Saúde, Doença Falciforme. 1ª ed. Brasília, 2014."
        />
        <Reference
          idx={2}
          body="Murahovschi Jayme (coord.). Pediatria Diagnóstico e tratamento. 6.ed. São Paulo: Sarvier, 2003."
        />
        <Reference
          idx={3}
          body="Anemia falciforme e suas manifestações respiratórias. Rev Med Minas Gerais 2010; 20(4 Supl 3): S5-S11."
        />
        <Reference
          idx={4}
          body="Ministério da Saúde, Protocolo Clínico e Diretrizes Terapêuticas Doença Falciforme, agosto, 2016."
        />
        <Reference
          idx={5}
          body="Barros SA et al. Anemia falciforme: uma revisão acerca da doença, novos métodos diagnósticos e tratamento. REAS, Revista Eletrônica Acervo Saúde,2017. Vol. Sup. 9, S856-S863."
        />
        <Reference
          idx={6}
          body="Protocolos de Tratamento em Hematologia e Hemoterapia, HemoRio. Secretaria Estadual de Saúde Governo do Estado do Rio de Janeiro. 2. ed. 2014."
        />
      </Section>
    </Routine>
  )
}
