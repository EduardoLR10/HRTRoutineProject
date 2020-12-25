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

export default function GlomerulonefriteDifusaAguda(): JSX.Element {
  return (
    <Routine
      id="glomerulonefrite"
      name="Glomerulonefrite Difusa Aguda (GNDA)"
      category="hematologia-reumatologia-nefrologia"
      authors={['dania']}
      tags={['nefrite', 'estreptocócica', 'hipertensão', 'hematúria', 'edema']}
    >
      <Section title="Conceito">
        <P>
          Processo inflamatório, de origem imunológica, que acomete todos os
          glomérulos de ambos os rins. Na infância, apesar de haver outros
          possíveis agentes deflagradores, o principal antígeno desencadeante, é
          oriundo de cepas nefritogênicas do Estretococo beta-hemolítico do
          grupo A.
        </P>
      </Section>
      <Section title="Aspectos Gerais">
        <P>
          É a mais comum das glomerulopatias, mas sua real incidência é
          desconhecida, sendo as más condições higiênico-sanitárias e a
          coabitação importantes fatores predisponentes. É rara antes dos 2
          anos, alcançando maior incidência na idade escolar, com pico ao redor
          dos 7 anos. Acomete mais meninos, na proporção de 2:1.
        </P>
        <P>
          A estreptococcia (de VAS ou de pele) ocorre 2 a 3 semanas antes do
          quadro clínico da GNDA se instalar, chamado Período de Latência. É
          nessa fase que os imunocomplexos são formados e depositados na
          membrana basal dos glomérulos, ativando o Complemento pela via
          Alternativa. Devido a esse processo inflamatório, ocorre diminuição do
          ritmo de filtração glomerular, com reabsorção de sódio ao nível dos
          túbulos preservada, resultando na expansão do volume extracelular e
          aumento da pressão hidrostática, levando ao edema e hipertensão
          volume-dependente.
        </P>
      </Section>
      <Section title="Diagnóstico Clínico-Laboratorial">
        <P>
          Atentar para a história clínica (processo infeccioso prévio, de
          orofaringe ou de pele).
        </P>
        <P>Tríade clássica: edema – hipertensão – hematúria</P>
        <P>
          Edema: de caráter agudo (2 a 4 dias), não costuma ser muito intenso,
          especialmente periorbitário matinal.
        </P>
        <Subsection title="Hipertensão">
          <P>
            Cerca de 90% dos pacientes apresentam hipertensão moderada, que pode
            ser agravada pela ingestão de alimentos com alto teor de sódio. A PA
            deve ser verificada com o paciente tranquilo, sentado ou deitado,
            com manguito adequado para a idade (deve cobrir 2/3 do braço). Os
            níveis tensionais devem ser analisados de acordo com a idade da
            criança (ver em tabelas específicas).
          </P>
        </Subsection>
        <Subsection title="Hematúria">
          <P>
            Macroscópica ocorre em 2/3 dos pacientes, referida como “água de
            carne” ou “coca-cola”. Habitualmente, esse sinal vem associado à
            redução do volume urinário.
          </P>
        </Subsection>
        <Subsection title="Exames solicitados ainda na Emergência">
          <P>
            HC, uréia, creatinina, Urina 1 (EAS). Outros exames poderão ser
            necessários de acordo com cada caso, como por exemplo, RX de tórax e
            eletrólitos.
          </P>
        </Subsection>
        <Subsection title="Prescrição na Emergência">
          <P>Para os casos que não apresentam complicações.</P>
          <List>
            <LItem>Dieta hipossódica.</LItem>
            <LItem>Penicilina benzatina : DU, verificar a dose.</LItem>
            <LItem>Peso diário.</LItem>
            <LItem>Aferir volume de diurese em 24 horas.</LItem>
            <LItem>PA de 6/6h.</LItem>
          </List>
        </Subsection>
        <Subsection title="Atentar para os sinais de complicação já na entrada do paciente na Emergência">
          <List>
            <LItem>
              Congestão cardiocirculatória (12%): dispnéia, taquidispnéia,
              esforço respiratório, estertoração à ausculta pulmonar.
            </LItem>
            <LItem>
              Encefalopatia hipertensiva (4%): cefaléia importante, náuseas,
              vômitos, distúrbios visuais, agitação, sonolência, convulsão,
              coma.
            </LItem>
            <LItem>
              Insuficiência renal aguda (1%): oligoanúria intensa, com retenção
              de escórias nitrogenadas (aumento de uréia e creatinina) e
              distúrbios eletrolíticos, tendendo à elevação de potássio.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Exames Solicitados na Enfermaria">
          <P>
            HC, VHS, PCR, ASLO, Complemento sérico (C3 e C4), função renal
            (uréia e creatinina) e eletrólitos (especialmente potássio, repetir
            caso a aferição anterior tenha sido alterada). Repetir o exame de
            urina 1 (EAS), caso mantenha-se a suspeita clínica de nefrite e o
            primeiro exame tenha sido normal.
          </P>
        </Subsection>
        <Subsection title="Biópsia Renai - Indicações">
          <List>
            <LItem>Oligoanúria {'>'} 48 – 72 horas.</LItem>
            <LItem>Hematúria macroscópica {'>'} 4 semanas.</LItem>
            <LItem>Hipertensão arterial {'>'} 4 semanas.</LItem>
            <LItem>Uréia plasmática elevada {'>'} 4 semanas.</LItem>
            <LItem>
              Associação com Síndrome Nefrótica de duração {'>'} 4 semanas.
            </LItem>
            <LItem>Complemento sérico baixo {'>'} 8 semanas.</LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Tratamento">
        <Subsection title="Repouso">
          <P>Relativo, por 7 a 14 dias.</P>
        </Subsection>
        <Subsection title="Dieta">
          <P>
            Hipossódica, por 7 a 14 dias. Restrição protéica / potássio somente
            nos casos de insuficiência renal.
          </P>
        </Subsection>
        <Subsection title="Erradicação do Foco Estreptocócico">
          <P>
            A droga de escolha é a penicilina benzatina, em dose única, por via
            IM. Em crianças com até 20 Kg, a dose é de 600.000U. Nas crianças
            com peso maior, 1.200.000U.
          </P>
          <P>
            Anti-hipertensivos e diuréticos : indicados apenas nos casos de
            hipertensão arterial sintomática e na persistência de níveis
            tensionais diastólicos elevados (igual ou maior que o p95 para a
            idade), mesmo na ausência de sintomas, em 2 ou mais aferições.
            Nesses casos, deve-se associar o anti-hipertensivo ao diurético, em
            dose única, com reavaliação clínica subsequente e aferindo
            adequadamente a PA, ou deixar prescrito de horário, caso os níveis
            tensionais permaneçam elevados.
          </P>
        </Subsection>
        <Subsection title="Anlodipino">
          <P>0,1 a 0,6 mg/Kg/dia, em 1 ou 2 doses, máximo de 20mg/dia.</P>
        </Subsection>
        <Subsection title="Nifedipina">
          <P>
            Rápido efeito hipotensor, na dose de 0,25 a 0,5 mg/Kg, via
            sublingual, podendo repetir a dose 4 a 6 horas depois, se
            necessário.
          </P>
        </Subsection>
        <Subsection title="Furosemida">
          <P>
            1 ampola (40 mg) IV, para {'>'} 2 anos e meia ampola para {'<'} 2
            anos. Na emergência hipertensiva, pode ser utilizado até a dose de 4
            a 5 mg/Kg.
          </P>
        </Subsection>
        <Subsection title="Hidralazina">
          <P>
            Potente hipotensor, utilizado na dose de 0,25 a 0,5 mg/Kg, podendo
            ser repetida a cada 4 a 6 horas, se necessário (geralmente na
            encefalopatia hipertensiva).
          </P>
        </Subsection>
        <Subsection title="Evolução">
          <P>
            Na regressão dos sintomas da GNDA, ocorre inicialmente a diminuição
            do edema, em média, 7 a 15 dias após o início da doença, acompanhado
            por uma crise de diurese, seguindo-se a normalização dos níveis
            tensionais, geralmente 2 a 3 dias após o desaparecimento do edema.
          </P>
        </Subsection>
        <Subsection title="Prognóstico">
          <P>
            Totalmente favorável. Todos os pacientes devem ser encaminhados ao
            ambulatório, para acompanhar a normalização do complemento sérico
            com 8 semanas e o desaparecimento da hematúria microscópica (que
            pode durar até 12 meses).
          </P>
        </Subsection>
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
          body="Lopez, FA.; Júnior DC. Tratado de Pediatria. SBP.1ed. São Paulo: Manole, 2007."
        />
        <Reference
          idx={4}
          body="Behrman, RE,; Souza, E.(Trad). Nelson Tratado de Pediatria. 17.ed. Rio de Janeiro Guanabara Koogan, 2005."
        />
        <Reference
          idx={5}
          body="Faculdade de Medicina de Botucatu. Departamento de Pediatria. Pediatria Clínica. Petrópolis, RJ Epub, 2006."
        />
        <Reference
          idx={6}
          body="Hahn, RG, MD, et al. Evolution of Postestreptococcal Ilness, American Family Physician, University of Southern California, v.71, 2005."
        />
      </Section>
    </Routine>
  )
}
