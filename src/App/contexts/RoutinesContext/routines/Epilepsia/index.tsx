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

export default function Epilepsia(): JSX.Element {
  return (
    <Routine
      id="epilepsia"
      name="Epilepsia e Estado de Mal Epiléptico"
      categories={['neurologia', 'emergencia']}
      authors={['manuela']}
      tags={['convulsão', 'mal', 'convulsivo']}
    >
      <Section title="Definições">
        <Subsection title="Crise epiléptica">
          <P>
            Ocorrência transitória de sinais e/ou sintomas
            secundários a atividade neuronal cerebral anormal, excessiva ou
            síncrona. Se houver atividade motora, poderá ser chamada de crise
            convulsiva.
          </P>
        </Subsection>
        <Subsection title="Epilepsia">
          <P>
            Duas ou mais crises epilépticas sem evidências de insultos agudos
            (ex.: febre, hiponatremia, intoxicação), em um intervalo superior a
            24 horas <Bold>ou</Bold> uma crise não provocada e chance de uma nova crise
            estimada em pelo menos 60% (exame neurológico, EEG ou exame de
            imagem alterados) <Bold>ou</Bold> diagnóstico de uma síndrome epiléptica (ex.:
            Síndrome de West).
          </P>
        </Subsection>
        <Subsection title="Estado de Mal Epiléptico (EME)">
          <P>
            Crises epilépticas tônico-clônico generalizadas que durem mais do
            que 5 minutos, crises focais que durem mais do que 10 minutos e
            crises de ausência que durem mais do que 15 minutos. As alterações
            metabólicas podem ser compensadas até 30 minutos após início do EME.
            Após este período, algum dano ao organismo é praticamente
            inevitável: hipóxia, acidose, hipotensão, arritmias, obstrução de
            vias aéreas, aumento da pressão intracraniana e consequente morte
            neuronal.
          </P>
        </Subsection>
        <Subsection title="Estado de mal epiléptico refratário">
          <P>
            EME refratário ao tratamento com 2 drogas antiepilépticas de classes
            diferentes e em doses adequadas.
          </P>
        </Subsection>
      </Section>
      <Section title="Diagnóstico Clínico">
        <P>
          Antes de iniciar o tratamento, deve se determinar se o evento
          paroxístico é realmente uma crise epiléptica, uma vez que múltiplos
          diagnósticos diferenciais são possíveis, como por exemplo: síncopes,
          parassonias, transtornos do movimento, enxaqueca, reflexo tônico
          cervical assimétrico persistente, postura de descerebração ou
          decorticação, apneia, tremores, terror noturno e outros eventos
          não-epilépticos.
        </P>
        <P>
          Deve ser perguntado ao acompanhante como as crises se iniciaram, se
          houve desvio do olhar, se houve manifestação motora (clonias,
          hipertonia em extensão, hipertonia em flexão, mioclonias, espasmos),
          sialorreia, mordedura de língua ou liberação esfincteriana, duração da
          crise, sonolência pós-ictal, alteração de comportamento antes do
          evento.
        </P>
        <P>
          Classificar o tipo de crise como de início focal (perceptivas ou
          disperceptivas, de acordo com o comprometimento da percepção), de
          início generalizado (motoras ou não motoras – ausência), início
          desconhecido ou não classificada.
        </P>
        <P>
          Geralmente, não há alteração do exame físico associados à crise
          epiléptica em si, podendo ocorrer paralisia de Todd – paresia ou
          plegia temporárias após crise focal, com resolução espontânea após
          algumas horas.
        </P>
        <P>
          Pacientes com doenças prévias, como paralisia cerebral e outras
          encefalopatias crônicas, podem apresentar alteração do exame
          neurológico secundários à doença de base, o que aumenta
          consideravelmente a chance de recorrência após uma primeira crise
          epiléptica.
        </P>
      </Section>
      <Section title="Exames Laboratoriais">
        <List>
          <LItem>
            Exames gerais após primeira crise: glicemia, eletrólitos, função
            renal, perfil hepático;
          </LItem>
          <LItem>
            Se houver suspeita de infecção: hemograma, PCR, hemocultura, líquor
            (se houver sinais de hipertensão intracraniana, colher o líquor
            apenas após neuroimagem);
          </LItem>
          <LItem>
            Nível sérico de drogas antiepilépticas, se fizer uso prévio;
          </LItem>
          <LItem>Exame toxicológico, se houver suspeita de intoxicação;</LItem>
          <LItem>
            Exames de imagem: ressonância magnética de crânio ou tomografia
            computadorizada de crânio com contraste;
          </LItem>
          <LItem>Eletroencefalograma.</LItem>
        </List>
      </Section>
      <Section title="Critérios de Internação">
        <List>
          <LItem>Rebaixamento do nível de consciência;</LItem>
          <LItem>Déficit neurológico após cessar crise;</LItem>
          <LItem>Crises epilépticas refratárias;</LItem>
          <LItem>Estado de mal epiléptico.</LItem>
        </List>
      </Section>
      <Section title="Complicações Mais Frequentes">
        <List>
          <LItem>
            Rebaixamento do nível de consciência secundário às medicações
            utilizadas para tratamento das crises epilépticas;
          </LItem>
          <LItem>Crises refratárias às drogas de primeira linha;</LItem>
          <LItem>
            Reação alérgica ou idiossincrásica às medicações utilizadas (ex.
            ataxia, agitação, irritabilidade, insônia).
          </LItem>
        </List>
      </Section>
      <Section title="Tratamento">
        <P>
          Iniciar nos primeiros 5 a 10 minutos, no máximo. A demora reduz a
          chance de resposta e aumenta a morbidade e mortalidade.
        </P>
        <P>
          A conduta inicial em uma crise prolongada ou EME inclui as medidas de
          suporte a vida e reanimação, apropriadas a todos os pacientes, além do
          uso de uma medicação com início de ação rápido, sendo os
          benzodiazepínicos os medicamentos de primeira linha. Entretanto, a
          partir de duas doses aumentam os riscos de depressão respiratória sem
          aumentar a sua eficácia.
        </P>
        <Table
          colWidths={[125, 200]}
          header={['Tempo', 'Tratamento']}
          data={[
            [
              '5 - 20 min\nTERAPIA INICIAL',
              'ABC do Suporte de Vida\nGlicemia capilar, acesso venoso, exames laboratoriais (checar distúrbios metabólicos, infecções, função hepática / renal, nível sérico de drogas, intoxicação), história clínica.\nDiazepam 0,2-0,3mg/kg EV em bolus (ou 0,3mg/kg retal) ou Midazolam 0,15mg/kg EV, IM, nasal ou bucal, repetindo a cada 5 minutos, até máximo de 3 doses.'
            ],
            [
              '20 - 40 min\nSEGUNDA FASE',
              'Fenitoína – ataque de 15-20mg/kg, doses adicionais de 5-10mg/kg, até máximo de 30mg/kg. Aguardar 20 minutos.'
            ],
            [
              '40 - 60 min\nTERCEIRA FASE',
              'Fenobarbital – ataque de 10-20mg/kg, doses adicionais de 5-10mg/kg, até máximo de 40mg/kg. Aguardar 20 minutos.'
            ],
            [
              '> 60 min\nEME REFRATÁRIO',
              'Midazolam: bolus de 0,15mg/kg e manutenção de 0,05-2mg/kg/hora (ajustar 0,05-0,1 mg/kg/hora cada 15 minutos)'
            ]
          ]}
        />
        <Subsection title="Outras Drogas">
          <Subsubsection title="1ª escolha">
            <P>
              1ª escolha: Diazepam 0,2-0,3 mg/kg/dose EV em{' '}<Italic>bolus</Italic>, se acesso
              venoso, ou 0,3 mg/kg/dose retal (máximo 10mg/dose). Repetir as
              doses a cada 5 minutos, máximo de 3 doses.
            </P>
            <P>Riscos: hipotensão e depressão respiratória.</P>
            <P>Antídoto: Flumazenil, dose de 0,2 mg/kg intravenoso.</P>
            <P>
              OBS: A diluição do Diazepam não é recomendada, pois ele precipita
              e tem a sua eficácia diminuída.
            </P>
          </Subsubsection>
          <Subsubsection title="2ª escolha">
            <P>
              Midazolam 0,1-0,2 mg/kg/dose EV em bolus, se acesso venoso, ou 0,3
              mg/kg/dose nasal, IM, retal ou bucal. Vias alternativas mais
              eficientes que o diazepam retal. Velocidade máxima de infusão: 4
              mg/min.
            </P>
          </Subsubsection>
        </Subsection>
        <Subsection title="Medicações caso as crises persistam">
          <P>
            Associar outra medicação se: crises persistirem após a segunda dose
            do benzodiazepínico, crises recorrentes (2 ou mais) ou crises
            prolongadas.
          </P>
          <Subsubsection title="1ª escolha">
            <P>
              Fenitoína, ataque de 15-20 mg/kg EV (máximo 1.000 mg), infundir em
              20-30 minutos (velocidade máxima de 1mg/kg/min). <Bold>Não diluir em
              soro glicosado</Bold> e lavar o equipo antes e depois da infusão.
            </P>
            <P>
              Se não houver resposta após 20 minutos, fazer doses adicionais de
              5- 10mg/kg, até máximo de 30mg/kg.
            </P>
            <P>
              Seu início de ação pode demorar até 40 minutos, podendo ser
              necessário outra dose de benzodiazepínico antes do início do seu
              efeito.
            </P>
            <P>
              Manutenção: 5-7 mg/kg/dia de 12/12 horas – iniciar 12 horas após
              ataque.
            </P>
            <P>
              Riscos: tromboflebite, hipotensão arterial, alterações do ritmo
              cardíaco (prolongamento do intervalo QT, bradicardia, assistolia),
              ataxia, nistagmo e necrose tecidual se houver extravasamento
              subcutâneo.
            </P>
            <P>OBS: Não usar em crises mioclônicas ou de ausência.</P>
          </Subsubsection>
          <P>Se as crises persistirem:</P>
          <Subsubsection title="2ª escolha">
            <P>
              Fenobarbital, ataque de 10-20mg/kg EV (máximo 1.000 mg), lento
              (infundir em 5 minutos). Vias oral e intramuscular não devem ser
              usadas. Se não houver resposta após 30 minutos, fazer doses
              adicionais de 5-10mg/kg, até máximo de 40mg/kg.
            </P>
            <P>
              Manutenção: 3-5 mg/kg/dia de 24/24 horas – iniciar 24 horas após
              ataque.
            </P>
            <P>
              Riscos: sedação, hipotensão e depressão respiratória,
              principalmente quando feito uso anterior de benzodiazepínicos.
            </P>
          </Subsubsection>
          <Bold>
            Estado de mal epiléptico refratário
          </Bold> – quando as crises não respondem
            às medicações acima.
          <Subsubsection title="1ª opção">
            <P>
              Midazolam 0,1-0,3mg/kg EV em{' '}<Italic>bolus</Italic> e após, preescrever em uso contínuo de 0,05-
              2mg/kg/hora. Aumentar infusão em 0,05-0,1 mg/kg/hora a cada 15
              minutos, dose máxima de 1 g/kg/h.
            </P>
            <P>
              Pacientes em indução anestésica devem ser intubados, ventilados e
              seus sinais vitais monitorizados.
            </P>
            <P>OBS: Monitorizar EEG.</P>
          </Subsubsection>
        </Subsection>
        <Subsection title="Falha do Midazolam">
          <Subsubsection title="Tiopental">
            <P>
              Tiopental 3-5mg/kg/dose EV em{' '}<Italic>bolus</Italic> (máximo 500 mg), e após,
              manutenção de 1-3mg/kg/hora.
            </P>
            <P>
              Riscos: choque, hipotensão, depressão miocárdica e vasodilatação,
              imunodepressão, depressão respiratória, edema pulmonar, íleo
              paralítico e demora na recuperação neurológica.
            </P>
            <P>OBS: Ventilação mecânica necessária.</P>
          </Subsubsection>
          <Subsubsection title="Propofol">
            <P>
              Propofol: 1-3 mg/kg EV de ataque, seguido de manutenção de
              3-5mg/kg/h.
            </P>
            <P>
              Riscos: síndrome da infusão do propofol – colapso
              cardiocirculatório potencialmente fatal com acidose lática,
              hipertrigliceridemia e rabdomiólise.
            </P>
            <P>OBS: Ventilação mecânica necessária.</P>
          </Subsubsection>
          <Subsubsection title="Quetamina">
            <P>
              Quetamina: 2-3mg/kg-dose EV em{' '}<Italic>bolus</Italic>, seguido de manutenção de
              10μg/kg/min. Aumentar infusão em 5-10 μg/kg/min a cada 10 minutos,
              dose máxima de 100 μg/kg/min.
            </P>
            <P>OBS: Ventilação mecânica necessária.</P>
          </Subsubsection>
          <Subsubsection title="Topiramato">
            <P>Topiramato: 3mg/kg/dose de ataque por SNE.</P>
            <P>Manutenção: 6-12 mg/kg/dia de 08/08 horas, via SNE.</P>
          </Subsubsection>
          <Subsubsection title="Lidocaína">
            <P>
              Lidocaína: 1-2mg/kg EV de ataque, seguido de manutenção de 1-6
              mg/kg/h.
            </P>
            <P>OBS: Ventilação mecânica necessária.</P>
          </Subsubsection>
          <Subsubsection title="Levetiracetam">
            <P>
              Levetiracetam: 20-60mg/kg/dose EV, infusão lenta (5 mg/kg/min -
              máx 3g).
            </P>
            <P>Manutenção: 20-50mg/kg/dia de 12/12 horas.</P>
          </Subsubsection>
        </Subsection>
      </Section>
      <Section title="Critérios de Alta">
        <P>
          Paciente estável, sem alteração do nível de consciência, sem crises
          epilépticas há pelo menos 48 horas.
        </P>
      </Section>
      <Section title="Observações">
        <P>
          Pacientes que chegam ao pronto-socorro sem crises epilépticas e sem
          recorrências de crises, apenas com sonolência pós-ictal, não devem
          receber benzodiazepínicos EV ou outros tratamentos de fase aguda.
        </P>
        <P>
          Em pacientes com diagnóstico prévio de epilepsia e já em uso de
          medicação, deve ser investigado quadro infeccioso, uso regular das
          medicações e doses das drogas utilizadas.
        </P>
        <P>
          Pacientes que chegam ao pronto-socorro após segunda crise epiléptica
          afebril devem iniciar tratamento profilático com drogas
          antiepilépticas, com titulação de dose no início para evitar
          sonolência excessiva, a menos que a medicação seja iniciada durante
          internação.
        </P>
        <P>
          <Bold>
            Menores de 2 anos: fenobarbital 3-5mg/kd/dia, dose única, à noite;
          </Bold>
        </P>
        <P>
          <Bold>
            Crises com início focal: carbamazepina, iniciar com 10-20 mg/kg/dia
            de 12/12 horas;
          </Bold>
        </P>
        <P>
          <Bold>
            Crises com início generalizado, desconhecido, crises de ausência ou
            mioclonias: valproato de sódio, iniciar com 10-15 mg/kd/dia de 12/12
            horas.
          </Bold>
        </P>
        <P>
          Todos os pacientes com crises recorrentes, sem acompanhamento prévio,
          devem receber alta com encaminhamento para acompanhamento ambulatorial
          com Neuropediatra, prioridade vermelha, conforme formulário padrão
          disponível.
        </P>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Abend NS, Bearden D, Helbig I, et al. Status epilepticus and refractory status epilepticus management. Semin Pediatr Neurol. 2014; 21: 263-74."
        />
        <Reference
          idx={2}
          body="Abend NS and Loddenkemper T. Management of pediatric status epilepticus. Curr Treat Options Neurol. 2014; 16: 301."
        />
        <Reference
          idx={3}
          body="Beniczky S, Neufeld M, Diehl B, et al. Testing patients during seizures: A European consensus procedure developed by a joint taskforce of the ILAE - Commission on European Affairs and the European Epilepsy Monitoring Unit Association. Epilepsia. 2016; 57: 1363-8."
        />
        <Reference
          idx={4}
          body="Glauser T, Shinnar S, Gloss D, et al. Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus in Children and Adults: Report of the Guideline Committee of the American Epilepsy Society. Epilepsy Curr. 2016; 16: 48-61."
        />
        <Reference
          idx={5}
          body="Trinka E, Cock H, Hesdorffer D, et al. A definition and classification of status epilepticus--Report of the ILAE Task Force on Classification of Status Epilepticus. Epilepsia. 2015; 56: 1515-23."
        />
        <Reference
          idx={6}
          body="Wilmshurst JM, Gaillard WD, Vinayan KP, et al. Summary of recommendations for the management of infantile seizures: Task Force Report for the ILAE Commission of Pediatrics. Epilepsia. 2015; 56: 1185-97."
        />
        <Reference
          idx={7}
          body="Agertt F, Antoniuk SA, Bruck I, Santos LC. Treatment status epilepticus in children – revision and proposal of protocol. J Epilepsy Clin Neurophysiol 2005; 11(4):183-188."
        />
        <Reference
          idx={8}
          body="Smith DM, McGinnis EL, Walleigh DJ, Abend NS. Management of Status Epilepticus in Children. J Clin Med. 2016 Apr 13;5(4)."
        />
        <Reference
          idx={9}
          body="Garzon E. Status epilepticus. J Epilepsy Clin Neurophysiol 2008; 14(Suppl 2):7-11."
        />
        <Reference
          idx={10}
          body="Zeiler FA, Zeiler KJ, Teitelbaum J, Gillman LM, West M, Kazina CJ. Lidocaine for Status Epilepticus in Pediatrics. Can J Neurol Sci. 2015 Nov;42(6):414-26."
        />
      </Section>
    </Routine>
  )
}
