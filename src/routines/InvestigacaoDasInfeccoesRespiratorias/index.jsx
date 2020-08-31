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

export default class InvestigacaoDasInfeccoesRespiratorias extends React.Component {

	static title = "Infecção de Vias Aéreas de Repetição - Investigação"
	static category = "Infectologia"
    static authors = "Dr. Fernando de Velasco Lino"
    static tags = ["infecções", "respiratórias", "recorrente"]

		render = () =>
			<Routine title={InvestigacaoDasInfeccoesRespiratorias.title} category={InvestigacaoDasInfeccoesRespiratorias.category} authors={InvestigacaoDasInfeccoesRespiratorias.authors}>
				<P>
                    Rotina que aborda investigação das infecções respiratórias em crianças.
                </P>
                <Section title="Definição e Epidemiologia">
                    <P>
                        As infecções respiratórias de repetição acometem um número significativo de crianças com menos de seis anos de idade. 
                    </P>
                    <P>
                        Os critérios mais utilizados para definição de infecções respiratórias de repetição são: ausência de quaisquer doenças de base que justifiquem as infecções de repetição (imunodeficiência primária ou secundária, fibrose cística, malformações das vias aéreas, síndrome dos cílios imóveis), além da presença de, no mínimo, uma das seguintes condições:
                    </P>
                    <List>
                        <LItem>
                            Seis ou mais infecções respiratórias por ano; 
                        </LItem>
                        <LItem>
                            Uma ou mais infecções respiratórias mensais; 
                        </LItem>
                        <LItem>
                            Três ou mais infecções anuais do trato respiratório inferior.
                        </LItem>
                    </List>
                    <P>
                        De uma maneira geral, os pacientes geralmente não apresentam infecções graves, mas sim devido ao aumento da exposição a agentes infecciosos do meio ambiente nos primeiros anos de vida, especialmente durante o outono e inverno. 
                    </P>
                </Section>
                <Section title="Fatores de Risco">
                    <P>
                        Fatores de Risco para <Text style={{fontWeight: 'bold'}}>aumento</Text> de Infecções Respiratórias <Text style={{fontWeight: 'bold'}}>em Crianças Saudáveis</Text>:
                    </P>
                    <List>
                        <LItem>
                            Frequentar creche ou escolinha;
                        </LItem>
                        <LItem>
                            Presença de irmãos mais velhos;
                        </LItem>
                        <LItem>
                            Exposição à fumaça de cigarro;
                        </LItem>
                        <LItem>
                            Poluição atmosférica;
                        </LItem>
                        <LItem>
                            Casa com muitas pessoas;
                        </LItem>
                        <LItem>
                            Baixo nível socioeconômico.
                        </LItem>
                    </List>
                    <P>
                        Já como <Text style={{fontWeight: 'bold'}}>causas de Infecções Respiratórias de Repetição em crianças</Text>, podemos citar:
                    </P>
                    <List>
                        <LItem>
                            Prematuridade, ventilação mecânica;
                        </LItem>
                        <LItem>
                            Asma;
                        </LItem>
                        <LItem>
                            Síndromes aspirativas: Incoordenação à deglutição; Refluxo gastresofágico; Fístula traqueoesofágica; Corpo estranho; Fenda laringotraqueal; 
                        </LItem>
                        <LItem>
                            Doença metabólica hereditária: Fibrose cística; Deficiência de alfa 1 anti-tripsina;
                        </LItem>
                        <LItem>
                            Compressão de vias aéreas: Anel vascular; Anomalias brônquicas; Sequestro pulmonar; Cisto congênito; Neoplasia;
                        </LItem>
                        <LItem>
                            Alterações da imunidade (imunodeficiências): Síndrome de Hiper-IgE; Síndrome de DiGeorge; Doença Granulomatosa Crônica; Hipogamaglobulinemia; Imunodeficiência Combinada Grave; Infecção pelo HIV;
                        </LItem>
                    </List>
                </Section>
                <Section title="Investigação das Infecções Respiratórias de Repetição">
                    <P>
                        É importante que essas crianças sejam submetidas a uma abordagem clínica diagnóstica, procurando identificar os fatores de risco que as tornam suscetíveis à repetição de processos infecciosos. 
                    </P>
                    <P>
                        Aproximadamente metade das crianças com infecções respiratórias de repetição são saudáveis, 30% têm algum quadro de alergia, 10% possuem patologias crônicas e 10% podem ter imunodeficiência. Portanto, a investigação deve-se basear em:
                    </P>
                    <List>
                        <LItem>
                            <Text style={{fontWeight: 'bold'}}>Identificar se a criança apresenta alguma doença de base</Text>, principalmente relativo às causas de Infecções Respiratórias de Repetição citadas acima.
                        </LItem>
                        <LItem>
                            <Text style={{fontWeight: 'bold'}}>Atentar para fatores de risco relacionados às Infecções Respiratórias de Repetição em Crianças Saudáveis</Text>, também citadas acima e tentar removê-los. A influência das condições socioeconômicas e ambientais é muito importante.
                        </LItem>
                        <LItem>
                            <Text style={{fontWeight: 'bold'}}>Reconhecer a existência de imaturidade do sistema imunológico adaptativo nos primeiros anos de vida de crianças saudáveis</Text>, que predispõe a infecções de repetição, geralmente sem repercussão importante e sem que a criança tenha necessariamente alguma doença de base. O número dessas infecções se reduz com a idade.
                        </LItem>
                        <LItem>
                            <Text style={{fontWeight: 'bold'}}>Identificar doenças alérgicas.</Text> Os sintomas de rinite alérgica frequentemente são confundidos com os de infecções das vias aéreas superiores (principalmente as Sinusites) e a criança é equivocadamente diagnosticada como portadora de infecções respiratórias, não sendo submetida ao tratamento adequado para alergia. Crises de asma são muitas vezes equivocadamente diagnosticadas como broncopneumonias de repetição. No entanto, rinite alérgica e asma são importantes fatores de risco para o desenvolvimento de Infecções Respiratórias de Repetição tanto em crianças como em adultos jovens.
                        </LItem>
                        <LItem>
                            <Text style={{fontWeight: 'bold'}}>Reconhecer o refluxo gastroesofágico</Text>, que frequentemente causa tosse noturna, sendo, dessa forma, muitas vezes confundido com infecções de vias aéreas. Dessa forma, são necessários métodos diagnósticos complementares dessa importante entidade, como monitorização do pH esofágico, endoscopia ou cintilografia.
                        </LItem>
                    </List>
                </Section>
				<Section title="Referências">
				<Reference idx={1} body="Carvalho Beatriz Tavares Costa, Júnior Pérsio Roxo, Tavares Fabíola Scancetti. Infecções de repetição: o que é importante para o pediatra [Internet]. Brasil: Revista Paulista de Pediatria; 2009 [cited 2020 Jan 20]. Available from: http://www.scielo.br/pdf/rpp/v27n4/v27n4a13.pdf"/>
				<Reference idx={2} body="Ferone Eduardo de Aguiar. Infecção das Vias Aéreas Superiores IVAS de Repetição em Pediatria [Internet]. [place unknown]; 2011 [revised 2011 Mar 24; cited 2020 Jan 22]. Available from: https://www.medicinanet.com.br/ conteudos/revisoes/4017 /infeccao_das_vias_aereas_superiores_ivas_de_repeticao_em_pediatria.htm"/>
				</Section>
		</Routine>
}