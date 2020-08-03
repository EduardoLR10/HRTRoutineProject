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

import img1 from './images/image1.png'
import img2 from './images/image2.png'
import img3 from './images/image3.png'

export default class AlimentacaoNos2PrimeirosAnosDeVida extends React.Component {

  static title = "Alimentação nos 2 Primeiros Anos de Vida"
  static category = "Pediatria Geral e Puericultura"
  static authors = "Dra. Bárbara R. V. de Amorim Vieira"

    render = () =>
      <Routine title={AlimentacaoNos2PrimeirosAnosDeVida.title} category={AlimentacaoNos2PrimeirosAnosDeVida.category} authors={AlimentacaoNos2PrimeirosAnosDeVida.authors}>
          <Section title="0-6 Meses">
            <P style={{fontWeight: 'bold'}}>
                Aleitamento materno exclusivo (sem água, chás ou quaisquer outros alimentos).
            </P>
            <P>
                Em livre demanda, ou seja, todas as vezes que quiser, sem horários fixos e determinados. Depois de esvaziar a primeira mama, a mãe deve oferecer-lhe a segunda. O tempo de esvaziamento da mama é variável para cada criança.
            </P>
          </Section>
          <Section title="A partir dos 6 meses">
            <P style={{fontWeight: 'bold'}}>
                Introduzir de forma lenta e gradual outros alimentos, mantendo o leite materno até os 2 anos de idade ou mais.
            </P>
            <P>
                Nesta idade, a maioria das crianças atinge estágio de desenvolvimento com maturidade fisiológica e neurológica e atenuação do reflexo de protrusão da língua, o que facilita a ingestão. As enzimas digestivas são produzidas em quantidades suficientes, razão que habilita as crianças a receber outros alimentos além do leite materno. 
            </P>
            <P>
                Oferecer alimentação complementar (cereais, tubérculos, carnes, leguminosas, frutas e legumes), três vezes ao dia, se a criança receber leite materno, e cinco vezes ao dia, se estiver desmamada. 
            </P>
            <P>
                A primeira papa principal deve ser oferecida no sexto mês, no horário do almoço ou jantar. A refeição deve conter pelo menos um alimento de cada um dos seguintes grupos:
            </P>
            <List>
                <LItem>
                    Cereais ou tubérculos;
                </LItem>
                <LItem>
                    Leguminosas;
                </LItem>
                <LItem>
                    Carne (vaca, ave, suína, peixe ou vísceras, em especial fígado) ou ovo;
                </LItem>
                <LItem>
                    Hortaliças (verduras e legumes).
                </LItem>
            </List>
            <Figure source={img2} bottom_label="Fonte: Manual SBP, 2012."/>
            <P>
                A segunda papa principal será oferecida a partir do sétimo mês de vida. 
            </P>
            <P>
                A alimentação complementar deve ser espessa desde o início e oferecida com colher; começar com consistência pastosa (papas/purês) e, gradativamente, aumentar a consistência até chegar à alimentação da família (em torno dos 9-11 meses de idade).  A colher deverá ter tamanho adequado ao diâmetro da boca do lactente. 
            </P>
            <P>
                A papa deve ser amassada, sem peneirar ou liquidificar, para que sejam aproveitadas as fibras dos alimentos e fique na consistência de purê. Os alimentos devem ser colocados em porções separadas no prato da criança, para a identificação dos sabores.
            </P>
            <P>
                Recomenda-se que a fruta seja oferecida in natura, ao invés de sucos que possuem baixa densidade energética, na forma de papas ou amassadas. 
            </P>
            <P>
                A carne, de preferência vermelha, deve ser picada ou desfiada e deve ser oferecida todos os dias, na quantidade de 70-120g/dia (para duas papas). 
            </P>
            <P>
                É importante oferecer água potável a partir da introdução alimentar complementar porque os alimentos dados ao lactente apresentam maior quantidade de proteínas por grama e maior quantidade de sais, o que causa sobrecarga de solutos para os rins, que deve ser compensada pela maior oferta de água. Recomendado dar 800ml de água por dia (incluindo leite humano e alimentação complementar).
            </P>
            <P>
                O sal não deve ser adicionado as papas, sendo suficiente o conteúdo de sódio intrínseco aos alimentos utilizados no preparo.
            </P>
            <P>
                A introdução de alimentos potencialmente alergênicos, como ovo e peixe, pode ser realizada a partir do sexto mês de vida, mesmo em crianças com história familiar de atopia, sendo associado a um menor risco de desenvolvimento futuro de desfechos alérgicos.
            </P>
            <P>
                O leite de vaca integral, por várias razões, entre as quais o fato de ser pobre em ferro e zinco, não deverá ser introduzido antes dos 12 meses de vida. 
            </P>
            <P>
                Deve-se evitar alimentos industrializados pré-prontos, refrigerantes, café, chás e embutidos, entre outros. No primeiro ano de vida não se recomenda o uso de mel (pelo risco de contaminação de botulismo).
            </P>
          </Section>
          <Section title="Impossibilidade de Amamentar">
            <P>
                Diante da impossibilidade do aleitamento materno, deve-se utilizar uma fórmula infantil que satisfaça as necessidades do lactente, conforme recomendado por sociedades científicas nacionais e internacionais. Antes do sexto mês, deverá ser utilizada uma fórmula infantil para lactentes (primeiro semestre); a partir do sexto mês, recomenda-se uma fórmula infantil de seguimento para lactentes (segundo semestre). 
            </P>
            <P>
                A introdução alimentar destas crianças deve seguir o mesmo padrão preconizado para aquelas que estão em aleitamento materno exclusivo (a partir dos 6 meses).
            </P>
          </Section>
          <Section title="Alimentação entre 1 e 2 Anos de Idade">
            <P>
                Manter o aleitamento materno, refeições semelhantes às da família (verificar adequação). Não permitir a utilização de alimentos artificiais e corantes, assim como salgadinhos e refrigerantes.
            </P>
            <P>
                Deve ser incentivada a ingesta média de 600ml de leite de vaca (preferencialmente fortificado com ferro e vitamina A), assim como de outros derivados (iogurtes caseiros, queijos), para garantir a correta oferta de cálcio.
            </P>
            <P>
                A quantidade de água recomendada é de 1300mL ao dia (sendo 900mL de água e bebidas).
            </P>
            <Figure source={img3}/>
          </Section>
          <Section title="Suplementações">
            <Subsection title="Vitamina D">
                <P>
                    Para recém-nascidos a termo, recomenda-se suplementação medicamentosa profilática de 400 UI de vitamina D/dia, a partir da primeira semana de vida até os 12 meses, e de 600 UI/dia dos 12 aos 24 meses, inclusive para lactentes em aleitamento materno exclusivo, independentemente da região do país.
                </P>
                <P>
                    Para recém-nascidos pré-termo, recomenda-se suplementação profilática oral de vitamina D (400 UI/dia), que deve ser iniciada quando o peso for superior a 1500 g e houver tolerância plena à nutrição enteral.
                </P>
                <P>
                    Por ausência de consenso na literatura em relação à exposição solar segura e necessária para se atingir concentrações séricas adequadas de vitamina D em lactentes, suplementação medicamentosa profilática é sempre recomendada.
                </P>
            </Subsection>
            <Subsection title="Ferro Alimentar">
                <Figure source={img1} bottom_label="Fonte: Consenso sobre anemia ferropriva, 2018."/>
            </Subsection>
          </Section>
        <Section title="Referências">
        <Reference idx={1} title="Manual de orientação para alimentação do lactente, do pré-escolar, do escolar, do adolescente e na escola/Sociedade Brasileira de Pediatria. Departamento de Nutrologia, 3ª.ed." local="Rio de Janeiro" publisher="RJ:SBP" year="2012"/>
        <Reference idx={2} title="Curso de Aprimoramento em Nutrologia Pediátrica (CANP): Material teórico de apoio." year="2016/2018"/>
        <Reference idx={3} authors="Liberal EF, Vasconcelos, MM." title="Nutrologia. 1.ed." local="Rio de Janeiro" publisher="Guanabara Koogan" year="2016"/>
        <Reference idx={4} authors="Ministério da Saúde" title="Dez passos para uma alimentação saudável: guia alimentar para crianças menores de dois anos. 2.ed." local="Brasília" year="2013"/>
        <Reference idx={5} authors="Fisberg M, Lyra I, Weffort V." title="Consenso sobre anemia ferropriva: mais que uma doença, uma urgência médica! Departamentos de Nutrologia e Hematologia-Hemoterapia da Sociedade Brasileira de Pediatria (2:1-12)" year="2018"/>
        <Reference idx={6} title="Deficiência de vitamina D em crianças e adolescentes: Documentos Científicos. Sociedade Brasileira de Pediatria." year="2014"/>
        </Section>
    </Routine>
}