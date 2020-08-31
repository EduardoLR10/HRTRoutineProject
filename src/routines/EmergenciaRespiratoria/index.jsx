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

export default class EmergenciaRespiratoria extends React.Component {

  static title = "Emergência Respiratória"
  static category = "Emergência e Terapia Intensiva"
  static authors = "Dr. Luiz Antônio de Almeida e Silva"
  static tags = ["criança", "insuficiência", "aguda"]

	render = () =>
	  <Routine title={EmergenciaRespiratoria.title} category={EmergenciaRespiratoria.category} authors={EmergenciaRespiratoria.authors}>
		  <P>
			  Aprender a abordar, diagnosticar e tratar uma emergência respiratória é fundamental para um profissional de saúde. Estudos demonstram que mais de 60% das morbimortalidades envolvem este sistema. A alta suscetibilidade para desenvolver falência respiratória é explicada pelo fato de as crianças possuírem via aérea menor, tórax mais complacente, reserva respiratória menor, demanda metabólica maior e mecanismos compensatórios inadequados. Se até aqui o reconhecimento e tratamento for eficaz a chance de recuperação é em torno de 70%, mas se houver atraso o quadro pode se deteriorar e evoluir para a parada cardiorrespiratória e a chance reduz para menos de 10%.
		  </P>
		  <P>
			  Uma criança gravemente enferma deverá ser abordada, segundo as diretrizes do PALS 2015 – Pedriatic Advanced Life Support. A sequência AVALIAR, DIAGNOSTICAR E INTERVIR irá ajudar a conduzir melhor cada caso. Devemos ter em mente as quatro situações comuns de complicações respiratórias: a{')'} obstrução de via aérea superior, b{')'} obstrução de via aérea inferior, c{')'} doença do tecido pulmonar e d{')'} distúrbio do controle respiratório.
		  </P>
		  <P>
			  O aumento da frequência respiratória associada a aumento do esforço como retrações e batimentos de asas nasais são comuns em todas as situações.
		  </P>
		  <Section title="Obstrução Respiratória Superior">
			<P>
				Via aérea superior corresponde as estruturas extratorácicas – nariz, faringe e laringe. Manifesta-se com estridor, rouquidão, tosse espasmódica, sialorreia e roncos. Baixa expansibilidade e entrada de ar diminuída na ausculta. As crianças maiores costumam adotar posição de conforto para buscar uma melhor respiração e muitas vezes é bom que não as atrapalhe. As patologias mais comuns são crupe, angioedema, corpo estranho, traqueite e epiglotite.
			</P>
		  </Section>
		  <Section title="Obstrução Respiratória Inferior">
			<P>
				Corresponde as estruturas intratorácicas – traqueia, brônquios e bronquíolos. Manifesta-se com sibilos, expiração prolongada e aumento do trabalho respiratório na expiração, tornando um processo ativo e não passivo. As patologias mais comuns são a asma e bronquiolite.
			</P>
		  </Section>
		  <Section title="Doença do Tecido Pulmonar">
			<P>
				Envolve condições que alteram o parênquima. Manifesta-se com gemido, hipoxemia, diminuição dos sons e estertores. Pneumonia, edema, contusão pulmonar e síndrome do desconforto respiratório agudo (SDRA) são as patologias mais comuns.
			</P>
		  </Section>
		  <Section title="Distúrbio do Controle Respiratório Central">
			<P>
				Está associado a situações que alteram a função neurológica, comprometendo o nível de consciência e a mudança no padrão respiratório. Os sinais clínicos são irregularidade da frequência respiratória, esforço variável, respiração superficial e até apneia. As afecções mais comuns são as convulsões, infecções do SNC, tumores cerebrais, hidrocefalia, doenças neuromusculares e intoxicações.
			</P>
		  </Section>
		  <Section title="Avaliação e Diagnóstico">
			<P>
				Comece observando se há alteração do nível de consciência, desconforto respiratório e alteração da cor da pele em alguns segundos, como que por instinto, sem tocar no paciente. Observe a posição da cabeça e língua – criança com nível de consciência rebaixado apresenta dificuldade respiratória se estiver mal posicionada. Procure por algum tipo de secreção na cavidade oral ou nasal, como muco, sangue, resíduo de vômitos e até corpo estranho.
			</P>
			<Table head={['Idade', 'Respirações/minuto']} data={[
			['Bebê (menos de 1 ano)', '30 a 60'],
			['1ª Infância', '24 a 40'],
			['Idade pré-escolar (4 a 5 anos)', '22 a 34'],
			['Idade escolar (6 a 12 anos)', '18 a 30'],
			['Adolescente', '12 a 16']
			]} title="Tabela 1. Frequências Respiratórias Normais por Idade"/>
			<P>
				Enquanto ausculta para detectar o tipo de som, observe a amplitude e simetria do tórax, a frequência (tabela 1) e esforço respiratório (tabela 2). Diante destes dados classifique o estado em obstrução respiratória alta, baixa, parenquimatoso ou central.
			</P>
			<Table head={['', 'Normal', 'Anormal']} data={[
			['Esforço Respiratório', '- Som esforço\n- Expiração passiva', '- Esforço elevado, inadequado ou ausente\n- Batimento de asa nasal\n- Retrações e uso de musculatura acessória'],
			['Sons', 'Sem sons anormais', '- Estridor e roncos\n- Sibilos\n- Crepitações e gemidos']
			]} title="Tabela 2. Avaliação do Esforço Respiratório"/>
		  </Section>
		  <Section title="Tratamento">
			<P>
				Depois de classificar podemos executar o tratamento da emergência respiratória que se baseia em melhorar a oferta de oxigênio e eliminar o gás carbônico. Se a criança tem um bom drive respiratório apenas enriquecemos o ar respirado, mas se não tiver temos que fazer uma ventilação com pressão positiva. Começamos abrindo a via aérea reposicionando a cabeça e língua se for o caso; se a criança se apresenta consciente apenas a deixamos mais confortável, talvez o colo materno seja uma boa tática para deixa-la menos ansiosa. Aspirar secreções, sangue ou restos alimentares pode ser necessário; aspiradores rígidos e de maior diâmetro são mais eficazes.
			</P>
			<Subsection title="Oxigenioterapia">
				<P>
					O principal objetivo é evitar a hipoxemia grave e garantir a oferta adequada de oxigênio aos tecidos, especialmente ao cérebro. Cuidado com a toxicidade que está relacionada diretamente ao tempo e à concentração ofertada, assim é importante não usar a fração inspirada de oxigênio (fiO<Text style={{fontSize: 8}}>2</Text>) 100% de forma indiscriminada. A saturação deve ser monitorada e a fiO<Text style={{fontSize: 8}}>2</Text> utilizada deve ser a menor possível para manter a saturação ≥ 94%.
				</P>
				<P>
					Existem diversos acessórios de ofertar oxigênio conforme o grau de necessidade; para cada litro a fiO<Text style={{fontSize: 8}}>2</Text> aumenta em torno de 4 a 5%.
				</P>
				<P>
					Cateter ou cânula nasal – até 3l/min – fiO<Text style={{fontSize: 8}}>2</Text> 45%;
				</P>
				<P>
					Máscara facial – de 4 a 8 l/min – fiO<Text style={{fontSize: 8}}>2</Text> 60%;
				</P>
				<P>
					Máscara não reinalante com reservatório – de 10 a 15 l/min – fiO<Text style={{fontSize: 8}}>2</Text> 100%;
				</P>
				<P>
					Ventilação: o oxigênio é apenas uma parte da troca gasosa. A criança pode apresentar retenção de CO<Text style={{fontSize: 8}}>2</Text> e o suporte ventilatório se faz necessário para eliminá-lo.
				</P>
				<P>
					Algumas formas de reduzir a retenção CO<Text style={{fontSize: 8}}>2</Text>:
				</P>
				<P>
					Cateter de alto fluxo – o gás inspirado é aquecido e umidificado a 100% o que facilita a entrada do ar que diminuirá o espaço morto anatômico minimizando a reinalação do CO<Text style={{fontSize: 8}}>2</Text>. Fluxo de 2 l/kg/min pode fazer um efeito de PEEP 4 a 6 cmH<Text style={{fontSize: 8}}>2</Text>O.
				</P>
				<P>
					Ventilação não invasiva – diminui o trabalho respiratório, melhora a hipoventilação, aumenta a capacidade residual funcional e diminui o consumo de O<Text style={{fontSize: 8}}>2</Text>. Sedação leve pode ser necessária.
				</P>
				<P>
					Ventilação invasiva – a intubação não deve ser postergada nos casos graves com alteração no nível de consciência e risco de falência respiratória e progressão para a parada cardiorrespiratória.
				</P>
				<P>
					Circulação: monitorização contínua, acesso vascular e manter normovolemia são parâmetros que precisam estar alinhados com a condução respiratória. Mais detalhes sobre este assunto poderão ser complementados no capítulo emergência do choque.
				</P>
				<P>
					Para o tratamento específico verifique os capítulos correspondentes para cada patologia.
				</P>
			</Subsection>
		  </Section>
		<Section title="Referências">
		<Reference idx={1} body="Pronto-socorro / coordenadores Claudio Schvartsman, Amélia Gorete Reis, Silvya Costa Lima Farah, 3 ed, Barueri, SP, editora Manole, 2018."/>
		<Reference idx={2} body="PALS, Pediatric Advance Life Support, manual do Profissional, edição em português 15-2224, Editora Orora Visual, 3210 Innovative Way, Mesquite, Texas, EUA, AHA, 2016."/>
		</Section>
	</Routine>
}