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

import img1 from './images/image1.png'
import img2 from './images/image2.png'
import img3 from './images/image3.jpg'
import img4 from './images/image4.png'
import img5 from './images/image5.png'

export default class ObstrucaoDeViaAereaPorCorpoEstranho extends React.Component {

	static title = "Obstrução de Via Aérea por Corpo Estranho"
	static category = "Emergência e Terapia Intensiva"
	static authors = "Dr. Luiz Antônio Silva"

		render = () =>
			<Routine title={ObstrucaoDeViaAereaPorCorpoEstranho.title} category={ObstrucaoDeViaAereaPorCorpoEstranho.category} authors={ObstrucaoDeViaAereaPorCorpoEstranho.authors}>
                <Section title="OVACE">
                    <P>
                        Sabe-se que 90% ocorre em menores de 5 anos e destes 65% são lactentes. Considerar, pois que se se trata de criança a grande maioria tem um cuidador adulto por perto, contudo essas ocorrências poderiam ser evitadas com medidas de prevenção. 
                    </P>
                    <P>
                        Ocorre de maneira súbita, em pessoas hígidas que rapidamente se apresentam com sinais de asfixia.
                    </P>
                    <P>
                        Para aqueles que sabem expressar o sinal universal de obstrução – fig.1.
                    </P>
                    <Figure source={img1} bottom_label="fig.1"/>
                    <P>
                        Nestes casos você só pode fazer uma pergunta: você está engasgado?
                    </P>
                </Section>
                <Section title="Classificação">
                    <P>
                        Leve.
                    </P>
                </Section>
                <Section title="Tosse Eficaz e Forte, Voz Compreensível, Corado e Leve Dispneia">
                    <P>
                        Moderada a grave;
                    </P>
                    <P>
                        Tosse ineficaz, voz abafada, estridor e gemência, cianose, acentuada dispneia.
                    </P>
                </Section>
                <Section title="Causas">
                    <List>
                        <LItem>
                            Lactentes e bebes;
                        </LItem>
                        <LItem>
                            Aspiração de pequenos objetos (balas, chicletes, brinquedos...);
                        </LItem>
                        <LItem>
                            Aspiração de leite regurgitado;
                        </LItem>
                        <LItem>
                            Crianças maiores e adultos;
                        </LItem>
                        <LItem>
                            Alimentos – carnes principalmente;
                        </LItem>
                        <LItem>
                            Balas e chicletes;
                        </LItem>
                        <LItem>
                            Fragmentos e sangue nos traumas.
                        </LItem>
                    </List>
                </Section>
                <Section title="Diagnóstico">
                    <P>
                        Iminentemente clínico e não deve perder tempo para tomar as condutas de desobstrução.
                    </P>
                    <Subsection title="Condutas">
                        <Subsubsection title="Consciente">
                        <Table head={['Menor de 1 ano', 'Maior de 1 ano até adulto']} data={[
                        ['Se consegue tossir apenas incentive a tosse.', 'Se consegue tossir apenas incentive a tosse.'],
                        ['Se a tosse é ineficaz inicie as manobras.', 'Se a tosse é ineficaz inicie as manobras.'],
                        ['5 golpes nas costas e 5 compressões torácicas – fig.2 e 3.', 'Manobra de Heimlich fig.4'],
                        ['Repita até expelir o corpo estranho ou perder a consciência.', 'Repita até expelir o corpo estranho ou perder a consciência.']
                        ]} />
                        </Subsubsection>
                        <Subsubsection title="Inconsciente - Para todas as idades">
                            <List>
                                <LItem>
                                    Se estiver sozinho no socorro grite por ajuda se ainda não o fez. 
                                </LItem>
                                <LItem>
                                    Ponha o paciente numa superfície dura e avalie. Se não responde e não respira, inicie a RCP de alta qualidade.
                                </LItem>
                                <LItem>
                                    Toda vez que abrir a via aérea para administrar ventilações, olhe dentro da boca. Caso veja algum objeto que possa ser removido, remova-o - fig.5. Caso não o veja continue a RCP. Não faça varredura digital às cegas, isso pode empurrar o corpo estranho e piorar o quadro!!!!!!!!
                                </LItem>
                                <LItem>
                                    Repita a RCP por 2 minutos. Se ainda estiver sozinho é o momento de parar e chamar por ajuda. Ligue 191 para os Bombeiros ou 192 para o SAMU.
                                </LItem>
                                <LItem>
                                    Continue com as manobras até a chegada de profissionais equipados e capacitados.
                                </LItem>
                            </List>
                            <P>
                                Todos os pacientes que se submeteram as manobras de desobstrução de via aérea, mesmo que tenha tido êxito, deve ser removido para uma unidade hospitalar a fim de que seja avaliado, pois pode ocorrer traumas ósseos e/ou viscerais.
                            </P>
                            <Figure source={img2} bottom_label="fig.2"/>
                            <Figure source={img3} bottom_label="fig.3"/>
                            <Figure source={img4} bottom_label="fig.4"/>
                            <Figure source={img5} bottom_label="fig.5"/>
                        </Subsubsection>
                    </Subsection>
                </Section>
				<Section title="Referências">
				<Reference idx={1} body="http://www.bombeiros.pr.gov.br/arquivos/File/1gb/socorros/Viasaereas.pdf"/>
				<Reference idx={2} body="American Heart Association, Suporte Avançado de vida em Pediatria. Manual do profissional, Orora visual, 3210 Innovative Way, Mesquite, Texas, EUA, edição em português, 2017."/>
				<Reference idx={3} body="Schvartsman C, Reis A, Farhat S, Pronto-socorro, 3ª edição, Barueri SP, Ed. Manole, 2018."/>
				</Section>
		</Routine>
}