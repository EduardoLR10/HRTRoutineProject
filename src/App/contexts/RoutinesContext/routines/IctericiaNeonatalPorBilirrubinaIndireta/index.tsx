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

export default function IctericianeonatalPorBilirrubinaIndireta(): JSX.Element {
  return (
    <Routine
      id="ictericia"
      name="Icterícia Neonatal por Bilirrubina Indireta"
      categories={['neonatologia', 'emergencia']}
      authors={['maria']}
      tags={['fototerapia', 'incompatibilidade', 'sanguínea']}
    >
      <Section title="Conceito">
        <P>
          Constitui-se em um dos problemas mais frequentes no período neonatal e
          corresponde à expressão clínica da hiperbilirrubinemia.
        </P>
        <P>
          Hiperbilirrubinemia é definida como a concentração sérica de
          bilirrubina indireta (BI) maior que 1,5 mg/dl ou de bilirrubina direta
          (BD) maior que 1,5 mg/dl, desde que esta represente mais que 10% do
          valor de bilirrubina total (BT).
        </P>
      </Section>
      <Section title="Classificação da Hiperbilirrubinemia">
        <List>
          <LItem>
            <Bold>Significante:</Bold> BT sérica {'>'}15–17mg/dl (1 a 8% dos
            nascidos vivos);
          </LItem>
          <LItem>
            <Bold>Grave:</Bold> BT {'>'}25mg/dl (1 caso em 500 a 5.000 nascidos
            vivos);
          </LItem>
          <LItem>
            <Bold>Severa-extrema:</Bold> BT {'>'}
            30mg/dl (1 caso em 15.000 nascidos vivos).
          </LItem>
        </List>
        <P>
          A hiperbilirrubinemia significante, presente na primeira semana de
          vida, é um problema comum em RN a termo e pré-termo tardio.
        </P>
        <P>
          A presença de icterícia PRECOCE - antes de 24 horas de vida e valores
          de BT {'>'}12mg/dl, independentemente da idade pós-natal, alerta para
          a investigação da causa.
        </P>
      </Section>
      <Section title="A investigação da etiologia">
        <P>
          Independentemente das idades gestacional e pós-natal, inclui análise
          do quadro clínico e dos exames laboratoriais.
        </P>
        <Subsection title="A Icterícia Fisiológica (IF)">
          <P>
            É causada por alterações neonatais normais no metabolismo da
            bilirrubina, por deficiência de maturação da enzima{' '}
            <Italic>uridina difosfato glicuroniltransferase</Italic> (UGT),
            responsável pela sua conjugação, o que resulta em diminuição de sua
            depuração. Soma-se a isto, o aumento da produção e da circulação
            entero-hepática da bilirrubina. A IF tem seu pico entre 48-120 horas
            de vida e se resolve em até 2 semanas, variando com a etnia e idade
            gestacional (IG). Se persistir por período maior que este, deve ser
            investigada.
          </P>
          <P>HIPERBILIRRUBINEMIA INDIRETA EM PREMATUROS ≥ 35 semanas</P>
          <P>
            A Hiperbilirrubinemia neonatal em lactentes de idade gestacional
            (IG) ≥ 35 semanas é definida como BT {'>'} percentil 95 sobre o
            nomograma de Bhutani.
          </P>
          <P>É UMA DAS CAUSAS MAIS FREQUENTES DE INTERNAÇÃO APÓS A ALTA.</P>
          <Figure source={img1} size={[422, 250]} />
          <P>
            Valores de BT= 20 mg//dl já estão associados a acometimento de
            sistema nervoso central e devem ser investigados e tratados.
          </P>
          <P>
            Hiperbilirrubinemia neonatal severa é definida como BT {'>'} 30
            mg/dl . É associada com um risco aumentado de encefalopatia
            bilirrubínica e disfunção neurológica induzida por bilirrubina
            (BIND), a qual ocorre quando a bilirrubina atravessa a barreira
            hemato-encefálica, acumula-se no tecido cerebral e provoca
            neurotoxicidade.
          </P>
          <P>
            O termo <Italic>Kernicterus</Italic> é usado para descrever a
            sequela crônica e permanente de BIND, e pode ocorrer em qualquer
            idade.
          </P>
        </Subsection>
        <Subsection title="Fatores de Risco para Hiperbilirrubinemia Neonatal">
          <P>
            Os principais fatores de risco para hiperbilirrubinemia neonatal
            severa são:
          </P>
          <Subsubsection title="Maiores">
            <List>
              <LItem>Icterícia nas primeiras 24 horas de vida;</LItem>
              <LItem>
                Incompatibilidade de grupo sanguíneo com teste de antiglobulina
                direta positivo;
              </LItem>
              <LItem>
                Outras doenças hemolíticas (por exemplo, deficiência de G6PD);
              </LItem>
              <LItem>Idade gestacional de 35 a 36 semanas;</LItem>
              <LItem>Irmão que necessitou fototerapia;</LItem>
              <LItem>Cefalohematoma ou contusão significativa;</LItem>
              <LItem>
                Aleitamento materno exclusivo, principalmente se houver
                dificuldades na amamentação e houver perda de peso excessiva;
              </LItem>
              <LItem>Descendência asiática.</LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Menores">
            <List>
              <LItem>
                BT alta em faixa intermediária, percentil entre 75 e 95 para
                idade;
              </LItem>
              <LItem>Icterícia observada antes da alta;</LItem>
              <LItem>Bebê macrossômico, filho de mãe diabética;</LItem>
              <LItem>Policitemia;</LItem>
              <LItem>Sexo masculino;</LItem>
              <LItem>Idade materna superior a 25 anos.</LItem>
            </List>
          </Subsubsection>
        </Subsection>
      </Section>
      <Section title="Causas de Hiperbilirrubinemia Indireta">
        <Subsection title="Aumento da Produção: Processos de Doença Hemolítica">
          <List>
            <LItem>Incompatibilidade ABO ou Rh;</LItem>
            <LItem>
              Defeitos hereditários da membrana de glóbulos vermelhos (por
              exemplo, esferocitose hereditária e eliptocitose);
            </LItem>
            <LItem>
              Defeitos enzimáticos do eritrócito (por exemplo, deficiência de
              glicose-6-fosfato desidrogenase [G6PD], deficiência de piruvato
              quinase e porfiria eritropoiética congênita);
            </LItem>
            <LItem>Sepse;</LItem>
            <LItem>Macrossomia;</LItem>
            <LItem>Cefalohematoma;</LItem>
            <LItem>Policitemia.</LItem>
          </List>
        </Subsection>
        <Subsection title="Alteração de Metabolismo da Bilirrubina">
          <List>
            <LItem>Hipóxia ou acidose;</LItem>
            <LItem>Hipoglicemia;</LItem>
            <LItem>Drogas;</LItem>
            <LItem>Hipotiroidismo.</LItem>
          </List>
        </Subsection>
        <Subsection title="Síndrome de Cringler-Najjar">
          <P>Existem duas variantes:</P>
          <List>
            <LItem>
              <Bold>Tipo I</Bold> - é a forma mais grave de desordens
              hereditárias UGT1A1. A atividade da UGT é praticamente ausente e a
              hiperbilirrubinemia severa se desenvolve nos primeiros dois a três
              dias após o nascimento. Fototerapia ao longo da vida é necessária
              para evitar a BIND, a menos que o transplante de fígado seja
              realizado. O modo de herança é autossômica recessiva.
            </LItem>
            <LItem>
              <Bold>Tipo II</Bold> – é menos grave , mantém certa função da UGT.
              Embora algumas crianças afetadas desenvolvam icterícia grave, a
              hiperbilirrubinemia frequentemente responde ao tratamento com
              fenobarbital. Geralmente é herdada de maneira autossômica
              recessiva, embora a transmissão autossômica dominante ocorra em
              alguns casos.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Síndrome de Gilbert">
          <P>
            É o distúrbio hereditário mais comum de glicuronidação da
            bilirrubina. Resulta de uma mutação na região promotora do gene
            UGT1A1. A mutação provoca uma diminuição da produção da UGT, levando
            ao aumento de BI. Icterícia do leite materno durante a segunda
            semana após o nascimento pode ser devido a manifestação neonatal
            simultânea da síndrome de Gilbert.
          </P>
        </Subsection>
        <Subsection title="Aumento da Circulação Entero-hepática">
          <List>
            <LItem>
              Deficiência na motilidade intestinal causada por uma obstrução
              anatômica ou funcional ( p.ex.: estenose hipertrófica de piloro);
            </LItem>
            <LItem>
              Icterícia do leite materno: definida como a persistência de
              “icterícia fisiológica” além da primeira semana de idade.
              Apresenta-se normalmente após os primeiros 3 a 5 dias de vida, um
              pico dentro de 2 semanas e progressivamente volta a níveis normais
              durante 3 a 12 semanas. Icterícia do leite materno deve ser
              distinguida da falha na amamentação com icterícia que ocorre
              dentro da 1ª semana de vida, resultando em perda excessiva de peso
              e/ou desidratação;
            </LItem>
            <LItem>Alteração da microbiota por antibióticos.</LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Quando investigar a icterícia">
        <List>
          <LItem>
            Aumento precoce e/ou muito rápido de BT ( {'>'}0,2 mg/dL/hora) devem
            ser internados para fototerapia e investigação;
          </LItem>
          <LItem>Manutenção de icterícia após 2 semanas de vida;</LItem>
          <LItem>BT maior ou igual ao percentil 95;</LItem>
          <LItem>Suspeita de doença hemolítica.</LItem>
        </List>
      </Section>
      <Section title="Para Investigação Inicial">
        <List>
          <LItem>
            Bilirrubina total e frações (BTF): é de fundamental importância
            diferenciar se a hiperbilirrubinemia se dá às custas de
            direta/conjugada (BD) ou indireta/não-conjugada (BI);
          </LItem>
          <LItem>
            Tipagem sanguínea e teste de Coombs direto para avaliar doença
            hemolítica;
          </LItem>
          <LItem>
            Hemograma e esfregaço – hemoglobina baixa pode ser indicativa de
            hemólise, que pode ser confirmado pela presença de células
            fragmentadas no esfregaço de sangue;
          </LItem>
          <LItem>
            Reticulócitos – um aumento de reticulócitos durante as primeiras 72
            horas de vida é consistente com a destruição de células vermelhas do
            sangue (por exemplo, hemólise);
          </LItem>
          <LItem>Dosagem de glicose-6-fosfato desidrogenase (G6PD);</LItem>
          <LItem>Se não realizado na triagem neonatal: TSH e T4 livre.</LItem>
        </List>
      </Section>
      <Section title="Tratamento da Icterícia">
        <P>
          Para casos não graves, a fototerapia é o tratamento de escolha, sendo
          segura e eficaz. Para lactentes que foram readmitidos, pode-se
          suspender a fototerapia quando a BT atingir 12 a 14 mg/dl. Deve ser
          coletado controle em 24-48 horas devido à possibilidade de efeito
          rebote, podendo ser realizado em seguimento ambulatorial.
        </P>
        <P>
          SE grave: BT {'>'}25mg/dl ou Severa: BT {'>'}30mg/dl;
        </P>
        <P>
          AVALIAR Exsanguíneotransfusão (160ml/Kg - sangue total) de acordo com
          os níveis de bilirrubina total e organograma de risco. *Nos casos
          hemolíticos;
        </P>
        <P>
          Iniciar fototerapia intensiva imediatamente e considerar o uso de
          Imunoglobumina (Gamaglobulina imune);
        </P>
        <P>
          Encaminhar para acompanhamento e reavaliação ambulatorial os pacientes
          com hiperbilirrubinemia indireta sem nível para fototerapia, sem
          elevação de bilirrubina direta, bom estado geral e boa evolução
          ponderal, em 48h.
        </P>
        <P>
          Lembrar de repetir o teste da orelhinha (BERA) após a alta hospitalar.
        </P>
      </Section>
      <Section title="Colestase Neonatal (Hiperbilirrubinemia Direta)">
        <P>
          Definida como BD{'>'} 1mg/dl se BT {'<'} 5mg/dl e/ou BD {'>'} 20% da
          BT se BT{'<'}5 mg/dl. Clinicamente, a suspeita deve ser feita quando
          houver colúria e/ou acolia/hipocolia fecal (sempre deve ser avaliada
          pelo médico, que deve partir as fezes para observar seu interior).
        </P>
        <P>
          A avaliação de um bebê com hiperbilirrubinemia conjugada é complexa,
          porque muitos distúrbios podem apresentar colestase neonatal e a
          distinção entre eles é difícil, devido à falta de testes diagnósticos
          específicos. No entanto, relativamente poucos diagnósticos representam
          a maioria dos casos.
        </P>
        <Table
          colWidths={[150, 125]}
          header={[
            'Causas mais comuns de colestase',
            'Porcentagem dos diagnósticos'
          ]}
          data={[
            ['Atrasia de vias biliares (AVB)', '25%'],
            ['Hopatite neonatal idiopática', '25%'],
            ['Hepatite infecciosa', '11%'],
            ['Associada a nutrição parenteral', '6%'],
            ['Doenças metabólicas', '4%'],
            ['Deficiência de alfa 1 -antitripsina', '4%'],
            ['Sd. de Alagille', '1%'],
            ['Colestase progressiva familiar intrahepática', '1%']
          ]}
        />
        <Subsection title="Tipo de Colestase Neonatal">
          <P>Os casos de colestase neonatal são divididos em 2 grupos:</P>
          <Subsubsection title="Extra-hepáticas (anormalidades da árvore biliar)">
            <List>
              <LItem>Atresia de vias biliares (AVB);</LItem>
              <LItem>Hipoplasia de vias biliares;</LItem>
              <LItem>Cisto de colédoco;</LItem>
              <LItem>Estenose ductal;</LItem>
              <LItem>Doença de Caroli;</LItem>
              <LItem>Colangite esclerosante;</LItem>
              <LItem>Colelitíase.</LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Intra-hepáticas">
            <List>
              <LItem>
                Infecciosas (TORCHS, hepatites virais e outros vírus ,
                tuberculose, infecções bacterianas);
              </LItem>
              <LItem>
                Doenças metabólicas hereditárias/Erros inatos do metabolismo
                (Gaucher, Niemann-pick, hemocromatose, Colestase familiar intra
                hepática, hipotiroidismo, deficiência de alfa1-antitripsina,
                Wilson, fibrose cística, glicogenose tipo IV, galactosemia,
                tirosinemia, Sd. de Alagille, entre outras);
              </LItem>
              <LItem>Tóxicas ( nutrição parenteral, drogas, sepse);</LItem>
              <LItem>
                Outras (insuficiência cardíaca congestiva, lúpus neonatal,
                histiocitose X, tumores).
              </LItem>
            </List>
            <P>
              Portanto, as causas são inúmeras e o diagnóstico é, muitas vezes,
              desafiador. A investigação deve ser realizada no menor tempo
              possível, pois a idade de intervenção muda drasticamente o
              prognóstico em grande parte das etiologias. É importante nunca
              deixar bebês colestáticos sem um seguimento próximo, e se
              possível, tratá-los em centros de referência.
            </P>
          </Subsubsection>
        </Subsection>
        <Subsection title="Investigação Inicial">
          <P>
            Como investigação inicial, deve-se afastar causas infecciosas,
            avaliar função hepática e caracterizar a colestase:
          </P>
          <List>
            <LItem>Hemograma, hemocultura (se for o caso), VHS/PCR;</LItem>
            <LItem>Aminotransferases (AST/ALT/FA/GGT);</LItem>
            <LItem>Bilirrubinas total e frações;</LItem>
            <LItem>
              Tempo de protrombina e tempo de tromboplastina parcial;
            </LItem>
            <LItem>Eletroforese de proteínas;</LItem>
            <LItem>Colesterol total e frações e triglicerídeos;</LItem>
            <LItem>Urina 1 e urocultura;</LItem>
            <LItem>Sorologias ZTORCHS mãe e bebê se possível;</LItem>
            <LItem>Avaliar teste do pezinho.</LItem>
          </List>
          <Subsubsection title="Numa segunda avaliação">
            <List>
              <LItem>Alfa 1-antitripsina sérica;</LItem>
              <LItem>Ferro e ferritina;</LItem>
              <LItem>
                Testes de função metabólica: glicemia de jejum, gasometria
                venosa, eletrólitos, lactato, piruvato e amônia séricos;
              </LItem>
              <LItem>Triagem urinária para erros inatos do metabolismo;</LItem>
              <LItem>Dosagens enzimáticas específicas.</LItem>
            </List>
          </Subsubsection>
          <P>
            <Bold>
              Os erros inatos do metabolismo apresentam em geral acidose
              metabólica, alcalose respiratória, hiperamoniemia, hipoglicemia,
              cetose, aumento de lactato e piruvato.
            </Bold>
          </P>
        </Subsection>
      </Section>
      <Section title="Exames Complementares">
        <Subsection title="Radiologia">
          <P>Alguns achados característicos:</P>
          <List>
            <LItem>Vértebra em asa de borboleta: Sd. de Alagille;</LItem>
            <LItem>Dextrocardia e situs inversus : AVB;</LItem>
            <LItem>Calcificações cranianas : Toxoplasmose e CMV.</LItem>
          </List>
        </Subsection>
        <Subsection title="Ultrassom de Abdome">
          <P>Requer jejum de 6 horas e avalia alterações anatômicas.</P>
        </Subsection>
        <Subsection title="Cintilografia de vias biliares (disida -Tc99)">
          <P>
            Sua presença no intestino fala contra AVB, porém é um exame de
            moderada confiança, com sensibilidade de 99% e especificidade de
            70%.
          </P>
        </Subsection>
        <Subsection title="Colangioressonância">
          <P>Sensibilidade para obstrução de 100%.</P>
        </Subsection>
        <Subsection title="Biópsia Hepática">
          <P>
            Melhor exame para diagnóstico de AVB. Deve-se realizar biópsia em
            praticamente todos os bebês com suspeita de AVB para identificar
            histologia consistente com obstruções que justifiquem a exploração
            cirúrgica e diferenciar de outras causas de colestase
            intra-hepática.
          </P>
        </Subsection>
      </Section>
      <Section title="TRATAMENTO">
        <P>INTERNAR PARA INVESTIGAÇÃO, ACOMPANHAMENTO E TRATAMENTO.</P>
        <P>
          Devido à complexidade do assunto, sempre que possível, a colestase
          neonatal deve ser acompanhada por um hepatologista pediátrico.
        </P>
      </Section>
      <Section title="Hiperbilirrubinemia Neonatal no PS">
        <Subsection title="Às custas de:">
          <List>
            <LItem>
              Bb indireta: (aleitamento, leite materno, policitemia, sangue
              extra-vascular, incompatibilidade, deficiência de G6PD);
            </LItem>
            <LItem>
              Bb direta (BD {'>'} 2 se BTF até 5 ou BD {'>'} 20% do total se BTF{' '}
              {'>'} 5).
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Solicitar">
          <List>
            <LItem>
              Hemograma, reticulócitos, teste de Coombs, bilirrubina total e
              frações, transaminases, fosfatase alcalina, Gama GT, albumina;
            </LItem>
            <LItem>Checar grupo sanguíneo e fator RH da mãe e do RN;</LItem>
            <LItem>Checar sorologias para ZTORCH’s do pré-natal;</LItem>
            <LItem>USG de abdome.</LItem>
          </List>
          <P>
            Importante avaliar na história clínica: idade do RN em horas e dias,
            tempo de aparecimento da icterícia, tipo de alimentação, déficit
            ponderal e hidratação, diurese e eliminações (colúria, acolia).
          </P>
          <P>
            Investigar os casos onde há elevação da bilirrubina direta. Atenção
            especial para a Atresia de Vias Biliares, infecções congênitas
            ,erros inatos do metabolismo (galactosemia), deficiência de alfa-1
            antitripsina e cisto de colédoco.
          </P>
          <P>Consulta com Gastropediatra - *Avaliar necessidade.</P>
        </Subsection>
        <Subsection title="Tratamento">
          <Subsubsection title="INICIAR">
            <List>
              <LItem>Fototerapia única ou dupla</LItem>
              <LItem>SE significante: BT sérica {'>'}15–17mg/dl</LItem>
              <LItem>
                SE grave: BT {'>'}25mg/dl ou severa: BT {'>'}30mg/dl
              </LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="AVALIAR">
            <List>
              <LItem>
                Exsanguíneotransfusão (160ml/Kg - sangue total) de acordo com os
                níveis de Bilirrubina total e organograma de risco *Nos casos
                hemolíticos.
              </LItem>
              <LItem>
                iniciar fototerapia intensiva imediatamente e considerar o uso
                de Imunoglobumina (Gamaglobulina imune )
              </LItem>
            </List>
            <P>
              Encaminhar para acompanhamento e reavaliação ambulatorial os
              pacientes com hiperbilirrubinemia indireta sem nível para
              fototerapia, sem elevação de bilirrubina direta, bom estado geral
              e boa evolução ponderal, em 48h.
            </P>
          </Subsubsection>
        </Subsection>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="DE TOMMASO, A.M.A; PORTA, G; Manual de hepatologia pediátrica.1a ed, São Paulo, Atheneu 2009."
        />
        <Reference
          idx={2}
          body="“Atenção à saúde do recém-nascido: guia para os profissionais de saúde: intervenções comuns, icterícias e infecções. Brasília, DF: Ministério da Saúde, 2011. v. 2. (Série A. Normas e Manuais Técnicos).”"
        />
        <Reference
          idx={3}
          body="Leandro Buck ,Icterícia neonatal – Abordagem no seguimento ambulatorial de bebês ictéricos,Revisão com causas, fatores de risco, tipos e tratamentos para a icterícia neonatal: http://www.portalped.com.br/blog/author/leandrobuck/"
        />
      </Section>
    </Routine>
  )
}
