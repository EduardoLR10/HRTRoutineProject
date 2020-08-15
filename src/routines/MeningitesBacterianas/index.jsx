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

export default class MeningitesBacterianas extends React.Component {

	static title = "Meningites Bacterianas na Infância"
	static category = "Infectologia"
	static authors = "Dr. Marco Antonio Alves Cunha"

		render = () =>
			<Routine title={MeningitesBacterianas.title} category={MeningitesBacterianas.category} authors={MeningitesBacterianas.authors}>
                <P>
                    Rotina que aborda meningites bacterianas na infância - fora do período neonatal.
                </P>
                <Section title="Diagnóstico Clínico">
                    <Subsubsection title="Fatores de Risco">
                        <List>
                            <LItem>
                                Lactentes;
                            </LItem>
                            <LItem>
                                Desnutrição;
                            </LItem>
                            <LItem>
                                Desmame precoce;
                            </LItem>
                            <LItem>
                                Vacinação atrasada.
                            </LItem>
                        </List>
                    </Subsubsection>
                </Section>
                <Section title="Sinais e Sintomas de Suspeição">
                    <List>
                        <LItem>
                            Febre;
                        </LItem>
                        <LItem>
                            Depressão do sensório;
                        </LItem>
                        <LItem>
                            Cefaléia;
                        </LItem>
                        <LItem>
                            Dor no pescoço;
                        </LItem>
                        <LItem>
                            Vômitos e vômitos em jato;
                        </LItem>
                        <LItem>
                            Abaulamento de fontanelas.
                        </LItem>
                    </List>
                </Section>
                <Section title="Sinais de Irritação Meningo-radicular">
                    <List>
                        <LItem>
                            Rigidez de nuca;
                        </LItem>
                        <LItem>
                            Sinal de Kernig;
                        </LItem>
                        <LItem>
                            Sinal de Brudzinsky;
                        </LItem>
                        <LItem>
                            Sinal do Tripé;     
                        </LItem>
                        <LItem>
                            Posição no leito em gatilho de espingarda;
                        </LItem>
                        <LItem>
                            Opistótono;
                        </LItem>
                        <LItem>
                            Convulsões;
                        </LItem>
                        <LItem>
                            Coma.
                        </LItem>
                    </List>
                </Section>
                <Section title="Estado Geral Debilitado sem Diagnóstico">
                    <Subsubsection title="Agentes Etiológicos conforme a situação">
                        <List>
                            <Text style={{fontStyle: 'italic'}}></Text>
                            <LItem>
                                0 a 2 meses: <Text style={{fontStyle: 'italic'}}>Streptococcus do grupo B</Text>, enterobactérias (<Text style={{fontStyle: 'italic'}}>E. coli</Text>, <Text style={{fontStyle: 'italic'}}>Klebsiela</Text>, <Text style={{fontStyle: 'italic'}}>Proteus sp</Text>.);
                            </LItem>
                            <LItem>
                                2 meses a 5 anos: <Text style={{fontStyle: 'italic'}}>Haemophilus influenzae</Text> b, <Text style={{fontStyle: 'italic'}}>Neisseria meningitidis</Text> e <Text style={{fontStyle: 'italic'}}>Streptococcus pneumoniae</Text>;
                            </LItem>
                            <LItem>
                                Crianças com 5 anos ou mais: <Text style={{fontStyle: 'italic'}}>Neisseria meningitidis</Text> e <Text style={{fontStyle: 'italic'}}>Streptococcus pneumoniae</Text>;
                            </LItem>
                            <LItem>
                                Idosos e casos atípicos: <Text style={{fontStyle: 'italic'}}>Haemophilus influenzae</Text> b, <Text style={{fontStyle: 'italic'}}>Neisseria meningitidis</Text> e <Text style={{fontStyle: 'italic'}}>Streptococcus pneumoniae</Text>;
                            </LItem>
                            <LItem>
                                Pacientes vacinados contra <Text style={{fontStyle: 'italic'}}>Haemophilus influenzae</Text> b: <Text style={{fontStyle: 'italic'}}>Neisseria meningitidis</Text> e <Text style={{fontStyle: 'italic'}}>Streptococcus pneumoniae</Text> e <Text style={{fontStyle: 'italic'}}>Haemophilus influenzae</Text> b em cerca de 3% dos casos;
                            </LItem>
                            <LItem>
                                Em todas as idades: 30 a 40% de meningites sabidamente bacterianas, mas de etiologia indeterminada (sem crescimento nas culturas).
                            </LItem>
                        </List>
                    </Subsubsection>
                </Section>
                <Section title="Diagnóstico Laboratorial">
                    <Subsection title="Punção Lombar">
                        <P>
                            Valorizar e descrever aspecto e tensão. Líqüor normal: água de rocha.
                        </P>
                        <P>
                            Glicorraquia: normal se 2/3 ou mais em relação à glicemia. Glicorraquia de 30mg% ou menor somada ao critério de citometria descrito abaixo tem alta especificidade e boa sensibilidade para o diagnóstico de meningite bacteriana. Em casos clássicos são alcançados níveis menores de 10 mg% e não raramente próximos ou iguais a 0 mg%.
                        </P>
                        <P>
                            Citometria: normal até 4 células mononucleares/mm3. Contagens maiores de 300 células/mm³ e predominância de polimorfonucleares (mais de 60%) somada ao critério de glicorraquia acima tem alta especificidade e boa sensibilidade para o diagnóstico de meningite bacteriana.
                        </P>
                        <P>
                            Proteínas: valores normais para maioria das crianças se situam na faixa de 20 a 40 mg%. Nas meningites em geral esse valor se eleva bastante. Infelizmente de maneira inespecífica, a resposta da protéina aos diferentes grupos de etiologia (bactérias, vírus, micobactérias, fungos) é geralmente semelhante.
                        </P>
                    </Subsection>
                    <Subsection title="Bacteriscopia Clássica das Principais Etiologias">
                        <List>
                            <LItem>
                                <Text style={{fontStyle: 'italic'}}>Haemophilus influenzae</Text> b  (Hib): coco-bacilos pleomórficos, Gram negativos;
                            </LItem>
                            <LItem>
                                <Text style={{fontStyle: 'italic'}}>Neisseria meningitidis</Text> (meningococo): diplococos Gram negativos, intracelulares;
                            </LItem>
                            <LItem>
                                <Text style={{fontStyle: 'italic'}}>Streptococcus pneumoniae</Text> (pneumococo): cocos Gram positivos isolados ou aos pares.
                            </LItem>
                        </List>
                    </Subsection>
                    <Subsection title="Exames de Identificação do Agente Etiológico do Líqüor:">
                        <List>
                            <LItem>
                                Cultura e antibiograma;
                            </LItem>
                            <LItem>
                                Aglutinação em látex;
                            </LItem>
                            <LItem>
                                Contraimunoeletroforese.
                            </LItem>   
                        </List>
                    </Subsection>
                    <Subsection title="Hemocultura">
                        <P>
                            Obrigatória em toda suspeita de meningite. O ideal é obter 2 amostras.
                        </P>
                        <P>
                            Outros exames complementares importantes:
                        </P>
                        <List>
                            <LItem>
                                Hemograma;
                            </LItem>
                            <LItem>
                                Glicemia;
                            </LItem>
                            <LItem>
                                Tomografia de crânio.
                            </LItem>
                        </List>
                    </Subsection>
                </Section>
                <Section title="Tratamento">
                    <Subsection title="Dieta">
                        <List>
                            <LItem>
                                Dieta zero se o paciente estiver em coma ou torporoso;
                            </LItem>
                            <LItem>
                                Iniciar com dieta branda quando o paciente acordar;
                            </LItem>
                            <LItem>
                                Se o paciente persistir em coma por mais de 48 horas, aumentar o total de calorias na hidratação venosa;
                            </LItem>
                            <LItem>
                                Se o paciente permanecer em coma por mais de 4 dias, considerar a possibilidade de nutrição parenteral total.
                            </LItem>
                        </List>
                    </Subsection>
                    <Subsection title="Hidratação venosa sem restrição hídrica na maioria dos casos">
                        <List>
                            <LItem>
                                Bloqueio dos mecanismos de dano celular – Corticoterapia;
                            </LItem>
                            <LItem>
                                Indicada para todas as etiologias e todas as idades além do período neonatal;
                            </LItem>
                            <LItem>
                                Iniciar pelo menos 30 minutos antes da primeira dose de antimicrobianos;
                            </LItem>
                            <LItem>
                                Fazer por 2 dias, dexametasona 0,15 mg/kg/dose com intervalos de 6 horas, máximo de 40 mg/dia.
                            </LItem>
                        </List>
                    </Subsection>
                    <Subsection title="Controle da Hipertensão Intracraniana">
                        <List>
                            <LItem>
                                Cabeceira elevada a 30°; 
                            </LItem>
                            <LItem>
                                Manitol a 20%, de 1 a 2 g/Kg (5 a 10ml/Kg) em infusão rápida (30 min), máximo de 40g./infusão (200 ml);
                            </LItem>
                            <LItem>
                                Reavaliar imediatamente após a infusão, 1 hora depois, e a cada 4 a 6 horas;   
                            </LItem>
                            <LItem>
                                Atentar para possibilidade de retenção vesical em pacientes em coma após infusão;
                            </LItem>
                            <LItem>
                                Se houver desidratação após infusão de solução de manitol, hidratar a criança,  com solução fisiológica pura, 20 ml/Kg, em 3 a 4 horas, podendo ser repetida se persistir a desidratação;
                            </LItem>
                            <LItem>
                                Se a avaliação clínica sugerir persistência ou agravamento do quadro de hipertensão intracraniana, novas infusões deverão ser realizadas após 6 horas (ou 4 horas em casos graves, se houver bradipnéia, bradicardia, ou necessidade de ventilação artificial).
                            </LItem>
                        </List>
                    </Subsection>
                    <Subsection title="Antibioticoterapia Empírica Inicial">
                        <Subsubsection title="1ª Escolha">
                            <P>
                                Cefotaxima 300 mg/Kg/dia EV divididos em 4 doses de 6/6 horas (máximo 8 g./dia);
                            </P>
                            <P>
                                Ou
                            </P>
                            <P>
                                Ceftriaxona 100 mg/Kg/dia EV em dose única diária (máximo 2 g./dia em crianças.)
                            </P>
                        </Subsubsection>
                        <Subsubsection title="2ª Escolha">
                            <P>
                                Ampicilina 300 mg/Kg/dia EV divididos em 6 doses de 4/4 horas (máximo 2 g./dia);
                            </P>
                            <P>
                                Em associação com
                            </P>
                            <P>
                                Cloranfenicol 100 mg/Kg/dia EV divididos em 4 doses de 6/6 horas.
                            </P>
                        </Subsubsection>
                    </Subsection>
                    <Subsection title="Controle das Convulsões">
                        <P>
                            Iniciar com midazolam fazendo inicialmente uma dose de ataque, que se for eficaz, deve ser seguida        de infusão contínua até 24 horas após cessadas as convulsões;
                        </P>
                        <P>
                            Dose de ataque: diluir 10mg (2ml) em 18 ml de solução de glicose a 5%. Fazer 0,3ml/Kg da solução resultante (equivalente a 0,15mg/kg);
                        </P>
                        <P>
                            Infusão contínua: diluir 15 mg (3ml) em 250 ml de solução de glicose a 5%. Correr iniciando com 1ml/kg/hora (1ml/kg/hora = 1 microg./kg/min).
                        </P>
                        <P>
                            Se a dose de ataque não foi eficaz, poderá ser repetida até 3 vezes, em intervalos de 15 minutos, seguindo então a infusão contínua.
                        </P>
                        <P>
                            Caso as convulsões parem com a(s) dose(s) de ataque, mas o paciente volte a convulsionar durante a infusão contínua, a velocidade de infusão poderá ser aumentada para 2ml/kg/hora chegando até 3ml/kg/hora.
                        </P>
                        <P>
                            Pode-se considerar também repetir a dose de ataque, interrompendo-se temporariamente a infusão contínua.
                        </P>
                        <P>
                            Casos de difícil controle podem necessitar de outros anticonvulsionantes, embora haja pouca experiência em relação à interação de várias drogas para controle da crise.
                        </P>
                        <P>
                            Devem ser evitados o diazepam e/ou fenobarbital por apresentarem tendência à depressão respiratória, o que em pacientes com hipertensão intracraniana pode mais facilmente levar à necessidade de ventilação mecânica.
                        </P>
                    </Subsection>
                    <Subsection title="Cuidados Anti-infecciosos">
                        <List>
                            <LItem>
                                Quarto privativo comum;
                            </LItem>
                            <LItem>
                                Uso de máscara cirúrgica comum;
                            </LItem>
                            <LItem>
                                Obrigatório para todos que forem lidar com o paciente nas primeiras 24 h. de tratamento;
                            </LItem>
                            <LItem>
                                Para os familiares do doente, as máscaras devem ser mantidas até o resultado final da cultura ou até a 4a. dose da quimioprofilaxia nos casos confirmados ou altamente suspeitos de etiologia meningocóccica;
                            </LItem>
                            <LItem>
                                Ao fazer a história ou nos momentos da internação, não deixem de colocar máscaras nos pais pois eles podem ser os portadores sãos, principais veículos da doença.
                            </LItem>
                        </List>
                    </Subsection>
                    <Subsection title="Quimioprofilaxia">
                        <P>
                            Indicada nos contactantes íntimos e prolongados se a meningite for de etiologia meningocóccica, ou por Haemophilus influenzae b, desde que, no segundo caso, convivam na casa do doente crianças menores de 5 anos de idade.
                        </P>
                        <P>
                            <Text style={{fontWeight: 'bold'}}>São contactantes íntimos e prolongados:</Text>
                        </P>
                        <List>
                            <LItem>
                                Todos que moram com o paciente;
                            </LItem>
                            <LItem>
                                Quem passou pelo menos 4 horas na mesma casa do doente nos últimos 7 dias antes da internação;
                            </LItem>
                            <LItem>
                                Quem passou mais de 8 horas consecutivas pelo menos 1 vez nos últimos 7 dias antes da internação;
                            </LItem>
                            <LItem>
                                Quem trocou beijos na boca com o doente nos últimos 7 dias antes da internação;
                            </LItem>
                            <LItem>
                                Contactantes de creches, inclusive adultos em contato com o grupo afetado;
                            </LItem>
                            <LItem>
                                Contactantes de comunidades fechadas (internato, orfanato, alojamentos comuns);
                            </LItem>
                            <LItem>
                                Contactantes de sala de aula se 2 ou mais casos pelo mesmo sorogrupo ocorreram em menos de 6 meses;
                            </LItem>
                            <LItem>
                                Deverá ser feita idealmente até o 10o dia do início do quadro clínico do doente;
                            </LItem>
                            <LItem>
                                Esquema padrão = 4 doses de Rifampicina de 600mg para contactantes adultos ou 4 doses de rifampicina de 10mg/kg para contactantes crianças maiores de 1 mês de idade e com menos de 60 kg. Para o meningococo, as doses devem ser administradas com intervalos de 12 horas (2 dias de quimioprofilaxia). Para o <Text style={{fontStyle: 'italic'}}>Haemophilus influenzae</Text> b, as doses devem ser administradas com 24 horas de intervalo (4 dias de quimioprofilaxia)
                            </LItem>
                            <LItem>
                                Gestantes deverão fazer quimioprofilaxia com ceftriaxona, dose única, de 250 mg, EV ou IM.
                            </LItem>
                        </List>
                    </Subsection>
                </Section>
				<Section title="Referências">
				<Reference idx={1} body="Deivanayagam N, Ashok TP, Nedunchelian K, Ahamed SS, Mala N. Evaluation of CSF variables as a diagnostic test for bacterial meningitis. J Trop Pediatr. 1993 Oct; 39(5): 284-7."/>
				<Reference idx={2} body="Kim KS. Acute bacterial meningitis in infants and children. Lancet Infect Dis 2010; 10: 32–42."/>
				<Reference idx={3} body="Vieira AC, Gomes MC, Rolo Filho M, Eudes Filho J, Bello EJ, Figueiredo, RB. Streptococcus pneumoniae: estudo de cepas isoladas de líquor. J Pediatr (Rio J) 2007;83(1):71-8."/>
				<Reference idx={4} body="Neves FPG, Cardoso NT, Snyder RE, Marlow MA, Cardoso CAA, Teixeira LM, et al. Pneumococcal carriage among children after four years of routine 10-valent pneumococcal conjugate vaccine use in Brazil: The emergence of multidrug resistant serotype 6C. Vaccine. 2017;35(21):2794-800."/>
                <Reference idx={5} body="Cardoso NT, Santos BA, Barbosa AV, Superti SV, Teixeira LM, Neves FP. Serotypes, antimicrobial resistance and genotypes of Streptococcus pneumoniae associated with infections in cancer patients in Brazil. Diagn Microbiol Infect Dis. 2017;87(3):281-5."/>
                <Reference idx={6} body="dos Santos MS, Azevedo J, Menezes AP, Cordeiro SM, Escobar EC, Lima JB, et al. Temporal trends and clonal diversity of penicillin non-susceptible pneumococci from meningitis cases from 1996 to 2012, in Salvador, Brazil. BMC Infect Dis. 2015;15:302."/>
                <Reference idx={7} body="Kulik DM, Uleryk EM, Maguire JL. Does this child have bacterial meningitis? A systematic review of clinical prediction rules for children with suspected bacterial meningitis. J Emerg Med. 2013 Oct;45(4):508-19."/>
                <Reference idx={8} body="Oordt-Speets AM, Bolijn R, van Hoorn RC, Bhavsar A, Kyaw MH. Global etiology of bacterial meningitis: A systematic review and meta-analysis. PLoS One. 2018;13(6):e0198772."/>
                <Reference idx={9} body="Chavez-Bueno S, McCracken GH, Jr. Bacterial meningitis in children. Pediatr Clin North Am. 2005;52(3):795-810."/>
                <Reference idx={10} body="Brouwer MC, McIntyre P, Prasad K, van de Beek D. Corticosteroids for acute bacterial meningitis. Cochrane Database of Systematic Reviews 2015, Issue 9. Art. No.: CD004405."/>
				</Section>
		</Routine>
}