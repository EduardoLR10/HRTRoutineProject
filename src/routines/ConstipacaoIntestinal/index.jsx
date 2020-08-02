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

export default class ConstipacaoIntestinal extends React.Component {

  static title = "Constipação Intestinal"
  static category = "Gastroenterologia"
  static authors = "Dra. Ana Beatriz Schmitt Silva"

    render = () =>
      <Routine title={ConstipacaoIntestinal.title} category={ConstipacaoIntestinal.category} authors={ConstipacaoIntestinal.authors}>
        <Section title="Definição">
          <P>
            Eliminação de fezes endurecidas e/ou aumento do intervalo das evacuações, por mais de duas semanas, associada ou não a dor, esforço ou dificuldade ao evacuar, sensação de eliminação incompleta, postura retentiva ou incontinência fecal por retenção.
          </P>
          <P>
            A constipação crônica pode ser classificada em funcional (95% dos casos) ou constipação orgânica, secundária a outra condição clínica.
          </P>
        </Section>
        <Section title="Fisiopatologia da Constipação Funcional">
          <P>
            O ato de evacuar depende do funcionamento sincronizado da motilidade intestinal e dos esfíncteres anais interno (musculatura lisa) e externo (musculatura estriada). O bolo fecal ao chegar na ampola retal estimula receptores que determinam o relaxamento do esfíncter anal interno (reflexo retoanal ou retoesfincteriano). Com o relaxamento voluntário do esfíncter anal externo ocorre a eliminação das fezes. Caso a situação seja inapropriada para evacuar, a contração voluntária do esfíncter externo pode adiá-la. Nas crianças que ainda não adquiriram o controle do esfíncter anal a evacuação ocorrerá logo após a chegada do bolo fecal no reto.
          </P>
          <P>
            Quando as fezes não são eliminadas, ocorre um acúmulo destas no reto e também a montante (impactação fecal). Quanto mais tempo as fezes permanecerem no cólon, mais água é reabsorvida, o que as tornam mais endurecidas e calibrosas e, as evacuações, mais dolorosas. Pode ainda ocorrer diminuição gradual da sensibilidade retal e alteração da motilidade intestinal.  A progressão deste processo relaciona-se à diminuição da vontade de defecar e à incontinência fecal por retenção (escape fecal).
          </P>
        </Section>
        <Section title="Diagnóstico Clínico">
          <P>
            É de fundamental importância a anamnese detalhada com enfoque aos hábitos alimentares, ingesta hídrica, prática de atividade física, uso de medicamentos, presença de doenças crônicas e de fatores genéticos e hereditários, presença de distúrbios na motilidade intestinal e ocorrência de ciclo vicioso dor-retenção-dor. Quanto ao hábito intestinal, avaliar a frequência das evacuações, formato e consistência das fezes (Escala de Bristol), presença de dor, esforço excessivo ou medo ao evacuar, ocorrência de incontinência fecal retentiva ou escape e dor abdominal (figura 1). Devem-se buscar dados na história clínica para auxiliar na diferenciação da constipação funcional da constipação orgânica, pois o manejo é diferente em cada caso. 
          </P>
          <Figure source={img1} label="Figura 1: Escala de fezes de Bristol."/>
          <P>
            Para padronização diganóstica doram estabelecidos os critérios de Roma IV (2016) para os quadros de constipação intestinal funcional (tabela 1).
          </P>
          <Table head={['Lactantes e Crianças menores de 4 anos: duas das seguintes manifestações por mais de 1 mês', 'Crianças com controle esfincteriano considerar:', 'Crianças meiores de 4 anos e adolescentes: Duas ou mais das seguintes características, pelo menos 1 vez por semana, durante o período mínimo de 1 mês']} data={[[
          'Duas ou menos evacuações por mais de 1 mês\nHistórico de fezes de grande calibre\nHistórico de retenção fecal excessiva\nHistórico de evacuações difíceis ou dolorosas\nPresença de grande massa fecal no reto',
          'Pelo menos 1 episódio de incotinência fecal por semana após aquisição do controle esfincteriano\nHistórico de eliminiação de fezes de grande calibre que possam entupir o vaso sanitário',
          'Duas ou menos evacuações no vaso sanitário por semana\nPelo menos um episódio de incotinência fecal por semana\nHistórico de evacuações difíceis ou dolorosas\nPresença de grande massa fecal no reto\nHistórico de eliminação de fezes de grande calire que possam entupir o vaso sanitário']
          ]} label="Tabela 1: Critérios de Roma IV para o diagnóstico de constipação intestinal funcional crônica."/>
        </Section>
        <Section title="Sinais de alarme para Constipação Intestinal Orgânica">
          <P>
            Eliminação tardia de mecônio, início precoce (antes dos três meses de vida) ou durante aleitamento materno exclusivo, malformações lombo-sacrais ou perineais, ânus anteriorizado, insuficiência de crescimento, atrofia glútea, distensão abdominal importante e vômitos biliosos, neuropatias, fezes explosivas ao toque retal, sangramento nas fezes na ausência de fissura anal. 
          </P>
        </Section>
        <Section title="Diagnósticos Diferenciais de Constipação Intestinal Funcional">
          <P>
            Apenas 5% das causas de constipação crônica são de natureza orgânica, devendo-se, dessa forma, afastar algumas das condições clínicas a seguir: malformação anorretal, acalasia anal, lesões medulares, medula presa, síndrome de Prune Belly, fibrose cística, doença celíaca, doença de Hirschsprung (megacólon congênito), alergia à proteína do leite de vaca, hipotireoidismo, diabete melito, síndrome de Down, neuropatias, hipercalcemia, hipocalemia, intoxicação por vitamina D, medicações (anticonvulsivantes, opioides, sais de ferro, antiácidos). 
          </P>
        </Section>
        <Section title="Alterações no Exame Físico">
            <P>
                O exame físico deve ser completo, enfatizando a palpação abdominal a procura de massas indicativas de retenção fecal, inspeção do períneo e região sacral para pesquisa de malformações ou fissuras. O toque retal pode indicar presença de dilatação retal com fezes impactadas, presença de estenoses, além da avaliar a contratilidade e tônus esfincteriano. O tônus é espástico com saída de fezes explosivas na doença de Hirschsprung e diminuído ou ausente nas disrafias medulares.
            </P>
        </Section>
        <Section title="Diganóstico Laboratorial e Exames de Imagem">
          <P>
            Devem ser solicitados de forma individualizada de acordo com as manifestações clínicas e suspeitas diagnósticas, sobretudo para exclusão ou confirmação das causas orgânicas de constipação ou nos casos de refratariedade aos tratamentos convencionais. Nestes casos, alguns dos exames complementares que podem ser utilizados são:
          </P>
          <List>
              <LItem>
                Radiografia simples de abdome: útil na caracterização de impactação fecal, principalmente nos casos de palpação abdominal duvidosa (ex. pacientes obesos) ou quando não for possível a realização de toque retal (ex. resistência do paciente ou em casos de histórico de abuso sexual).
              </LItem>
              <LItem>
                Manometria anorretal: útil na suspeita de doença de Hirschsprung pela pesquisa do reflexo inibitório ano-retal.
              </LItem>
          </List>
        </Section>
        <Section title="Complicações mais Frequentes">
          <P>
            Com a gravidade do quadro podem ocorrer incontinência fecal retentiva, dificuldade no controle esfincteriano, dor abdominal crônica, anorexia, saciedade precoce, irritabilidade, além de impactos negativos em todo o contexto biopsicossocial.
          </P>
        </Section>
        <Section title="Tratamento">
          <P>
            O tratamento deve ser global e compreende a desimpactação intestinal do fecaloma, tratamento de manutenção para o restabelecimento do hábito intestinal normal, medidas educativas como orientação sobre constipação, reeducação alimentar com adequadas ingestas hídrica e de fibras, prática regular de atividade física e, por fim, treinamento esfincteriano e uso de vaso sanitário.
          </P>
          <P>
            Os laxantes orais, comumente empregados no tratamento da constipação, podem ser classificados em: osmóticos (ex. polietilenoglicol, lactulose), lubrificantes (ex. óleo mineral) e estimulantes (ex. sene, bisacodil, picossulfato). Por via retal podem ser usados os enemas glicerinado e fosfatado, minienema com sorbitol ou laurilsulfato de sódio.
          </P>
          <P>
            A desimpactação intestinal é a etapa inicial e primordial do tratamento, sendo necessários de 3 a 5 dias para se obter o completo esvaziamento. Deve ser feita, preferencialmente, por via oral com uso de laxantes ou, por via retal, através de enemas (tabela 2).
          </P>
          <P>
            Dentre os laxantes empregados na terapia de desimpactação intestinal destaca-se o polietilenoglicol (PEG), um polímero solúvel em água com alto peso molecular e com capacidade de, cada molécula, formar pontes de hidrogênio com 100 moléculas de água. O PEG hidrata o conteúdo colônico e facilita o trânsito intestinal, promovendo uma defecação indolor. 
          </P>
          <Table head={['Desimpactação', 'Dose', 'Efeitos Colaterais', 'Observações']} data={[
          ['Polietilenoglicol (PEG)', 'Via oral 1 a 1.5g/kg/dia', 'Bem tolerado.\nA apresentação com eletrólitos tem menor aceitação e pode causar náuseas e vômitos.', 'Uso Acima de 2 anos conforme bula. Entretanto, hã estudos recentes que mostram perfil de segurança acima de 1 ano de idade.\nTipo de formulações:\nPEG 3350 (Muvinlax®): sabor limão, contém macroglol e eletrólitos, 13g/envelope.\nPEG 4000: sem sabor, sem eletrólitos, manipulado conforme a posologia necessária.'],
          ['Enema Glicerinado a 12%', 'Via retal 10 ml/kg', '-', 'Administrar por sonda via retal e de forma lenta ("gota-a-gota").\nUso preferencial ao enema fosfatado.'],
          ['Enema fosfatado', 'Via retal 2.5 ml/kg/dia (dose máxima 133 ml/dose)', 'Risco de trauma mecânico retal, distensão abdominal e vômitos.\nPode provocar quadro grave e letal de hiperfosfatemia, hipocalcemia com tetania.', 'Uso acima de 2 anos. Em lactentes podem ser usados minienemas com sorbitol e laurilsulfato de sódio.\nNão usar em pacientes com alteração da função renal pois parcela dos eletrólitos é absorvida e há risco de toxidade.']
        ]} label="Tabela 2: Desimpactação Intestinal na Constipação."/>
          <P>
            Após a efetiva desimpactação intestinal deve ser iniciado o tratamento de manutenção com uso diário de laxante por, pelo menos, 3 meses. A dose deve ser individualizada e periodicamente reduzida para a menor necessária com o objetivo de manter as fezes macias, as evacuações não dolorosas e a frequência de evacuação ser de duas vezes ao dia até uma vez em dias alternados. O paciente deve ainda perder o medo de evacuar e a postura de retenção fecal. O tratamento de manutenção é feito prioritariamente com laxantes osmóticos, sendo o polietilenoglicol a escolha em crianças maiores de 2 anos e a lactulose, um dissacarídeo sintético, nos lactentes (tabela 3). 
          </P>
          <Table head={['Manutenção', 'Dose', 'Efeitos Colaterais', 'Observações']} data={[
          ['Polietilenoglicol (PEG)', 'Via Oral 0.2 a 0.8 g/kg/dia', 'Bem tolerado', 'Laxante osmótico de primeira escolha em maiores de 2 anos de idade.'],
          ['Lactulose', 'Via Oral 1 a 3 ml/kg/dia', 'Flatulência e dor abdominal', 'Laxante osmótico de primeira escolha em lactantes.\nSegunda opção em maiores de 2 anos.'],
          ['Hidróxido de magnésio', 'Via Oral 1 a 3 ml/kg/dia', 'Superdosagem pode causar hipsermagnesemia, hipofosfatemia e hipocalemia.', 'Laxante osmótico.\nNão usar em paciente com insuficiência renal.'],
          ['Óleo Mineral', 'Via Oral 1 a 3 ml/kg/dia (dose máxima de 60 a 90 ml/dia)', 'Se aspirado provoca pneumonia lipoídica.\nPode diminuir a absorção de vitaminas lipossolúveis.', 'Não usar em lactentes, portadores de encefalopatias e em pacientes com DRGE.']
        ]} label="Tabela 3: Tratamento de manutenção na constipação."/>
        <P>
            Os erros alimentares devem ser corrigidos e o consumo de fibras e ingesta hídrica devem ser o recomendados usualmente para cada faixa etária. O uso de probióticos na constipação não tem evidências até o presente momento.
        </P>
        <P>
            Caso o paciente esteja na fase de treinamento esfincteriano, este deve ser adiado e ser reiniciado aproximadamente 2 meses após a melhora da constipação. Os pacientes que já adquiriram o controle esfincteriano devem ser encorajados a evacuar nos primeiros sinais de desejo e os pés devem estar sempre apoiados.
        </P>
        <P>
            Importante orientar a família e cuidadores que medidas coercitivas não devem ser utilizadas com a criança, que não pode ser punida pelos escapes fecais. Acompanhamento psicológico pode ser necessário pois, mesmo que fatores emocionais não tenham sido a causa inicial da constipação, situações constrangedoras relacionadas ao escape fecal podem ocasionar sentimentos de inferioridade e fragilidade e agravar o quadro.
        </P>
        <P>
            O tratamento da constipação crônica funcional com escape fecal e/ou outras complicações é, em geral, longo, necessitando de terapia de manutenção por alguns meses. É importante esclarecer aos pais a importância da adesão ao tratamento, visto que os laxantes utilizados são seguros e que quanto mais tempo a criança permanecer constipada, maior a possibilidade de evolução para megarreto e outras complicações. Com o tratamento efetivo da constipação, espera-se a regressão progressiva da distensão do reto e do cólon, recondicionamento do hábito intestinal, restabelecimento do reflexo da evacuação, bem como a recuperação da confiança e da autoestima da criança.
        </P>
        </Section>
        <Section title="Referências">
            <Reference idx={1} authors="Benninga MA, Nurko S, Faure C, Hyman PE, Roberts ISJ, Schechter N." title="Childhood functional gastrointestinal disorders: Neonate/toddler. Gastroenterology (150(6):1443-55)." year="2016"/>
            <Reference idx={2} authors="Gomes, PB, Melo MCB, Duarte MA, Torres MRF, Xavier AT (2011)." title="Polientilenoglicol na constipação intestinal crônica funcional em crianças. Revista Paulista de Pediatria (29(2), 245-250)." link="https://dx.doi.org/10.1590/S0103-05822011000200017"/>
            <Reference idx={3} authors="Hymas SJ, Lorenzo C, Saps M, Shulman R, Stalano A, Tilburg MV." title="Childhood functional gastrointestinal disorders: Child/adolescent. Gastroenterology (150(6):1456-68)." year="2016"/>
            <Reference idx={4} authors="Maffei HVL, Morais MB. Constipação crônica. In: Porta G, Koda YKL." title="Gastroenterologia e hepatologia (p. 357-69)." local="São Paulo: Manole" year="2011"/>
            <Reference idx={5} authors="Morais MB, Maffei HVL, Tahan S. Constipação intestinal. In: Silva LR, Ferreira CT, Carvalho E." title="Gastroenterologia e nutrição em pediatria (p 466-93)." local="São Paulo: Manole" year="2012"/>
            <Reference idx={6} authors="Silva LR, Ferreira CT, CArvalho E. Constipação intestinal." title="Manual de Residência em gastroenterolgia pediátrica (Capítulo 14, Constipação Intestinal; p. 338-56)." local="São Paulo: Manole" year="2018"/>
            <Reference idx={7} authors="Tabbers MM, DiLorenzo c, Berger MY, Faure C, Langendam MW, Nurko S." title="Evaluation and treatment of functional constipation in infants and children: evidence-based recommendations from ESPGHAN and NASPGHAN (58:265-81)." local="J Pediatr Gastroenterol Nutr." year="2014"/>
            <Reference idx={8} authors="Vandenplas Y, Abkari A, Bellaiche M." title="Prevalence and Health Outcomes of Functional Gastrointestinal Symptoms in Infants From Birth o 12 Months of Age (61(5):531-7)." local="J Pediatr Gastroenterol Nutr." year="2015"/>
        </Section>
    </Routine>
}