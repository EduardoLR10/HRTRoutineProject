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

export default function InfeccaoDoTratoUrinario(): JSX.Element {
  return (
    <Routine
      id="infeccao-do-trato-urinario"
      name="Infecção do Trato Urinário"
      category="hematologia-reumatologia-nefrologia"
      authors={['dania', 'fabricio']}
      tags={['pielonefrite', 'cistite', 'ITU']}
    >
      <Section title="Definição, aspectos gerais e classificação">
        <P>
          É a presença e multiplicação de microorganismos uropatogênicos no
          trato urinário, desde o meato uretral até os rins. A incidência das
          ITUs depende da idade e do sexo. No primeiro ano de vida, as ITUS são
          mais comuns em meninos (3,7%) do que em meninas (2%). Isso fica ainda
          mais marcante em neonatos febris nos primeiros dois meses de vida, com
          incidência de 5% nas meninas e 20,3% em meninos não circuncisados.
          Posteriormente, a incidência muda e cerca de 3% das meninas na fase
          pré-púbere e 1% dos meninos. Durante toda a infância, estima-se que
          pelo menos 8% das meninas e 2% dos meninos apresentarão, ao menos, 1
          episódio de ITU.
        </P>
        <P>
          Magnitude do problema: 10 – 15% das ITUs evoluem com cicatriz renal ;
          5 – 10% dos casos de bacteriúria assintomática têm ou terão cicatriz
          renal ; até 30% das pielonefrites evoluirão com cicatriz renal.
        </P>
        <P>
          Pielonefrite: quando a infecção atinge os rins – Pielonefrite aguda
          (Infecção do trato urinário alto).
        </P>
        <P>
          Cistite: quando se restringe à bexiga – Cistite bacteriana aguda
          (Infecção do trato urinário baixo).
        </P>
        <P>Uretrite: quando se localiza apenas na uretra.</P>
        <P>
          Bacteriúria assintomática: por definição, é um termo designado à
          colonização da bexiga por bactérias, sem que haja a invasão estrutural
          do trato urinário (não invade a mucosa da bexiga), com ausência de
          sintomatologia. Esse diagnóstico é firmado com 3 uroculturas positivas
          sucessivas para o mesmo germe.
        </P>
      </Section>
      <Section title="Etiologia">
        <P>Especialmente as enterobactérias.</P>
        <P>
          <Italic>Escherichia coli:</Italic> responsável por cerca de 85% dos
          casos de ITU em crianças.
        </P>
        <P>
          <Italic>Proteus sp:</Italic> encontrado em 30% dos meninos.
          Frequentemente coloniza o meato uretral e a glande. Possui capacidade
          de alcalinizar a urina, propiciando a formação de cálculos renais.
        </P>
        <P>
          Outros gram negativos: <Italic>Serraia</Italic>,{' '}
          <Italic>Klebisiella</Italic>, <Italic>Enterobacter</Italic>,{' '}
          <Italic>Psedomonas aeruginosa</Italic> são menos frequentes.
        </P>
        <P>
          <Italic>Staphylococcus</Italic>, fungos e vírus, em especial o
          Adenovírus, que causa cistite hemorrágica, também podem ser
          responsáveis por quadros de ITU. Caso ocorra a presença de 2
          bactérias, considerar contaminação.
        </P>
      </Section>
      <Section title="Vias de Contaminação">
        <P>
          Em recém-nascidos, pode ser hematogênica e ascendente. Em lactentes e
          crianças maiores, predomina a via ascendente.
        </P>
      </Section>
      <Section title="Fatores Predisponentes">
        <P>
          Crianças em uso de antibióticos de amplo espectro para infecções do
          trato respiratório superior; lactentes pequenos masculinos
          não-circuncisados; sexo feminino (em especial quando maiores de 2 anos
          de idade) pela uretra mais curta do que os meninos; imunodeficiências
          congênitas ou adquiridas; mal-formações do trato urinário; portadores
          de distúrbios miccionais ou corpo estranho que dificultam o
          esvaziamento completo do trato urinário (como sonda vesical, por
          exemplo) ; constipação intestinal; vulvovaginites e balanopostites, má
          higienização do trato urinário (principalmente quando a criança se
          limpa sozinha).
        </P>
      </Section>
      <Section title="Quadro Clínico">
        <P>
          Dependerá especialmente da idade, da localização da infecção e se há
          ou não alguma mal-formação do trato urinário. Quanto menor a idade,
          mais inespecífica será a sintomatologia.
        </P>
        <List>
          <LItem>
            Recém-nascidos (RN): pode cursar com recusa alimentar, icterícia,
            irritabilidade, dificuldade de ganho de peso e até sepse.
          </LItem>
          <LItem>
            Lactentes: predominam os sinais sistêmicos, como febre alta e
            isolada {'>'} 3 dias (não associada a outros sinais e sintomas),
            irritabilidade, vômitos, prostração, dor abdominal.
          </LItem>
          <LItem>
            Crianças maiores: podem ocorrer tanto sinais sistêmicos (na ITU
            alta) quanto sintomas urinários baixos (na cistite).
          </LItem>
        </List>
      </Section>
      <Section title="Importante">
        <P>
          Pielonefrite aguda: manifesta-se com febre {'>'} 38,5°C por período{' '}
          {'>'} 3 dias, calafrios, dor em flancos ou abdominal, hemograma com
          leucocitose, VHS aumentado, PCR aumentada (geralmente {'>'} 10mg/dl).
          É uma condição mais grave que a cistite pelas lesões que pode
          acarretar nos rins (cicatrizes), e requer urgência no início da
          terapêutica.
        </P>
        <P>
          Cistite bacteriana aguda: manifesta-se por sintomas urinários baixos,
          com disúria, polaciúria, tenesmo, urgência miccional, urina turva com
          odor fétido. Ausência de febre.
        </P>
        <P>
          As vulvovaginites e balanopostites são as causas mais frequentes de
          queixas urinárias baixas na infância. Sendo assim, há necessidade de
          sempre examinar a região perineal desses pacientes quando essas forem
          as únicas queixas, antes de solicitar o exame de urina simples (EAS ou
          urina tipo1).
        </P>
      </Section>
      <Section title="Exames Complementares no PS">
        <Subsection title="Hemograma Completo">
          <P>
            Demonstrando anemia normocítica e normocrômica, leucocitose com
            neutrofilia na pielonefrite e geralmente normal na cistite.
          </P>
        </Subsection>
        <Subsection title="Função Renal (Uréia e Creatinina)">
          <P>
            Na ITU, geralmente não há alteração de função renal. Exceto nos RNs
            e lactentes pequenos ({'<'} 3 meses) em que o quadro de ITU pode ter
            uma mal-formação renal/vias urinárias subjacente, com grave padrão
            obstrutivo, podendo levar à insuficiência renal e até mesmo,
            urosepse. Nesses casos, deve ser colhida também, hemocultura.
          </P>
        </Subsection>
        <Subsection title="Urina tipo 1 ou EAS">
          <P>
            Urina pode estar com aspecto turvo, leucocitúria ({'>'} 8
            leuco/campo), hematúria ({'>'} 8 hem/campo), piúria, aglomerados de
            piócitos, flora bacteriana aumentada. Pode haver hematúria
            microscópica isolada e presença de nitrito. Atenção: para crianças
            de até 2 anos (não possuem controle esfincteriano) a mãe deve ser
            orientada a lavar adequadamente o períneo da criança e colar o saco
            coletor, deixando-o no local por, no máximo, 40 minutos, se não
            houver diurese, o saco deve ser retirado e desprezado, o períneo
            higienizado novamente e proceder a colocação de outro saco coletor.
            Para as crianças maiores, também deve ser orientada a limpeza e a
            coleta será feita por jato médio.
          </P>
        </Subsection>
        <Subsection title="Urocultura">
          <P>
            O diagnóstico de certeza só é firmado com cultura de urina positiva.
            A qualidade da amostra da urina é crucial para o diagnóstico correto
            de ITU: crianças até 2 anos devem colher por punção suprapúbica
            (PSP) ou por cateterismo vesical (CV); crianças maiores (com
            controle esfincteriano) devem ser orientadas a fazer a higienização
            do períneo e colher a amostra de urina por jato médio (JM).
          </P>
        </Subsection>
        <P>
          Atenção: a cultura de urina obtida por saco coletor só tem valor
          quando NEGATIVA, por afastar o diagnóstico de ITU. Cultura de urina
          positiva por saco coletor deve ser confirmada com outra coleta de
          urina por método adequado, de acordo com a idade da criança.
        </P>
        <Subsection title="Interpretação dos Resultados">
          <List>
            <LItem>
              PSP: qualquer crescimento bacteriano é considerado positivo.
            </LItem>
            <LItem>CV: 1.000 – 10.000 UFC/ml é considerado positivo.</LItem>
            <LItem>JM: {'>'} 100.000 UFC/ml é considerado positivo.</LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Tratamento">
        <P>
          “Tratar uma criança com ITU não é só prescrever o antibiótico
          adequado”- Goldraich.
        </P>
        <Subsection title="Medidas Gerais">
          <List>
            <LItem>1. Manter acompanhamento desde o início da terapia</LItem>
            <LItem>
              2. Identificar anormalidades do trato urinário através de uma
              adequada avaliação por imagem
            </LItem>
            <LItem>
              3. Combate eficaz contra a constipação intestinal, parasitoses e
              má higienização
            </LItem>
            <LItem>
              4. Orientar adequada ingesta hídrica e esvaziamento completo da
              bexiga
            </LItem>
            <LItem>5. Diagnosticar e tratar padrões miccionais anormais</LItem>
          </List>
        </Subsection>
        <Subsection title="Regras a serem seguidas antes de iniar a terapêutica específica">
          <Subsubsection title="1. Afastar “pseudo-infecções” do trato urinário, com alterações suspeitas no exame de Urina tipo1 (ou EAS) e a uroculturas falso-positivas (que correspondem a 40% dos casos):">
            <List>
              <LItem>a- Coleta mal feita</LItem>
              <LItem>b- Vulvovaginites / balanopostites</LItem>
              <LItem>c- Febre associada à IVAS ou GECAs</LItem>
              <LItem>
                d- Piúria estéril (GNDA, tuberculose, doença de Kawasaki)
              </LItem>
            </List>
            <P>
              *Nos casos “b”, vale lembrar que em crianças cuja única queixa
              seja relacionada a sintomas urinários baixos (disúria, polaciúria,
              urgência miccional), o exame da região perineal é MANDATÓRIO, para
              que o exame de urina (Urina tipo1 ou EAS) NÃO SEJA SOLICITADO na
              vigência de inflamações, secreções ou assaduras.
            </P>
            <P>
              *Nos casos “c”, é importante ressaltar que, em princípio, o exame
              de urina (Urina tipo1 ou EAS) NÃO DEVE SER SOLICITADO na
              emergência, uma vez que, nesses casos específicos, o paciente já
              apresenta sintomas que podem causar/explicar a febre.
            </P>
          </Subsubsection>
          <Subsubsection title="Classificar a ITU:">
            <List>
              <LItem>
                a- Quanto à clínica (e localização no trato urinário):
              </LItem>
              <List>
                <LItem>ITU alta (pielonefrite)</LItem>
                <LItem>ITU baixa (cistite)</LItem>
                <LItem>Bacteriúria assintomática</LItem>
              </List>
              <LItem>b - Quanto à morbidade:</LItem>
              <List>
                <LItem>ITU de alto risco ou complicada:</LItem>
                <List>
                  <LItem>Pielonefrite;</LItem>
                  <LItem>ITU associada à mal-formação do trato urinário:</LItem>
                  <List>
                    <LItem>Refluxo vesico-ureteral</LItem>
                    <LItem>
                      Uropatias obstrutivas (JUP, JUV, Válvula de uretra
                      posterior)
                    </LItem>
                    <LItem>Bexiga neurogênica</LItem>
                    <LItem>
                      ITU no RN ou lactentes pequenos ({'<'} 3 meses)
                    </LItem>
                  </List>
                </List>
                <LItem>
                  ITU de baixo risco ou não complicada: as que não possuem
                  fatores de risco
                </LItem>
              </List>
            </List>
          </Subsubsection>
        </Subsection>
      </Section>
      <Section title="Tratamento Precoce">
        <P>
          Uma vez com suspeita de ITU (história clínica compatível e EAS
          alterado), procede-se a coleta de urina para cultura e inicia-se o
          antibiótico, preferencialmente, bactericida. O tratamento inicial
          depende da gravidade e da idade do paciente. Quando indicada a via
          parenteral, suspender assim que a criança permanecer afebril por 48 –
          72h, com melhora do estado geral, substituindo o antimicrobiano por
          outro antibiótico por via oral, baseado no antibiograma – Terapia de
          Troca.
        </P>
        <P>
          RN e lactentes de 1 mês a 2 anos (e nos casos de ITU alta nas crianças
          maiores): o quadro de ITU manifesta-se por Pielonefrite. INTERNAR e
          administrar o antimicrobiano por via parenteral - IV ou IM
        </P>
        <List>
          <LItem>Aminoglicosídeos:</LItem>
          <List>
            <LItem>Gentamicina: 3 – 7,5 mg/Kg/dia, de 24/24h</LItem>
            <LItem>Amicacina: 15 mg/Kg/dia, de 24/24h</LItem>
          </List>
          <LItem>Cefalosporina de 3ª geração:</LItem>
          <List>
            <LItem>Ceftriaxona: 80 – 100 mg/Kg/dia, de 24/24h</LItem>
          </List>
        </List>
        <P>
          Pré-escolares e crianças maiores: com bom estado geral, hidratadas,
          ausência de vômitos e boa aceitação da medicação, INTERNAR e
          considerar o uso do antimicrobiano por via oral e, de preferência
          bactericida, desde o início do tratamento (nos casos de ITU baixa -
          Cistite).
        </P>
        <List>
          <LItem>Cefalexina: 80 – 100 mg/Kg/dia, de 6/6h</LItem>
          <LItem>
            Amoxicilina / ácido clavulânico: 30 – 50 mg/Kgdia, de 8/8h
          </LItem>
          <LItem>Ampicilina/ sulbactam: 30 – 50 mg/Kg/dia, de 12/12h</LItem>
          <LItem>Cefuroxima: 25 – 30 mg/Kg/dia, de 12/12h</LItem>
          <LItem>Ciprofloxacino: 20 – 30 mg/Kg/dia, de 12/12h</LItem>
        </List>
      </Section>
      <Section title="Tempo de Tratamento">
        <P>7 a 14 dias (média de 10 dias)</P>
        <P>
          Controle do tratamento: criança com evolução satisfatória após o
          tratamento, colher urocultura de controle 3 a 5 dias após a suspensão
          do antibiótico. Iniciar imediatamente a antibioticoterapia profilática
          até a completa avaliação por imagem.
        </P>
      </Section>
      <Section title="Investigação de Trato Urinário por Imagem">
        <List>
          <LItem>
            Ultrassonografia (US) renal e vias urinárias: todas as crianças
            devem ser submetidas à US renal e vias urinárias, independente do
            sexo ou idade, no primeiro episódio de ITU e até mesmo em vigência
            do tratamento.
          </LItem>
          <LItem>
            Uretrocistografia miccional (UCM): sempre investigar a presença de
            refluxo vesico-ureteral (RVU) em meninos e meninas após seu primeiro
            episódio de pielonefrite, até a idade de 4 anos incompletos (3 anos
            11 meses e 29 dias). O exame deve ser realizado com urina estéril e
            com uso de antibiótico profilático. Investigar RVU em crianças
            maiores de 4 anos apenas quando apresentarem ITU recorrente
            (pielonefrite/cistite), acima de 2 vezes ou em casos de anormalidade
            na US renal.
          </LItem>
          <LItem>
            Cintilografia renal com DMSA (ácido dimercaptosuccínico): avalia a
            presença de cicatrizes renias e a função tubular. Está indicado em
            todos os casos de ITU febril, sempre que possível.
          </LItem>
          <LItem>
            Cintilografia renal com DTPA (ácido dietileno triaminopentacético)
            com estímulo diurético: avalia a função glomerular, indicado na
            presença de alterações obstrutivas.
          </LItem>
        </List>
      </Section>
      <Section title="Quimioprofilaxia">
        <List>
          <LItem>
            Curto prazo: suspender o antibiótico após a investigação por imagem,
            desde que normais.
          </LItem>
          <LItem>
            Prolongada: quaisquer alterações, sejam anatômicas ou funcionais,
            que proporcionem recidivas:
          </LItem>
          <List>
            <LItem>Qualquer grau de RVU até sua involução</LItem>
            <LItem>
              ITU recorrente: mais de 2 episódios em 1 ano. Tempo: {'>'} 6 meses
              e {'<'} 1 ano
            </LItem>
            <LItem>Mal-formações obstrutivas: até a correção</LItem>
            <LItem>
              ITU recorrente associada a condições que predisponham à estase
              urinária (constipação intestinal, disfunção miccional): até sua
              resolução.
            </LItem>
          </List>
        </List>
        <P>
          Dar preferência para os bacteriostáticos ou quimioterápicos, em dose
          única noturna, exceto nos casos de persistência de recidiva de ITU ou
          associação com mal-formações importantes.
        </P>
        <List>
          <LItem>Nitrofurantoína: 1 – 3 mg/Kg/dia</LItem>
          <LItem>Sulfametoxazol/Trimetropim: 10 mg/Kg/dia</LItem>
          <LItem>Trimetropim: 5 mg/Kg/dia</LItem>
          <LItem>
            Cefalexina: 10 mg/Kg/dia (é a 1ª escolha em neonatos e lactentes
            pequenos)
          </LItem>
        </List>
      </Section>
      <Section title="Acompanhamento">
        <P>
          Urocultura: após a urocultura de controle, a criança deve fazer 1
          urocultura por mês, por 3 meses, seguindo com uroculturas trimestrais
          até completar 1 ano de seguimento. Após, fazer 1 urocultura a cada 6
          meses no segundo ano. A criança em uso de quimioprofilaxia não deve
          suspender a medicação.
        </P>
        <P>
          RVU graus IV e V devem ser encaminhados para avaliação cirúrgica, bem
          como qualquer grau de refluxo que, apesar da quimioprofilaxia correta,
          persistir apresentando ITUs sintomáticas.
        </P>
        <P>
          Manter em acompanhamento ambulatorial todos os pacientes com
          diagnóstico de ITU, em especial aqueles portadores de RVU ou outras
          mal-formações do trato urinário. Reforçar a necessidade de realização
          das uroculturas e, nos casos indicados, da manutenção da
          quimioprofilaxia. Exames como a US renal, UCM e cintilografias nos
          casos de RVU, devem ser realizados anualmente.
        </P>
        <P>
          Estudar a possibilidade da suspensão da quimioprofilaxia prolongada
          nos pacientes com refluxo irreversível e não-cirúrgico, desde que
          mantenha urina estéril e com as reavaliações indicadas normais.
        </P>
      </Section>
      <Section title="Conclusão">
        <P>
          A investigação e o acompanhamento dos pacientes com diagnóstico de ITU
          é prolongado e invasivo, portanto, deve-se dar atenção ao diagnóstico
          inicial:
        </P>
        <List>
          <LItem>Coleta de urina por método adequado;</LItem>
          <LItem>Solicitar sempre a urocultura.</LItem>
        </List>
        <P>
          <Bold>Não subdiagnosticar e nem superdiagnosticar ITU!</Bold>
        </P>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Toporovski Julio (coord.). Nefrologia Pediátrica.2.ed. Rio de Janeiro: Guanabara Koogan, 2006."
        />
        <Reference
          idx={2}
          body="Andrade, MC.; Carvalhaes JT. Nefrologia para Pediatras.1.ed. São Paulo: Atheneu, 2010."
        />
        <Reference
          idx={3}
          body="Simões e Silva AC, Oliveira EA. Update on the approach of urinary tract infection in childhood. J Pediatr (Rio J).2015;91:S2-10."
        />
        <Reference
          idx={4}
          body="Hoberman A, Greenfield SP, Mattoo TK, Keren R, MathewsR, et al., RIVUR Trial Investigators. Antimicrobial prophyla-xis for children with vesicoureteral reflux. N Engl J Med.2014;370:2367-76."
        />
        <Reference
          idx={5}
          body="Quirino IG, Silva JM, Diniz JS, Lima EM, Rocha AC, Simões e SilvaAC, et al. Combined use of late phase dimercapto-succinic acidrenal scintigraphy and ultrasound as first line screening afterurinary tract infection in children. J Urol. 2011;185:258-63."
        />
      </Section>
    </Routine>
  )
}
