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

export default class FormulasLacteas extends React.Component {

  static title = "Fórmulas Lácteas"
  static category = "Pediatria Geral e Puericultura"
  static authors = "Dr. Francisco Rufino Rosa Neto"

	render = () =>
	  <Routine title={FormulasLacteas.title} category={FormulasLacteas.category} authors={FormulasLacteas.authors}>
		  <P>
			  Essa rotina aborda fórmulas lácteas na impossibilidade do aleitamento materno.
		  </P>
		  <P>
			  O leite materno é o melhor alimento para o RN e lactentes até 6 meses, sendo muito importante que se lute para conseguir a amamentação exclusiva durante esse período, após os 6 meses será introduzida a dieta complementar e o ideal é que mantenha o leite materno até dois anos ou mais.
		  </P>
		  <P>
			  Há inúmeros benefícios quando se consegue o aleitamento materno, dentre eles a melhora da imunidade do lactente, diminuição dos riscos de alergia, economia financeira, microbiologicamente seguro, promove o crescimento da mandíbula e fortalece a musculatura da face, promove melhor crescimento da arcada dentária e ainda benefícios maternos como diminuição da obesidade, diminuição do câncer de mama, anticoncepção, menor sangramento materno.
		  </P>
		  <P>
			  Por razões diversas o aleitamento materno não é possível e nesses momentos é necessário o uso de fórmulas infantis. O aleitamento materno pode estar contra indicado de forma temporária ou de forma absoluta.
		  </P>
		  <P>
			  Algumas contra indicações ou dificuldades para o aleitamento materno de forma absoluta estão Galactosemia no RN, mãe HIV ou HTLV positiva, uso de quimioterápicos e/ou radioterápicos materno, mastectomia e contra indicações temporárias ou parciais estão Fenilcetonúria, varicela materna, uso de alguns medicamentos e radioisótopos.
		  </P>
		  <P>
			  As fórmulas infantis tem evoluído bastante na sua composição, visando manter a qualidade nutricional, com fórmulas variadas para etapas diferentes do crescimento e situações especiais da vida da criança. A escolha da fórmula deve ser a mais apropriada a cada situação e o pediatra é o profissional mais adequado a prescreve-la.
		  </P>
		  <P>
			  O volume da dieta e número de vezes a ser prescrito depende se a fórmula será usada em forma de complemento ao leite materno ou se será de forma exclusiva. Quando for prescrita como complemento ao leite materno, a quantidade será empírica e acertada a cada consulta de acordo com a necessidade e o ganho de peso do bebê, e nesses casos a melhor maneira de prescrever seria por translactação na mama ou no copo, para que não atrapalhe ainda mais a amamentação ao seio materno.
		  </P>
		  <P>
			  Nos casos em que o aleitamento materno for totalmente impossibilitado, a prescrição da fórmula poderá ser feita na mamadeira ou no copo e então seguiremos um volume de acordo com idade e peso do bebê (20 a 30ml/kg por dieta de 6 a 8 vezes ao dia) para que tenhamos uma taxa calórica entre 110 e 140cal/kg/dia.
		  </P>
		  <P>
			  De acordo com a OMS e também as sociedades de nutrologia e pediatria (ESPGHAN, AAP, SBP), a alimentação complementar nunca deve ser introduzida antes dos 4 meses, e necessita de desenvolvimento neurológico o suficiente para deglutição dos alimentos, ficando possível iniciar entre 4 e 6 meses de vida.
		  </P>
		<Table head={['Idade', 'Volume por Refeição', 'Número de refeições/dia']} data={[
		  ['Nascimento a 30 dias', '60 a 120 ml', '6 a 8 vezes'],
		  ['30 a 60 dias', '120 a 150 ml', '6 a 8 vezes'],
		  ['2 a 3 meses', '150 a 180 ml', '5 a 6 vezes'],
		  ['3 a 4 ou 6 meses', '180 a 210 ml', '4 a 5 vezes'],
		  ['> 4 ou > 6 meses', '180 a 210 ml', '2 a 3 vezes']
		]} title="Tabela 1. Sugestão de Volume de Refeições Láctas por Faixa Etária"/>
		<P>
			As fórmulas seguem padrões na sua composição de proteínas, gorduras, carboidratos, micronutrientes e vitaminas para atender as diferentes faixas etárias e diferentes situações. 
		</P>
		<P>
			Para crianças saudáveis sem nenhuma restrição alimentar usaremos as fórmulas que seguem, todas a base do leite de vaca:
		</P>
		<P>
			As chamadas Fórmula Infantil de Partida é a usada na faixa etária de 0 a 6 meses (geralmente denominada como fórmula 1), de 6 a 12 meses a Fórmula Infantil de Seguimento (geralmente denominada de fórmula 2) e 12 a 24 meses a Fórmula Infantil de Transição (geralmente denominada fórmula 3).
		</P>
		<P>
			Entre as várias fórmulas de várias marcas, devemos preferir aquelas que contenham na sua formulação, os nutrientes mais adequados e mais parecidos à do leite materno, em quantidade de proteínas, gorduras, carboidratos, DHA, ARA, relação proteínas do soro/caseína (70/30), osmolaridade, micronutrientes, vitaminas e que estejam de acordo com CODEX Alimentarius (órgão que regulamenta a composição das fórmulas).
		</P>
		<P>
			A diluição recomendada é 1 medida (4,3g) do pó para cada 30ml de água filtrada, e sendo nessa diluição, a fórmula oferecerá 0,67 Kcal/ml, devendo prescrever sempre em múltiplos de 30ml para facilitar para a família.
		</P>
		<P>
			A Fórmula Infantil de Transição pode ser usada até os 3 anos de idade, mas após os dois anos de idade pode ser usado os compostos lácteas. A preferência para o uso da fórmula de transição ou compostos lácteo é que eles tem na sua formulação quantidades de nutrientes mais apropriados que o leite integral. Sendo que após os 3 anos de idade pode ser usado o leite integral na alimentação das crianças.
		</P>
		<Table head={['Nutriente', 'Fórmula de Partida', 'Fórmula de Seguimento']} data={[
		  ['Proteínas', '1.4 a 1.7 g/100ml', '2.2 a 2.5 g/100ml'],
		  ['Carboidratos', '7.5 g/100ml', '8 g/100ml'],
		  ['Lipídios', '3.5 g/100ml', '3 g/100ml'],
		  ['Calorias', '67 Kcal/100ml', '67 Kcal/100ml']
		]} title="Tabela 2. Composição dos Principais Nutrientes das Fórmulas no Primeiro Ano de Vida"/>
		<Section title="Fórmulas Infantis para Situações Especiais">
			<Subsection title="Fórmula com Proteína Isolada de Soja">
				<P>
					Indicada em bebês maiores de 6 meses de vida com alergia à proteína do leite de vaca (APLV) (IgE mediada) ou com intolerância à lactose. Contém os nutrientes adequados e fornece as mesmas calorias que as fórmulas infantis de seguimento. No Distrito Federal, é fornecido pela SES (Secretaria de Estado de Saúde) após avaliação de pediatra e nutricionista, credenciados, da rede pública.
				</P>
			</Subsection>
			<Subsection title="Fórmula com Proteína Parcialmente Hidrolisada">
				<P>
					A fórmula com proteína parcialmente hidrolisada, é uma fórmula composta a partir do leite de vaca com proteínas do soro parcialmente hidrolisada e tem menor teor de lactose. Tem como benefício a melhor digestibilidade e esvaziamento gástrico quando comparada à fórmula de partida. Possui as mesmas características quanto a DHA e ARA, lipídeos, micronutrientes e vitaminas, ainda tem também as mesmas calorias por 100 ml de fórmula. Não deve ser usada quando se tem APLV. Alguns estudos defendem a possibilidade de usá-la como tentativa de prevenir a alergia ao leite em crianças de baixo a médio risco, mas ainda há controversa no assunto.
				</P>
			</Subsection>
			<Subsection title="Fórmula com Proteína Extensamente Hidrolisada">
				<P>
					A fórmula com proteína extensamente hidrolisada é uma dieta semi-elementar e está indicada para alergia a proteína do leite de vaca e soja. Também é formulada a partir do leite de vaca porém com as proteínas do soro hidrolisadas a pequenos peptídeos. Tem a mesma densidade calórica que as fórmulas de partida e seguimento.
				</P>
				<P>
					No mercado tem marcas com lactose adicionada ou não. No caso, esta lactose é purificada e não atrapalharia o tratamento da APLV.
				</P>
				<P>
					As fórmula que contem lactose tem melhor palatabilidade e menor preço.
				</P>
				<P>
					Em situações de APLV com diarreia ou sangramento intestinal deve ser prescrito primeiro a fórmula isenta de lactose para posteriormente oferecer a fórmula com lactose.
				</P>
				<P>
					Essas fórmulas são caras, mas são fornecidas pela SES/DF até 2 anos de idade, quando necessário, após avaliação do pediatra e nutricionista credenciados da rede pública.
				</P>
			</Subsection>
			<Subsection title="Fórmula à Base de Aminoácidos Livres">
				<P>
					Dieta elementar, esta fórmula também é feita a partir do leite de vaca, mas nesse caso a proteína é reduzida a aminoácidos livres, na forma comum tem a mesma densidade calórica. Existem formulações de algumas marcas que são mais calóricas e com teores diferentes de proteínas e gorduras, mas todas apropriadas a alergias graves que não responderam ao tratamento com fórmula de proteína extensamente hidrolisada. Na maioria das fórmula 50% dos lipídeos são TCM (triglicerídeos de cadeia média) e todas isentas de lactose.
				</P>
				<P>
					Essas fórmulas são caras, mas são fornecidas pela SES/DF quando necessário, após avaliação do pediatra e nutricionista credenciados da rede pública.
				</P>
			</Subsection>
			<Subsection title="Fórmula sem Lactose">
				<P>
					Indicada para intolerância à lactose, mas sem alergia a proteína do leite de vaca. Não possui a separação para lactentes menores e maiores de 6 meses, e tem a composição parecida com a fórmula de partida, com as mesmas calorias.
				</P>
			</Subsection>
			<Subsection title="Fórmula para Prematuros">
				<P>
					Indicada para RNs prematuros e/ou baixo peso ao nascer até 3 meses de idade corrigida.
				</P>
				<P>
					Há no mercado fórmula onde a proteína não passa por nenhum processo de quebra, ficando a proteína intacta, e também onde são parcialmente hidrolisadas, todas possuem lactose na sua composição, sendo contra indicada nas alergias a proteína do leite de vaca e na intolerância a lactose. Tem maior teor proteico e maior densidade calórica quando comparado com a fórmula de partida, tem também TCM como parte dos lipídeos e também tem DHA e ARA.
				</P>
				<P>
					Fórmula de preço mais caro e não é fornecida pela SES/DF.
				</P>
			</Subsection>
			<Subsection title="Fórmula anti Regurgitação (AR)">
				<P>
					Esta fórmula infantil contém espessante na sua formulação e está indicada com o intuito de diminuir as regurgitações exageradas dos lactentes. Não deve ser usado quando há suspeita de alergia alimentar. Possui características semelhantes a das fórmulas de partida.
				</P>
			</Subsection>
			<Subsection title="Fórmulas Hipercalóricas">
				<P>
					Existem fórmulas onde a densidade calórica é aumentada, algumas com proteínas extensamente hidrolisadas, outras com proteína intacta e também a base de aminoácidos livres, cada uma com algumas particularidades mas no geral com composição nutricional adequada para a idade.
				</P>
				<P>
					Algumas fórmulas são para lactentes abaixo de 1 ano e outras acima de 1 ano.
				</P>
				<P>
					Segue abaixo um quadro com exemplos de algumas marcas comercializadas.
				</P>
			</Subsection>
			<Table head={['Característica da Fórmula', 'Marcas Comercializadas', 'Fornecida pela SES/DF']} data={[
			['Fórmula de Partida', 'NAN 1\nAptamil 1\nEnfamil 1', 'Não'],
			['Fórmula de Seguimento', 'NAN 2\nAptamil 2\nEnfamil 2', 'Não'],
			['Fórmula de Transição', 'NAN 3\nAptamil 3\nEnfagrow', 'Não'],
			['Proteína Isolada de Soja', 'NAN Soy\nAptamil soja 1 e 2\nEnfamil soja', 'Sim'],
			['Proteína Parcialmente Hidrolisada', 'NAN supreme 1 e 2\nAptamil HA\nEnfamil Gentlease', 'Não'],
			['Proteína Extensamente Hidrolisada com Lactose', 'Althera\nAptamil Pepti', 'Sim'],
			['Proteína Extensamente Hidrolisada sem Lactose', 'Alfaré\nPregomim Pepti\nNutramigen\nPregestimil', 'Sim'],
			['Aminoácidos Livres', 'Alfamino\nNeocate\nPuramino', 'Sim'],
			['Fórmula sem Lactose', 'NAN sem Lactose\nAptamil SL\nEnfamil sem Lactose', 'Não'],
			['Fórmula para Prematuros', 'Pre NAN\nAptamil Pre PDF\nEnfamil Pre ou Enfacare', 'Não'],
			['Fórmula Anti Regurgitação', 'NANA AR\nAptamil AR\nEnfamil AR', 'Não'],
			['Fórmula Hipercalórica com Proteína Intacta', 'Infatrini (< 1 ano)\nFortini (> 1 ano)', 'Sim'],
			['Fórmula Hipercalórica com Proteína Extensamente Hidrolisada', 'Peptamen junior', 'Sim'],
			['Fórmula Hipercalórica com Aminoácidos Livres', 'NeoForte\nNeospoon (pó para mingau)', 'Não']
			]} title="Quadro 1. Exemplos de Marcas Comercializadas de acordo com a característica das Fórmulas"/>
		</Section>
		<Section title="Referências">
		<Reference idx={1} body="Ferreira CT, Seidman E. Alergia Alimentar: atualização prática do ponto de vista gastroenterológico. Jornal de Pediatria (Rio J) 2007;83(1):7-20."/>
		<Reference idx={2} body="Chung CS, Yamini S, Trumbo PR. FDA’s health claim review: whey-protein partially hydrolyzed infant formula and atopic dermatitis. Pediatrics 2012;130:e408-14."/>
		<Reference idx={3} body="ASBAI & SBAN. Guia prático da APLV mediada pela IgE. Rev bras alerg imunopatol. 2012; 35(6):p203-233."/>
		<Reference idx={4} body="Danonebabyprofissionais [homepage na internet]. Fórmula infantis [acesso em 23/02/2019]. Disponível em www.danonebabyprofissionais.com.br"/>
		</Section>
	</Routine>
}