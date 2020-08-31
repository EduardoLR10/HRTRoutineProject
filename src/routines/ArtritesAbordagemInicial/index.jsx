import React from 'react'
import Figure from '../../components/templates/Figure'
import { List, LItem } from '../../components/templates/List'
import P from '../../components/templates/Paragraph'
import Reference from '../../components/templates/Reference'
import Routine from '../../components/templates/Routine'
import Section from '../../components/templates/Section'
import Subsection from '../../components/templates/Subsection'
import Subsubsection from '../../components/templates/Subsubsection'
import Table from '../../components/templates/Table'

export default class ArtritesAbordagemInicial extends React.Component {

  static title = "Artrites Abordagem Inicial"
  static category = "Emergência e Terapia Intensiva"
  static authors = "Dra. Dania Lemos Dionízio"
  static tags = ["artrite", "dor", "articular"]

    render = () =>
      <Routine title={ArtritesAbordagemInicial.title} category={ArtritesAbordagemInicial.category} authors={ArtritesAbordagemInicial.authors}>
        <P>
            Para abordagem inicial das artrites, é necessário fazer uma anamnese dirigida e detalhada e algumas considerações devem ser feitas no que se refere às definições. A primeira delas diz respeito à diferenciação entre artrite e artralgia. A artralgia corresponde apenas à dor articular, enquanto a artrite envolve processo inflamatório, com edema, limitação à mobilização, calor e rubor local, além da dor. É importante caracterizar a artrite quanto ao número de articulações acometidas, ao envolvimento de pequenas ou grandes articulações, à duração da artrite e se existem sinais sistêmicos associados (febre, rash cutâneo, perda de peso, palidez, púrpuras, petéquias, sudorese noturna, adenomegalia, hepatoesplenomegalia, dor óssea).
        </P>
        <P>
            As artrites podem ser classificadas em agudas e crônicas em relação à sua duração; até 6 semanas são agudas e com duração acima disso, as artrites são consideradas crônicas.
        </P>
        <List>
            <LItem>
                Artrites agudas;
            </LItem>
            <LItem>
                Infecciosas, que englobam as artristes sépticas e as reativas;
            </LItem>
            <LItem>
                Hematológicas (anemias hemolíticas, hemofilias, leucoses);
            </LItem>
            <LItem>
                Traumáticas;
            </LItem>
            <LItem>
                Ortopédicas;
            </LItem>
            <LItem>
                Reumatológicas (febre reumática, púrpura de Henoch-Schönlein, lúpus eritematoso sistêmico).
            </LItem>
        </List>
        <P>
            Os casos preocupantes na Emergência referem-se às artrites agudas, especialmente de causas infecciosas e hematológicas!
        </P>
        <Section title="Artrites Crônicas">
            <List>
                <LItem>
                    Infecciosas (tuberculose);
                </LItem>
                <LItem>
                    Lúpus Eritematoso sistêmico;
                </LItem>
                <LItem>
                    Artrite idiopática juvenil.
                </LItem>
            </List>
        </Section>
        <Section title="Causas Infecciosas">
            <P>
                As artrites de causas infecciosas podem ser sépticas e reativas ou pós-infecciosas.
            </P>
            <Subsection title="Artrite Séptica">
                <P>
                    Caracteriza-se pela presença do agente infeccioso bacteriano no espaço sinovial e se configura uma urgência médica! Elas são mais comuns no sexo masculino com disseminação por via hematogênica na maioria dos casos. Geralmente trata-se de monoartrite em membros inferiores (joelho ou quadril), com edema e calor local importantes, diminuição da mobilidade até impotência funcional do membro. Caracteriza-se por comprometimento do estado geral, febre elevada e posição antálgica. Geralmente, há história de trauma prévio ou porta de entrada identificável. Em se tratando de uma monoartrite com hipótese de artrite séptica, há indicação ABSOLUTA de punção articular – ainda no Pronto Socorro, para análise do líquido sinovial, além da realização de cultura para identificação do agente causal. Os exames laboratoriais podem revelar hemograma com anemia e leucocitose com neutrofilia; as provas de atividade inflamatórias encontram-se elevadas (VHS e PCR). Quanto aos exames de imagem, a radiografia simples pode mostrar abaulamento de cápsula articular; a ultrassonografia da articulação acometida mostra aumento do líquido intra-articular. Cintilografia, TC e RM revelam sinais de processo inflamatório.
                </P>
                <P>
                    A tuberculose também é uma causa importante de artrite infecciosa e sua disseminação da doença ocorre por via hematogênica de um foco primário. O diagnóstico é feito por meio de uma completa anamnese e exame físico cuidadoso. Manifesta-se, na maioria das vezes, como monoartrite com aumento de volume articular e dor, a qual é de instalação insidiosa e progressiva. O derrame articular não apresenta sinais flogísticos exuberantes. As articulações mais frequentemente acometidas são coluna vertebral, quadril e joelhos. O diagnóstico laboratorial é feito pelo achado do bacilo por meio de cultura de materiais como líquido sinovial, escarro e urina, e também pela reação em cadeia polimerase, mas outros exames podem fornecer informações indiretas: hemograma pode mostrar discreta a moderada leucocitose, às vezes com linfocitose; a positividade do teste tuberculínico evidencia a infecção tuberculosa de forma indireta. As alterações nos exames de radiologia convencional são úteis, apesar de muitas das alterações serem tardias. Eles revelam aumento de partes moles, irregularidades na superfície articular e área de destruição óssea com pouca reação periosteal. No comprometimento de coluna, ocorre diminuição assimétrica do espaço intervertebral e osteoporose regional. Podem ser necessárias tomografia computadorizada e cintilografia óssea, em uma fase mais inicial.
                </P>
            </Subsection>
            <Subsection title="Artrite Reativa ou Pós Infecciosa">
                <P>
                    Geralmente se desenvolve após uma infecção extra-articular (trato geniturinário, gastrointestinal ou de vias aéreas superiores) e mais frequentemente, há manifestação de artralgia ou artrite em várias articulações. Vale ressaltar a importância de uma anamnese bem feita, chamando atenção para os antecedentes pessoais patológicos e vacinais. Os germes mais frequentemente encontrados são: vírus( rubéola, varicela, caxumba, hepatite, herpes, adenovírus, parvovírus, CMV, EBV) ; bactérias (estreptococo beta-hemolítico do grupo A, estafilococos aureus, pneumococo, enterobactérias – Yersinia, Salmonella, Shigela, Campilobacter, Clamydia) ; parasitas (toxocaríase, esquistossomose, giardíase, ascaridíase, estrogiloidíase). Os exames laboratoriais podem revelar anemia leve, às vezes com leucocitose e plaquetose. As provas de atividade inflamatória podem se mostrar elevadas. O agente causal pode ser identificado por meio de sorologias, culturas, EPF (MIF), coprocultura ou cultura de secreção uretral.
                </P>
            </Subsection>
        </Section>
        <Section title="Causas Hematológicas">
            <P>
                Refere-se especialmente às hemoglobinopatias, principalmente anemia falciforme e talassemia. Nestes quadros, a artrite tende a ser simétrica, com duração de 1 a 3 semanas, e bastante dolorosa. A hemofilia manifesta-se, em geral, como monoartrite, apresentando hemorragia intra-articular (pesquisar histórico da criança e da família). Muito frequentemente, as leucemias podem iniciar o quadro com sintomas articulares, que podem preceder as outras manifestações sistêmicas (hepatoesplenomegalia, palidez e alterações laboratoriais). Na maioria das vezes, apresenta-se com artralgia, mas pode haver o desenvolvimento de artrite.
            </P>
        </Section>
        <Section title="Causas Traumato-Ortopédicas">
            <List>
                <LItem>
                    Lesões traumáticas;
                </LItem>
                <LItem>
                    Corpo estranho intra-articular.
                </LItem>
            </List>
        </Section>
        <Section title="Doenças Reumatológicas">
            <P>
                Geralmente o diagnóstico é feito, na maioria dos casos, na enfermaria.
            </P>
            <P>
                Lúpus eritematoso sistêmico juvenil: a artrite corresponde a um dos critérios diagnósticos e pode acometer pequenas ou grandes articulações, de forma aguda ou crônica; pode ser deformante, mas não erosiva.
            </P>
            <P>
                Artrite idiopática juvenil: por definição, trata-se de uma artrite crônica e sempre deve ser um diagnóstico de exclusão.
            </P>
            <P>
                Púrpura de Henoch-Schönlein: a artrite geralmente é aguda e acomete grandes articulações, concomitantemente ao quadro purpúrico.
            </P>
            <P>
                Doença de Kawasaki: a artrite é um dos critérios para o diagnóstico desta vasculite, ocorrendo no período febril.
            </P>
            <P>
                Dermatomiosite juvenil: manifestações mais importantes são fraqueza muscular e alterações cutâneas características, mas pode manifestar artrite também.
            </P>
            <P>
                Doenças autoinflamatórias: síndrome CINCA, febre familiar do Mediterrâneo, síndrome da hiperimunoglobulinemia D.
            </P>
            <P>
                Importante lembrar que em qualquer quadro articular sem diagnóstico definido NÃO SE DEVE PRESCREVER ANTI-INFLAMATÓRIOS! Enquanto o paciente está em fase de investigação diagnóstica, é indicado apenas analgésicos, para que não haja interferência nos exames realizados assim como no quadro clínico, a fim de não mascarar a evolução, o que retarda sobremaneira o diagnóstico, comprometendo o prognóstico.
            </P>
        </Section>
        <Section title="Referências">
        <Reference idx={1} body="Oliveira, SKF.; Azevedo, ECL. Reumatologia Pediátrica. 2.ed .Rio de Janeiro: Revinter, 2001."/>
        <Reference idx={2} body="Cassidy, JT(coord). Textbook of Rheumatology. 2.ed.Philadelphia: Elsevier, 2010."/>
        <Reference idx={3} body="Oliveira, SKF.Reumatologia para Pediatras. 1.ed .Rio de Janeiro: Revinter, 2003."/>
        <Reference idx={4} body="Oliveira, SKF; Rodrigues, MCF. Reumatologia na Prática para Pediatras. 1.ed .Rio de Janeiro: Revinter, 2010."/>
        <Reference idx={5} body="Terreri, MTRA; Sacchetti, SB. Reumatologia para o Pediatra. Sociedade de Pediatria de São Paulo, Departamento de Pediatria. 1.ed. São Paulo: Atheneu, 2008."/>
        <Reference idx={6} body="Al Saadi MM, Al Zamil FA, Bokhary NA, Al Shamsan LA, Al Alola SA, Al Elissa YS. Acute septic arthritis in children. Pediatric Int. 2009;51(3):377-80."/>
        <Reference idx={7} body="Cassidy JT, Petty RE, Laxer R, Lindsley C. Textbook of pediatric rheumatology: expert consult: online and print. Philadelphia: Saunders (Elsevier); 2011."/>
        <Reference idx={8} body="Gupta D, Singh S, Suri D, Ahluwalia J, Das R, Varma N. Arthritic presentation of acute leukemia in children: experience from a tertiary care centre in North India. Rheumatol Int. 2010;30(6):767-70."/>
        <Reference idx={9} body="Lehman TJ. It’s not just growing pains: a guide to childhood muscle, bone and joint pain, rheumatic diseases and the latest treatment. New York: Oxford United Press; 2004."/>
        <Reference idx={10} body="Prabhu AS, Balan S. Approach to a child with monoarthritis. Indian J Pediatr. 2010;77(9):997-1004."/>
        </Section>
    </Routine>
}