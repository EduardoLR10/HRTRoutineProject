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

export default class InfeccoesTegumentares extends React.Component {

	static title = "Infecções Tegumentares e Miosites"
	static category = "Infectologia"
    static authors = "Dr. Iúri Leão de Almeida e Dr. Marco Antônio Alves Cunha"
    static tags = ["celulite", "erisipela", "miosite", "mialgia"]

		render = () =>
			<Routine title={InfeccoesTegumentares.title} category={InfeccoesTegumentares.category} authors={InfeccoesTegumentares.authors}>
				<Section title="Diagnóstico Clínico">
                    <P>
                        Doenças infecciosas de pele, anexos e tecido subcutâneo, de apresentação heterogênea, cujos agentes etiológicos mais frequentes são o Staphylococcus aureus e o Streptococcus pyogenes, beta-hemolítico, do grupo A.
                    </P>
                    <P>
                        Fatores de risco: Crianças abaixo de 5 anos, em especial as do gênero masculino e as que habitualmente se expõem a risco de pequenos traumas. Mais comum em climas quentes.
                    </P>
                    <P>
                        Sinais e sintomas frequentes:
                    </P>
                    <List>
                        <LItem>
                            <Text style={{fontWeight: 'bold'}}>Abscesso:</Text> coleção profunda de pus, de tamanho variável, proeminente ou não. Há rubor, calor, dor e depois flutuação.
                        </LItem>
                        <LItem>
                            <Text style={{fontWeight: 'bold'}}>Impetigo:</Text> infecção superficial da pele, caracteristicamente com vesículas, bolhas e pústulas, as quais se rompem formando crostas.
                        </LItem>
                        <LItem>
                            <Text style={{fontWeight: 'bold'}}>Ectima:</Text> infecção crostosa que envolve epiderme e derme e que à escarificação revela abaixo das crostas uma superfície ulcerada.
                        </LItem>
                        <LItem>
                            <Text style={{fontWeight: 'bold'}}>Foliculite:</Text> infecção do folículo piloso, de caráter limitado e pequena extensão.
                        </LItem>
                        <LItem>
                            <Text style={{fontWeight: 'bold'}}>Furúnculo e Antraz:</Text> infecção do folículo piloso e tecidos adjacentes, com reação inflamatória local e às vezes formação de abscessos. 
                        </LItem>
                        <LItem>
                            <Text style={{fontWeight: 'bold'}}>Erisipela:</Text> Infecção da derme, área de eritema bem definida, de aspecto vermelho-violáceo, dolorosa, às vezes com porta de entrada.
                        </LItem>
                        <LItem>
                            <Text style={{fontWeight: 'bold'}}>Celulite:</Text> Infecção da derme e tecido subcutâneo, clinicamente indistinguível da erisipela na maioria dos casos.
                        </LItem>
                        <LItem>
                            <Text style={{fontWeight: 'bold'}}>Miosite viral:</Text> inflamação difusa da musculatura, em especial em panturrilhas, sem importantes alterações ao exame à exceção de dor local e dificuldade de marcha. Por vezes a criança pode recusar-se a se levantar, por medo da dor, o que preocupa muito os responsáveis. Diferente do adulto, é auto-limitada, dura poucos dias, embora as enzimas musculares podem manter-se alteradas por vários dias. Os adenovírus e os arbovírus são os principais agentes etiológicos.
                        </LItem>
                        <LItem>
                            <Text style={{fontWeight: 'bold'}}>Miosites bacterianas:</Text> são infecções bacterianas graves, que inicialmente podem simular um quadro de celulite, podem envolver qualquer feixe muscular, mas são mais comuns na coxa e no braço. Ocorre intenso edema do membro afetado e muita dor, mas pode ser difícil de notar hiperemia no início. Em muitos casos, há leucocitose com desvio à esquerda. Ao longo de alguns dias há tendência para supuração, mas nem sempre ocorre espontaneamente, sendo necessário indicar drenagem cirúrgica. Miosites bacterianas na coxa evoluem com coleções purulentas laminares que nem sempre são fáceis de perceber ao exame físico, de modo que é necessário solicitar ultrassonografia para que se possa buscar drenagem cirúrgica.
                        </LItem>
                    </List>
                </Section>
                <Section title="Diagnóstico Laboratorial">
                    <P>
                        Quase sempre dispensável, todavia o hemograma pode demonstrar sinais sugestivos de infecção bacteriana. Ultrassonografia pode ser útil para avaliação de coleções de pus. Na miosite viral é comum se observar leucopenia e aumento de TGO, TGP, DHL e CPK. Estas enzimas se elevam devido a inflamação do tecido muscular.
                    </P>
                </Section>
                <Section title="Critérios de Internação">
                    <P>
                        Crianças com lesões extensas (que tomem um segmento inteiro de um membro, por exemplo) ou com estado geral comprometido, em especial as menores de 2 anos. Intolerância à medicação oral ou falha de tratamento oral prévio.
                    </P>
                </Section>
                <Section title="Complicações Mais Frequentes">
                    <P>
                        Necessidade de drenagem cirúrgica das coleções, afecção contígua da fáscia muscular, o que geralmente causa dor incapacitante e imobilidade.
                    </P>
                    <P>
                        Podem ocorrer com síndromes tóxicas como na escarlatina, na síndrome da pele escaldada e na síndrome do choque tóxico.
                    </P>
                    <P>
                        No caso de infecções pelo estafilococo CA-MRSA (<Text style={{fontStyle: 'italic'}}>S. aureus</Text> resistente a oxacilina adquirido da comunidade) pode ocorrer progressão muito rápida da infecção tegumentar com áreas de necrose, já que esse patógeno produz a LPV, uma enzima proteolítica.
                    </P>
                    <P>
                        Nos casos associados a varicela pode ocorrer expansão rápida das lesões e formação de múltiplos óstios de drenagem purulenta. Em casos raros pode ocorrer a evolução para fasciíte necrotizante.
                    </P>
                </Section>
                <Section title="Tratamento">
                    <P>
                        Para satisfatória erradicação dos gram-positivos de pele, é recomendada a duração do tratamento em 10 dias.
                    </P>
                    <List>
                        <LItem>
                            1ª escolha: cefazolina 100 mg/kg/dia de 6/6h
                        </LItem>
                        <LItem>
                            2ª escolha: clindamicina 10 mg/kg/dose de 8/8h ou 6/6h (1ª escolha em caso de CA-MRSA)
                        </LItem>
                        <LItem>
                            3ª escolha: oxacilina 100 a 200 mg/kg/dia de 6/6h quando o agente for conhecido (<Text style={{fontStyle: 'italic'}}>S. aureus</Text>)
                        </LItem>
                    </List>
                    <P>
                        Nos caso de fasciíte necrotizante ou de sepse grave, é possível a associação de gentamicina 5 - 7,5 mg/kg/dia em dose única como adjuvante.
                    </P>
                    <P>
                        Complementação do tratamento domiciliar após a alta: cefalexina 50 a 100 mg/kg/dia de 6/6h ou clindamicina para os casos de resistência.
                    </P>
                    <P>
                        Observação: a clindamicina deve ser administrada preferencialmente por via venosa. A formulação oral manipulada pode ser tentada, mas é mais apropriada para terminar os tratamentos iniciados por via venosa, uma vez que dão muita dispepsia e o sabor é muito amargo.
                    </P>
                </Section>
                <Section title="Critérios de Alta">
                    <P>
                        Afebril há 48h com redução do calor e rubor local. Na absoluta maioria dos casos não é necessário controle de hemograma.
                    </P>
                    <Subsection title="Prognóstico e Orientações para o Seguimento">
                        <P>
                            É recomendado um retorno precoce para avaliação dos casos que receberam alta em uso de antibioticoterapia oral  para complementação do tratamento, o que permite a identificação de falhas terapêuticas.
                        </P>
                    </Subsection>
                </Section>
				<Section title="Referências">
				<Reference idx={1} body="Farhat CK, Carvalho ES, Carvalho LH, Succi RC, editors. Infectologia Pediátrica. 3.ed. São Paulo: Atheneu; 2007."/>
				<Reference idx={2} body="Krugman S, Katz SL, Gershon AA, Wilfert CM. Doenças Infecciosas na Infância. 9.ed. Rio de Janeiro: Guanabara Koogan; 1994."/>
				</Section>
		</Routine>
}