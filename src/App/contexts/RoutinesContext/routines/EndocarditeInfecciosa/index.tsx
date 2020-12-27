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

export default function EndocarditeInfecciosa(): JSX.Element {
  return (
    <Routine
      id="endocardite-infecciosa"
      name="Endocardite Infecciosa (EI) na Infância"
      category="cardiologia"
      authors={['luciany']}
      tags={['bacteriana']}
    >
      <Section title="Introdução">
        <P>
          Endocardite infecciosa (EI) é uma grave afecção que acomete
          endocárdio, podendo estender-se para superfície valvar e, em algumas
          situações, endocárdio mural, trazendo graves consequências
          hemodinâmicas.
        </P>
        <P>Acomete todas as faixas etárias sem distinção de sexo.</P>
        <P>
          Menos frequente em crianças que em adultos, porém a incidência vem
          aumentando devido aos avanços no tratamento das cardiopatias
          congênitas e ao desenvolvimento de técnicas invasivas na terapêutica
          intensiva neonatal e pediátrica.
        </P>
        <Bold>Condições predisponentes na população pediátrica:</Bold>
        <List>
          <LItem>Doença reumática com acometimento cardíaco;</LItem>
          <LItem>
            Cardiopatias congênitas: principalmente anormalidades da valva
            aórtica, Tetralogia de Fallot, comunicação interventricular,
            cardiopatias congênitas complexas cianóticas especialmente quando já
            submetidas a procedimento corretivo ou paliativo (inclusive a longo
            prazo);
          </LItem>
          <LItem>Presença de próteses valvares biológicas ou mecânicas;</LItem>
          <LItem>
            Presença de cateteres venosos centrais (paciente em UTI neonatal e
            pediátrica).
          </LItem>
        </List>
        <P>
          Cerca de 8 a 10% casos ocorrem em pacientes sem cardiopatia
          estrutural, sendo nestes casos, mais frequente o acometimento de
          valvas aórtica e mitral secundário à infecção pelo{' '}
          <Italic>Staphylococcus aureus</Italic>.
        </P>
      </Section>
      <Section title="Patogenia">
        <P>
          Inicialmente, tem-se a formação de trombo asséptico com aderência de
          plaquetas e fibrina originando uma vegetação fibrinóide. O
          desenvolvimento de endocardite dependerá da inoculação suficiente de
          bactérias, permitindo a contaminação deste trombo preexistente e
          consequente aglutinação de anticorpos.
        </P>
        <P>
          O endocárdio é pobre estimulador de coagulação, porém quando sofre
          dano, torna-se potencial indutor de trombogênese, predispondo à
          aderência bacteriana. Tal fato ocorre, por exemplo, na presença de
          cateteres venosos profundos posicionados do lado direito do coração.
          Uma vez que o agente etiológico se adapte à superfície da vegetação,
          acelera a mecanismo de agregação plaquetária e deposição de fibrina,
          dificultando ação de neutrófilos e outros agentes. Quanto mais
          internos os microrganismos estiverem na vegetação, mais difícil é a
          ação bactericida dos antimicrobianos.
        </P>
        <P>
          Outro fator que favorece o desenvolvimento inicial do trombo é
          observado em cardiopatias congênitas onde há lesão associada a
          turbilhonamento de fluxo, com ou sem desvio. Nestes casos, a lesão irá
          se desenvolver no território de menor pressão (local que recebe o jato
          acelerado).
        </P>
        <P>
          Com o progredir do processo, as áreas de cicatrização podem levar a
          lesões cardíacas (especialmente no aparelho valvar). Ocorrem ainda
          reações imunitárias (formação de aglutininas e anticorpos
          bactericidas) e liberação de êmbolos infectados, ambos responsáveis
          por algumas manifestações extracardíacas.
        </P>
        <P>
          A bacteremia poderá ocorrer de forma espontânea ou durante
          procedimentos invasivos. Alguns focos extracardíacos como pneumonias e
          pielonefrites, são causas de invasão bacteriana. Cerca de 10% dos
          casos são decorrentes de fonte gengival, podendo muitos casos estarem
          associados à escovação diária. Entre os procedimentos invasivos, o
          mais frequentemente associado é a extração dentária (variando de 40 a
          100% dos casos em alguns relatos), sendo o principal agente o{' '}
          <Italic>Streptococcus viridans</Italic>.
        </P>
      </Section>
      <Section title="Manifestações Clínicas">
        <P>
          Possui apresentação amplamente clínica variável por se tratar de
          afecção sistêmica.
        </P>
        <P>Dividida em cursos agudos e subagudo:</P>
        <List>
          <LItem>
            Forma aguda: curso rápido e progressivo. Comum em valvas
            anteriormente sadias.
          </LItem>
          <LItem>
            Forma subaguda: afeta valvas já anteriormente comprometidas, podendo
            cursar por meses até a definição diagnóstica.
          </LItem>
        </List>
        <P>
          Inicialmente, as manifestações são inespecíficas como febre, sudorese,
          perda de peso, fadiga, vômitos. A febre está presente em 90% dos
          casos, podendo variar em intensidade. Esplenomegalia está presente em
          30 a 50% dos casos. Cerca de 35% dos pacientes apresentam petéquias
          especialmente em membros (superfície flexora), região palmar, mucosa
          oral e conjuntivas.
        </P>
      </Section>
      <Section title="Manifestações Cardíacas">
        <P>
          Sopro cardíaco: ocorre em 80% casos, podendo ser achado novo ou ser
          observada uma mudança na ausculta preexistente.
        </P>
        <P>
          Insuficiência cardíaca: é frequente, de caráter progressivo e
          associado ao grau de lesão das estruturas cardíacas acometidas.
        </P>
        <P>
          Abscessos: pode ocorrer no atingir miocárdio, é mais associado à
          infecções por estafilococos. Há quadro de toxemia e comprometimento
          hemodinâmico.
        </P>
        <P>Arritmias.</P>
        <P>Pericardiopatia.</P>
        <P>
          Embolizações podem ocorrer levando a pequenos infartos em diferentes
          locais (pulmões, rins, coração, cérebro, baço).
        </P>
        <P>
          Manifestações neurológicas estão presentes em cerca de 20% dos casos,
          sendo a artéria cerebral média a mais acometida. Sintomas secundários:
          cefaleia, turvação visual, parestesia, distúrbios motores e da fala,
          convulsões. Representam um pior prognóstico.
        </P>
        <Subsection title="Comprometimento Periférico">
          <List>
            <LItem>
              Nódulos de Osler: são áreas de hiperemia dolorosas nas polpas dos
              dedos em regiões de palma e/ou plantar. Secundários à reação
              imunológica e embolia séptica.
            </LItem>
            <LItem>
              Manchas de Janeway: são placas eritematosas, indolores e região
              palmar e plantar. Surgem comumente na EI causada por
              estafilococos.
            </LItem>
            <LItem>
              Manchas de Roth: são lesões retinianas pálidas circundadas por
              áreas de hemorragia.
            </LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Exames Complementares">
        <Subsection title="Exames Laboratoriais">
          <P>
            Hemograma: anemia é comum, sendo secundária a doença crônica ou por
            hemólise; leucocitose é observada em geral nos casos agudos, podendo
            não ser observada nos casos subagudos; trombocitopenia pode ocorrer,
            sendo mais comum em neonatos. Há elevação de VHS e PCR. A análise da
            urina pode demonstrar hematúria macro ou microscópica, cilindrúria e
            proteinúria. Fator reumatóide pode estar presente nos casos com
            duração superior a 6 semanas.
          </P>
          <P>
            Hemoculturas: devem ser coletadas 3 amostras de 1-3 ml para
            lactentes e crianças menores e 5-7 ml de sangue para crianças
            maiores, em momentos diferentes, portanto, em{' '}
            <Bold>punções venosas separadas</Bold>, quando da suspeita clínica
            (febre de origem indeterminada, aparecimento de novo sopro cardíaco,
            portador de cardiopatia congênita e EI prévia). Se não houver
            crescimento no 2º dia de inoculação, deverão ser coletadas mais duas
            ou três amostras.
          </P>
          <Bold>Principais agentes etiológicos:</Bold>
          <List>
            <LItem>
              <Italic>Streptococcus viridans</Italic>: principal agente após o
              primeiro ano de vida, especialmente em pacientes com cardiopatias
              congênitas.
            </LItem>
            <LItem>
              <Italic>Staphylcoccus aureus</Italic> e{' '}
              <Italic>Staphylococcus</Italic> coagulase-negativo: comuns nos
              casos de EI associadas a catéteres vasculares e próteses. As
              manifestações clínicas podem surgir 60 dias após o procedimento
              cirúrgico sendo que nas infecções por S. coagulase negativo podem
              ocorrer até um ano depois da intervenção.
            </LItem>
            <LItem>
              <Italic>Enterococcus</Italic> sp: menos comum em crianças que em
              adultos.
            </LItem>
            <LItem>
              Microorganismos do grupo HACEK: <Italic>Haemophilus</Italic> sp,{' '}
              <Italic>Aggregatibacter</Italic> sp,{' '}
              <Italic>Cardiobacterium hominis</Italic>,{' '}
              <Italic>Eikenella corrodens</Italic>, <Italic>Kingella</Italic>{' '}
              sp.
            </LItem>
            <LItem>
              Fungos: <Italic>Candida</Italic> sp (mais comum{' '}
              <Italic>C. albicans</Italic>) e <Italic>Aspergillus</Italic>. Mais
              frequentemente associadas ao uso catéteres venosos e infusão de
              concentrações altas de glicose (como na nutrição parenteral).
              Acomete especialmente neonatos.
            </LItem>
          </List>
          <P>
            Casos de EI com hemoculturas negativas são descritos (5 a 36% dos
            casos) e associados ao uso recente de antibiótico, infecção por
            agentes menos comuns e de difícil incubação.
          </P>
        </Subsection>
        <Subsection title="Ecocardiograma">
          <P>
            Determina o local da infecção, grau de comprometimento valvar e
            avalia função cardíaca. Ecocardiograma transtorácico (ETT) tem alta
            especificidade (98%) e sensibilidade (em torno 81%) na população
            pediátrica. Entretanto, a ausência de vegetações ao ecocardiograma
            não exclui diagnóstico de endocardite. Deve ser indicado o
            ecocardiograma transesofágico (ETE) para os casos em que é difícil a
            execução do ETT e quando houver EI em prótese valvar.
          </P>
        </Subsection>
      </Section>
      <Section title="Critérios Diagnósticos de Duke">
        <P>
          Descritos em 1994 para auxiliar no diagnóstico de EI. Tem valor
          preditivo negativo e positivo de 98%.
        </P>
        <Subsection title="Critérios Maiores">
          <P>Hemocultura positiva para EI:</P>
          <List>
            <LItem>Microrganismo típico consistente em 2 hemoculturas:</LItem>
            <List>
              <LItem>
                <Italic>Streptococcus viridans</Italic>,{' '}
                <Italic>Streptococcus bovis</Italic> ou grupo HACEK;
              </LItem>
              <LItem>
                <Italic>Staphylococus aureus</Italic> e enterecocos na ausência
                de foco primário.
              </LItem>
            </List>
            <LItem>
              Microrganismo consistente com EI em hemoculturas persistentemente
              positivas:
            </LItem>
            <List>
              <LItem>
                2 ou mais hemoculturas obtidas com {'>'}12h de intervalo;
              </LItem>
              <LItem>
                3 ou maioria de 4 hemoculturas (independentemente do tempo);
              </LItem>
              <LItem>
                1 hemocultura positiva para <Italic>Coxiella burnetti</Italic>.
              </LItem>
            </List>
          </List>
          <P>
            Evidência de Envolvimento Endocárdio: Ecocardiograma positivo para
            EI:
          </P>
          <List>
            <LItem>
              Massa intracardíaca móvel valvar ou subvalvar próxima a jato de
              regurgitação ou em material implantado, na ausência de diagnóstico
              anatômico;
            </LItem>
            <LItem>Abscesso;</LItem>
            <LItem>Nova deiscência parcial de prótese valvar;</LItem>
            <LItem>Nova regurgitação valvar.</LItem>
          </List>
        </Subsection>
        <Subsection title="Critérios Menores">
          <List>
            <LItem>
              Predisposição: condição cardíaca ou uso de drogas endovenosas;
            </LItem>
            <LItem>Febre: {'>'} ou igual a 38ºC;</LItem>
            <LItem>
              Fenomenos vasculares: embolias de artérias principais, infartos
              pulmonares sépticos, aneurisma micótico, hemorragia intracraniana,
              hemorragia conjuntival, lesões de Janeway.
            </LItem>
            <LItem>
              Fenômenos imunológicos: glomerulonefrites, nódulos de Osler,
              manchas de Roth e fator reumatóide.
            </LItem>
            <LItem>
              Evidência microbiológica: hemocultura positiva que não preenche
              critérios maiores ou evidência sorológica para infecção ativa por
              microrganismo sabidamente causador de EI.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="De acordo com tais critérios a EI deve ser considerada como">
          <Subsubsection title="Definitiva">
            <P>
              <Bold>
                <Italic>Por critérios patológicos:</Italic>
              </Bold>
            </P>
            <List>
              <LItem>
                Microrganismos: demonstrados por cultura ou histologia de
                vegetação, vegetação embolizada ou abscesso intracardíaco.
              </LItem>
              <LItem>
                Lesões patológicas: vegetação ou abscesso intracardíaco
                confirmado por histologia mostrando EI aguda.
              </LItem>
            </List>
            <P>
              <Bold>
                <Italic>Por critérios clínicos:</Italic>
              </Bold>
            </P>
            <List>
              <LItem>2 critérios maiores;</LItem>
              <LItem>1 critério maior e 3 menores;</LItem>
              <LItem>5 critérios menores.</LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Provável">
            <P>
              Achados consistentes com EI próximos dos casos considerados como
              definidos, mas não são considerados como ‘rejeitados’.
            </P>
          </Subsubsection>
          <Subsubsection title="Não considerados como EI ('rejeitados')">
            <List>
              <LItem>
                Diagnóstico alternativo para as manifestações <Bold>ou</Bold>
              </LItem>
              <LItem>
                Resolução das manifestações com terapia antimicrobiana por 4
                dias ou menos <Bold>ou</Bold>
              </LItem>
              <LItem>
                Ausência de evidência patológica para EI em cirurgia ou
                necrópsia após terapia antimicrobiana por 4 dias ou menos.
              </LItem>
            </List>
          </Subsubsection>
        </Subsection>
      </Section>
      <Section title="Tratamento">
        <P>
          Por tratar-se de uma doença grave como acometimento sistêmico, o
          tratamento envolve estabilização dos sistemas acometidos: correção da
          anemia (casos graves com instabilidade hemodinâmica) e dos distúrbios
          de coagulação; das alterações hidroeletrolíticas e metabólicas,
          suporte nutricional devido quadro de catabolismo; suporte neurológico
          como tratamento de convulsões e alterações associadas. Em casos graves
          de manifestação aguda pode ser necessário maior suporte hemodinâmico,
          com aminas vasoativas bem como suporte ventilatório para estabilização
          inicial.
        </P>
        <P>
          A terapia antimicrobiana bactericida deve ser iniciada após coleta de
          hemoculturas. Terapia empírica pode ser iniciada de acordo com
          suspeição clínica e dados da história clínica e localização da
          vegetação. A via de administração preconizada é{' '}
          <Bold>intravenosa</Bold>. Tempo de tratamento é prolongado com mínimo
          de 4 semanas e prolongado, para 6 semanas nos casos de: acometimento
          de próteses valvares, causados por <Italic>S aureus</Italic>{' '}
          resistentes à oxacilina e aqueles causados por germes gram negativos.
        </P>
        <P>
          Quando a EI for causada por S aureus e associada à presença de cateter
          venoso central (CVC), este deve ser removido.
        </P>
        <P>
          Seguem algumas recomendações de terapia antibiótica, porém é
          importante definir junto à equipe de infectologia pediátrica o plano
          terapêutico individualizado, de acordo com dados clínicos e o
          resultado das culturas.
        </P>
        <Table
          colWidths={[200, 200]}
          header={['Organismo/Condição', 'Recomendação Antibiótica Inicial']}
          data={[
            [
              'Agente desconhecido:\n- Valva nativa (adquirida comunidade) ou infecação tardia de prótese (> 1 ano)\n- EI nosocomial associada a CVC ou "precoce" (< 1 ano de cirurgia) em prótese valvar',
              'Ampicilina/sulbactam + gentamicina\nVancomicina + gentamicina (considerar rifampicina, se prótese)'
            ],
            [
              'Estreptococo:\n- Sensibilidade à penicilina\n- Resistência relativa à penicilina',
              'Penicilina G ou ceftriaxona\nPenicilina G + gentamicina (primeiras 2 semanas)'
            ],
            [
              'Estafilococos:\n- Sensível à meticilia\n- Resistente à meticilina',
              'Oxacilina\nVancomicina\nConsiderar associação de gentamicina nos primeiros 3 a 5 dias'
            ],
            [
              'Bacilos gram negativos',
              'Cefepime, cetriaxona, cefotaxima ou ceftazidime'
            ],
            [
              'Grupo HACEK',
              'Ceftriaxona ou cefotaxima\nou ampicilina/sulbactam'
            ],
            [
              'Fungos Candida spp, Aspergilus app',
              'Anfotericina B\nConsiderar ressecção cirúrgica'
            ]
          ]}
        />
      </Section>
      <Section title="Profilaxia (Indicações)">
        <P>
          Condições cardíacas associadas à necessidade de terapia antibiótica
          profilática quando houver procedimentos dentários (procedimentos que
          envolvam manipulação gengival ou região periapical dos dentes ou
          perfuração de mucosa bucal):
        </P>
        <List>
          <LItem>EI prévia;</LItem>
          <LItem>Presença de valvas artificiais;</LItem>
          <LItem>
            Cardiopatias congênitas cianóticas não corrigidas ou submetidas à
            apenas a intervenção paliativa;
          </LItem>
          <LItem>
            Correção de cardiopatias com dispositivos ou patchs nos primeiros 6
            meses após intervenção;
          </LItem>
          <LItem>
            Cardiopatias congênitas submetidas a cirurgia corretiva, mas com
            lesões residuais;
          </LItem>
          <LItem>Transplante cardíaco;</LItem>
        </List>
        <P>
          Nestes casos, está recomendado uso de antibiótico 60 minutos antes da
          intervenção: primeira escolha: amoxicilina (50mg/kg oral){' '}
          <Bold>ou</Bold> ampicilina (50mg/kg oral ou parenteral). Para os
          alérgicos, há a opção de clindamicina (20mg/kg oral ou parenteral),
          azitromicina (15mg/kg) ou claritromicina (15mg/kg).
        </P>
        <P>
          Até o momento, não ha dados que justifiquem o tratamento profilático
          antes da realização de procedimentos do trato respiratório,
          genitourinário ou gastrointestinal.
        </P>
      </Section>
      <Section title="Prognóstico">
        <P style={{ fontWeight: 'bold' }}>
          Algumas situações estão associadas a pior prognóstico:
        </P>
        <List>
          <LItem>Presença de próteses valvares;</LItem>
          <LItem>Lesões do lado esquerdo do coração;</LItem>
          <LItem>
            EI causada por <Italic>S. aureus</Italic> ou fungos;
          </LItem>
          <LItem>EI prévia;</LItem>
          <LItem>
            Sintomas clínicos por período prolongado ({'>'} 3 meses);
          </LItem>
          <LItem>Cardiopatias congênitas cianóticas;</LItem>
          <LItem>Presença de shunts sistêmico-pulmonares;</LItem>
          <LItem>Resposta antibiótica pobre à terapia antimicrobiana.</LItem>
        </List>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="BALTIMORE, Robert S. et al. Infective Endocarditis inChildhood: 2015 Update a Scientific Statement from the American Heart Association. Circulation. 2015: 132:1487-1515."
        />
        <Reference
          idx={2}
          body="CROTI, Ulisses Alexandre; MATTOS, Sandra da Silva; PINTO JR, Valdester Cavalcante; AIELLO, Vera Demachi. Cardiologia e Cirurgia Cardiovascular Pediatrica. 1ª edição. São Paulo: Roca. 2008."
        />
        <Reference
          idx={3}
          body="HABIB, Gilbert et al. 2015 ESC Guidelines for the management do infective endocaditis: The Task Force on Infective Endocardites of the European Society of Cardiology. European Heart Journal. 2015; 36: 3075-3123."
        />
      </Section>
    </Routine>
  )
}
