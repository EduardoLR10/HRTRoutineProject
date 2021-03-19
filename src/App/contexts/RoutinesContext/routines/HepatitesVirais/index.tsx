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

export default function HepatitesVirais(): JSX.Element {
  return (
    <Routine
      id="hepatites-virais"
      name="Hepatites Virais"
      categories={['infectologia']}
      authors={['marco']}
      tags={['hepatite', 'hepatomegalia', 'icterícia', 'A', 'B']}
    >
      <Section title="Magnitude do problema e etiologia">
        <P>
          As hepatites virais são um grave problema de saúde pública no Brasil e
          no mundo. Segundo estimativas, bilhões de pessoas já tiveram contato
          com os vírus das hepatites e milhões são portadores crônicos. São
          causadas pelos vírus hepatotrópicos: HAV, HBV, HCV, HDV, HEV e HGV.
          Juntos, eles são responsáveis por mais de 90% dos casos de hepatite
          aguda. As hepatites virais constituem a causa mais importante de
          doença hepática na população pediátrica. Os vírus da hepatite causam
          ampla variedade de apresentações clínicas, que vão desde um estado de
          portador assintomático, hepatite aguda, fulminante ou crônica até
          cirrose hepática e carcinoma hepatocelular.
        </P>
      </Section>
      <Section title="Diagnóstico Clínico">
        <Subsection title="Informações Importantes para a Hepatite por HAV">
          <List>
            <LItem>
              A maioria dos casos de hepatite entre crianças é por HAV;
            </LItem>
            <LItem>
              Transmissão fecal-oral; a transmissão parenteral é incomum, mas
              possível;
            </LItem>
            <LItem>
              Período de incubação em média de 1 mês (15 a 40 dias, na maioria
              dos casos);
            </LItem>
            <LItem>
              Transmissibilidade habitual: até 2 semanas após o início da
              icterícia;
            </LItem>
            <LItem>Prevalência maior até 5 anos de idade;</LItem>
          </List>
          <P>
            Nas crianças jovens, as infecções assintomáticas associadas ao
            prolongado período de excreção fecal do vírus e a limitada higiene
            pessoal dessa faixa etária fazem desse grupo uma importante fonte de
            infecção;
          </P>
          <P>
            A infecção pelo HAV é usualmente caracterizada por ter curta
            duração, ser autolimitada, conferir imunidade duradoura, não evoluir
            para hepatopatia crônica e não se mantém na forma de portador são.
          </P>
        </Subsection>
      </Section>
      <Section title="Fatores de Risco para a Hepatite por HAV">
        <List>
          <LItem>Falta de saneamento e higiene;</LItem>
          <LItem>Contato pessoal ou doméstico com pessoas infectadas;</LItem>
          <LItem>
            Convívio familiar e nos agrupamentos de pessoas (militares, prisões,
            creches e instituições que cuidam de crianças sem controle de
            esfíncter), além de homossexuais masculinos, usuários de drogas
            endovenosas;
          </LItem>
          <LItem>Viagens recentes para regiões endêmicas de hepatite A;</LItem>
          <LItem>
            Crianças de creche e de instituições que cuidam de crianças sem
            controle de esfíncter.
          </LItem>
        </List>
        <Subsection title="Consumo de Alimento implicado em surto de origem alimentar">
          <List>
            <LItem>Alface e saladas;</LItem>
            <LItem>Sanduíches;</LItem>
            <LItem>Ostras, mexilhões e outros mariscos;</LItem>
            <LItem>Consumo de água implicada em surto de origem hídrica;</LItem>
          </List>
        </Subsection>
        <Subsection title="Informações importantes para a hepatite por HBV">
          <List>
            <LItem>
              O HBV é transmitido através de fluidos corpóreos e do sangue;
            </LItem>
            <LItem>
              Transmissão parenteral (vertical; por contato sexual;
              transfusional; uso de drogas; acidentes com materiais
              perfurocortante e biológico, por procedimentos cirúrgicos,
              odontológicos e hemodiálises sem as adequadas normas de
              biossegurança) e por contatos diversos transcutâneos;
            </LItem>
            <LItem>
              Nas áreas de alta prevalência de infecção pelo HBV ({'>'}8%), a
              transmissão é usualmente vertical (mãe-filho) ou horizontal (entre
              familiares) nos primeiros anos de vida. Nesta faixa etária, a
              infecção geralmente se torna crônica, perpetuando a alta
              prevalência do HBV;
            </LItem>
            <LItem>
              Nas áreas de baixa prevalência ({'<'}1%), a HBV é doença de
              adolescentes e adultos jovens, com predominância das transmissões
              sexual e parenteral, como em usuários de drogas injetáveis;
            </LItem>
            <LItem>
              Período de incubação de mais de 2 meses (50 a 180 dias, podendo
              chegar a 6 meses); Transmissibilidade: variável, podendo ser
              indefinida nos casos que se tornarão portadores sãos;
            </LItem>
            <LItem>
              Pode se tornar crônica em porcentagens variáveis conforme a
              população.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Informações importantes para a hepatite por HCV">
          <List>
            <LItem>
              Entre os indivíduos infectados pelo vírus da hepatite C (HCV),
              somente pequena proporção é constituída de crianças e há pouca ou
              nenhuma manifestação dessa infecção durante a infância;
            </LItem>
            <LItem>
              Nas crianças, a transmissão ocorre basicamente por duas vias:
              parenteral (bem documentada) ou vertical. As vias perinatal,
              intrafamiliar, sexual e ocupacional também podem ocorrer;
            </LItem>
            <LItem>
              A infecção aguda é raramente reconhecida na criança, exceto em
              circunstâncias especiais, como na exposição vertical de
              recém-nascidos de mães sabidamente infectadas ou após
              hemotransfusão;
            </LItem>
            <LItem>Período de incubação: 1 a 5 meses;</LItem>
            <LItem>
              Transmissibilidade: pacientes que adquirem a doença classicamente
              tornam-se portadores por tempo indefinido;
            </LItem>
            <LItem>
              O vírus da hepatite C não tem ação citopática direta, exercendo a
              lesão hepática por meio de imunomediação.
            </LItem>
            <LItem>
              Grupos de risco: exposição a transfusões de sangue ou aos seus
              produtos, principalmente entre as crianças com drepanocitose,
              hemofilia, talassemia, câncer – sobretudo leucemias – e crianças
              submetidas à hemodiálise, cirurgias ou manipulações repetidas ;
              profissionais que manipulam sangue.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Informações importantes para a hepatite por HDV">
          <List>
            <LItem>
              Transmissão: semelhante ao HBV; contatos íntimos e prolongados;
            </LItem>
            <LItem>
              Vírus defectivo – depende da presença do HBsAg para sua
              replicação;
            </LItem>
            <LItem>
              Existe apenas como coinfecção com pacientes com hepatite crônica
              por HBV ou portadores.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Informações importantes para a hepatite por HEV">
          <List>
            <LItem>Transmissão fecal-oral;</LItem>
            <LItem>Período de incubação em média 40 dias (22 a 60 dias);</LItem>
            <LItem>Também não se cronifica nem deixa portadores sãos;</LItem>
            <LItem>
              Curso benigno na maioria das vezes, pode levar a formas graves,
              sobretudo em grávidas;
            </LItem>
            <LItem>Prevalência de 7% na cidade do Rio de Janeiro.</LItem>
          </List>
        </Subsection>
        <Subsection title="Informações importantes para a hepatite por HGV">
          <List>
            <LItem>Transmissão parenteral;</LItem>
            <LItem>
              Infecções agudas e crônicas (essa última sempre em associação com
              outros vírus até onde se sabe atualmente).
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Sinais e sintomas frequentes em todas as hepatites virais">
          <List>
            <LItem>Febre;</LItem>
            <LItem>Náuseas e vômitos;</LItem>
            <LItem>Inapetência;</LItem>
            <LItem>
              Intolerância a alimentos, principalmente comida de sal;
            </LItem>
            <LItem>Icterícia;</LItem>
            <LItem>
              Ausência de icterícia, especialmente em lactentes (hepatite
              anictérica);
            </LItem>
            <LItem>Colúria;</LItem>
            <LItem>Dor ou desconforto abdominal;</LItem>
            <LItem>Aumento de volume abdominal;</LItem>
            <LItem>Diarreia;</LItem>
            <LItem>Mal estar geral;</LItem>
            <LItem>Dores musculares;</LItem>
            <LItem>Hipocolia fecal transitória;</LItem>
            <LItem>
              Casos de hepatite podem ser assintomáticos na infância;
            </LItem>
            <LItem>
              Há similaridade nas apresentações agudas independente do vírus
              causador.
            </LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Alterações de Exame Físico">
        <List>
          <LItem>Hepatomegalia;</LItem>
          <LItem>
            Dor à palpação do hipocôndrio direito e região epigástrica ou todo o
            abdome;
          </LItem>
          <LItem>Esplenomegalia;</LItem>
          <LItem>Icterícia conjuntival e tegumentar.</LItem>
        </List>
      </Section>
      <Section title="Reconhecimento da Insuficiência Hepática">
        <List>
          <LItem>
            Tempo de protrombina (TAP) com INR ≥ 1,5 em paciente com doença
            hepática (atividade {'<'} 60%);
          </LItem>
          <LItem>
            Qualquer grau de alteração mental em paciente com doença hepática;
          </LItem>
          <LItem>
            Hipoalbuminemia não é usada como critério formal, mas pode ajudar na
            falta do TAP.
          </LItem>
        </List>
      </Section>
      <Section title="Diagnóstico Laboratorial">
        <P>
          Toda criança internada tem que ter TAP obrigatoriamente. Pedir no
          pronto-socorro!
        </P>
        <P>Testes inespecíficos para reconhecimento da lesão hepática:</P>
        <List>
          <LItem>
            Aminotransferases: ALT (antiga TGP) e AST (antiga TGO): na hepatite
            viral clássica estão muito elevadas (geralmente mais de 1000).
            Quando estão apenas tocadas (até 500) suspeita-se de outros vírus
            como o citomegalovírus e o Epstein-Barr. A diminuição súbita pode
            não ser apenas por melhora do quadro, mas também por depleção
            completa nos estágios de lesão celular avançados.
          </LItem>
          <LItem>
            Gama-GT: primeira a se alterar, não está disponível em laboratórios
            de emergência;
          </LItem>
          <LItem>
            Bilirrubinas: geralmente predomina a bilirrubinemia direta;
          </LItem>
          <LItem>
            urina tipo 1 (EAS): urobilirrubinogenúria, bilirrubinúria.
          </LItem>
        </List>
        <Subsection title="Quais sorologias pedir preliminarmente frente a um quadro de hepatite viral aguda">
          <List>
            <LItem>IgM anti-HAV;</LItem>
            <LItem>HBsAg (antígeno Austrália);</LItem>
            <LItem>IgM Anti-HBc ou Anti-HBc total;</LItem>
            <LItem>
              Anti-HCV (Obs1: positivação só após 12 semanas // Obs2: IgM
              Anti-HCV é encontrada apenas nas formas crônicas ativas);
            </LItem>
            <LItem>
              Devido ao longo período de incubação dos vírus A, B e C, pode-se
              solicitar as sorologias, logo no início da doença, diferente do
              que ocorre na dengue, por exemplo.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Padrões sorológicos nas diversas situações clínicas causadas pelo HBV">
          <List>
            <LItem>
              Infecção aguda: IgM anti-HBc positivo e em seguida HBsAg positivo;
            </LItem>
            <LItem>
              Portador são: HBsAg positivo e Anti-HBsAg negativo; IgM Anti-HBc
              negativo;
            </LItem>
            <LItem>
              Infecção crônica: HBsAg positivo; Anti-HBc ou IgM Anti-HBc
              persistentes;
            </LItem>
            <LItem>
              Infecção crônica ativa: HBsAg positivo; Anti-HBc ou IgM Anti-HBc
              persistentes e HBeAg positivo;
            </LItem>
            <LItem>Imunidade: HBsAg negativo e Anti-HBsAg positivo.</LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Alterações laboratoriais na Insuficiência Hepática">
        <P>
          TAP aumentado: INR ≥ 1,5 (atividade de protombina menor que 60%
          aproximadamente).
        </P>
      </Section>
      <Section title="Critérios de Internação">
        <Subsection title="Achados que indicam hepatite complicada">
          <List>
            <LItem>Vômitos incoercíveis;</LItem>
            <LItem>Desidratação;</LItem>
            <LItem>Febre alta incontrolável;</LItem>
            <LItem>Dor abdominal incontrolável;</LItem>
            <LItem>Insuficiência hepática;</LItem>
            <LItem>Encefalopatia hepática;</LItem>
            <LItem>Apresentação pouco usual que coloque em risco a vida;</LItem>
            <LItem>Evidências laboratoriais de hepatites complicadas.</LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Complicações mais Frequentes">
        <P>
          A insuficiência hepática é a complicação mais temida e pode ocorrer
          com ou sem encefalopatia.
        </P>
        <P>
          Achados importantes nos quadros graves com insuficiência hepática:
        </P>
        <Subsection title="Encefalopatia">
          <P>Nos seguintes graus:</P>
          <List>
            <LItem>
              I – Euforia: agitação, depressão ocasional, flutuação de humor,
              confusão discreta, fala mole ou arrastada;
            </LItem>
            <LItem>
              II – Sonolência: dorme muito, mas acorda e responde às
              solicitações, alterações de comportamento, delírios, confusão
              mental;
            </LItem>
            <LItem>
              III – Torpor: dorme todo o tempo, responde a estímulos táteis e
              dolorosos, pode haver momentos de fala incoerente;
            </LItem>
            <LItem>
              IV – Coma: coma profundo, não responsivo; reflexos diminuídos.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Edema cerebral/hipertensão intracraniana">
          <List>
            <LItem>
              Inicialmente: taquipnéia, taquicardia, agitação, reflexos
              pupilares lentos;
            </LItem>
            <LItem>
              Tardiamente: convulsões, bradipnéia, bradicardia, decorticação,
              descerebração.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Alterações Hemodinâmicas">
          <List>
            <LItem>Vasodilatação periférica e choque;</LItem>
            <LItem>Hipertensão portal.</LItem>
          </List>
        </Subsection>
        <Subsection title="Alterações Hematológicas/coagulopatia">
          <List>
            <LItem>Diminuição do tempo de protrombina;</LItem>
            <LItem>Plaquetopenia;</LItem>
            <LItem>Anemia;</LItem>
            <LItem>Hemólise em alguns casos.</LItem>
          </List>
        </Subsection>
        <Subsection title="Alterações Metabólicas">
          <List>
            <LItem>Hipoglicemia;</LItem>
            <LItem>Hiponatremia dilucional;</LItem>
            <LItem>Hipoalbuminemia;</LItem>
            <LItem>Hiperpotassemia (se houver alterações renais graves).</LItem>
          </List>
        </Subsection>
        <Subsection title="Alterações Renais">
          <List>
            <LItem>
              Insuficiência renal pré-renal (síndrome hepatorrenal =
              vasoconstrição seletiva);
            </LItem>
            <LItem>Necrose tubular aguda.</LItem>
          </List>
        </Subsection>
        <Subsection title="Alterações Respiratórias">
          <List>
            <LItem>Pulmão de choque.</LItem>
          </List>
        </Subsection>
        <Subsection title="Hemorragias Gastrointestinais">
          <List>
            <LItem>Úlceras de estresse;</LItem>
            <LItem>Também pela coagulopatia.</LItem>
          </List>
        </Subsection>
        <Subsection title="Infecções Secundárias">
          <List>
            <LItem>Geralmente respiratórias e do trato urinário;</LItem>
            <LItem>
              Diagnóstico difícil, pois pode haver febre e leucocitose apenas
              por lesão hepatocelular;
            </LItem>
            <LItem>
              Principais agentes: estafilococos, estreptococos e bactérias
              gram-negativas;
            </LItem>
            <LItem>Principal causa de morte em hepatites complicadas.</LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Tratamento">
        <Subsubsection title="Recomendações habituais para Hepatites Virais">
          <List>
            <LItem>
              Fazer a notificação compulsória ou mobilizar a equipe de
              vigilância epidemiológica;
            </LItem>
            <LItem>
              Orientar dieta sem restrições para o paciente de ambulatório (o
              paciente faz sua própria restrição);
            </LItem>
            <LItem>Prescrever dieta hipograxa para pacientes internados;</LItem>
            <LItem>Precauções universais e isolamento de contato;</LItem>
            <LItem>
              Proibir compartilhamento de objetos de uso pessoal (copos,
              talheres e escovas de dente, por exemplo);
            </LItem>
            <LItem>
              Orientar higiene completa após usar o banheiro, com ênfase na
              lavagem das mãos;
            </LItem>
            <LItem>
              Orientar para dar descarga após usar o vaso sanitário e desinfetar
              com solução clorada concentrada (Lisoform®);
            </LItem>
            <LItem>
              Evitar freqüentar a escola por 10 a 14 dias após o início da
              icterícia (conforme o caso e considerando a idade isso pode ser
              revisto);
            </LItem>
            <LItem>
              Vigiar sinais precoces de encefalopatia: sonolência,
              irritabilidade, prostração intensa, delírios e distúrbios de
              comportamento;
            </LItem>
            <LItem>
              Evitar uso de drogas. Controlar a febre e dor com dipirona (o
              pacetamol é proibido);
            </LItem>
            <LItem>
              Condução das hepatites virais complicadas por insuficiência
              hepática.
            </LItem>
          </List>
        </Subsubsection>
        <Subsubsection title="Controle Hidroeletrolítico">
          <List>
            <LItem>Fazer restrição líquida moderada;</LItem>
            <LItem>
              Solicitar eletrólitos à internação e subsequentemente, conforme os
              resultados iniciais e a clínica do paciente;
            </LItem>
            <LItem>
              Vigiar e corrigir a hiponatremia dilucional quando indicado (se o
              sódio sérico for menor de 115 mEq/L).
            </LItem>
          </List>
        </Subsubsection>
        <Subsubsection title="Usar diuréticos se houver retenção hídrica (edema importante, ascite, anasarca)">
          <List>
            <LItem>
              Furosemida (Lasix) = 1mg/kg/dose EV (máximo 1 ampola = 20mg) a
              cada 12 horas inicialmente;
            </LItem>
            <LItem>
              Espironolactona (Aldactone) = 1 a 3 mg/kg/dia fracionados de 12/12
              horas, VO ou por sonda (retentor de potássio).
            </LItem>
          </List>
        </Subsubsection>
        <Subsection title="Controle de Glicemia">
          <List>
            <LItem>
              Na hidratação venosa utilizar solução de glicose a 10% de rotina;
            </LItem>
            <LItem>Dosar glicemia à internação;</LItem>
            <LItem>
              Fazer Dextrostix a cada 2 horas nos pacientes em coma;
            </LItem>
            <LItem>
              Fazer bolo de glicose a 25% com 2ml/kg em 5 minutos se detectada
              hipoglicemia grave;
            </LItem>
            <LItem>
              Manter uma taxa de infusão de glicose de 8 mg/kg/min, se preciso
              aumentando até 15; mg/kg/min (usar SG10% e 25%).
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Controle do Edema Cerebral e Hipertensão Intracraniana">
          <List>
            <LItem>Cabeceira elevada a 30 graus;</LItem>
            <LItem>
              Manitol como na rotina de meningites bacterianas (2g./kg) em 30
              minutos. Não usar em pacientes anúricos.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Controle da Produção e Reabsorção Enterohepática de Excretas Nitrogenados:">
          <List>
            <LItem>Dieta hipoprotéica;</LItem>
            <LItem>
              Lactulose = 0,5 ml/kg/dose. Nos pacientes em coma iniciar com 4
              doses/dia. Manter nos dias subsequentes o número de doses
              suficiente para obter-se em torno de 3-4 evacuações diárias;
            </LItem>
            <LItem>
              Considerar o uso enteral metronidazol para redução da flora
              bacteriana intestinal.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Controle de Coagulopatia">
          <List>
            <LItem>
              Fazer vitamina K de 5 a 10mg, IM (a via EV pode levar a
              hipotensão);
            </LItem>
            <LItem>Monitorar : tempo de protrombina e plaquetas;</LItem>
            <LItem>
              Plasma fresco se ocorrer sangramentos (10ml/kg em 2 horas –
              administrar diurético após).
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Condutas Gerais no Paciente com Hepatite Grave">
          <List>
            <LItem>
              Proteção contra sangramentos digestivos: fazer cimetidina 30 a
              40mg/kg/dia em 3 ou 4 doses;
            </LItem>
            <LItem>
              Vigiar a possibilidade de infecções secundárias, principal causa
              de letalidade. Fazer hemoculturas e outras culturas;
            </LItem>
            <LItem>
              Não utilizar benzodiazepínicos ou barbitúricos, os quais podem
              agravar o coma e levar ao óbito;
            </LItem>
            <LItem>
              Se necessário, em pacientes que fizeram uso de benzodiazepínicos e
              tiveram seu estado de consciência deprimido, usar antagonista =
              Flumazenil (Lanexat) 0,1mg diluído em soro glicosado a 5%, em
              infusão de 15 segundos. Essa dose poderá ser repetida a cada 60
              segundos até a recuperação da consciência (máximo 10 doses).
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Critérios de Alta">
          <List>
            <LItem>Paciente sem dores, náuseas ou vômitos;</LItem>
            <LItem>Desaparecimento dos sintomas de encefalopatia;</LItem>
            <LItem>TAP {'<'} 1,5.</LItem>
          </List>
        </Subsection>
        <Subsection title="Prognóstio e Orientações para o Seguimento">
          <Subsubsection title="Prognóstico">
            <List>
              <LItem>
                Sobrevida de adultos com insuficiência hepática nos Estados
                Unidos;
              </LItem>
              <LItem>Sem transplante 56,2%;</LItem>
              <LItem>O com transplante 96,3%.</LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Orientações de seguimento para pacientes que foram internados">
            <List>
              <LItem>Retorno na enfermaria em no máximo 7 dias;</LItem>
              <LItem>
                Repetir transaminases e bilirrubinas até sua completa
                normalização;
              </LItem>
              <LItem>
                Repetir demais exames que estivessem alterados no momento da
                alta;
              </LItem>
              <LItem>
                Encaminhar para o ambulatório para reavaliação clínica e ver
                resultado das sorologias;
              </LItem>
              <LItem>
                Acompanhar no ambulatório até 6 meses os casos em que não foi
                possível confirmar hepatite A.
              </LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Orientações de seguimento para pacientes atendidos no pronto-socorro, ambulatórios e outros serviços">
            <List>
              <LItem>
                Repetir transaminases e bilirrubinas até sua completa
                normalização;
              </LItem>
              <LItem>Repetir demais exames que estivessem alterados;</LItem>
              <LItem>
                Seguimento para reavaliação clínica e para ver resultado das
                sorologias;
              </LItem>
              <LItem>
                Acompanhar por até 6 meses os casos em que não foi possível
                confirmar hepatite A.
              </LItem>
            </List>
          </Subsubsection>
        </Subsection>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Azevedo RA, Farhat CK. Hepatites Virais. In: Farhat CK, Carvalho ES, Carvalho LH, Succi RC, editors. Infectologia Pediátrica. 2.ed. São Paulo: Atheneu; 1998. p.414-26."
        />
        <Reference
          idx={2}
          body="Gurgueira GL. Insuficiência Hepática Fulminante. In: Carvalho WB, Souza N, Souza RL, editors. Emergência e Terapia Intensiva Pediátrica. 1.ed. São Paulo: Atheneu; 1997. p.432-37."
        />
        <Reference
          idx={3}
          body="Andriolo A. Enzimas. In: Carrazza FR. Laboratório em Pediatria – Interpretação Clínica. 1.ed. São Paulo: Sarvier; 1989. p.61-4."
        />
        <Reference
          idx={4}
          body="Rosenthal P. Laboratory Evaluation of Hepatitis. Pediatrics in Review. 2000;21(5):178."
        />
        <Reference
          idx={5}
          body="Shah U. Liver failure attributable to hepatitis A virus infection in a developing country. Pediatrics. 2000; 105(2): 436-8."
        />
        <Reference
          idx={6}
          body="Krugman S, Katz SL, Gershon AA, Wilfert CM. Hepatites Virais. In: Doenças Infecciosas na Infância. 9.ed. Rio de Janeiro: Guanabara Koogan; 1994.p.88-107."
        />
        <Reference
          idx={7}
          body="Costa JC, Hirschheimer MR. Hipoglicemias. In: Hirschheimer MR, Matsumoto T, Carvalho WB, editors. Terapia Intensiva Pediátrica. 1.ed. Rio de Janeiro: Atheneu; 1989. p.447-59."
        />
        <Reference
          idx={8}
          body="Reuben A, Tillman H, Fontana RJ, et al. Outcomes in Adults With Acute Liver Failure Between 1998 and 2013: An Observational Cohort Study. Ann Intern Med 2016 Jun 7;164(11):724-32."
        />
        <Reference
          idx={9}
          body="Sokol RJ, Narkewicz MR, Sundaram SS, Mack CL, Hay JW, Levin MJ, et al. Liver and Pancreas.  Current Diagnosis and Treatment: Pediatrics, 24e. New York, NY: McGraw-Hill Education."
        />
        <Reference
          idx={10}
          body="Gluud LL, Vilstrup H, Morgan MY. Non-absorbable disaccharides versus placebo/no intervention and lactulose versus lactitol for the prevention and treatment of hepatic encephalopathy in people with cirrhosis. Cochrane Database of Systematic Reviews 2016, Issue 5. Art. No.: CD003044. DOI: 10.1002/14651858.CD003044.pub4."
        />
      </Section>
    </Routine>
  )
}
