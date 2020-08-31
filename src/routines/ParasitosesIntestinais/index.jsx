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

export default class ParasitosesIntestinais extends React.Component {

	static title = "Parasitoses Intestinais"
	static category = "Gastroenterologia"
    static authors = "Dra. Ana Luiza Melo dos Santos"
    static tags = ["verminose"]

		render = () =>
			<Routine title={ParasitosesIntestinais.title} category={ParasitosesIntestinais.category} authors={ParasitosesIntestinais.authors}>
                <Section title="Introdução">
                    <P>
                        Na maioria dos casos, a presença do parasita no tubo digestório do hospedeiro se dá de forma equilibrada, sem que ocorram sintomas de doença, O hospedeiro nesses casos é apenas portador. Essa é a situação mais comum porque geralmente há um equilíbrio entre as forças de ação do parasita e as forças de defesa do hospedeiro. Quando a ação do parasita supera as forças de defesa do hospedeiro, então se instala a doença parasitária, que se mostra por meio de manifestações gerais, inespecíficas ou com manifestações mais exuberantes, típicas da enteroparasitose em questão.
                    </P>
                </Section>
                <Section title="Diagnóstico Clínico">
                    <Subsection title="Fatores de Risco">
                        <P>
                            Relacionados ao parasita: 
                        </P>
                        <List>
                            <LItem>
                                Número de exemplares: nas infestações com numerosos parasitas, ocorre suboclusão intestinal por áscaris, síndrome de má absorção por giardíase, perda de sangue na tricuríase maciça e na ancilostomíase;
                            </LItem>
                            <LItem>
                                Localização: colangite, pancreatite e apendicite induzidas pela localização do áscaris no colédoco ou no apêndice; 
                            </LItem>
                            <LItem>
                                Virulência: a <Text style={{fontStyle: 'italic'}}>Entamoeba histolytica</Text> propriamente dita é a espécie com grande poder de invasão dos tecidos, enquanto a <Text style={{fontStyle: 'italic'}}>Entamoeba dispar</Text> é a espécie de <Text style={{fontStyle: 'italic'}}>E. histolytica</Text> não invasiva.
                            </LItem>
                        </List>
                        <P>
                            Relacionados ao meio ambiente:
                        </P>
                        <List>
                            <LItem>
                                Grau de contaminação do solo, água ou alimentos com ovos, larvas ou cistos de parasitas. A maior contaminação é favorecida por condições climáticas ou geológicas próprias, aglomerados humanos, deficiência de saneamento básico, higiene precária das pessoas e dos alimentos.
                            </LItem>
                        </List>
                        <P>
                            Relacionados ao hospedeiro:
                        </P>
                        <List>
                            <LItem>
                                Desnutrição protéico-calórica: favorece formas invasivas na estrongiloidíase e crônicas na criptosporidíase; 
                            </LItem>
                            <LItem>
                                Carências nutricionais específicas;
                            </LItem>
                            <LItem>
                                Imunodeficiência primária, secundária a outras doenças ou ao uso de drogas imunossupressoras: favorece infecções mais graves e crônicas, principalmente pelos protozoários e estrongiloides; 
                            </LItem>
                            <LItem>
                                Maus hábitos: andar descalço (estrongiloidíase, ancilostomíase), geofagia (ascaridíase, tricuríase), comer carnes cruas (teníase, difilobotríase).
                            </LItem>
                        </List>
                    </Subsection>
                    <Subsection title="Quadro Clínico">
                        <Subsection title="Parasitoses Causadas por Helmitos">
                            <Subsection title="Ascaridíase">
                                <P>
                                    <Text style={{fontWeight: 'bold'}}></Text>
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Etiologia:</Text> <Text style={{fontStyle: 'italic'}}>Ascaris lumbricoides</Text> (conhecido vulgamente por "lombriga").
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Forma de transmissão:</Text> ingestão de ovos presentes no solo (hábito de levar mãos sujas à boca, geofagia,ingestão de água ou vegetais crus contaminados).
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Sinais e Sintomas:</Text> Em geral não causa sintomatologia, mas pode manifestar-se por dor abdominal, diarreia, náuseas e anorexia. Quando há grande número de parasitas pode ocorrer quadro de obstrução intestinal. Em virtude do ciclo pulmonar da larva, alguns pacientes apresentam manifestações pulmonares com broncoespamos, hemoptise e pneumonite, caracterizando a Síndrome de Loeffler, que cursa com eosinofilia importante.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Diagnóstico:</Text> Achado de ovos do parasita no exame parasitológico de fezes (EPF) em 3 amostras. Os melhores métodos para sedimentação de ovos nas fezes são os de Hoffman, Pons e Janner e de Kato-Katz. 
                                </P>
                                <P>
                                    Em casos mais graves de Síndrome de Loeffler, a radiografia de tórax pode revelar um infiltrado parenquimatoso grosseiro e esparso. O diagnóstico é confirmado com o achado de larvas no aspirado gástrico ou pelo aparecimento de ovos nas fezes 2 ou 3 meses depois do quadro pulmonar, caso a criança esteja com infestação primária.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Complicações:</Text> A migração do áscaris pode causar quadros graves como:
                                </P>
                                <List>
                                    <LItem>
                                        Apendicite, por invasão do apêndice cecal;
                                    </LItem>
                                    <LItem>
                                        Pancreatite hemorrágica, por obstrução da ampola de Vater e ducto pancreático (Wirsung);
                                    </LItem>
                                    <LItem>
                                        Colestase e colangite, por obstrução da ampola de Vater e da árvore biliar; 
                                    </LItem>
                                    <LItem>
                                        Abscesso hepático, pela subida dos vermes até o interior do parênquima hepático carreando bactérias; 
                                    </LItem>
                                    <LItem>
                                        Asfixia, por obstrução de vias aéreas ou cânula traqueal.
                                    </LItem>
                                </List>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Tratamento:</Text> é obrigatório mesmo nas infestações com pequeno número de parasitas. As drogas indicadas para tratamento estão listadas na tabela 1, com suas respectivas doses.
                                </P>
                                <P>
                                    No caso de suboclusão intestinal por áscaris, aplica-se o seguinte protocolo: 
                                </P>
                                <List>
                                    <LItem>
                                        Internação;
                                    </LItem>
                                    <LItem>
                                        Jejum;
                                    </LItem>
                                    <LItem>
                                        Sonda nasogástrica (SNG) para descompressão gástrica e administração de medicamentos;
                                    </LItem>
                                    <LItem>
                                        Hidratação venosa;
                                    </LItem>
                                    <LItem>
                                        Óleo mineral via sonda 10 a 30 mL a cada 3 horas durante 24 horas ou até que o óleo saia pelo ânus;
                                    </LItem>
                                    <LItem>
                                        Piperazina 75 mg a 100 mg;kg/dia, durante 5 dias (infelizmente pouco comercializada e indisponível nas farmácias);
                                    </LItem>
                                    <LItem>
                                        Tratamento cirúrgico quando ocorre oclusão intestinal total, necrose, perfuração ou vólvulo intestinal.
                                    </LItem>
                                </List>
                                <P>
                                    No caso de ascardíase biliar:
                                </P>
                                <List>
                                    <LItem>
                                        Hidratação venosa;
                                    </LItem>
                                    <LItem>
                                        Administração de antiespasmódicos, anti-helmínticos e antibióticos.
                                    </LItem>
                                </List>
                                <P>
                                    No caso de abscesso hepático: tratamento cirúrgico. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Controle de cura:</Text> repetição do EPF um mês após o tratamento. Justifica-se repetir a administração do anti-helmíntico após 30 a 60 dias, já que é possível a presença de larvas e, fase pulmonar por ocasião do primeiro tratamento.
                                </P>
                            </Subsection>
                            <Subsection title="Ancilostomíase">
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Etiologia:</Text> <Text style={{fontStyle: 'italic'}}>Acylostoma duodenale e Necator americanos</Text>.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Forma de transmissão:</Text> penetração de larvas infectantes na pele.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Sinais e Sintomas:</Text> as manifestações em geral são ausentes, mas são possíveis os seguintes sintomas: 
                                </P>
                                <List>
                                    <LItem>
                                        Dermatite larvária: prurido, eritema, edema, erupção papulovesicular durante até 2 semanas; mais frequente com espécie N. americanus;
                                    </LItem>
                                    <LItem>
                                        Pneumonite larvária: menos intessa do que na infecção por áscaris;
                                    </LItem>
                                    <LItem>
                                        Parasitismo intestinal: na fase aguda, podem ocorrer dor epigástrica, náuseas, vômitos, anorexia ou bulimia, flatulência ou diarreia; na fase crônica anemia hipocrômica e microcítica, anorexia, fraqueza, cefaleia, palpitações, sopro cardíaco, hipoproteinemia e edema por enteropatia perdedora de proteínas.
                                    </LItem>
                                </List>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Diagnóstico:</Text> Achado de ovos de ancilostomídeos no EPF. Por tratar-se de ovos leves, recomenda-se o uso de técnicas de flutuação, mas os métodos tradicionais podem ser utilizados.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Complicações:</Text> Anemia ferropriva e enteroparia perdedora de proteínas. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Tratamento:</Text> As drogas indicadas para tratamento estão listadas na tabela 1, com suas respectivas doses.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Controle de Cura:</Text> exames parasitológicos sucessivos no 7º, 14º e 21º dias após o tratamento.
                                </P>
                            </Subsection>
                            <Subsection title="Estrongiloidíase">
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Etiologia:</Text> <Text style={{fontStyle: 'italic'}}>Strongyloides stercoralis</Text>.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Forma de transmissão:</Text> penetração através da pele de larvas infectantes no estágio terciário presente em solo contaminado. A auto-infecção do hospedeiro pode ocorrer. Também é transmitido pela via fecal-oral, por alimentos e água contaminados, e pelas fezes, por meio de atividade sexual envolvendo relação anal.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Sinais e Sintomas:</Text> no local da penetração larvária pode ser observada uma dermatite com prurido. Os sintomas são variáveis e incluem diarreia, dor epigástrica, náuseas, mal-estar, perda de peso e, quando há envolvimento pulmonar, tosse, estertores e infiltrado pulmonar transitório.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Diagnóstico:</Text> achado de larvas nas fezes pelo método de Baerman-Moares, ou Rugai modificado. O mesmo método pode ser adotado para o achado de larvas em material de tubagem duodenal, escarro ou lavado broncoalveolar. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Complicações:</Text> há casos de hiperinfecção muito graves com disseminação para vários órgãos, com reação inflamatória local e formação de granulomas, especialmente em pacientes portadores de imunodepressão. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Tratamento:</Text> as duas principais drogas indicadas são o tiabendazol por 2 ou 3 dias, e o cambendazol em dose única (Tabela 1). O Albendazol, em dose dobrada e durante 3 dias  seguidos, possui eficácia inferior. 
                                </P>
                                <P>
                                    Na estrongiloidíase disseminada, aplica-se antibioticoterapia contra Gram-negativos, associada a tiabendazol durante 10 dias ou mais. 
                                </P>
                            </Subsection>
                            <Subsection title="Tricocefalíase ou Tricuríase">
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Etiologia:</Text> <Text style={{fontStyle: 'italic'}}>Trichocephalus trichiurus</Text> ou <Text style={{fontStyle: 'italic'}}>Trichuris trichiura</Text>.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Forma de transmissão:</Text> ingestão de ovos encontrados no solo, alimentos e mãos contaminados.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Sinais e Sintomas:</Text> Em geral manifestações leves em infestação com poucos vermes. Na criança com infecção extensa, especialmente desnutrida pode ocorrer a síndrome disentérica associada com diarreia grave com sangue e muco, presença de anemia e retardo do crescimento e desenvolvimento. Prolapso retal ocorre em alguns casos.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Diagnóstico:</Text> achados de ovos nas fezes, pesquisados pelos métodos de Faust, Lutz ou Kato-Katz. Na tricuríase maciça o diagnóstico é feito pela retossigmoidoscopia, que permite o reconhecimento de inúmeros vermes de 3 a 5 cm de comprimento, fixados a uma mucosa hiperemiada e friável.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Complicações:</Text> Pesquisas mostram boa recuperação de peso e estatura nas crianças com tricuríase maciça após tratamento específico. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Tratamento:</Text> O oxipiriquantel é a droga de escolha, com até 90% de eficácia, mas dificilmente encontrada no mercado. Veja opções terapêuticas e dose na tabela 1. 
                                </P>
                            </Subsection>
                            <Subsection title="Enterobíase ou Oxiuríase">
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Etiologia:</Text> <Text style={{fontStyle: 'italic'}}>Enterobius vermicularis</Text> ou <Text style={{fontStyle: 'italic'}}>Oxiurus vermiculares</Text>.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Forma de transmissão:</Text> Transmissão direta do ânus para a boca, principalmente por crianças e adultos sem cuidados de higiene e doentes mentais. Transmissão indireta também é possível, com a inalação de ovos presentes na poeira e utensílios domésticos. A retroinfecção é menos comum, e consiste na migração de larvas da região anal, por via ascendente, até os cólons e ceco.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Sinais e Sintomas:</Text> sua principal característica é o prurido anal, mais frequente no período noturno, o que causa irritabilidade, sono intranquilo e desassossego. As lesões causadas pelo ato de coçar podem resultar em infecções secundárias em torno do ânus e pontos hemorrágicos. Outros sintomas: dor abdominal, vômitos, tenesmo. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Diagnóstico:</Text> A tentativa de encontrar ovos de oxiúros em EPF é ocasionalmente infrutífera. O método de swab anal ou fita gomada é eficiente para o diagnóstico.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Complicações:</Text> Nas meninas, o verme pode migrar para a região genital, podendo ser encontrado na vulva, vagina e até na cavidade peritoneal. Causa intenso prurido vulvar, corrimento e até complicações anexiais. Há hipótese de ocorrer apendicite por enterobíase, mas não é usual e nem mesmo comprovado. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Tratamento:</Text> há 3 medicamentos que atingem 90 a 100% de eficácia na eliminação deste parasita: mebendazol (inclusive em dose única de 100 mg), albendazol em dose única e pamoato de pirvínio em dose única (tabela 1). 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Controle de Cura:</Text> A recidiva é muito frequente, justificando uma boa orientação preventiva, como: 
                                </P>
                                <List>
                                    <LItem>
                                        tratar todos os familiares, especialmente as outras crianças; 
                                    </LItem>
                                    <LItem>
                                        impedir a contaminação dos dedos da criança com ovos (uso de macacão, unhas cortadas);
                                    </LItem>
                                    <LItem>
                                        lavar o vestuário e roupas de cama; 
                                    </LItem>
                                    <LItem>
                                        repetir o medicamento após 15 a 20 dias. 
                                    </LItem>
                                </List>
                            </Subsection>
                            <Subsection title="Teníase">
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Etiologia:</Text> <Text style={{fontStyle: 'italic'}}>Taenia solium</Text> (embrião parasita o porco) e <Text style={{fontStyle: 'italic'}}>Taenia saginata</Text> (embrião parasita o gado bovino).
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Forma de transmissão:</Text> ingesta de carne de boi ou de porco mal cozida que contém as larvas. Período de incubação de cerca de três meses da ingestão da larva.  
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Sinais e Sintomas:</Text> náuseas, perda de peso, diarreia ou obstipação, e dores abdominais. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Diagnóstico:</Text> achado de proglotes nas fezes, roupas íntimas ou lençóis. Pode-se utilizar o método de Faust ou outros, mas é aconselhado examinar várias amostras de fezes. O teste de swab anal pode ajudar no diagnóstico. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Complicações:</Text> é raro, mas podem ocorrer suboclusão intestinal, apendicite, colangite ou pancreatite. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Tratamento:</Text>  Niclosamida como 1ª escolha, em dose única (90% de cura), o praziquantel por 4 dias, mebendazol por 4 dias em dose dobrada e a nitazoxanida (tabela 1). 
                                </P>
                            </Subsection>
                            <Subsection title="Himenolepíase">
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Etiologia:</Text> <Text style={{fontStyle: 'italic'}}>Hymenolepis nana</Text>, e eventualmente <Text style={{fontStyle: 'italic'}}>Hymenolepis diminuta</Text>.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Forma de transmissão:</Text> <Text style={{fontStyle: 'italic'}}>H. nana</Text>: ingestão de ovos do meio externo ou por autoinfestação a partir da liberação intraluminal de ovos. <Text style={{fontStyle: 'italic'}}>H. diminuta</Text>: ingestão acidental ou por deficientes mentais de artrópodos (pulgas, borboletas, besouros, baratas).
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Sinais e Sintomas:</Text> em geral assintomática, pelo pequeno número de parasitas. Em crianças com grande contaminação, desnutridas ou imunodeficientes, a autoinfestção se acelere e assim se dá a hiperinfestação. Podem surgir sintomas gerais como cólicas abdominais e diarreia crônica.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Diagnóstico:</Text> achado de ovos no EPF, por meio de técnicas de concentração de ovos. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Tratamento:</Text> Praziquantel dose única (taxa de cura {'>'} 95%). Niclosamida também é efetiva, porém deve ser administrada em 5 doses (tabela 1).  
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Controle de Cura:</Text> a autoinfestação promove a recidiva da parasitose, o que justifica repetir o tratamento após 20 a 30 dias.  
                                </P>
                            </Subsection>
                            <Subsection title="Difilobotríase">
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Etiologia:</Text> <Text style={{fontStyle: 'italic'}}>Dyphyllobothrium latum</Text>.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Forma de transmissão:</Text> hábito de ingerir peixe defumado ou cru (sushi, sashimi, ceviche). 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Sinais e Sintomas:</Text> A maioria dos indivíduos parasitados não apresenta sintomas. As manifestações podem incluir diarreia recorrente, dor ou desconforto abdominal, perda de peso, e ouros sintomas inespecíficos como fraqueza, emagrecimento e vertigem. Quando a infecção persiste por mais de 3 a 4 anos, pode haver anemia megloblástica, uma vez que os parasitas infestam o intestino delgado e são consumidores de vitamina B12. Quando em grande número, chegam a desencadear o quadro completo de anemia perniciosa. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Diagnóstico:</Text> identificação de ovos ou proglotes nas fezes. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Complicações:</Text> raramente podem provocar obstrução intestinal (infecções maciças). 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Tratamento:</Text> Niclosamida ou praziquantel (tabela 1), associado à suplementação de vitamina B12 e ácido fólico. 
                                </P>
                            </Subsection>
                            <Subsection title="Esquistosssomose">
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Etiologia:</Text> <Text style={{fontStyle: 'italic'}}>Schistosoma mansoni</Text>.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Forma de transmissão:</Text> contato com cercárias em águas infectadas, denominadas “lagoas de coceira”. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Sinais e Sintomas:</Text> A fase aguda pode ser assintomática ou apresentar-se como dermatite urticariforme com erupção papular, eritema, edema e prurido até 5 dias após a exposição. Cerca de 3 a 7 semanas depois pode evoluir para a forma de esquistossomose aguda ou febre de Katayama, caracterizada por febre, anorexia, dor abdominal e cefaleia. Esses sintomas podem ser acompanhados por diarreia, náuseas ou vômitos, tosse seca e hepatomegalia. Nessa fase o hemograma pode revelar intensa eosinofilia. Após 6 meses de infecção, a doença pode evoluir para a fase crônica, segundo as seguintes formas clínicas: 
                                </P>
                                <List>
                                    <LItem>
                                        Intestinal: diarreia de repetição, com dor ou desconforto abdominal;
                                    </LItem>
                                    <LItem>
                                        Hepatointestinal: diarreia, hepatomegalia;
                                    </LItem>
                                    <LItem>
                                        Hepatoesplênica compensada: hepatoesplenomegalia, hipertensão portal com formação de varizes esofageanas;
                                    </LItem>
                                    <LItem>
                                        Hepatoesplênica descompensada: uma das formas mais graves, com fígado muito aumentado ou já retraído pela fibrose; esplenomegalia, ascite, varizes de esôfago, hematêmese, anemia, desnutrição e hiperesplenismo. 
                                    </LItem>
                                </List>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Diagnóstico:</Text> Pelo quadro clínico-epidemiológico, e parasitológico de fezes pelo método de Kato-Katz.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Tratamento:</Text> utilizar o Praziquantel como a droga de escolha. Outra opção é o Oxamniquine (tabela 1).
                                </P>
                            </Subsection>
                        </Subsection>
                        <Subsection title="Parasitoses causadas por Protozoários">
                            <Subsection title="Amebíase">
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Etiologia:</Text> <Text style={{fontStyle: 'italic'}}>Entamoeba histolytica</Text>.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Forma de transmissão:</Text> água contaminada e via fecal-oral (homem-homem) por cistos amebianos maduros. Os portadores assintomáticos que manipulam alimentos são importantes fontes de disseminação. Período de incubação varia de 2 a 4 semanas. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Sinais e Sintomas:</Text> quadro clínico pode ser leve a moderado, caracterizado por desconforto abdominal até a presença de diarreia aguda intensa, com sangue e/ou muco, acompanhada de febre e calafrios. Nos casos graves, as formas trofozoítas se disseminam por meio da corrente sanguínea, podendo causar abscesso no fígado, nos pulmões ou no cérebro. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Diagnóstico:</Text> identificação dos trofozoítos ou cistos nas fezes, em aspirados, raspados ou biópsias obtidas por endoscopia ou colonoscopia. A USG e a TC são úteis no diagnóstico de abscesso amebiano. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Complicações:</Text> Granulomas no intestino, abscesso hepático, pulmonar ou cerebral, empiema, pericardite e colite com perfuração.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Tratamento:</Text> O tratamento das formas intestinais pode ser feito com secnidazol, metronidazol, tinidazol e nitazoxanida. Para as formas graves (amebíase intestinal intensa e amebíase extraintestinal) a primeira escolha é o metronidazol (tabela 2). No tratamento do abscesso hepático pode ser necessário a aspiração ou drenagem cirúrgica aberta. 
                                </P>
                            </Subsection>
                            <Subsection title="Balantidíase">
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Etiologia:</Text> <Text style={{fontStyle: 'italic'}}>Balantidium coll</Text>.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Forma de transmissão:</Text> ingestão de alimentos ou água contaminados com cistos. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Sinais e Sintomas:</Text> A maioria dos casos é assintomática. As manifestações, quando presentes, incluem diarreia persistente, ocasionalmente disenteria, dor abdominal e perda de peso. A doença pode ser mais grave em pessoas com imunodeficiência. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Diagnóstico:</Text> detecção de trofozoítos nas fezes ou em tecido coletado durante endoscopia. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Tratamento:</Text> a droga de escolha é a tetraciclina, e para criança menor de 8 anos indica-se metronidazol (tabela 2).
                                </P>
                            </Subsection>
                            <Subsection title="Giardíase">
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Etiologia:</Text> <Text style={{fontStyle: 'italic'}}>Giardia lamblia</Text>.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Forma de transmissão:</Text> via fecal-oral, especialmente por água contaminada.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Sinais e Sintomas:</Text> a maioria é assintomática. Os pacientes podem apresentar diarreia aguda ou crônica, leve a grave, acompanhada por desconforto abdominal, cólicas, distensão abdominal, náuseas, vômitos e fadiga. O protozoário pode causar atapetamento da mucosa duodenal, atrofia vilositária em graus variados no intestino delgado, com má absorção de açúcares, gorduras e vitaminas A, D, E, K, B12, ácido fólico e ferro. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Diagnóstico:</Text> achado de cistos no EPF, através do método de Faust, ou de trofozoítos quando as fezes são líquidas. Recomenda-se o exame de pelo menos 3 amostras de fezes, coletadas a intervalos de 3 a 4 dias. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Complicações:</Text> Nos casos de diarreia crônica esteatorreica, desnutrição proteico-energética, parada de crescimento, má absorção secundária de lactose, enteropatia perdedora de proteínas, edema, hipoproteinemia, deficiência de ferro, zinco, vitamina B12, ácido fólico, vitaminas A e E.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Tratamento:</Text> Os derivados nitroimidazólicos são as melhores opções para eliminação dessa infecção (tabela 2). 
                                </P>
                            </Subsection>
                            <Subsection title="Criptosporidiose">
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Etiologia:</Text> <Text style={{fontStyle: 'italic'}}>Cryptosporidium</Text> sp.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Forma de transmissão:</Text> ingestão de água ou alimentos contaminados com os oocistos. Apesar de ser um microrganismo oportunista, provoca também infecção em pessoas imunocompetentes.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Sinais e Sintomas:</Text> Assintomática na maioria dos infectados imunocompetentes. Pode ocorrer quadro de diarreia aguda aquosa, volumosa e autolimitada, com 3 a 12 dias de duração, quando os mecanismos imunológicos estão intactos. Nas pessoas imunodeprimidas por AIDS, neoplasias, hipogamaglobulinemia ou uso crônico de corticosteroides, ocorre diarreia grave, prolongada e recidivante. Essa diarreia pode cursar com síndrome de má absorção e grande perda de peso.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Diagnóstico:</Text> identificação de oocistos nas fezes, pelos métodos de coloração de Ziehl-Neelsen e da carbolfuccina de Kinyoun. A biópsia de mucosa de intestino delgado, corada com hematoxilina-eosina, permite boa visualização destes protozoários, geralmente na borda em escova dos enterócitos. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Complicações:</Text> Colecistite, colangite, estenose de colédoco distal, hepatite ou pancreatite. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Tratamento:</Text> Medidas de suporte geral e reidratação são suficientes para os portadores de diarreia autolimitada. Em casos graves e para os pacientes imunodeprimidos deve-se indicar o tratamento medicamentoso (tabela 2). 
                                </P>
                            </Subsection>
                            <Subsection title="Isosporíase">
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Etiologia:</Text> <Text style={{fontStyle: 'italic'}}>Isospora belli</Text>.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Forma de transmissão:</Text> ingestão de oocistos na água e alimentos contaminados.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Sinais e Sintomas:</Text> na maioria das fezes a infecção é assintomática ou provoca diarreia autolimitada. Em portadores de imunodeficiência do quadro é mais grave e arrastado, cursando com síndrome de má absorção. Pode determinar adentite mesentérica, invasão do baço e fígado e colecistite acalculosa. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Diagnóstico:</Text> EPF, com as colorações especiais de Ziehl-Neelsen ou de Kinyoun modificados. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Tratamento:</Text> o tratamento permite ótimos resultados com sulfametoxazol-trimetoprim por 10 dias, seguido de mais 20 dias com dose única diária profilática (tabela 2). 
                                </P>
                            </Subsection>
                            <Subsection title="Microsporíase">
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Etiologia:</Text> o grupo causador desta doença é representado por cerca de 14 microrganismos, e os mais descritos são: <Text style={{fontStyle: 'italic'}}>Encephalitozoon intestinalis</Text>, <Text style={{fontStyle: 'italic'}}>Enterocystozoon bieneusi</Text>, <Text style={{fontStyle: 'italic'}}>Anncallia</Text>, <Text style={{fontStyle: 'italic'}}>Pleistophora</Text>, <Text style={{fontStyle: 'italic'}}>Trachipleistophora</Text> e <Text style={{fontStyle: 'italic'}}>Nosema</Text> spp.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Forma de transmissão:</Text> via feca-oral, com destaque para água contaminada, por meio da ingestão de esporos, que são disseminados para os tecidos como o fígado e rins. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Sinais e Sintomas:</Text> diarreia, infecção da córnea, colecistite, hepatite, nefrite e peritonite, podendo evoluir para formas graves em pacientes com imunodepressão. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Diagnóstico:</Text> microscopia e coloração pelo método tricrômico em fezes ou outras secreções humanas. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Tratamento:</Text> em geral melhora os sintomas, mas nem sempre erradica os microrganismos. As drogas indicadas são albendazol e fumagilina, porém o E. bieneusi não responde a albendazol.  
                                </P>
                            </Subsection>
                            <Subsection title="Blastocistose">
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Etiologia:</Text> <Text style={{fontStyle: 'italic'}}>Blastocystis hominis</Text>.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Forma de transmissão:</Text> via fecal-oral por alimentos e água contaminados. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Sinais e Sintomas:</Text> em imunodeprimidos pode causar doença tanto do intestino delgado como do intestino grosso. As manifestações clínicas envolvem desde sintomas gastrointestinais inespecíficos até um quadro de diarreia aguda e eventualmente crônica.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Diagnóstico:</Text> identificação de cistos nas fezes. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Tratamento:</Text> metronidazol, iodoquinol e nitazoxanida têm sido as opções mais empregadas nos casos que não são autolimitados. 
                                </P>
                            </Subsection>
                            <Subsection title="Ciclosporíase">
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Etiologia:</Text> <Text style={{fontStyle: 'italic'}}>Cyclospora cayetanensis</Text>.
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Forma de transmissão:</Text> via fecal-oral por alimentos e água contaminados.  
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Sinais e Sintomas:</Text> ocasiona processo inflamatório e atrofia vilositária no intestino delgado. Os sintomas de diarreia e má absorção intestinal podem ser graves nos imunodeprimidos, e por outro lado, leves e autolimitados ou ausentes em pessoas imunocompetentes. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Diagnóstico:</Text> detecção de oocistos nas fezes por microscopia óptica ou coloração de Ziehl-Neelsen ou da carbolfuccina de Kinyoun. 
                                </P>
                                <P>
                                    <Text style={{fontWeight: 'bold'}}>Tratamento:</Text> Sulfametoxazol-trimetoprim por 7 dias é considerado a droga de escolha. 
                                </P>
                            </Subsection>
                        </Subsection>
                    </Subsection>
                </Section>
                <Section title="Tratamento">
                    <Table head={['Etiologia', 'Tratamento de Escolha', 'Outras Opções']} data={[
                        ['Ascaridíase', 'Albendazol 10mg/kg, dose única ou Mebendazol 100 mg 2x/dia, 3 dias', 'Levamisol (dose única)\nCrianças < 8 anos: 40 mg\nCrianças > 8 anos: 80 mg'],
                        ['Ancilostomíase', 'Mebendazol 100 mg 2x/dia, 3 dias', 'Albendazol dose única (2 comprimidos de 200 mg ou 10ml de suspensão oral. 5ml=200mg)'],
                        ['Estrongilodíase', 'Tiabendazol\n25mg/kg, 5 a 7 dias ou 50mg/kg, 2x/dia, 2 dias\nou\nCambendazol 5 mg/kg, dose única\nou\nAlbendazol 400 mg, 2x/dia, 2 dias', 'Para pacientes imunodeprimidos ou com doença disseminada recomenda-se a associação: ivermectina 200 mcg/kg/dia, 2 dias + albendazol 400 mg, 2 dias, durante 7 dias '],
                        ['Tricocefalíase ou Tricuríase', 'Albendazol:\n Quadro leve: 400 mg/dia, dose única\nQuadro moderado/grave: 400 mg/dia, durante 3 dias', 'Mebendazol 100 mg, 2x/dia, por 3 dias'],
                        ['Enterobíase ou Oxiuríase', 'Pamoato de pirvínio: 10 mg/kg dose única\nRecomenda-se repetir o tratamento após 2 semanas', 'Mebendazol 100mg, dose única\nAlbendazol 400 mg, dose única'],
                        ['Teníase', 'Niclosamida, dose única\n<35 kg: 1g (em jejum)\n>35kg: 2g', 'Praziquantel 20mg/kg, 1x/dia, 4 dias\nMebendazol 200 mg, 2x/dia, 4 dias\nNitazoxanida 7,5mg/kg, 2x/dia, 3 dias'],
                        ['Himenoleplíase', 'Praziquantel 20 mg/kg, dose única', 'Niclosamida, 1x/dia, 5 dias\n<35 kg: 1g\n>35kg: 2g'],
                        ['Difilobotríase', 'Praziquantel 10 a 20 mg/kg, dose única', 'Niclosamida, dose única\n<35 kg: 1g\n>35kg: 2g'],
                        ['Esquistossomose', 'Praziquantel\nCrianças ≥ 2 anos: 60 mg/kg, dose única\nAdultos: 50 mg/kg, dose única', 'Oxamniquine\nCrianças > 2 anos: 20 mg/kg, dose única\nAdultos: 15 mg/kg, dose única']
                    ]} title="Tabela 1. Tratamento dos parasitoses causadas por Helmintos."/>
                    <Table head={['Etiologia', 'Tratamento de Escolha', 'Outras Opções']} data={[
                        ['Amebíase', 'Forma intestinal\nSecnidazol 30 mg/kg/dia, dose única (dose máxima 2g/dia)\nEvitar uso no 1º trimestre de gestação e durante amamentação\n\nFormas graves intestinais ou extraintestinais (abscesso hepático)\nMetronidazol 50mg/kg/dia, 8/8h, 10 dias', 'Metronidazol 35 mg/kg/dia, 8/8h, 5 dias\nou\nTinidazol 50 mg/kg/dia, após refeição, 2 dias\nou\nNitazoxanida 7,5mg/kg, 2x/dia, 3 dias\n\n\nTinidazol 50 mg/kg/dia, após refeição, 3 dias'],
                        ['Balantidíase', 'Crianças < 8 anos\nMetronidazol 35 a 50 mg/kg/dia, 8/8h, 5 dias\nCrianças > 8 anos\nTetraciclina 40 mg/kg/dia, 6/6h, 10 dias', ''],
                        ['Giardíase', 'Secnidazol 30 mg/kg/dia, após refeição, dose única\nou\nMetronidazol 15 mg/kg/dia, 8/8h, 5 a 7 dias', 'Nitazoxanida 7,5mg/kg, 2x/dia, 3 dias\nou\nTinidazol 50 mg/kg/dia, dose única'],
                        ['Criptosporidiose', 'Crianças Imunocompetentes\nNitazoxanida\nCriança 1 a 3 anos: 100 mg, 12/12h, 3 dias\nCriança 4 a 11 anos: 200 mg. 12/12h, 3 dias\nCriança > 12 anos: 500 mg, 12/12h, 3 dias', 'Para crianças com HIV/aids e outras imunodeficiências\nNitazoxanida (conforme esquema apresentado) + Azitromicina 10 mg/kg no 1º dia e 5 mg/kg do 2º ao 10º dia'],
                        ['Isosporíase', 'Sulfametoxazol-trimetoprim\nSMX 25 mg/kg, TMP 5 mg/kg, 12/12h, 10 dias', ''],
                        ['Microsporíase', 'E. intestinalis: Albendazol 15 mg/kg/dia, 12/12h, 21 dias\nE. bieneusi: Fumagilina 20 mg, 8/8h, 14 dias', 'A dose de fumagilina é a indicada para adultos. Efeitos adversos: neutropenia e plaquetopenia.'],
                        ['Blastocistose', 'Metronidazol 35 a 50 mg/kg/dia, 8/8h, 5 dias', 'Iodoquinol 30 a 40 mg/kg/dia, 8/8h, 20 dias\nNitazoxanida 7,5mg/kg, 2x/dia, 3 dias'],
                        ['Ciclosporíase', 'Sulfametoxazol-trimetoprim\nSMX 25 mg/kg, TMP 5 mg/kg, 12/12h, 10 dias', 'Nitazoxanida 7,5mg/kg, 2x/dia, 3 dias']
                    ]} title="Tabela 2. Tratamento das parasitores causadas por Protozoários"/>
                </Section>
				<Section title="Referências">
				<Reference idx={1} body="Marques HHS, Sakane PT e Baldacci ER.Infectologia/Coleção Pediatria Instituto da Criança Hospital das Clínicas).  Barueri, SP: Manole, 2011. "/>
				<Reference idx={2} body="Carvalho E, Ferreira CT, Silva LR. Gastroenterologia e nutrição em pediatria. Barueri, SP: Manole, 2012."/>
				</Section>
		</Routine>
}