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

export default function CriseHipoxia(): JSX.Element {
  return (
    <Routine
      id="arritmia"
      name="Arritmias na Infância"
      categories={['emergencia','cardiologia']}
      authors={['luciany']}
      tags={['fibrilação']}
    >
    <Section title="Introdução">
        <P>
            Os distúrbios do ritmo cardíaco ocorrem como resultado de anormalidades ou lesões no sistema de condução cardíaco ou nos tecidos de condução. Afetam 24,4/100 000 RN vivos. As taquicardias supraventriculares são as mais frequentes, ocorrendo em 85% dos casos e na maioria deles desaparecendo no primeiro ano de vida. As bradiarritmias são mais raras na infância. O bloqueio atrioventricular forma total é a forma mais grave e acomete 1:25.000 dos recém-nascidos (RN) vivos sendo mais frequente a lesão do nó atrioventricular nos filhos de mães portadoras de Lupus Eritematoso Sistêmico.
        </P>
    </Section>
    <Section title="Taquiarritmias">
        <P>
            A taquicardia sinusal consiste na FC acima do limite esperado para idade, em geral inferior a 220bpm para lactentes e inferior a 180bpm para crianças maiores. Pode vir associada a dor, ansiedade, febre e quadros infecciosos, hipotensão, anemia, hipovolemia, hipertiroidismo, insuficiência cardíaca entras outras causas. Nestas situações deve ser tratada a patologia de base.
        </P>
        <P>
            As taquicardias com alteração no ritmo ou taquiarritmas habitualmente são seguidas de sintomas clínicos quando persistentes levando em lactentes a irritabilidade, taquipnéia, palidez e dificuldade para alimentar. Já nas crianças maiores pode levar a palpitações, dor torácica, fadiga e síncope.
        </P>
        <P>
            Na presença de taquiarritmias é necessário definir para manejo inicial:
        </P>
        <List>
            <LItem>
                Presença de instabilidade ou não
            </LItem>
            <LItem>
                Avaliar QRS no eletrocardiograma (ECG):
                <List>
                    <LItem>
                        Se QRS estreito ({'<'} 0,09s): Arritmia tem origem acima ou no nó AV. Taquicardia sinusal, taquicardia supraventricular, fibrilação atrial,{' '}<Italic>flutter</Italic> atrial.
                    </LItem>
                    <LItem>
                        Se QRS alargado ({'>'} ou igual 0,09s): Arritmia com origem ventricular. Taquicardia ventricular, fibrilação ventricular

                    </LItem>
                </List>
            </LItem>
        </List>
        <Subsection title="Taquicardia Supraventricular (TSV)">
            <P>
                É a arritmia mais frequente na infância. A maioria dos episódios ocorre em repouso, são paroxísticos, duração média de 10 a 15 minutos. Pode acometer crianças com coração estruturalmente normal. Nas cardiopatias congênitas é mais comum em portadores de Transposição Corrigida das Grandes Artérias e na Anomalia de {' '}<Italic>Ebstein</Italic>. 
            </P>
            <P>
                Se presente no período fetal pode levar a hidropsia. Em 10 a 20% dos casos é associada a síndrome de pré-excitação ventricular conhecida como Síndrome de{' '}<Italic>Wolf Parkinson White</Italic> (WPW).
            </P>
            <P>
                Caracterizada por:
            </P>
            <List>
                <LItem>
                    FC elevada em geral {'>'} 220bpm em lactentes e {'>'} 180bpm em crianças maiores.
                </LItem>
                <LItem>
                    Ausência de onda P;
                </LItem>
                <LItem>
                    Intervalo RR constante, regular;

                </LItem>
                <LItem>
                    QRS em geral estreito.
                </LItem>
            </List>
            <Subsubsection title="Tratamento">
                <List>
                    <LItem>
                        Manobra vagal:
                        <List>
                            <LItem>
                                30 a 60% casos podem ser revertidos;
                            </LItem>
                            <LItem>
                                Não deve atrasar o tratamento medicamentoso. 
                            </LItem>
                        </List>
                    </LItem>
                    <LItem>
                        Adenosina:
                        <List>
                            <LItem>
                                Bloqueia a condução AV de forma transitória;
                            </LItem>
                            <LItem>
                                Reverte 75% dos casos, porém em 25 a 30% há recorrência precoce.
                            </LItem>
                            <LItem>
                                Início de ação imediata (30s), duração ação curta ({'<'} 1,5s).
                            </LItem>
                            <LItem>
                                Dose: 0,1mg/Kg (dose inicial máxima 6mg) até 0,2mg/Kg (dose máxima 12mg). Atentar para forma de administração com técnica das duas seringas já conectadas, uma com medicação e outra com soro fisiológico (devido meia vida muito curta).
                            </LItem>
                        </List>
                    </LItem>
                    <LItem>
                        Cadioversão Elétrica:
                        <List>
                            <LItem>
                                Iniciar com 1J/kg;
                            </LItem>
                            <LItem>
                                Se não for efetivo: dobrar para 2J/kg.
                            </LItem>
                        </List>
                    </LItem>
                    <LItem>
                        Amiodarona:
                        <List>
                            <LItem>
                                Casos refratários a adenosina;
                            </LItem>
                            <LItem>
                                Preferida nos casos de WPW;
                            </LItem>
                            <LItem>
                                Ação: inibe receptores adrenérgicos (vasodilatação e supressão do nó AV); inibe a corrente de K (prolonga a duração do QT); inibe os canais de sódio (prolonga a duração do QRS);
                            </LItem>
                            <LItem>
                                Dose ataque: 5mg/kg em 20 a 60 minutos;
                            </LItem>
                            <LItem>
                                Manutenção: 5 a 20mg/kg/dia contínuo por 48 a 72h;
                            </LItem>
                            <LItem>
                                Efeitos colaterais: hipotensão e diminuição da contratilidade cardíaca.
                            </LItem>
                        </List>
                    </LItem>
                </List>
            </Subsubsection>
        </Subsection>
        <Subsection title="Fibrilação Atrial">
            <List>
                <LItem>
                    Caracterizada por atividade atrial extremamente elevada com baixa amplitude das ondas "f" e frequência entre 350-600bpm.;
                </LItem>
                <LItem>
                    Resposta ventricular irregular: intervalo RR irregular, mas QRS estreito;
                </LItem>
                <LItem>
                    Incomum na infância, prevalência aumenta com idade. Associada a doenças cardíacas estruturais, miocardite, pericardite, FR com comprometimento mitral;
                </LItem>
            </List>
            <Subsubsection title="Tratamento">
                <P>
                    Tratamento se instabilidade hemodinâmimca, cardioversão elétrica (1 a 2J/kg).
                </P>
                <P>
                    Se paciente estável, amiodarona (dose de ataque 5-10mg/kg em 30 a 60 minutos). Está também deverá ser mantida como medicação de manutenção contínua IV por até 24 horas após reversão do quadro (dose de 5-40mg/kg/dia).
                </P>
                <P>
                    Outras opções para manutenção: bloqueadores de canais de cálcio e betabloqueadores.
                </P>
            </Subsubsection>
        </Subsection>
        <Subsection title="Flutter Atrial">
            <List>
                <LItem>
                    Ritmo atrial em torno de 300bpm, onda "f" e configuração de dente de serrote;
                </LItem>
                <LItem>
                    QRS normal e graus variados de bloqueio (2:1 a 4:1);
                </LItem>
                <LItem>
                    Infrequente na infância. Pode ocorre na vida fetal e neonatal. Causa baixo débito cardíaco e até morte súbita;
                </LItem>
            </List>
            <Subsubsection title="Tratamento">
                <P>
                    Cardioversão elétrica como primeira opção, em geral, pouco responsivo a tratamento medicamentoso.
                </P>
            </Subsubsection>
        </Subsection>
        <Subsection title="Taquicardia Ventricular">
            <List>
                <LItem>
                    Três ou mais batimentos consecutivos com origem ventricular;
                </LItem>
                <LItem>
                    Pode ser paroxística ou sustentada (duração {'>'} 30 segundos);
                </LItem>
                <LItem>
                    Também incomum na infância com coração estruturalmente normal;
                </LItem>
                <LItem>
                    Associada em geral a: cardiopatias congênitas (T4F), cardiomiopatias, miocardites, doença de Chagas, doenças neuromusculares, trauma cardíaco, tumor miocárdico, pós-operatório de cirurgia cardíaca, choque elétrico;
                </LItem>
                <LItem>
                    Demais casos: distúrbios eletrolíticos e metabólicos, hipóxia, isquemia, hipercarbia, hipotermia, ácidos, hipo/hipercalcemia;
                </LItem>
                <LItem>
                    No ECG: onda P não identificada, QRS tipicamente alargado, onda T com polarização oposta ao QRS. Se QRS variáveis: TV polimórfica ou{' '}<Italic>Torsades de Pointes</Italic>.
                </LItem>
            </List>
            <Subsubsection title="Tratamento">
                <List>
                    <LItem>
                        Com pulso estável e monomórfica: 
                        <List>
                            <LItem>
                                Adenosina: 0,1 mg/kg (6mg máximo dose);
                            </LItem>
                            <LItem>
                                Amiodarona: 5 mg/kg 20 a 60 minutes;
                            </LItem>
                            <LItem>
                                Procainamida: 15mg/kg IV ou IO em 30 a 60 minutes.
                            </LItem>
                        </List>
                    </LItem>
                    <LItem>
                        Com pulso, mas instável: cardioversão elétrica 1 a 2 J/kg
                    </LItem>
                    <LItem>
                        Instável e sem pulso:
                        <List>
                            <LItem>
                                Reanimação cardiopulmonar (RCP);
                            </LItem>
                            <LItem>
                                Desfibrilação 2J/kg até 4J/kg;
                            </LItem>
                            <LItem>
                                Lidocaína 0,5 a 1mg/kg/dose a cada 5 minutos e posterior infusão contínua de 20-50mcg/kg/min (máximo 3mg/kg/hora);
                            </LItem>
                            <LItem>
                                Amiodarona: 5mg/kg.
                            </LItem>
                        </List>
                    </LItem>
                    <LItem>
                        Polimórfica (<Italic>Torsades de Pointes</Italic>): Sulfato de Mg, 25-50mg/kg (máx 2g/dose).
                    </LItem>
                </List>
            </Subsubsection>
        </Subsection>
        <Subsection title="Fibrilação Ventricular">
            <List>
                <LItem>
                    Ausência de ritmo cardíaco organizado ou coordenado;
                </LItem>
                <LItem>
                    Atividade elétrica caótica com QRS bizarros, configurações e tamanhos variados;
                </LItem>
                <LItem>
                    Presente em cerca de 18% das PCRs em crianças pré-hospital. Sobrevida ainda melhor que na assistolia.
                </LItem>
            </List>
            <Subsubsection title="Tratamento">
                <List>
                    <LItem>
                        Considerada como ritmo de PCR devendo ser tratada com reanimação cardiopulmonar;
                    </LItem>
                    <LItem>
                        Desfibrilação: 2-4J/kg;
                    </LItem>
                    <LItem>
                        Prevenção de novos episódios: lidocaína ou amiodarona.
                    </LItem>
                </List>
            </Subsubsection>
        </Subsection>
    </Section>
    <Section title="Bradiarritmias">
        <P>
            Bradicardia é caracterizada por frequência cardíaca (FC) mais lenta quando comparada com a frequência esperada para idade. Bradicardia "relativa" é observada quando a frequência cardíaca está abaixo do esperado para atividade e condição da criança (podendo ainda estar dentro do normal para idade). A presença de bradicardia com repercussão, ou seja, FC baixa com perfusão sistêmica inadequada requer tratamento sendo que se {'<'} 60bpm deve ser iniciada RCP.
        </P>
        <P>
            A bradicardia primária: decorrente de condições cardíacas congênitas ou adquiridas que reduzem a frequência de despolarização espontânea ou reduzem a condução por ação direta no sistema de condução cardíaco. Bradicardia secundária: fatores externos que tornam lento o funcionamento do sistema de condução. Ex: hipotermia, acidose, hipóxia, medicações.
        </P>
        <P>
            Bradicardia sinusal: FC abaixo do esperado, mas com condução normal pelas vias do sistema de condução cardíaco. Causas patológicas: intoxicação, distúrbios eletrolíticos, infecção, apneia do sono, efeitos de fármacos, hipoglicemia, hipotiroidismo, aumento da pressão intracraniana. Condição fisiológica: sono, atletas.
        </P>
        <Subsection title="Parada ou Disfunção do Nó Sinusal">
            <List>
                <LItem>
                    Ausência ou funcionamento inadequado de atividade sinusal;
                </LItem>
                <LItem>
                    Associação em geral com cardiopatias congênitas ou cirúrgicas;
                </LItem>
                <LItem>
                    Ritmos de escape:
                    <List>
                        <LItem>
                            Atrial: onda P presente com morfologia diferente.
                        </LItem>
                        <LItem>
                            Juncional: complexos QRS estreitos, onda P retrógradas presentes ou não.
                        </LItem>
                        <LItem>
                            Idioventricular: QRS largo. FC em geral em torno de 30-40bpm. 
                        </LItem>
                    </List>
                </LItem>
            </List>
        </Subsection>
        <Subsection title="Bloqueios Atrioventriculas (BAV)">
            <P>
                Consistem distúrbios na condução do estímulo através do nó atrioventricular. 
            </P>
            <Subsubsection title="BAV 1º Grau">
                <List>
                    <LItem>
                        Lentificação da condução através do nó AV;
                    </LItem>
                    <LItem>
                        Intervalo PR prolongado: {'>'} 170ms (RN);
                    </LItem>
                    <LItem>
                        Associado: distúrbios metabólicos (hiperpotassemia), intoxicações medicamentosas, febre reumática, aguda, rubéola, hipotermia, hipoglicemia;
                    </LItem>
                    <LItem>
                        Geralmente assintomáticos.
                    </LItem>
                </List>
            </Subsubsection>
            <Subsubsection title="BAV 2º Grau">
                <List>
                    <LItem>
                        Tipo I (<Italic>Wenckebach</Italic>): mais comum. Associado a condições que estimulem o tônus parassimpático, intoxicações medicamentosas. Também pode ocorrer em pessoas saudáveis;
                    </LItem>
                    <LItem>
                        Tipo II: mais raro. Associado a lesão orgânica nas vias de condução. Síncope ou pré-sincope, sensação de irregularidade dos batimentos cardíacos
                    </LItem>
                </List>
            </Subsubsection>
            <Subsubsection title="BAV 3º Grau">
                <List>
                    <LItem>
                        Congênito (LES materno) ou adquirido;
                    </LItem>
                    <LItem>
                        Mortalidade fetal e neonatal 14-34% se não tratado;
                    </LItem>
                    <LItem>
                        Hidropsia, ICC, síncope, retardo de crescimento;
                    </LItem>
                    <LItem>
                        Indicação de implante de marcapasso: sintomáticos, dilatação e disfunção ventricular, FC {'<'} 55bpm, pausas maiores que 3”, QRS {'>'} 120ms, ESV frequentes e QT prolongado.
                    </LItem>
                </List>
            </Subsubsection>
        </Subsection>
        <Subsection title="Tratamento das Bradicardias">
            <P>
                Se assintomático, sem repercussão, encaminhar para investigação.
            </P>
            <P>
                Se sintomático e com repercussão, requer tratamento: 
            </P>
            <P>
                Se FC {'<'} 60bpm e instabilidade, iniciar RCP.
            </P>
            <P>
                Se sintomático persistente (sem instabilidade hemodinâmica, paciente com pulso) e tônus vagal aumentado ou BAV: atropina 0,02mg/kg (dose mínima 0,1mg/kg e max 1mg). Outra opção: epinefrina 0,01mg/kg, repetir a cada 3 a 5 min. Considerar marcapasso.
            </P>
        </Subsection>
    </Section>
    <Section title="Referências">
        <Reference
          idx={1}
          body="MAGALHÃES, Luiz Pereira et al. Diretrir de Arritmias Cardíacas em Crianças e Cardiopatias Congênitas Sobrac e DCC-CP. Arquivos Brasileiros de Cardiologia. 2016; 107 (1Supl.3): 1-58."
        />
        <Reference
          idx={2}
          body="CROTTI, Ulisses; MATTOS, Sandra; PINTO JR, Valdester; AIELLO, Vera. Cardiologia e Cirurgia Cardiovascular Pediatrica. 2ª ed. São Paulo: Saraiva, 2013."
        />
        <Reference
          idx={3}
          body="MAGALHÃES, Luiz Pereira de; SAAD, Eduardo Benchimol; MELO, Sissy Lara. Como orientar o cardiologista e o pediatra sobre arritmias em crianças e em pacientes com cardiopatia congênita. Ano 9, vol 9. São Paulo: Atheneu, 2015."
        />
        <Reference
          idx={4}
          body="American Heart Association. Suporte Avançado de Vida em Pediatria."
        />
        <Reference
          idx={5}
          body="CROSON, JaneE et al. Consensus statemsetent on the evolution and management of ventricular arrhythmias in the child with a struturally normal heart. Heart Rhytm. 2014: sept, vol 11 (9)."
        />
      </Section>
    </Routine>
  )
}
