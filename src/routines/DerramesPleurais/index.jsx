import React from 'react'
import { Text } from 'react-native'
import Figure from '../../components/templates/Figure'
import { List, LItem } from '../../components/templates/List'
import P from '../../components/templates/Paragraph'
import Reference from '../../components/templates/Reference'
import Routine from '../../components/templates/Routine'
import Section from '../../components/templates/Section'
import Subsection from '../../components/templates/Subsection'
import Subsubsection from '../../components/templates/Subsubsection'
import Table from '../../components/templates/Table'

export default class DerramesPleurais extends React.Component {

  static title = "Derrames Pleurais"
  static category = "Pneumologia"
  static authors = "Dr. Fernando de Velasco Lino"
  static tags = ["derrame", "drenagem", "toracocentese"]

    render = () =>
      <Routine title={DerramesPleurais.title} category={DerramesPleurais.category} authors={DerramesPleurais.authors}>
          <P>
              Rotina que descreve abordagem de pacientes com pneumonia com derrame pleural na pediatria do HRT.
          </P>
          <P>
            Os principais agentes etiológicos envolvidos no derrame pleural parapneumônico são: o <Text style={{fontStyle: 'italic'}}>Streptococcus pneumoniae</Text>, mantendo-se como o mais comum; o <Text style={{fontStyle: 'italic'}}>Staphylococcus aureus</Text>, com aumento das cepas meticilino-resistentes em algumas casuísticas; o <Text style={{fontStyle: 'italic'}}>Streptococcus pyogenes</Text>, chegando a estar entre os cinco agentes mais comuns em alguns estudos; e o <Text style={{fontStyle: 'italic'}}>Haemophilus influenzae</Text>. Na pneumonia por <Text style={{fontStyle: 'italic'}}>Mycoplasma pneumoniae</Text> o derrame parapneumônico costuma ser de diminuto volume, geralmente nem chega a ser puncionável e costuma ocorrer em crianças mais velhas na faixa etária do escolar e adolescente.
          </P>
          <P>
            Pode evoluir como transudato ou exsudato, além de ter a característica de derrame pleural purulento (empiema).
          </P>
          <Section title="Diagnóstico Clínico">
            <P>
                O diagnóstico do derrame pleural deve ser realizado, primeiramente, pela avaliação clínica e é suspeitado quando, ao exame físico, observa-se desconforto respiratório importante, apresenta redução do frêmito toracovocal à palpação, redução do murmúrio vesicular à ausculta e submacicez à percussão.
            </P>
          </Section>
          <Section title="Diagnóstico Radiológico">
            <P>
                1ª Opção: Radiografia de tórax (AP ou PA e perfil) - dependendo da técnica faz diagnóstico de derrame pleural até de pequena monta. Porém é de baixa acurácia para diferenciar casos de grandes condensações pulmonares com pequenos derrames ou vice e versa (o qual será melhor visto pela Ultrassonografia e Tomografia).
            </P>
            <P>
                Quando diagnosticamos o derrame pleural à radiografia de tórax, pode ser realizado a radiografia de tórax com a incidência horizontal dos raios e o paciente em decúbito lateral do lado acometido (incidência de Laurell). Nesta incidência é possível observar se o líquido "movimentou-se" em comparação à radiografia de tórax em AP ou PA, sugerindo que o mesmo esteja livre no espaço pleural ou esteja em lojas (septado), com septos entre as lojas de líquido pleural. Além do mais, caso a espessura do derrame pleural na incidência de Laurell seja maior que 1 cm, o mesmo é elegível para a toracocentese.
            </P>
            <P>
                2ª Opção: Ultrassonografia de tórax - método não invasivo e sem radiação. É a modalidade de imagem de maior importância, uma vez que auxilia na diferenciação entre consolidação, líquido pleural, septações e o espessamento pleural. Além disso, o ultrassom de tórax guia procedimentos pleurais.
            </P>
            <P>
                3ª Opção: Tomografia computadorizada de tórax com contraste - apesar de determinar com mais exatidão o que radiografia e Ultrassonografia mostram, trata-se de um método que envolve radiação e muitas vezes sedação, sendo recomendável para os casos de dúvidas após realização das duas primeiras opções e principalmente para diferenciar abscesso pulmonar de derrame pleural encistado.
            </P>
          </Section>
          <Section title="Diagnóstico Laboratorial">
            <P>
                Uma vez que o derrame Pleural parapneumônico está, na maioria das vezes em pediatria, associado a quadro infeccioso, os exames pertinentes para diagnóstico da infecção se impõem (Exemplos, hemograma e hemocultura).
            </P>
            <P>
                Nos casos submetidos à toracocentese e/ou drenagem pleural, deve-se fazer a análise do líquido pleural para a diferenciação entre tansudato e exsudato (este último característico das infecções bacterianas). Os principais critérios para a diferenciação estão na tabela abaixo, lembrando que no caso do exsudato também temos uma celularidade aumentada com predomínio de polimorfonucleares.
            </P>
            <Table head={['', '']} data={[
            ['Proteína do líquido pleural', '> 3 g/10mL'],
            ['Proteína do líquido pleura / Proteína do plasma', '> 0,5'],
            ['LDH do líquido pleural', '> 200 UI'],
            ['LDH do líquido pleural / LDH do plasma', '> 0,6']
            ]} title="Tabela - Diagnóstico diferencial entre exsudato (1 ou mais critérios) e transudato (nenhum dos critérios)"/>
          </Section>
          <Section title="Tratamento">
            <List>
                <LItem>
                    Toracocentese - para derrames com mais de 1 cm à radiografia em Laurell. Tem finalidade diagnóstica como também com a função de alívio do desconforto respiratório. Trata-se de um procedimento clínico, porém como há a possibilidade de complicações (escape aéreo com pneumotórax, sangramentos na parede torácica etc), recomenda-se realizar em serviços que possuam a especialidade de cirurgia pediátrica para a atuação em caso de complicação.
                </LItem>
                <LItem>
                    Drenagem pleural - Indicado para pacientes que apresentam: - comprovação de empiema à toracocentese ou tomografia computadorizada; - Desconforto respiratório importante na presença do derrame pleural.
                </LItem>
                <LItem>
                    Os procedimentos de drenagem de pacientes do HRT são feitos no HBDF como local de referência (cirurgia pediátrica), sempre sendo recomendado o contato prévio. A drenagem pleural em pediatria é feita em sistema fechado em selo d'água, colocando-se, no frasco de drenagem, a quantidade de líquido recomendada de acordo com o tamanho do frasco de drenagem (geralmente SF0,9% - 100ml, 250 ml ou 500ml).
                </LItem>
            </List>
          </Section>
          <Section title="Cuidados durante a Drenagem Pleural">
            <Subsection title="Cuidados Gerais">
                <List>
                    <LItem>
                        O dreno deve ser ordenhado várias vezes para evitar obstrução;
                    </LItem>
                    <LItem>
                        Troca diária do conteúdo do frasco de drenagem, com anotação do volume drenado;
                    </LItem>
                    <LItem>
                        Troca diária do curativo do local de inserção do sistema de drenagem ao tórax, observando-se o aspecto da ferida operatória;
                    </LItem>
                    <LItem>
                        Anotação do aspecto do líquido drenado (purulento, sanguinolento, sero-sanguinolento, citrino, com grumos, sem grumos).
                    </LItem>
                </List>
            </Subsection>
            <Subsection title="Critérios para retirada do sistema de drenagem">
                <List>
                    <LItem>
                        O tempo médio de drenagem pleural para os casos que evoluem bem com o tratamento varia de 3 a 7 dias na maioria dos casos;
                    </LItem>
                    <LItem>
                        Ausência de volume de drenagem em 24 horas, desde que não haja evidências de obstrução no sistema de drenagem. Para isso observa-se se há oscilação em selo d'água, ou seja, oscilação de secreção na mangueira do dreno ou mesmo oscilação do SF0,9% do frasco de drenagem (durante a respiração). Recomenda-se realizar a radiografia de tórax em AP ou PA e perfil para observar se não houve deslocamento da ponta do cateter de drenagem ou mesmo acotovelamento do mesmo dentro do tórax;
                    </LItem>
                    <LItem>
                        Presença de volume de drenagem de até 50 ml. Neste caso, a simples presença do sistema de drenagem dentro do tórax provoca reação inflamatória tipo corpo estranho dentro de um espaço pleural já infectado, o que pode provocar a produção de líquido de até 50 ml em crianças. Porém, não se descarta também o deslocamento e a obstrução parcial do dreno, sendo também recomendado a radiografia de tórax em AP ou PA e perfil.
                    </LItem>
                </List>
            </Subsection>
          </Section>
          <Section title="Critérios de Alta">
            <P>
                Geralmente os critérios de alta acompanham a melhora clínica do processo infeccioso, sendo a maioria dos pacientes recebendo alta com ausência de derrame, derrames de pequena monta ou mesmo com espessamentos pleurais. Alguns pacientes permanecem com drenagem de secreção pleural por períodos prolongados, principalmente em casos em que associam a presença de fístula entre pleura e brônquio (fístula broncopleural), com o surgimento de pneumotórax, notando-se borbulhamento no frasco de drenagem, principalmente após expiração forçada, tosse ou choro. Neste caso, o tempo de drenagem geralmente é maior que 1 semana.
            </P>
          </Section>
          <Section title="Prognóstico">
            <P>
                A maioria dos pacientes têm resolução completa do espessamento pleural residual em até 6 meses após o diagnóstico. Todos os pacientes que tiveram Pneumonias com Derrame Pleural devem fazer acompanhamento ambulatorial até a resolução completa da patologia.
            </P>
          </Section>
          <Section title="Referências">
            <Reference idx={1} body="AMORIM, Lenisse Estelle Abrantes Gonçalves et al. Abordagem do derrame pleural parapneumônico em crianças sob a forma de mapa conceitual. Belo Horizonte, 1986. Disponível em: http://www.dx.doi.org/10.5935/2238-3182.20160055. Acesso em: 2 jul. 2019."/>
            <Reference idx={2} body="GENOFRE, Eduardo et al. Derrame pleural de origem indeterminada. São Paulo, Aug. 2006. Disponível em: http://dx.doi.org/10.1590/S1806-37132006000900007. Acesso em: 2 jul. 2019."/>
            <Reference idx={3} body="JUNIOR, Arthur Soares de Souza. Curso de diagnóstico por imagem do tórax:Capítulo II - Imagenologia da pleura. São Paulo, 1999. Disponível em: http://dx.doi.org/10.1590/S0102-35861999000200007. Acesso em: 2 jul. 2019."/>
            <Reference idx={4} body="MARANHÃO, Bernardo Henrique Ferraz et al. Dosagem de proteínas totais e desidrogenase lática para o diagnóstico de transudatos e exsudatos pleurais: redefinindo o critério clássico com uma nova abordagem estatística. Rio de Janeiro, 2010. Disponível em: https://www.jornaldepneumologia.com.br/detalhe_artigo.asp?id=1188. Acesso em: 2 jul. 2020."/>
            </Section>
    </Routine>
}