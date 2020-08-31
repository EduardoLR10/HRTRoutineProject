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

export default class ArtriteReativa extends React.Component {

  static title = "Artrites Reativas ou Reacionais (AR)"
  static category = "Hematologia, Reumatologia e Nefrologia"
  static authors = "Dra. Dania Lemos Dionízio"
  static tags = ["artrite", "artralgia", "reacional"]

    render = () =>
      <Routine title={ArtriteReativa.title} category={ArtriteReativa.category} authors={ArtriteReativa.authors}>
        <Section title="Conceito">
            <P>
                Ocorrem apenas com dor - artralgia ou apresentando sinais inflamatórios locais como dor, calor, rubor e dificuldade à mobilização da articulação - artrite, que acontecem na vigência ou secundariamente à processos infecciosos ou parasitários à distância, com o microorganismo ou parasita detectado ou não no foco primário, mas indetectável na articulação, que através de um mecanismo imunológico irá desencadear uma artropatia inflamatória estéril em indivíduos geneticamente suscetíveis.
            </P>
        </Section>
        <Section title="Aspectos Gerais">
            <P>
                As AR(s) tem como característica um período de latência variável de 1 semana a 3 meses, podendo ocorrer antes, durante ou após o quadro clínico do processo infeccioso das vias aéreas superiores(VAS) e dos tratos geniturinário e gastrointestinal. Mono, oligo e eventualmente poliartrite de articulações distais podem ocorrer (joelhos e mãos), com sinovite discreta, que num período de 2 a 12 semanas desaparecem sem deixar sequelas. A recorrência pode acontecer, secundária a nova agressão antigênica. Na infância, o agente etiológico é variável de acordo com a faixa etária, sendo as infecções virais de VAS e antígenos vacinais as mais comuns em lactentes e pré-escolares; as enteroinfecções predominam nos escolares e, nos adolescentes, as infecções genitais por clamídia.
            </P>
        </Section>
        <Section title="Etiologia">
            <Subsection title="Bactérias">
                <List>
                    <LItem>
                        Estreptococo beta-hemolítico do grupo A;
                    </LItem>
                    <LItem>
                        Enterobactérias: Yersinia, Campilobacter, Shigela, Salmonela, Klebisiela;
                    </LItem>
                    <LItem>
                        Clostridium sp., E. coli, Estreptococo sp., Pseudomonas, H. pilori;
                    </LItem>
                    <LItem>
                        Lactobacilus sp;
                    </LItem>
                    <LItem>
                        Estafilococo aureus;
                    </LItem>
                    <LItem>
                        Hemofilus influenza;
                    </LItem>
                    <LItem>
                        Neisseria meningitidis;
                    </LItem>
                    <LItem>
                        Micobacterium leprae / tuberculosis.
                    </LItem>
                </List>
                <Subsubsection title="Atípicas">
                    <List>
                        <LItem>
                            Micoplasma pneumoniae;
                        </LItem>
                        <LItem>
                            Clamidia trachomatis;
                        </LItem>
                        <LItem>
                            Ureaplasma urealiticum.
                        </LItem>
                    </List>
                </Subsubsection>
            </Subsection>
            <Subsection title="Vírus">
                <List>
                    <LItem>
                        Rubéola (doença e pós-vacinação);
                    </LItem>
                    <LItem>
                        Caxumba;
                    </LItem>
                    <LItem>
                        Varicela;
                    </LItem>
                    <LItem>
                        Mononucleose;
                    </LItem>
                    <LItem>
                        Adenovírus;
                    </LItem>
                    <LItem>
                        Enteroviroses (Coxsakie e Echovirus);
                    </LItem>
                    <LItem>
                        Herpes simples tipo 1;
                    </LItem>
                    <LItem>
                        Parvovírus B19;
                    </LItem>
                    <LItem>
                        Hepatite B e C (adulto).
                    </LItem>
                </List>
            </Subsection>
            <Subsection title="Fungos">
                <List>
                    <LItem>
                        Candida albicans;
                    </LItem>
                    <LItem>
                        Histoplasma capsulatim;
                    </LItem>
                    <LItem>
                        Paracoccidioides brasiliensis.
                    </LItem>
                </List>
            </Subsection>
            <Subsection title="Parasitas">
            <List>
                    <LItem>
                        Ascaris lumbricoidis;
                    </LItem>
                    <LItem>
                        Estrongiloidis estercolaris;
                    </LItem>
                    <LItem>
                        Giardia lamblia;
                    </LItem>
                    <LItem>
                        E. histolitica;
                    </LItem>
                    <LItem>
                        Taenia saginata;
                    </LItem>
                </List>
            </Subsection>
        </Section>
        <Section title="Diagnóstico">
            <P>
                É clínico, baseado numa boa anamnese e exame físico, corroborado por exames complementares que nos auxiliam a definir o agente etiológico, afastando outras causas de artrite.
            </P>
        </Section>
        <Section title="Exames Complementares">
            <P>
                HC: normal na maioria das vezes ou pode apresentar leve anemia e leucocitose, dependendo do quadro da infecção primária.
            </P>
            <P>
                Provas de atividade inflamatória: VHS, PCR, alfa1 glicoproteína aumentadas.
            </P>
            <P>
                ASLO: pode ser positiva nos casos deflagrados por contato com o estreotococo.
            </P>
            <P>
                Sorologias: a depender de cada caso, de acordo com a suspeita clínica levantada pela anamnese e o exame físico.
            </P>
            <P>
                Culturas : de orofaringe, de secreção uretral e de fezes (assim como o EPF), dependendo da história clínica e do exame físico.
            </P>
            <P>
                Outros exames poderão ser necessários para afastar outras possibilidades diagnósticas, como por exemplo, radiografias ou outros exames imunológicos (pesquisa de HLA-B27) ou de imagem.
            </P>
        </Section>
        <Section title="Tratamento">
            <P>
                Repouso, analgésicos (paracetamol ou ibuprofeno) nas doses habituais.
            </P>
            <P>
                AINH: geralmente por 2 a 4 semanas no total. Usamos o cetoprofeno (2 a 4mg/Kg/dia em 3 ou 4 doses, máximo de 300mg/dia), o ibuprofeno em dose anti-inflamatória (30 a 50mg/Kg/dia em 3 ou 4 doses, máximo de 2.400mg/dia), o diclofenaco (2 a 3mg/Kg/dia em 3 doses, máximo de 150mg/dia), naproxeno (10 a 20mg/Kg/dia em 2 doses, máximo de 1.000mg/dia), nimesulida (4 a 5mg/Kg/dia em 2 doses).
            </P>
            <P>
                Evolução e prognóstico: na maioria dos casos, o quadro se resolve em 2 a 12 semanas, sem deixar sequelas. Todos os pacientes devem ser acompanhados ambulatorialmente por, pelo menos, 1 ano após a alta hospitalar, desde que não apresentem outra recidiva ou uma evolução atípica.
            </P>
        </Section>
        <Section title="Referências">
        <Reference idx={1} body="Oliveira, SKF.; Azevedo, ECL. Reumatologia Pediátrica. 2.ed .Rio de Janeiro: Revinter, 2001."/>
        <Reference idx={2} body="Cassidy, JT(coord). Textbook of Rheumatology. 2.ed.Philadelphia: Elsevier, 2010."/>
        <Reference idx={3} body="Sampaio, B. el al. Síndrome de Reiter e Artrites Reativas. Rev Bras Reumatol, v47.n.4.p: 243-250. jul/ago, 2007."/>
        <Reference idx={4} body="Flores, D.MD. et al. Reactive arthritis: newer developments. Rheu Dis Clin of North America, v29.n.1. feb, 2003."/>
        <Reference idx={5} body="Oliveira, SKF.Reumatologia para Pediatras. 1.ed .Rio de Janeiro: Revinter, 2003."/>
        <Reference idx={6} body="Oliveira, SKF; Rodrigues, MCF. Reumatologia na Prática para Pediatras. 1.ed .Rio de Janeiro: Revinter, 2010"/>
        <Reference idx={7} body="Terreri, MTRA; Sacchetti, SB. Reumatologia para o Pediatra. Sociedade de Pediatria de São Paulo, Departamento de Pediatria. 1.ed. São Paulo: Atheneu, 2008."/>
        </Section>
    </Routine>
}