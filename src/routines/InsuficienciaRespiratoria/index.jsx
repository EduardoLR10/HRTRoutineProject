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

export default class InsuficienciaRespiratoria extends React.Component {

	static title = "Insuficiência Respiratória no RN"
	static category = "Neonatologia"
	static authors = "Dra. Maria Aparecida Moreira Machado"

		render = () =>
			<Routine title={InsuficienciaRespiratoria.title} category={InsuficienciaRespiratoria.category} authors={InsuficienciaRespiratoria.authors}>
                <P>
                    Rotina que aborda insuficiência respiratória no RN - manejo clínico.
                </P>
                <P>
                    Pode representar o primeiro sinal de uma infecção grave e potencialmente letal, sendo fundamental o reconhecimento e avaliação precoces de todo bebê acometido. A maioria das doenças respiratórias neonatais manifesta-se nas primeiras horas de vida, de forma inespecífica e, muitas vezes, com sobreposição de sinais e sintomas. É possível alcançar o diagnóstico correto a partir da análise cuidadosa da história clínica materna e do parto, e dos sinais e sintomas clínicos, em conjunto com a propedêutica de diagnóstico por imagem.
                </P>
                <Section title="Avaliar">
                    <Subsubsection title="Padrão Respiratório-Taquipneia">
                        <P>
                            Considera-se taquipneia quando, em repouso ou durante o sono, a frequência respiratória mantém-se persistentemente acima de 60 movimentos por minuto.
                        </P>
                    </Subsubsection>
                    <Subsubsection title="Ritmo">
                        <P>
                            Apneia e respiração periódica; 
                        </P>
                        <P>
                            É caracterizada por pausa respiratória superior a 20 segundos, ou entre 10 e 15 segundos se acompanhada de bradicardia, cianose ou queda de saturação de oxigênio;
                        </P>
                    </Subsubsection>
                    <Subsubsection title="Batimento de asas nasais">
                    </Subsubsection>
                    <Subsubsection title="Gemido expiratório">
                    </Subsubsection>
                    <Subsubsection title="Retrações torácicas">
                    </Subsubsection>
                    <Subsubsection title="Cianose">
                        <P>
                            Pode-se classificar a cianose em localizada ou periférica, e generalizada ou central. A cianose central, envolvendo a mucosa oral, é observada quando a concentração de hemoglobina reduzida excede 5g/dL, condição comum durante a hipoxemia grave. A cianose central, quando presente, deve ser sempre investigada, procurando-se afastar cardiopatias congênitas, hipertensão pulmonar e afecções graves do parênquima pulmonar.
                        </P>
                    </Subsubsection>
                </Section>
                <Section title="Identificação dos Sinais de Alerta">
                    <P>
                        Sinais e sintomas respiratórios que indicam condição grave e necessidade de intervenção imediata:
                    </P>
                    <List>
                        <LItem>
                            Obstrução de vias aéreas;
                        </LItem>
                        <LItem>
                            Gasping;
                        </LItem>
                        <LItem>
                            Sufocação;
                        </LItem>
                        <LItem>
                            Estridor.
                        </LItem>
                    </List>
                    <Subsubsection title="Falência Respiratória">
                        <List>
                            <LItem>
                                Apneia;
                            </LItem>
                            <LItem>
                                Esforço respiratório débil.
                            </LItem>
                        </List>
                    </Subsubsection>
                    <Subsubsection title="Colapso Circulatório">
                        <List>
                            <LItem>
                                Bradicardia;
                            </LItem>
                            <LItem>
                                Hipotensão arterial;
                            </LItem>
                            <LItem>
                                Má perfusão periférica.
                            </LItem>
                        </List>
                    </Subsubsection>
                    <Subsubsection title="Má oxigenação">
                        <List>
                            <LItem>
                                Cianose;
                            </LItem>
                            <LItem>
                                Hipoxemia ou palidez;
                            </LItem>
                        </List>
                    </Subsubsection>
                </Section>
                <Section title="Diagnóstico">
                    <List>
                        <LItem>
                            História Clínica;
                        </LItem>
                        <LItem>
                            Quadro Clínico;
                        </LItem>
                        <LItem>
                            Quadro Radiológico.
                        </LItem>
                    </List>
                </Section>
                <Section title="Causas Frequentes no PS">
                    <Subsection title="Hipertensão Pulmonar Persistente">
                        <P>
                            A HPPN é uma síndrome clínica caracterizada por hipoxemia grave e refratária, proveniente da diminuição do fluxo sanguíneo pulmonar e shunt direito-esquerdo através do forame oval e/ou canal arterial. O curto-circuito extrapulmonar decorre do aumento relativo da pressão na artéria pulmonar em relação à sistêmica. Esse quadro pode ocorrer de forma primária ou secundária a uma série de doenças cardiorrespiratórias neonatais.
                        </P>
                        <Subsubsection title="Principais doenças associadas à HPPN">
                            <List>
                                <LItem>
                                    Síndrome da dificuldade respiratória. 
                                </LItem>
                                <LItem>
                                    Síndrome da aspiração de mecônio.
                                </LItem>
                                <LItem>
                                    Hipoplasia pulmonar.
                                </LItem>
                                <LItem>
                                    Cardiopatias congênitas.
                                </LItem>
                                <LItem>
                                    Sepse, pneumonia. 
                                </LItem>
                                <LItem>
                                    Asfixia perinatal.
                                </LItem>
                            </List>
                        </Subsubsection>
                        <Subsubsection title="Ecocardiografia Doppler">
                            <P>
                                É o método de eleição para o diagnóstico e avaliação da eficácia das intervenções terapêuticas na HPPN. A ecocardiografia permite documentar o grau de shunt direito-esquerdo pelo canal arterial e/ou forame oval e a magnitude da hipertensão pulmonar. Além disso, o exame é fundamental para avaliar o estado da contratilidade miocárdica e afastar doenças estruturais cardíacas, em particular as cardiopatias dependentes de shunt direito-esquerdo, tais como estenose aórtica, interrupção do arco aórtico e síndrome da disfunção do ventrículo esquerdo.
                            </P>
                        </Subsubsection>
                        <Subsubsection title="Critérios diagnósticos da HPP">
                            <P>
                                Um neonato pode ser considerado portador de HPPN quando:
                            </P>
                            <P>
                                Estiver em ventilação mecânica com FiO<Text style={{fontSize: 8}}>2</Text> de 1,0 mantendo cianose central PaO<Text style={{fontSize: 8}}>2</Text>. 
                            </P>
                            <P>
                                Apresentar labilidade nos níveis de oxigenação arterial, ou seja, mais que dois episódios de queda da SatO2 abaixo de 85% no período de 12 horas, que necessitem de aumento no suporte ventilatório ou ventilação manual para revertê-los.
                            </P>
                            <P>
                                Houver diferença da oxigenação arterial entre os sítios pré-ductais (membro superior direito) e pós-ductais (membros inferiores); considerar diferença significante quando o gradiente de PaO<Text style={{fontSize: 8}}>2</Text> pré e pós-ductal for superior a 20mmHg ou de SatO2 pré e pós-ductal superior a 5%.
                            </P>
                            <P>
                                Houver evidências ecocardiográficas de hipertensão pulmonar.
                            </P>
                        </Subsubsection>
                    </Subsection>
                    <Subsection title="Pneumonia / Sepse Neonatal">
                        <P>
                            A pneumonia neonatal é um processo inflamatório dos pulmões resultante de infecção bacteriana, viral ou fúngica ou de origem química. Com frequência é um dos primeiros sinais de infecção sistêmica, estando associada a quadros como sepse e meningite neonatal.
                        </P>
                        <P>
                            As pneumonias neonatais têm sido classicamente divididas em:
                        </P>
                        <List>
                            <LItem>
                                Precoces (até 48 horas de vida) – predomínio de bactérias Gram-negativas.
                            </LItem>
                            <LItem>
                                Tardias – predomínio de bactérias Gram-positivas.
                            </LItem>
                        </List>
                    </Subsection>
                </Section>
                <Section title="Levar em Consideração">
                    <List>
                        <List>
                            <LItem>
                                Fatores de risco e parâmetros clínicos, radiológicos e laboratoriais para definição de pneumonia neonatal;
                            </LItem>
                            <LItem>
                                Fatores de risco maternos;
                            </LItem>
                            <LItem>
                                Corioamnionite clínica: 
                            </LItem>
                            <List>
                                <LItem>
                                    Febre materna ({'>'} 38°C)
                                </LItem>
                                <LItem>
                                    FC materna {'>'} 100 bpm
                                </LItem>
                                <LItem>
                                    GB materno {'>'} 20.000/mm³
                                </LItem>
                                <LItem>
                                    Fc fetal {'>'} 160 bpm
                                </LItem>
                                <LItem>
                                    Útero doloroso - Fisiometria
                                </LItem>
                            </List>
                            <LItem>
                                Rotura de membranas amnióticas {'>'}18h;
                            </LItem>
                            <LItem>
                                Trabalho de parto prematuro sem causa aparente;
                            </LItem>
                            <LItem>
                                Colonização materna por estreptococo beta hemolítico do grupo B;
                            </LItem>
                            <LItem>
                                Sinais clínicos sugestivos de sepse:
                            </LItem>
                            <List>
                                <LItem>
                                    Intolerância alimentar;
                                </LItem>
                                <LItem>
                                    Letargia;
                                </LItem>
                                <LItem>
                                    Hipotonia;
                                </LItem>
                                <LItem>
                                    Hipo ou hipertermia; 
                                </LItem>
                                <LItem>
                                    Distensão abdominal;
                                </LItem>
                            </List>
                            <LItem>
                                Imagens radiológicas que permanecem inalteradas por mais de 48 horas:
                            </LItem>
                            <List>
                                <LItem>
                                    Infiltrado nodular ou grosseiro;
                                </LItem>
                                <LItem>
                                    Infiltrado granular fino e irregular; 
                                </LItem>
                                <LItem>
                                    Broncogramas aéreos;
                                </LItem>
                                <LItem>
                                    Edema pulmonar;
                                </LItem>
                                <LItem>
                                    Consolidação segmentar ou lobar.
                                </LItem>
                            </List>
                            <LItem>
                                Triagem laboratorial positiva para sepse:
                            </LItem>
                            <List>
                                <LItem>
                                    Escore hematológico de Rodwell ≥3
                                </LItem>
                                <LItem>
                                    Proteína C reativa positiva
                                </LItem>
                            </List>
                        </List>
                    </List>
                </Section>
                <Section title="Tratamento">
                    <Subsection title="Pneumonia Tardia">
                        <List>
                            <LItem>
                                Depende da prevalência das bactérias no hospital e na comunidade; 
                            </LItem>
                            <LItem>
                                Vancomicina + aminoglicosido; 
                            </LItem>
                            <LItem>
                                Ceftazidime + aminoglicosido (Pseudomanas aeroginosa).
                            </LItem>
                        </List>
                    </Subsection>
                </Section>
                <Section title="Cardiopatias Congênitas">
                    <P>
                        Diante de um RN com suspeita de cardiopatia congênita, pode-se realizar o teste de hiperóxia com o objetivo de auxiliar no diagnóstico diferencial entre cardiopatia congênita, pneumopatia neonatal e hipertensão pulmonar persistente do RN. 
                    </P>
                    <P>
                        O teste consiste em oferecer oxigênio a 100% para o RN e obter PO<Text style={{fontSize: 8}}>2</Text> por gasometria arterial da região pré-ductal (membro superior direito) e pós-ductal (um dos membros inferiores).
                    </P>
                    <P>
                        De acordo com o valor da PO<Text style={{fontSize: 8}}>2</Text> , o teste é interpretado da seguinte maneira: 
                    </P>
                    <Subsection title="Teste Positivo">
                        <List>
                            <LItem>
                                PO<Text style={{fontSize: 8}}>2</Text> {'>'} 250 mmHg: excluídas as cardiopatias congênitas críticas.
                            </LItem>
                        </List>
                    </Subsection>
                    <Subsection title="Teste Positivo">
                        <List>
                            <LItem>
                                PO<Text style={{fontSize: 8}}>2</Text> {'<'} 100 mmHg: provável cardiopatia congênita cianótica crítica com fluxo pulmonar canal-dependente (atresia pulmonar) ou circulação em paralelo (transposição das grandes artérias). 
                            </LItem>
                            <LItem>
                                PO<Text style={{fontSize: 8}}>2</Text> entre 100 e 250mmHg: possível cardiopatia congênita com shunt misto (Ex.: Tronco arterial comum, ventrículo único sem estenose pulmonar, síndrome de hipoplasia do coração esquerdo).
                            </LItem>
                        </List>
                        <P>
                            Caso ocorra diferença entre a PO2 pré e pós-ductal acima de 20mmHg, deve-se suspeitar de hipertensão pulmonar persistente do RN.
                        </P>
                        <P>
                            O RN que apresentar teste de hiperóxia negativo tem grande chance de ser portador de cardiopatia com fluxo pulmonar ou sistêmico dependente do canal arterial, devendo receber prostaglandina E1 até que se realize o diagnóstico anatômico correto.
                        </P>
                    </Subsection>
                </Section>
                <Section title="Exames">
                    <P>
                        Radiografia de tórax;
                    </P>
                    <Subsubsection title="Dois aspectos principais devem ser observados:">
                        <P>
                            Tamanho da área cardíaca: presença de cardiomegalia sugere cardiopatia, embora a presença de área cardíaca normal não exclua esse diagnóstico.
                        </P>
                        <P>
                            Avaliação da trama vascular pulmonar: quando diminuída, sugere cardiopatias com fluxo pulmonar dependente do canal arterial (atresia pulmonar); quando aumentada, sugere cardiopatias com fluxo sistêmico dependente do canal arterial, cardiopatias com shunt misto e cardiopatias com shunt esquerda-direita.
                        </P>
                    </Subsubsection>
                    <Subsubsection title="Ecocardiograma com mapeamento de fluxo em cores:">
                        <P>
                            O ecocardiograma é exame obrigatório em qualquer RN com suspeita de cardiopatia.
                        </P>
                        <P>
                            Tratamento:
                        </P>
                        <P>
                            Existem duas situações em que se deve iniciar imediatamente o uso de PGE1, mesmo antes da confirmação diagnóstica de cardiopatia.
                        </P>
                        <P>
                            Quando o RN apresenta cianose acentuada não responsiva ao uso de oxigênio (teste de hiperóxia negativo).
                        </P>
                        <P>
                            Quando o RN apresenta quadro de choque sem boa resposta às medidas iniciais de tratamento.
                        </P>
                    </Subsubsection>
                    <Subsubsection title="O uso de PGE1 está indicado nas seguintes cardiopatias congênitas">
                        <P>
                            Cardiopatias com fluxo pulmonar dependente do canal arterial (Ex.: atresia pulmonar). 
                        </P>
                        <P>
                            Cardiopatias com fluxo sistêmico dependente do canal arterial (Ex.: atresia aórtica). 
                        </P>
                        <P>
                            Cardiopatias com circulação em paralelo (Ex.: transposição das grandes artérias).
                        </P>
                    </Subsubsection>
                    <Subsubsection title="Dose Utilizada">
                        <P>
                            A PGE1 deve ser utilizada em infusão contínua. A dose inicial é de 0,01µg/kg/min. Caso não haja resposta adequada, essa dose pode ser aumentada até 0,1µg/kg/min. É indicativa de boa resposta à administração da PGE1, uma melhora clínica dentro de 30 a 60 minutos, seja da cianose, seja dos sinais de baixo débito sistêmico.
                        </P>
                    </Subsubsection>
                </Section>
                <Section title="Manejo do RN com Insuficiência Respiratória">
                    <Subsection title="Tratamento">
                        <List>
                            <LItem>
                                DIETA ZERO. SOG ABERTA
                            </LItem>
                            <LItem>
                                HIDRATAÇÃO VENOSA conforme peso e idade
                            </LItem>
                            <LItem>
                                SUPORTE COM O<Text style={{fontSize: 8}}>2</Text>
                            </LItem>
                            <List>
                                <LItem>
                                    HOOD
                                </LItem>
                                <LItem>
                                    CPAP nasal
                                </LItem>
                                <LItem>
                                    VMA
                                </LItem>
                            </List>
                            <LItem>
                                Uma vez ajustados os parâmetros do suporte respiratório é fundamental verificar:
                            </LItem>
                        </List>
                        <P>
                            Sinais clínicos de aumento do trabalho respiratório (agitação e retrações da caixa torácica) e cianose. 
                        </P>
                        <P>
                            Estado hemodinâmico: pulsos, perfusão periférica, pressão arterial, débito urinário e frequência cardíaca. 
                        </P>
                        <P>
                            Gasometria arterial: a análise dos gases sanguíneos, aliada aos parâmetros clínicos é, ainda, o melhor indicador da necessidade de modificações do suporte ventilatório.
                        </P>
                        <P>
                            <Text style={{fontWeight: 'bold'}}>Avaliar a necessidade de administrar analgésicos: </Text>
                        </P>
                        <P>
                            Fentanil 1 a 2µg/kg por hora, EV contínuo.
                        </P>
                        <P>
                            <Text style={{fontWeight: 'bold'}}>Avaliar a necessidade de associar sedativos: </Text>
                        </P>
                        <P>
                            Midazolam (0,01 a 0,06mg/kg por hora, EV contínuo)
                        </P>
                    </Subsection>
                </Section>
                <Section title="Como proceder a exturbação traqueal">
                    <P>
                        É importante estabelecer um protocolo para a extubação traqueal, seguindo as seguintes recomendações: 
                    </P>
                    <P>
                        Considerar a extubação traqueal se o RN mantiver quadro respiratório estável por no mínimo 6 horas, com os seguintes parâmetros ventilatórios: FR {'<'} 20cpm, PIP {'<'} 20cmH<Text style={{fontSize: 8}}>2</Text>O, PEEP de 4cmH<Text style={{fontSize: 8}}>2</Text> O e FiO<Text style={{fontSize: 8}}>2</Text> {'<'} 0,40. 
                    </P>
                    <P>
                        <Text style={{fontWeight: 'bold'}}>O RN deve estar estável em relação aos seguintes sistemas:</Text>
                    </P>
                    <List>
                        <LItem>
                            <Text style={{fontWeight: 'bold'}}>Hemodinâmico:</Text> PA, perfusão periférica e FC devem situar-se nos limites da normalidade sem suporte ou sob infusão mínima de drogas vasoativas.
                        </LItem>
                        <LItem>
                            <Text style={{fontWeight: 'bold'}}>Infeccioso:</Text> se o RN tem sepse e/ou meningite e/ou enterocolite necrosante, essas infecções devem estar controladas.  Hematológico: o RN deve ter hematócrito mínimo de 35% para preservar a capacidade carreadora de oxigênio.
                        </LItem>
                        <LItem>
                            <Text style={{fontWeight: 'bold'}}>Metabólico:</Text> o neonato deve estar euglicêmico e com níveis normais de sódio, potássio, cálcio e magnésio. 
                        </LItem>
                        <LItem>
                            <Text style={{fontWeight: 'bold'}}>Neurológico:</Text> verificar se o RN é capaz de manter a respiração espontânea de maneira rítmica e regular. Se ele é portador de alguma lesão cerebral, a extensão da afecção não deve comprometer o funcionamento do centro respiratório.
                        </LItem>
                    </List>
                    <P>
                        Administrar corticosteroide para prevenir edema de laringe e/ou subglótico nos RN que permaneceram intubados por períodos superiores a duas semanas ou que apresentaram falha em extubação prévia devido à obstrução de vias aéreas superiores.
                    </P>
                    <P>
                        Iniciar com dexametasona 0,1mg/kg por dose, 3 doses, sendo a primeira cerca de 4 horas antes da extubação e as duas subsequentes a cada 8 horas após a extubação. Nos casos de extubação não planejada, ministrar a primeira dose logo após a extubação e as duas doses subsequentes a cada 8 horas.
                    </P>
                </Section>
                <Section title="Cuidados Pós-Exturbação">
                    <P>
                        Manter jejum por cerca de 2 horas após o procedimento. 
                    </P>
                    <P>
                        Realizar inalação com 1,0mL de solução milesimal de L-adrenalina pura, imediatamente após a extubação e depois a cada 4 horas, conforme indicação clínica. Monitorizar cuidadosamente o RN, em relação aos efeitos sistêmicos da adrenalina, como taquicardia, arritmias cardíacas e hipertensão arterial, entre outros. 
                    </P>
                    <P>
                        Se o concepto tiver sido exposto a situação de alto risco infeccioso (corioamnionite, amniorrexe prolongada, infecção materna, etc.), e/ou os exames laboratoriais estiverem alterados e/ou houver algum sinal clínico sugestivo de sepse, deve-se introduzir antibioticoterapia sistêmica -ampicilina + aminoglicosídeo
                    </P>
                </Section>
                <Section title="Broncodilatadores">
                    <P>
                        As crianças com DBP podem apresentar crises recorrentes de broncospasmo, devido à hipertrofia da musculatura lisa e hiperreatividade de vias aéreas. 
                    </P>
                    <P>
                        O uso de beta-agonistas melhora transitoriamente as trocas gasosas e a função pulmonar, porém não altera a evolução da DBP. 
                    </P>
                    <P>
                        Deve-se lembrar dos efeitos colaterais cardiovasculares (taquicardia, hipertensão arterial e arritmias cardíacas), alterações na relação ventilação-perfusão com piora do shunt intrapulmonar e agravamento da malácia brônquica e traqueal. 
                    </P>
                    <P>
                        Pode-se utilizar as seguintes medicações: 
                    </P>
                    <P>
                        Fenoterol: - Solução para nebulização (1mL = 5mg): 0,05 a 0,1mg/kg por dose em 3mL de SF0,9%, a cada 6 a 8 horas.
                    </P>
                </Section>
                <Section title="Salbutamol">
                    <P>
                        Solução para nebulização (1mL = 5mg): 0,1 a 0,5mg/kg por dose em 3mL de SF0,9%, a cada 4 a 6 horas. 
                    </P>
                    <P>
                        Aerossol dosimetrado (1 dose = 100µg): 1 a 2 doses por vez, a cada 6 a 8 horas. 
                    </P>
                    <P>
                        Brometo de ipratrópio: é um broncodilatador anticolinérgico que age de modo sinérgico com os beta-agonistas, sendo normalmente utilizado em associação com essas medicações.
                    </P>
                    <P>
                        Utilizar na seguinte posologia:
                    </P>
                    <P>
                        Solução para nebulização (1mL = 250µg): 125 a 250µg por dose em 3mL de SF0,9%, a cada 6 a 8 horas.
                    </P>
                </Section>
				<Section title="Referências">
				<Reference idx={1} body="http://www.redeblh.fiocruz.br/media/arn_v3.pdf"/>
				</Section>
		</Routine>
}