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

export default function IVAS1(): JSX.Element {
  return (
    <Routine
      id="ivas1"
      name="IVAS 1 - Faringotonsilite Aguda"
      category="pneumologia"
      authors={['renato']}
      tags={['amigdalite', 'tonsilite', 'faringite', 'faringoamigdalite']}
    >
      <Section title="Introdução">
        <P>
          As infecções faringotonsilianas são um grupo de enfermidades que
          desenvolvem processos inflamatórios nas vias respiratórias superiores,
          acometendo a faringe, as tonsilas e os tecidos adjacentes. As causas
          são variadas, mas o quadro clínico geralmente é similar, o que torna
          difícil, clinicamente, definir se há ou não a necessidade de
          tratamento antimicrobiano.
        </P>
      </Section>
      <Section title="Definições">
        <P>
          É geralmente uma doença autolimitada e cura espontânea; porém, quando
          a etiologia é o <Italic>Streptococcus B-hemolítico do grupo A</Italic>{' '}
          (SBHGA), também conhecido como <Italic>Streptococcus pyogenes</Italic>
          , há necessidade de antibioticoterapia e as complicações não
          supurativas são preocupantes.
        </P>
      </Section>
      <Section title="Epidemiologia">
        <P>
          A infecção pelo SBHGA pode ocorrer em todas as idades, porém é mais
          comum nas crianças com idade entre 5 e 11 anos, sendo rara em menores
          de 3anos. A maioria ocorre no final do inverno e início da primavera.
        </P>
      </Section>
      <Section title="Etiologia">
        <P>
          Os vírus são a causa mais comum (75%) em todas as faixas etárias,
          sendo os patógenos mais comuns os vírus respiratórios como influenza A
          e B, adenovírus (mais comum em menores de 3anos de idade), vírus
          sincicial respiratório, herpes vírus 1 e 2; bem como vírus{' '}
          <Italic>coxsackie</Italic> A e o vírus <Italic>Epstein-Barr</Italic>{' '}
          (mais comum em maiores de 3anos). Há ainda, embora menos comum nos
          dias atuais, o <Italic>Corynebacterium diphtheriae</Italic> como
          possível agente etiológico.
        </P>
        <P>
          O SBHGA corresponde aproximadamente a 15-30% de todos os episódios e é
          responsável por importantes complicações, sendo o agente bacteriano
          mais comum; todavia, outras bactérias também podem estar implicadas na
          etiologia, como <Italic>Mycoplasma pneumoniae e</Italic>{' '}
          <Italic>Chlamydia</Italic>.
        </P>
      </Section>
      <Section title="Quadro Clínico">
        <P>
          Deve-se suspeitar em todo paciente com odinofagia, febre e dor para
          engolir. Existem indícios clínicos que auxiliam a diferenciação, mas
          nenhum conjunto de achados é suficientemente sensível ou específico
          para diagnóstico de certeza; portanto, achados clínicos e
          epidemiológicos são de supra importância.
        </P>
        <Table
          colWidths={[150, 200, 200]}
          header={[
            'Sinais e Sintomas',
            'Faringotonsilite\nEstreptocócica',
            'Faringotonsilite\nNão Estreptocócica'
          ]}
          data={[
            [
              'Idade',
              'Rara antes dos 2 anos\nPico entre 5 e 11 anos',
              'Qualquer idade'
            ],
            [
              'Febre e Prostração',
              'Pode ser > 39°C',
              'Normalmente não tão alta'
            ],
            ['Início', 'Súbito', 'Gradual'],
            [
              'Prostração',
              'Prostração mesmo nos períodos afebris',
              'Prostração restrita aos períodos febris'
            ],
            ['Sintomas gripais', 'Geralmente ausentes', 'Frequentes'],
            [
              'Dor de garganta',
              'Mais intensa e pode dificultar a deglutinação e alterar a voz',
              'Normalmente leve ou moderado'
            ],
            [
              'Hipertrofia e Hiperemia das tonsilas',
              'Hiperemia geralmente restrita às tonsilas',
              'Hiperemia geralmente se estende aos pilares anteriores'
            ],
            [
              'Exsudatos, pontos e placas brancas',
              'Presentes em 50 a 90% dos casos\nDado clínico isolado ',
              'Podem ocorrer'
            ],
            [
              'Adenomegalia',
              'Adenomegalia dolorosa no ângulo da mandíbula',
              'Adenomegalia mais discreta'
            ],
            [
              'Outros sintomas',
              'Halitose é comum',
              'Halitose é rara Conjutivite'
            ]
          ]}
          title="Aspectos Clínicos e Epidemiológicos"
        />
        <P>
          De acordo com aspectos inflamatórios, pode-se classificar as
          faringotonsilites em:
        </P>
        <List>
          <LItem>
            <Bold>Eritematosas:</Bold> observam-se hiperemia e congestão da
            superfície da faringe e das tonsilas. Principais agentes: virais.
          </LItem>
          <LItem>
            <Bold>Eritematopultáceas:</Bold> observam-se hiperemia e edema
            associados a exsudato amarelado não aderente nas criptas e na
            superfície das tonsilas. Principais agentes: SBHGA e vírus{' '}
            <Italic>Epstein-Barr</Italic>.
          </LItem>
          <LItem>
            <Bold>Pseudomembranosas:</Bold> observam-se placas esbranquiçadas
            aderentes ao tecido das tonsilas, que pode invadir faringe palato e
            úvula. Principais agentes:{' '}
            <Italic>Corynebacterium diphtheriae</Italic>.
          </LItem>
          <LItem>
            <Bold>Ulcerosas:</Bold> Observam-se úlceras, que podem ser
            superficiais, com muitas vesículas. Principais agentes: vírus
            Coxsackie A.
          </LItem>
          <LItem>
            <Bold>Febre Faringoconjuntival:</Bold> faringite causada por
            adenovírus caracterizada pela presença de febre, sintomas
            respiratórios (coriza e tosse), hiperemia da faringe, hiperplasia
            das tonsilas com exsudato, adenomegalia cervical e conjuntivite. O
            quadro de faringite tem duração de 7dias, a conjuntivite até 14
            dias, com resolução espontânea.
          </LItem>
          <LItem>
            <Bold>Herpes Simples:</Bold> causada pelo herpes vírus 1 e 2, sendo
            comum nas crianças pequenas e caracteriza-se por febre e
            gengivoestomatite com vesículas, que evoluem com ulceração da lesão,
            localizadas na boca, incluindo lábios e orofaringe posterior. As
            lesões são extremamente dolorosas, podendo dificultar a ingestão de
            líquidos, resultando em desidratação. A duração da doença é de 2
            semanas.
          </LItem>
          <LItem>
            <Bold>Herpangina:</Bold> causada pelo vírus{' '}
            <Italic>Coxsackie A</Italic> é caracterizada por pequenas vesículas
            no palato mole, na úvula e nos pilares amigdalianos, acompanhadas de
            febre elevada. A resolução espontânea ocorre em 7 dias.
          </LItem>
          <LItem>
            <Bold>Mononucleose:</Bold> causada pelo vírus{' '}
            <Italic>Epstein Barr</Italic> e pode evoluir como uma faringite
            isolada ou como uma doença sistêmica mais grave, como febre mais
            prolongada, prostração, desânimo, astenia. Normalmente, há presença
            de linfonodos em região cervical posterior, odinofagia, tonsilas
            palatinas e faríngeas muito aumentadas, com ou sem exsudato,
            hepatomegalia e esplenomegalia e na anamnese, frequentemente há o
            relato de tratamento mal-sucedido com antibióticos, seguido do
            surgimento de exantema. O hemograma apresenta aumento da contagem de
            leucócitos com mais de 10% de atipia linfocitária.
          </LItem>
          <LItem>
            <Bold>Síndrome mão-pé-boca:</Bold> causada pelo vírus{' '}
            <Italic>Coxsackie</Italic> A e apresenta-se com vesículas em
            orofaringe concomitantemente, presença de papulovesículas em palmas
            e plantas, às vezes no tronco, com resolução em 7 dias.
          </LItem>
        </List>
        <P>
          <Bold>Síndrome PFAFA</Bold> ("Periodic Fever, Adenitis, Pharyngitis,
          Aphtous Stomatitis"): é caracterizada por febre periódica, estomatite
          aftosa, faringite e adenite cervical e ocorre esporadicamente, em
          crianças de 2 a 6 anos. A etiologia é desconhecida. O tratamento dá-se
          com Prednisona (1 a 2mg/kg/dia). A periodicidade e a intensidade
          diminuem com o tempo, com resolução espontânea após 3 a 5 anos do
          início dos sintomas ou na adolescência.
        </P>
      </Section>
      <Section title="Diagnóstico">
        <P>
          A cultura da secreção colhida da orofaringe, através de swab
          orofaríngeo, é considerado padrão ouro para diagnóstico de
          faringotonsilite estreptocócica. Se realizada corretamente, alcança
          especificidade de 95% e sensibilidade de 85%.
        </P>
        <P>
          Um swab é usado para o teste rápido para detecção de SBHGA. Se o teste
          for positivo, indica-se uso de antibioticoterapia. Se o teste rápido
          for negativo, o segundo swab orofaríngeo é encaminhado para cultura
          para confirmação etiológica (resultado em até 48 horas). Importante
          ressaltar que aguardar o resultado da cultura{' '}
          <Italic>por 48 horas</Italic> para o início da terapia não aumenta a
          chance de complicação. Destaca-se, também, que nem a cultura nem o
          teste rápido de detecção do SBHGA são capazes de diferenciar doentes
          de portadores.
        </P>
        <P>
          Conforme as orientações da Associação Americana de Pediatria (2012),
          os testes de faringotonsilite para SBHGA{' '}
          <Bold>não são recomendados:</Bold>
        </P>
        <List>
          <LItem>
            Para pacientes com faringotonsilite aguda com características
            clínicas e epidemiológicas que sugerem fortemente etiologia viral
            (tosse, rinorreia, rouquidão, úlceras orais);
          </LItem>
          <LItem>
            Para crianças menores de 3 anos de idade (exceto se pais/irmãos com
            infecção por SBHGA).
          </LItem>
        </List>
      </Section>
      <Section title="Tratamento">
        <P>
          Caso se suspeite de causa viral, o tratamento será basicamente
          sintomático, com analgésicos e antitérmicos (Dipirona, Ibuprofeno ou
          Paracetamol), para alívio principalmente, da dor faríngea, que pode
          dificultar a ingestão de alimentos e líquidos.
        </P>
        <P>
          O tratamento da faringotonsilite aguda com antibiótico somente tem
          propósito quando o agente etiológico é bacteriano, principalmente o
          SBHGA. O tratamento de escolha é penicilina, exceto se o paciente for
          alérgico.
        </P>
        <P>
          O tratamento com antibióticos deve ser instituído assim que é
          realizado o diagnóstico de etiologia bacteriana ou, quando não for
          possível esse diagnóstico de certeza, nos casos em que o exame físico
          e a epidemiologia assim sugerirem.
        </P>
        <Table
          colWidths={[110, 150, 100]}
          header={['Antibiótico', 'Recomendação', 'Dose Máxima']}
          data={[
            [
              'Penicilina G Benzatina',
              '< 25kg 🡪 600.000 IM 1x\n> 25kg 🡪 1.200.000 IM 1x',
              ''
            ],
            [
              'Penicilina V',
              '< 12 anos: 250 mg 2-3x/dia por 10 dias\n> 12 anos: 500 mg 2x/dia por 10 dias',
              ''
            ],
            [
              'Amoxicilina',
              '50mg/kg/dia 2 ou 3x/dia por 10 dias',
              '1000 mg/dia'
            ],
            ['Claritromicina', '15mg/kg/dia 2x/dia por 10 dias', '500 mg/dia'],
            ['Azitromicina', '10mg/kg/dia 1x/dia por 5 dias', '500 mg/dia'],
            ['Cefadroxila', '30mg/kg/dia 2x/dia por 10 dias', '1000 mg/dia'],
            ['Cefalexina', '40mg/kg/dia 2x/dia por 10 dias', '1000 mg/dia'],
            ['Clindamicina', '30mg/kg/dia 3x/dia por 10 dias', '500 mg/dia']
          ]}
          title="Antibióticos Recomendados para Tratamento da Faringotonsilitepor Sbhga"
          caption="A terapia adjuvente com corticosteróide não é indicada"
        />
      </Section>
      <Section title="Diagnóstico Diferencial">
        <P>
          Mononucleose-<Italic>like</Italic> (rubéola, sarampo, citomegalovírus,
          HIV, etc).
        </P>
      </Section>
      <Section title="Complicações">
        <Table
          colWidths={[150, 150]}
          header={['Supurativa', 'Não Supurativa']}
          data={[
            [
              'Linfadenite cervical (eritema, edema e flutuação)',
              'Febre reumática'
            ],
            [
              'Abscesso peritonsilar (dor e dificuldade para engolir mais intensa, voz anasalada, tonsilas anteriores proeminentes e deslocamento da úvula para o lado não afetado)',
              'Glomerulonefrite aguda pós-estreptocócica'
            ],
            [
              'Abscesso retrofaríngeo',
              'Outras complicações (Artrite Reacional)'
            ],
            ['Otite Média Aguda', ''],
            ['Mastoidite', ''],
            ['Sinusite aguda', ''],
            ['Pneumonia por SBHGA (rara)', '']
          ]}
          title="Complicações da Faringotonsilite por SBHGA"
        />
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
          body="Oliveira RG. Otite. Blacbook Pediatria. 5ed. Belo Horizonte: Black Book Editora. 2014. p. 350-3."
        />
        <Reference
          idx={5}
          body="Oliveira SKF, Magalhães CS. Síndrome PFAPA. IN: Sociedade Brasileira de Pediatria. Documento Científico Departamento Científico de Reumatologia. 2017. p.1-5."
        />
        <Reference
          idx={6}
          body="Pechebea MD, Vita WP. Otite média, Sinusite e Tonsilite Agudas. IN: Sociedade Brasileira de Pediatria; Simon Junior H, Pascolat G, organizadores. PROEMPED Programa de Atualização em Emergência Pediátrica: Ciclo 2. Porto Alegre: Artmed Panamericana; 2018. p.55-103. Sistema de Educação Continuada a Distância, v.2)."
        />
        <Reference
          idx={7}
          body="Ramos BD, Pereira MBR. Otite Média Aguda Recorrente. IN: Sociedade Brasileira de Pediatria; Ramos BD, organizador. PRONAP Programa Nacional de Educação Continuada em Pediatria: Ciclo 18. São Paulo: 2015. p.18-29. Sistema de Educação Continuada a Distância, n.1."
        />
      </Section>
    </Routine>
  )
}
