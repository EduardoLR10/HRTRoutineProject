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

export default function IVAS2(): JSX.Element {
  return (
    <Routine
      id="ivas2"
      name="IVAS 2 - Otite Média Aguda"
      category="pneumologia"
      authors={['renato']}
      tags={[]}
    >
      <Section title="Introdução">
        <P>
          A Otite Média Aguda (OMA) é uma das infecções mais comuns em
          pediatria, responsável pela maioria das prescrições de antibióticos
          nesta faixa etária.
        </P>
      </Section>
      <Section title="Definição">
        <P>
          Otite média é uma inflamação da orelha média, mais precisamente de seu
          mucoperiósteo de revestimento, com presença de secreção, associada a
          início rápido de um ou mais sinais e sintomas inflamatórios desta
          região. Não há período absoluto para determinar o estágio da doença,
          mas em geral é considerada aguda quando apresenta evolução inferior a
          3 meses.
        </P>
      </Section>
      <Section title="Epidemiologia">
        <P>
          A OMA apresenta alta morbidade e baixa mortalidade, permanecendo com
          alta incidência e prevalência. Cerca de 60 a 80% dos lactentes tem
          pelo menos 1 episódio de OMA até o 1° ano de vida e até 90% o terão
          até os 5 anos. O pico de incidência ocorre entre 6 e 24 meses de vida,
          com declínio após essa idade e novo aumento entre 5 e 6 anos, quando
          as crianças começam a vida escolar.
        </P>
        <Subsubsection title="São fatores que influenciam a ocorrência de OMA">
          <List>
            <LItem>
              Idade: relacionada à imaturidade do sistema imunológico, a
              alterações anatômicas em relação à tuba auditiva (mais curta e
              horizontalizada) e à permanência dessas crianças na posição
              horizontal;
            </LItem>
            <LItem>Sexo: maior incidência no sexo masculino;</LItem>
            <LItem>
              Estado socioeconômico: o baixo nível socioeconômico está
              fortemente associado ao desenvolvimento e à gravidade da OMA
              (maior número de pessoas na residência, saneamento básico
              precário, estado nutricional inadequado, acesso limitado a
              atendimento médico, recursos limitados para seguir a prescrição
              medica);
            </LItem>
            <LItem>Grau de exposição à fumaça de cigarro;</LItem>
            <LItem>
              Grau de contato com outras crianças (ex: em creches): devido
              contato com outros vírus respiratórios;
            </LItem>
            <LItem>
              Estado do ano: são comuns nos meses de inverno, em função de serem
              associadas a infecção do trato respiratório superior;
            </LItem>
            <LItem>
              Anomalias craniofaciais congênitas: fendas palatinas não
              corrigidas, outras anomalias craniofaciais e Síndrome de Down;
            </LItem>
            <LItem>
              Tipo de leite ingerido pelo lactente: o leite materno tem efeito
              protetor pela presença de IgA.
            </LItem>
          </List>
        </Subsubsection>
      </Section>
      <Section title="Etiologia">
        <P>
          Cerca de 75% das OMAs são causadas por patógenos bacterianos.
          Destacam-se o <Italic>Streptococcus pneumoniae</Italic> (40%),{' '}
          <Italic>Haemophilus influenzae</Italic> (25-35%) e{' '}
          <Italic>Moraxella catarrhalis</Italic> (10-15% dos casos).
        </P>
        <P>
          Na presença de conjuntivite associada à OMA, o microorganismo mais
          encontrado é o <Italic>Haemophilus influenzae</Italic> não tipável.
        </P>
        <P>
          O <Italic>Streptococcus pyogenes</Italic> é um agente menos frequente
          na etiologia da OMA, mas, quando presente, acomete principalmente
          crianças mais velhas e causa mais frequente ruptura da membrana
          timpânica e progressão para mastoidite.
        </P>
        <P>
          Vírus também podem ser encontrados na orelha média isoladamente ou em
          associação com bactérias patógenas. Os mais comumente observados são o
          vírus sincicial respiratório e o rinovírus. Em 5 a 10% dos casos, a
          OMA ocorre na ausência de bactérias colonizadoras detectáveis.
        </P>
        <P>
          Destaca-se que a microbiologia das OMAs se têm modificado nos últimos
          anos em decorrência do uso mais abrangente da vacina pneumocócica.
        </P>
      </Section>
      <Section title="Quadro Clínico">
        <P>
          Há grande variação dos sinais e sintomas de OMA. Muitas vezes, a
          manifestação é insidiosa em um lactente febril, como achado de exame
          físico, ao passo que, outras vezes, há otorreia purulenta ou otalgia
          importante.
        </P>
        <P>
          A perfuração da membrana timpânica pode ocorrer durante o curso da
          OMA. Após a ruptura, a secreção acumulada no ouvido médio é eliminada
          no canal auditivo externo, resultando no alívio da dor e redução da
          febre. Como a membrana timpânica é altamente vascularizada, a
          perfuração resolve-se rapidamente em poucos dias; entretanto, a
          perfuração prolongada da membrana pode ocorrer após um episódio de
          OMA, levando a otorreia crônica.
        </P>
      </Section>
      <Section title="Diagnóstico">
        <P>
          O diagnóstico da OMA é essencialmente clínico (anamnese e exame
          físico).
        </P>
        <P>
          Durante a anamnese deve-se questionar sobre sintomas nasais,
          otológicos e faríngeos, uso recente de antibiótico, alergia
          medicamentosa, estado vacinal, aleitamento materno e fatores de risco
          para OMA (uso de chupeta e mamadeira, exposição à fumaça do cigarro,
          entrada da criança na creche).
        </P>
        <P>
          Em lactentes e crianças, a apresentação mais típica é otalgia, febre,
          irritabilidade ou choro após alguns dias de sintomas gripais; ao
          contrário do que as mães acreditam, a manipulação do ouvido pelo
          lactente pode não estar relacionada à otite. Na criança maior, otalgia
          é a queixa mais frequente. Em alguns casos a criança refere queda da
          audição ou sensação de “peso” ou pressão no ouvido. Pode-se haver
          associação com conjuntivite.
        </P>
        <P>
          Ao Exame Físico, a otoscopia fornece informações importantes e
          essenciais ao diagnóstico. O achado mais comum é uma membrana
          timpânica (MT) hiperemiada, opaca e abaulada.
        </P>
        <P>
          A presença de abaulamento da MT tem alto valor preditivo (positividade
          em culturas em torno de 75%), devendo ser mais valorizado do que
          hiperemia, que pode ser decorrente da simples manipulação do conduto
          para limpeza de cerúmen ou mesmo do choro da criança durante a
          otoscopia. A otorreia purulenta é outro sinal importante, mas deve ser
          diferenciada daquela que pode ocorrer na otite externa, comum no nosso
          meio, principalmente nos meses de temperatura elevada.
        </P>
        <Table
          colWidths={[100, 150]}
          header={['Sistêmicso', 'Locais']}
          data={[
            ['Febre', 'Abaulamento da membrana timpânica'],
            ['Irritabilidade', 'Diminuição de translucidez'],
            ['', 'Hiperemia'],
            ['', 'Otalgia'],
            ['', 'Otorreia purulenta']
          ]}
          title="Sinais e Sintomas Clínicos de Otite Média Aguda"
        />
        <P>
          Segundo o <Italic>guideline</Italic> de 2013 da Associação Americana
          de Pediatria (AAP), o diagnóstico de OMA deve ser realizado quando
          houver:
        </P>
        <List>
          <LItem>
            Abaulamento moderado a grave da MT ou novo surto de otorreia, não
            ocasionado por otite externa aguda;
          </LItem>
          <LItem>
            Leve abaulamento da MT e início recente (menos de 48 horas) de
            otalgia ou eritema intenso de MT.
          </LItem>
        </List>
      </Section>
      <Section title="Tratamento">
        <Subsection title="Sintomático (Antitérmico e Analgésico)">
          <P>
            Toda criança com diagnóstico de OMA deve receber analgesia
            (Dipirona, Ibuprofeno ou Paracetamol). Há relato de redução da dor
            após 10 minutos do uso de lidocaína tópica quando comparada ao
            placebo, mas o efeito do analgésico tópico tem evidência limitada.
            Para alívio dos sintomas nasais, recomenda-se a lavagem nasal com
            soro fisiológico 0,9%.
          </P>
        </Subsection>
        <Subsection title="Antibioticoterapia">
          <P>Conforme recomendação da AAP (2013):</P>
          <Table
            colWidths={[100, 200]}
            header={['Idade', 'Indicação de Antibiótico']}
            data={[
              ['< 6 meses', 'Sempre'],
              [
                '6 - 24 meses',
                'Sinais de gravidade (otalgia moderada ou grave, otalgia por pelo menos 48horas ou temperatura superior a 39°C) e/ou acometimento bilateral'
              ],
              ['> 24 meses', 'Sinais de gravidade uni ou bilateral'],
              [
                'Independemente da idade',
                'Anormalidades craniofaciais, imunodeficiências, síndromes genéticas'
              ]
            ]}
          />
          <P>
            Na ausência dos critérios destacados acima, mas se houver
            diagnóstico de OMA, deve ser realizada decisão, compartilhada com os
            pais, de observação com retorno em 48 a 72 horas ou início de
            tratamento com antibiótico.
          </P>
          <P>
            Quanto ao tratamento da OMA, o guideline de 2013 da AAP faz as
            recomendações:
          </P>
          <List>
            <LItem>
              Quando a decisão de tratar com antibiótico tiver sido tomada, e a
              criança não tiver recebido amoxicilina nos últimos 30 dias ou não
              tiver conjuntivite purulenta concomitante ou, ainda, não for
              alérgica a penicilina: prescrever amoxicilina;
            </LItem>
            <LItem>
              Quando a decisão de tratar com antibiótico tiver sido tomada, e a
              criança tiver recebido amoxicilina nos últimos 30 dias ou tiver
              conjuntivite purulenta concomitante, ou história de OMA recorrente
              não responsiva à amoxicilina: prescrever antibiótico com cobertura
              adicional de inibidor de beta-lactamase;
            </LItem>
            <LItem>
              Quando o cuidador relatar que os sintomas da criança pioraram ou
              falharam em responder ao tratamento inicial com antibiótico dentro
              de 48 a 72 horas: reavaliar o paciente e determinar se é
              necessária uma mudança na terapia antimicrobiana e/ou realização
              de algum exame complementar;
            </LItem>
            <LItem>
              OMA recorrente: encaminhar para Otorrinolaringologista devido a
              possível indicação de tubos de timpanostomia.
            </LItem>
          </List>
          <Table
            colWidths={[100, 120, 200]}
            header={['Antibiótico', 'Cobertura', 'Dose']}
            data={[
              ['Amoxicilina', 'Pneumococo', '50mg/kg/dia*, de 12 em 12 horas'],
              [
                'Amoxicilina com Clavunato de potássio',
                <Text key={1}>
                  Pneumococo,{'\n'}<Italic>M. catarrhalis</Italic>,{' '}
                  <Italic>H. influenzae</Italic>
                </Text>,
                '90mg/kg/dia de amoxicilina com 6,4mg/kg/dia de Clavulanato de potássio, de 12 em 12 horas'
              ]
            ]}
            title="Antibióticos Utilizados em Casos de Otite Média Aguda"
            caption="A dose de amoxicilina deve ser aumentada para 90mg/kg/dia se houve algum tratamento com amoxicilina nos três meses anteriores; rotina de frequentar creche; idade inferior a 2 anos; frequência alta de pneumococo resistente na comunidade."
          />
          <Subsubsection title="Outras opções terapêuticas:">
            <List>
              <LItem>
                Azitromicina – 10mg/kg/dia de 24 em 24 horas, por 5 dias;
              </LItem>
              <LItem>
                Cefuroxima – 30mg/kg/dia de 12 em 12 horas, por 10 dias;
              </LItem>
              <LItem>
                Ceftriaxona – 50mg/kg/dia de 24 em 24 horas, por 3 dias;
              </LItem>
              <LItem>
                Claritromicina – 15mg/kg/dia, de 12 em 12 horas, por 10 dias;
              </LItem>
              <LItem>
                Clindamicina – 30mg/kg/dia de 8 em 8 horas, por 3 dias.
              </LItem>
            </List>
          </Subsubsection>
        </Subsection>
        <Subsection title="Corticosteróides, Anti-Histamínicos e Descongestionantes">
          <P>Não são comumente utilizados.</P>
          <P>
            Com o tratamento adequado, espera-se diminuição dos sinais/sintomas
            dentro das primeiras 48 a 72 horas. A permanência de febre é fator
            importante a ser observado. Outro critério a ser considerado, é a
            piora do aspecto da membrana timpânica, efusão ou perfuração com
            drenagem de material purulento. A otoscopia pode estar alterada por
            até 3 meses após o episódio agudo.
          </P>
        </Subsection>
      </Section>
      <Section title="Diagnóstico Diferencial">
        <P>
          O diagnóstico diferencial da OMA é a OME, ambas podem evoluir de uma
          para outra sem quaisquer achados físicos determinantes de
          diferenciação. A diferenciação entre as duas condições pode ser
          prejudicada, na prática clínica, por dificuldade na otoscopia
          (agitação da criança ou alterações no conduto auditivo) e/ou por falta
          de prática do examinador.
        </P>
      </Section>
      <Section title="Complicações">
        <P>
          Abscesso cerebral, Labirintite, Mastoidite, Otite média supurativa
          crônica, Sinusite, Meningite.
        </P>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Araujo JM. Infecções das vias aéreas superiores. IN: Rotinas ambulatoriais em infectologia para o pediatra; Cruz MLS, Cardoso CAA, Gaspar MCS, organizadores. São Paulo: Editora Atheneu. 2012. p.159-81."
        />
        <Reference
          idx={2}
          body="Araujo PMFL, Araujo CNF. Emergências em otorrinolaringologia. IN: Sociedade Brasileira de Clínica Médica; Lopes AC, Guimarães HP, Lopes RD, Vendrame LS, organizadores. PROURGEM Programa de Atualização em Medicina de Urgência e Emergência: Ciclo 8. Porto Alegre: Artmed Panamericana; 2015. p.120-60. (Sistema de Educação Continuada a Distância, v.3)."
        />
        <Reference
          idx={3}
          body="Berezin EN. Infecções de vias aéreas superiores. IN: Sociedade Brasileira de Pediatria; Campos Junior D, Burns DAR, Lopez FA, organizadores. TRATADO DE PEDIATRIA. Barueri: Manole; 2014. p.1478-81."
        />
        <Reference
          idx={4}
          body="Oliveira RG. Otite. Blacbook Pediatria. 5ed. Belo Horizonte: Black Book Editora. 2014. p. 354-8."
        />
        <Reference
          idx={5}
          body="Pechebea MD, Vita WP. Otite média, Sinusite e Tonsilite Agudas. IN: Sociedade Brasileira de Pediatria; Simon Junior H, Pascolat G, organizadores. PROEMPED Programa de Atualização em Emergência Pediátrica: Ciclo 2. Porto Alegre: Artmed Panamericana; 2018. p.55-103. Sistema de Educação Continuada a Distância, v.2)."
        />
        <Reference
          idx={6}
          body="Ramos BD. Otite Média aguda recorrente. IN: Sociedade Brasileira de Pediatria; Oliveira  Filho EA, Nobrega M, organizadores. PROPED Programa de Atualização em Terapêutica Pediátrica: ciclo2. Porto Alegre: Artmed Panamericana; 2015. p.103-25. (Sistema de Educação Continuada a Distância, v.1)"
        />
        <Reference
          idx={7}
          body="Ramos BD, Pereira MBR. Otite Média Aguda Recorrente. IN: Sociedade Brasileira de Pediatria; Ramos BD, organizador. PRONAP Programa Nacional de Educação Continuada em Pediatria: Ciclo 18. São Paulo: 2015. p.18-29. Sistema de Educação Continuada a Distância, n.1."
        />
        <Reference
          idx={8}
          body="Santos FC, Pinheiro MNSM, Soares VYR. Conduta Atual na otite media aguda. IN: Associação Brasileira de Otorrinolaringologia e Cirurgia Cérvico-Facial; Lessa MM, Pinna FR, Abrahão M, Caldas Neto SS, organizadores. PRO-ORL Programa de Atualização em Otorrinolaringologia: Ciclo 11. Porto Alegre: Artmed Panamericana; 2016. p.53-75. (Sistema de Educação Continuada a Distância, v. 1)."
        />
        <Reference
          idx={9}
          body="Toy EC et al. Casos clínicos em pediatria. 4ed. Porto Alegre: AMGH Editora Ltda. 2014. p.109-15."
        />
      </Section>
    </Routine>
  )
}
