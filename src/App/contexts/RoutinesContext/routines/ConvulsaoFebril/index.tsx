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

export default function ConvulsaoFebril(): JSX.Element {
  return (
    <Routine
      id="convulsao-febril"
      name="Convulsão Febril"
      categories={['emergencia', 'neurologia']}
      authors={['manuela']}
      tags={['febre', 'crise', 'convulsiva']}
    >
      <Section title="Definições">
        <List>
          <LItem>
            Convulsão acompanhada de febre (temperatura ≥ 38°C, por qualquer
            método), sem evidência de infecção do sistema nervoso central, em
            lactentes e crianças entre 3 meses e 5 anos de idade.
          </LItem>
          <LItem>
            Causa mais comum de crises epilépticas na infância, de curso benigno e
            autolimitado.
          </LItem>
          <LItem>
            Geralmente ocorre nas primeiras 24 horas da doença e 21% na primeira
            hora após início da febre. Crises que ocorrem 3 dias ou mais após o
            início do quadro, dificilmente serão convulsões febris.
          </LItem>
          <LItem>
            Nos primeiros 2 anos de vida, cerca de 2/3 dos estados de mal
            epiléptico (EME) são febris. A febre geralmente está mais alta (cerca
            de 39°C) no momento da crise, que é o primeiro sinal de febre em 25-
            50% dos casos.
          </LItem>
          <LItem>
            Fatores de risco: elevação da temperatura, história familiar positiva
            em parentes de 1º grau, internação &gt; 28 dias no período neonatal,
            atraso do desenvolvimento neurológico, frequentar creche.
          </LItem>
        </List>
      </Section>
      <Section title="Diagnóstico Clínico">
        <Table
          colWidths={[200, 200, 200]}
          header={[
            '',
            'Crises Febris Simples (Preencher todos)',
            'Crises Febris Complexas (Um ou mais)'
          ]}
          data={[
            [
              'Duração',
              'Curta (< 15 min)\nAutolimitada',
              'Prolongada (> 15 min)\nEstado de mal epiléptico febril (> 30 min)'
            ],
            [
              'Semilogia das crises',
              'Generalizada tônico-clônica',
              'Início focal\nClônica e/ou tônica\nHipotônica\nFocal >> Generalizada\nDesvio ocular / cefálico para um lado'
            ],
            [
              'Recorrência',
              'Não recorre em 24h',
              'Recorrência na mesma doença'
            ],
            ['Doença Neurológica', 'Não', 'Sim'],
            ['Pós-ictal', 'Não', 'Sim (Paralisia unilateral, sonolência)']
          ]}
        />
      </Section>
      <Section title="Exames Laboratoriais">
        <P>
          Nenhum exame é necessário após uma convulsão febril simples, exceto os
          indicados para a investigação do quadro infeccioso.
        </P>
        <P>
          Punção lombar: indicada em menores de 12 meses apenas se apresentarem
          sinais de infecção do sistema nervoso central (SNC), toxemia ou
          sonolência pós-ictal prolongada.
        </P>
        <P>
          Em crianças após uma primeira convulsão febril complexa, a neuroimagem
          (TC de crânio com contraste ou RM de crânio) deve ser realizada se
          houver crise focal, crise prolongada ou EME febril. O
          eletroencefalograma ambulatorial está indicado nos casos de EME
          febril, recorrência sem febre, atraso do desenvolvimento neurológico
          ou déficit neurológico prévio.
        </P>
      </Section>
      <Section title="Critérios de Internação">
        <List>
          <LItem>Rebaixamento do nível de consciência;</LItem>
          <LItem>Déficit neurológico após cessar crise;</LItem>
          <LItem>Crises epilépticas febris refratárias;</LItem>
          <LItem>Estado de mal epiléptico febril;</LItem>
          <LItem>
            Investigação e tratamento do quadro infeccioso, quando indicado.
          </LItem>
        </List>
      </Section>
      <Section title="Complicações mais frequentes">
        <P>
          Rebaixamento do nível de consciência secundário às medicações
          utilizadas para tratamento do EME.
        </P>
      </Section>
      <Section title="Tratamento">
        <P>
          Tratamento da febre em todos os casos, se necessário por via
          parenteral, com antitérmicos mais efetivos, preferencialmente dipirona
          e ibuprofeno.
        </P>
        <P>
          Quadros que evoluam para EME, devem ser tratados da mesma forma que um
          EME afebril, porém, a medicação de primeira escolha na segunda fase
          será o fenobarbital ao invés da fenitoína (ver: Rotina Epilepsia e
          Estado de Mal Epiléptico).
        </P>
      </Section>
      <Section title="Prevenção">
        <P>
          O uso de antitérmico profilático reduz a recorrência das crises, mas
          deve ser usado com cautela pelos efeitos colaterais das medicações.
          Devem ser usados em todas as crianças com febre e para o alívio, mas
          não está indicado seu uso contínuo nos intervalos da febre como
          prevenção de recorrência.
        </P>
        <P>
          O tratamento profilático com drogas antiepilépticas de uso contínuo
          não está indicado nas convulsões febris, independente do número de
          recorrências. Seus efeitos colaterais são mais deletérios do que a
          crise epiléptica desencadeada pela febre. Não existe registro na
          literatura de morte, déficit intelectual ou atraso do desenvolvimento
          neurológico secundários a crises febris.
        </P>
        <P>
          No entanto, em casos de pais muito ansiosos, com dificuldade em
          socorrer a criança durante a crise, pais com dificuldade social /
          cultural em compreender as orientações, crianças que evoluem com
          crises prolongadas ou EME febril, dificuldade no acesso ao atendimento
          médico de urgência em tempo hábil, o tratamento profilático pode ser
          instituído em crises recorrentes (ao menos após terceiro evento).
        </P>
      </Section>
      <Section title="Drogas de escolha">
        <P>
          Fenobarbital: 3-5mg/kd/dia, dose única, à noite. Risco de atraso do
          desenvolvimento e da linguagem, irritabilidade e sialorreia. Deve ser
          usado com cautela.
        </P>
        <P>
          Valproato de sódio: 10-15 mg/kd/dia, de 12/12 horas. Risco de
          plaquetopenia e hepatotoxicidade.
        </P>
        <P>
          Levetiracetam: 20 mg/kg/dia. Risco de depressão e comportamento
          agressivo.
        </P>
        <P>
          O uso contínuo de benzodiazepínicos durante o período da febre está
          contraindicado por causar sonolência e dificultar a avaliação do nível
          de consciência, um dos principais indicadores de infecções do SNC.
        </P>
        <P>
          O tratamento domiciliar da crise febril com benzodiazepínicos não está
          disponível no Brasil.
        </P>
      </Section>
      <Section title="Critérios de Alta">
        <P>
          Paciente estável, com recuperação do nível de consciência após a crise
          epiléptica. Não há necessidade de internação, exceto quando indicado
          pela doença causadora da febre ou em EME.
        </P>
      </Section>
      <Section title="Prognóstico e Orientações para o Seguimento">
        <P>
          Orientar os pais / cuidadores que a convulsão febril, apesar da chance
          de recorrência, tem um curso benigno e que eventuais recorrências não
          estão associadas a um déficit neurológico / cognitivo.
        </P>
        <P>
          Risco de epilepsia: cerca de 3% dos pacientes com convulsões febris
          desenvolverá epilepsia, sendo o risco mais elevado em crianças com
          crises complexas. Os principais fatores de risco são: epilepsia
          genética / idiopática em parente de 1º grau, atraso prévio do
          desenvolvimento neurológico, crises prolongadas / EME febril,
          paralisia cerebral, APGAR baixo e crises focais / recorrentes.
        </P>
        <P>
          Todos os pacientes com crises febris complexas e os pacientes com
          crises febris simples recorrentes (a partir da terceira crise) devem
          receber alta com encaminhamento para acompanhamento ambulatorial com
          Neuropediatra, conforme formulário padrão disponível.
        </P>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Patterson JL, Carapetian SA, Hageman JR, Kelley KR. Febrile Seizures. Pediatr Ann. 2013 Dec;42(12):249-54."
        />
        <Reference
          idx={2}
          body="Lux AL. Treatment of febrile seizures: historical perspective, current opinions, and potential future directions. Brain Dev. 2010 Jan;32(1):42-50."
        />
        <Reference
          idx={3}
          body="Graves RC1, Oehler K, Tingle LE. Febrile seizures: risks, evaluation, and prognosis. Am Fam Physician. 2012 Jan 15;85(2):149-53."
        />
        <Reference
          idx={4}
          body="Duffner PK, Baumann RJ, Berman P, Green JL, Schneider S, et al. Febrile seizures: clinical practice guideline for the long-term management of the child with simple febrile seizures. Pediatrics. 2008 Jun;121(6):1281-6. "
        />
        <Reference
          idx={5}
          body="Oluwabusi T1, Sood SK. Update on the management of simple febrile seizures: emphasis on minimal intervention. Curr Opin Pediatr. 2012 Apr;24(2):259-65. "
        />
        <Reference
          idx={6}
          body="Abend NS, Bearden D, Helbig I, et al. Status epilepticus and refractory status epilepticus management. Semin Pediatr Neurol. 2014; 21: 263-74."
        />
        <Reference
          idx={7}
          body="Abend NS and Loddenkemper T. Management of pediatric status epilepticus. Curr Treat Options Neurol. 2014; 16: 301."
        />
        <Reference
          idx={8}
          body="Glauser T, Shinnar S, Gloss D, et al. Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus in Children and Adults: Report of the Guideline Committee of the American Epilepsy Society. Epilepsy Curr. 2016; 16: 48-61."
        />
      </Section>
    </Routine>
  )
}
