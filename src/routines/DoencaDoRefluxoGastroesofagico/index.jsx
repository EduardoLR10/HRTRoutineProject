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

export default class DoencaDoReFluxoGastroesofagico extends React.Component {

  static title = "Doença do Refluxo Gastroesofágico"
  static category = "Gastroenterologia"
  static authors = "Dr. Francisco Rufino Rosa Neto"
  static tags = ["regurgitação", "vômito", "queimação"]

	render = () =>
	  <Routine title={DoencaDoReFluxoGastroesofagico.title} category={DoencaDoReFluxoGastroesofagico.category} authors={DoencaDoReFluxoGastroesofagico.authors}>
		  <P>
			  Rotina que aborda doença do refluxo gastroesofágico / refluxo gastroesofágico fisiológico.
		  </P>
		  <P>
			  O retorno esporádico do conteúdo gástrico para o esôfago é um acontecimento fisiológico em qualquer idade, porém muito mais frequente nos lactentes menores de 1 ano devido ao desenvolvimento anatômico e funcional do tubo digestivo. Quando esse retorno excede nos seus limites pode causar sinais e sintomas tornando-se patológico. 
		  </P>
		  <P>
			  Para o aparecimento do refluxo é necessário que a pressão intragástrica seja maior que a pressão no nível do EIE.
		  </P>
		  <P>
			  A prevalência da doença é baixa (em torno de 20%), mas frequentemente as condições fisiológica e patológica são confundidas, levando a diagnósticos excessivos e consequentemente exames e ocupação de ambulatórios de especialidades desnecessariamente.
		  </P>
		  <P>
			  Fatores que contribuem para a barreira antirefluxo:
		  </P>
		  <List>
			  <LItem>
				  Esfíncter inferior do esôfago (EIE);
			  </LItem>
			  <LItem>
				  Ângulo de His;
			  </LItem>
			  <LItem>
				  Ligamento freno-esofágico;
			  </LItem>
			  <LItem>
				  Pinçamento diafragmático.
			  </LItem>
		  </List>
		  <P>
			  Fatores que contribuem para os episódios de refluxo:
		  </P>
		  <List>
			  <LItem>
				  Pressão baixa no nível do EIE e relaxamento transitório do EIE;
			  </LItem>
			  <LItem>
				  Ângulo de His obtuso no RN e lactente jovem;
			  </LItem>
			  <LItem>
				  Esôfago abdominal curto;
			  </LItem>
			  <LItem>
				  Enchimento excessivo do estômago;
			  </LItem>
			  <LItem>
				  Tosse intensa;
			  </LItem>
			  <LItem>
				  Compressão do abdome;
			  </LItem>
			  <LItem>
				  Obesidade;
			  </LItem>
			  <LItem>
				  Dieta rica em gordura.
			  </LItem>
		  </List>
		  <Section title="Doenças do Refluxo Gastroesofágica (DRGE)">
			<P>
				O diagnóstico é basicamente clínico, podendo ser muito ou pouco sintomático. A ausência das regurgitações não exclui o diagnóstico.
			</P>
			<Subsection title="Manifestações Clínicas Frequentes">
				<List>
					<LItem>
						Regurgitações e/ou vômitos frequentes (80 a 90% dos casos);
					</LItem>
					<LItem>
						Irritabilidade;
					</LItem>
					<LItem>
						Choro constante;
					</LItem>
					<LItem>
						Recusa alimentar;
					</LItem>
					<LItem>
						Baixo ganho de peso;
					</LItem>
					<LItem>
						Ruminação;
					</LItem>
					<LItem>
						Desgaste do esmalte dentário;
					</LItem>
					<LItem>
						Sintomas de vias aéreas de repetição (tosse, sibilância, pneumonias, otite, rouquidão);
					</LItem>
					<LItem>
						Hiperextensão cervical (síndrome de sandifer).
					</LItem>
				</List>
			</Subsection>
			<Subsection title="Fatores de Risco">
				<List>
					<LItem>
						Encefalopatias;
					</LItem>
					<LItem>
						Tabagismo passivo;
					</LItem>
					<LItem>
						APLV;
					</LItem>
					<LItem>
						Mal formações congênitas;
					</LItem>
					<LItem>
						Doenças obstrutivas do trato digestivo.
					</LItem>
				</List>
			</Subsection>
		  </Section>
		  <Section title="Exames Complementares">
			<P>
				Os exames complementares nem sempre são necessários, pode evidenciar o episódio de refluxo mas nem sempre confirmam o diagnóstico de DRGE, porém podem aumentar o número de informações e auxiliar/reforçar o diagnóstico clínico em algumas situações.
			</P>
			<Subsection title="Ultrassonografia">
				<P>
					Apesar de muito solicitada e realizada, é um exame muito controvérsio, de baixa sensibilidade e especificidade e, consequentemente, não comprova o diagnóstico. Deve ser desestimulada a solicitação desse exame com esse fim. 
				</P>
			</Subsection>
			<Subsection title="EED (Rx Contrastado de esôfago, estômago e duodeno)">
				<P>
					Útil para detectar alterações anatômicas do trato digestivo assim como alterações de motilidade. Não é útil para confirmação de DRGE.
				</P>
			</Subsection>
			<Subsection title="Cintilografia Esofágica">
				<P>
					Método útil para auxiliar na detecção de aspiração pulmonar, exame de baixa sensibilidade, não deve ser realizada de rotina em pacientes com suspeita de DRGE.
				</P>
			</Subsection>
			<Subsection title="Manometria Esofágica">
				<P>
					Pouco realizado em crianças, avalia a pressão dos esfíncteres esofágicos e do corpo do esôfago, não tem valor diagnóstico para DRGE.
				</P>
			</Subsection>
			<Subsection title="pHmetria Esofágica Prolongada">
				<P>
					Avalia o pH intraesofágico em terço superior, médio e inferior durante 24h através de uma sonda esofágica com eletrodo. Consegue avaliar número de episódios de refluxo, pH do conteúdo refluído e a duração do refluxo. Útil para confirmação do diagnóstico de refluxo patológico em suspeitas clínicas, em pacientes com sintomas extraesofágicos (refluxo oculto), pacientes com sintomas típicos de DRGE sem melhora com o tratamento clínico, avaliação pré-operatória de gastrostomia, avaliação da eficácia da fundoplicatura em pacientes operados e que persistem com sintomas de DRGE.
				</P>
			</Subsection>
			<Subsection title="Impedanciometria e Impedancio-pHmetria Esofágica Intraluminal">
				<P>
					Através de um cateter com eletrodo introduzido via esofágica, detecta refluxos ácidos e não ácidos, altura do esôfago que o refluxo alcança e a duração dos refluxos. Exame superior à pHmetria. Deve associar os sintomas clínicos com o episódio de refluxo.
				</P>
			</Subsection>
			<Subsection title="Endoscopia e Biópsia">
				<P>
					Exame também pouco utilizado na pediatria, tem indicação quando se suspeita de esofagite ou algumas outras complicações como estenose, úlceras e esôfago de Barrett. A biópsia sempre é recomendada ao realizar a endoscopia pois auxilia nos diagnósticos diferenciais.
				</P>
			</Subsection>
		  </Section>
		  <Section title="Tratamento">
			<P>
				O tratamento é diferente se tratamos de refluxo fisiológico ou de doença do refluxo. No refluxo gastroesofágico fisiológico, devemos apenas tranquilizar os pais, e tomar medidas que amenizem os episódios de regurgitações como fracionamento da dieta e em pequenos volumes. A posição de decúbito deve ser a supina mesmo, evitando a prona e lateral devido ao risco de morte súbita. Em casos de refluxo fisiológico de pacientes que não estão em aleitamento materno, uma opção é espessar a dieta, porém sabendo que irá diminuir apenas o número de refluxos visíveis e os vômitos, não diminuindo o retorno do conteúdo gástrico para o esôfago.
			</P>
			<P>
				Nos casos de doença do refluxo, devemos além de fracionar a dieta, ainda aumentar a atenção para não ingerir líquidos durante as refeições, evitar de deitar após as refeições, evitar alimentos que mostrem ter relação com aumento dos sintomas, por exemplo leite em pacientes com APLV, evitar alimentos muito gordurosos. Evitar a exposição ao tabagismo.
			</P>
			<Subsection title="Tratamento Medicamentoso em DRGE">
				<P>
					O tratamento medicamentoso é limitado, seja por baixa eficácia ou por riscos de efeitos colaterais e deve ser usado com critério.
				</P>
				<P>
					Medicamentos procinéticos (domperidona, bromoprida e metoclopramida) não apresentam eficácia e apresentam riscos de efeitos colaterais indesejados, não sendo então indicado de rotina no tratamento da doença. 
				</P>
				<P>
					A bromoprida e metoclopramida tem elevados índices de efeitos colaterais e não devem ser prescritos, a domperidona apresenta menores índices de efeitos colaterais mas não evita o retorno do conteúdo gástrico para o esôfago inferior, diminui apenas a quantidade de retorno do conteúdo gástrico até a boca e esôfago superior.
				</P>
				<P>
					A apresentação da domperidona suspensão é 1mg/ml e a dose é 0,25mg/kg/dose 3x ao dia, não devendo exceder a dose de 1mg/kg/dia e no máximo 35mg/dia.
				</P>
				<P>
					Os medicamentos antagonistas dos receptores H2 da histamina aliviam sintomas e ajudam na cicatrização esofágica e são indicados em casos leves a moderados. Estes medicamentos apresentam taquifilaxia o que pode limitar o uso. O mais usado é ranitidina na dose de 5 a 10mg/kg/dia 2x ao dia, e apresentação da solução oral é 15mg/ml.
				</P>
				<P>
					Inibidores de bomba de prótons (IBP) estão indicados nos casos de sinais de esofagite grave, muito sintomática. O uso prolongado de IBP pode levar a gastroenterites de repetição e pneumonias, portanto o tempo deve ser o menor possível. O IBP mais usado é o omeprazol (0,5 a 1mg/kg/dia 1 ou 2x ao dia). O omeprazol apresenta instabilidade ao ser diluído, portanto deve ser administrado na formulação mups 10mg que será diluída e oferecida no mesmo momento, o comprimido não deve ser amassado.
				</P>
				<P>
					O tratamento cirúrgico é reservado a situações especiais, como refluxo patológico grave sem resposta ao tratamento clínico, manifestações com risco de morte (apneia e aspirações), esofagite grave com desnutrição, doenças graves do SNC, estenose esofágica e grandes hérnias hiatais.
				</P>
			</Subsection>
		  </Section>
		<Section title="Referências">
		<Reference idx={1} body="Jenifer R. Lightdale, David A. Gastroesophageal Reflux: Management Guidance for the Pediatrician. Pediatrics. 2013;131:1684-1695."/>
		<Reference idx={2} body="Andrea Horvath, MD, Piotr Dziechciarz, MD, Hania Szajewska, MD. The Effect of Thickened-Feed Interventions on Gastroesophageal Reflux in Infants: Systematic Review and Meta-analysis of Randomized, Controlled Trials. Pediatrics December 2008; 122:6 e1268-e1277"/>
		<Reference idx={3} body="Carroll AE, Garrison MM, Christakis DA. A systematic review of nonpharmacological and nonsurgical therapies for gastroesophageal reflux in infants. Arch Pediatr Adolesc Med. 2002 Feb;156(2):109-13."/>
		<Reference idx={4} body="Rocksane C. Norton, Francisco J. Penna. Gastroesophageal reflux. J. pediatr. (Rio J.). 2000; 76 (Supl.2): S218-S224."/>
		<Reference idx={5} body="Aldo J. F. Costa, Giselia A. P. Silva, Pedro A. C. Gouveia,  Ernani M. Pereira Filho. Prevalence of pathologic gastroesophageal reflux in regurgitant infants. J Pediatr (Rio J). 2004;80(4):291-5."/>
		<Reference idx={6} body="Wenzl TG, Schenke S, Peschgens T, Silny J, Heimann G, Skopnik H. Associação de apnéia e refluxo gastroesofágico em criança. Pediatr Pulmonol. 2001 Feb;31(2):144-9."/>
		<Reference idx={7} body="Porta G, Koda Y.K.L. Gastroenterologia e Hepatologia. 1a Edição. São Paulo: Editora Manole; 2011. p.230-43."/>
		</Section>
	</Routine>
}