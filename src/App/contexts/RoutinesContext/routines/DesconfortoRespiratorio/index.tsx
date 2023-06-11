import React from 'react'
import { RoutineContent as Routine } from '../../../../../models/Routine'
import {
  Text,
  P,
  Bold,
  Italic,
  Subscript,
  Table,
  Figure,
  List,
  LItem,
  Section,
  Subsection,
  Subsubsection,
  Reference
} from '../../../../screens/RoutineScreen/components'

export default function DesconfortoRespiratorio(): JSX.Element {
  return (
    <Routine
      id="desconforto-respiratorio"
      name="Desconforto Respiratório"
      categories={['lactentes', 'emergencia']}
      authors={['jose']}
      tags={['bronquiolite', 'cansaço', 'esforço']}
    >
      <Section title="Introdução">
        <P>
          Essa rotina aborda a síndrome do desconforto respiratório do lactente.
        </P>
      </Section>
      <Section title="Considerações Iniciais e Definições">
        <P>
          O lactente (criança de um a vinte e quatro meses de vida) tem
          características anatômicas, fisiológicas e imunológicas que favorecem
          o desconforto respiratório:
        </P>
        <List>
          <LItem>
            O pequeno diâmetro das vias aéreas, favorecendo o aparecimento de
            obstruções;
          </LItem>
          <LItem>
            Músculos intercostais e diafragma imaturos, favorecendo a exaustão;
          </LItem>
          <LItem>
            Os poros de ventilação colateral (canais de Lampert e poros de
            Kohn), pobremente desenvolvidos, favorecendo a formação de
            atelectasias;
          </LItem>
          <LItem>
            A incoordenação tóraco-abdominal, prejudicando a higiene brônquica;
          </LItem>
          <LItem>
            Elastina diminuída, com consequente queda da complacência pulmonar;
          </LItem>
          <LItem>Taxas metabólicas mais altas;</LItem>
          <LItem>
            Capacidade residual funcional e reserva de oxigênio mais baixa,
            favorecendo a hipoxemia em tempo bem mais curto.
          </LItem>
        </List>
        <P>
          As características relatadas acima, somadas a um sistema imunológico
          ainda em desenvolvimento e o fato de as viroses respiratórias serem
          extremamente comuns, principalmente no outono inverno, fazem com que
          esta síndrome seja de altíssima prevalência, sendo responsável por 60%
          das internações em pediatria em qualquer época do ano e nas estações
          mais frias chegando perto dos 80%.
        </P>
        <P>Um problema de saúde pública.</P>
        <P>
          É composta por uma tríade predominante: tosse, taquidispnéia e
          ausculta pulmonar alterada. As alterações na ausculta pulmonar podem
          ser as mais variadas, tanto quanto à intensidade ou quanto ao tipo.
        </P>
        <P>
          Febre, dificuldade de sucção, e cianose também estão presentes com
          frequência.
        </P>
        <P>
          Alguns grupos de pacientes apresentam evolução com maior gravidade e
          consequente maior número de complicações. São eles: cardiopatas,
          encefalopatas, desnutridos, pneumopatas crônicos, imunodeficientes,
          pacientes com infecção congênita, síndromes genéticas e malformações
          congênitas.
        </P>
        <P>
          Alguns sinais clínicos são mais preocupantes por serem sugestivos de
          uma evolução com maior gravidade: hepatoesplenomegalia, prostração,
          estridor laríngeo, expansibilidade pulmonar assimétrica, vômitos
          incoercíveis, sopros cardíacos.
        </P>
        <P>
          As complicações mais frequentes na fase aguda consistem na hipoxemia
          grave, desidratação, distúrbios metabólicos, distúrbios acido-básicos,
          atelectasias e insuficiência respiratória.
        </P>
        <P>
          O escore respiratório abaixo deve ser usado na mensuração da
          taquidispnéia, principalmente nos casos de maior gravidade.
        </P>
      </Section>
      <Section title="Escore de Wood-Downes">
        <Table
          colWidths={[100, 100, 100, 100, 100, 100, 100]}
          header={[
            'Pontuação',
            'Sibilância',
            'Tiragem',
            'F.R.',
            'F.C.',
            'Ventilação',
            'Cianose'
          ]}
          data={[
            ['0', 'Não', 'Não', '< 30', '< 120', 'Simétrica', 'Não'],
            [
              '1',
              'Final da expiração',
              'Subcostal e intercostal',
              '31 - 46',
              '> 120',
              'Diminuída',
              'Sim'
            ],
            [
              '2',
              'Toda a expiração',
              'Supraclavicular e BAN*',
              '46 - 60',
              '',
              'Muito diminuída',
              ''
            ],
            [
              '3',
              'Inspiração e expiração',
              'Supraesternal e intercostal',
              '> 80',
              '',
              'Tórax Silente',
              ''
            ]
          ]}
          caption="* batimento de asa nasal"
        />
        <List>
          <LItem>
            <Text style={{ fontWeight: 'bold' }}>Leve:</Text> 1 a 3 pontos.
          </LItem>
          <LItem>
            <Text style={{ fontWeight: 'bold' }}>Moderado:</Text> 4 a 7 pontos.
          </LItem>
          <LItem>
            <Text style={{ fontWeight: 'bold' }}>Grave:</Text> maior que 8
            pontos.
          </LItem>
        </List>
      </Section>
      <Section title="Diagnóstico Diferencial">
        <Subsection title="Causas Frequentes">
          <List>
            <LItem>Bronquiolite viral aguda;</LItem>
            <LItem>Pnemonias virais;</LItem>
            <LItem>Laringotraqueobronquites.</LItem>
          </List>
        </Subsection>
        <Subsection title="Causas A Considerar">
          <List>
            <LItem>Infecções bacterianas;</LItem>
            <LItem>Refluxo gastroesofágico;</LItem>
            <LItem>Insuficiência cardíaca;</LItem>
            <LItem>Asma;</LItem>
            <LItem>Síndrome Pertussis.</LItem>
          </List>
        </Subsection>
        <Subsection title="Causas Pouco Frequentes">
          <List>
            <LItem>Corpo estranho;</LItem>
            <LItem>Fibrose cística;</LItem>
            <LItem>Tuberculose;</LItem>
            <LItem>Outras.</LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Etiologia">
        <P>
          A etiologia viral é responsável pela grande maioria dos casos, o vírus
          mais prevalente, por volta de 60% dos casos é o{' '}
          <Bold>Vírus Sincicial Respiratório</Bold>. Este resultado se repete na
          maioria dos estudos de prevalência de vírus respiratórios em todo o
          mundo. Outros vírus também se mostram prevalentes: Adenovírus,
          Influenza, Para Influenza, Metapneumovírus, Rinovírus, H1N1 e outros.
          As bactérias e micobactérias, também podem estar presentes. Uma
          pequena porcentagem na forma primária e em porcentagem maior na
          infecção secundária.
        </P>
      </Section>
      <Section title="Tratamento">
        <P>
          A maior parte dos lactentes deverá ser tratada no domicílio. Os
          critérios para hospitalização são:
        </P>
        <List>
          <LItem>
            Hipoxemia, oximetria de pulso com resultado menor que 92;
          </LItem>
          <LItem>Escore respiratório de Wood-Downes maior que quatro;</LItem>
          <LItem>Impossibilidade de aceitação dietética por via oral.</LItem>
        </List>
        <P>
          Após a internação, o primeiro passo deve ser no sentido de ajudar a
          família a interagir com a situação, ajeitando a criança no berço,
          colocando coxins, elevando a cabeceira, tranquilizando e inteirando os
          familiares da situação em que toda a equipe se encontra.
        </P>
        <P>
          Após este primeiro contato, separamos os lactentes em dois grupos:
        </P>
        <Subsection title="Grupo 1">
          <P>
            Para crianças aceitando bem a dieta, com escore Wood Downes entre 4
            a 7:
          </P>
          <List>
            <LItem>
              Dieta mantida, sempre privilegiando o aleitamento materno até os
              dois anos e em caso de desmame irreversível, fórmulas de partida
              ou seguimento, adicionando comida de sal e frutas após o sexto mês
              de vida. Lembramos a importância do pediatra em prescrever a dieta
              do lactente.
            </LItem>
            <LItem>
              Oxigênio terapia: O₂ sob cateter nasal, se oximetria de pulso for
              menor que 92.
            </LItem>
            <LItem>
              Fisioterapia respiratória assim que haja estabilização do quadro
              hipóxico obstrutivo.
            </LItem>
            <LItem>Oximetria e medição de temperatura, intermitentes.</LItem>
          </List>
        </Subsection>
        <Subsection title="Grupo 2">
          <P>
            Para crianças com má aceitação da dieta, com escore Wood Downes
            maior que 8:
          </P>
          <List>
            <LItem>
              Dieta suspensa ou trófica, oferecida por sonda naso-gástrica em
              pequeno volume para manutenção do trânsito gastrointestinal.
            </LItem>
            <LItem>
              Hidratação venosa com volume inicial de 100 a 120 ml/kg/dia em
              bomba de infusão, com velocidade de infusão de glicose (VIG)
              inicial de 5,0 mg/kg/min. e eletrólitos de acordo com a avaliação
              médica e laboratorial.
            </LItem>
            <LItem>
              Oxigenioterapia controlada (FiO2 conhecida), na oxitenda ou
              máscara de Venturi com concentração de acordo com a oximetria de
              pulso, realizada de forma contínua.
            </LItem>
            <LItem>
              Monitorização rigorosa: cardíaca, respiratória, além de frequentes
              avaliações clínicas.
            </LItem>
            <LItem>
              Fisioterapia respiratória, assim que haja estabilização do quadro
              hipóxico obstrutivo.
            </LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Exames Complementares">
        <P>No momento da hospitalização:</P>
        <List>
          <LItem>Hemograma completo;</LItem>
          <LItem>Raios-X de Tórax.</LItem>
        </List>
        <P>
          De acordo com a evolução, a critério médico, outros exames serão
          necessários.
        </P>
      </Section>
      <Section title="Considerações sobre as Modalidades Terapêuticas">
        <Subsection title="Oxigenioterapia">
          <P>
            É o principal ponto do nosso tratamento. No primeiro grupo, onde a
            sintomatologia é mais leve, a oxigenoterapia será descontrolada,
            onde a FiO₂ administrada é desconhecida. Será ofertado O₂ por
            cateter nasal com fluxo de um a três litros por minuto.
          </P>
          <P>
            Sempre que o desconforto for mais importante, com escore de Wood
            Downes maior que sete, seja na chegada ou na evolução da criança,
            deve-se instituir oxigenoterapia controlada, onde a FiO ₂ será
            conhecida. Para isto, inicia-se a administração de O₂ em uma
            Oxitenda ou em uma máscara de Venturi. A oxitenda exige além do O ₂,
            uma canulação de ar comprimido e um misturador de gases. A máscara
            de Venturi necessita apenas de oxigênio. O O₂ controlado é iniciado
            com uma FiO ₂ de 50%, podendo chegar até 60 e no máximo, 70%.
          </P>
          <P>
            Após a instituição do O₂ controlado, indicaremos coleta gasométrica
            que nos orientará a progressão ou não da assistência respiratória.
          </P>
          <P>
            Se a gasometria se mostrar satisfatória, mantemos a conduta. Se a
            gasometria mostrar hipoxemia, representa que a criança necessita de
            algo mais que O₂: pressão, através de:
          </P>
          <List>
            <LItem>
              <Bold>CPAP nasal:</Bold> modalidade de ventilação não invasiva
              composta de pressão contínua com pressão positiva aumentada no fim
              da expiração, com a FiO ₂ da indicação e um PEEP, variando de 5 a
              10 cm de H₂O.
            </LItem>
            <LItem>
              <Bold>BIPAP:</Bold> modalidade de VNI onde além da pressão
              positiva no final da expiração, oferece pressão inspiratória
              positiva. iNDICADA QUANDO a gasometria mostrar hipercapnia, mais
              de 65, isolada ou acompanhada de hipoxemia. Tem interface de
              máscara ou cânula nasal e pode ser feito tanto em máquina portátil
              quanto no respirador.
            </LItem>
          </List>
          <P>
            Se após a instituição da ventilação não invasiva a criança não
            mostrar melhora clínica e\ou gasométrica, indica-se a intubação e
            ventilação mecânica.
          </P>
          <P>
            Ressalta-se que tanto o oxigênio puro quanto as modalidades com
            pressão positiva, invasivas ou não, podem trazer malefícios ao
            lactente, portanto, sempre que possível, indica-se minimizar a FiO ₂
            e as pressões oferecidas.
          </P>
        </Subsection>
        <Subsection title="Broncodilatadores">
          <P>
            A literatura atual é quase unânime em não indicar o broncodilatador
            no tratamento de rotina no desconforto respiratório do lactente,
            principalmente nos mais jovens, em que nota-se uma resposta na maior
            parte dos casos.
          </P>
          <P>Portanto, seu uso é recomendado apenas nas seguintes situações:</P>
          <List>
            <LItem>Crianças internadas, maiores de um ano;</LItem>
            <LItem>Crianças que apresentem atelectasias;</LItem>
            <LItem>
              Crianças que apresentem recorrências de internação, já a partir da
              segunda, independente da idade;
            </LItem>
            <LItem>
              Crianças com diagnóstico de Síndrome Pertussis, mesmo presumível.
            </LItem>
          </List>
          <P>
            Os broncodilatadores recomendados na terapia inalatória são
            ofertados preferencialmente, na forma de spray de salbutamol com
            espaçador, quatro jatos por etapa de dois minutos, com intervalos de
            acordo com a avaliação médica. Se o salbutamol não estiver
            disponível, como segunda escolha, há a nebulização, realizada com
            cinco gotas de fenoterol em três ml de soro fisiológico. Nos casos
            onde existe dificuldade técnica ou nos casos de maior gravidade,
            recomenda-se o sabutamol por via intravenosa.
          </P>
          <P>
            Ainda sobre o uso do broncodilatador, recomenda-se o uso do RESGATE,
            apenas nos casos em que há recorrência (mais de três episódios)
            comprovada, onde o diagnóstico de lactente sibilante se impõe.
          </P>
        </Subsection>
        <Subsection title="Corticóides">
          <P>
            O uso de corticoterapia sistêmica e/ou inalatória não é indicado no
            tratamento rotineiro desta síndrome. Nas situações abaixo, seu uso
            será considerado:
          </P>
          <List>
            <LItem>
              Laringotraqueobronquites, com graves obstruções altas, onde a
              corticoterapia está indicada;
            </LItem>
            <LItem>
              Crianças com recorrência comprovada, mais de três episódios, e
              mesmo assim analisando critérios tais como: IgE positivo, forte
              história familiar, dermatite atópica, etc.;
            </LItem>
            <LItem>Crianças com mais de trinta dias de evolução;</LItem>
          </List>
          <P>
            <Bold>Observações:</Bold>
          </P>
          <List>
            <LItem>
              O uso da corticoterapia sistêmica no lactente tem seus efeitos
              colaterais exacerbados, trazendo problemas a curto, médio e longo
              prazo;
            </LItem>
            <LItem>
              Nas obstruções altas o uso da dexametasona é a primeira escolha;
            </LItem>
            <LItem>
              No lactente sibilante usamos a prednisolona e se necessitar do uso
              parenteral, a metilprednisolona.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Antibioticoterapia - Critérios de Separação - Viral X Bacteriano">
          <P>
            Nesta síndrome, a incidência de infecção bacteriana primária é menos
            de 10%, portanto, nos casos típicos em crianças eutróficas, a
            infecção viral prevalece. Porém, em alguns casos, levanta-se a
            hipótese de infecção bacteriana primária ou secundária (mais
            frequente). Para o auxílio diagnóstico, lista-se algumas situações
            que falam a favor de doença bacteriana, induzindo à consideração do
            uso de antimicrobianos:
          </P>
          <List>
            <LItem>Insuficiência respiratória;</LItem>
            <LItem>
              Escore de Wood Downes maior que oito por mais de 48 horas;
            </LItem>
            <LItem>Febre aferida na enfermaria por mais de 72 horas;</LItem>
            <LItem>Secreções de aspecto purulento;</LItem>
            <LItem>
              Hipoatividade, dificuldade de sucção, mesmo com boa saturação de O
              ₂;
            </LItem>
            <LItem>Comorbidades agravantes já relatadas;</LItem>
            <LItem>Derrames pleurais, pneumatoceles;</LItem>
            <LItem>Grandes atelectasias.</LItem>
          </List>
          <P>
            Quando indicado o uso de antimicrobianos, deve-se privilegiar uma
            boa cobertura para o Pneumococo,{' '}
            <Italic>Haemophilus Influenza</Italic> e os Estafilococos da
            comunidade, germes comuns no lactente, recomenda-se:
          </P>
          <List>
            <LItem>Ampicilina/sulbactan, uso intravenoso;</LItem>
            <LItem>Amoxicilina/clavulanato, uso oral;</LItem>
            <LItem>
              Macrolídeos, na suspeita de germes atípicos e na Síndrome
              Pertussis;
            </LItem>
            <LItem>
              Nos casos de derrame pleural, pneumatoceles ou clínica sugestiva
              de Estafilococos aureus, recomenda-se o uso da oxacilina associada
              à ceftriaxona.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Antivirais">
          <P>
            A Ribavirina, ainda não comercializada no Brasil, chegou a ser usada
            em outros países, porém os resultados não corresponderam às
            expectativas e hoje está sendo muito pouco recomendada, os estudos
            ainda são inconclusivos.
          </P>
          <P>
            O Oseltamivir, antiviral específico aos vírus Influenza, vem sendo
            usado no Brasil, recomendado pelo Ministério da Saúde no desconforto
            respiratório grave do lactente, principalmente naqueles pacientes
            onde o Influenza é isolado.
          </P>
          <P>
            No nosso serviço, o Oseltamivir é utilizado nas situações onde o
            vírus foi isolado e nas seguntes:
          </P>
          <List>
            <LItem>
              Lactente desconfortado, onde os pais e\ou irmãos também apresentam
              sintomas gripais;
            </LItem>
            <LItem>
              Lactente desconfortado, oriundo de creche ou instituição onde
              existam outras crianças com sintomas gripais;
            </LItem>
            <LItem>
              Lactente com desconforto respiratório importante, onde a
              sintomatologia teve início há menos de 48 horas;
            </LItem>
            <LItem>
              Lactentes com comorbidades: desnutridos, cardiopatas, pneumopatas,
              neuropatas, portadores de síndromes genéticas, etc.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Nebulização com Solução Salina Hipertônica">
          <P>
            Apesar de ter sido preconizada por vários artigos de revistas
            respeitadas, não há evidências, até o momento, para que seu uso seja
            recomendado sem restrições. Os estudos ainda são inconclusivos.
          </P>
          <P>
            No nosso serviço, nas vezes que foi utilizada, o resultado não foi
            satisfatório, aumentando a irritabilidade e não demonstrando melhora
            significativa nos nossos lactentes.
          </P>
        </Subsection>
        <Subsection title="Nebulização com Adrenalina">
          <P>
            Não há evidências científicas para seu uso, a não ser em obstruções
            altas.
          </P>
        </Subsection>
        <Subsection title="Antileucotrienos">
          <P>
            O montelucaste já foi testado em vários estudos, e os resultados não
            mostraram evidências que justificassem o seu uso.
          </P>
        </Subsection>
        <Subsection title="Imunogobulina Humana">
          <P>
            Não há evidências científicas para seu uso, apesar de ser
            preconizado, no paciente mais grave, em alguns serviços.
          </P>
        </Subsection>
        <Subsection title="Oxigênio Terapia Nasal de Alto Fluxo">
          <P>
            O cateter ou cânula nasal de alto fluxo (CNAF) é um método não
            invasivo de suporte ventilatório que em diversos estudos mostram
            evidências de efeitos benéficos na criança que não melhorou com o O
            ₂ simples controlado. Nestes estudos, houve melhora da hipoxemia,
            conseguindo oferecer ao paciente uma melhor oxigenação e um pico de
            pressão expiratória positiva.
          </P>
          <P>
            Esta modalidade se tornou uma alternativa ao CPAP nasal com menos
            efeitos colaterais. Ainda estão em andamento estudos mais
            aprofundados, porém as expectativas são ótimas.
          </P>
        </Subsection>
        <Subsection title="Profilaxia do Vírus Sincicial Respiratório">
          <Subsubsection title="Imunização Passiva">
            <P>
              Desenvolvimento de anticorpos monoclonais geneticamente
              humanizados (palivizumabe), direcionados contra a proteína F do
              vírus. Reduz a replicação viral e a transmissão do vírus entre as
              células. Aplicação intramuscular. Os estudos mais recentes
              evidenciam excelentes resultados, mostrando significativa redução
              de hospitalizações nas crianças que receberam a medicação.
            </P>
            <P>
              No Brasil, por ser um medicamento caro, existe um programa
              assistencial apenas para cardiopatas e prematuros.
            </P>
          </Subsubsection>
          <Subsubsection title="Vacinas em Desenvolvimento">
            <P>
              Vacina de nanopartícula F, em 2018, foram anunciados os resultados
              preliminares de fase III em mais de oito mil gestantes, com 40%
              dos lactentes atingindo o limiar estabelecido com proteção até
              noventa dias de vida.
            </P>
          </Subsubsection>
        </Subsection>
        <Subsection title="Complicações Tardias">
          <List>
            <LItem>
              Atelectasias persistentes: a atelectasia é uma das principais
              complicações no lactente desconfortado, na maior parte das vezes,
              com a ajuda da fisioterapia, a resolução se dá ainda dentro da
              fase aguda, porém algumas crianças do nosso serviço recebem alta
              com acompanhamento fisioterápico até a resolução do caso.
            </LItem>
            <LItem>
              Cronicidade: temos observado no nosso ambulatório uma evolução
              favorável na quase totalidade dos casos, e apenas uma pequena
              parte evoluiu para cronicidade representada pela bronquiolite
              obliterante. Nos casos em que ela ocorre, há um acompanhamento em
              conjunto com a pneumologia pediátrica.
            </LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Considerações Finais">
        <P>
          A solicitação do Rx de tórax é indispensável no lactente hospitalizado
          com desconforto respiratório, além do auxílio para o diagnóstico
          diferencial, a presença de atelectasias é muito prevalente, muitas
          vezes no início do quadro agudo.
        </P>
        <P>
          A lavagem das mãos é a melhor ferramenta para a prevenção da
          disseminação hospitalar, visto que o quarto privativo ainda é uma
          realidade distante, em muitos serviços.
        </P>
        <P>
          Ressalta-se que as crianças que convivem com tabagistas têm um maior
          risco de desenvolver viroses respiratórias.
        </P>
        <P>
          O incentivo ao aleitamento materno é uma medida eficaz na prevenção
          das viroses respiratórias, além de diminuir em um terço, o risco de
          hospitalização por infecção do trato respiratório inferior.
        </P>
        <Subsection title="No nosso serviço">
          <P>
            Nossas recomendações ratificam, sempre que possível, a coleta do
            painel viral.
          </P>
          <P>
            Nosso principal critério para a alta hospitalar é a estabilização do
            quadro respiratório sem oxigênio, mantendo saturação estável de O ₂,
            acima de 92%, além de uma dieta com, pelo menos, 75% de aceitação de
            suas necessidades basais pela via oral.
          </P>
          <P>
            A alta definitiva somente é lavrada após a exaustiva orientação
            familiar, sendo marcado pelo menos um retorno obrigatório, depois de
            sete dias no domicílio.
          </P>
          <P>
            O acompanhamento ambulatorial é marcado para todos os pacientes na
            ocasião da alta definitiva.
          </P>
        </Subsection>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Tatiana Rozov; Doenças Pulmonares em Pediatria - Diagnóstico eTratamento1999; 193-220."
        />
        <Reference
          idx={2}
          body="IV Diretrizes brasileiras para o manejo da asma, J. pneumologia, 2006;32(7)S447-S474."
        />
        <Reference
          idx={3}
          body="Martinez FD, Wright AL, Taussig LM, Holberg CJ, Morgan WJ, Group Health Medical Associates. Asthma and wheezing in the first six years of life. N Engl J Med. 2006;161(5); 1501-7."
        />
        <Reference
          idx={4}
          body="Rosov T, Lotufo JP, Malozzi MC. A síndrome do lactente com sibilância. Alergia, imunologia e pneumologia. São Paulo: Atheneu; 2004, p. 111-21."
        />
        <Reference
          idx={5}
          body="Fischer GB, Teper A, Colom A. Acute viral bronchiolitis and its sequelae in developing countries. Pediatrics respire rev.2003;3(4),298-302."
        />
        <Reference
          idx={6}
          body="Pitrez PM, Stein RT, Jones MH, Arruda A. Rinovírus e BVA em lactentes. J. Ped (RJ), 2005;81(5);417-20."
        />
        <Reference
          idx={7}
          body="Chong HJN, Mallol J, Rosário NA, Solé D. Prevalência de sibilância recorrente em lactentes. J. Ped. (RJ). 2007; 83(4); 357-62."
        />
        <Reference
          idx={8}
          body="Rodrigues JC, Adde FV, Silva LVR. Doenças Respiratórias. São Paulo, Manole; 2008, p, 359-71."
        />
        <Reference
          idx={9}
          body="American Academy of Pediatrics- subcommitee on diagnosis and manegement of bronchiolitis, Diagnosis and management of bronchiolitis. Pediatrics. 2006;118(4):1774-93."
        />
        <Reference
          idx={10}
          body="Stein RT, Marostica PJ. Community- acquired pneumonia: a review and recent advances. Pediatrics Pneumology. 2007;42(12):1095-103."
        />
      </Section>
    </Routine>
  )
}
