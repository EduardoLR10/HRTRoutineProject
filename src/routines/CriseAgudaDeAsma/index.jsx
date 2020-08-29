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

export default class CriseAgudaDeAsma extends React.Component {

	static title = "Crise Aguda de Asma"
	static category = "Emergência de Terapia Intensiva"
	static authors = "Dr. Fernando de Velasco Lino e Dra. Dania Lemos Dionízio"

		render = () =>
			<Routine title={CriseAgudaDeAsma.title} category={CriseAgudaDeAsma.category} authors={CriseAgudaDeAsma.authors}>
				<Section title="Definição">
					<P>
						Asma é uma doença inflamatória crônica das vias aéreas, na qual muitas células e elementos celulares têm participação. A inflamação crônica está associada à hiperresponsividade das vias aéreas, que leva a episódios recorrentes de sibilos, dispneia, opressão torácica e tosse, particularmente à noite ou no início da manhã. Esses episódios são uma consequência da obstrução ao fluxo aéreo intrapulmonar generalizada e variável, reversível espontaneamente ou com tratamento.
					</P>
				</Section>
				<Section title="Epidemiologia">
					<P>
						É uma das condições crônicas mais comuns que afeta tanto crianças quanto adultos, sendo um problema mundial de saúde e acometendo cerca de 300 milhões de indivíduos. 
					</P>
					<P>
						Estima-se que, no Brasil, existam aproximadamente 20 milhões de asmáticos, se for considerada uma prevalência global de 10%.
					</P>
					<P>
						A maior parte dos asmáticos não está adequadamente controlada, sendo esse um dos grandes motivos pelos quais as agudizações persistem como uma das maiores causas de atendimentos em serviços de emergência e de hospitalizações em nosso meio.
					</P>
				</Section>
				<Section title="Diagnóstico Clínico">
					<P>
						O diagnóstico clínico da asma é sugerido por um ou mais sinais e sintomas, como:
					</P>
					<List>
						<LItem>
							Dispneia;
						</LItem>
						<LItem>
							Taquipneia;
						</LItem>
						<LItem>
							Tosse crônica;
						</LItem>
						<LItem>
							Sibilância (pode estar ausente em pacientes com crises graves ou muito graves - Tórax Silencioso);
						</LItem>
						<LItem>
							Opressão ou desconforto torácico, sobretudo à noite ou nas primeiras horas da manhã.
						</LItem>
					</List>
					<P>
						IMPORTANTE: As manifestações que sugerem fortemente o diagnóstico de asma são: a presença de mais de um dos sintomas citados em conjunto, a natureza episódica dos sintomas  (chamadas de Crises Agudas ou Exacerbações, sendo 3 ou mais crises no último ano), a variabilidade dos sintomas (variam em intensidade e ao longo do tempo), o desencadeamento de sintomas por irritantes inespecíficos (como fumaças, odores fortes e exercício) ou por aeroalérgenos (como ácaros e fungos), a piora dos sintomas à noite e a melhora espontânea ou após o uso de medicações específicas para Asma.
					</P>
					<P>
						Portanto, para o diagnóstico clínico da Asma, devemos considerar os seguintes aspectos:
					</P>
					<List>
						<LItem>
							Três ou mais episódios de sibilância no último ano;
						</LItem>
						<LItem>
							Variabilidade sazonal dos sintomas;
						</LItem>
						<LItem>
							História familiar positiva para asma ou atopia;
						</LItem>
						<LItem>
							Diagnósticos alternativos excluídos;
						</LItem>
						<LItem>
							Pacientes que são portadores de outras atopias e que apresentam quadro de tosse, aperto no peito e sibilância (mesmo que no primeiro episódio).
						</LItem>
					</List>
				</Section>
				<Section title="Diagnóstico Funcional e Diferencial">
					<P>
						Embora o diagnóstico clínico da asma em sua forma clássica de apresentação não seja difícil, a confirmação pode ser feita por um método objetivo, uma vez que os sinais e sintomas da Asma não são exclusivos dessa condição. Os testes diagnósticos disponíveis na prática clínica incluem: espirometria (antes e após o uso de broncodilatador), testes de broncoprovocação e medidas seriadas de PFE (<Text style={{fontWeight: 'bold'}}>pico de fluxo expiratório</Text>).
					</P>
					<P>
						Entretanto, em Pediatria, os testes diagnósticos não devem retardar o manejo da doença, seja no Tratamento Emergencial das crises, seja no Acompanhamento Ambulatorial para fins de controle da Asma. Isto se deve ao fato de que, seguindo todo o protocolo de orientações para o diagnóstico clínico, a Asma em crianças apresenta pouca dificuldade na diferenciação diagnóstica com outras doenças da idade, a saber:
					</P>
					<List>
						<LItem>
							Rinossinusite crônica;
						</LItem>
						<LItem>
							Síndromes aspirativas, incluindo Aspiração de Corpo estranho e Doença do Refluxo Gastroesofágico;
						</LItem>
						<LItem>
							Laringotraqueomalácia;
						</LItem>
						<LItem>
							Tuberculose;
						</LItem>
						<LItem>
							Fibrose Cística;
						</LItem>
						<LItem>
							Cardiopatias;
						</LItem>
						<LItem>
							Bronquiolite.
						</LItem>
					</List>
				</Section>
				<Section title="Manejo das Crises Agudas (Exacerbações) de Asma">
					<P>
						As exacerbações da asma são manifestações comuns na vida do asmático, constituindo-se no evento mais temido pelo paciente por ser causa de grande morbidade.
					</P>
					<P>
						Na maioria das vezes, as exacerbações da asma, qualquer que seja sua gravidade, ocorrem de forma gradual, com deterioração clínica progressiva em um período de 5-7 dias. As exacerbações da Asma podem ser: muito graves, graves ou leves a moderadas. Exacerbações muito graves são eventos que requerem uma ação urgente do médico e do paciente para prevenir um desfecho de morte por causa da asma. O tratamento em UTI é recomendado.
					</P>
					<P>
						As exacerbações graves geralmente necessitam de hospitalização e oxigenoterapia suplementar não invasiva, além das medicações para o tratamento da crise aguda. São eventos que resultam em alteração temporária do tratamento, em um esforço para prevenir que a exacerbação se torne muito grave.
					</P>
					<P>
						Exacerbações leves a moderadas são episódios fora da variação normal de um asmático, sendo difícil distingui-las da perda transitória do controle da asma. Geralmente evoluem bem com o tratamento medicamentoso e geralmente não necessitam de internação nem de uso de oxigênio suplementar.
					</P>
					<Table head={['Achados', 'Crise Leve a Moderada', 'Crise Grave', 'Crise Muito Grave (Insuficiência Respiratória)']} data={[
						['Impressão Clínica Geral', 'Sem alterações', 'Sem alterações', 'Cianose, sudorese, exaustão'],
						['Estado Mental', 'Normal', 'Normal ou agitação', 'Agitação, confusão, sonolência'],
						['Dispneia', 'Ausente ou leve', 'Moderada', 'Intensa'],
						['Fala', 'Frases completas', 'Frases incompletas\nNo lactente: choro curto, dificuldade alimentar', 'Frases curtas ou monossilábicas\nNo lactente: dificuldade alimentar'],
						['Musculatura Acessória', 'Retrações leves/ausentes', 'Retrações acentuadas', 'Retrações acentuadas'],
						['Sibilância', 'Ausentes com MV normal, localizados ou difusos', 'Localizados ou difusos', 'Ausentes com MV diminuído'],
						['FR, ciclos/min', 'Normal ou aumentada', 'Aumentada', 'Aumentada'],
						['FC, bpm', '≤ 110', '> 110', '> 140 ou bradicardia'],
						['PFE, % previsto', '> 50', '30 - 50', '< 30'],
						['SpO2, %', '> 95', '91 - 95', '≤ 90'],
						['PaO2, mmHg', 'Normal', 'Ao redor de 60', '< 60'],
						['PaCO2, mmHg', '< 40', '< 45', '≥ 45']
					]} title="Classificação da Intensidade das Crises Agudas"/>
					<Subsection title="Observação">
						<P>
							Para a avaliação da FR, devemos saber os seus valores considerados anormais em crianças:
						</P>
						<List>
							<LItem>
								≥ 60 rpm em {'<'} 2 meses
							</LItem>
							<LItem>
								≥ 50 rpm de 2 meses a 1 ano
							</LItem>
							<LItem>
								≥ 40 rpm de 1 a 4 anos
							</LItem>
							<LItem>
								≥ 30 rpm em ≥ 5 anos
							</LItem>
							<LItem>
								≥ 20 rpm em adultos
							</LItem>
						</List>
					</Subsection>
					<Subsection title="Importante">
						<P>
							Para uma adequada caracterização da crise aguda, quanto à sua intensidade, é importante que se faça uma anamnese e exame físico baseado nos sinais e sintomas da doença, além de uma Oximetria de Pulso para determinação da SpO2. A gasometria arterial com determinação da PaO<Text style={{fontSize: 8}}>2</Text> e PCO<Text style={{fontSize: 8}}>2</Text> pode ser necessária em casos graves. Já o PFE pode ser utilizado, se disponível.
						</P>
					</Subsection>
				</Section>
				<Section title="Manejo do Paciente com Crise Leve a Moderada">
					<P>
						O paciente asmático com crise leve a moderada chega com boa saturação e com desconforto respiratório leve ou ausente, não sendo necessária a utilização de oxigênio suplementar e nem outra medida que justifique a internação hospitalar.
					</P>
					<P>
						O tratamento domiciliar baseia-se no uso de β2 agonista inalatório de curta duração com espaçador e máscara (SABA) e corticosteroide sistêmico por via oral por um período determinado de 5 a 7 dias (<Text style={{fontWeight: 'bold'}}>vide lista de medicações no fim da rotina</Text>).
					</P>
					<P>
						Nos casos que chegam com dispneia leve, pode-se fazer uma sequência de 1 a 3 doses preconizadas de SABA com um intervalo de 20 minutos cada, associado à dose de ataque de corticosteroide sistêmico por via oral.
					</P>
				</Section>
				<Section title="Manejo do Paciente com Crise Grave">
					<P>
						O paciente asmático com crise grave chega à emergência com dispneia moderada <Text style={{fontWeight: 'bold'}}>a importante</Text>, com retrações musculares acentuadas e com baixa saturação, frequentemente abaixo de 92%.
					</P>
					<P>
						O paciente com estas características ainda <Text style={{fontWeight: 'bold'}}>NÃO ENTROU</Text> em insuficiência respiratória, porém trata-se de um paciente de risco para tal condição grave, sendo necessária abordagem o mais precoce possível, de preferência com atendimento em nível no mínimo secundário (Hospital), frequentemente com internação em Pronto-Socorro e, dependendo da evolução, internação em enfermaria para seguimento.
					</P>
					<P>
						Nas crises graves, deve-se fazer as doses preconizadas de SABA inalatório sob máscara (3 vezes, com intervalo de 20 minutos), oxigenoterapia (avaliar qual o método indicado para cada caso), hidratação venosa (nos casos de dispneia intensa, com risco de vômitos), dose de ataque de corticosteroide IV ou VO e, <Text style={{fontWeight: 'bold'}}>em alguns casos mais graves, Adrenalina</Text> (até 2 doses com intervalo de 10 minutos).
					</P>
				</Section>
				<Section title="Dieta">
					<P>
						A dieta deverá ser suspensa em casos de desconforto importante ou mesmo em pacientes com dispneia moderada e que apresentam comorbidades associadas que predispõem a aspiração pulmonar de conteúdo alimentar (Ex. Encefalopatas que se alimentam por via oral). Para os demais casos, pode-se iniciar com uma Dieta Branda no início do tratamento e posteriormente para uma Dieta Livre para a Idade com a melhora clínica.
					</P>
				</Section>
				<Section title="Hidratação Venosa">
					<P>
						A maioria das crianças com crise aguda grave de asma que chega à sala de emergência, não necessita instalação de acesso venoso. Em geral, elas encontram-se hidratadas adequadamente e podem receber medicações por via inalatória ou oral, com vantagens iguais à via endovenosa.  
					</P>
					<P>
						Alguns poucos pacientes com asma aguda grave apresentam-se desidratados em razão de indicação de dieta zero, vômitos, febre, recusa alimentar e aumento das perdas insensíveis decorrentes da taquipneia.  Nestes casos específicos está indicado o uso da Hidratação Venosa.
					</P>
				</Section>
				<Section title="Oxigenoterapia">
					<P>
						O oxigênio suplementar está indicado para pacientes com SatO2 {'<'}92%. Alguns poucos pacientes respondem bem à terapia de resgate (veja adiante) e terão alta, porém muitos pacientes têm que utilizar o oxigênio para melhor tratamento.
					</P>
					<P>
						A característica principal do uso de oxigênio suplementar em paciente com crise aguda grave de asma é que o mesmo é feito de forma <Text style={{fontWeight: 'bold'}}>NÃO INVASIVA</Text>, utilizando-se um dos métodos abaixo:
					</P>
					<Subsection title="Oxigênio Umidificado Sob Cateter Nasal">
						<P>
							É empregado quando o paciente requer uma concentração média ou baixa de O<Text style={{fontSize: 8}}>2</Text>. É relativamente simples e permite que o paciente converse e alimente-se, sem interrupção de O<Text style={{fontSize: 8}}>2</Text>. Recomenda-se um fluxo máximo de 3l/min. Feito por cateter próprio que possui vários "furinhos" em sua extremidade. Este dispositivo deveria atingir a úvula. No entanto, sua inserção geralmente se faz às cegas até uma profundidade igual à distância entre o nariz e o lóbulo da orelha. Como este cateter afeta a produção de secreção, deverá ser removido e substituído por um novo pelo menos a cada 8 horas e preferencialmente, na narina oposta. A concentração de oxigênio através deste dispositivo varia conforme a quantidade de fluxo de oxigênio fornecido por minuto, o tamanho dos seios da face e a frequência e volume respiratório do paciente.
						</P>
						<P>
							<Text style={{fontWeight: 'bold'}}>Vantagens:</Text> Método econômico e que utiliza dispositivos simples; Facilidade de aplicação. 
						</P>
						<P>
							<Text style={{fontWeight: 'bold'}}>Desvantagens:</Text> Nem sempre é bem tolerado em crianças em função do desconforto produzido (mais que a cânula nasal); A respiração bucal diminui a fração inspirada de O<Text style={{fontSize: 8}}>2</Text>; Irritabilidade tecidual da via aérea; Possibilidade de trauma em adenoide; Facilidade no deslocamento do cateter; Não permite nebulização.
						</P>
					</Subsection>
					<Subsection title="Oxigênio Umidificado Sob Cânula">
						<P>
							É empregado quando o paciente requer uma concentração média ou baixa de O<Text style={{fontSize: 8}}>2</Text>. É relativamente simples e permite que o paciente converse e alimente-se, sem interrupção de O<Text style={{fontSize: 8}}>2</Text>. Recomenda-se um fluxo máximo de 3l/min e é o método mais empregado nos pacientes pediátricos com crise aguda grave. Consiste em um sistema de fornecimento de Oxigênio por cânula que possui duas saídas para as narinas do paciente.
						</P>
						<P>
							<Text style={{fontWeight: 'bold'}}>Vantagens:</Text> Método econômico e que utiliza dispositivos simples; Facilidade de aplicação.
						</P>
						<P>
							<Text style={{fontWeight: 'bold'}}>Desvantagens:</Text> Nem sempre é bem tolerado em crianças em função do desconforto produzido;  A respiração bucal diminui a fração inspirada de O<Text style={{fontSize: 8}}>2</Text>; Irritabilidade tecidual da nasofaringe; Ressecamento das narinas; Facilidade no deslocamento do cateter; Não permite nebulização.
						</P>
					</Subsection>
				</Section>
				<Section title="Máscara Facial Simples (Sem Reservatório)">
					<P>
						As máscaras faciais são os sistemas mais comumente utilizados. Existem três tipos de máscaras: a simples, a de reinalação parcial e a de não-reinalação. 
					</P>
					<P>
						A máscara facial simples deve cobrir a boca e o nariz. O corpo da máscara em si coleta e armazena oxigênio entre as inspirações do paciente e, a expiração se faz através de orifícios laterais ou pela própria borda da máscara. A variação de entrada de ar de uma máscara simples é de 5 a 12 l/min para se obter uma oxigenação satisfatória. Com fluxos inferiores a 5l/min, o volume da máscara atua como espaço morto e provoca a reinalação do CO<Text style={{fontSize: 8}}>2</Text>. 
					</P>
					<P>
						<Text style={{fontWeight: 'bold'}}>Vantagens:</Text> Método econômico e que utiliza dispositivos simples; Facilidade de aplicação.
					</P>
					<P>
						<Text style={{fontWeight: 'bold'}}>Desvantagens:</Text> A concentração real liberada de O<Text style={{fontSize: 8}}>2</Text> varia com o padrão respiratório; É necessário um fluxo mínimo de 5 l/min de O<Text style={{fontSize: 8}}>2</Text> para evitar que o paciente reinale o CO<Text style={{fontSize: 8}}>2</Text> expirado contido no reservatório; Dificulta a expectoração; Cobre a boca e o nariz, pode produzir claustrofobia; Difícil aplicação em pacientes com sondas naso ou orotraqueais ou pacientes com lesões e traumas de face.
					</P>
				</Section>
				<Section title="Máscara De Venturi (Sem Reservatório)">
					<P>
						Método empregado quando o paciente requer uma concentração moderada ou alta de O2. Possibilita um controle da Fração inspirada de O<Text style={{fontSize: 8}}>2</Text> (FiO<Text style={{fontSize: 8}}>2</Text>) fornecida ao paciente. Neste item, a codificação da FiO<Text style={{fontSize: 8}}>2</Text> fornecida ao sistema é realizada por meio de válvulas plásticas de cores diferentes, de acordo com a quantidade de oxigênio que elas liberam em litros por minuto. Fornece uma concentração de oxigênio de 24% a 50%. O fluxo geralmente utilizado é de 4 a 12 litros por minuto, conectada diretamente a rede de O<Text style={{fontSize: 8}}>2</Text>. Com umidificador, usa-se 15l/min. Possui um sistema de válvulas para diferentes concentrações de FiO<Text style={{fontSize: 8}}>2</Text>.
					</P>
					<Table head={['Máscaras', 'Cores', 'FiO2(%)', 'Fluxo de O2 (l/min)']} data={[
						['1', 'Azul', '24', '4'],
						['2', 'Branca', '28', '4'],
						['3', 'Laranja', '31', '6'],
						['4', 'Amarelo', '35', '8'],
						['5', 'Vermelho', '40', '8'],
						['6', 'Rosa', '50', '12']
					]} />
					<P>
						<Text style={{fontWeight: 'bold'}}>Vantagens:</Text> É leve e bem tolerada pelo paciente; Protege contra dosagens nocivas de oxigênio.
					</P>
					<P>
						<Text style={{fontWeight: 'bold'}}>Desvantagens:</Text> Desloca-se facilmente; Dificulta a fala; Impossibilita o paciente de comer enquanto usa.
					</P>
				</Section>
				<Section title="Máscaras com Reservatório">
					<P>
						Método empregado quando o paciente requer uma concentração alta de O<Text style={{fontSize: 8}}>2</Text>. As máscaras de REINALAÇÃO PARCIAL e NÃO-REINALAÇÃO possuem uma bolsa reservatório flexível de 1 litro fixada à entrada de oxigênio, produzindo FiO<Text style={{fontSize: 8}}>2</Text> mais elevada que a máscara simples. A diferença fundamental entre estes dois modelos de máscaras é o dispositivo de válvulas.
					</P>
					<P>
						A máscara de <Text style={{fontWeight: 'bold'}}>Reinalação Parcial</Text> não contém válvulas. Durante a inspiração, o oxigênio flui para o interior da máscara e passa diretamente ao paciente e durante a expiração parte do ar é armazenado na bolsa. Como não existe válvula separando a máscara da bolsa, parte do gás expirado pelo paciente também entra nesta, o que não acontece com as máscaras que possuem válvulas. Como a porção inicial do gás expirado é oriunda do espaço morto anatômico, a bolsa possui, sobretudo, oxigênio e pouco CO<Text style={{fontSize: 8}}>2</Text>. À medida que a bolsa se enche de oxigênio e gás do espaço morto, dois terços finais da expiração escapam através das portas de expiração da máscara. Enquanto o fluxo de entrada de oxigênio evita o colapso da bolsa durante a inspiração, a reinalação de CO2 se torna desprezível.
					</P>
					<P>
						A máscara de <Text style={{fontWeight: 'bold'}}>Não-Reinalação</Text> impede a reinalação através de válvulas unidirecionais. Uma válvula inspiratória se encontra no topo da bolsa, enquanto as válvulas expiratórias cobrem as portas de expiração sobre o corpo da máscara. Durante a inspiração, uma leve pressão negativa fecha as válvulas expiratórias, impedindo a diluição aérea; ao mesmo tempo, a válvula inspiratória localizada no topo da bolsa se abre fornecendo oxigênio ao paciente. Durante a expiração, a ação da válvula reverte a direção do fluxo; uma pressão positiva discreta fecha a válvula inspiratória, impedindo que o gás expirado entre na bolsa. Concomitantemente, as válvulas expiratórias unidirecionais se abrem e desviam o gás expirado para a atmosfera.
					</P>
				</Section>
				<Section title="Monitorização">
					<P>
						O paciente asmático com crise aguda grave deverá ser monitorizado, seja por avaliações clínicas frequentes e medições frequentes da SpO<Text style={{fontSize: 8}}>2</Text>, FR e FC pelo médico assistente. Dependendo da disponibilidade e da condição clínica, a monitorização pode ser contínua, por meio de aparelhos eletrônicos não invasivos.
					</P>
				</Section>
				<Section title="Manejo Medicamentoso Inicial na Emergência">
					<P>
						A terapia medicamentosa inicial é chamada de TERAPIA DE RESGATE, que tem como objetivo uma melhora inicial rápida com a finalidade de diminuir o perigo de insuficiência respiratória ou mesmo prover uma melhora clínica considerável para fins de evitar a internação. Consiste no uso de: 
					</P>
					<List>
						<LItem>
							SABA, na dose máxima, de 20 em 20 minutos, por 3 vezes.
						</LItem>
						<LItem>
							Corticosteroide (preferência VO), numa dose de ataque (<Text style={{fontWeight: 'bold'}}>vide lista de medicações no fim da rotina</Text>).
						</LItem>
					</List>
				</Section>
				<Section title="Manejo da Criança Internada na Emergência/Enfermaria">
					<P>
						O paciente que após o MANEJO INICIAL mantém desconforto respiratório moderado e/ou baixa SpO<Text style={{fontSize: 8}}>2</Text> possui indicação de internação. A partir daí, considera-se todos os comemorativos citados anteriormente no manejo, de acordo com as regras desta rotina (Dieta, Hidratação Venosa, Oxigenoterapia).
					</P>
					<P>
						Em relação à terapia medicamentosa, a indicação usual consiste na utilização do SABA e corticosteroide em doses programadas, conforme a seguir:
					</P>
					<List>
						<LItem>
							1. SABA, na dose máxima, de 1/1 hora a 3/3 horas. Pacientes que evoluem com melhora clínica com diminuição da dispneia para LEVE OU AUSENTE e boa SpO2 podem usar o SABA em doses menores (cerca de 20% menores, respeitando o mínimo de 4 jatos) e com frequências menores (de 4/4 horas), além de não ter mais necessidade de oxigênio suplementar.
						</LItem>
						<LItem>
							2. Corticosteroide nas doses preconizadas. Dá-se preferência ao VO, caso haja condições clínicas para a ingesta oral.
						</LItem>
					</List>
					<P>
						Portanto, a prescrição inicial de um paciente com crise de asma aguda grave geralmente consiste: 
					</P>
					<List>
						<LItem>
							Dieta (de acordo com as regras preconizadas);
						</LItem>
						<LItem>
							Hidratação Venosa (se necessário, vide tópico específico);
						</LItem>
						<LItem>
							Corticosteroide (preferência VO, se possível);
						</LItem>
						<LItem>
							Antitérmico se necessário (a via de administração irá depender se o paciente estiver com acesso venoso ou não, e se tiver condições de ingesta oral);
						</LItem>
						<LItem>
							SABA nas doses preconizadas;
						</LItem>
						<LItem>
							Oxigenoterapia (de acordo com as regras preconizadas);
						</LItem>
						<LItem>
							Monitorização (contínua ou pelo menos 3 vezes ao dia);
						</LItem>
						<LItem>
							Cuidados de enfermagem.
						</LItem>
					</List>
					<P>
						<Text style={{fontWeight: 'bold'}}>Pacientes que evoluem com piora clínica:</Text>
					</P>
					<P>
						Alguns pacientes evoluem com piora clínica, sendo necessário o uso de outros medicamentos para evitar a internação em UTI. São eles: 
					</P>
					<Subsection title="Adrenalina">
						<P>
							Em virtude de sua capacidade de provocar broncodilatação, a adrenalina consiste em um excelente recurso em caso de exacerbação aguda de asma. As evidências para o uso da adrenalina na asma aguda grave são precárias e controversas. Porém, em situações especiais, esta forma de administração pode ser considerada como medida terapêutica heroica em pacientes jovens (idade menor que 40 anos) em que o tratamento inalatório não foi possível ou não resultou em resposta broncodilatadora significativa, na tentativa de postergar a intubação endotraqueal ou de reduzir a hiperinsuflação progressiva em pacientes submetidos à ventilação mecânica. Nas crises agudas graves que não evoluem bem, ou mesmo os pacientes que chegam à emergência com risco de insuficiência respiratória, a administração da adrenalina deve ser feita por via SC ou IM. Pacientes que entraram em insuficiência respiratória (crise aguda muito grave), a via IV deve ser a escolhida.
						</P>
					</Subsection>
					<Subsection title="Brometro de Ipratrópio">
						<P>
							O brometo de ipratrópio é um anticolinérgico derivado quaternário da atropina e é administrado por via inalatória. Nas exacerbações mais graves, pode ser empregado em doses repetidas, administrado conjuntamente com um β2-agonista de curta ação por nebulização ou por inalador pressurizado. Seus benefícios clínicos são mais marcantes na abordagem inicial do tratamento das exacerbações, visto que parece diminuir a necessidade de admissão hospitalar. A manutenção dessa terapêutica frente a outros desfechos (tempo de internação ou de suporte de oxigênio, necessidade de cuidado em UTI) apresenta benefícios controversos. Utiliza-se na crise aguda de asma sempre associado ao SABA. Pode ser em forma de Nebulização, isolado (se paciente estiver em uso de Salbutamol Spray) ou junto com o fenoterol. Pode ser usado na forma de Spray.
						</P>
					</Subsection>
					<Subsection title="Sulfato de Magnésio">
						<P>
							A Medicina ainda não definiu o mecanismo exato da ação do MgSO<Text style={{fontSize: 8}}>4</Text> , porém existem algumas proposições . É um antagonista fisiológico natural do cálcio regulando seu acesso para o espaço intracelular no músculo liso, promovendo broncodilatação. O mecanismo é competitivo e exerce seu efeito no canal de cálcio tipo L16. Também exerce efeito inibitório na enzima Ca ATPase. Exerce efeito de relaxamento muscular por inibição da liberação de acetilcolina na junção neuromuscular. A hipermagnesemia diminui a sensibilidade da placa motora à acetilcolina, bem como a amplitude do potencial de placa terminal. É um antagonista do receptor NMDA do glutamato que lhe confere propriedades analgésicas, anticonvulsivantes e sedativas. O magnésio pode aumentar a síntese de prostaciclinas e inibir a enzima conversora de angiotensina. Inibição da liberação de histamina pelos mastócitos e estimulação da produção de óxido nítrico. Resumindo, é reservado para casos graves, sem resposta às medidas iniciais. 
						</P>
						<P>
							Quando favorável, a resposta terapêutica ocorre em 1-2 h após a infusão. Pode ser considerada uma terapêutica segura. Seus principais efeitos adversos são rubor cutâneo e náuseas, geralmente durante a infusão. Fraqueza, arreflexia e depressão respiratória podem potencialmente ocorrer, mas com níveis séricos da droga muito elevados ({'>'} 12 mg/dL). Trata-se de uma medicação que não se deve prescrever de horário, sendo necessárias avaliações clínicas periódicas para prescrição de cada dose da medicação (<Text style={{fontWeight: 'bold'}}>vide lista de medicações no fim da rotina</Text>).
						</P>
					</Subsection>
					<Subsection title="Xantinas">
						<P>
							A AMINOFILINA já foi considerada a arma terapêutica fundamental no manejo da crise de asma aguda grave e muito grave, porém, perdeu gradualmente essa posição de destaque, principalmente pela grande proximidade da dose terapêutica com a dose tóxica (estreita faixa terapêutica). Deve-se dar atenção para a alta frequência de interações medicamentosas e para os efeitos adversos cardiovasculares, neurológicos e gastrointestinais, às vezes graves, como náuseas, vômitos, tremores, ansiedade, torpor e coma. Embora tenha sido uma droga muito utilizada no tratamento das crises agudas de asma, seu mecanismo de ação não é totalmente definido. Acredita-se que possam ser de importância a inibição da enzima fosfodiesterase, o antagonismo com receptores de adenosina, um aumento da secreção de catecolaminas e uma modulação dos fluxos transmembrana de cálcio na célula muscular. Tanto a teofilina quanto o seu sal solúvel, a aminofilina, são capazes de promover relaxamento da musculatura lisa brônquica. Além do mais, possuem outros efeitos potencialmente benéficos para o manejo do paciente com obstrução respiratória, na função muscular diafragmática, no drive ventilatório, no clearence mucociliar, na secreção de hormônio antidiurético e na inflamação.
						</P>
					</Subsection>
					<Subsection title="Salbutamol Venoso">
						<P>
							Medicamento essencial para os pacientes com crise aguda muito grave, também pode ser usado nos pacientes com crise grave sem resposta aos SABA inalatórios. Provê broncodilatação mais potente, porém pode aumentar a incidências de efeitos colaterais, com taquicardia e hipopotassemia, exigindo monitorização contínua da SpO<Text style={{fontSize: 8}}>2</Text> e dosagens frequentes do Potássio sérico. Lembrar-se de suspender o SABA inalatório quando se prescrever doses IV.
						</P>
					</Subsection>
				</Section>
				<Section title="Manejo do Paciente com Crise Muito Grave">
					<P>
						Este grupo de pacientes constitui a minoria dos casos, porém são os de evolução potencialmente fatal, pois estão em insuficiência respiratória, exigindo medidas imediatas como: Dieta zero, acesso venoso e hidratação venosa, uso de corticosteroide IV pela intensidade do desconforto respiratório, uso de salbutamol IV e demais medicações de uso venoso, como é o caso do Sulfato de Magnésio ou Xantinas. Internação em UTI é indicada.
					</P>
				</Section>
				<Section title="Critérios de Alta Hospitalar e Acompanhamento">
					<P>
						O principal objetivo do tratamento das crises de asma aguda grave e muito grave é transformá-la em crises leve a moderada. Isto se justifica pelo fato de que uma crise aguda de asma, se considerarmos sua evolução esperada, dura pelo menos de 5 a 7 dias, não sendo possível na maioria dos casos dar alta ao paciente com a crise aguda resolvida. Este dado, aliado ao fato de que as crises leves a moderadas podem ser tratadas em domicílio, tornam-se os princípios fundamentais para que uma criança possa receber alta.
					</P>
					<P>
						Portanto, para que um paciente possa terminar o tratamento no domicílio devemos observar: 
					</P>
					<List>
						<LItem>
							Que o paciente esteja em <Text style={{fontWeight: 'bold'}}>Ar Ambiente</Text> por pelo menos 24 horas (lactentes) ou 4-6 horas (maiores de 2 anos):
						</LItem>
						<List>
							<LItem>
								Dispneia Ausente ou Leve;
							</LItem>
							<LItem>
								Taquipneia Ausente ou Leve;
							</LItem>
							<LItem>
								SpO<Text style={{fontSize: 8}}>2</Text> {'>'}92%.
							</LItem>
						</List>
						<LItem>
							A prescrição do tratamento domiciliar é baseada no tratamento da crise aguda leve a moderada, a saber: 
						</LItem>
						<List>
							<LItem>
								SABA por 7 dias;
							</LItem>
							<LItem>
								Corticosteroide sistêmico por via oral, completando-se 7 dias de tratamento total (somar ao tempo de corticosteroide usado durante a internação). Alguns casos exigem tempo maior de tratamento, sendo que até 10 dias de uso não há necessidade de se realizar o desmame. Se houver indicação para tratamento acima desse período, faz-se o desmame (<Text style={{fontWeight: 'bold'}}>vide lista de medicações no fim da rotina</Text>).
							</LItem>
						</List>
					</List>
					<P>
						Nos pacientes com evolução inicial muito grave ou com tempo de internação maior que 7 dias por crise aguda grave, recomenda-se o retorno na enfermaria em um período de até 7 dias após a alta hospitalar.
					</P>
					<P>
						Todos os pacientes internados por crise de asma, independente de sua intensidade, têm indicação de <Text style={{fontWeight: 'bold'}}>Acompanhamento Ambulatorial</Text>.
					</P>
				</Section>
				<Section title="Medicações Tratamento Crise Aguda de Asma">
					<P>
						<Text style={{fontWeight: 'bold'}}>Adrenalina Injetável 1mg/ml (1:1000):</Text>	
					</P>
					<P>
						Pode ser administrada por via intramuscular (IM), subcutânea (SC) ou intravenosa (IV), sendo neste último caso, aplicada de forma lenta e diluída (1 para 10.000 - 1ml de adrenalina + 9ml de AD).
					</P>
					<P>
						Dose: 
					</P>
					<P>
						<Text style={{fontWeight: 'bold'}}>Adrenalina PURA (1:1000):</Text> 0,01ml/Kg (Máximo 0,3ml) - Uso SC ou IM.	
					</P>
					<P>
						<Text style={{fontWeight: 'bold'}}>Adrenalina DILUÍDA (1:10.000):</Text> 0,1ml/Kg (máximo 3 ml) - Uso SC, IM ou IV.	
					</P>
				</Section>
				<Section title="Agonistas de Curta Duração (SABA)">
					<Subsection title="Salbutamol Inalatório (Spray) com Espaçador e Máscara 100mcg ou 120mcg">
						<P>
							Dose máxima preconizada: 1 jato para cada 2Kg, sendo o mínimo de 4 jatos e o máximo de 10 jatos. Esta dose é recomendada para pacientes com crise aguda grave. Pacientes com crises agudas leves a moderadas e pacientes de alta hospitalar devem utilizar uma dose menor, cerca de 20% menor do que a dose máxima recomendada, respeitando a dose mínima de 4 jatos. Ajustes na dose podem ser necessários em pacientes que desenvolvem taquicardia, tremores ou outros sintomas adrenérgicos.
						</P>
						<P>
							Frequência de uso: de 20 em 20 minutos (terapia de resgate), de 1/1h, 2/2h, 3/3h, 4/4h, 6/6h.
						</P>
						<P>
							Início de Ação e Tempo de Ação: Rápido, em até 5 minutos (geralmente ocorre em 3 minutos ou menos). A duração de ação é de 4 a 6 horas, na maioria dos pacientes.
						</P>
					</Subsection>
					<Subsection title="Nebulização com Fenoterol Gotas 5mg/ml para Nebulização">
						<P>
							Trata-se de alternativa à terapia com Salbutamol Spray. Tem sua indicação quando há falta de Salbutamol Spray ou para os pacientes intolerantes ao uso de Salbutamol Spray. Seu uso é feito por Nebulização. A técnica para nebulizar deve ser orientada ao acompanhante (e checada). A medicação deve ser colocada no reservatório, juntamente com, no máximo, 2 ml de soro fisiológico e fluxo de 6 litros de O<Text style={{fontSize: 8}}>2</Text>.
						</P>
						<List>
							<LItem>
								Na disponibilidade das duas medicações (Salbutamol spray e Fenoterol gotas), dar preferência ao Salbutamol spray. Estudos mostram que possui maior eficácia, maior comodidade de uso e maior facilidade de limpeza do sistema (evitando contaminação).
							</LItem>
							<LItem>
								Dose: 2 gotas/5kg, sendo o mínimo de 5 gotas e o máximo de 10 gotas. Associar, na Nebulização, com Oxigênio Suplementar a 6l/min (se o paciente estiver internado). Se houver indicação de anticolinérgico, associar Brometo de Ipratrópio 0,25 mg/ml, 20 gotas (evitar seu uso na frequência de 3/3 horas ou menos).
							</LItem>
							<LItem>
								Frequência de uso: de 20 em 20 minutos (terapia de resgate), de 1/1h, 2/2h, 3/3h, 4/4h, 6/6h.
							</LItem>
							<LItem>
								Início de Ação e Tempo de Ação: Rápido (na inalação, quase que imediato), perdurando, em média, por 3 a 5 horas.
							</LItem>
						</List>
					</Subsection>
				</Section>
				<Section title="Corticosteroide de Ação Sistêmica">
					<Table head={['Corticosteroide', 'Dose de Ataque', 'Dose de Manutenção']} data={[
						['Prednisolona ou Prednisona - VO (Máximo 60 mg)', '1 - 2 mg/kg', '1-2 mg/kg/dia, 1 a 2 doses'],
						['Metilprednisolona - IV ou VO ', '1 - 2 mg/kg', '1-2 mg/kg/dia, 6/6h'],
						['Hidrocortisona - IV ', '20 mg/kg', '20 mg/kg/dia, 6/6h']
					]} />
					<Subsection title="Brometo de Ipratrópio Solução Gotas 0,25mg/ml ou Spray 20mcg">
						<P>
							Dose:Gotas: 20 gotas em Nebulização, isolado (com 2 ml de soro fisiológico, se paciente estiver em uso de Salbutamol Spray) ou junto com o fenoterol, se este último estiver prescrito. 
						</P>
						<P>
							Frequência de uso: 4/4h ou 6/6h.
						</P>
						<P>
							Spray 20mcg: Indicado para maiores de 6 anos, na dose de 2 jatos, de 4/4h ou 6/6h. Máximo 12 jatos.
						</P>
					</Subsection>
					<Subsection title="Salbutamol Venoso 500mcg ou 0,5mg/ml">
						<P>
							Dose de ataque: 10mcg/kg
						</P>
						<P>
							(Peso x 10)/500 = ‘X’ ml + 10ml de AD ou SF 0,9%. Correr em 30min;
						</P>
						<P>
							Dose de Manutenção: 0,2 - 0,8 mcg/kg/min (pode ir aumentando a dose a cada 30min);
						</P>
						<P>
							‘X’ml: (Peso x dose x 1440)/500
						</P>
						<P>
							Correr a medicação em bomba de infusão (BI)
						</P>
						<P>
							<Text style={{fontWeight: 'bold'}}>Suspender ou diminuir para a dose imediatamente inferior, se:</Text>
						</P>
						<List>
							<LItem>
								Taquicardia {'>'} 200bpm;
							</LItem>
							<LItem>
								Taquicardia com repercussão hemodinâmica;
							</LItem>
							<LItem>
								Hipopotassemia.
							</LItem>
						</List>
						<P>
							<Text style={{fontWeight: 'bold'}}>Cuidados na Administração</Text>
						</P>
						<List>
							<LItem>
								Controlar K+;
							</LItem>
							<LItem>
								Deve-se suspender o β2 inalatório; 
							</LItem>
							<LItem>
								Hidratação venosa com K+.
							</LItem>
						</List>
					</Subsection>
					<Subsection title="Aminofilina Venosa 24 mg/ml (Ampola: 10 ml = 240 mg)">
						<P>
							Dose: 3 mg/kg/dose, diluído em 20 ml de água destilada (AD) ou SG 5% ou SF0,9%, correr em 30 minutos. Pode-se fazer até de 6/6h.
						</P>
						<P>
							<Text style={{fontWeight: 'bold'}}>Efeitos Colaterais (Suspender se houver):</Text> Náuseas, vômitos (mais comum), anorexia, dispepsia, diarreia, palpitação, taquicardia, vertigem, cefaleia, distúrbios visuais, taquipnéia e coma.
						</P>
					</Subsection>
					<Subsection title="Sulfato de Magnésio 50% Injetável (500mg/ml)">
						<P>
							Dose: Crianças: 25 a 50 mg/kg, IV ou IM, a cada 4 a 6 horas. Dose Máxima: 2g. <Text style={{fontWeight: 'bold'}}>Não prescrever de horário, deve-se reavaliar o paciente a cada 4 a 6 horas</Text>.
						</P>
					</Subsection>
				</Section>
				<Section title="Cuidados na Administração">
					<List>
						<LItem>
							Para injeção intravenosa, diluir uma parte de solução de Sulfato de Magnésio a 50% em 1,5 partes de água para injeção (Concentração Final de 20%);
						</LItem>
						<LItem>
							A velocidade de administração intravenosa não deve exceder 1g/min;
						</LItem>
						<LItem>
							Para injeção IM, misturar a solução de Sulfato de Magnésio a 50% com 1 mL de solução de lidocaína a 2% sem vasoconstritor. 
						</LItem>
						<LItem>
							Uma solução intravenosa de um sal de cálcio (por exemplo, Gluconato de Cálcio 10%) deve estar prontamente disponível quando Sulfato de Magnésio é administrado por via parenteral.
						</LItem>
					</List>
				</Section>
				<Section title="Referências">
				<Reference idx={1} body="http://www.anvisa.gov.br/datavisa/fila_bula/frmVisualizarBula.asp?pNuTransacao=11158362015&pIdAnexo=3016375"/>
				<Reference idx={2} body="https://www.ginanobrasil.org.br/"/>
				<Reference idx={3} body="http://www.ginanobrasil.org.br/Protocolo_Manejo_%20Asma_BH.pdf"/>
				<Reference idx={4} body="https://www.santacasasp.org.br/upSrv01/up_publicacoes/8011/10569_Diretriz%20Asma.pdf"/>
				<Reference idx={5} body="http://www.thoracic.org/statements/resources/allergy-asthma/ats-ers-asthma-control-and-exacerbations.pdf"/>
				<Reference idx={6} body="http://portalms.saude.gov.br/saude-de-a-z/asma"/>
				<Reference idx={7} body="http://www.jped.com.br/conteudo/98-74-S59/port.pdf"/>
				<Reference idx={8} body="http://www.szpilman.com/CTI/protocolos/Oxig%C3%AAnio%20e%20ventila%C3%A7%C3%A3o%20n%C3%A3o%20invasiva.pdf"/>
				<Reference idx={9} body="http://www.hcrp.usp.br/revistaqualidade/uploads/Artigos/158/158.pdf"/>
				<Reference idx={10} body="http://www.scielo.br/pdf/rbti/v19n3/v19n3a19.pdf"/>
				</Section>
		</Routine>
}