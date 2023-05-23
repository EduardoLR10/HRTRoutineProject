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

export default function EmergenciaDoChoque(): JSX.Element {
  return (
    <Routine
      id="emergencia-do-choque"
      name="Emergência do Choque"
      categories={['emergencia']}
      authors={['luiz']}
      tags={[]}
    >
      <Section title="Introdução">
        <P>
          O choque é definido por uma condição crítica onde a perfusão tecidual
          de oxigênio e nutrientes está inadequada. Frequentemente, mas nem
          sempre, há comprometimento metabólico de órgãos-alvos e/ou
          periféricos.
        </P>
        <P>
          Quanto mais precocemente o choque for identificado e tratado, maior
          será a chance de um bom desfecho. Se não houver reconhecimento e
          tratamento precoce, poderá evoluir rapidamente para uma insuficiência
          cardiopulmonar, sucedida de parada cardiorrespiratória, tornando o
          prognóstico sombrio.
        </P>
        <P>
          A definição do choque não requer a presença de hipotensão, a PA
          sistólica pode estar normal e até aumentada, mas a queda da PA
          sistólica para valores abaixo do mínimo aceitável – choque hipotensivo
          – pode indicar iminência de parada cardiorrespiratória - PCR (tabela
          1).
        </P>
        <Table
          colWidths={[150, 100]}
          header={['Idade', 'PA Sistólica']}
          data={[
            ['Neonato a termo (0 a 28 dias)', '60 mmHg'],
            ['Bebês 1 a 12 meses', '70 mmHg'],
            ['Crianças 1 a 10 anos', '70 + (2 x idade) mmHg'],
            ['Maior 10 anos', '90 mmHg']
          ]}
          title="Tabela 1. Pressão Arterial Sistólica Normal - percentil 5"
        />
        <P>
          A abordagem deverá seguir as diretrizes do PALS 2020 – Pedriatic
          Advanced Life Support. A sequência AVALIAR, DIAGNOSTICAR E INTERVIR
          irá ajudar a conduzir melhor cada caso. Deve-se atentar para os sinais
          da progressão do choque pois, além da redução da PA, a frequência
          cardíaca (tabela 2) e a perfusão sistêmica central e periférica
          (tabela 3) podem indicar a evolução do quadro.
        </P>
        <Table
          colWidths={[125, 100, 100]}
          header={['Idade', 'Em vigília', 'Em sono']}
          data={[
            ['Neonato', '100 a 205', '90 a 160'],
            ['Bebês (até 1 ano)', '100 a 180', '90 a 160'],
            ['1ª Infância (1 a 2 anos)', '98 a 140', '80 a 120'],
            ['Pré-escolar (2 a 5 anos)', '80 a 120', '65 a 100'],
            ['Escolar (5 até adolesc)', '75 a 118', '58 a 90'],
            ['Adolescente', '60 a 100', '50 a 90']
          ]}
          title="Tabela 2. Frequências Cardíacas Normais"
        />
        <P>
          A avaliação da frequência cardíaca deverá ser avaliada palpando os
          pulsos, levando em consideração fatores como a febre, a dor, o medo,
          dentre outros e também atentando para o ritmo cardíaco normal
          observado no monitor. A frequência lenta para a idade é classificada
          como bradicardia, a rápida como taquicardia e quando não há pulsos
          palpáveis, considerar PCR.
        </P>
        <Table
          colWidths={[150, 150]}
          header={['', '']}
          data={[
            [
              'Nível de consciência - resposta',
              '- Alerta\n- Verbal\n- Dor\n- Inconsciente'
            ],
            [
              'Débito urinário',
              '- Bebês e criança 1,5 a 2 ml/kg/hora\n- Adolescentes 1 ml/kg/hora'
            ],
            ['Cor pele', '- Corada\n- Moteada\n- Pálida\n- Cianótica'],
            ['Temperatura pele', '- Normal\n- Fria\n- Quente'],
            ['Pulsos', '- Cheios\n- Finos\n- Ausentes'],
            [
              'Tempo de enchimento capilar',
              '- Até 2 segundos\n- Mais que 2 segundos'
            ]
          ]}
          title="Tabela 3. Perfusão Sistêmica Central e Periférica"
        />
        <P>
          São 4 situações comuns de complicações circulatórias: a) choque
          hipovolêmico, b) choque cardiogênico, c) choque distributivo e d)
          choque obstrutivo. A seguir descreveremos cada situação.
        </P>
      </Section>
      <Section title="Choque Hipovolêmico">
        <P>
          Se caracteriza pela depleção do volume intravascular. É o mais comum
          dos choques na pediatria.
        </P>
        <P>
          A perda de volume devido a vômitos e diarreia, a baixa ingesta e até a
          hemorragia são os fatores desencadeantes mais comuns.
        </P>
        <P>
          A redução da pré-carga leva a uma redução do débito cardíaco, sendo a
          taquicardia e o aumento da resistência vascular sistêmica periférica -
          RVS (palidez cutânea, pele fria, pulsos finos e tempo de enchimento
          capilar lento) os principais mecanismos compensatórios.
        </P>
        <P>
          O tratamento constitui na coibição das perdas e a reposição volêmica
          em torno de 20 ml/kg de soro fisiológico 0,9% ou ringer lactato em 10
          a 20 minutos e reavaliações frequentes para verificar a necessidade de
          repetir o volume.
        </P>
      </Section>
      <Section title="Choque Cardiogênico">
        <P>
          Se refere a uma redução do débito cardíaco secundária à disfunção
          cardíaca ou uma falha da bomba. São causas comuns a cardiopatia
          congênita, miocardite, miocardiopatias pós infecciosas, arritmias e
          tóxicas.
        </P>
        <P>
          Assim como no choque hipovolêmico os sintomas são semelhantes e até
          mais acentuados. Os sinais de insuficiência cardíaca se instalam com
          mais rapidez, como a hepatomegalia, edema de extremidades e edema
          pulmonar. O rebaixamento do nível de consciência e do débito urinário
          indicam maior gravidade!
        </P>
        <P>
          O tratamento se baseia na reposição de volume, mas com bolus menores e
          reavaliações mais frequentes. Drogas vasoativas devem ser manuseadas
          com ajuda de um especialista desde o início do tratamento com auxílio
          de ecocardiografia e outros estudos.
        </P>
      </Section>
      <Section title="Choque Distributivo">
        <P>
          Se caracteriza pela distribuição inadequada do volume sanguíneo, com
          perfusão inadequada de órgãos e tecidos (principalmente o leito
          esplâncnico). Ocorre um sequestro volêmico em território venoso e
          consequentemente uma diminuição da pré-carga e do débito cardíaco.
          Ocorre na sepse, na anafilaxia e no traumatismo raquimedular. No
          início do choque distributivo a criança apresenta uma menor RVS, ou
          seja, vasodilatação, representado por pulsos cheios e extremidades
          quentes e coradas e tempo de enchimento capilar menor que 3 segundos –
          choque quente; à medida que o quadro progride, a hipovolemia e a
          disfunção miocárdica resultam numa diminuição do débito cardíaco,
          levando a um aumento da RVS, resultando em uma redução do fluxo
          sanguíneo cutâneo, tornando as extremidades frias, pálidas e pulsos
          finos e tempo de enchimento capilar maior que 2 segundos – choque
          frio; como acontece no choque hipovolêmico e cardiogênico.
        </P>
        <P>
          A sepse representa uma causa importante de choque distributivo em
          pediatria e tem como causa um agente infeccioso ou estímulo
          inflamatório que desencadeia dilatação dos vasos sanguíneos, disfunção
          miocárdica, distúrbio de coagulação e permeabilidade vascular
          aumentada. A suspeita aumenta quando uma síndrome infecciosa é
          evidente pela história, exame físico, exames laboratoriais e de
          imagem. A evolução pode durar algumas horas até alguns dias. A
          insuficiência suprarrenal por trombose e hemorragia leva a uma queda
          abrupta do cortisol, um importante hormônio na resposta orgânica ao
          stress, levando s disfunções referidas. Na anafilaxia, as respostas
          são as mesmas da sepse, porém desencadeadas por um fármaco ou outro
          agente tóxico. Ocorre em questão de segundos ou minutos após a
          exposição. A vasoconstrição pulmonar aumenta abruptamente a pós-carga
          direita, diminui a pré-carga esquerda e consequentemente, o débito
          cardíaco. Pode ocorrer morte imediata. Angioedema, estridor, sibilos e
          urticária são sinais específicos. No choque neurogênico uma lesão
          total ou parcial da medula acima do nível T6 rompe a inervação do
          sistema nervoso simpático dos vasos sanguíneos e do coração,
          resultando em vasodilatação descontrolada e impede de ocorrer uma
          taquicardia compensatória, oposta do que acontece no choque
          hipovolêmico. Taquipneia com uso acentuado do diafragma pode ocorrer,
          pois os músculos torácicos estão paralisados.
        </P>
        <P>
          A reposição volêmica no choque distributivo costuma seguir as mesmas
          regras. Drogas vasoativas podem estar indicadas.
        </P>
      </Section>
      <Section title="Choque Obstrutivo">
        <P>
          Se refere a estados que prejudicam fisicamente a chegada do fluxo
          sanguíneo ao coração ou o seu bombeamento pelo mecanismo de obstáculo,
          levando a uma redução significativa do débito cardíaco. São exemplos
          de causa o tamponamento pericárdico, o pneumotórax, embolia pulmonar
          maciça, coartação de aorta, ventrículo esquerdo hipoplásico e
          cardiopatias dependentes do canal arterial. O baixo débito apresenta
          resposta compensatória semelhante ao choque hipovolêmico, mas com
          história incompatível com perdas de volume. À medida que se progride
          alguns achados podem aparecer, como o esforço respiratório e sinais de
          congestão vascular. Dependendo de cada caso, estas causas são
          suspeitadas, como a cardiopatia congênita nos recém-nascidos, o
          tamponamento pericárdico e o pneumotórax em vítimas de trauma. Sem
          identificação precoce e tratamento imediato, crianças com este tipo de
          choque progridem rapidamente para insuficiência cardiopulmonar e PCR.
        </P>
      </Section>
      <Section title="Tratamento">
        <P>
          Qualquer que seja o tipo de choque, o tratamento visa melhorar a
          oxigenação e distribuição de nutrientes aos tecidos, bem como carrear
          as escórias para que sejam eliminadas, reverter as anormalidades de
          perfusão e evitar a progressão para a PCR. A rapidez na avaliação,
          diagnóstico e tratamento é crucial para um bom prognóstico.
        </P>
        <P>
          Os sinais de alerta dos mecanismos compensatórios devem estar sempre
          em mente dos socorristas, são eles:
        </P>
        <List>
          <LItem>Taquicardia crescente;</LItem>
          <LItem>Pulsos periféricos diminuídos ou ausentes;</LItem>
          <LItem>Pulsos centrais fracos;</LItem>
          <LItem>Estreitamento da pressão de pulso;</LItem>
          <LItem>
            Extremidades frias, hipocoradas ou cianóticas e tempo de enchimento
            capilar prolongado;
          </LItem>
          <LItem>Rebaixamento do nível de consciência;</LItem>
          <LItem>Redução da diurese;</LItem>
          <LItem>Hipotensão arterial (achado tardio).</LItem>
        </List>
        <P>
          Os fundamentos do tratamento do choque se baseiam em otimizar o teor
          de O 2 no sangue, com ênfase no tratamento da emergência respiratória,
          reduzir a sua demanda acentuada, como acontece no esforços
          respiratório, na dor, na ansiedade e na febre; correção do volume
          intravascular e melhora da perfusão tecidual, bem como utilizar drogas
          vasoativas, como vasopressores, vasodilatadores e inodilatadores,
          corrigir os distúrbios metabólicos, como na hipoglicemia,
          hipocalcemia, hiperpotassemia e acidose metabólica que é
          característica de todas as formas de choque. A glicose é vital para o
          funcionamento cerebral e cardíaca. O cálcio é essencial para a
          contratilidade do miocárdio e tônus vascular. Cuidado com a reposição
          de hemoderivados e bicarbonato de sódio, pois pode-se provocar uma
          redução do cálcio, quanto mais se elevar o pH, menor será o cálcio
          ionizado sérico. A elevação do potássio ocorre devido à disfunção
          renal, morte celular e acidose. A contratilidade miocárdica e a
          resposta aos vasopressores podem estar reduzidas na presença de
          acidose metabólica intensa.
        </P>
        <P>
          O acesso vascular é fundamental; se um acesso periférico não for
          possível, indica-se o intraósseo.
        </P>
        <P>
          A ressuscitação volêmica, as principais drogas vasoativas e outras
          correções estão na tabela
        </P>
        <Table
          colWidths={[150, 200]}
          header={['', '']}
          data={[
            [
              'Adrenalina 1:1000',
              'Anafilaxia: 0,01 mg/kg/dose, IM - max 0,5 mg a cada 20 min, coxa.\nNeb 3 a 5 ml\nPCR: 0,1 ml/kg/dose, IV (1:10000) bolus, repetir 3 a 5 minutos\nContínua: 0,1 a 1 µcg/kg/min'
            ],
            [
              'Bicarbonao de sódio',
              'Ac metab conforme gasometria\n(15-Bic atual) x peso kg x 0,3'
            ],
            [
              'Cloreto de cálcio',
              'PCR: 20mg/kg, bolus (0,2 ml/kg) acesso central se disponível'
            ],
            ['Dobutamina', '2 a 20 µcg/kg/min-max 40 µcg/kg/min'],
            ['Dopamina', '1 a 20 µcg/kg/min-max 40 µcg/kg/min'],
            ['Furosemida', '1 a 2 mg/kg/dose a cada 6 a 12 h bolus'],
            [
              'Hidrocortisona',
              'Ins adrenal aguda: 1 a 2 mg/kg/dose seguido 25 a 250 mg/dia, bolus\nChoque: inicial 50 mg/kg, seguido 2 a 50 mg/kg conforme titulação'
            ],
            ['Glicose 25%', '2 a 4 ml/kg, bolus'],
            ['Glicose 10%', '5 a 10 ml/kg, bolus'],
            [
              'Soro fisiológico',
              '20 ml/kg/10 a 20 minutos\nReduzir se for choque cardiogênico'
            ]
          ]}
          title="Tabela 4. Drogas Vasoativas"
        />
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Pronto-socorro / coordenadores Claudio Schvartsman, Amélia Gorete Reis, Silvya Costa Lima Farah, 3 ed, Barueri, SP, editora Manole, 2018."
        />
        <Reference
          idx={2}
          body="PALS, Pediatric Advance Life Support, manual do Profissional, edição em português 15-2224, Editora Orora Visual, 3210 Innovative Way, Mesquite, Texas, EUA, AHA, 2016."
        />
        <Reference
          idx={1}
          body="http://www.bombeiros.pr.gov.br/arquivos/File/1gb/socorros/Viasaereas.pdf"
        />
        <Reference
          idx={2}
          body="American Heart Association, Suporte Avançado de vida em Pediatria. Manual do profissional, Orora visual, 3210 Innovative Way, Mesquite, Texas, EUA, edição em português, 2020"
        />
        <Reference
          idx={3}
          body="Condutas pediátricas no pronto atendimento e na terapia intensiva / editoras Luciana Rodrigues Silva, Luanda Flores da Costa, 2. ed, Santana de Parnaíaba, SP, Editora Manole, 2020."
        />
        <Reference
          idx={4}
          body=" Pronto-socorro / coordenadores Claudio Schvartsman, Amélia Gorete Reis, Sylvia Costa Lima Farat, 4. ed, Barueri, SP, Editora Manole, 2023."
        />
        <Reference
          idx={5}
          body="Urgências e Emergências Pediátricas, manual para rápida tomada de decisão / Adriana Pasmanik Eisencraft, Sylavia Costa Lima farah. - 1 ed, Rio de Janeiro, Editora Guanabara Koogan, 2021."
        />
      </Section>
    </Routine>
  )
}
