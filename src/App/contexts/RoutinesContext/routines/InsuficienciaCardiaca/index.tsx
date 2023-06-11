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

export default function InsuficienciaCardiaca(): JSX.Element {
  return (
    <Routine
      id="insuficiencia-cardiaca"
      name="Insuficiência Cardíaca (IC) na Infância"
      categories={['emergencia', 'cardiologia']}
      authors={['luciany']}
      tags={['ICC']}
    >
      <Section title="Introdução">
        <P>
          A insuficiência cardíaca representa importante causa de morbidade e
          mortalidade na população pediátrica. Consiste em uma síndrome clínica
          complexa na qual, em decorrência de uma injúria funcional ou
          estrutural do enchimento ventricular ou da ejeção de sangue, o coração
          torna-se incapaz de bombear o sangue para a circulação de uma forma
          eficaz (que consiga atender às necessidades metabólicas teciduais),
          resultando em conjunto de sinais e sintomas clínicos. Sua incidência
          real não está bem definida, sendo secundária geralmente a cardiopatias
          congênitas ou adquiridas. A incidência de cardiopatias congênitas é de
          0,8/100 nascidos vivos, porém apenas uma pequena parcela destes, em
          geral mais graves, evoluem com IC. Já as cardiomiopatias adquiridas,
          que têm maior propensão a evoluir com IC, apresentam em países
          desenvolvidos, uma incidência de 0,8 -1,3 casos para 100.000 crianças.
        </P>
      </Section>
      <Section title="Principais Causas">
        <Table
          colWidths={[100, 200]}
          header={['Idade Início', 'Causas Mais Comuns']}
          data={[
            [
              'Ao nascimento',
              'Lesões obstrutivas ao fluxo sistêmico (CoAo, SHCE) insuficiência tricúspide grave, insuficiência pulmonar grave, fístulas arteriovenosas grandes'
            ],
            ['1ª semana', 'TGA, PCA em RNPT, SHCE, DATVP formas obstrutivas'],
            ['1ª a 4ª semana', 'CoAo, estenose aórtica crítica,  PCA em RNPT'],
            [
              '4ª a 6ª semana',
              'Lesões com fluxo esquerda-direita (CIV grande, DSAVT)'
            ],
            [
              'Lactentes',
              'Lesões com fluxo esquerda-direita; miocardites (inflamatória ou infecciosas - virais), broncodisplasia, cor pulmonale agudo, distúrbios metabólicos'
            ],
            [
              'Escolares e adolescentes',
              'Cardite reumática, disfunções valvares reumáticas crônicas, endocardite e pericardite'
            ],
            [
              'Qualquer idade',
              'Endocardite, pericardite, taquiarritmias, BAVT, insuficiência renal'
            ]
          ]}
          caption="CoAo: coarctação de aorta; SHCE: síndrome de hipoplasia de coração esquerdo; TGA: transposição das grandes artérias; PCA: persistência de canal arterial; RNPT recém nascido prematuro: DATVP: drenagem anômala total de veias pulmonares; CIV comunicação interventricular; DSAVT: defeito do septo atrioventricular; BAVT: bloqueioatrioventricular total."
        />
      </Section>
      <Section title="Fisiopatologia">
        <Figure
          source={img1}
          size={[505, 275]}
          caption="SNS: sistema nervoso simpático; SRAA: sistema renina-angiotensina aldosterona; FC: frequência cardíaca; RVS: resistência vascular sistêmica."
        />
        <P>
          Coração fetal e neonatal: têm uma menor capacidade contrátil, menor
          complacência ventricular o que, associado à imaturidade do SNS, leva a
          uma maior dependência da frequência cardíaca para manutenção do débito
          cardíaco.
        </P>
      </Section>
      <Section title="Classificação">
        <Subsection title="IC DE ALTO DÉBITO">
          <P>
            Sobrecarga de volume, pressão diastólica final elevada,
            contratilidade miocárdica normal ou pouco aumentada; frequência
            cardíaca geralmente aumentada.
          </P>
        </Subsection>
        <Subsection title="IC DE BAIXO DÉBITO">
          <P>
            Disfunção miocárdica, aumento da pressão diastólica final, redução
            da perfusão periférica.
          </P>
        </Subsection>
      </Section>
      <Section title="Manifestações Clínicas">
        <Subsection title="Baixo débito cardíaco">
          <P>
            Taquicardia (podendo apresentar terceira bulha/B3), sudorese,
            irritabilidade, palidez, oligúria, baixo ganho ponderal, hipotensão.
          </P>
        </Subsection>
        <Subsection title="Congestão venocapilar pulmonar">
          <P>
            Taquipneia (sinal inicial de descompensação em lactentes) tosse
            seca, sibilância, cianose, estertores.
          </P>
        </Subsection>
        <Subsection title="Congestão venosa sistêmica">
          <P>
            Hepatomegalia, edema, efusões serosas (sinais mais comuns escolares
            e adolescentes).
          </P>
        </Subsection>
      </Section>
      <Section title="Exames Complementares">
        <List>
          <LItem>
            Contribuem para diagnóstico etiológico e seguimento, visto que o
            diagnóstico de IC é clinico.
          </LItem>
          <LItem>
            Exames laboratoriais como hemograma, PCR, eletrólitos, gasometria
            arterial, função renal e hepática, provas de atividade inflamatória,
            função tiroidiana: solicitados nos casos de apresentação inicial de
            acordo com suspeita clínica para etiologia do quadro.
            <Bold>
              Nos pacientes com diagnóstico prévio de cardiopatia congênita:
            </Bold>
          </LItem>
          <List>
            <LItem>
              É importante definir se há algum processo infeccioso agudo como
              causa da descompensação.
            </LItem>
            <LItem>
              Se houver uso prévio de diuréticos e vasodilatadores: solicitar
              exames para avaliação de função renal e eletrólitos à internação.
            </LItem>
          </List>
        </List>
        <Subsection title="Exames">
          <List>
            <LItem>
              Radiografia de tórax e eletrocardiograma: exames necessários para
              avaliação inicial, auxiliam na definição de cardiopatias
              associadas (congênitas e adquiridas). Já devem ser solicitados no
              pronto socorro para os casos agudos.
            </LItem>
            <LItem>
              Ecocardiograma: para definição de causas estruturais, faz
              avaliação da função ventricular e de outras alterações associadas.
              Realizar assim que possível após internação, nos casos de
              apresentação inicial.
            </LItem>
            <LItem>
              Troponina: especificidade limitada em crianças. Solicitar nos
              casos suspeitos de miocardite.
            </LItem>
            <LItem>
              BNP, proBNP: peptídeo natriurético tipo B; ajuda no diagnóstico
              diferencial com quadros pulmonares primários; tem valor
              prognóstico (pior evolução clínica se {'>'} 300 pg/ml). Também
              usado para seguimento do tratamento dos casos crônicos.
            </LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Classificação Funcional">
        <Table
          colWidths={[100, 150, 150]}
          header={[
            '',
            '< 10 anos ROSS',
            <Text key={1}>
              {'>'} 10 anos NYHA (<Italic>New York Heart Association</Italic>)
            </Text>
          ]}
          data={[
            [
              'Classe I',
              'Ausência de sintomas',
              'Ausência de sintomas aos esforços habituais'
            ],
            [
              'Classe II',
              'Taquipneia leve ou sudorese às mamadas, dispneia aos esforços, crescimento normal',
              'Sintomas presentes aos esforços habituais'
            ],
            [
              'Classe III',
              'Taquipneia moderada ou sudorese acentuada às mamadas e aos esforços; retardo no crescimento',
              'Sintomas presentes aos esforços menores'
            ],
            [
              'Classe IV',
              'Taquipneia, retrações, gemidos, sudorese acentuada mesmo em repouso',
              'Sintomas presentes aos mínimos esforços'
            ]
          ]}
        />
      </Section>
      <Section title="Tratamento Medidas Gerais e Suporte">
        <List>
          <LItem>
            Repouso: se agitação intensa, considerar leve sedação para redução
            do esforço;
          </LItem>
          <LItem>Manter decúbito elevado a 30°;</LItem>
          <LItem>Controle da temperatura corporal;</LItem>
          <LItem>
            Oxigenioterapia: administração de acordo com quadro clínico geral,
            considerar suporte com pressão positiva (CPAP, VNI, BiPAP) para os
            casos mais graves;
          </LItem>
          <LItem>
            Restrição hídrica e salina: para casos graves, máximo de 50% das
            necessidades diárias; casos moderados, máximo de 80% das
            necessidades diárias;
          </LItem>
          <LItem>Correção dos distúrbios ácido-básicos e eletrolíticos;</LItem>
          <LItem>
            Correção da anemia: considerar transfusão apenas para casos graves
            (em geral com necessidade de aminas vasoativas e suporte
            ventilatório). Nos demais casos, níveis de Hb toleráveis até 7g/dl;
            nestes casos iniciar sulfato ferroso quando possível.
          </LItem>
        </List>
      </Section>
      <Section title="Tratamento Medicamentoso">
        <Subsection title="Diuréticos">
          <P>
            Para casos de congestão venosa sistêmica e pulmonar. Objetivo:
            retomar estado de normovolemia levando a redução nos sintomas
            clínicos.
          </P>
          <List>
            <LItem>
              Furosemida: diurético de alça. Dose oral ou IV de 1 a 6mg/kg/dia,
              fracionada em 1 a 4 doses diárias.
            </LItem>
            <LItem>
              Hidroclorotiazida: diurético tiazídico. Dose oral de 1 a
              2mg/kg/dia, em 1 a 2 doses diárias.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Inibidores da Enzima Conversora de Angiotensina (iECA)">
          <P>
            Melhora na sobrevida para casos de cardiomiopatias. Redução nos
            sintomas e aumento da sobrevida estão bem demonstrados em adultos,
            sendo usado na prática clínica em pediatria.
          </P>
          <List>
            <LItem>
              Captopril: 1ª escolha em crianças. Dose oral de 0,5 a 2mg/kg/dia,
              fracionada em 3 a 4 doses diárias. Dose máxima de 6mg/kg/dia
              (pouco usada). Se sinais de insuficiência renal, reduzir a dose ou
              mesmo suspender.
            </LItem>
            <LItem>
              Enalapril: usado em crianças {'>'} 2 anos. Dose oral 0,2 a
              5mg/kg/dia, em 1 a 2 doses diárias.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Betabloqueadores">
          <P>
            Os estudos têm demonstrado melhora na função ventricular, redução na
            mortalidade e na necessidade de transplante cardíaco.
          </P>
          <List>
            <LItem>
              Carvedilol: dose terapêutica de 0,6 a 2mg/kg/dia, em 2 doses
              diárias. Iniciar com dose menor (0,1mg/kg/dia) e observar
              tolerância clínica (controle de FC e PAS) para progressão desta.
              Dose máxima de 50mg/dia.
            </LItem>
            <LItem>
              Metoprolol: dose terapêutica de 0,5 a 2mg/kg/dia, em duas doses
              diárias.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Antagonista da Aldosterona">
          <P>
            Usado quando há disfunção ventricular e para redução no
            remodelamento ventricular.
          </P>
          <List>
            <LItem>
              Espironolactona: 1 a 2mg/kg/dia, dividido em 1 a 2 doses diárias.
              Cuidado com níveis de K (risco de hiperpotassemia), especialmente
              em pacientes que também estão em uso de iECA.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Agentes Inotrópicos">
          <P>
            Recomendados nos casos de baixo débito cardíaco com disfunção de
            órgão-alvo.
          </P>
          <List>
            <LItem>
              Dobutamina: 5 a 15 mcg/kg/min. Cuidado com doses elevadas por
              promoverem taquicardia.
            </LItem>
            <LItem>
              Adrenalina: primeira escolha se baixo débito com hipoperfusão de
              outros órgãos. Na IC, a preferência é por doses baixas (0,1 a
              0,4mcg/kg/min), visto que doses elevadas aumentam a pós-carga
              (aumento na PAS) podendo levar à deterioração na função
              ventricular.
            </LItem>
            <LItem>
              Milrinona: primeira escolha nas cardiomiopatias como suporte
              inotrópico moderado. Benefício também para função diastólica. Pode
              ser associada à dobutamina e adrenalina. Dose: ataque de 50
              mcg/kg, em 15 minutos. Manutenção: 0,25 a 0,75 mcg/kg/min. Dose
              máxima 1mcg/kg/min.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Prostaglandina E1">
          <P>
            Causa vasodilatação direta na musculatura do canal arterial. Usar
            nos recém-nascidos com insuficiência cardíaca de baixo débito até
            definição se cardiopatia estrutural. Dose: 0,01 a 0,5 mcg/kg/min.
          </P>
        </Subsection>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="AZEKA, Estela et al. I Diretriz de Insuficiencia Cardiaca (IC) e Transplante Cardiaco no feto, na Criança e em Adultos com Cardiopatia Congenita da Sociedade Brasileira de Cardiologia. Arquivos Brasileiros de Cardiologia 2014; 10 (Supl.2):1-126."
        />
        <Reference
          idx={2}
          body="AZEKA, Estela et al. Delisting of infants and children from the heart transplantation waiting list after carvedilol treatment. J Am Coll Cardiol. 2002; 40 (11): 2034-8."
        />
        <Reference
          idx={3}
          body="CARVALHO, Angela. Atualização em Insuficiencia Cardiaca na Criança. Revista de Saude da Criança e Adolescente 2011; 3 (1): 81-92."
        />
        <Reference
          idx={4}
          body="CROTI, Ulisses Alexandre; MATTOS, Sandra da Silva; PINTO JR, Valdester Cavalcante; AIELLO, Vera Demachi. Cardiologia e Cirurgia Cardiovascular Pediatrica. 1ª edição. São Paulo: Roca. 2008."
        />
        <Reference
          idx={5}
          body="KANTOR, Paul F. et al. Presentation, Diagnosis, and Medical Management of Heart Failure in Children: Canadian Cardiovascular Society Guidelines. Canadian Journal of Cardiology. 2013; 29: 1535-1552."
        />
      </Section>
    </Routine>
  )
}
