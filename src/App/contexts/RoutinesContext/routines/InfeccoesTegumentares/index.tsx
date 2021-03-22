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

export default function InfeccoesTegumentares(): JSX.Element {
  return (
    <Routine
      id="infeccoes-tegumentares"
      name="Infecções Tegumentares e Miosites"
      categories={['infectologia', 'emergencia']}
      authors={['iuri', 'marco']}
      tags={['celulite', 'erisipela', 'miosite', 'mialgia']}
    >
      <Section title="Conceito, etiologia e fatores de risco">
        <P>
          Doenças infecciosas de pele, anexos e tecido subcutâneo, de
          apresentação heterogênea, cujos agentes etiológicos mais frequentes
          são o <Italic>Staphylococcus aureus</Italic> e o{' '}
          <Italic>Streptococcus pyogenes</Italic>, beta-hemolítico, do grupo A.
          Os principais fatores de risco na infância são: crianças abaixo de 5
          anos, em especial as do gênero masculino e as que habitualmente se
          expoêm a risco de pequenos traumas ou acidentes. mais comum em climas
          quentes.
        </P>
      </Section>
      <Section title="Diagnóstico Clínico">
        <P>Sinais e sintomas frequentes:</P>
        <List>
          <LItem>
            <Bold>Abscesso:</Bold> coleção profunda de pus, de tamanho variável,
            proeminente ou não. Há rubor, calor, dor e depois flutuação.
          </LItem>
          <LItem>
            <Bold>Impetigo:</Bold> infecção superficial da pele,
            caracteristicamente com vesículas, bolhas e pústulas, as quais se
            rompem formando crostas.
          </LItem>
          <LItem>
            <Bold>Ectima:</Bold> infecção crostosa que envolve epiderme e derme
            e que à escarificação, revela abaixo das crostas uma superfície
            ulcerada.
          </LItem>
          <LItem>
            <Bold>Foliculite:</Bold> infecção do folículo piloso, de caráter
            limitado e pequena extensão.
          </LItem>
          <LItem>
            <Bold>Furúnculo e Antraz:</Bold> infecção do folículo piloso e
            tecidos adjacentes, com reação inflamatória local e, às vezes,
            formação de abscessos.
          </LItem>
          <LItem>
            <Bold>Erisipela:</Bold> infecção da derme, área de eritema bem
            definida, de aspecto vermelho-violáceo, dolorosa, às vezes com porta
            de entrada.
          </LItem>
          <LItem>
            <Bold>Celulite:</Bold> infecção da derme e tecido subcutâneo,
            clinicamente indistinguível da erisipela na maioria dos casos.
          </LItem>
          <LItem>
            <Bold>Miosite viral:</Bold> inflamação difusa da musculatura,
            geralmente bilateral, especialmente em panturrilhas, sem importantes
            alterações ao exame, à exceção de dor local e dificuldade de marcha.
            Por vezes, a criança pode recusar-se a levantar por medo da dor, o
            que preocupa muito os responsáveis. Diferente do adulto, é
            autolimitada, dura poucos dias, embora as enzimas musculares podem
            manter-se alteradas por vários dias. Os adenovírus e os arbovírus
            são os principais agentes etiológicos.
          </LItem>
          <LItem>
            <Bold>Miosites bacterianas:</Bold> são infecções bacterianas graves,
            que inicialmente podem simular um quadro de celulite, podem envolver
            qualquer feixe muscular, mas são mais comuns na coxa e no braço.
            Ocorre intenso edema do membro afetado e muita dor, mas pode ser
            difícil de notar hiperemia no início. Em muitos casos, há
            leucocitose com desvio à esquerda. Ao longo de alguns dias há
            tendência para supuração, mas nem sempre ocorre espontaneamente,
            sendo necessário indicar drenagem cirúrgica. Miosites bacterianas na
            coxa evoluem com coleções purulentas laminares que nem sempre são
            fáceis de perceber ao exame físico, de modo que é necessário
            solicitar ultrassonografia para que se possa indicar drenagem
            cirúrgica.
          </LItem>
        </List>
      </Section>
      <Section title="Diagnóstico Laboratorial">
        <P>
          Quase sempre dispensável, todavia o hemograma pode demonstrar sinais
          sugestivos de infecção bacteriana. Ultrassonografia pode ser útil para
          avaliação de coleções de pus. Na miosite viral é comum se observar
          leucopenia e aumento de TGO, TGP, DHL e CPK. Estas enzimas se elevam
          devido a inflamação do tecido muscular.
        </P>
      </Section>
      <Section title="Critérios de Internação">
        <P>
          Crianças com lesões extensas (que tomem um segmento inteiro de um
          membro, por exemplo) ou com estado geral comprometido, em especial as
          menores de 2 anos. Intolerância à medicação oral ou falha de
          tratamento oral prévio.
        </P>
      </Section>
      <Section title="Complicações Mais Frequentes">
        <P>
          Necessidade de drenagem cirúrgica das coleções, afecção contígua da
          fáscia muscular, o que geralmente causa dor incapacitante e
          imobilidade.
        </P>
        <P>
          Podem ocorrer com síndromes tóxicas como na escarlatina, na síndrome
          da pele escaldada e na síndrome do choque tóxico.
        </P>
        <P>
          No caso de infecções pelo estafilococo CA-MRSA (
          <Italic>S. aureus</Italic> resistente a oxacilina adquirido da
          comunidade) pode ocorrer progressão muito rápida da infecção
          tegumentar com áreas de necrose, já que esse patógeno produz a LPV
          (leucocidina Panton-Valentine), uma enzima proteolítica.
        </P>
        <P>
          Nos casos associados à varicela, pode ocorrer expansão rápida das
          lesões e formação de múltiplos óstios de drenagem purulenta. Em casos
          raros, pode ocorrer a evolução para fasciíte necrotizante.
        </P>
      </Section>
      <Section title="Tratamento">
        <P>
          Para satisfatória erradicação dos gram-positivos de pele, é
          recomendada a duração do tratamento em 10 dias.
        </P>
        <List>
          <LItem>1ª escolha: cefazolina 100 mg/kg/dia, de 6/6h</LItem>
          <LItem>
            2ª escolha: clindamicina 10 mg/kg/dose, de 8/8h ou 6/6h (1ª escolha
            em caso de CA-MRSA)
          </LItem>
          <LItem>
            3ª escolha: oxacilina 100 a 200 mg/kg/dia, de 6/6h, quando o agente
            for conhecido (<Italic>S. aureus</Italic>)
          </LItem>
        </List>
        <P>
          Nos casos de fasciíte necrotizante ou de sepse grave, é possível a
          associação de gentamicina 5 - 7,5 mg/kg/dia, em dose única como
          adjuvante.
        </P>
        <P>
          Complementação do tratamento domiciliar após a alta: cefalexina 50 a
          100 mg/kg/dia, de 6/6h ou clindamicina para os casos de resistência.
        </P>
        <P>
          Observação: a clindamicina deve ser administrada preferencialmente por
          via intravenosa (IV). A formulação oral manipulada pode ser tentada,
          mas é mais apropriada para terminar os tratamentos iniciados por via
          IV, uma vez que causa bastante dispepsia e o sabor é muito amargo.
        </P>
      </Section>
      <Section title="Critérios de Alta">
        <P>
          Paciente se mantiver afebril por 48h, com redução do calor e rubor
          locais. Na absoluta maioria dos casos, não é necessário controle de
          hemograma.
        </P>
        <Subsection title="Prognóstico e Orientações para o Seguimento">
          <P>
            É recomendado um retorno precoce para avaliação dos casos que
            receberam alta em uso de antibioticoterapia oral como complementação
            do tratamento, o que permite a identificação de falhas terapêuticas.
          </P>
        </Subsection>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Farhat CK, Carvalho ES, Carvalho LH, Succi RC, editors. Infectologia Pediátrica. 3.ed. São Paulo: Atheneu; 2007."
        />
        <Reference
          idx={2}
          body="Krugman S, Katz SL, Gershon AA, Wilfert CM. Doenças Infecciosas na Infância. 9.ed. Rio de Janeiro: Guanabara Koogan; 1994."
        />
      </Section>
    </Routine>
  )
}
