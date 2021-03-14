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

export default function PurpuraDeHenochSchonlein(): JSX.Element {
  return (
    <Routine
      id="purpura-de-henoch"
      name="Púrpura de Henoch-Schönlein (PHS)"
      categories={['hematologia-reumatologia-nefrologia']}
      authors={['dania']}
      tags={['anafilactóide', 'vasculite', 'leucocitoclástica']}
    >
      <Section title="Conceito">
        <P>
          Também chamada de Púrpura Alérgica ou Púrpura Anafilactóide ou
          Vasculite Leucocitoclástica é uma inflamação generalizada de pequenos
          e médios vasos que afeta principalmente crianças, envolvendo pele,
          articulações, trato gastrointestinal e rins. O termo leucocitoclástica
          de dá devido ao extravasamento de hemácias em torno dos vasos
          sanguíneos, sendo fagocitados por leucócitos, levando à necrose
          fibrinóide vascular e perivascular. À microscopia eletrônica são
          observados espessamentos da membrana basal glomerular de ambos os
          rins, enquanto à imunofluorescência direta detecta-se deposição de IgA
          no mesângio.
        </P>
      </Section>
      <Section title="Aspectos Gerais">
        <P>
          É a vasculite mais frequente da infância, sendo mais comum abaixo dos
          15 anos, com pico aos 4 anos e leve predominância do sexo feminino. De
          etiologia desconhecida, dentre os prováveis fatores desencadeantes já
          relacionados, as infecções virais do trato respiratório superior
          ocorrem na metade dos casos. Outros possíveis fatores desencadeantes
          incluem: infecções estreptocócicas, vacinas, medicamentos, alimentos,
          picadas de inseto e exposição ao frio.
        </P>
      </Section>
      <Section title="Diagnóstico">
        <P>
          É essencialmente clínico, baseado na presença de dois ou mais dos
          critérios propostos pelo Colégio Americano de Reumatologia, em
          crianças com manchas elevadas na pele que não desaparecem com a
          pressão digital (púrpura palpável).
        </P>
        <Table
          colWidths={[150, 150]}
          header={['Critérios', 'Definições']}
          data={[
            [
              'Púrpura palpável',
              'Púrpuras elevadas, não relacionadas a redução das plaquetas (plaquetopenia)'
            ],
            [
              'Idade de início inferior a 20 anos',
              'Idade de início dos sintomas antes dos 20 anos'
            ],
            [
              'Dor Abdominal',
              'Dor na barriga, geralmente difusa que piora às refeições ou presença de sangramento nas fezes'
            ],
            [
              'Alterações na biópsia de pele',
              'O exame histológico evidencia granulócitos em paredes de arteríolas e vênulas'
            ]
          ]}
          title="Critérios do Colégio Americano de Reumatologia para o diagnóstico de púrpura de Henoch-Schönlein"
        />
        <P>
          A presença de 2 ou mais dos 4 critérios, em crianças e adolescentes
          com púrpura palpável, define o diagnóstico.
        </P>
        <P>
          A manifestação clínica mais frequente é a púrpura palpável em 100% dos
          pacientes, de caráter ascendente em MMII e nádegas. Geralmente, as
          lesões aparecem em surtos com intervalos de 1 semana ou mais e com
          duração total do quadro entre 3 e 12 semanas. O edema do subcutâneo
          tem localização predominante em mãos, pés e face (frontal,
          especialmente em lactentes), podendo ser evidenciado em até 30% dos
          pacientes.
        </P>
        <P>
          Artralgia ou artrite ocorre em 60 a 80% dos pacientes, principalmente
          em grandes articulações de MMII, como joelhos e tornozelos,
          dificultando ou impossibilitando a deambulação.
        </P>
        <P>
          O comprometimento gastrointestinal ocorre em 50 a 85% dos pacientes,
          com dor abdominal, náuseas, vômitos, enterorragia, melena e,
          raramente, perfuração intestinal.
        </P>
        <P>
          O acometimento renal (nefrite) ocorre em 10 a 50% dos pacientes,
          geralmente nos 3 primeiros meses da doença. Doença renal grave incide
          em 1 a 4,5% de todas as crianças e adolescentes com PHS e em 7,5%
          daqueles com alterações renais persistentes. As alterações mais
          frequentes são leves, transitórias e evidenciáveis nos exames de
          urina, como hematúria e proteinúria, com resolução espontânea em 1 a 3
          meses.
        </P>
        <Subsection title="Exames Complementares">
          <List>
            <LItem>HC: normal ou com discreta leucocitose e neutrofilia;</LItem>
            <LItem>
              Provas de atividade inflamatória: VHS, PCR, alfa1glicoproteína –
              todas aumentadas;
            </LItem>
            <LItem>ASLO: na tentativa de se detectar uma estreptococcia;</LItem>
            <LItem>
              Urina 1 (EAS): exame muito importante para avaliação dos rins,
              realizado já na emergência;
            </LItem>
            <LItem>
              Ultrassonografia abdominal: indicada nos casos de dor abdominal
              importante e refratária ao tratamento, para afastar suspeita de
              abdome agudo hemorrágico.
            </LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Tratamento">
        <P>
          Quadro purpúrico cutâneo: não necessita de medicação. Em alguns casos,
          com prurido importante, indica-se o uso de anti-histamínico
          (loratadina, desloratadina, dexclorfeniramina, hidroxizine,
          fexofenadina, nas doses habituais, por 7 a 10 dias).
        </P>
        <P>
          Artrite ou artralgias: analgésicos (paracetamol ou ibuprofeno) ou
          anti-inflamatórios não-hormonais (naproxeno, cetoprofeno, ibuprofeno,
          diclofenaco), por 1 a 2 semanas, nas doses habituais.
        </P>
        <List>
          <LItem>
            Cetoprofeno (2 a 4mg/Kg/dia em 3 ou 4 doses, máximo de 300mg/dia)
          </LItem>
          <LItem>
            Ibuprofeno (30 a 50mg/Kg/dia em 3 ou 4 doses, máximo de 2.400mg/dia)
          </LItem>
          <LItem>
            Diclofenaco (2 a 3mg/Kg/dia em 3 doses, máximo de 150mg/dia)
          </LItem>
          <LItem>
            Naproxeno (10 a 20mg/Kg/dia em 2 doses, máximo de 1.000mg/dia)
          </LItem>
          <LItem>
            Nimesulida (4 a 5mg/Kg/dia em 2 doses, máximo de 200mg/dia)
          </LItem>
        </List>
      </Section>
      <Section title="Dor Abdominal">
        <P>
          Tem boa resposta a ranitidina, podendo ou não ser associada aos
          corticóides. Os corticoides, Prednisona (1 a 2 mg/Kg/dia),
          Prednisolona (1 a 2 mg/Kg/dia), por 7 a 14 dias e Metilprednisolona
          (30 mg/Kg, em pulsos intravenosos) são utilizados nos casos de dor
          abdominal refratária, nefrites graves, orquite, assim como em outras
          manifestações graves e raras, com envolvimento neurológico e
          hemorragia pulmonar.
        </P>
      </Section>
      <Section title="Evolução e Prognóstico">
        <P>
          Geralmente a evolução é boa, apesar das púrpuras poderem recorrer. As
          manifestações articulares e gastrointestinais costumam se resolver
          entre 1 a 3 meses. A longo prazo, a preocupação é com os rins. Os
          pacientes devem ser seguidos ambulatorialmente por período de 5 anos e
          devem realizar exames de sangue e de urina periodicamente.
        </P>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Oliveira, SKF.; Azevedo, ECL. Reumatologia Pediátrica. 2.ed .Rio de Janeiro: Revinter, 2001."
        />
        <Reference
          idx={2}
          body="Cassidy, JT(coord). Textbook of Rheumatology. 2.ed.Philadelphia: Elsevier, 2010."
        />
        <Reference
          idx={3}
          body="Silva, CAA(coord). Instituto da Criança Hospital das Clínicas FMUSP. Departamento de Pediatria. Doenças Reumáticas na Criança e no Adolescente. 1. ed. São Paulo: Manole, 2006."
        />
        <Reference
          idx={4}
          body="Naspitz, CK(coord). Guias de Medicina Ambulatorial e Hospitalar UNIFESP. Alergia, Imunologia e Reumatologia em Pediatria.1. ed. São Paulo: Manole, 2006."
        />
        <Reference
          idx={5}
          body="Oliveira, SKF.Reumatologia para Pediatras. 1.ed .Rio de Janeiro: Revinter, 2003."
        />
        <Reference
          idx={6}
          body="Oliveira, SKF; Rodrigues, MCF. Reumatologia na Prática para Pediatras. 1.ed .Rio de Janeiro: Revinter, 2010."
        />
        <Reference
          idx={7}
          body="Terreri, MTRA; Sacchetti, SB. Reumatologia para o Pediatra. Sociedade de Pediatria de São Paulo, Departamento de Pediatria. 1.ed. São Paulo: Atheneu, 2008."
        />
        <Reference
          idx={8}
          body="Almeida, JLJ, et al. Envolvimento renal na Púrpura de Henoch Shönlein: uma análise multivariada de fatores prognósticos iniciais. J Pediatr (Rio J.); 83(3):259-266, 2007."
        />
      </Section>
    </Routine>
  )
}
