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
  Subsubsection
} from '../../../../screens/RoutineScreen/components'

export default function SindromeNefrotica(): JSX.Element {
  return (
    <Routine
      id="sind-nefro"
      name="Síndrome Nefrótica"
      category="hematologia-reumatologia-nefrologia"
      authors={['dania']}
      tags={['nefrose', 'edema', 'hipoalbuminemia', 'proteinúria']}
    >
      <Section title="Conceito">
        <P>
          Considerada como manifestação comum a uma variedade de processos
          clínicos, que se caracterizam por aumento da permeabilidade renal a
          filtração de proteínas. Pode ser primária ou secundária a outras
          patologias.
        </P>
        <P>
          Aspectos gerais: tem prevalência de 16 / 100.000 crianças. Acomete
          mais meninos, entre 2 e 6 anos de idade. Cerca de 90% dos casos na
          infância são primários, sendo a causa da SN desconhecida, com mínimas
          alterações morfológicas (Síndrome Nefrótica por Lesões Mínimas).
        </P>
      </Section>
      <Section title="Diagnóstico">
        <List>
          <LItem>É clínico-laboratorial:</LItem>
          <LItem>Edema;</LItem>
          <LItem>
            Proteinúria {'>'} 50mk/Kg/dia: dosada pela urina de 24h;
          </LItem>
          <LItem>Hipoalbuminemia {'<'}2,5g%;</LItem>
          <LItem>Hipercolesterolemia e lipoidúria.</LItem>
        </List>
        <Subsection title="Suspeita Clínica e a Avaliação do paciente na Emergência">
          <P>Dados chamativos para nefrose:</P>
          <List>
            <LItem>Idade, principalmente pré-escolar;</LItem>
            <LItem>
              Edema de início insidioso, mole, frio e depressível, mais intenso
              pela manhã, especialmente periorbitário, chegando a anasarca;
            </LItem>
            <LItem>Pressão arterial normal (aferir usando manguito adequado para idade e criança em repouso);</LItem>
            <LItem>Geralmente, não há colúria ou hematúria macroscópica;</LItem>
            <LItem>Função renal é normal na grande maioria dos casos;</LItem>
            <LItem>
              O exame de Urina 1 (EAS) demonstra apenas a perda de proteína/cilindros
              leucocitários;
            </LItem>
            <LItem>
              Exames solicitados ainda na Emergência : HC, albumina sérica,
              função renal, eletrólitos, urina 1 (EAS).
            </LItem>
          </List>
          <P>
            Prescrição no Pronto Socorro: apenas sintomáticos por VO. Punção venosa somente
            se estritamente necessário. Iniciar o tratamento de processo
            infeccioso se for o caso. Atentar para distúrbio eletrolítico,
            especialmente a hipocalcemia.
          </P>
          <P>
            NÃO INICIAR A CORTICOTERAPIA NA EMERGÊNCIA!!! O protocolo para
            imunossupressão deve ser previamente realizado (PPD, RX de tórax,
            EPF ou anti-helmíntico).
          </P>
        </Subsection>
        <Subsection title="Prescrição na Emergência: para os casos que não apresentam complicações">
          <List>
            <LItem>Dieta hipossódica;</LItem>
            <LItem>Peso diário;</LItem>
            <LItem>
              Coletar diurese de 24 horas, se possível, para solicitar a
              proteinúria;
            </LItem>
            <LItem>Temperatura de 6/6h.</LItem>
          </List>
        </Subsection>
        <Subsection title="Exames Solicitados na Enfermaria">
          <P>
            VHS, PCR, complemento sérico(na 1ª internação), eletrólitos,
            glicemia, cálcio sérico, proteínas total e frações, eletroforese de proteínas,
            lipidograma completo, TGO, TGP, proteinúria de 24h. Repetir o HC e a
            função renal caso esses exames tenham demonstração na coleta anterior do
            PS.
          </P>
        </Subsection>
      </Section>
      <Section title="Tratamento">
        <Subsection title="Dieta">
          <P>Hipossódica durante todo o período de corticoesteróide (CE).</P>
        </Subsection>
        <Subsection title="Corticoterapia">
          <Subsubsection title="1ª Etapa - Indução da Remissão">
            <P>
              Prednisona ou prednisolona (dose inicial de 2mg/Kg/dia, em dose
              única matinal – às 8h, durante 4 semanas). Observar a redução do
              edema a partir dos primeiros 15 dias de tratamento e acompanhar a
              diminuição da proteinúria com o TASS(teste do ácido
              sulfossalicílico) realizado semanalmente.
            </P>
          </Subsubsection>
          <Subsubsection title="2ª Etapa - Manutenção da Remissão">
            <P>
              Manter a mesma dose anterior, passando para dias alternados,
              sempre pela manhã, por 4 semanas.
            </P>
          </Subsubsection>
          <Subsubsection title="3ª Etapa - Desmame">
            <P>
              Fazer a redução de 20 a 30% da dose a cada 4 semanas, até a
              suspensão total do CE. O esquema completo deverá compreender cerca
              de 4 a 5 meses.
            </P>
          </Subsubsection>
        </Subsection>
        <Subsection title="Diuréticos">
          <P>
            Não devem ser usados rotineiramente, apenas em edemas importantes
            quando, pela estase, possam predispor a infecções respiratórias, de
            pele ou peritonite.
          </P>
          <List>
            <LItem>
              Hidroclorotiazida (HCT): 2 a 5 mg/Kg/dia, em 2 doses, VO.
            </LItem>
            <LItem>
              Furosemida (FM): 2 a 5 mg/Kg/dia, em 2 ou 3 doses, VO.
            </LItem>
            <LItem>Espironolactona: 1 a 5 mg/Kg/dia, em 2 doses, VO.</LItem>
          </List>
          <P>
            Em edemas refratários, pode se utilizar 2 diuréticos que agem em
            diferentes regiões do túbulo, como é o caso da associação de HCT
            (túbulo distal) + FM (alça).
          </P>
          <P>
            Albumina a 20%: também não é indicada rotineiramente. A utilização
            da albumina se dá nos casos de grandes anasarcas, com albumina
            sérica inferior a 2g%, refratárias ao tratamento preliminar, especialmente nos casos em que há infecção bacteriana secundária, em que há maior espoliação da albumina.
            Geralmente associada a furosemida, na dose de 0,5 a 1g/Kg, IV, sem
            diluir, em bomba de infusão, correndo em 2h. A furosemida é
            realizada no meio e ao final da infusão de albumina. Quando
            indicada, é feita habitualmente por 2 a 4 dias. Devem ser
            monitorados cálcio, potássio e equilíbrio ácido-básico.
          </P>
        </Subsection>
        <Subsection title="Imunossupressores">
          <P>
            Ciclofosfamida, ciclosporina, micofenolato de mofetila. Prescritos geralmente
            após biópsia renal e determinação do padrão histológico da lesão glomerular.
          </P>
          <P>Conceitos importantes:</P>
          <List>
            <LItem>Remissão: 3 dias consecutivos sem proteinúria.</LItem>
            <LItem>Recidiva: 3 dias consecutivos com proteinúria.</LItem>
            <LItem>
              Recidiva frequente (RF): paciente que nos 6 primeiros meses após
              uma crise tem mais do que 2 recidivas.
            </LItem>
            <LItem>
              Corticossensível (CS): o paciente que entra em remissão entre 4 a
              6 semanas da administração de CE.
            </LItem>
            <LItem>
              Corticorresistente (CR): o paciente que não entrar em remissão em
              4 a 6 semanas de administração de CE.
            </LItem>
            <LItem>
              Corticodependente (CD): o paciente que recidiva na dependência da
              dose do CE ou após 14 dias de sua suspensão.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Evolução">
          <P>
            Geralmente marcada por infecções virais e bacterianas,
            principalmente pelo pneumococo (VAS e VAIs), ITU, infecções de pele
            (celulites) e peritonites. O tratamento deve ser instituído
            prontamente com antibiótico (ATB) adequado. Outras complicações
            durante a evolução, incluem fenômenos tromboembólicos, hipocalcemia,
            e, nos casos com mais recidivas, distúrbios relacionados ao
            crescimento, baixa densidade mineral óssea e dislipidemia. Os
            pacientes são orientados a fazer o TASS em casa semanalmente e todos
            devem ser encaminhados ao ambulatório.
          </P>
        </Subsection>
        <Subsection title="Indicações Biópsia Renal">
          <List>
            <LItem>SN no primeiro ano de vida ou com início após 9 anos (especialmente na adolescência);</LItem>
            <LItem>Pacientes CR(s);</LItem>
            <LItem>
              Pacientes com RF por tempo prolongado ({'>'}18 meses);
            </LItem>
            <LItem>Complemento sérico baixo.</LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Prognóstico">
        <P>
          No 1º tratamento com CE, a remissão ocorre em 70% dos casos. Cerca de
          60% dos nefróticos têm poucas ou apenas 1 crise, os demais têm
          recidivas ocasionais ou frequentes (RF ou CD). A introdução de novos
          medicamentos que proporcionam remissões prolongadas e de ATB(s) de
          largo espectro reduziu a mortalidade de 35% para 3%. O critério de
          cura baseia-se num período de 5 anos sem manifestações de SN e
          portanto, sem necessidade de medicação.
        </P>
      </Section>
      {/* <Section title="Referências">
				<Reference idx={1} body="Toporovski Julio (coord.). Nefrologia Pediátrica.2.ed. Rio de Janeiro: Guanabara Koogan, 2006."/>
				<Reference idx={2} body="Andrade, MC.; Carvalhaes JT. Nefrologia para Pediatras.1.ed. São Paulo: Atheneu, 2010."/>
				<Reference idx={3} body="Lopez, FA.; Júnior DC. Tratado de Pediatria. SBP.1ed. São Paulo: Manole, 2007."/>
				<Reference idx={4} body="Behrman, RE,; Souza, E.(Trad). Nelson Tratado de Pediatria. 17.ed. Rio de Janeiro Guanabara Koogan, 2005."/>
                <Reference idx={5} body="Faculdade de Medicina de Botucatu. Departamento de Pediatria. Pediatria Clínica. Petrópolis, RJ Epub, 2006."/>
                <Reference idx={6} body="Alves, JGB; Ferreira, OS. Fernando Figueira: Pediatria: Instituto Materno-Ínfantil de Pernambuco (IMIP). 3.ED. Rio de Janeiro, RJ: MEDSI, 2004."/>
                <Reference idx={7} body="Soeiro, EMD et al. Influence of nephrotic state on the infectious profile in childhood idiopathic nephrotic syndrome. Rev.Hosp. Clín. Fac. Med. S. Paulo, 59(5):273-278,2004."/>
				</Section> */}
    </Routine>
  )
}
