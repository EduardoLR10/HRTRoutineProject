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

export default function Crupe(): JSX.Element {
  return (
    <Routine
      id="crupe"
      name="Crupe"
      categories={['emergencia', 'pneumologia']}
      authors={['renato']}
      tags={[
        'laringite',
        'largingotraqueobronquite',
        'tosse',
        'rouca',
        'latingotraqueite'
      ]}
    >
      <Section title="Introdução">
        <P>
          Essa rotina é relacionada às obstruções infecciosas das vias aéreas
          superiores - crupe (laringite, laringotraqueite,
          laringotraqueobronquite).
        </P>
        <P>
          A obstrução infecciosa das vias aéreas superiores (VAS) caracteriza-se
          clinicamente por estridor (som respiratório produzido pela passagem de
          ar em uma via aérea de grosso calibre estreitada) respiratório, o qual
          pode ser auscultado em qualquer fase da respiração. A abordagem
          terapêutica fundamenta-se na avaliação clínica, sendo a monitoração
          contínua e as reavaliações frequentes importantes no tratamento.
        </P>
        <P>
          As crianças são suscetíveis às condições que afetam as VASs devido ao
          pequeno calibre das vias que conduzem a passagem de ar e a dinâmica do
          fluxo aéreo nessas vias. Pequenas obstruções nas vias aéreas causam
          aumentos exponenciais da resistência à entrada de ar e tornam o
          esforço respiratório mais intenso. Quando a criança, com obstrução das
          vias aéreas, torna-se agitada, o fluxo de gás e a resistência ao fluxo
          aéreo aumentam, pois, a resistência aumenta proporcionalmente com a
          taxa de fluxo de ar.
        </P>
        <P>Anatomicamente, as VAS estão divididas em três áreas principais:</P>
        <Subsection title="Vias Aérea Supraglótica">
          <P>
            Compreende as vias aéreas do nariz até justamente acima das cordas
            vocais; distende-se e sofre colapso facilmente, por não possuir
            cartilagem. O estridor, a partir de obstrução supraglótica,
            geralmente produz um som ouvido primariamente durante a inspiração.
            A salivação pode estar presente, se a obstrução ocorrer acima do
            esôfago, impedindo a deglutição. A voz abafada (de “batata quente”)
            é característica, e é gerada por obstrução acima das cordas vocais,
            que geralmente, não estão envolvidas.
          </P>
        </Subsection>
        <Subsection title="Vias Aéreas Glótica e Subglótica">
          <P>
            Estendem-se das cordas vocais à traqueia, antes de entrar na
            cavidade torácica; não sofre tanto colapso quanto a via aérea
            supraglótica, porque é sustentada por cartilagem na maior parte de
            seu trajeto. O estridor ocorre durante a inspiração ou durante a
            inspiração e a expiração. A causa mais comum de obstrução desta
            região é a síndrome do crupe. A inflamação ou obstrução da glote
            gera rouquidão (e não abafamento da voz), devido ao comprometimento
            das cordas vocais.
          </P>
        </Subsection>
        <Subsection title="Via Aérea Intratorácica">
          <P>
            Compreende a traqueia alojada dentro da cavidade torácica e os
            brônquios principais. A obstrução desse conjunto gera, durante a
            expiração, estridor mais audível.
          </P>
        </Subsection>
      </Section>
      <Section title="Síndrome do Crupe">
        <Subsection title="Definição">
          <P>
            O termo “Síndrome do Crupe” caracteriza um grupo de doenças que
            variam em envolvimento anatômico e etiológico e se manifesta
            clinicamente por rouquidão, tosse ladrante, estridor
            predominantemente inspiratório e graus variados de esforço
            respiratório. Pode ser classificada de acordo com o grau de extensão
            do acometimento das vias aéreas e de acordo com a etiologia.
          </P>
          <Table
            colWidths={[100, 200, 200]}
            header={['Denominação', 'Região Anatômica', 'Características']}
            data={[
              ['Laringite', 'Laringe', 'Rouquidão, tosse ladrante'],
              [
                'Largingotraqueíte',
                'Laringe e Traqueia',
                'Roquidão, tosse ladrante,\nEstridor predominantemente inspiratório, esforço Respiratório'
              ],
              [
                'Largingotraqueobronquite',
                'Laringe, Traquei e Bronquíolos',
                'Roquidão, tosse ladrante,\nEstridor predominantemente inspiratório, esforço Respiratório, sibilos'
              ]
            ]}
            title="Crupe Viral e Grau de Acometimento das Vias Aéreas"
          />
        </Subsection>
        <Subsection title="Epidemiologia">
          <P>
            Mais prevalente dos 3 meses aos 3 anos de idade, sendo o pico de
            incidência aos 18 meses. É um pouco mais comum no sexo masculino
            (1,4 a 2 : 1). Manifesta-se durante todo o ano, embora a maioria dos
            casos ocorra nas estações de outono e inverno. A
            Laringotraqueobronquite é a causa mais comum (90%) de obstrução das
            VASs com presença de estridor.
          </P>
        </Subsection>
        <Subsection title="Etiologia">
          <P>
            A etiologia viral de crupe é a mais comum, sendo os principais
            agentes os vírus Parainfluenza (tipos 1, 2 e 3) (70-75% dos casos),
            Influenza A e B, Vírus Respiratório Sincicial e Adenovírus. Em
            crianças maiores de 5 anos tem importância etiológica o{' '}
            <Italic>Mycoplasma pneumoniae</Italic>. Dentre os agentes
            bacterianos causadores de infecção secundária, destacam-se{' '}
            <Italic>Staphylococcus aureus</Italic>,{' '}
            <Italic>Streptococcus pyogenes</Italic> e{' '}
            <Italic>Streptococcus pneumoniae</Italic>.
          </P>
        </Subsection>
        <Subsection title="Quadro Clínico">
          <P>
            Inicia-se com coriza, tosse seca, faringite e febre baixa. Após 12 a
            48 horas iniciam-se os sintomas de obstrução de VASs, caracterizados
            na Síndrome do Crupe, com progressão dos sinais de insuficiência
            respiratória e elevação da temperatura corpórea. Os sintomas
            geralmente se resolvem em até 7 dias. Nos casos mais graves há
            aumento das frequências cardíaca e respiratória, piora do esforço
            respiratório, cianose, agitação psicomotora ou sonolência, podendo
            durar até 14 dias.
          </P>
          <P>
            Há alguns sistemas de escores propostos para avaliar a gravidade da
            obstrução das vias aéreas baseados em sinais e sintomas clínicos.
          </P>
          <Table
            colWidths={[100, 100, 100, 100, 100]}
            header={['Sinal', '0', '1', '2', '3']}
            data={[
              [
                'Estridor',
                'Ausente',
                'Com agitação',
                'Leve em repouso',
                'Grave em repouso'
              ],
              ['Retração', 'Ausente', 'Leve', 'Moderada', 'Grave'],
              [
                'Entrada de Ar',
                'Normal',
                'Normal',
                'Diminuída',
                'Muito diminuída'
              ],
              [
                'Cor',
                'Normal',
                'Normal',
                'Cianose com agitação',
                'Cianose em repouso'
              ],
              [
                'Nível de Consciência',
                'Normal',
                'Agitação sob estímulo',
                'Agitação',
                'Letargia'
              ]
            ]}
            title="Escore Clínico para Avaliação da Gravidade da Obstrução Infecciosa das VASs"
            caption="Escore Total: < 6: leve / 7-8: moderada / > 8: grave"
          />
          <P>
            Crianças menores de seis meses de idade, pacientes com estridor em
            repouso ou alteração do nível de consciência e detecção de
            hipercapnia indicam potencial risco de desenvolvimento de falência
            respiratória.
          </P>
        </Subsection>
        <Subsection title="Diagnóstico">
          <P>
            O diagnóstico é baseado nos achados clínicos, sendo o som estridor,
            bastante característico.
          </P>
          <P>
            O achado de estreitamento da traqueia subglótica (sinal da
            &quot;ponta de lápis&quot; ou &quot;torre de igreja&quot;), na
            radiografia cervical, é de pouco valor, já que pode estar presente
            em uma criança saudável apenas pelo estreitamento anatômico desta
            região; e também por cerca de 50% das crianças com diagnóstico de
            Crupe Viral têm radiografia cervical normal. O exame radiológico
            cervical se reserva à investigação diagnóstica de outras etiologias
            para os sintomas de crupe (ex: aspiração de corpo estranho) ou para
            casos em que a evolução da doença é atípica.
          </P>
        </Subsection>
        <Subsection title="Tratamento">
          <P>
            O objetivo do tratamento é a manutenção das vias aéreas patentes. O
            paciente deve ser mantido o mais calmo possível, evitando-se a
            manipulação e exames desnecessários. O choro aumenta a pressão
            torácica negativa, podendo gerar maior colapso das vias aéreas
            extratorácicas, e transformar o fluxo de ar laminar em turbulento,
            aumentando a resistência ao influxo de ar nas vias aéreas.
          </P>
          <Subsubsection title="Nebulização">
            <P>
              A nebulização com solução fisiológica ou ar umidificado, apesar de
              frequente, não tem eficácia comprovada. A nebulização deve ser
              realizada se for detectada hipoxemia, sendo utilizada como fonte
              de oferta de oxigênio.
            </P>
          </Subsubsection>
          <Subsubsection title="Corticosteróides">
            <P>
              O uso de corticosteróide reduz a gravidade dos sintomas, a
              necessidade e a duração da hospitalização, a necessidade de
              admissão em UTI e a necessidade de associação de outras drogas
              (epinefrina) para o tratamento.
            </P>
            <P>
              Tem sido recomendado o uso da Dexametasona por sua alta potência e
              ter longo período de ação (maior que 48 horas). Pode ser
              administrada tanto via oral (VO) ou parenteral [via endovenosa
              (EV) ou via intramuscular (IM)], em dose única, variando de
              0,15mg/kg (crupe leve) até 0,60 mg/kg (crupe grave) – máximo de
              10mg . Uso parenteral sempre é indicado quando crupe grave,
              criança incapaz de tomar medicações orais ou está vomitando.
            </P>
            <P>
              Alternativamente, indica-se, uso oral de Prednisolona/Prednisona
              (1-2mg/kg/dia) ou nebulização com Budesonida (dose inalatória de
              2mg – por 15 minutos com máscara 6 L/minuto) por uma ou duas
              vezes, quando crupe leve ou moderado.
            </P>
          </Subsubsection>
          <Subsubsection title="Epinefrina">
            <P>
              A Epinefrina inalatória tem efeito ultrarrápido nos sintomas do
              crupe, diminuindo quase que instantaneamente o estridor e os
              sintomas de falência respiratória.
            </P>
            <P>
              Como o efeito da medicação é breve (2 horas), o paciente pode
              voltar ao estado de desconforto respiratório inicial após o final
              da ação desta droga. A nebulização deve ser realizada como fonte
              de oxigênio, se for detectada hipoxemia.
            </P>
            <P>
              As indicações de Epinefrina incluem casos de crupe moderado ou
              grave e de crianças com procedimento ou manipulação prévios das
              VASs. A dose para inalação é 0,5ml/kg até dose máxima de 5 ml de
              Epinefrina não diluída. Pode ser repetida até 3 vezes em
              intervalos de 30 minutos e depois em intervalos de 2 horas, quando
              necessita de monitorização cardíaca (possibilidade de taquicardia
              ventricular).
            </P>
          </Subsubsection>
          <Table
            colWidths={[125, 200]}
            header={['Gravidade dos Sintomas', 'Intervenção']}
            data={[
              [
                'Crupe Leve',
                'Dexametasona (0,15 - 0,30 mg/kg) VO/IV/IM\nAlta para casa'
              ],
              [
                'Crupe Moderado',
                'Dexametasona (0,30 - 0,60 mg/kg) VO/IV/IM\nNebulização com adrenalina (0,5 ml/kg)\nObservação por 3-4 horas'
              ],
              [
                'Crupe Grave',
                'Dexametasona (0,60 mg/kg) VO/IV/IM\nNebulização com adrenalina (0,5 ml/kg)\nAdmissão em UTI'
              ]
            ]}
            title="Tratamento do Crupe Viral"
          />
          <Subsubsection title="Intubação">
            <P>
              Nos pacientes em que a obstrução da via aérea é iminente, o
              procedimento deve ser realizado em ambiente bem controlado, por
              profissional experiente. A cânula traqueal deve ter 0,5mm a menos,
              de diâmetro interno, do que o “diâmetro ideal” calculado para a
              idade da criança.
            </P>
            <Table
              colWidths={[125, 125]}
              header={['Idade do Paciente', 'Diâmetro Interno']}
              data={[
                ['0 a 6 meses', '3,0 - 3,5'],
                ['6 a 12 meses', '3,5 - 4,0'],
                ['12 a 24 meses', '4,0 - 4,5'],
                ['> 24 meses', 'Fórmula: (Idade + 16) / 4']
              ]}
              title="Número da Cânula de Traqueostomia Recomendada"
            />
          </Subsubsection>
          <Subsubsection title="Internação">
            <P>Deve-se considerar a internação quando:</P>
            <List>
              <LItem>Menor de 6 meses de idade;</LItem>
              <LItem>
                Presença de estridor e/ou esforço respiratório em repouso;
              </LItem>
              <LItem>Alteração de consciência;</LItem>
              <LItem>
                Presença de desidratação ou incapacidade de ingerir líquidos;
              </LItem>
              <LItem>Presença de toxemia;</LItem>
              <LItem>Ausência de resposta à administração de epinefrina;</LItem>
              <LItem>
                Piora clínica após 2 horas após administração da epinefrina.
              </LItem>
            </List>
          </Subsubsection>
        </Subsection>
        <Subsection title="Diagnósticos Diferenciais">
          <Table
            colWidths={[125, 150, 150, 150, 150]}
            header={[
              'Aspectos',
              'Crupe Viral',
              'Crupe Espasmódico',
              'Supraglotite',
              'Traqueíte Bacteriana'
            ]}
            data={[
              [
                'Idade',
                '3 meses a 3 anos',
                '3 meses a 3 anos',
                '> 5 anos',
                '> 3 anos'
              ],
              [
                'Pródromos',
                'Coriza e tosse seca',
                'Nenhum',
                'Ocasionalmente coriza e tosse seca',
                'Coriza e tosse seca'
              ],
              [
                'Início',
                '12 - 48 horas',
                'Abrupto',
                '4 - 12 horas',
                'Progressivo: 12 horas a 7 dias'
              ],
              [
                'Febre',
                '37,8 - 40,5 °C',
                'Ausente',
                '> 39 °C',
                '37,8 - 40,5 °C'
              ],
              [
                'Estridor',
                'Leve a intenso',
                'Leve a moderado',
                'Intenso',
                'Moderado a intenso'
              ],
              [
                'Roquidão ou Tosse Ladrante',
                'Presente',
                'Presente',
                'Ausente',
                'Presente'
              ],
              [
                'Cavidade Oral',
                'Hiperemia de faringe Epiglote normal',
                'Hiperemia de faringe\nEpiglote normal',
                'Salivação intensa\nEpiglote em "cereja"',
                'Hiperemia de faringe\nSecreção purulenta'
              ],
              [
                'Sintomas Circulatórios',
                'Normalmente ausentes',
                'Ausentes',
                'Normalmente graves',
                'Moderados a graves'
              ],
              [
                'Evolução Clínica',
                'Várivel\nMaioria não requer intubação',
                'Sintomas curto e leve\nRecorrência',
                'Obstrução aérea completa',
                'Obstrução aérea grave por 3-5 dias'
              ],
              [
                'Intubação',
                'Geralmente desnecessária',
                'Desnecessária',
                'Necessária Lâmina curva e cânula menor',
                'Geralmente necessária\nCânula menor'
              ],
              [
                'Internação',
                'Infrequente\nEnfermeria ou UTI',
                'Desnecessária',
                'UTI',
                'UTI'
              ],
              [
                'Tratamento',
                'Dexametasona\nEpinefrina Inatória\nAssegurar via aérea',
                'Desnecessário',
                'Estabilização Antibiótico parenteral',
                'Estabilização Antibiótico parenteral'
              ]
            ]}
            title="Diagnóstico Diferencial da Obstrução Infecciosa das Vias Aéreas Superiores na Criança"
          />
        </Subsection>
        <Subsection title="Complicações">
          <P>
            Infecções bacterianas secundárias (Supraglotite, Traqueíte),
            falência respiratória, obstrução das vias aéreas, pneumotórax, edema
            pulmonar.
          </P>
        </Subsection>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Araujo PMFL, Araujo CNF. Emergências em otorrinolaringologia. IN: Sociedade Brasileira de Clínica Média; Lopes AC, Guimarães HP, Lopes RD, Vendrame LS, organizadores. PROURGEM Programa de Atualização em Medicina de Urgência e Emergência: Ciclo 8. Porto Alegre: Artmed Panamericana; 2015. p.120-60. (Sistema de Educação Continuada a Distância, v. 3)."
        />
        <Reference
          idx={2}
          body="Lubianca Neto JF, Krumenauer RC. Estridor e Manejo das Vias aéreas pediátricas. IN: Sociedade Brasileira de Pediatria; Campos Junior D, Burns DAR, Lopez FA, organizadores. TRATADO DE PEDIATRIA. Barueri: Manole; 2014. p.2415-24."
        />
        <Reference
          idx={3}
          body="Oliveira RG. Obstrução respiratória alta. Blacbook Pediatria. 5ed. Belo Horizonte: Black Book Editora. 2014. p. 366-7."
        />
        <Reference
          idx={4}
          body="Ramos BD, Pereira MBR. Infecções de vias aéreas superiores recorrentes. IN: Sociedade Brasileira de Pediatria; Ramos BD, organizador. PRONAP Programa Nacional de Educação Continuada em Pediatria: Ciclo 18. São Paulo: 2015. p.36-51. Sistema de Educação Continuada a Distância, n.1."
        />
        <Reference
          idx={5}
          body="Simon Junior H, Abramovici S. Crupe viral e bacteriano. IN: Sociedade Brasileira de Pediatria. Documento Científico – Departamento de Emergências. 2017. p.1-9."
        />
        <Reference
          idx={6}
          body="Simon Junior H, Sukys GA. Obstrução infecciosa das vias aéreas superiores. IN: Sociedade Brasileira de Pediatria; Simon Junior H, Pascolat G, organizadores. PROEMPED Programa de Atualização em Emergência Pediátrica: Ciclo 1. Porto Alegre: Artmed Panamericana; 2018. p.77-106. Sistema de Educação Continuada a Distância, v.1)."
        />
        <Reference
          idx={7}
          body="Toy EC et al. Casos clínicos em pediatria. 4ed. Porto Alegre: AMGH Editora Ltda. 2014. p.445-9."
        />
      </Section>
    </Routine>
  )
}
