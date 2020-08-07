import React from 'react'
import Figure from '../../components/templates/Figure'
import { List, LItem } from '../../components/templates/List'
import P from '../../components/templates/Paragraph'
import Reference from '../../components/templates/Reference'
import Routine from '../../components/templates/Routine'
import Section from '../../components/templates/Section'
import Subsection from '../../components/templates/Subsection'
import Subsubsection from '../../components/templates/Subsubsection'
import Table from '../../components/templates/Table'

export default class DesconfortoRespiratorio extends React.Component {

  static title = "Desconforto Respiratório"
  static category = "Lactentes"
  static authors = "Dr. José Moreira Kffuri"

    render = () =>
      <Routine title={DesconfortoRespiratorio.title} category={DesconfortoRespiratorio.category} authors={DesconfortoRespiratorio.authors}>
          <P>
              Rotina que aborda a síndrome do desconforto respiratório do lactente.
          </P>
          <Section title="Considerações Iniciais e Definições">
                <P>
                    O lactente (criança de um a vinte e quatro meses de vida) tem características anatômicas, fisiológicas e imunológicas que favorecem o desconforto respiratório:
                </P>
                <List>
                    <LItem>
                        O pequeno diâmetro das vias aéreas, favorecendo o aparecimento de obstruções;
                    </LItem>
                    <LItem>
                        Músculos intercostais e diafragma imaturos, favorecendo a exaustão;
                    </LItem>
                    <LItem>
                        Os poros de ventilação colateral (canais de Lampert e poros de Kohn), pobremente desenvolvidos, favorecendo a formação de atelectasias;
                    </LItem>
                    <LItem>
                        A incoordenação tóraco abdominal, prejudicando a higiene brônquica;
                    </LItem>
                    <LItem>
                        Elastina diminuída, com conseqüente queda da complacência pulmonar;
                    </LItem>
                    <LItem>
                        Taxas metabólicasmais altas;
                    </LItem>
                    <LItem>
                        Capacidade residual funcional e reserva de oxigênio mais baixa, favorecendo a hipoxemia em tempo bem mais curto.
                    </LItem>
                </List>
                <P>
                    As características relatadas acima, somadas a um sistema imunológico ainda em desenvolvimento e o fato de as viroses respiratórias serem extremamente comuns, principalmente no outono inverno, fazem com que esta síndrome seja de altíssima prevalência, sendo responsável por 60% das internações em pediatria em qualquer época do ano e nas estações mais frias chegando perto dos 80%. 
                </P>
                <P>
                    Um problema de saúde pública.
                </P>
                <P>
                    É composta por uma tríade predominante: Tosse, Taquidispnéia e Ausculta Pulmonar Alterada. As alterações na ausculta pulmonar podem ser as mais variadas, tanto quanto à intensidade ou quanto ao tipo.
                </P>
                <P>
                    Febre, dificuldade de sucção, e cianose também estão presentes com freqüência.
                </P>
                <P>
                    Alguns grupos de pacientes apresentam evolução com maior gravidade e conseqüente maior número de complicações. São eles: cardiopatas, encefalopatas, desnutridos, pneumopatas crônicos, imunodeficientes, pacientes com infecção congênita, síndromes genéticas e malformações congênitas.
                </P>
                <P>
                    Alguns sinais clínicos nos trazem preocupação por serem sugestivos de uma evolução com maior gravidade: Hepatoesplenomegalia, prostração, estridor laríngeo, expansibilidade pulmonar assimétrica, vômitos incoercíveis, sopros cardíacos.
                </P>
                <P>
                    As complicações mais freqüentes na fase aguda consistem na hipoxemia grave, desidratação, distúrbios metabólicos, distúrbios acido básicos, atelectasias e insuficiência respiratória.
                </P>
                <P>
                    O escore respiratório abaixo deve ser usado na mensuração da taquidispnéia, principalmente nos casos de maior gravidade.
                </P>
          </Section>
          <Section title="Escore de Wood-Downes">
            <Table head={['Pontuação', 'Sibilância', 'Tiragem', 'F.R.', 'F.C.', 'Ventilação', 'Cianose']} data={[
            ['0', 'Não', 'Não', '< 30', '< 120', 'Simétrica', 'Não'],
            ['1', 'Final da expiração', 'Subcostal e intercostal', '31 - 46', '> 120', 'Diminuída', 'Sim'],
            ['2', 'Toda a expiração', 'Supraclavicular e BAN*', '46 - 60', '', 'Muito diminuída' , ''],
            ['3', 'Inspiração e expiração', 'Supraesternal e intercostal', '> 80', '', 'Tórax Silente', '']
            ]} label="* batimento de asa nasal"/>
            <List>
                <LItem>
                    <Text style={{fontWeight: 'bold'}}>Leve:</Text> 1 a 3 pontos.
                </LItem>
                <LItem>
                    <Text style={{fontWeight: 'bold'}}>Moderado:</Text> 4 a 7 pontos.
                </LItem>
                <LItem>
                    <Text style={{fontWeight: 'bold'}}>Grave:</Text> maior que 8 pontos.
                </LItem>
            </List>
          </Section>
          <Section title="Diagnóstico Diferencial">
            <Subsection title="Causas Frequentes">
                <List>
                    <LItem>
                        Bronquiolite viral aguda;
                    </LItem>
                    <LItem>
                        Pnemonias virais;
                    </LItem>
                    <LItem>
                        Laringotraqueobronquites.
                    </LItem>
                </List>
            </Subsection>
            <Subsection title="Causas A Considerar">
                <List>
                    <LItem>
                        Infecções bacterianas;
                    </LItem>
                    <LItem>
                        Refluxo gastresofágico;
                    </LItem>
                    <LItem>
                        Insuficiência cardíaca;
                    </LItem>
                    <LItem>
                        Asma;
                    </LItem>
                    <LItem>
                        Síndrome Pertussis.
                    </LItem>
                </List>
            </Subsection>
            <Subsection title="Causas Pouco Frequentes">
                <List>
                    <LItem>
                        Corpo estranho;
                    </LItem>
                    <LItem>
                        Fibrose cística;
                    </LItem>
                    <LItem>
                        Tuberculose;
                    </LItem>
                    <LItem>
                        Outras.
                    </LItem>
                </List>
            </Subsection>
          </Section>
          <Section title="Etiologia">
            <P>
                A etiologia viral é responsável pela grande maioria dos casos, o vírus mais prevalente, por volta de 60% dos casos é o Vírus Sincicial Respiratório. Este resultado se repete na maioria dos estudos de prevalência de vírus respiratórios em todo o mundo. Outros vírus também se mostram prevalentes: Adenovírus, Influenza, Para Influenza, Metapneumovírus, Rinovírus, H1N1 e outros. As bactérias e mico bactérias, também podem estar presentes. Uma pequena porcentagem na forma primária e em porcentagem maior na infecção secundária.
            </P>
          </Section>
          <Section title="Tratamento">
            <P>
                A maior parte dos lactentes deverá ser tratada no domicílio. Os critérios para hospitalização são:
            </P>
            <List>
                <LItem>
                    Hipoxemia, oximetria de pulso com resultado menor que 92;
                </LItem>
                <LItem>
                    Escore respiratório de Wood-Downes maior que quatro;
                </LItem>
                <LItem>
                    Impossibilidade de aceitação dietética por via oral.
                </LItem>
            </List>
            <P>
                Após a internação, o primeiro passo deve ser no sentido de ajudarmos a família a interagir com a situação, ajeitando a criança no berço, colocando coxins, elevando a cabeceira, tranqüilizando e inteirando os familiares da situação em que toda a equipe se encontra. 
            </P>
            <P>
                Após este primeiro contato, separamos os lactentes em dois grupos:
            </P>
            <Subsection title="Grupo 1">
                <P>
                    Para crianças aceitando bem a dieta, com escore Wood Downes entre quatro e sete:
                </P>
                <List>
                    <LItem>
                        Dieta mantida, sempre privilegiando o aleitamento materno até os dois anos e em caso de desmame irreversível, fórmulas de partida ou seguimento, adicionando comida de sal e frutas após o sexto mês de vida. Lembramos a importância do pediatra em prescrever a dieta do lactente.
                    </LItem>
                    <LItem>
                        Oxigênio terapia: O2 sob cateter nasal, se oximetria de pulso for menor que 92. 
                    </LItem>
                    <LItem>
                        Fisioterapia respiratória assim que haja estabilização do quadro hipóxico obstrutivo.
                    </LItem>
                    <LItem>
                        Oximetria e medição de temperatura, intermitentes.
                    </LItem>
                </List>
            </Subsection>
            <Subsection title="Grupo 2">
                <P>
                    Para crianças aceitando mal a dieta, com escore Wood Downes maior que 8:
                </P>
                <List>
                    <LItem>
                        Dieta suspensa ou trófica, oferecida por sonda naso gástrica em pequeno volume para manutenção do trânsito gastrointestinal.
                    </LItem>
                    <LItem>
                        Hidratação venosa com volume inicial de 100 a 120 ml/kg/dia em bomba de infusão, com velocidade de infusão de glicose (VIG) inicial de 5,0 mg/kg/min. e eletrólitos de acordo com a avaliação médica e laboratorial.
                    </LItem>
                    <LItem>
                        Oxigenioterapia controlada (FiO2 conhecida), na oxitenda ou máscara de Venturi com concentração de acordo com a oximetria de pulso, realizada de forma contínua.
                    </LItem>
                    <LItem>
                        Monitorização rigorosa: cardíaca, respiratória, além de freqüentes avaliações clínicas.
                    </LItem>
                    <LItem>
                        Fisioterapia respiratória, assim que haja estabilização do quadro hipóxico obstrutivo.
                    </LItem>
                </List>
            </Subsection>
          </Section>
          <Section title="Exames Complementares">
            <P>
                No momento da hospitalização:
            </P>
            <List>
                <LItem>
                    Hemograma completo;
                </LItem>
                <LItem>
                    Raios-X de Tórax.
                </LItem>
            </List>
            <P>
                De acordo com a evolução, a critério médico, outros exames serão necessários.
            </P>
          </Section>
          <Section title="Considerações sobre as Modalidades Terapêuticas">
            <Subsection title="Oxigenioterapia">
                <P style={{fontSize: 6}}></P>
                <P>
                    É o principal ponto do nosso tratamento. No primeiro grupo, onde a sintomatologia é mais leve, a oxigênioterapia será descontrolada, onde a FiO<P style={{fontSize: 6}}>2</P> administrada é desconhecida. Será ofertado O<P style={{fontSize: 6}}>2</P> por cateter nasal com fluxo de um a três litros por minuto.
                </P>
                <P>
                    Sempre que o desconforto é mais importante, Wood Downes maior que sete, seja na chegada ou na evolução da criança, teremos que instituir oxigênioterapia controlada, onde a FiO<P style={{fontSize: 6}}>2</P> será conhecida. Para isto temos que iniciar a administração de O<P style={{fontSize: 6}}>2</P> em uma Oxitenda ou em uma máscara de Venturi. A oxitenda exige além do O<P style={{fontSize: 6}}>2</P>, uma canulação de ar comprimido e um misturador de gases. A máscara de Venturi necessita apenas de oxigênio. O O<P style={{fontSize: 6}}>2</P> controlado é iniciado com uma FiO<P style={{fontSize: 6}}>2</P> de 50%, podendo chegar até 60 e no máximo 70%.
                </P>
                <P>
                    Após a instituição do O<P style={{fontSize: 6}}>2</P> controlado, indicaremos coleta gasométrica que nos orientará a progressão ou não da assistência respiratória.
                </P>
                <P>
                    Se a gasometria se mostrar satisfatória, mantemos a conduta. Se a gasometria mostrar hipoxemia, representa que a criança necessita de algo mais que O<P style={{fontSize: 6}}>2</P>: Pressão.
                </P>
                <P>
                    Instituiremos assim o CPAP nasal (modalidade de ventilação não invasiva composta de pressão contínua com pressão positiva aumentada no fim da expiração), com a FiO<P style={{fontSize: 6}}>2</P> da indicação e um PEEP, variando de 5 a 10 cm de H<P style={{fontSize: 6}}>2</P>O.
                </P>
                <P>
                    Se a gasometria mostrar hipercapnia, mais de 65, isolada ou acompanhada de hipoxemia indicaremos o BIPAP (modalidade de VNI onde além da pressão positiva no fim da expiração, oferece  pressão inspiratória positiva). Tem interface de máscara ou cânula nasal e pode ser feito tanto em máquina portátil quanto no respirador.
                </P>
                <P>
                    Se após a instituição da ventilação não invasiva a criança não mostrar melhora clínica e\ou gasométrica, indicaremos a entubação e ventilação mecânica.
                </P>
                <P>
                    Devemos sempre ressaltar que tanto o oxigênio puro quanto as modalidades com pressão positiva, invasivas ou não podem trazer malefícios ao nosso lactente, portanto devemos atuar sempre que possível minimizando a FiO<P style={{fontSize: 6}}>2</P> e as pressões por nós oferecidas.
                </P>
            </Subsection>
            <Subsection title="Broncodilatadores">
                <P>
                    A literatura atual é quase unânime em não indicar o bronco dilatador no tratamento de rotina no desconforto respiratório do lactente, reavaliamos o seu uso nos nossos pacientes, principalmente nos mais jovens e notamos uma pobre resposta na maior parte dos casos.
                </P>
                <P>
                    Portanto recomendamos seu uso apenas nas seguintes situações:
                </P>
                <List>
                    <LItem>
                        Crianças internadas, maiores de um ano;
                    </LItem>
                    <LItem>
                        Crianças que apresentem atelectasias;
                    </LItem>
                    <LItem>
                        Crianças que apresentem recorrências de internação, já a partir da segunda, independente da idade;
                    </LItem>
                    <LItem>
                        Crianças com diagnóstico de Síndrome Pertussis, mesmo presumível.
                    </LItem>
                </List>
                <P>
                    Os broncodiatadores por nós recomendados têm início na terapia inalatória, onde usamos preferencialmente o spray de salbutamol com espaçador, quatro jatos por etapa de dois minutos com intervalos de acordo com a avaliação médica. No caso de não estar disponível o salbutamol, usamos a nebulização com cinco gotas de fenoterol em três ml de soro fisiológico. Nos casos onde existe dificuldade técnica ou nos casos de maior gravidade, recomendamos o sabutamol por via intravenosa.            
                </P>
                <P>
                    Ainda sobre o uso do bronco dilatador, recomendamos o uso do RESGATE, apenas nos casos em que há recorrência (mais de três episódios) comprovada, onde o diagnóstico de lactente sibilante se impõe.
                </P>
            </Subsection>
            <Subsection title="Corticóides">
                <P>
                    O uso de corticoterapia sistêmica e/ou inalatória não é indicado no tratamento rotineiro desta síndrome. Nas situações abaixo, seu uso será considerado:
                </P>
                <List>
                    <LItem>
                        Laringotraqueobronquites, com graves obstruções altas, onde a c está indicada;
                    </LItem>
                    <LItem>
                        Crianças com recorrência comprovada, mais de três episódios, e mesmo assim analisando critérios tais como: IgE positivo, forte história familiar, dermatite atópica, etc.;
                    </LItem>
                    <LItem>
                        Crianças com mais de trinta dias de evolução;
                    </LItem>
                    <LItem>
                        Devemos sempre lembrar que o uso da corticoterapia sistêmica no lactente tem seus efeitos colaterais exacerbados, trazendo problemas a curto, médio e longo prazo;
                    </LItem>
                    <LItem>
                        Nas obstruções altas o uso da dexametasona é nossa primeira escolha;
                    </LItem>
                    <LItem>
                        No lactente sibilante usamos a prednisolona e se necessitar do uso parenteral a metilprednisolona.
                    </LItem>
                </List>
            </Subsection>
            <Subsection title="Antibióticoterapia - Critérios de Separação - Viral X Bacteriano">
                <P>
                    Nesta síndrome a incidência de infecção bacteriana primária é menos de 10%, portanto, nos casos típicos em crianças eutróficas a infecção viral prevalece. Porém, em alguns casos, levantamos a hipótese de infecção bacteriana primária ou secundária (mais frequente). Para nos ajudar a firmar o diagnóstico, listamos algumas situações que falam a favor de doença bacteriana, nos levando a considerar o uso de antimicrobianos:
                </P>
                <List>
                    <LItem>
                        Insuficiência respiratória;
                    </LItem>
                    <LItem>
                        Escore de Wood Downes maior que oito por mais de 48 horas;
                    </LItem>
                    <LItem>
                        Febre aferida na enfermaria por mais de 72 horas;
                    </LItem>
                    <LItem>
                        Secreções de aspecto purulento;
                    </LItem>
                    <LItem>
                        Hipoatividade, dificuldade de sucção, mesmo com boa saturação de O<P style={{fontSize: 6}}>2</P>;
                    </LItem>
                    <LItem>
                        Co morbidades agravantes já relatadas;
                    </LItem>
                    <LItem>
                        Derrames pleurais, pneumatoceles;
                    </LItem>
                    <LItem>
                        Grandes atelectasias.
                    </LItem>
                </List>
                <P>
                    Quando indicado o uso de antimicrobianos, privilegiando uma boa cobertura para o Pneumococo, Haemophilus Influenza e os Estafilococos da comunidade, germes comuns no lactente, recomendamos:
                </P>
                <List>
                    <LItem>
                        Ampicilina/sulbactan, uso venoso;
                    </LItem>
                    <LItem>
                        Amoxicilina/clavulanato, uso oral;
                    </LItem>
                    <LItem>
                        Macrolídeos, na suspeita de germes atípicos e na Síndrome Pertussis;
                    </LItem>
                    <LItem>
                        Nos casos de derrame pleural, pneumatoceles ou clínica sugestiva de Estafilococos Aureus, recomendamos o uso da Oxacilina associada à Ceftriaxona.
                    </LItem>
                </List>
            </Subsection>
            <Subsection title="Antivirais">
                <P>
                    A Ribavirina, ainda não comercializada no Brasil, chegou a ser usada em outros países, porém os resultados não corresponderam às expectativas e hoje está sendo muito pouco recomendada, estudos ainda inconclusivos.
                </P>
                <P>
                    O Oseltamivir, antiviral específico aos vírus Influenza, vem sendo usado no Brasil, recomendado pelo Ministério da Saúde no desconforto respiratório grave do lactente, principalmente naqueles pacientes onde o Influenza é isolado.
                </P>
                <P>
                    No nosso serviço o Oseltamivir é usado nas situações abaixo, além daquela onde o vírus é isolado:
                </P>
                <List>
                    <LItem>
                        Lactente desconfortado, onde os pais e\ou irmãos também apresentam sintomas gripais;
                    </LItem>
                    <LItem>
                        Lactente desconfortado, oriundo de creche ou instituição onde existam outras crianças com sintomas gripais;
                    </LItem>
                    <LItem>
                        Lactente com desconforto respiratório importante, onde a sintomatologia teve início há menos de 48 horas;
                    </LItem>
                    <LItem>
                        Lactentes com co morbidades: desnutridos, cardiopatas, pneumopatas, neuropatas, portadores de síndromes genéticas, etc..
                    </LItem>
                </List>
            </Subsection>
            <Subsection title="Nebulização com Solução Salina Hipertônica">
                <P>
                    Apesar de ter sido preconizada por vários artigos de revistas respeitadas, não há evidências para que seu uso seja recomendado sem restrições. Os estudos estão ainda inconclusivos.
                </P>
                <P>
                    No nosso serviço as vezes que foi utilizada,o resultado não foi satisfatório, aumentando a irritabilidade e não mostrando melhora significativa nos nossos lactentes.
                </P>
            </Subsection>
            <Subsection title="Nebulização com Adrenalina">
                <P>
                    Não há evidências científicas para seu uso, a não ser em obstruções altas.
                </P>
            </Subsection>
            <Subsection title="Antileucotrienos">
                <P>
                    O Montelucaste já foi testado em vários estudos, os resultados não mostraram evidências que justificasse o seu uso.
                </P>
            </Subsection>
            <Subsection title="Imunogobulina Humana">
                <P>
                    Não há evidências científicas para seu uso, apesar de ser preconizado, no paciente mais grave, em alguns serviços.
                </P>
            </Subsection>
            <Subsection title="Oxigênio Terapia Nasal de Alto Fluxo">
                <P>
                    O cateter ou cânula nasal de alto fluxo (CNAF) é um método não invasivo de suporte ventilatório que em diversos estudos mostram evidências de efeitos benéficos naquela criança que não melhorou com o O<P style={{fontSize: 6}}>2</P> simples controlado. Nestes estudos houve melhora da hipoxemia, conseguindo oferecer ao paciente uma melhor oxigenação e um pico de pressão expiratória positiva. 
                </P>
                <P>
                    Esta modalidade se tornou uma alternativa ao CPAP nasal com menos efeitos colaterais. Ainda estão em andamento estudos mais aprofundados, porém as expectativas são ótimas.
                </P>
            </Subsection>
            <Subsection title="Profilaxia do Vírus Sincicial Respiratório">
                <Subsubsection title="Imunização Passiva">
                    <P>
                        Desenvolvimento de anticorpos monoclonais geneticamente humanizados (palivizumabe), direcionados contra a proteína F do vírus. Reduz a replicação viral e a transmissão do vírus entre as células. Aplicação intramuscular. Os estudos mais recentes evidenciam excelentes resultados, mostrando significativa redução de hospitalizações nas crianças que receberam a medicação.
                    </P>
                    <P>
                        No Brasil, por ser um medicamento caro existe um programa assistencial apenas para cardiopatas e prematuros.
                    </P>
                </Subsubsection>
                <Subsubsection title="Vacinas em Desenvolvimento">
                    <P>
                        Vacina de nanopartícula F, em 2018, foram anunciados os resultados preliminares de fase III em mais de oito mil gestantes, com 40% dos lactentes atingindo o limiar estabelecido com proteção  até noventa dias de vida.
                    </P>
                </Subsubsection>
            </Subsection>
            <Subsection title="Complicações Tardias">
                <List>
                    <LItem>
                        Atelectasias persistentes: a atelectasia é uma das principais complicações que encontramos no lactente desconfortado, na maior parte das vezes com a ajuda da fisioterapia a resolução se dá ainda dentro da fase aguda, porém em algumas crianças damos alta com acompanhamento fisioterápico até a resolução do caso.
                    </LItem>
                    <LItem>
                        Cronicidade: Temos observado no nosso ambulatório que a evolução é favorável na quase totalidade dos casos, em nossa amostra somente uma pequena parte evoluiu para cronicidade representada pela Bronquiolite Obliterante. Nos casos em que ela ocorre acompanhamos em conjunto com a pneumologia pediátrica.
                    </LItem>
                </List>
            </Subsection>
          </Section>
          <Section title="Considerações Finais">
            <P>
                A solicitação do Rx de tórax é indispensável no lactente hospitalizado com desconforto respiratório, além da necessidade de realizarmos o diagnóstico diferencial, a presença de atelectasias é muito prevalente, muitas vezes no inicio do quadro agudo.
            </P>
            <P>
                A lavagem das mãos é a melhor ferramenta que dispomos na prevenção da disseminação hospitalar, visto que o quarto privativo ainda está distante, em nosso serviço.
            </P>
            <P>
                Lembramos que as crianças que convivem com tabagistas tem um maior risco de desenvolver as viroses respiratórias.
            </P>
            <P>
                O incentivo ao aleitamento materno é uma medida eficaz na prevenção das viroses respiratórias além de diminuir em um terço o risco de hospitalização por infecção do trato respiratório inferior.
            </P>
            <P>
                Nossas recomendações ratificam, sempre que possível, a coleta do painel viral.
            </P>
            <P>
                Nosso principal critério para a alta hospitalar é a estabilização do quadro respiratório sem oxigênio, mantendo saturação estável de O<P style={{fontSize: 6}}>2</P>, acima de 92%, além de estar com aceitação de 75% das necessidades basais de sua alimentação, por via oral.
            </P>
            <P>
                A alta definitiva somente é lavrada após a exaustiva orientação familiar, sendo marcado pelo menos um retorno obrigatório, depois de sete dias no domicílio.
            </P>
            <P>
                O acompanhamento ambulatorial é marcado para todos os pacientes na ocasião da alta definitiva.
            </P>
          </Section>
        <Section title="Referências">
        <Reference idx={1} body="Tatiana Rozov; Doenças Pulmonares em Pediatria - Diagnóstico eTratamento1999; 193-220."/>
        <Reference idx={2} body="IV Diretrizes brasileiras para o manejo da asma, J. pneumologia, 2006;32(7)S447-S474."/>
        <Reference idx={3} body="Martinez FD, Wright AL, Taussig LM, Holberg CJ, Morgan WJ, Group Health Medical Associates. Asthma and wheezing in the first six years of life. N Engl J Med. 2006;161(5); 1501-7."/>
        <Reference idx={4} body="Rosov T, Lotufo JP, Malozzi MC. A síndrome do lactente com sibilância. Alergia, imunologia e pneumologia. São Paulo: Atheneu; 2004, p. 111-21."/>
        <Reference idx={5} body="Fischer GB, Teper A, Colom A. Acute viral bronchiolitis and its sequelae in developing countries. Pediatrics respire rev.2003;3(4),298-302."/>
        <Reference idx={6} body="Pitrez PM, Stein RT, Jones MH, Arruda A. Rinovírus e BVA em lactentes. J. Ped (RJ), 2005;81(5);417-20."/>
        <Reference idx={7} body="Chong HJN, Mallol J, Rosário NA, Solé D. Prevalência de sibilância recorrente em lactentes. J. Ped. (RJ). 2007; 83(4); 357-62."/>
        <Reference idx={8} body="Rodrigues JC, Adde FV, Silva LVR. Doenças Respiratórias. São Paulo, Manole; 2008, p, 359-71."/>
        <Reference idx={9} body="American Academy of Pediatrics- subcommitee on diagnosis and manegement of bronchiolitis, Diagnosis and management of bronchiolitis. Pediatrics. 2006;118(4):1774-93."/>
        <Reference idx={10} body="Stein RT, Marostica PJ. Community- acquired pneumonia: a review and recent advances. Pediatrics Pneumology. 2007;42(12):1095-103."/>
        </Section>
    </Routine>
}