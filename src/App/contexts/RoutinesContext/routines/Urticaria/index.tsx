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

import img3 from './images/image3.png'
import img4 from './images/image4.png'

export default function Urticaria(): JSX.Element {
  return (
    <Routine
      id="urticaria"
      name="Urticária e Angiodema"
      category="emergencia"
      authors={['cristianne']}
      tags={[
        'andioedema',
        'anafilaxia',
        'choque',
        'anafilático',
        'placas',
        'urticas'
      ]}
    >
      <Section title="Introdução">
        <P>
          A Urticária consiste em uma patologia multifatorial caracterizada por
          placas eritematosas de tamanhos e forma variáveis, frequentemente
          pruriginosas, geralmente de início súbito e remissão sem sequelas.
        </P>
        <P>
          Angioedema consiste na dilatação dos vasos sanguíneos e edema da derme
          profunda e tecido subcutâneo, acometendo pálpebras, lábios, língua,
          genitais e extremidades. Podendo se apresentar com dor e queimação e
          mais raramente com prurido. Geralmente acompanha os quadros de
          urticária.
        </P>
        <P>
          A urticária é classificada em aguda quando dura menos que seis semanas
          e crônica quando excede seis semanas.
        </P>
      </Section>
      <Section title="Epidemiologia">
        <P>
          Urticária aguda é muito frequente na infância com incidência em torno
          de 20% enquanto que a urticária crônica acomete mais adultos do sexo
          feminino.
        </P>
      </Section>
      <Section title="Patogenia">
        <Subsection title="Mediada Imunologicamente">
          <List>
            <LItem>Reação tipo I de Gell e Coombs (IgE);</LItem>
            <LItem>
              Reação tipo III de Gell e Coombs (Imunocomplexos e sistema
              complemento).
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Mediada Não Imunologicamente">
          <List>
            <LItem>
              Liberação direta de mediadores inflamatórios de mastócitos
              (opiácios e contrates radiográficos);
            </LItem>
            <LItem>
              Inibição da cicloxigenase por AINH (anti-inflamatórios não
              hormonais) levando a uma produção aumentada de leucotrienos a
              partir do ácido aracdônico;
            </LItem>
            <LItem>Fatores físicos pouco elucidados;</LItem>
            <LItem>
              Aminas vasoativas presente em alimentos (morango, tomate,
              chocolate).
            </LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Etiologia">
        <Table
          colWidths={[150, 150]}
          header={['Urticária Aguda', 'Urticária Crônica']}
          data={[
            [
              'Drogas: AINH, antibióticos (beta lactamicos, sulfas) anticonvulsivantes',
              'Idiopática'
            ],
            [
              'Alimentos: leite de vaca, clara de ovo, amendoim, trigo, chocolate, frutos do mar, soja',
              'Autoimune: anticorpos da classe IgG'
            ],
            [
              'Infecções: virais, bacterianas, parasitárias e fúngicas',
              'Urticária física: dermografismo, pressão, frio, calor, solar, colinérgicas, induzida por exercícios, vibratória e aquagênica'
            ],
            [
              'Aditivos químicos: tartrazina',
              'Doença sistêmica: artrite idiopática juvenil, LES, doenças tireoideanas, malignidades'
            ],
            [
              'Insetos: abelha, formiga e mosquitos',
              'Reação de hipersensibilidade: fármacos e alimentos'
            ],
            [
              'Urticária de contato: látex, saliva de animais e plantas',
              'Síndromes raras: urticária pigmentosa e mastocitose sistêmica, desordens inflamatórias ao frio'
            ],
            ['Imunocomplexos: doença do soro, transfusionais', ''],
            [
              'Reações pseudo alérgicas: meios de contraste, fármacos e alimentos ricos em animais vasoativas (morango, tomate, conservantes)',
              ''
            ],
            ['Idiopática', '']
          ]}
        />
        <P>
          Angioedema por deficiência de inibidor de C1 esterase (hereditária ou
          adquirida):apresentação clínimca de angioderma, sem urticária.
        </P>
      </Section>
      <Section title="Diagnóstico">
        <Subsection title="Quadro Clínico">
          <P>
            Aparecimento súbito de lesões eritematosas e pruriginosas em forma
            de placas localizadas ou generalizadas, podendo estar associado à
            angioedema de lábios, pálpebras, língua ou face. O angioedema pode
            ocorrer de forma isolada – levantando a suspeita de deficiência do
            inibidor de C1 esterase. A urticária e o angioedema podem também
            fazer parte de um quadro sistêmico grave denominado{' '}
            <Bold>anafilaxia</Bold>.
          </P>
        </Subsection>
        <Subsection title="Anamnese">
          <P>
            Detalhar e precisar o início do quadro, uso de medicamentos,
            alimentos, aditivos, vacinas e infecções. História familiar de
            atopia, urticária ou angioedema. Procurar por outros sintomas
            associados, tais como febre, artralgia, prurido e dor.
          </P>
        </Subsection>
        <Subsection title="Exame Físico">
          <P>
            Verificar sinais vitais e saturação, ausculta pulmonar e cardíaca.
            Na pele, avaliar a presença de pápulas e placas de tamanhos e formas
            variáveis, fugazes, que desaparecem à digitopressão e não deixam
            pigmentação residual. Pode vir acompanhada por angioedema,
            geralmente em lábios e pálpebras.
          </P>
        </Subsection>
      </Section>
      <Section title="Exames Complementares">
        <P>
          <Bold>Urticária aguda:</Bold> exames são geralmente desnecessários. Em
          crianças, na maioria das vezes, o quadro agudo é secundário a algum
          processo infeccioso, que pode ser assintomãtico, oligossintomático ou
          com quadro clínico expressivo.
        </P>
        <P>
          Quando houver necessidade de investigação da etiologia, na suspeita de
          algum agente específico, pode-se solicitar:
        </P>
        <List>
          <LItem>
            Sorologias para infecções virais comuns da infância (especialmente
            IgM): para CMV, capsídeo viral do EBV, rubéola, bactérias atípicas,
            arboviroses.
          </LItem>
          <LItem>
            IgE específica sérica pelos métodos RAST (radioimunoensaio);
          </LItem>
          <LItem>PricK test (ou teste cutâneo);</LItem>
          <LItem>Patch test para alergia de contato;</LItem>
          <LItem>
            Teste de provocação oral (padrão ouro para urticária alimentar e
            medicamentosa): exclui-se o ítem suspeito por 2 a 6 semanas e
            reintroduz, se surgirem lesões cutâneas, o teste é considerado
            positivo (contra indicado para anafilaxia).
          </LItem>
        </List>
      </Section>
      <Section title="Urticária Crônica">
        <P>
          Geralmente a investigação é feita pelo especialista (alergista
          pediátrico). São solicitados:
        </P>
        <P>
          HC, VHS, proteína C reativa, função renal e hepática, urina 1,
          parasitológico de fezes, função tireoidiana e anticorpos anti
          tireodeanos, FAN, provas hematológicas, biópsia de pele, dosagem de
          complemento (C3, C4, CH50), Rx de tórax. Na suspeita de etiologia
          infecciosa pode solicitar sorologias específicas (IgM e IgG).
        </P>
        <Subsection title="Diagnóstico Diferencial">
          <P>
            Vasculites: não desaparecem a digitopressão, deixam pigmentação
            residual, geralmente são lesões dolorosas.
          </P>
          <P>Prurido: xerodermia, escabiose, picadas de insetos.</P>
          <P>
            Eritema multiforme: lesões em alvo que acometem palmas das mãos e
            plantas dos pés, evoluem para lesões bolhosas.
          </P>
          <P>
            Angioedema: faz diagnóstico diferencial com celulites, edema por
            nefropatia, cardiopatia ou hepatopatia, linfedema, síndrome do
            mediastino superior, edema periorbitário pela triquinose, Sd. De
            Melkerson-Rosenthal (edema labial, língua fissurada e paralisia
            facial recorrente).
          </P>
        </Subsection>
        <Subsection title="Tratamento">
          <P>
            Tentar identificar e afastar o agente causador. Evitar o uso de
            AINH, usar repelente contra insetos. Tratar infecções associadas.
            Evitar calor ou frio intensos.
          </P>
          <P>
            Tratamento farmacológico: deve ser sistêmico. Não se recomenda
            tratamento tópico.
          </P>
          <P>
            Antihistamínicos de primeira geração: atravessam a barreira
            hematoencefálica causando sedação e efeitos colinérgicos. Devem ser
            administrados de 3 a 4 vezes ao dia. Tem indicação nas urticárias
            colinérgicas e quando o efeito sedativo é desejado. São eles:
            hidroxizina, prometazina, dexclorfeniramina.
          </P>
          <P>
            Anti histamínicos de segunda geração: não atravessam a barreira
            hematoencefálica e são administrados 1x ao dia. São as drogas
            eleitas como primeira escolha para o tratamento da urticária. São
            elas: loratadina, desloratadina, fexofenadina, ebastina, cetirizina,
            levocetirizina.
          </P>
          <P>Os antileucotrienos podem ser usados na urticária crônica.</P>
          <P>
            Corticóides: devem ser usados em casos refratários,
            preferencialmente prednisolona 1-2 mg/kg/dia por 3 a 7 dias.
          </P>
          <P>
            Drogas de ação imunossupressora: ciclosporina, colchicina, dapsona,
            metotrexate, anticorpo monoclonal anti IgE (omalizumabe). Estes
            fármacos devem ser prescritos pelo especialista (alergista
            pediátrico), após completada a investigação etiológica.
          </P>
          <Table
            colWidths={[150, 150, 150, 150]}
            header={['Nome', 'Apresentação', 'Posologia', '']}
            data={[
              ['', '', 'Crianças', 'Crianças > 12 anos'],
              [
                'Hidroxizine',
                'xarope 2 mg/ml\nCompr. de 25 e de 50 mg',
                '0,7 a 1 mg/Kg,\n3 a 4 x/dia',
                '25 a 50 mg,\n3 a 4 x/dia'
              ],
              [
                'Dexclorfeniramina',
                'sol oral: 20 gts/2mg\nxarope: 5 mg/2mg\nCompr: de 2mg',
                '2 a 6 anos: 0,5 mg (1,25 a 2,5 ml ou 6 a 12 gts), 3 a 4x/dia\n6 a 12 anos: 1 mg (2,5 ml ou 12 gts), 3 a 4x/dia',
                '> 12 anos: compr. 2 mg, 3 a 4x/dia\nDose máx: 12 mg/dia'
              ],
              [
                'Prometazina',
                'xarope 5 mg/5ml\nCompr. de 25 mg\nAmpola de 50 mg/2ml',
                '1 mg/Kg/dose,2 a 3x/dia, máx. de 20 mg',
                'Compr: 2 a 4 comprs, de 25 mg por dia\nAmp: 25 a 50 mg, via IM profundo'
              ],
              [
                'Cetirizina',
                'Sol oral: 1 mg/ml\nGotas: 10 mg/ml\nCompr: 10mg',
                '6 meses a 2 anos: 2,5 mg 1x/dia\n2-6 anos: 2,5 mg 12/12h\n6-12 anos: 5 mg 12/12h',
                '10 mg/dia'
              ],
              [
                'Levocetirizina',
                'Gotas: 2,5 mg/10 gotas\nCompr: 10mg',
                '2-6 anos: 1,25 mg 12/12h\n> 6 anos: 5 mg',
                '5 mg/dia'
              ],
              [
                'Loratadina',
                'Sol oral: 1 mg/ml\nCompr: 10mg',
                '2 anos até 30 kg: 5 mg/dia\n> 30 kg: 10 mg/dia',
                '10 mg/dia'
              ],
              [
                'Desloratadina',
                'Sol oral: 0,5 mg/ml\nGotas: 1,25 mg/ml\nCompr: 5mg',
                '6 meses a 2 anos: 1 mg 1x/dia\n2-6 anos: 1,25 mg 1x/dia\n> 6 anos: 5 mg/dia',
                '5 mg/dia'
              ],
              [
                'Ebastina',
                'Sol oral: 1 mg/ml\nCompr: 10mg',
                '2-6 anos: 2,5 mg 1x/dia\n6-12 anos: 5 mg 1x/dia',
                '10 mg/dia'
              ],
              [
                'Epinastina',
                'Sol oral: 6 mg/ml\nCompr: 10 ou 20 mg',
                '6-12 anos: 5 a 10 mg 1x/dia',
                '10 a 20 mg/dia'
              ],
              [
                'Fexofenadina',
                'Sol oral: 1 mg/ml\nCompr: 30, 60, 120 e 180 mg',
                '6 meses a 2 anos: 15mg 12/12h\n2-11 anos: 30 mg 12/12h\n6-12 anos: 60 mg/dia',
                '60 mg de 12/12h ou 120 mg 1x/dia'
              ]
            ]}
          />
        </Subsection>
      </Section>
      <Section title="Anafilaxia">
        <P>
          Anafilaxia consiste em uma reação alérgica aguda grave, levando a
          degranulação de mastócitos e basófilos, IgE mediada. O início é
          súbito, a evolução rápida e potencialmente fatal. Os órgãos-alvo
          envolvidos incluem pele e mucosas (80% a 90% dos episódios), aparelho
          respiratório (70% dos episódios), trato gastrointestinal (30% a 40%),
          sistema cardiovascular (10% a 45%) e sistema nervoso central em 10% a
          15% dos episódios.
        </P>
        <P>
          Reação anafilactóide é o termo utilizado para reações similares à
          anafilaxia, porém não mediado por antígeno e nem pelo anticorpo IgE.
        </P>
        <P>
          A anafilaxia pode ter aparecimento rápido ({'<'} 30 minutos da
          exposição) ou tardio ({'>'} 30 minutos até 2 horas), pode ser
          unifásico ou bifásico (a fase imediata é seguida de um período livre
          de sintomas e, posteriormente, surge a reação tardia, com o
          recrudescimento dos sinais e sintomas, independentemente de nova
          exposição ao agente desencadeante). A fase tardia ocorre dentro de 8 a
          12 horas após a reação imediata e está presente em cerca de 20% dos
          casos de anafilaxia. As reações bifásicas são mais frequentes na
          anafilaxia alimentar.
        </P>
        <P>
          Os agentes causadores de anafilaxia são os mesmos apresentados para
          urticária. No Brasil, os principais agentes causais de anafilaxia são
          os medicamentos (AINH, antibióticos), seguido por alimentos (leite de
          vaca e clara de ovo) entre lactentes e pré-escolares; crustáceos entre
          crianças maiores, adolescentes e adultos, e picadas de insetos
          (formigas de fogo, abelhas e vespas). Em cerca de 10% dos casos não há
          identificação do agente etiológico (anafilaxia idiopática).
        </P>
        <Subsection title="Diagnóstico">
          <P>
            O diagnóstico é clínico e é baseado nos critérios descritos no
            quadro abaixo. Na presença de 1 dos 3 critérios o diagnóstico é
            altamente provável.
          </P>
          <P>Critérios para o diagnóstico de anafilaxia:</P>
          <Subsubsection title="Início agudo de doença (minutos ou horas) com envolvimento da pele, mucosas ou ambos (por exemplo, urticária generalizada, prurido ou eritemia facial, edema lábios-língua-úvula)">
            <P>E pelo menos um dos seguintes itens:</P>
            <List>
              <LItem>
                Comprometimento respiratório (dispneia, sibilos-broncoespasmo,
                estridor, pico de fluxo expiratório reduzido, hipoxemia).
              </LItem>
              <LItem>
                Pressão arterial reduzida ou sintomas associados de disfunção
                orgânica (por exemplo, hipotonia (colapso), síncope,
                incontinência).
              </LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Dois ou mais dos seguintes sintomas ocorrendo rapidamente após exposição a um alérgeno provável para o paciente (minutos a horas)">
            <List>
              <LItem>
                Envolvimento de pele-mucosas (por exemplo, urticária
                generalizada, prurido-eritema facial, edema
                lábios-língua-úvula).
              </LItem>
              <LItem>
                Comprometimento respiratório (dispneia, sibilos-broncoespasmo,
                estridor, pico de fluxo expiratório reduzido, hipoxemia).
              </LItem>
              <LItem>
                Pressão arterial reduzida ou sintomas associados de disfunção
                orgânica dpor exemplo, hipotonia (colapso, síncope,
                incontinência).
              </LItem>
              <LItem>
                Sintomas gastrointestinais persistentes (por exemplo, cólica
                abdominal persistente, vômitos).
              </LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Queda da pressão arterial após exposição a um alérgeno conhecido para o paciente (minutos a horas)">
            <List>
              <LItem>
                Lactentes e crianças: pressão arterial sistólica baixa (idade
                específica) ou uma queda na pressão arterial sistólica {'>'}{' '}
                30%.
              </LItem>
              <LItem>
                Adultos: pressão arterial sistólica menor que 90mmHg ou queda{' '}
                {'>'} 30% na pressão arterial sistólica basal.
              </LItem>
            </List>
          </Subsubsection>
          <P>
            A anamnese deve ser detalhada após a estabilização do quadro agudo,
            no intuito de identificar o agente causador e deve seguir a mesma
            sequência descrita para investigação da urticária. No exame físico,
            deve-se dar atenção especial aos sinais vitais, ausculta cardíaca,
            pulmonar, pressão arterial e SNC. A presença de doença cardíaca
            pré-existente, asma, uso concomitante de agentes β-bloqueadores e
            uso de inibidores da ECA estão associados ao risco de reações mais
            graves.
          </P>
          <P>
            Exames Complementares: para confirmação diagnóstica pode ser feita a
            dosagem de triptase sérica, histamina plasmática e metil-histamina
            urinária. O melhor momento para a dosagem de triptase é dentro de
            uma a duas horas após o início da reação anafilática, enquanto para
            a dosagem de histamina situa-se entre dez minutos a uma hora. Os
            metabólitos urinários da histamina podem permanecer elevados na
            urina por até 24 horas. Para investigação etiológica, utiliza-se os
            mesmos testes descritos para urticária, porém sempre que houver
            riscos, os testes devem ser realizados em ambiente hospitalar.
          </P>
        </Subsection>
        <Subsection title="Diagnóstico Diferencial">
          <P>
            Reação vaso-vagal que é a causa mais frequente de confusão e
            caracteriza-se por sudorese, náusea, hipotensão, e bradicardia (na
            anafilaxia ocorre taquicardia, a bradicardia surge apenas em
            situações pré falência cardiorrespiratória) e ausência de sintomas
            cutâneos como urticária/angioedema.
          </P>
          <P>
            Outras doenças menos frequentes a serem consideradas no diagnóstico
            diferencial são: mastocitose sistêmica, angioedema hereditário;
            feocromocitoma, síndrome carcinóide e disfunção de cordas vocais.
          </P>
        </Subsection>
        <Subsection title="Tratamento">
          <P>
            O quadro a seguir traz uma síntese das medidas e drogas a serem
            utilizadas na anafilaxia.
          </P>
          <P>
            <Bold>
              ATENÇÃO: retirar a palavra "up" no quadradinho da segunda linha,
              na segunda coluna.
            </Bold>
          </P>
          <Figure source={img3} size={[1143, 874]} />
          <Figure source={img4} size={[1029, 971]} />
        </Subsection>
        <Subsection title="Aspectos Importantes no Tratamento">
          <Subsubsection title="Prioridades">
            <List>
              <LItem>Administração rápida de adrenalina;</LItem>
              <LItem>Decúbito dorsal com membros inferiores elevados;</LItem>
              <LItem>Manutenção adequada da volemia.</LItem>
            </List>
            <P>
              Os corticosteróides têm pouca ou nenhuma ação no tratamento agudo
              da anafilaxia. Devem ser usados no intuito de prevenir reação
              bifásica.
            </P>
            <P>
              Os anti histamínicos devem ser considerados agentes de segunda
              linha no tratamento da anafilaxia.
            </P>
            <P>
              Pacientes em uso de beta-bloqueadores podem necessitar de doses
              maiores de adrenalina para o mesmo efeito. Nestes casos, o ideal é
              utilizar glucagon: 5-15 μg/minuto IV (infusão contínua).
            </P>
            <P>
              A observação clínica é mandatória nos casos: mínimo de 6-8 horas;
              casos graves: 24-48 horas. Reações bifásicas podem ocorrer entre 8
              e 12 horas após o episódio agudo em 10% dos casos. Mesmo com a
              instituição precoce de tratamento adequado, até 10% das reações
              são irreversíveis.
            </P>
          </Subsubsection>
        </Subsection>
        <Subsection title="Orientações Após a Alta Hospitalar">
          <P>
            Alertar sobre a possibilidade de recorrência de sintomas até 12
            horas após o episódio.
          </P>
          <P>
            Prescrever corticosteróides por via oral (prednisona ou prednisolona
            1-2 mg/Kg/dia em dose única), por 5-7 dias e anti histamínicos H1 de
            2ª geração (fexofenadina, cetirizina, deslotaradina), nas doses
            habituais para todas as faixas etárias por, pelo menos, 7 dias.
          </P>
          <P>
            A família deve ser treinada para reconhecimento precoce dos
            sintomas, receber plano de ação para exacerbações por escrito com
            nome e dose dos medicamentos.
          </P>
          <P>
            Paciente: deverá portar cartão de identificação com as seguintes
            informações: diagnóstico, telefone de contato e plano de ação.
          </P>
          <P>
            A escola deve ser notificada sobre o risco de anafilaxia e dos
            possíveis fatores a serem evitados e sobre medidas a tomar em caso
            de emergência.
          </P>
          <P>
            Deve ser orientada a suspensão do uso de medicamentos de risco ou
            que possam interferir na eficácia do tratamento da anafilaxia, como:
            betabloqueadores, inibidores da enzima de conversão da angiotensina,
            inibidores da monoaminoxidase (MAO) entre outros.
          </P>
          <P>
            Pacientes sensíveis ao látex devem realizar procedimentos
            odontológicos e cirúrgicos em ambiente sem materiais que contenham a
            substância (látex-free). Materiais substitutos: vinil, nitrila,
            polietileno ou silicone.
          </P>
          <P>
            Todos os casos de anafilaxia devem ser encaminhados ao especialista,
            para investigação etiológica, avaliação de riscos, prevenção de
            novos episódios e tratamento de comorbidades.
          </P>
          <P>
            Tratamentos específicos devem ser conduzidos pelo alergista, são
            eles:
          </P>
          <List>
            <LItem>
              Imunoterapia específica: eficaz na anafilaxia a venenos de
              himenópteros.
            </LItem>
            <LItem>
              Dessensibilização e/ou indução de tolerância pode ser realizada
              para alguns tipos de medicamentos, quando indicados e em casos
              selecionados.
            </LItem>
            <LItem>
              Pré-tratamento para prevenção de reações: pode ser indicado nos
              casos de reações prévias em exames com radiocontrastes.
            </LItem>
          </List>
          <P>
            A Associação Brasileira de Alergia e Imunologia Clínica preconiza o
            uso de dispositivos auto injetores de adrenalina ("Epipen" ou "Ana
            Kit"). Estes dispositivos são disponibilizados em doses fixas (0,15
            mg crianças até 30 Kg; 0,3 mg para crianças maiores/adultos), porém
            no Brasil esses dispositivos ainda não são comercializados.
          </P>
        </Subsection>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Sarinho E.SC. et al, Anafilaxia. Guia Prático de Atualização Departamento de Alergia SBP 2016; 1 -8."
        />
        <Reference
          idx={2}
          body="Vieira H.M C. S, Urticária na Infância. Departamento de Alergia e Imunologia SBP. Huerel M., Aires V, Goudouris E. Urticaria e Angioedema. Emergências Pediátricas: IPPMG/UFRJ. Editora Atheneu,2000."
        />
        <Reference
          idx={3}
          body="Zuberbier T, et al. EAA CI / GA (2) LEN/EDF/WAO Guideline: definition, classification and diagnosis of urticaria. Allergy 2009 Oct; 64 (10): 1417-26."
        />
        <Reference
          idx={4}
          body="Simons FE, Ardusso LR, Bilò MB, El-Gamal YM, Ledford DK, Ring J, et al. World Allergy Organization anaphylaxis guidelines: summary. J Allergy Clin Immunol. 2011; 127(3):587-93.e1-22."
        />
        <Reference
          idx={5}
          body="Zuberbier T, et al. EAACI/GA(2) LEN/EDF/WAO Guideline: Management of Urticaria. Alllergy. 2009 Oct; 64 (10): 1427-43. "
        />
      </Section>
    </Routine>
  )
}
