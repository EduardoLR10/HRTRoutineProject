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

export default function SequenciaRapidaDeIntubacao(): JSX.Element {
  return (
    <Routine
      id="sequencia-rapida-de-intubacao"
      name="Sequência Rápida de Intubação"
      category="emergencia"
      authors={['rafael']}
      tags={[]}
    >
      <Section title="Introdução">
        <P>
          A manutenção da via aérea é prioridade no cuidado dos pacientes no
          setor de emergência. O objetivo é assegurar que a ventilação e a
          oxigenação estejam de acordo com a demanda do paciente. A intubação
          traqueal (IT) é frequentemente o procedimento definitivo para atingir
          esse propósito. Sequência rápida de intubação (SRI) significa a
          administração sequencial ou quase simultânea de um agente indutor
          (analgésico e sedativo) e dose-paralisante de um agente bloqueador
          neuromuscular. Seu uso tem indicação precisa em situações de “estômago
          cheio” , no entanto, diante da necessidade de facilitar as condições
          de IT e gerando melhores condições de visualização, tem sido indicada
          como procedimento padrão para IT em cenários de urgência.
        </P>
      </Section>
      <Section title="Indicações e Preparo para Intubação Traqueal (IT)">
        <P>
          As principais indicações de IT nos cenários de urgência pediátrica
          são: tratamento do choque e/ou insuficiência respiratória e situações
          que levam à alteração de consciência.
        </P>
        <P>
          As etiologias mais comuns da insuficiência respiratória podem ser
          didaticamente divididas em: obstrução de vias aéreas superiores,
          obstrução de vias aéreas inferiores, doenças parenquimatosas e
          controle da respiração (problemas neurológicos que não garantam ou a
          proteção de vias aéreas ou a ventilação em si).
        </P>
        <P>
          A SRI segura e eficaz exige que se cumpra uma sequência cuidadosa de
          passos que se iniciam com uma revisão da história do paciente, preparo
          adequado do equipamento, pessoal e medicamentos.
        </P>
        <P>
          Consideram-se como etapas seguintes para a SRI: pré-oxigenação,
          pré-medicação, medicação (sedativa), bloqueio neuromuscular,
          observação e monitoração pós-intubação.
        </P>
      </Section>
      <Section title="Anamnese Breve e Exame Físico">
        <P>
          SAMPLE: sinais e sintomas, alergias, medicações, passado médico,
          líquidos e última refeição, eventos que levaram à necessidade de
          intubação.
        </P>
      </Section>
      <Section title="Preparo e Monitoração">
        <P>
          O preparo sempre deve ser iniciado checando e definindo o material
          necessário para o procedimento bem-sucedido: fonte de O
          <Subscript>2</Subscript> funcionante com sistema para umidificação,
          sistema de oferta de oxigênio (preferencialmente de alto fluxo com
          máscara não reinalante) para hiperoxigenação prévia do paciente, fonte
          de vácuo com conexão para sonda de aspiração, unidade ventilatória
          testada e de tamanho adequado para a criança (gerando pressão adequada
          e com reservatório sem defeitos), máscara apropriada para idade para
          conexão na unidade ventilatória, laringoscópio apropriado e testado,
          tubo traqueal (TT) de três tamanhos (ideal para idade, um tamanho
          menor e um maior), guia para o tubo e as medicações previamente
          planejadas e prescritas. Além disso, deve-se ter, preferencialmente,
          dois acessos calibrosos confiáveis, monitorização cardiorrespiratória
          e equipe preparada para o procedimento.
        </P>
        <P>
          Para crianças maiores de dois anos, o tamanho (diâmetro interno em
          milímetros) pode ser calculado com a fórmula: tamanho do TT (tubo
          traqueal) <Bold>sem balonete</Bold> (DI em mm) = (idade anos/4) + 4;
          lactentes até 1 ano tubo, 3,5; lactentes entre 1 e 2 anos, tubo 4. O
          tamanho do TT <Bold>com balonete</Bold> (DI em mm) = idade (anos)/4 +
          3,5; lactentes até um ano, tubo 3; lactentes entre 1 e 2 anos, tubo
          3,5. Deve-se atentar para o fato que, no caso de utilização do tubo
          com balonete, a pressão de insuflação do cuff deve ficar entre 20 e 25
          cm de H<Subscript>2</Subscript>O.
        </P>
        <P>
          A profundidade de inserção deve ser (em cm) = idade (anos)/2 + 12.
          Alternativamente, a distância de inserção (em centímetros) da
          extremidade distal do tubo ao lábio pode ser estimada pela
          multiplicação do diâmetro interno de um tubo selecionado por três.
        </P>
        <Table
          colWidths={[150, 100, 125, 150, 125]}
          header={[
            'Ventilação/Oxigenação',
            'Preparo do Tubo',
            'Laringoscopia',
            'Drogas',
            'Verificação e Fixação'
          ]}
          data={[
            [
              'Fonte de oxigênio;\nMáscara não reinalante;\nUnidade ventilatória testada;\nMáscara de silicone para ventilação;\nCânulas orofaríngeas e nasofaríngeas',
              'Tubos 2,5 a 5,0 sem cuff;\nTubos 5,0 a 8,0 com cuff;\nFio-guia;\nSeringa de 10 ou 20ml;\nE.P.I. : capote, máscara, óculos e luvas',
              'Lâminas retas 0, 1 e 2;\nLâminas curvas 2, 3 e 4;\nCoxim para posicionamento da cabeça;\nSonda de aspiração e aspirador montado e checado',
              'Seringas/agulhas;\nLidocaína sem vasoconstritor;\nAtropina;\nAnestésicos/Sedativos/ Relaxantes',
              'Estetoscópio;\nOxímetro de pulso;\nEsparadrapo (Tensoplast);\nCapnógrafo, se disponível.'
            ]
          ]}
        />
      </Section>
      <Section title="Pré-oxigenação">
        <P>
          A primeira etapa – pré-oxigenação – pode ser obtida com o uso de
          oxigênio a 100% a partir de uma máscara com reservatório não
          reinalante por 3-5 min. O objetivo é denitrogenar o paciente,
          propiciando mais tempo sem dessaturação para que o médico realize o
          procedimento sem risco de hipóxia.
        </P>
      </Section>
      <Section title="Pré-medicação">
        <P>
          As principais são: atropina, lidocaína e opióides. A escolha do uso
          dependerá das condições clínicas de cada criança.
        </P>
        <P>
          A IT é um estímulo nocivo e a laringoscopia induz várias alterações
          fisiológicas na criança, sendo a mais frequente uma resposta vagal
          mais pronunciada e bradicardia com repercussões. Antes do nascimento e
          durante os primeiros 3-6 meses de vida, o que se observa é um
          desbalanço autonômico devido a uma densa inervação vagal do nó
          sinoatrial e inervação simpática pobre dos ventrículos e sistema de
          condução . A resposta vagal pode ocorrer tanto por hipóxia como pela
          laringoscopia.
        </P>
        <P>
          Em virtude disso, ainda permanece a recomendação do uso de atropina
          como pré-medicação sempre para menores de um ano, de 1-5 anos quando
          se fizer uso de succinilcolina e, acima dessa idade, se uma segunda
          dose de succinilcolina for usada. O uso da atropina como pré-medicação
          também tem sido atualmente recomendada no choque séptico,
          considerando-se os efeitos potencialmente devastadores que a
          bradicardia poderia ter numa condição como essa, principalmente se
          acompanhada por vasoplegia. A dose recomendada é de 0,02 mg/kg (dose
          mínima de 0,1 mg e máxima de 0,5 mg). Doses mais baixas que a mínima
          podem induzir bradicardia paradoxal.
        </P>
        <P>
          A lidocaína também pode ser usada nessa fase e tem sua indicação
          principal nos casos de traumatismo craniano ou outras situações em que
          se suspeita de hipertensão intracraniana. Provavelmente, está
          relacionada à supressão da tosse, à depressão do metabolismo cerebral
          e à estabilização de membrana.
        </P>
        <P>
          Os opióides tradicionalmente não estavam incluídos na SRI, que
          constava apenas do uso de um sedativo (à época, tiopental) e relaxante
          muscular (succinilcolina). No entanto, nos últimos anos, opióides
          foram acrescentados ao arsenal de medicações usadas na sequência
          rápida de intubação. O mais usado e disponível, na maioria dos
          serviços de urgência, é o fentanil, potente analgésico com efeitos
          sedativos leves. Também tem o efeito de reduzir a resposta
          hipertensiva (mais significativa em adultos) à intubação. Pode causar
          rigidez torácica e esse efeito parece ocorrer mais comumente com doses
          altas e injeção rápida.
        </P>
      </Section>
      <Section title="Agentes Indutores: Sedativos">
        <Subsection title="Etomidato">
          <P>
            É um agente indutor potente pouco utilizado em pediatria. É um
            barbitúrico hipnótico que tem início de ação rápido (30-60
            segundos), pico de ação com um minuto e meia-vida curta (10-15
            minutos), dose de indução de 0,2 a 0,4 mg/kg. Muitos estudos atuais
            têm mostrado que doses únicas da medicação interferem na produção de
            cortisol e por isso tem sido contraindicado na sepse e choque
            séptico.
          </P>
        </Subsection>
        <Subsection title="Cetamina">
          <P>
            É caracterizada por potente analgesia (único dos sedativos aqui
            descritos com propriedade analgésica), sedação e amnésia, enquanto
            mantém estabilidade cardiovascular e preserva respirações
            espontâneas e reflexos de proteção de vias aéreas, além de
            propriedades broncodilatadoras. Diferentemente da maioria dos
            agentes, não é titulável com efeitos dissociativos apresentados com
            doses de 1,5-2 mg/kg venoso (IV) e 3 ou 4 mg/kg intramuscular (IM).
            Apesar de um efeito indutor de laringoespasmo descrito em diversas
            condições, incluindo a asma, nos cenários clínicos que a SRI se
            impõe, não há contraindicações com o uso desse bloqueador
            neuromuscular. Na verdade, muitos artigos que abordam o assunto
            consideram-no como de escolha nas situações de broncoespasmo. Muito
            se questiona sobre a possibilidade de aumento da pressão
            intracraniana com o uso da cetamina. O guideline prático para o uso
            da cetamina no departamento de urgência retirou o TCE da lista das
            contraindicações relativas, no entanto, manteve as anormalidades do
            SNC, massas e hidrocefalia como diagnósticos para seu uso cauteloso
            (contraindicações relativas).
          </P>
        </Subsection>
        <Subsection title="Midazolam">
          <P>
            Apesar do uso muito frequente, é considerado agente subótimo para
            intubação, tanto por não produzir sedação adequada como condições de
            intubação não ideais. Tem efeitos sedativo, hipnótico, amnésico,
            ansiolítico, relaxante muscular e anticonvulsivante. Deve ser usado
            com cautela em condições de instabilidade hemodinâmica devido aos
            seus efeitos inotrópicos negativos e vasodilatadores, principalmente
            se associado ao opióide.
          </P>
        </Subsection>
        <Subsection title="Tiopental">
          <P>
            Tiobarbitúrico com rápido início de ação (30 segundos) e meia-vida
            curta. Reduz o consumo de O<Subscript>2</Subscript> , o fluxo
            cerebral e a pressão intracraniana. Está associado contudo, à
            hipotensão, por efeitos na contratilidade miocárdica, resistência
            vascular e retorno venoso. Não deve ser usado em pacientes com
            instabilidade hemodinâmica.
          </P>
        </Subsection>
        <Subsection title="Propofol">
          <P>
            Tem meia-vida e duração de ação curtas, propriedades
            anticonvulsivantes e antieméticas, além de proporcionar as melhores
            condições de intubação sem o uso do relaxante muscular. Reduz a
            pressão intracraniana e o metabolismo cerebral. Possui a tendência a
            provocar queda na pressão arterial e deve ser usado com cautela em
            pacientes em risco de hipotensão, principalmente considerando que a
            redução da mesma leva à redução na perfusão cerebral.
          </P>
        </Subsection>
      </Section>
      <Section title="Bloqueio Neuromuscular">
        <P>
          O mesmo deve ser realizado como parte da SRI, exceto em condições em
          que se prevê uma via aérea difícil ou não se possuem condições
          alternativas para abordagem da condição: “não intuba, não ventila”.
        </P>
        <Subsection title="Despolarizante">
          <Subsubsection title="Succinilcolina">
            <P>
              Funciona como agonista do receptor de acetilcolina de uma maneira
              bifásica: primeiro, abre os canais de sódio da membrana celular,
              resultando em breve despolarização que pode ser notada
              clinicamente, como fasciculações musculares. Então, previne a
              ligação da própria acetilcolina aos receptores, onde se liga
              promovendo o bloqueio completo. A succinilcolina tem rápido início
              de ação (um minuto) e curto tempo de duração (5-15 minutos) e a
              ventilação pode retornar em 9-10 minutos. As doses são
              controversas, com referências citando metabolismo mais rápido que
              em adultos, principalmente em crianças abaixo de três anos,
              preconizando doses mais altas nessas faixas etárias. A dose é de 3
              mg/ kg para lactentes menores de um ano e 2 mg/kg para as outras
              faixas etárias. Deve ser evitado após as primeiras 24h em
              pacientes com queimaduras e após 72h em pacientes com síndromes de
              denervação aguda ou politrauma. Nesses casos ocorre{' '}
              <Italic>up regulation</Italic>
              de receptores nicotínicos musculares, o que leva a uma resposta
              exagerada hipercalêmica, principalmente em situações de
              rabdomiólise. Provoca aumentos no potássio sérico de até 0,5
              mEq/l. A succinilcolina provoca rigidez muscular do masseter em
              0,3 a 1% dos pacientes pediátricos que, se for acentuada, pode ser
              um sinal precoce de hipertermia maligna. Pode induzir arritmias,
              sendo as mais frequentes as bradiarritmias, o que justifica o uso
              da atropina como pré-medicação nas crianças.
            </P>
          </Subsubsection>
        </Subsection>
        <Subsection title="Não Despolarizants">
          <P>
            Os bloqueadores neuromusculares não despolarizantes são antagonistas
            competitivos dos receptores de acetilcolina e uma alternativa à
            succinilcolina. São também chamados de relaxantes esteróides. O
            rocurônio é um dos mais usados na prática clínica e deriva-se do
            vecurônio. É o relaxante neuromuscular não despolarizante com início
            de ação mais rápido. Bloqueia a ligação da acetilcolina ao receptor
            nicotínico. O rocurônio é a droga de escolha quando a succinilcolina
            for contraindicada. Nas doses de 0,6 mg/kg tem início de ação em
            cerca de 90 segundos e duração de 45 minutos em lactentes e 27
            minutos em crianças; e em doses mais altas, como 1,2 mg/kg, seu
            início de ação ocorre em 30 segundos e duração de 53 minutos, em
            média. Os relaxantes esteróides têm tempo de ação mais longo, embora
            suas doses tenham que ser mais altas, o que prolonga ainda mais o
            tempo de bloqueio neuromuscular. Em casos de via aérea
            presumidamente difícil, devem ser evitados. O bloqueio neuromuscular
            induzido pelo rocurônio pode ser completamente antagonizado por
            inibidores da acetilcolinesterase como a neostigmine.
          </P>
        </Subsection>
      </Section>
      <Section title="Passos">
        <Table
          colWidths={[150, 250]}
          header={['Passo', 'Ações']}
          data={[
            [
              'Checar Materiais',
              'Verificar os equipamentos necessários, checar conexões;\nCalcular as doses das pré-medicações, sedativos e relaxantes neuromusculares disponíveis no serviço;\nProvidenciar o preenchimento da folha de parada.'
            ],
            ['Monitoração', 'Oximetria de pulso e ECG.'],
            [
              'Manter vias aéreas',
              'Abrir vias aéreas posicionando a cabeça;\nAspirar secreções;\nSe possível, realizar pré-oxigenação com máscara não reinalante ou outro dispositivo de alto fluxo (ex: HOOD em lactentes);\nVentilar com máscara e unidade ventilatória conectada ao oxigênio se necessário (ex: apnéia antes da administração de todas as medicações);\nVerificar expansibilidade torácica, ausculta e saturimetria.'
            ],
            [
              'Pré-medicação',
              <Text key={1}>
                <Bold>Atropina</Bold> (indicada para menores de um ano, indicada
                para pacientes entre 1-5 anos, quando se utiliza succinilcolina
                ou para crianças maiores quando se utiliza uma segunda dose de
                succinilcolina). Indicada também no choque séptico;{'\n'}
                Paciente hemodinamicamente estável: administrar{' '}
                <Bold>Fentanil</Bold> para analgesia (considere doses menores se
                instabilidade){'\n'}
                Administrar <Bold>Lidocaína</Bold> para trauma craniano ou
                aumento da pressão intracraniana.
              </Text>
            ],
            [
              'Sedativos',
              <Text key={2}>
                <Bold>Paciente normotenso:</Bold> midazolam ou etomidato ou
                propofol ou tipental ou cetamina;{'\n'}
                <Bold>Paciente hipotenso ou hipovolêmico:</Bold>
                cetamina (caso não disponível, utilizar o midazolam em doses
                mais baixas);{'\n'}
                <Bold>
                  Paciente com trauma de crânio ou estado epilético normotenso:
                </Bold>{' '}
                tiopental ou midazolam ou propofol ou etomidato.{' '}
                <Bold>Hipotenso:</Bold> etomidato ou midazolam em doses mais
                baixas;{'\n'}
                <Bold>Pacientes com asma grave:</Bold> cetamina como primeira
                opção, midazolam e os demais são opção.
              </Text>
            ],
            [
              'Bloquador neuromuscular',
              'Preferencialmente rocurônio, podem ser utilizados pancurônio e vecurônio\nOutra opção: succinilcolina'
            ],
            [
              'Procedimento de intubação',
              'Posicionar o paciente em decúbito dorsal com elevação da cabeça até 5 cm com coxim em crianças maiores e adultos; em crianças menores de três anos deve-se utilizar o coxim sob os ombros. A posição ideal é aquela em que o meato acústico se alinha com esterno; Fazer a laringoscopia direta: a mão direita faz a extensão da cabeça nos casos sem história suspeita de trauma da coluna vertebral; Segurar o laringoscópio com a mão esquerda, empurrando a língua para a esquerda e introduzindo a lâmina em direção à linha média da base da língua. O cabo do laringoscópio é deslocado para frente e para cima, em um ângulo de 45º. Aspirar as secreções das vias aéreas, se presentes. Introduzir o tubo entre as cordas vocais, se necessário utilizar fio-guia;\nVentilar com unidade ventilatória;\nO procedimento deve durar no máximo 30 segundos ou tempo menor, caso haja queda da saturação ou da frequência cardíaca.'
            ],
            [
              'Checagem',
              'Checar se a posição do tubo está adequada: inspeção, ausculta, ventilação, elevação da frequência cardíaca e saturimetria. Se possível radiografia.\nFixar de forma adequada o tubo e anotar no prontuário o número do tubo utilizado, a posição afixada e como transcorreu o procedimento;\nFornecer suporte ventilatório ao paciente'
            ]
          ]}
        />
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Reynolds SF, Heffner J. Airway management of the critically ill patient: rapid-sequence intubation. Chest. 2005; 127:1397-412. "
        />
        <Reference
          idx={2}
          body="Zelicof-Paul A, Smith-Lockridge A, Schnadowera D, Tyler S, Levin S, Roskind C, Dayan P. Controversies in rapid sequence intubation in children. Curr Opin Pediatr. 2005, 17:355-62."
        />
        <Reference
          idx={3}
          body="Mace SE. Challenges and Avances in Intubation: Rapid Sequence Intubation. Emerg Med Clin N Am. 2008; 26:1043-68. "
        />
        <Reference
          idx={4}
          body="Suresh MS, Munnur U, Wali A. The patient with a full stomach. In: Hagberg CA, editor. Benumof’s airway management: principles and practice. 2nd ed. Philadelphia, PA: Mosby; 2007. p.764-6."
        />
      </Section>
    </Routine>
  )
}
