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
import img3 from './images/image3.png'
import img4 from './images/image4.png'
import img5 from './images/image5.png'
import img6 from './images/image6.png'

export default class ParadaRespiratoria extends React.Component {

	static title = "Parada Cardiorrespiratória"
	static category = "Emergência e Terapia Intensiva"
	static authors = "Dr. Luiz Antônio de Almeida e Silva"

		render = () =>
			<Routine title={ParadaRespiratoria.title} category={ParadaRespiratoria.category} authors={ParadaRespiratoria.authors}>
                <P>
                    Rotina que aborda ressuscitação cardiopulmonar em pediatria em ambiente hospitalar.
                </P>
                <Section title="Introdução">
                    <P>
                        Esta rotina é baseada nas diretrizes, de 2015, do International Liaison Committee on Resuscitation (ILCOR), constituída pelos principais comitês de ressuscitação do mundo. Envolve um conjunto de medidas que visam restabelecer a função respiratória e circulatória e estão indicadas na parada cardiorrespiratória e na bradicardia com sinais de hipoperfusão.
                    </P>
                </Section>
                <Section title="Definição">
                    <P>
                        Entende-se por parada cardiorrespiratória (PCR) a ausência de pulso, a apneia ou gasping e a ausência de responsividade. Ocorre a interrupção da circulação sanguínea como resultado da ausência ou ineficácia da atividade mecânica cardíaca.
                    </P>
                </Section>
                <Section title="Causa">
                    <P>
                        Enquanto a PCR em adultos ocorre de maneira súbita geralmente relacionada a fibrilação ou taquicardia ventricular, em crianças ocorre mais frequentemente por hipóxia relacionada a uma piora respiratória ou cardiocirculatória progressiva, portanto esteja atento às situações de baixa oxigenação, ventilação e a perfusão tecidual inadequadas.
                    </P>
                    <P>
                        Taxa de sobrevida;
                    </P>
                    <P>
                        Variável de acordo com o local. Se ocorrer em ambiente hospitalar está em torno de 43% e extra-hospitalar de 8%. Também será mais alta se o ritmo for chocável – 25% a 34% e de 7% a 24% se for assistolia.
                    </P>
                </Section>
                <Section title="Como proceder">
                    <P>
                        A avaliação, diagnóstico e conduta deve começar em no máximo 10 segundos. A criança em PCR se apresentará sem responsividade, ou seja, sem contactuar, sem resposta verbal e sem resposta a dor. Estará em apneia ou em gasping; não apresentará movimento respiratório ou se este existir não estará sendo suficiente para a captação de oxigênio; a avaliação é por inspeção. Os pulsos estarão ausentes, tanto os centrais quanto os periféricos e a checagem se dá pela palpação dos principais pontos: carotídeo para os maiores de 1 ano e femoral e radial para todas as idades. Outros pulsos poderão ser checados. Estes três valores são suficientes para o diagnóstico de uma PCR. Imediatamente inicia-se a RCP de alta qualidade que se baseia em manobras que serão descritas abaixo e de ações auxiliares, como a monitorização contínua, a instalação de oxigênio, acesso vascular e glicemia capilar. As medicações e eletroterapia devem ser concomitantes de acordo com a necessidade de cada caso.
                    </P>
                    <P>
                        A assistência adequada, em ambiente hospitalar, começa com uma boa equipe formada por profissionais que tenham experiência médica e domínio das habilidades de ressuscitação, bem como uma boa dinâmica e comunicação. É importante ter funções definidas, responsabilidades claras, conhecer as limitações de cada um, compartilhar conhecimentos, intervenção construtiva e respeito mútuo.
                    </P>
                    <Figure source={img1} top_label="Disposição dos Socorristas"/>
                    <Table head={['Função', 'Responsabilidades']} data={[
                        ['Líder', '- Coordena a tentativa de ressuscitação\n- Monitora o desempenho das tarefas\n- Imprime um comportamento excelente na equipe'],
                        ['Ventilação', '- Checa o equipamento e oferece oxigênio\n- Insere a cânula nasofaringe ou orofaringe\n- Aplica ventilação com bolsa-valva-máscara\n- Insere o tubo nasogástrico ou orogástrico\n- Prepara/realiza a intubação endotraqueal'],
                        ['Compressão', '- Aplica as compressões torácicas'],
                        ['IV / IO', '- Obtém um acesso IV/IO\n- Prepara e administra os medicamentos e os fluidos'],
                        ['Monitor / desfibrilador / capnógrafo', '- Estabelece e opera o equipamento\n- ECG\n- Analisa o pulso e CO2 exalado'],
                        ['Observador / registrador', 'Monitora o desempenho da equipe usando a lista de checagem de competências']
                    ]} />
                    <P>
                        A RCP de alta qualidade se baseia em compressões torácicas e ventilações. A sequência recomendada nas diretrizes atuais, começa com compressões, depois abertura de vias aéreas e respiração. As compressões devem ser fortes o suficiente para pressionar o tórax no  terço inferior do esterno, aproximadamente 4 a 5 cm de profundidade, permitir o retorno torácico por completo para que haja retorno venoso; numa frequência entre 100 e 120 compressões por minuto, minimizar ao máximo as interrupções e evitar ventilações excessivas, isso pode ser prejudicial porque impede o retorno venoso e diminui e débito cardíaco. As ventilações precisam ser seguras e adequadas, ou seja, com o paciente intubado e conectado a uma fonte de oxigênio – a elevação do tórax deve ser observada. A ventilação com bolsa-valva-máscara é tão eficaz quanto a intubação, não perca tempo tentando intubar se há dificuldade. A relação ventilação-compressão não existe, ou seja, enquanto um socorrista faz as compressões o outro faz 10 ventilações por minuto, salvo enquanto não houver intubação, onde a relação passa a ser de 2 ventilações de 1 segundo para cada 15 compressões com 2 socorristas. A cada dois minutos ou menos se houver cansaço, os socorristas deverão se revezar nas compressões e o tempo de troca deverá ser o mínimo possível.
                    </P>
                    <P>
                        A ressuscitação cardiopulmonar (RCP) não encerra o tratamento curativo, mas um meio que permite a perfusão tecidual adequada até que a causa desencadeante seja controlada. O controle e estabilização do paciente são fundamentais para que possamos dar condições de remoção até uma unidade de terapia intensiva. 
                    </P>
                    <P>
                        Em PCR há ausência de pulso, o que chamamos de ritmo de colapso, que envolve quatro situações clínicas, cada uma com sua peculiaridade de complicação e tratamento e que só poderão ser diagnosticadas com o auxílio de um monitor cardíaco. A seguir mostraremos o padrão elétrico de cada um. O tratamento será mostrado no algoritmo, adiante.
                    </P>
                    <Figure source={img2} top_label="Taquicardia Ventricular sem Pulso"/>
                    <Figure source={img3} top_label="Fibração Ventricular"/>
                    <Figure source={img4} top_label="Assistolia"/>
                    <Figure source={img5} top_label="Atividade Elétrica sem Pulso"/>
                    <Figure source={img6} top_label="Algoritmo de Parada Cardiorrespiratória"/>
                    <P>
                        <Text style={{fontWeight: 'bold'}}>FV – fibrilação ventricular; TVSP – taquicardia ventricular sem pulso; AESP – atividade elétrica sem pulso.</Text>
                    </P>
                    <P>
                        Tamanho das pás: infantis para menores de 1 ano ou 10 kg e tipo adulto para os maiores.
                    </P>
                    <P>
                        Atividade elétrica sem pulso
                    </P>
                    <P>
                        Trate a causa
                    </P>
                    <P>
                        Causas:
                    </P>
                    <List>
                        <LItem>
                            Hipovolemia;
                        </LItem>
                        <LItem>
                            Hipóxima;
                        </LItem>
                        <LItem>
                            Hidrogênio (acidose);
                        </LItem>
                        <LItem>
                            Hipo/Hiperpotassemia;
                        </LItem>
                        <LItem>
                            Hipoglicemia;
                        </LItem>
                        <LItem>
                            Hipotermia;
                        </LItem>
                        <LItem>
                            Toxinas;
                        </LItem>
                        <LItem>
                            Tamponamento cardíaco;
                        </LItem>
                        <LItem>
                            Tensão no tórax (pneumotórax);
                        </LItem>
                        <LItem>
                            Tromboembolismo pulmonar;
                        </LItem>
                        <LItem>
                            Trombose coronária.
                        </LItem>
                    </List>
                </Section>
                <Section title="Algumas Drogas">
                    <List>
                        <LItem>
                            <Text style={{fontWeight: 'bold'}}>Adrenalina:</Text> 0,01 mg/kg (0,1 ml/kg solução 1:10000) IV ou IO a cada 3 a 5 minutos;
                        </LItem>
                        <LItem>
                            <Text style={{fontWeight: 'bold'}}>Atropina:</Text> 0,02 mg/kg (max 0,5 mg em crianças e 1 g em adolescentes) – bloqueio e atividade vagal;
                        </LItem>
                        <LItem>
                            <Text style={{fontWeight: 'bold'}}>Amiodarona:</Text> 5 mg/kg – pode ser repetida até 2x;
                        </LItem>
                        <LItem>
                            <Text style={{fontWeight: 'bold'}}>Lidocaína:</Text> 1 mg/kg.
                        </LItem>
                    </List>
                    <P>
                        <Text style={{fontWeight: 'bold'}}>Importante:</Text> sugerimos a realização de cursos avançados que envolvem as PCRs a fim de que enriqueça mais os conhecimentos e habilidades e multiplique o aprendizado para que cada fez mais a nossas crianças tenham recuperação com o mínimo de sequela possível.
                    </P>
                </Section>
				<Section title="Referências">
				<Reference idx={1} body="American Heart Association, Suporte Avançado de vida em Pediatria. Manual do profissional, Orora visual, 3210 Innovative Way, Mesquite, Texas, EUA, edição em português, 2017."/>
				<Reference idx={2} body="Schvartsman C, Reis A, Farhat S, Pronto-socorro, 3ª edição, Barueri SP, Ed. Manole, 2018."/>
				</Section>
		</Routine>
}