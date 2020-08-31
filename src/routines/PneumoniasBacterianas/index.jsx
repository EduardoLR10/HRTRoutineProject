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

export default class PneumoniasBacterianas extends React.Component {

	static title = "Pneumonias Bacterianas"
	static category = "Pneumologia"
    static authors = "Dr. Fernando de Velasco Lino"
    static tags = ["pneumonia", "bactéria"]

		render = () =>
			<Routine title={PneumoniasBacterianas.title} category={PneumoniasBacterianas.category} authors={PneumoniasBacterianas.authors}>
                <Section title="Sinais e Sintomas Gerais">
                    <P>
                        Febre, tosse, dor torácica, desconforto respiratório, dor abdominal (podendo simular abdome agudo), roncos, estertores, macicez à percussão, diminuição de murmúrio vesicular, etc.
                    </P>
                </Section>
                <Section title="Steptococcus pneumoniae">
                    <P>
                        Conhecida também como "pneumococo".
                    </P>
                    <P>
                        É o agente bacteriano mais comum das pneumonias adquiridas na comunidade em pediatria (PAC).
                    </P>
                    <P>
                        Idade de acometimento: geralmente em maiores de 1 ano de idade.
                    </P>
                    <P>
                        Quadro clínico: início agudo, com evolução rápida dos sintomas, geralmente em menos de 1 semana.
                    </P>
                    <P>
                        Radiografia de tórax: qualquer apresentação, caracteristicamente broncopneumonia em lactentes e condensações lobares e segmentares em crianças maiores.
                    </P>
                    <P>
                        Hemograma: geralmente leucocitose com desvio à esquerda e até reação leucemóide. 
                    </P>
                    <P>
                        Derrame pleural: 5% dos casos, mas por ser o agente mais frequente, se torna a pneumonia mais frequente associada a derrame pleural (mais comum em casos absolutos).
                    </P>
                    <P>
                        Hemocultura: positiva em 50 % dos casos (teoria).
                    </P>
                    <P>
                        Cultura da Secreção Pleural: positiva em 50 % dos casos (teoria).
                    </P>
                    <Subsection title="Tratamento">
                        <Subsubsection title="Ambulatorial">
                            <P>
                                Amoxicilina em dose alta 80-100 mg/kg/dia;
                            </P>
                        </Subsubsection>
                        <Subsubsection title="Internados">
                            <P>
                                1ª Escolha: Ampicilina - 200-300 mg/kg/dia, 6/6h OU Penicilina Cristalina - 200-300.000 U/kg/dia, EV, 4/4h. Alta com Amoxicilina em dose alta.
                            </P>
                            <P>
                                2ª Escolha: Ceftriaxone - 100 mg/kg/dia, EV ou IM, 1-2x/dia. Alta com Ceftriaxone IM ou Cefalosporina VO ou, em alguns casos, com Amoxicilina VO. Lembrar que Ceftriaxone passa a ser primeira escolha em pneumonias extensas com sinais de toxemia, ou mesmo nas pneumonias com derrame pleural (este último associado com Oxacilina para cobrir o estafilococo). Nestes casos recomenda-se 10 dias de tratamento venoso.
                            </P>
                            <P>
                                3ª Escolha: Vancomicina - 40-60mg/kg/dia, EV, 6/6h. Diluir em 100 ml de SG 5% e correr em 1 hora rigorosamente, para evitar efeitos colaterais (lembrar de diminuir a hidratação venosa total da criança). Alta com Rifampicina 20 mg/kg/dia, 12/12h, VO.
                            </P>
                            <P>
                                Tempo de tratamento: 10 dias.
                            </P>
                            <P>
                                Evolução clínica: durante o tratamento adequado a melhora geralmente é rápida, já se notando a remissão da febre, melhora do hemograma e da radiografia em até 72 horas do início dos antibioticoterapia. exceção se dá às pneumonias pneumocócicas extensas com complicações (derrame pleural, pneumotórax, etc), cuja evolução é mais grave e a melhora clínica, laboratorial e radiológica são mais arrastadas.
                            </P>
                        </Subsubsection>
                    </Subsection>
                </Section>
                <Section title="Haemophilus influenzae">
                    <P>
                        Conhecida também como "hemófilos".
                    </P>
                    <P>
                        É o segundo agente bacteriano mais comum das pneumonias adquiridas na comunidade em pediatria.
                    </P>
                    <P>
                        Idade de acometimento: entre 4 meses e 5 anos. Há uma diminuição progressiva da incidência por imunidade adquirida.
                    </P>
                    <P>
                        Quadro clínico: início insidioso, com sintomas durando mais de 1 semana, com febre às vezes intermitente, podendo estar associado com otite, epiglotite, sinusite e meningite.
                    </P>
                    <P>
                        Radiografia de tórax: idem ao pneumococo, com a particularidade de ocorrer mais infiltrado.
                    </P>
                    <P>
                        Hemograma: inespecífico ou discreta leucocitose (geralmente até 15000, com neutrofilia).
                    </P>
                    <P>
                        Derrame pleural: 5% dos casos.
                    </P>
                    <P>
                        Hemocultura: positiva em 40% dos casos (teoria).
                    </P>
                    <P>
                        Cultura da secreção pleural: positiva em 50 % dos casos (teoria).
                    </P>
                    <Subsection title="Tratamento">
                        <Subsubsection title="Ambulatorial">
                            <P>
                                Amoxicilina 80-100 mg/kg/dia ou Amoxicilina + Clavulanato - 30-50 mg/kg/dia, 8/8h.
                            </P>
                        </Subsubsection>
                        <Subsubsection title="Internados">
                            <P>
                                1ª Escolha: Ampicilina - 200-300 mg/kg/dia, 6/6h OU Ampicilina + Sulbactan - 200 mg/kg/dia, EV, 6/6h. Alta com Amoxicilina dose alta ou Amoxicilina+Clavulanato.
                            </P>
                            <P>
                                2ª Escolha: Ceftriaxone - 100 mg/kg/dia, EV ou IM, 1-2x/dia. Alta com Ceftriaxone IM ou Cefalosporina VO ou, em alguns casos, com Amoxicilina VO.
                            </P>
                            <P>
                                Tempo de tratamento: 14 dias.
                            </P>
                            <P>
                                Evolução clínica: durante o tratamento adequado a melhora geralmente é insidiosa, lenta, notando-se a remissão da febre, melhora do hemograma e da radiografia após 72 horas do início dos antibioticoterapia.
                            </P>
                        </Subsubsection>
                    </Subsection>
                </Section>
                <Section title="Staphulococcus aureus">
                    <P>
                        Conhecida também como "estafilococo".
                    </P>
                    <P>
                        Idade de acometimento: mais comum entre 3 meses e 2 anos.
                    </P>
                    <P>
                        Quadro clínico: evolução rápida e exuberante, com febre alta, prostração, toxemia, distensão abdominal, íleo paralítico. Maior associação com desnutrição, varicela, coqueluche, após traumas e infecção hospitalar.
                    </P>
                    <P>
                        Radiografia de tórax: aspecto radiológico multifocal, uni ou bilateral, com comprometimento extenso. pneumatoceles presentes em 30% dos casos e surgem durante a evolução da doença, porém não são patognomônicos da doença.
                    </P>
                    <P>
                        Hemograma: leucocitose com neutrofilia e desvio à esquerda, ou mesmo leucopenia (gravidade). A anemia está sempre presente, às vezes com descompensação hemodinâmica.
                    </P>
                    <P>
                        Derrame pleural: 50% dos casos (mais comum em frequência/ porcentagem).
                    </P>
                    <P>
                        Hemocultura: positiva em 10% dos casos, podendo chegar a 50% em quadros sépticos (teoria).
                    </P>
                    <P>
                        Cultura da secreção pleural: Positiva em 50 % dos casos (teoria).
                    </P>
                    <Subsection title="Tratamento">
                        <P>
                            Tempo de tratamento total: MÍNIMO de 21 dias. Recomenda-se um tempo MÍNIMO de tratamento EV de 10 a 14 dias, conforme a evolução clínica.
                        </P>
                        <P>
                            Internação em todos os casos suspeitos.
                        </P>
                        <P>
                            Transfusão só será feita em quadros sépticos e com descompensação hemodinâmica.
                        </P>

                        <P>
                            1ª Escolha: Oxacilina - 200 mg/kg/dia, EV, 6/6h. Na alta, Cefalexina - 100mg/kg/dia, VO, 6/6h OU Clindamicina - 30 mg/kg/dia, EV, 6/6h. Na alta, Clindamicina - 30 mg/kg/dia, VO, 6/6h.
                        </P>
                        <P>
                            2ª Escolha: Vancomicina - 40-60mg/kg/dia, EV, 6/6h. Diluir em 100 ml de SG 5% e correr em 1 hora rigorosamente, para evitar efeitos colaterais (lembrar de diminuir a hidratação venosa total da criança). Alta com Rifampicina 20 mg/kg/dia, 12/12h, VO OU Amoxicilina + Clavulanato - 30-50 mg/kg/dia, 8/8h.
                        </P>
                        <P>
                            Evolução clínica: mesmo durante o tratamento adequado a melhora lenta/arrastada, podendo haver surgimento de resistência durante o tratamento e a necessidade de troca do esquema antibiótico. A febre pode durar até duas semanas, com diminuição progressiva de sua frequência e intensidade. A remissão da anemia e melhora da série branca no hemograma apresentam melhora igualmente arrastada. radiografias podem permanecer alteradas por até 6 meses, havendo um maior índice de sequelas pulmonares (fibrose, bronquiectasias, espessamento pleural mantido, etc).
                        </P>
                    </Subsection>
                </Section>
                <Section title="Mycoplasma pneumoniae">
                    <P>
                        Conhecida também como "micoplasma".
                    </P>
                    <P>
                        Idade de acometimento: maior incidência a partir dos 5 anos.
                    </P>
                    <P>
                        Quadro clínico: tosse seca, que evoluiu para irritativa ou produtiva, que dura vários dias ou semanas. Febre pode aparecer ou não. Associação com mialgia, cefaleia, dor abdominal, vômitos e diarreia. Chama a atenção o bom estado geral da criança na maioria das vezes. pode estar associado com episódios e sibilância e / ou sinusite.
                    </P>
                    <P>
                        Radiografia de tórax: Pode ter qualquer apresentação, mais comum infiltrado intersticial.
                    </P>
                    <P>
                        Hemograma: geralmente normal ou inespecífico.
                    </P>
                    <P>
                        Derrame Pleural: 5% dos casos, geralmente unilateral e de pequena monta.
                    </P>
                    <P>
                        Cultura: Cresce muito lento, ruim para o diagnóstico precoce.
                    </P>
                    <P>
                        Diagnóstico: sorologia (ELISA): IgM e IgG.
                    </P>
                    <Subsection title="Tratamento">
                        <P>
                            Macrolídeos, tratamento em torno de 14 dias (EXCETO A AZITROMICINA, CUJO TRATAMENTO É DE 5 DIAS!!).
                        </P>
                        <P>
                            Eritromicina - 30 mg/kg/dia, 6/6h.
                        </P>
                        <P>
                            Claritromicina - 15 mg/kg/dia, 12/12h.
                        </P>
                        <P>
                            Azitromicina 10-15 mg/kg/dia, uma vez ao dia.
                        </P>
                        <P>
                            Evolução clínica: após o tratamento adequado a melhora geralmente é arrastada, sendo a melhora da tosse o principal sintoma para a avaliação de melhora da doença.
                        </P>
                    </Subsection>
                </Section>
                <Section title="Critérios de Alta">
                    <P>
                        Melhora clínica, com remissão da dispneia, diminuição da tosse e ausência de febre por mais de 24 horas. A melhora radiológica não acompanha a melhora clínica, sendo recomendável controle radiológico ao final do tratamento nas pneumonias lobares, nas que acometem mais de um lobo pulmonar, nas pneumonias graves com complicações a nas de evolução muito arrastada, com demora de mais de 1 semana para atingir os critérios clínicos de melhora acima citados.
                    </P>
                </Section>
                <Section title="Critérios para Solicitação de Radiografia de Tórax de Controle">
                    <P>
                        Durante a internação: quando há piora clínica progressiva ou súbita durante o tratamento; quando há manutenção do quadro clínico, sem sinais de melhora importante, durante o tratamento; ao final do tratamento venoso de pneumonias graves; paras a avaliação de complicações (pneumatoceles, derrames pleurais); após procedimento de drenagem torácica; antes de retirar dreno torácico; 
                    </P>
                    <P>
                        Após a alta: ver <Text style={{fontWeight: 'bold'}}>Critérios de Alta</Text>.
                    </P>
                </Section>
				<Section title="Referências">
				<Reference idx={1} body="ROZOV, Tatiana. Doenças Pulmonares em Pediatria - Diagnóstico e Tratamento. 2. ed. São Paulo: Atheneu, 2012. 1088 p."/>
				<Reference idx={2} body="DIRETRIZES brasileiras em pneumonia adquirida na comunidade em pediatria. Jornal Brasileiro de Pneumologia, São Paulo, 01 abr. 2007. 1, p. S31-S50. Disponível em: <http://www.scielo.br/pdf/jbpneu/v33s1/02.pdf>. Acesso em: 04 jun. 2018."/>
				<Reference idx={3} body="PNEUMONIAS Adquiridas na Comunidade na Infância. Sociedade Brasileira de Pediatria, Jul. 2018"/>
				</Section>
		</Routine>
}