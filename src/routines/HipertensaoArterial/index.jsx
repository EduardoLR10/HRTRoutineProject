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

export default class HipertensaoArterial extends React.Component {

	static title = "Hipertensão Arterial na Infância"
	static category = "Emergência e Terapia Intensiva"
	static authors = "Dra. Luciany Almeida de Carvalho"

		render = () =>
			<Routine title={HipertensaoArterial.title} category={HipertensaoArterial.category} authors={HipertensaoArterial.authors}>
                <P>
                    Crise hipertensiva corresponde ao rápido e abrupto aumento nos níveis de pressão arterial sistêmica (PAS) com risco potencial de vida associado a lesões de órgãos alvo.
                </P>
                <P>
                    Pode ser dividida em duas situações:
                </P>
                <List>
                    <LItem>
                        Emergência hipertensiva: quanto aumento nos níveis de PAS está associado a sintomas severos e danos em órgãos alvo.
                    </LItem>
                    <LItem>
                        Urgência hipertensiva: sintomas menores ou ausência de sintomas.
                    </LItem>
                </List>
                <P>
                    Hipertensão arterial sistêmica (HAS) pode ser dividida em estágios de acordo com níveis de PAS:
                </P>
                <Table head={['Estágios', 'Para Crianças de 1 a 13 anos', 'Para Crianças com 13 anos ou mais']} data={[
					['Normal', 'PAS < percentil 90', 'PAS < 120/<80 mmHg'],
					['PAS elevada', 'PAS ≥ percentil 90 e menor que percentil 95', 'PAS 120/80<80 mmHg a 129/<80 mmHg'],
					['HAS 1° estágio', 'PAS > igual percentil 95 até < percentil 95 + 12 mmHg ou 130/80 a 139/89 mmHg', 'PAS 130/80 mmHg a 139/89 mmHg'],
					['HAS 2° estágio', 'PAS ≥ percentil 95 + 12 mmHg ou ≥ 140/90 mmHg', 'PAS ≥ 140/90 mmHg']
				]} />
                <Section title="Epidemiologia">
                    <P>
                        É difícil estimar a prevalência de HAS na infância. A maioria das crianças apresenta crise hipertensiva como primeira manifestação de HAS, sendo em cerca de 60% dos casos emergência hipertensiva. 
                    </P>
                    <P>
                        Cerca de 12 a 14% dos pacientes com crise hipertensiva tem menos de um ano idade. Em alguns centros é descrito que cerca de 78% dos pacientes com crise hipertensiva tem em torno de 7 anos de idade e destes 44% tem mais de 13 anos.
                    </P>
                    <P>
                        É descrita uma prevalência no sexo masculino de 5:1.
                    </P>
                </Section>
                <Section title="Etiologia">
                    <P>
                        Habitualmente, episódios de hipertensão na infância são secundários a causas de HAS, especialmente causas renais. Apenas de 2 a 5% dos casos de HAS na infância são referidos como HAS primária/essencial.
                    </P>
                    <P>
                        Causas secundárias:
                    </P>
                    <List>
                        <LItem>
                            Renais: glomerulonefrites, nefropatia por refluxo, uropatias obstrutivas, doença renal policística, síndrome hemolítico urêmica, estenose de artérias renais, injuria renal aguda, pós transplante renal.
                        </LItem>
                        <LItem>
                            Cardiovasculares: coarctação de aorta, vasculites sistêmicas.
                        </LItem>
                        <LItem>
                            Tumores: feocromocitoma, tumor de Willms, neuroblastoma.
                        </LItem>
                        <LItem>
                            Endócrinas: síndrome de Cushing, tireotoxicose, algumas formas de hiperplasia   adrenal congênita, hiperaldosteronismo.
                        </LItem>
                        <LItem>
                            Neurológicas: disautonomia, aumento da pressão intracraniana.
                        </LItem>
                        <LItem>
                            Imunológicas: lúpus eritematoso sistêmico, arterite de Takayasu, poliarterite nodosa.
                        </LItem>
                        <LItem>
                            Medicações/toxinas: antiinflamatórios não esteroidais, esteroides, corticosterides, eritropoetina, cocaína, anfetaminas.
                        </LItem>
                    </List>
                    <P>
                        Nos casos em que a HAS é considerada como primária/essencial há uma associação frequente com obesidade e aumento de renina. Estes casos raramente tem crise hipertensiva como manifestação inicial.
                    </P>
                </Section>
                <Section title="Apresentação Clínica">
                    <P>
                        Nas emergências hipertensivas sintomas maiores com lesões em órgãos estão presentes como encefalopatia hipertensiva, hemorragia cerebral, injuria renal aguda, insuficiência cardíaca (ICC), edema pulmonar. 
                    </P>
                    <P>
                        As manifestações clínicas mais comuns na infância são as neurológicas sendo as mais comuns: cefaleia, vertigens, náuseas, vômitos e convulsões. Cerca de 25% dos pacientes tem encefalopatia hipertensiva. Alguns casos podem evoluir com paralisia de nervo facial e hemiplegia. 
                    </P>
                    <P>
                        Manifestação cardiovascular inicial pode ser ICC com edema pulmonar agudo ou apenas dor torácica. Cerca de 25% dos pacientes tem hipertrofia ventricular esquerda associada.
                    </P>
                    <P>
                        Em torno de 18% dos casos há retinopatia hipertensiva. Alterações oculares incluem infartos retinianos, isquemia de nervo ótico e outros distúrbios visuais.
                    </P>
                    <P>
                        Manifestações renais incluem injuria renal aguda, hematúria e/ou proteinúria. Os pacientes podem apresentar poliúria e polidipsia. Outras alterações laboratoriais incluem hiponatremia, hipocalcemia, alcalose hipoclorêmica e alteração nos níveis de ureia e creatinina.
                    </P>
                    <P>
                        No período neonatal, manifestações comuns da crise hipertensiva incluem irritabilidade, dificuldade para alimentar, taquipneia, apneia, cianose, ICC, letargia e convulsões.
                    </P>
                    <Table head={['Sintomas Clínicos de Crise Hipertensiva', 'Possível Etiologia da HAS']} data={[
					['Palpitações, sudorese excessiva, rubor', 'Tumores produtores de catecolaminas'],
					['Exoftalmia, taquicardia, diarreia, perda de peso', 'Hipertiroidismo'],
					['Massa abdominal palpável', 'Neuroblastoma, tumor de Wilms, doença renal policística, displasia renal multicística, uropatia obstrutiva'],
					['Sinais de sobrecarga hídrica (edemas, derrames cavitários)', 'Estágio final de doençca renal, glomerulonefrites'],
					['Sopro abdominal', 'Estenose de artéria renal'],
					['Obesidade, estrias, hirsutismo', 'Síndrome de Cushing'],
					['Redução de pulsos e PAS em membros inferiores', 'Coarctação de aorta'],
					['Bradicardia, respiração irregular, apneia', 'Injúria cerebral, trauma']
				    ]} />
                </Section>
                <Section title="Tratamento">
                    <P>
                        O objetivo do tratamento é prevenção ou tratamento de complicações induzidas pela HAS especialmente as neurológicas, oftalmológicas, renais e cardíacas.
                    </P>
                    <P>
                        Antes de ser iniciado a tratamento, determinadas causas devem ser identificadas pois requerem tratamento específico: coarctação de aorta, trauma cranioencefálico, lesão por massa intracraniana, intoxicação por medicamentos simpaticomiméticos, dor severa.
                    </P>
                    <P>
                        O paciente deve estar internado em unidade de terapia intensiva ou emergência com   monitorização cardiovascular adequada.
                    </P>
                    <P>
                        Nos casos de emergência hipertensiva, a PAS deve ser reduzida com administração de medicações intravenosas, porém a redução deve ser gradual não excedendo mais de 25% da inicial nas primeiras 2 horas (idealmente deve ser feita em torno de 6 horas). O segundo passo, será redução gradual da PAS nas próximas 24 a 48 horas para próximo ao percentil 95. Neste período, são adicionadas medicações por via oral. Apenas após 48 horas do início do tratamento, é que a PAS deverá ser reduzida para níveis inferiores ao percentil 95. 
                    </P>
                    <P>
                        Nas urgências hipertensivas, o tratamento inicial pode ser via oral, passando para venoso caso o paciente não tolere. 
                    </P>
                    <P>
                        Uma redução abrupta da PAS pode levar a danos irreversíveis em órgãos-alvo, incluindo sequelas neurológicas, danos visuais, infarto do miocárdio ou insuficiência renal, devido a alterações na autorregulação induzida pela hipertensão crônica. 
                    </P>
                    <Table head={['Fármaco', 'Via', 'Dose', 'Início Ação', 'Duração', 'Comentários']} data={[
                        ['Nitroprussioato de sódio', 'IV', '0,5 a 1 mcg/kg/min', 'Segundos', 'Infusão deve ser contínua', 'Risco de metemoglobinemia. Uso preferencial por 24 a 48 horas. Monitorar níveos de cianose se uso por período maior.'],
                        ['Labetalol', 'IV', 'Bolus: 0,2 a 1 mg/kg, max 40mg.\nInfusão: 0,25 a 3 mg/kg/h', '5 a 10 minutos', '2 a 4 horas', 'Bloqueador beta e alfa adrenérgico. Não usar se asma, ICC e displasia broncopulmonar.'],
                        ['Nicardipina', 'IV', '0,5 a 4 mcg/kg/min', '1 a 2 minutos', '30 minutos a 4 horas', 'BCC. Pode causar taquicardia reflexa.'],
                        ['Hidralazina', 'IV', '0,2 a 0,6 mcg/kg, max 20mg', '5 a 30 minutos', '4 a 6 horas', 'Vasodilatador arteriolar. Contra indicado em sangramento intracerebral. Pode causar taquicardia reflexa.'],
                        ['Nifedipina', 'SL', '0,25 a 0,5 mg/kg', '5 a 10 minutos', '30 a 60 minutos', 'BCC. Vasodilatador arteriolar. Risco de hipotensão, taquicardia reflexa, cefaléia.'],
                        ['Captopril', 'VO', '0,3 a 2 mg/kg (em < 6 meses até 0,5 mg/kg/dose)', '15 a 30 minutos', '8 a 12 horas', 'iECA. Pode levar a hipercalemia e piora na função renal em pacientes com IR.'],
                        ['Minoxidil', 'VO', '0,1 a 0,2 mg/kg', '1 hora', '8 a 12 horas', 'Vasodilatação potente por ação direta arterial.'],
                        ['Furosemida', 'IV\nVO', '1 a 2 mg/kg', '30 a 60 minutos', '4 a 8 horas', 'Diurético. Bloqueia reabsorção tubular de sódio.']
                    ]} title="Agentes Mais Usados" label="IV: via intravenosa; SL: sublingual; VO: via oral; BCC: bloqueador de canal de cálcio; iECA: inibidor enzima conversora de angiotensina; IR: insuficiência renal."/>
                </Section>
				<Section title="Referências">
				<Reference idx={1} body="SEEMAN, Tomas et al. Hypertension crisis ins children and adolescentes. Pediatric Nephrology. 2018."/>
				<Reference idx={2} body="CHANDAR, Jayanthi et al. Hypertensive crisis em children. Pediatric Nephrology. 2012; 27: 741-751."/>
				<Reference idx={3} body="DIONNE, Janis M. et al. Management os severe hypetension in the newborn. Arch Dis Child. 2017: 0-4."/>
				<Reference idx={4} body="FLYNN, Joseph T. et al. Clinical Practice Guideline for Screening and Management of High Blood Preassure in Children and Adolescents. Pediatrics. 2017; 140 (3): e20171904."/>
                <Reference idx={5} body="CROTI, Ulisses Alexandre; MATTOS, Sandra da Silva; PINTO JR, Valdester Cavalcante; AIELLO, Vera Demachi. Cardiologia e Cirurgia Cardiovascular Pediatrica. 1ª edição. São Paulo: Roca. 2008."/>
				</Section>
		</Routine>
}