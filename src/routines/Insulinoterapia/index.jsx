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

export default class Insulinoterapia extends React.Component {

	static title = "Insulinoterapia"
	static category = "Endocrinologia"
    static authors = "Dra. Roberta Kelly Menezes Maciel Falleiros"
    static tags = ["insulina", "NPH", "regular", "ultra", "rápida", "largina", "lantus", "apidra"]

		render = () =>
			<Routine title={Insulinoterapia.title} category={Insulinoterapia.category} authors={Insulinoterapia.authors}>
                <P>
                    O tratamento com insulina deve ser iniciado o mais cedo possível após o diagnóstico para evitar descompensação metabólica e cetoacidose. 
                </P>
                <P>
                    Regimes intensivos por múltiplas doses de insulina (MDI) ou terapia de bomba de insulina são o padrão-ouro também na pediatria.
                </P>
                <P>
                    Em todas as faixas etárias, o mais próximo possível da reposição fisiológica de insulina e controle glicêmico deve ser o objetivo usando as insulinas basais e prandiais disponíveis localmente. Embora nenhum regime de injeção de insulina imite satisfatoriamente a fisiologia normal. 
                </P>
                <P>
                    Seja qual for o regime de insulina escolhido, deve ser apoiado por uma educação abrangente apropriado para a idade e necessidades individuais da criança e da família.
                </P>
                <P>
                    A dosagem diária de insulina varia muito entre indivíduos e mudanças ao longo do tempo. 
                </P>
                <P>
                    Crianças e adolescentes devem ser encorajados a aplicar as injeções de insulina  (abdômen, coxa, nádegas, braço), evitando aplicar repetidamente no mesmo local para prevenir a lipodistrofia.
                </P>
                <P>
                    As insulinas precisam ser administradas por seringas de insulina (ou outros dispositivos de injeção, ou seja, canetas) calibrado para a concentração de insulina em uso.
                </P>
                <P>
                    A verificação regular dos locais de injeção, técnica de injeção e habilidades permanecem uma responsabilidade dos pais, prestadores de cuidados e profissionais de saúde.
                </P>
                <P>
                    Os profissionais de saúde têm a responsabilidade de aconselhar os pais, outros prestadores de cuidados e os jovens em ajustar a terapia com insulina de forma segura e eficaz. Este treinamento requer revisão, reavaliação e reforço regulares nas consultas.
                </P>
				<Table head={['Tipo de Insulina', 'Início da Ação', 'Pico de Ação', 'Duração da Ação']} data={[
					['Ultra-rápida\n- Aspart- (Novorapid)\n- Glulisina- (Apidra)\n- Lispro- (Humalog)', '0,15 - 0,35 h', '1 - 3 h', '3 - 5 h'],
					['Regular (Humilin R)', '0,5 - 1 h', '2 - 4 h', '5 - 8 h'],
					['NPH (Humilin N)', '2 - 4 h', '4 - 12 h', '12 - 24 h'],
					['Glargina (Lantus ou Basaglar)', '2 - 4 h', '8 - 12 h (não pronunciada)', '22 - 24 h'],
					['Detemir (Levemir)', '1 - 2 h', '4 - 7 h (não pronunciada)', '20 - 24 h'],
					['Degludec (Tresiba)', '0,5 - 1,5 h', 'Quase sem pico', '> 42 h']
				]} title="Tabela 1. Tipos de preparações de insulina e perfis de ação sugeridos para administração"/>
                <Section title="Concentração de Insulina">
                    <P>
                        A concentração mais amplamente disponível é de 100 UI / ml (U 100). Portanto, em um refil de 3 ml de insulina, contém 300 ui de insulina.
                    </P>
                </Section>
                <Section title="Armazenamento de Insulina">
                    <List>
                        <LItem>
                            A insulina nunca deve ser congelada;
                        </LItem>
                        <LItem>
                            Nunca permitir luz solar direta ou aquecimento;
                        </LItem>
                        <LItem>
                            Os doentes não devem utilizar insulina que tenha mudado de aparência;
                        </LItem>
                        <LItem>
                            (aglomeração, precipitação ou descoloração); 
                        </LItem>
                        <LItem>
                            A insulina não utilizada deve ser conservada no frigorífico (4 - 8◦C); 
                        </LItem>
                        <LItem>
                            Após o primeiro uso, um frasco de insulina deve ser descartado após 3 meses se mantido a 2 - 8 ◦C ou 4 semanas se mantido à temperatura ambiente.
                        </LItem>
                    </List>
                </Section>
                <Section title="Locais de Injeção">
                    <List>
                        <LItem>
                            Abdômen (preferido quando a absorção mais rápida é necessária e pode ser menor afetado pela atividade muscular ou exercício);
                        </LItem>
                        <LItem>
                            Frente da coxa / lateral da coxa (o local preferido para uma absorção mais lenta de uma atuação mais longa insulinas);
                        </LItem>
                        <LItem>
                            O quadrante superior lateral das nádegas (todo o quadrante superior é útil);
                        </LItem>
                        <LItem>
                            Aspecto lateral do braço (em crianças pequenas com pouca gordura subcutânea, a injeção intramuscular é mais provável e pode causar hematomas desagradáveis);
                        </LItem>
                        <LItem>
                            A rotação dos locais de injeção também é importante dentro da mesma área de injeção;
                        </LItem>
                        <LItem>
                            A limpeza ou desinfecção da pele não é necessária, a menos que a higiene seja um problema real. A infecção nos locais de injeção é rara.
                        </LItem>
                    </List>
                </Section>
                <Section title="Regimes de Injeção Ajustados à Glicose e à Refeição">
                    <Subsubsection title="Dose Total de Insulina (DTI):">
                        <List>
                            <LItem>
                                Insulina basal: 30-45% (por vezes 50%);
                            </LItem>
                            <LItem>
                                Insulina Regular ou Ultra-rápida: restante das doses ajustadas;
                            </LItem>
                            <LItem>
                                Injeção de insulina prandial antes de cada refeição (café da manhã, almoço e jantar principal), em casos excepcionais (crianças {'<'} 6 anos) após e ajustado para glicemia, conteúdo de refeição e atividade diária. Regular (2-30 minutos antes) ou ultra-rápida (15-20 minutos antes).
                            </LItem>
                        </List>
                    </Subsubsection>
                    <Subsubsection title="A sodagem depende de muitos fatores, como:">
                        <List>
                            <LItem>
                                Idade;
                            </LItem>
                            <LItem>
                                Peso;
                            </LItem>
                            <LItem>
                                Estágio da puberdade;
                            </LItem>
                            <LItem>
                                Duração e fase do diabete;
                            </LItem>
                            <LItem>
                                Estado dos locais de injeção;
                            </LItem>
                            <LItem>
                                Consumo e distribuição nutricional;
                            </LItem>
                            <LItem>
                                Padrões de exercício;
                            </LItem>
                            <LItem>
                                Rotina diária;
                            </LItem>
                            <LItem>
                                Resultados da monitorização da glicose no sangue e hemoglobina glicada;
                            </LItem>
                            <LItem>
                                Doença intercorrente.
                            </LItem>
                        </List>
                    </Subsubsection>
                </Section>
                <Section title="Dose Correta de Insulina">
                    <P>
                        É aquela que atinge o melhor controle glicêmico atingível para uma criança ou adolescente individual sem causar problemas óbvios de hipoglicemia.
                    </P>
                    <P>
                        Durante a fase de remissão parcial, a dose diária total de insulina é frequentemente {'<'}0,5 UI/kg/dia.
                    </P>
                    <P>
                        Crianças pré-púberes (fora da fase de remissão parcial) geralmente requerem 0,7 - 1,0 UI/kg/dia.
                    </P>
                    <P>
                        Durante a puberdade ou em situações de estresse, os requisitos podem subir acima de 1-2 UI/kg/dia. 
                    </P>
                    <P>
                        Níveis mais elevados de glicose no sangue é observado durante a fase lútea do ciclo menstrual mediado pelo nível endógeno de progesterona.
                    </P>
                    <P>
                        Doses iniciais: menores de 6 anos (0,3-0,5 ui/kg/dia), entre 6-10 anos (0,5-1,0 ui/kg/dia), maiores de 10 anos (1,0-1,2 ui/kg/dia). Os alvos de glicose ao longo do dia devem corresponder ao alvo de HbA1c individualizado.
                    </P>
                    <Table head={['', 'Glicemia Pré-Refeição', 'Glicemia Pós-Refeição', 'Glicemir ao Deitar', 'Glicemia na Madrugada', 'hbA1c']} data={[
					['ISPAD', '90 - 145', '90 - 180', '120 - 180', '80 - 162', '7,5%'],
					['ADA', '90 - 130', '-', '90 - 150', '-', '7,5%']
				]} title="Tabela 2. Metas Glicêmicas Ótimas Propostas pela ISPAD/ADA"/>
                <Subsubsection title="Conselhos para desvios persistentes do alvo da glicemia">
                    <P>
                        Nível da glicemia elevado antes do café da manhã → aumentar a dose de insulina prandial do pré-jantar ou a pré-ceia ou insulina de ação prolongada. (Os testes de glicemia capilar durante a madrugada são necessários para garantir que esta mudança não resulta em hipoglicemia noturna). 
                    </P>
                    <P>
                        Aumento do nível de glicemia após uma refeição → aumentar a insulina ultra-rápida ou regular no período pré-refeição. 
                    </P>
                    <P>
                        Nível de glicemia elevado antes do almoço ou jantar → aumentar a insulina basal da manhã ou aumentar a dose de insulina ultra-rápida ou regular pré-café-da-manhã, se em regime basal-bolus.
                    </P>
                </Subsubsection>
                <Subsubsection title="Contagem de carboidratos">
                    <P>
                        Ao usar a contagem de carboidratos, elevações persistentes de glicemia capilar pós-refeição podem exigir ajuste na relação insulina/carboidrato. A “regra dos 500” é frequentemente usada para obter relação inicial ao iniciar a contagem de carboidratos (dividir 500 pela dose diária total  insulina basal e bolus - para encontrar a quantidade de carboidratos em gramas que 1 unidade de insulina irá cobrir). Para crianças {'<'} 6 anos usar a regra dos “450” dividido pela DTI.
                    </P>
                    <P>
                        A razão insulina: carboidrato para uma refeição individual, por exemplo café da manhã, pode ser calculada dividindo o conteúdo de carboidratos em gramas pela dose de insulina em unidades. Este método muitas vezes dá os resultados mais precisos para uma refeição individual, e pode preferencialmente ser usado no café da manhã, quando geralmente há um aumento da resistência à insulina. Se a glicose antes e após a refeição diferem mais do que 20-30 mg / dl, o fator de correção pode ser usado para calcular quanto mais (ou menos) insulina idealmente foram dadas para uma determinada refeição.
                    </P>
                    <P>
                        Alguns centros também contam com proteína e gordura para calcular as necessidades de insulina quando usam bomba de insulina. 
                    </P>
                    <P>
                        Podem ser usadas doses de correção (também chamadas de fator de sensibilidade à insulina, fator de correção) de acordo com a "regra 1800", isto é, dividir 1800 por dose diária total de insulina para obter a dose mg / dL que 1 unidade de insulina de ação ultra-rápida irá diminuir a glicose no sangue. Para insulina regular, uma "regra 1500" pode ser usado para resultados em mg / dL. Contudo, doses corretivas devem sempre ser ajustadas individualmente antes da administração, dependendo de outros fatores que afetam a resistência à insulina, como exercício. Para crianças {'<'} 6 anos usar a regra dos “2000” dividido pela DTI.
                    </P>
                    <P>
                        Aumento do nível da glicemia após o jantar → aumentar a dose de insulina ultra-rápida ou regular neste período.
                    </P>
                    <P>
                        A hipoglicemia inexplicada requer reavaliação da terapia com insulina.
                    </P>
                    <P>
                        A hiperglicemia inexplicada pode ser causada por um “fenômeno de rebote”- hipoglicemia seguida por hiperglicemia que é potencializada pela ingestão excessiva de carboidrato para curar a hipoglicemia, juntamente com a contra-regulação hormonal.
                    </P>
                    <P>
                        Hiper ou hipoglicemia que ocorre na presença de doença intercorrente requer um conhecimento de "gerenciamento do dia de doença (tema ministrado em aulas mensais para DM1)". 
                    </P>
                    <P>
                        Ajustes diários de insulina podem ser necessários para variações nas rotinas de estilo de vida, especialmente exercício ou mudanças na alimentação. Vários níveis de exercício exigem ajuste do controle do diabetes.
                    </P>
                </Subsubsection>
                </Section>
				<Section title="Referências">
				<Reference idx={1} body="ISPAD Clinical Practice Consensus Guidelines 2018 / Diretrizes da Sociedade Brasileira de Diabetes 2017-2018."/>
				</Section>
		</Routine>
}