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

export default class PurpuraTrombocitopenicaIdiopatica extends React.Component {

	static title = "Púrpura Trombocitopênica Imunilógica (PTI)"
	static category = "Hematologia, Reumatologia e Nefrologia"
    static authors = "Dra. Dania Lemos Dionízio e Dr. Fabrício Pereira Madureira"
    static tags = ["idiopática", "hematoma", "equimose"]

		render = () =>
			<Routine title={PurpuraTrombocitopenicaIdiopatica.title} category={PurpuraTrombocitopenicaIdiopatica.category} authors={PurpuraTrombocitopenicaIdiopatica.authors}>
				<Section title="Conceito">
                    <P>
                        Doença hematológica frequente que se caracteriza pela  produção de auto-anticorpos dirigidos contra glicoproteínas  da  membrana plaquetária, levando à sua destruição pelo sistema macrofágico-monocitário, com plaquetopenia e distúrbios hemorrágicos. 
                    </P>
                </Section>
                <Section title="Aspectos Gerais e Epidemiológicos">
                    <P>
                        É a principal causa de trombocitopenia na infância, com uma Incidência anual de 3 a 8 casos por 100.000 crianças. Pico de acometimento entre 2 e 5 anos de idade, com predomínio do sexo masculino.
                    </P>
                </Section>
                <Section title="Classificação">
                    <P>
                        <Text style={{fontWeight: 'bold'}}>De acordo com o Consenso de Vicenza, 2009:</Text>
                    </P>
                    <List>
                        <LItem>
                            PTI aguda: até 3 meses
                        </LItem>
                        <LItem>
                            PTI persistente: 3 a 12 meses
                        </LItem>
                        <LItem>
                            PTI crônica: {'>'}12 meses
                        </LItem>
                    </List>
                </Section>
                <Section title="Classificação Clínica">
                    <P>
                        Púrpuras secas: equimoses e petéquias.
                    </P>
                    <P>
                        Purpuras úmidas: manifestações cutâneas e sangramento de mucosas.
                    </P>
                    <P>
                        Fisiopatologia: Além do aumento da destruição plaquetária, sua produção também encontra-se diminuída. Há produção de Anticorpos antiplaquetários, Anticorpos contra várias glicoproteínas de membranas plaquetárias, tais como: glicoproteínas do complexo IIb, do complexo IIIa e do complexo Ib/IX. Os pacientes com o complexo Ib/IX aparentemente estão mais sujeitos a serem refratários à terapia, principalmente à IGIV.
                    </P>
                    <P>
                        Um fator desencadeante induz à produção de anticorpos da classe IgG contra os glicopeptídeos de membrana, levando à sensibilização plaquetária. Os macrófagos fagocitam esses complexos “anticorpos – plaquetas”, através do reconhecimento e ligação de receptores para a porção Fc dessas imunoglobulinas, especialmente no baço.
                    </P>
                    <P>
                        Diagnóstico: é iminentemente clínico e de exclusão. Deve-se descartar causas secundárias de púrpuras agudas (infecções bacterianas/virais, neoplasias hematológicas; disfunções medulares e colagenoses).
                    </P>
                </Section>
                <Section title="História Clínica e Exame Físico">
                    <List>
                        <LItem>
                            A doença é geralmente precedida por quadro infeccioso até 2 meses antes – IVAS; 
                        </LItem>
                        <LItem>
                            O quadro é agudo, com sintomas de sangramento sem outras manifestações sistêmicas;
                        </LItem>
                        <LItem>
                            Os sintomas hemorrágicos ocorrem especialmente em pele e mucosas;
                        </LItem>
                        <LItem>
                            Sangramentos gastrointestinal e genitourinário são raros: 10%;
                        </LItem>
                        <LItem>
                            Criança previamente hígida, em BEG e hemodinamicamente estável;
                        </LItem>
                        <LItem>
                            Não há febre, dor, palidez, perda de peso ou hipoatividade;
                        </LItem>
                        <LItem>
                            Ausência de hepatoesplenomegalia ou linfadenomegalia.
                        </LItem>
                    </List>
                    <Subsection title="Exames Complementares">
                        <P>
                            Plaquetopenia isolada ({'<'}100.000);
                        </P>
                        <P>
                            Exame de esfregaço de sangue periférico: células vermelhas e brancas morfologicamente normais;
                        </P>
                        <P>
                            Aspirado de medula óssea é desnecessário, exceto nos quadros atípicos ou por necessidade de tratamento com corticoide;
                        </P>
                        <P>
                            A complicação mais grave e temida é a hemorragia intracraniana, em 0,1 a 0,9% dos casos. Os sintomas iniciais são inespecíficos como cefaléia, vômitos e alteração do nível de consciência. O risco é maior com plaquetas {'<'} 10.000. Por isso, deve-se orientar a família para evitar traumas e quedas.
                        </P>
                        <P>
                            Diagnóstico diferencial: especialmente com outras patologias que podem cursar com plaquetopenia e sangramentos, como o Lupus Eritematoso Sistêmico, doenças infecciosas, como a toxoplasmose, a citomegalovirose, a mononucleose, HIV e ainda, com doenças linfoproliferativas, como a leucemia.
                        </P>
                    </Subsection>
                </Section>
                <Section title="Tratamento/Conduta">
                    <P>
                        Expectante: nos casos sem sangramento, sangramentos leves e púrpura seca. 
                    </P>
                    <P>
                        “Devemos tratar o paciente e não o número de plaquetas”
                    </P>
                    <P>
                        Conduta intervencionista: em casos de plaquetas {'<'}10.000(pelo maior risco de hemorragia intracraniana) e em situações de emergência
                    </P>
                    <Subsection title="Medidas Gerais">
                        <P>
                            Suspensão de agentes antiagregantes plaquetários (AAS, anticoagulantes, xaropes com guaicolato, anti-inflamatórios não hormonais)
                        </P>
                        <P>
                            <Text style={{fontWeight: 'bold'}}>Restrição de atividades;</Text>
                        </P>
                        <P>
                            Evitar medicações IM.
                        </P>
                    </Subsection>
                    <Subsection title="Conduta Medicamentosa">
                        <P>
                            Imunoglobulina Humana Intravenosa- IGIV: é o tratamento de primeira escolha
                        </P>
                        <P>
                            Dose total de 2g/kg ( 1º dia = 1 g/ kg  IV   ;    2º dia = 1g/kg IV);
                        </P>
                        <P>
                            <Text style={{fontWeight: 'bold'}}>Corticoterapia:</Text> proceder primeiro com análise da medula;
                        </P>
                        <P>
                            Prednisona: 1 a 2mg/kg/dia VO por 14 dias;
                        </P>
                        <P>
                            Metilprednisolona: 30mg/kg/dia IV por 2 a 3 dias;
                        </P>
                        <P>
                            Imunoglobulina anti-D: é pouco utilizada.
                        </P>
                    </Subsection>
                </Section>
                <Section title="Situações de Emergência">
                    <List>
                        <LItem>
                            Sangramento intracraniano; 
                        </LItem>
                        <LItem>
                            Sangramento mucoso com instabilidade hemodinâmica/respiratória;
                        </LItem>
                        <LItem>
                            Transfusões de hemácias / plaquetas;
                        </LItem>
                        <LItem>
                            IGIV;
                        </LItem>
                        <LItem>
                            Corticosteróides em altas doses.
                        </LItem>
                    </List>
                    <P>
                        OBS: Nos casos de emergência, como nos casos de criança portadora de PTI em um acidente, está indicado o uso de IGIV e corticóide, associados à transfusão de plaquetas, com a finalidade de restabelecer a homeostase o mais rápido possível.
                    </P>
                </Section>
                <Section title="Resposta ao Tratamento">
                    <Subsection title="Resposta Completa">
                        <List>
                            <LItem>
                                Quando as plaquetas forem {'>'} 100.000 em 2 amostras;
                            </LItem>
                            <LItem>
                                Ausência de sangramento.
                            </LItem>
                        </List>
                    </Subsection>
                    <Subsection title="Resposta Parcial">
                        <List>
                            <LItem>
                                Quando as plaquetas forem {'>'} 30.000 e aumento de 2x em 2 amostras;
                            </LItem>
                            <LItem>
                                Ausência de sangramento.
                            </LItem>
                        </List>
                    </Subsection>
                    <Subsection title="Sem Resposta">
                        <List>
                            <LItem>
                                Plaquetas {'<'} 30.000 e aumento menor que 2x em 2 amostras;
                            </LItem>
                            <LItem>
                                Presença de sangramento.
                            </LItem>
                        </List>
                    </Subsection>
                    <P>
                        Prognóstico: excelente na maioria dos casos, é doença benigna e autolimitada com baixa mortalidade. Sangramento intensos e graves são raros. Cronificação ao redor de 20% (PTI crônica).
                    </P>
                    <P>
                        PTI crônica: exige investigação clínica e laboratorial prévias.
                    </P>
                </Section>
                <Section title="Tentativas Terapêuticas">
                    <List>
                        <LItem>
                            Rituximabe: 375mg/m² por semana até 4 semanas, se sangramento ativo;
                        </LItem>
                        <LItem>
                            Danazol: 10 a 15 mg/kg/dia + prednisona + azatioprina 1 a 2mg/kg; 
                        </LItem>
                        <LItem>
                            Vincristina: 1,5mg/m², 1x/sem, por 4 sem + prednisona;
                        </LItem>
                        <LItem>
                            Ciclofosfamida: 1 a 2mg/kg/dia + prednisona; 
                        </LItem>
                        <LItem>
                            Esplenectomia: exigindo vacinação ampla e antibioticoterapia profilática.
                        </LItem>
                    </List>
                </Section>
				<Section title="Referências">
				<Reference idx={1} body="Protocolos de Tratamento: hematologia e hemoterapia/ Instituto Estadual de Hematologia Arthur de Siqueira Cavalcanti – 2. Ed. – Rio de Janeiro: HEMORIO, 2014."/>
				<Reference idx={2} body="Hematologia pediátrica . I. Braga, Josefina aparecida Pellegrini. II.  Tone, Luiz Gonzaga. III.Loggetto, Sandra Regina. –São Paulo : Atheneu, 2007."/>
				</Section>
		</Routine>
}