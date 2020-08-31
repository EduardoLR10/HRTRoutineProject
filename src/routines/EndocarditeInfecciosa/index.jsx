import React from 'react'
import { Text } from 'react-native';
import Figure from '../../components/templates/Figure'
import { List, LItem } from '../../components/templates/List'
import P from '../../components/templates/Paragraph'
import Reference from '../../components/templates/Reference'
import Routine from '../../components/templates/Routine'
import Section from '../../components/templates/Section'
import Subsection from '../../components/templates/Subsection'
import Subsubsection from '../../components/templates/Subsubsection'
import Table from '../../components/templates/Table'

export default class EndocarditeInfecciosa extends React.Component {

  static title = "Endocardite Infecciosa (EI) na Infância"
  static category = "Cardiologia"
  static authors = "Dra. Luciany Carvalho"
  static tags = ["bacteriana"]

    render = () =>
      <Routine title={EndocarditeInfecciosa.title} category={EndocarditeInfecciosa.category} authors={EndocarditeInfecciosa.authors}>
          <Section title="Introdução">
            <P>
                Endocardite infecciosa (EI) é uma grave afecção que acomete endocárdio, podendo estender-se para superfície valvar e, em algumas situações, endocárdio mural, trazendo graves consequências hemodinâmicas.
            </P>
            <P>
                Acomete todas as faixas etárias sem distinção de sexo. 
            </P>
            <P>
                Menos frequente em crianças que em adultos, porém incidência vem aumentando devido avanço no tratamento das cardiopatias congênitas e desenvolvimento de técnicas invasivas na terapêutica intensiva neonatal e pediátrica. 
            </P>
            <P>
                Condições predisponentes na população pediátrica: 
            </P>
            <List>
                <LItem>
                    Doença reumática com acometimento cardíaco;
                </LItem>
                <LItem>
                    Cardiopatias congênitas: principalmente anormalidades da valva aórtica, Tetralogia de Fallot, comunicação interventricular, cardiopatias congênitas complexas cianóticas especialmente quando já submetidas a procedimento corretivo ou paliativo (inclusive a longo prazo);
                </LItem>
                <LItem>
                    Presença de próteses valvares biológicas ou mecânicas;
                </LItem>
                <LItem>
                    Presença de cateteres venosos centrais (paciente em UTI neonatal e pediátrica).
                </LItem>
            </List>
            <P>
                Cerca de 8 a 10% casos ocorrem em pacientes sem cardiopatia estrutural, sendo nestes casos, mais frequente o acometimento de valvas aórtica e mitral secundário a <Text style={{fontStyle: 'italic'}}>Staphylococcus aureus</Text>.
            </P>
          </Section>
          <Section title="Patogenia">
            <P>
                Inicialmente, tem-se a formação de trombo asséptico com aderência de plaquetas e fibrina originando uma vegetação fibrinóide. O desenvolvimento de endocardite dependerá da inoculação suficiente de bactérias permitindo a contaminação deste trombo preexistente e consequente aglutinação de anticorpos. 
            </P>
            <P>
                O endocárdio é pobre estimulador de coagulação, porém quando sofre dano, torna-se potencial indutor de trombogênese, predispondo a aderência bacteriana. Tal fato ocorre, por  exemplo, na presença de cateteres venosos profundos posicionados do lado direito do coração. Uma vez que o agente etiológico se adapte à superfície da vegetação, acelera a mecanismo de agregação plaquetária e deposição de fibrina dificultando ação de neutrófilos e outros agentes. Quanto mais internos os microrganismos estiverem na vegetação, mais difícil é ação bactericida dos antimicrobianos.
            </P>
            <P>
                Outro fator que favorece o desenvolvimento inicial do trombo é observado em cardiopatias congênitas onde há lesão associada a turbilhonamento de fluxo, com ou sem desvio. Nestes casos a lesão irá se desenvolver no território de menor pressão (local que recebe o jato acelerado).
            </P>
            <P>
                Com o progredir do processo as áreas de cicatrização podem levar a lesões cardíacas (especialmente no aparelho valvar). Ocorrem ainda reações imunitárias (formação de aglutininas e anticorpos bactericidas) e liberação de embolos infectados ambos responsáveis por algumas manifestações extracardíacas.
            </P>
            <P>
                A bacteremia poderá ocorrer de forma espontânea ou durante procedimentos invasivos. Alguns focos extracardíacas como pneumonias e pielonefrites são causas de invasão bacteriana. Cerca de 10% dos casos são decorrentes de fonte gengival, podendo muitos casos estarem associados a escovação diária. Entre os procedimentos invasivos o mais frequentemente associado é a extração dentaria (variando de 40 a 100% dos casos em alguns relatos) sendo principal agente o <Text style={{fontStyle: 'italic'}}>Streptococcus viridans</Text>.
            </P>
          </Section>
          <Section title="Manifestações Clínicas">
            <P>
                Apresentação amplamente variável por se tratar de afecção sistêmica. 
            </P>
            <P>
                Dividida em cursos agudos e subagudo:
            </P>
            <List>
                <LItem>
                    Forma aguda: curso rápido e progressivo. Comum em valvas anteriormente sadias.
                </LItem>
                <LItem>
                    Forma subaguda: afeta valvas já antes comprometidas, podendo cursar por meses até definição diagnóstica.
                </LItem>
            </List>
            <P>
                Inicialmente, manifestações inespecíficas como febre, sudorese, perda de peso, fadiga, vômitos. A febre esta presente em 90% dos casos podendo variar em intensidade. Esplenomegalia está presente em 30 a 50% dos casos. Cerca de 35% dos pacientes apresentam petéquias especialmente em membros (superfície flexora), região palmar, mucosa oral e conjuntivas.
            </P>
          </Section>
          <Section title="Manifestações Cardíacas">
             <P>
                Sopro cardíaco: 80% casos, podendo ser achado novo ou ser observada mudança na ausculta preexistente. 
             </P>
             <P>
                Insuficiência cardíaca: frequente, caráter progressivo e associado ao grau de lesão das estruturas cardíacas acometidas. 
             </P>
             <P>
                Abscessos: pode atingir miocárdio, mais associado infecções por estafilococos. Quadro de toxemia e comprometimento hemodinâmico. 
             </P>
             <P>
                Arritmias;
             </P>
             <P>
                Pericardiopatia.
             </P>
             <P>
                Embolizações podem ocorrer levando a pequenos infartos em diferentes locais (pulmões, rins, coração, cérebro, baço). 
             </P>
             <P>
                Manifestações neurológicas estão presentes em cerca de 20% dos casos sendo a artéria cerebral  media a mais acometida. Sintomas secundários: cefaleia, turvação visual, parestesia, distúrbios motores e da fala, convulsões. Representam um pior prognostico.
             </P>
             <Subsection title="Comprometimento Periférico">
                <List>
                    <LItem>
                        Nodulos de Osler: áreas de hiperemia dolorosas nas polpas dos dedos em região palma e/ou plantar. Secundarios a reação imunológica e embolia séptica.
                    </LItem>
                    <LItem>
                        Manchas de Janeway: placas eritematosas, indolores e região palmar e plantar. Comum na etiologia por estafilococos.
                    </LItem>
                    <LItem>
                        Manchas de Roth: lesões retinianas pálidas circundadas por áreas de hemorragia.
                    </LItem>
                </List>
             </Subsection>
          </Section>
          <Section title="Exames Complementares">
            <Subsection title="Exames Laboratoriais">
                <P>
                    Hemograma: anemia é comum sendo secundaria a doença crônica ou por hemólise; leucocitose observada em geral nos casos agudos podendo não ser observada nos casos subagudos; trombocitopenia pode ocorrer sendo mais comum em neonatos. Elevação de VHS e PCR. Analise urina pode demonstrar hematúria macro ou microscópica, cilindrúria e proteinúria. Fator reumatoide pode estar presente nos casos com duração superior a 6 semanas.

                </P>
                <P>
                    Hemoculturas: devem ser coletadas 3 amostras de 1-3ml para lactentes e crianças menores e 5-7ml de sangue para crianças maiores, em momentos diferentes, portanto, em punções venosas separadas, quando da suspeita clínica (febre de origem indeterminada, aparecimento de novo sopro cardíaco, portador de cardiopatia congênita e EI previa). Se não houve crescimento no 2º dia de inoculação, devem ser coletadas mais duas ou três amostras. Principais agentes etiológicos:
                </P>
                <List>
                    <LItem>
                        <Text style={{fontStyle: 'italic'}}>Steptococcus viridans</Text>: principal agente após o primeiro ano de vida, especialmente em pacientes com cardiopatias congênitas.
                    </LItem>
                    <LItem>
                        <Text style={{fontStyle: 'italic'}}>Staphylcoccus aureus</Text> e <Text style={{fontStyle: 'italic'}}>Staphylococcus</Text> coagulase-negativo: comuns nos casos de EI associadas a cateteres vasculares e próteses. Manifestação clínica pode ocorrer após 60 dias do procedimento cirúrgico sendo que nas infecções por S coagulase negativo pode ocorrer até um ano após intervenção. 
                    </LItem>
                    <LItem>
                        <Text style={{fontStyle: 'italic'}}>Enterococcus</Text> sp: menos comum em crianças que em adultos.
                    </LItem>
                    <LItem>
                        Microorganismos do grupo HACEK: <Text style={{fontStyle: 'italic'}}>Haemophilus</Text> sp, <Text style={{fontStyle: 'italic'}}>Agrregatibacter</Text> sp, <Text style={{fontStyle: 'italic'}}>Cardiobacterium hominis</Text>, <Text style={{fontStyle: 'italic'}}>Eikenella corrodens</Text>, <Text style={{fontStyle: 'italic'}}>Kingella</Text> sp.
                    </LItem>
                    <LItem>
                        Fungos: <Text style={{fontStyle: 'italic'}}>Candida</Text> sp (mais comum <Text style={{fontStyle: 'italic'}}>C albicans</Text>) e <Text style={{fontStyle: 'italic'}}>Aspergillus</Text>. Mais frequentemente associadas ao uso cateteres venosos e infusão de concentrações altas de glicose (como na nutrição parenteral). Acomete especialmente neonatos.
                    </LItem>
                </List>
                <P>
                    Casos de EI com hemoculturas negativas são descritos (5 a 36% dos casos) e associados ao uso recente de antibiótico, infecção por agentes menos comuns e de difícil incubação.
                </P>
            </Subsection>
            <Subsection title="Ecocardiograma">
                <P>
                    Determina local da infecção, grau de comprometimento valvar e avalia função cardíaca. Ecocardiograma transtoracico (ETT) tem alta especificidade (98%) e sensibilidade (em torno 81%) na população pediátrica. Entretanto, ausência de vegetações ao ecocardiograma não exclui diagnóstico de endocardite. Deve ser indicado o ecocardiograma transesofagico (ETE) para os casos em que é difícil execucação do ETT e quando EI em prótese valvar.
                </P>
            </Subsection>
          </Section>
          <Section title="Critérios Diagnósticos de Duke">
            <P>
                Descritos em 1994 para auxiliar no diagnóstico de EI. Tem valor preditivo negativo e positivo de 98%. 
            </P>
            <Subsection title="Critérios Maiores">
                <P>
                    Hemocultura positiva para EI:
                </P>
                <Subsubsection title="Microrganismo típico consistente em 2 hemoculturas">
                    <List>
                        <LItem>
                            <Text style={{fontStyle: 'italic'}}>Streptococcus viridans</Text>, <Text style={{fontStyle: 'italic'}}>Streptococcus bovis</Text> ou grupo HACEK.
                        </LItem>
                        <LItem>
                            <Text style={{fontStyle: 'italic'}}>Staphylococus aureus</Text> ou enterecocos na ausência de foco primário.
                        </LItem>
                    </List>
                </Subsubsection>
                <Subsubsection title="Microrganismo consistente com EI em hemoculturas persistentemente positivas">
                    <List>
                        <LItem>
                            2 ou mais hemoculturas obtidas com {'>'}12h de intervalo;
                        </LItem>
                        <LItem>
                            3 ou maioria de 4 hemoculturas (independentemente do tempo);
                        </LItem>
                        <LItem>
                            1 hemocultura positiva para <Text style={{fontStyle: 'italic'}}>Coxiella burnetti</Text>.
                        </LItem>
                    </List>
                </Subsubsection>
                <Subsubsection title="Evidência de Envolvimento Endocárdio: Ecocardiograma positivo para EI">
                    <List>
                        <LItem>
                            Massa intracardíaca móvel valvar ou subvalvar próxima a jato de regurgitação ou em material implantando, na ausência de diagnóstico anatômico.
                        </LItem>
                        <LItem>
                            Abscesso;
                        </LItem>
                        <LItem>
                            Nova deiscência parcial de prótese valvar;
                        </LItem>
                        <LItem>
                            Nova regurgitação valvar.
                        </LItem>
                    </List>
                </Subsubsection>
            </Subsection>
            <Subsection title="Critérios Menores">
                <List>
                    <LItem>
                        Predisposição: condição cardíaca ou uso de drogas endovenosas;
                    </LItem>
                    <LItem>
                        Febre: {'>'} ou igual a 38ºC;
                    </LItem>
                    <LItem>
                        Fenomenos vasculares: embolias de artérias principais, infartos pulmonares sépticos, aneurisma micótico, hemorragia intracraniana, hemorragia conjuntival, lesões de Janeway.
                    </LItem>
                    <LItem>
                        Fenômenos imunológicos: glomerulonefrites, nódulos de Osler, manchas de Roth e fator reumatoide.
                    </LItem>
                    <LItem>
                        Evidencia microbiológica: hemocultura positiva que não preenche critérios maiores ou evidencia sorológica para infecção ativa por microrganismo sabidamente causador de EI.
                    </LItem>
                </List>
            </Subsection>
            <Subsection title="De acordo com tais critérios tem-se EI considerada como">
                <Subsubsection title="Definitiva">
                    <P>
                        Por critérios patológicos: 
                    </P>
                    <List>
                        <LItem>
                            Microrganismos: demonstrados por cultura ou histologia de vegetação, vegetação embolizada ou abscesso intracardíaco. 
                        </LItem>
                        <LItem>
                            Lesões patológicas: vegetação ou abcesso intracardíaco confirmado por histologia mostrando EI aguda
                        </LItem>
                    </List>
                    <P>
                        Por critérios clínicos:
                    </P>
                    <List>
                        <LItem>
                            2 critérios maiores;
                        </LItem>
                        <LItem>
                            1 critério maior e 3 menores;
                        </LItem>
                        <LItem>
                            5 critérios menores.
                        </LItem>
                    </List>
                </Subsubsection>
                <Subsubsection title="Provável">
                    <P>
                        Achados consistentes com EI próximos dos casos considerados como definidos, mas não são considerados como ‘rejeitados’.
                    </P>
                </Subsubsection>
                <Subsubsection title="Não considerados como EI ('rejeitados')">
                    <List>
                        <LItem>
                            Diagnóstico alternativo para as manifestações ou
                        </LItem>
                        <LItem>
                            Resolução das manifestações com terapia antimicrobiana por 4 dias ou menos ou
                        </LItem>
                        <LItem>
                            Ausência de evidencia patológica para EI em cirurgia ou necropsia após terapia antimicrobiana por 4 dias ou menos.
                        </LItem>
                    </List>
                </Subsubsection>
            </Subsection>
          </Section>
          <Section title="Tratamento">
            <P>
                Por trata-se de uma doença grave como acometimento sistêmico, o tratamento envolve estabilização dos sistemas acometidos: correção anemia (casos graves com instabilidade hemodinâmica) e de distúrbios de coagulação; alterações hidroeletrolíticos e metabólicos, suporte nutricional devido quadro de catabolismo; suporte neurológico como tratamento de convulsões e alterações associadas. Em casos graves de manifestação aguda pode ser necessário maior suporte hemodinâmico com aminas vasoativas bem como suporte ventilatório para estabilização inicial.
            </P>
            <P>
                Terapia antimicrobiana bactericida deve ser iniciada após coleta de hemoculturas. Se quadro de estabilidade hemodinâmica podem ser aguardadas 48h para observar crescimento bacteriano e repetidas culturas, se negativas. 
            </P>
            <P>
                Via de administração preconizada é venosa. Tempo de tratamento é prolongado com mínimo de 4 semanas e prolongado para 6 semanas nos casos com acometimento de próteses valvares, S aureus resistentes a oxacilina e germes gram negativos. 
            </P>
            <P>
                Quando EI causada por S aureus e associada a presença de cateter venoso central (CVC), este deve ser removido.
            </P>
            <P>
                Terapia empírica pode ser iniciada de acordo com suspeição clínica e dados da história clínica e localização da vegetação, 
            </P>
            <Table head={['Organismo/Condição', 'Recomendação Antibiótica Inicial']} data={[
            ['Agente desconhecido:\n- Valva nativa (adquirida comunidade) ou infecação tardia de prótese (> 1 ano)\n- EI nosocomial associada a CVC ou "precoce" (< 1 ano de cirurgia) em prótese valvar', 'Ampicilina/sulbactam + gentamicina\nVancomicina + gentamicina (considerar rifampicina se prótese)'],
            ['Estreptococo:\n- Sensibilidade e penicilina\n- Resistência relativa a Penicilina', 'Penicilina G ou ceftriaxona\nPenicilina G + gentamicina (primeiras 2 semanas)'],
            ['Estafilococos:\n- Sensível a meticilia\n- Resistente a meticilina', 'Oxacilina\nVancomicina\nConsiderar associação de gentamicina nos primeiros 3 a 5 dias.'],
            ['Bacilos gram negativos', 'Cefepime, cetriaxona, cefotaxima ou ceftazidime'],
            ['Grupo HACEK', 'Ceftriaxona ou cefotaxima\nOu ampicilina/sulbactam'],
            ['Fungos Candida spp, Aspergilus app', 'Anfotericina B\nConsiderar ressecção cirúrgica']
            ]} />
          </Section>
          <Section title="Profilaxia">
            <P>
                Condições cardíacas associadas a necessidade de terapia antibiótica profilática quando de procedimentos dentários (procedimentos que envolvem manipulação gengival ou região periapical dos dentes ou perfuração de mucosa bucal):
            </P>
            <List>
                <LItem>
                    EI prévia;
                </LItem>
                <LItem>
                    Presença de valvas artificiais;
                </LItem>
                <LItem>
                    Cardiopatias congênitas cianóticas não corrigidas ou submetidas apenas a intervenção paliativa;
                </LItem>
                <LItem>
                    Correção de cardiopatias com dispositivos ou patchs nos primeiros 6 meses após intervenção;
                </LItem>
                <LItem>
                    Cardiopatias congênitas submetidas a cirurgia corretiva, mas com lesões residuais;
                </LItem>
                <LItem>
                    Transplante cardíaco;
                </LItem>
            </List>
          </Section>
          <Section title="Prognóstico">
            <P style={{fontWeight: 'bold'}}>
                Algumas situações estão associadas a pior prognóstico:
            </P>
            <List>
                <LItem>
                    Presença de próteses valvares;
                </LItem>
                <LItem>
                    Lesões do lado esquerdo do coração;
                </LItem>
                <LItem>
                    EI causada por S aureus ou fungos;
                </LItem>
                <LItem>
                    EI prévia;
                </LItem>
                <LItem>
                    Sintomas clínicos por período prolongado ({'>'} 3 meses);
                </LItem>
                <LItem>
                    Cardiopatias congnitas cianóticas;
                </LItem>
                <LItem>
                    Presença de shunts sistêmico-pulmonares;
                </LItem>
                <LItem>
                    Resposta antibiótica pobre a terapia antimicrobiana.
                </LItem>
            </List>
          </Section>
        <Section title="Referências">
        <Reference idx={1} body="BALTIMORE, Robert S. et al. Infective Endocarditis inChildhood: 2015 Update a Scientific Statement from the American Heart Association. Circulation. 2015: 132:1487-1515."/>
        <Reference idx={2} body="CROTI, Ulisses Alexandre; MATTOS, Sandra da Silva; PINTO JR, Valdester Cavalcante; AIELLO, Vera Demachi. Cardiologia e Cirurgia Cardiovascular Pediatrica. 1ª edição. São Paulo: Roca. 2008."/>
        <Reference idx={3} body="HABIB, Gilbert et al. 2015 ESC Guidelines for the management do infective endocaditis: The Task Force on Infective Endocardites of the European Society of Cardiology. European Heart Journal. 2015; 36: 3075-3123."/>
        </Section>
    </Routine>
}