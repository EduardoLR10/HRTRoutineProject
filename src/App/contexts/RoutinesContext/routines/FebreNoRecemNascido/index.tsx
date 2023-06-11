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

export default function FebreNoRecemNascido(): JSX.Element {
  return (
    <Routine
      id="febre-no-recem-nascido"
      name="Febre no Recém Nascido"
      categories={['neonatologia', 'emergencia']}
      authors={['maria']}
      tags={['hipertermia']}
    >
      <Section title="Conceito">
        <P>
          A definição de RN febril é uma criança com menos de 30 dias de vida e
          temperatura retal ≥ a 38°C.
        </P>
        <P>
          Perante um RN que foi de alta saudável e que retorna com febre no
          ambulatório ou na emergência, o pediatra deve orientar o seu
          raciocínio para responder às seguintes perguntas que podem ajudar a
          esclarecer as causas.
        </P>
        <List>
          <LItem>É um caso de febre por baixa ingesta de leite?</LItem>
          <LItem>O paciente tem uma infecção bacteriana?</LItem>
          <LItem>O RN tem uma pneumonia viral/bronquiolite?</LItem>
          <LItem>Trata-se de um caso de infecção por Herpes vírus?</LItem>
          <LItem>É um RN com cardiopatia congênita?</LItem>
        </List>
      </Section>
      <Section title="Causas Mais Frequentes">
        <P>
          <Bold>Baixa ingestão de leite</Bold>
        </P>
        <P>As características que fazem pensar nesta situação são:</P>
        <List>
          <LItem>
            Febre que aparece nos primeiros dias de vida, mais freqüente entre o
            2º e o 5º dia;
          </LItem>
          <LItem>Sem história sugestiva de infecção (ver tabela 1);</LItem>
          <LItem>Parto cesáreo;</LItem>
          <LItem>Mães inexperientes têm {'>'} risco;</LItem>
          <LItem>Mães com dificuldade de amamentação;</LItem>
          <LItem>
            Ao exame, as mamas podem mostrar: pouco leite, mamilo invertido,
            mamas muito ingurgitadas (“peito empedrado”), fissuras, cicatrizes
            cirúrgicas, etc;
          </LItem>
          <LItem>RN suga pouco ou suga mal;</LItem>
          <LItem>
            RN com doenças que predispõem a dificuldade de sucção (Síndrome de
            Down, fenda palatina, micrognatia, etc), têm maior risco;
          </LItem>
          <LItem>RN GIG tem maior risco;</LItem>
          <LItem>O RN urina pouco;</LItem>
          <LItem>A incidência aumenta nos meses mais quentes;</LItem>
          <LItem>RN que perdeu mais de 10% do peso de nascimento;</LItem>
          <LItem>
            Exame segmentar normal ou desidratação de grau variável;
          </LItem>
          <LItem>
            É freqüente que algum grau de icterícia acompanhe o quadro clínico;
          </LItem>
          <LItem>Hemograma normal;</LItem>
          <LItem>
            Os casos mais graves podem cursar com desidratação hipernatrêmica;
          </LItem>
          <LItem>
            A intensidade da febre está relacionada ao grau de hipernatremia.
          </LItem>
        </List>
      </Section>
      <Section title="Como tratar">
        <List>
          <LItem>
            O paciente deve ficar internado para observação e tratamento;
          </LItem>
          <LItem>
            As desidratações leves podem ser tratadas no Alojamento Conjunto
            (ALCON), com leite materno ordenhado ou leite humano de banco;
          </LItem>
          <LItem>
            Os casos mais graves requerem internação na UTIN ou UCIN na CO;
          </LItem>
          <LItem>
            Nos casos de intensa desidratação hipernatrêmica, a solução de
            eleição para a expansão inicial é o soro fisiológico (20 ml/kg);
          </LItem>
          <LItem>
            Corrigir a hipernatremia DEVAGAR para evitar as complicações:
            Considerar que se chegou a um grau acentuado de hipernatremia ao
            longo de alguns dias, portanto A CORREÇÃO DO SÓDIO DEVE SER
            REALIZADA EM DIAS, NÃO EM HORAS.
          </LItem>
          <LItem>
            As convulsões aparecem mais frequentemente após a instalação do
            tratamento de correção de hipernatremia, principalmente com soluções
            hipotônicas.
          </LItem>
          <LItem>
            Após a expansão a hidratação venosa de manutenção deve ser feita com
            Na+ a 2-3 mEq/100 ml.
          </LItem>
          <LItem>
            É muito importante a prevenção, identificando os fatores de risco
            para problemas na amamentação no binômio mãe-filho, no intuito de
            corrigi-los antes da alta.
          </LItem>
        </List>
      </Section>
      <Section title="Infecção Bacteriana">
        <P>
          A base do diagnóstico é o tripé: FATORES DE RISCO MATERNOS,
          MANIFESTAÇÃO CLÍNICA DO RN E EXAMES LABORATORIAIS
        </P>
        <P>Os fatores de risco maternos para sepse neonatal precoce são:</P>
        <List>
          <LItem>Rotura prematura de membranas {'>'} 12 horas;</LItem>
          <LItem>Febre materna intraparto;</LItem>
          <LItem>Corioamnionite;</LItem>
          <LItem>Taquicardia fetal (BCF {'>'} 160 bpm);</LItem>
          <LItem>Fisometria positiva (Líquido amniótico fétido);</LItem>
          <LItem>Parto prematuro;</LItem>
          <LItem>
            Colonização materna por <Italic>Streptococcus</Italic> do Grupo B;
          </LItem>
          <LItem>Gestação gemelar;</LItem>
          <LItem>Leucocitose materna;</LItem>
          <LItem>
            Qualquer infecção bacteriana na mãe (Infecção do trato urinário,
            abscesso dentário, etc).
          </LItem>
        </List>
      </Section>
      <Section title="As Manifestações Clínicas">
        <P>
          São altamente inespecíficas e incluem: febre, hipotermia, apatia,
          hipotonia, choro fraco, sucção débil, enchimento capilar {'>'} 3
          segundos, desconforto respiratório, distensão abdominal, vômitos,
          apnéias, etc.
        </P>
        <P>
          Os neonatos podem apresentar infecção bacteriana grave, sem nenhum
          episódio de febre.
        </P>
        <Subsection title="Exames Necessários e Observações">
          <P>
            Hemograma, PCR, hemocultura, raio X de tórax e abdome e, se a
            condição do paciente o permitir, punção lombar e punção
            supra-púbica.
          </P>
          <P>
            Os pacientes com suspeita de infecção bacteriana devem ser
            internados em UTI ou UCIN.
          </P>
          <P>
            O esquema antibiótico inicial no RN com suspeita de infecção
            bacteriana sem porta de entrada definida deve incluir{' '}
            <Bold>ampicilina associada a gentamicina.</Bold>
          </P>
          <P>
            É importante garantir de imediato acesso venoso confiável e suporte
            ventilatório se necessário.
          </P>
          <P>Expansão e drogas vasoativas conforme necessidade.</P>
        </Subsection>
        <Subsection title="Pneumonia Viral/Bronquiolite">
          <List>
            <LItem>
              O Vírus Sincicial Respiratório (VSR) é responsável por 80% dos
              casos, mas outros como o adenovirus, influenza e parainfluenza
              podem causar a doença.
            </LItem>
            <LItem>Acontece mais nos meses frios, em surtos epidêmicos.</LItem>
            <LItem>Freqüentemente têm alguém gripado na família.</LItem>
          </List>
        </Subsection>
        <Subsection title="Sintomas Gripais">
          <P>
            Congestão nasal, olhos vermelhos, etc. e pode evoluir com febre,
            tosse, desconforto respiratório, crepitações, sibilos e até apnéia.
          </P>
          <P>
            A apnéia pode ser precoce e se apresentar antes dos outros sintomas.
          </P>
          <P>
            O MENOR DE 30 DIAS COM TOSSE PERMANENTE AO LONGO DO DIA{' '}
            <Bold>DEVE SER INTERNADO,</Bold> POIS PODE EVOLUIR PARA
            INSUFICIÊNCIA RESPIRATÓRIA EM POUCAS HORAS.
          </P>
          <P>
            NO MENOR DE 30 DIAS, QUALQUER SINAL DE DESCONFORTO RESPIRATÓRIO
            (BATIMENTO DE ASAS DO NARIZ, TIRAGEM INTERCOSTAL, RETRAÇÃO ESTERNAL,
            TAQUIPNÉIA OU GEMÊNCIA) INDICA A <Bold>IMEDIATA INTERNAÇÃO.</Bold>
          </P>
          <P>AVALIAR BOLETIM DE SILVERMAN ANDERSEN.</P>
        </Subsection>
      </Section>
      <Section title="Exames Complementares">
        <P>O hemograma não mostra padrão compatível com infecção bacteriana.</P>
        <P>
          O raio X de tórax pode ser normal ou evidenciar infiltrados,
          condensações ou hiperinsuflação pulmonar.
        </P>
        <P>
          Nestes casos, mesmo na suspeita de pneumonia viral é aconselhável
          colher hemocultura e iniciar Ampicilina + Gentamicina (a depender do
          histórico materno) durante o período inicial de internação .
        </P>
        <P>
          No RN com tosse deve atentar-se também para coqueluche , uma vez que
          não acontece imunidade passiva via transplacentária e que a vacinação
          acontece só com dois meses de idade. O paciente apresenta a fase
          catarral, caracterizada por congestão nasal e febre baixa e evolui
          depois para a fase de tosse paroxística, chamando a atenção a bom
          estado geral nos períodos intercrise.
        </P>
      </Section>
      <Section title="Cardiopatia Congênita">
        <P>
          As cardiopatias devem ser incluídas no diagnóstico diferencial de RN
          que foram de alta em bom estado geral e que retornaram ao pronto
          socorro ou ambulatório. Apenas algumas considerações serão enunciadas:
        </P>
        <List>
          <LItem>
            Cardiopatias congênitas acianóticas abrem o quadro como ICC de
            desenvolvimento progressivo (taquipnéia, taquicardia e
            hepatomegalia).
          </LItem>
          <LItem>
            Cardiopatias congênitas cianóticas podem se manifestar tanto na
            primeira semana, quanto com 2-3 semanas de idade.
          </LItem>
          <LItem>
            O RN que chega no PS em{' '}
            <Bold>
              <Italic>choque</Italic>
            </Bold>{' '}
            deve sempre {'"'}fazer pensar{'"'} em
            <Bold>
              <Italic>cardiopatia congênita</Italic>
            </Bold>{' '}
            como diagnóstico diferencial.
          </LItem>
          <LItem>
            Recém nascidos que chega no PS com cianose, mas com raios-X de tórax
            normal, devem receber Prostaglandina E (Prostín®), até que se
            elucide melhor o diagnóstico.
          </LItem>
          <LItem>
            A falta de ecocardiograma, não justifica o adiamento do início do
            tratamento com prostaglandina nestes pacientes.
          </LItem>
          <LItem>
            <Bold>
              <Italic>
                A ausência de sopro não exclui o diagnóstico de cardiopatia
                congênita.
              </Italic>
            </Bold>
          </LItem>
        </List>
        <P>
          EM GERAL, É MUITO DIFÍCIL CONSEGUIR REALIZAR UM ECOCARDIOGRAMA OU
          OBTER VAGA EM UTI CARDIOLÓGICA EM POUCAS HORAS. CONTUDO, A SUSPEIÇÃO
          PERMANENTE E A AVALIAÇÃO CLÍNICO-RADIOLÓGICA SÃO SUFICIENTES, NA
          MAIORIA DAS VEZES, PARA AUTORIZAR O USO DA TERAPIA SALVADORA COM
          PROSTAGLANDINA E (PROSTÍN®).
        </P>
      </Section>
      <Section title="Roteiro">
        <P>
          <Bold>
            ROTEIRO SUGERIDO PARA ATENDER O RN QUE FOI DE ALTA EM BOM ESTADO
            GERAL E RETORNA COM FEBRE OU OUTRO SINTOMA /SINAL
          </Bold>
        </P>
        <P>
          <Bold>
            (apatia,recusa alimentar,dificuldade respiratória,cianose,apnéia)
          </Bold>
        </P>
        <P>
          <Bold>PELO AMBULATÓRIO OU PS:</Bold>
        </P>
        <Subsection title="História Clínica Completa">
          <List>
            <LItem>
              Ecografia pré-natais alteradas? (malformação de vias urinárias
              predispõem à sepse).
            </LItem>
            <LItem>Existem fatores de risco maternos para infecção?</LItem>
            <LItem>Mãe inexperiente? Dificuldade na amamentação?</LItem>
            <LItem>
              RN urina pelo menos três vezes no dia? A fralda fica bem molhada?
            </LItem>
            <LItem>
              Qual o peso de nascimento? Foi GRANDE PARA A IDADE GESTACIONAL?
              Perdeu mais de 10% do peso?
            </LItem>
            <LItem>Está tossindo? Alguém gripado na família?</LItem>
            <LItem>Infecção por herpes no último trimestre?</LItem>
            <LItem>
              Mudou o padrão comportamental do RN? Está diferente? Está apático?
            </LItem>
            <LItem>Qual a idade do RN?</LItem>
            <LItem>
              Primeira semana de vida, em bom estado geral e sem história
              sugestiva de infecção, mais provável baixa ingesta. Se exame
              físico alterado, com sintomas inespecíficos, mais provável
              tratar-se de sepse precoce.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Exames Físico Completo">
          <List>
            <LItem>
              Retirar toda a roupa e realizar exame detalhado céfalo-caudal.
            </LItem>
            <LItem>Pesar o RN.</LItem>
            <LItem>Icterícia ou cianose?</LItem>
            <LItem>Tem vesículas em couro cabeludo, córnea ou boca?</LItem>
            <LItem>
              Fontanela funda? (desidratação) ou abaulada? (encefalite
              herpética)
            </LItem>
            <LItem>Batimento de asas do nariz?</LItem>
            <LItem>Boca com saliva espessa?</LItem>
            <LItem>Ingurgitação jugular?</LItem>
            <LItem>
              Tiragem intercostal? Retração esternal? Gemência? FR {'>'} 60 ipm?
            </LItem>
            <LItem>Crépitos na ausculta pulmonar?</LItem>
            <LItem>Ictus palpável? Sopro cardíaco? B2 hiperfonético?</LItem>
            <LItem>Enchimento capilar no tórax {'>'} de 3 segundos?</LItem>
            <LItem>
              Distensão abdominal? Hiperemia periumbilical? Onfalite?
            </LItem>
            <LItem>Hepatomegalia?</LItem>
            <LItem>Pulsos femorais presentes?</LItem>
            <LItem>Hérnia inguinal?</LItem>
            <LItem>Tônus muscular e atividade do RN.</LItem>
          </List>
          <P>
            QUANDO SE TRATA DE RECÉM NASCIDOS, O EXAME FÍSICO COMPLETO INCLUI O
            EXAME DAS MAMAS DA MÃE E A AVALIAÇÃO DA SUCÇÃO.
          </P>
        </Subsection>
      </Section>
      <Section title="Exames Complementares">
        <P>
          Glicemia capilar assim que chegar. Se hipoglicemia, internar para
          tratamento endovenoso.
        </P>
        <P>
          Hemograma completo, sódio (desidratação hipernatrêmica?), potássio,
          cálcio, magnésio, uréia, creatinina (IRA pré-renal?), TGO, TGP
          (Herpes?).
        </P>
        <P>
          É FUNDAMENTAL VALORIZAR SEMPRE O ESTADO CLÍNICO DO PACIENTE, MAIS DO
          QUE OS EXAMES COMPLEMENTARES.
        </P>
        <P>
          1% dos RN com febre apresentam meningite bacteriana. Contudo, não
          existe consenso de que todo episódio febril no RN requeira de punção
          lombar. Vai depender da história e exames complementares.
        </P>
        <P>
          ATENÇÃO:QUALQUER ALTERAÇÃO NO EXAME FÍSICO AVALIAR NECESSIDADE DE
          INTERNAÇÃO EM UNIDADE NEONATAL.
        </P>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Harper MB. Update on the Management of the Febrile Infant Clin Ped Emerg Med 5:5,.2004."
        />
        <Reference
          idx={2}
          body="Dobson J, Jacques P, Bales M, Lee R. Managing the febrile infant: what is the standard of care? JAAPA; 21:50,2008."
        />
        <Reference
          idx={3}
          body="Maayan-Metzger A, Mazkereth R and  Kuint.J. Fever in healthy asymptomatic newborns during the first days of life Arch. Dis. Child. Fetal Neonatal Ed. 88;312,2003."
        />
        <Reference
          idx={4}
          body="F Tiker, B Gurakan, H Kilicdag and A Tarcan. Dehydration: the main cause of fever during the first week of life. Arch. Dis. Child. Fetal Neonatal Ed. 89;373,2004."
        />
        <Reference
          idx={5}
          body="Bhat SR, Lewis P, Angela et al.  Dehydration and Hypernatremia in Breast-fed Term Healthy Neonates Indian J Pediatr, 73: 39, 2006."
        />
        <Reference
          idx={6}
          body="Livingstone VH, Willis CE et al. Neonatal hypernatremic dehydration associated with breast-feeding malnutrition: a retrospective survey. CMAJ 2000; 162: 647, 2000."
        />
        <Reference
          idx={7}
          body="Chilton LA Prevention and management of hypematremic dehydration in breast-fed infants. West J Med 163:74,1995."
        />
        <Reference
          idx={8}
          body="Barbosa AP, Szajnbok J. Distúrbios hidreletrolíticos. J Pediatr (Rio J) 75 (Sup.2):S223,1999."
        />
        <Reference
          idx={9}
          body="Margotto PR, Paula C AM. Hidratação venosa, In. Margotto PR.   Assistência ao Recém Nascido de Risco, Hospital Anchieta, Brasília,  3ª Ed,  em preparação."
        />
        <Reference
          idx={10}
          body="Silveira R, Procianoy R. Sepse neonatal precoce: diagnóstico e conduta. In:  PRORN. Editora Panamericana. Ciclo 1 Módulo3. 2004."
        />
        <Reference
          idx={11}
          body="Brousseau T, Sharieff G. Newborn Emergencies: The First 30 Days of Life. Pediatr Clin North Am 53:69,2006."
        />
        <Reference
          idx={12}
          body="Colletti J, Homme J, Woodridge D. Unsuspected neonatal killers in emergency medicine. Emerg Med Clin North Am 22: 929,2004."
        />
        <Reference
          idx={13}
          body="Margotto PR. Herpes simples neonatal In. Margotto PR.   Assistência ao Recém Nascido de Risco, Hospital Anchieta, Brasília,  2ª Edição,  em preparação."
        />
        <Reference
          idx={14}
          body="Margotto PR. ABORDAGEM DO RECÉM-NASCIDO FEBRIL. Margotto PR. Assistência ao Recém Nascido de Risco,Brasília, 3°edição."
        />
        <Reference
          idx={15}
          body="Caviness AC, Demmler GJ, Swint JM, Cantor SB. Cost-effectiveness analysis of herpes simplex virus testing and treatment strategies in febrile neonates. Arch Pediatr Adolesc Med. 162:665,2008."
        />
      </Section>
    </Routine>
  )
}
