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

export default class LeishmanioseVisceral extends React.Component {

	static title = "Leishmaniose Visceral"
	static category = "Infectologia"
	static authors = "Dr. Iúri Leão de Almeida e Dr. Marco Antônio Alves Cunha"

		render = () =>
			<Routine title={LeishmanioseVisceral.title} category={LeishmanioseVisceral.category} authors={LeishmanioseVisceral.authors}>
				<Section title="Diagnóstico Clínico">
                    <Text style={{fontStyle: 'italic'}}></Text>
                    <P>
                        Fatores de risco: Infecção sistêmica causada pelo <Text style={{fontStyle: 'italic'}}>Leishmania chagasi</Text>. Classicamente os fatores de risco estão associados a áreas endêmicas, rurais e a adultos jovens do gênero masculino. Todavia, há significativa expansão em áreas urbanas e na faixa etária pediátrica, com quase 50% dos casos. Áreas endêmicas próximas ao DF: toda região centro-oeste, Bahia, Piauí, oeste de Minas Gerais.
                    </P>
                    <P>
                        O parasita tem seus reservatórios em cães, raposas e marsupiais. O vetor é o mosquito flebotomínio do gênero <Text style={{fontStyle: 'italic'}}>Lutzomyia</Text>. Período de incubação de 1 a 6 meses.
                    </P>
                    <P>
                        Sinais e sintomas frequentes: Fase aguda inicial ({'<'} 4 semanas) - leve hepatoesplenomegalia febril, palidez e adinamia leves. Geralmente confundido com quadra sistêmico inespecífico e tratado com antibióticos, sem sucesso.
                    </P>
                    <P>
                        Fase de estado (até 2 meses) - persistência da febre, evolução da hepatoesplenomegalia com agravamento do estado geral e da palidez. Surge comprometimento hepático, emagrecimento significativo, diarreia. Quase sempre o baço tem aumento mais pronunciado que o fígado
                    </P>
                    <P>
                        Fase final - febre, evolução do quadro sistêmico, desnutrição, insuficiência hepática, sangramentos, óbito por infecção secundária.
                    </P>
                </Section>
                <Section title="Diagnóstico Laboratorial">
                    <P>
                        A epidemiologia e o quadro clínico típico podem excluir a necessidade de exames diagnósticos complementares. O diagnóstico pode ser feito com o teste sorológico (IFI ou ELISA), considerado positivo com títulos {'>'} 1:80 (1:40 é duvidoso). O teste rápido (rK39) tem alta sensibilidade e especificidade e fica pronto em minutos. O padrão ouro é a identificação dos parasitos no aspirado de medula óssea ou no baço.
                    </P>
                    <P>
                        As seguintes alterações laboratoriais são típicas da doença e sua importância aumenta conforme a doença progride: anemia, pancitopenia (em especial a plaquetopenia), inversão da relação albumina globulina, elevações de transaminases, DHL, bilirrubinas.
                    </P>
                </Section>
                <Section title="Critérios de Internação">
                    <P>
                        Todas as crianças devem ser internadas para tratamento parenteral e acompanhamento clínico e laboratorial. Não praticamos tratamento ambulatorial, como se faz em alguns casos com adultos oligossintomáticos.
                    </P>
                </Section>
                <Section title="Complicações Mais Frequentes">
                    <P>
                        Infecções secundárias, sepse, hemorragias, insuficiência hepática.
                    </P>
                </Section>
                <Section title="Tratamento">
                    <P>
                        A primeira escolha é o antimoniato de n-metil glucamina (Glucantime) na dose de 0,25 ml/kg/dia, em dose única, por 20 a 30 dias. Devem ser monitorados os exames referentes às funções hepática, renal e o ECG, já que a medicação pode causar elevação do intervalo QTc.
                    </P>
                    <P>
                        Casos de falha ou intolerância ao primeiro esquema devem ser tratados com anfotericina B lipossomal na dose de 3 a 5 mg/kg/dia, em dose única, por 10 a 21 dias. A anfotericina também está indicada como primeira opção quando o paciente chega em estado bem grave, pois não se deve arriscar uma eventual falha do tratamento com o glucantime. 
                    </P>
                </Section>
                <Section title="Critérios de Alta">
                    <P>
                        O tratamento deve ser realizado com sucesso de forma completa e a criança apresentar resolução clínica. A redução do volume do baço para menos de 50% do tamanho inicial é um bom parâmetro de melhora.
                    </P>
                </Section>
                <Section title="Prognóstico e Orientações para o Seguimento">
                    <P>
                        São raros os casos de recorrência. Convém acompanhamento ambulatorial até que a criança retome seu crescimento e desenvolvimento normais.
                    </P>
                </Section>
				<Section title="Referências">
				<Reference idx={1} body="Brasil. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Vigilância Epidemiológica. Manual de vigilância e controle da leishmaniose visceral / Ministério da Saúde, Secretaria de Vigilância em Saúde, Departamento de Vigilância Epidemiológica. – Brasília: Editora do Ministério da Saúde, 2006."/>
				<Reference idx={2} body="Cavalcante MHL, Leishmaniose visceral (calazar): importância do reconhecimento precoce, Rev. Saúde Criança Adolesc. 2011; 3 (2):24-28."/>
				</Section>
		</Routine>
}