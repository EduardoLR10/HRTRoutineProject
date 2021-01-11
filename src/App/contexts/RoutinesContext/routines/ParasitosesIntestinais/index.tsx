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

export default function ParasitosesIntestinais(): JSX.Element {
  return (
    <Routine
      id="parasitoses-intestinais"
      name="Parasitoses Intestinais"
      category="gastroenterologia"
      authors={['ana-luiza']}
      tags={['verminose']}
    >
      <Section title="Introdução">
        <P>
          Na maioria dos casos, a presença do parasita no tubo digestório do
          hospedeiro se dá de forma equilibrada, sem que ocorram sintomas de
          doença, O hospedeiro nesses casos é apenas portador. Essa é a situação
          mais comum porque geralmente há um equilíbrio entre as forças de ação
          do parasita e as forças de defesa do hospedeiro. Quando a ação do
          parasita supera as forças de defesa do hospedeiro, então se instala a
          doença parasitária, que se mostra por meio de manifestações gerais,
          inespecíficas ou com manifestações mais exuberantes, típicas da
          enteroparasitose em questão.
        </P>
      </Section>
      <Section title="Diagnóstico Clínico">
        <Subsection title="Fatores de Risco">
          <Subsubsection
            title={
              <>
                <Italic>Relacionados ao Parasita</Italic>
              </>
            }
          >
            <List>
              <LItem>
                Número de exemplares: nas infestações com numerosos parasitas,
                ocorre suboclusão intestinal por áscaris, síndrome de má
                absorção por giardíase, perda de sangue na tricuríase maciça e
                na ancilostomíase;
              </LItem>
              <LItem>
                Localização: colangite, pancreatite e apendicite induzidas pela
                localização do áscaris no colédoco ou no apêndice;
              </LItem>
              <LItem>
                Virulência: a <Italic>Entamoeba histolytica</Italic>{' '}
                propriamente dita, é a espécie com grande poder de invasão dos
                tecidos, enquanto a <Italic>Entamoeba dispar</Italic> é a
                espécie de <Italic>E. histolytica</Italic> não invasiva.
              </LItem>
            </List>
          </Subsubsection>
          <Subsubsection
            title={
              <>
                <Italic>Relacionados ao Meio Ambiente</Italic>
              </>
            }
          >
            <List>
              <LItem>
                Grau de contaminação do solo, água ou alimentos com ovos, larvas
                ou cistos de parasitas. A maior contaminação é favorecida por
                condições climáticas ou geológicas próprias, aglomerados
                humanos, deficiência de saneamento básico, higiene precária das
                pessoas e dos alimentos.
              </LItem>
            </List>
          </Subsubsection>
          <Subsubsection
            title={
              <>
                <Italic>Relacionados ao Hospedeiro</Italic>
              </>
            }
          >
            <List>
              <LItem>
                Desnutrição protéico-calórica: favorece formas invasivas na
                estrongiloidíase e crônicas na criptosporidíase;
              </LItem>
              <LItem>Carências nutricionais específicas;</LItem>
              <LItem>
                Imunodeficiência primária, secundária a outras doenças ou ao uso
                de drogas imunossupressoras: favorece infecções mais graves e
                crônicas, principalmente pelos protozoários e estrongiloides;
              </LItem>
              <LItem>
                Maus hábitos: andar descalço (estrongiloidíase, ancilostomíase),
                geofagia (ascaridíase, tricuríase), comer carnes cruas (teníase,
                difilobotríase).
              </LItem>
            </List>
          </Subsubsection>
        </Subsection>
      </Section>
      <Section title="Quadro Clínico">
        <Subsection title="Parasitoses Causadas por Helmitos">
          <Subsubsection title="Ascaridíase">
            <P>
              <Bold></Bold>
            </P>
            <P>
              <Bold>Etiologia:</Bold> <Italic>Ascaris lumbricoides</Italic>{' '}
              (conhecido vulgamente por "lombriga").
            </P>
            <P>
              <Bold>Forma de transmissão:</Bold> ingestão de ovos presentes no
              solo (hábito de levar mãos sujas à boca, geofagia,ingestão de água
              ou vegetais crus contaminados).
            </P>
            <P>
              <Bold>Sinais e Sintomas:</Bold> em geral não causa sintomatologia,
              mas pode manifestar-se por dor abdominal, diarreia, náuseas e
              anorexia. Quando há grande número de parasitas pode ocorrer quadro
              de obstrução intestinal. Em virtude do ciclo pulmonar da larva,
              alguns pacientes apresentam manifestações pulmonares com
              broncoespasmos, hemoptise e pneumonite, caracterizando a Síndrome
              de Loeffler, que cursa com eosinofilia importante.
            </P>
            <P>
              <Bold>Diagnóstico:</Bold> achado de ovos do parasita no exame
              parasitológico de fezes (EPF) em 3 amostras. Os melhores métodos
              para sedimentação de ovos nas fezes são os de Hoffman, Pons e
              Janner e de Kato-Katz.
            </P>
            <P>
              Em casos mais graves de Síndrome de Loeffler, a radiografia de
              tórax pode revelar um infiltrado parenquimatoso grosseiro e
              esparso. O diagnóstico é confirmado com o achado de larvas no
              aspirado gástrico ou pelo aparecimento de ovos nas fezes 2 ou 3
              meses depois do quadro pulmonar, caso a criança esteja com
              infestação primária.
            </P>
            <P>
              <Bold>Complicações:</Bold> a migração do áscaris pode causar
              quadros graves como:
            </P>
            <List>
              <LItem>Apendicite, por invasão do apêndice cecal;</LItem>
              <LItem>
                Pancreatite hemorrágica, por obstrução da ampola de Vater e
                ducto pancreático (Wirsung);
              </LItem>
              <LItem>
                Colestase e colangite, por obstrução da ampola de Vater e da
                árvore biliar;
              </LItem>
              <LItem>
                Abscesso hepático, pela subida dos vermes até o interior do
                parênquima hepático carreando bactérias;
              </LItem>
              <LItem>
                Asfixia, por obstrução de vias aéreas ou cânula traqueal.
              </LItem>
            </List>
            <P>
              <Bold>Tratamento:</Bold> é obrigatório mesmo nas infestações com
              pequeno número de parasitas. As drogas indicadas para tratamento
              estão listadas na tabela 1, com suas respectivas doses.
            </P>
            <P>
              No caso de suboclusão intestinal por áscaris, aplica-se o seguinte
              protocolo:
            </P>
            <List>
              <LItem>Internação;</LItem>
              <LItem>Jejum;</LItem>
              <LItem>
                Sonda nasogástrica (SNG) para descompressão gástrica e
                administração de medicamentos;
              </LItem>
              <LItem>Hidratação venosa;</LItem>
              <LItem>
                Óleo mineral via sonda 10 a 30 ml a cada 3 horas durante 24
                horas ou até que o óleo saia pelo ânus;
              </LItem>
              <LItem>
                Piperazina 75 mg a 100 mg;kg/dia, durante 5 dias (infelizmente
                pouco comercializada e indisponível nas farmácias);
              </LItem>
              <LItem>
                Tratamento cirúrgico quando ocorre oclusão intestinal total,
                necrose, perfuração ou vólvulo intestinal.
              </LItem>
            </List>
            <P>No caso de ascardíase biliar:</P>
            <List>
              <LItem>Hidratação venosa;</LItem>
              <LItem>
                Administração de antiespasmódicos, anti-helmínticos e
                antibióticos.
              </LItem>
            </List>
            <P>No caso de abscesso hepático: tratamento cirúrgico.</P>
            <P>
              <Bold>Controle de cura:</Bold> repetição do EPF um mês após o
              tratamento. Justifica-se repetir a administração do
              anti-helmíntico após 30 a 60 dias, já que é possível a presença de
              larvas e, fase pulmonar por ocasião do primeiro tratamento.
            </P>
          </Subsubsection>
          <Subsubsection title="Ancilostomíase">
            <P>
              <Bold>Etiologia:</Bold> <Italic>Acylostoma duodenale</Italic> e{' '}
              <Italic>Necator americanus</Italic>.
            </P>
            <P>
              <Bold>Forma de transmissão:</Bold> penetração de larvas
              infectantes na pele.
            </P>
            <P>
              <Bold>Sinais e Sintomas:</Bold> as manifestações em geral são
              ausentes, mas são possíveis os seguintes sintomas:
            </P>
            <List>
              <LItem>
                Dermatite larvária: prurido, eritema, edema, erupção
                papulovesicular durante até 2 semanas; mais frequente com
                espécie N. americanus;
              </LItem>
              <LItem>
                Pneumonite larvária: menos intensa do que na infecção por
                áscaris;
              </LItem>
              <LItem>
                Parasitismo intestinal: na fase aguda, podem ocorrer dor
                epigástrica, náuseas, vômitos, anorexia ou bulimia, flatulência
                ou diarreia; na fase crônica anemia hipocrômica e microcítica,
                anorexia, fraqueza, cefaléia, palpitações, sopro cardíaco,
                hipoproteinemia e edema por enteropatia perdedora de proteínas.
              </LItem>
            </List>
            <P>
              <Bold>Diagnóstico:</Bold> achado de ovos de ancilostomídeos no
              EPF. Por tratar-se de ovos leves, recomenda-se o uso de técnicas
              de flutuação, mas os métodos tradicionais podem ser utilizados.
            </P>
            <P>
              <Bold>Complicações:</Bold> anemia ferropriva e enteropatia
              perdedora de proteínas.
            </P>
            <P>
              <Bold>Tratamento:</Bold> as drogas indicadas para tratamento estão
              listadas na tabela 1, com suas respectivas doses.
            </P>
            <P>
              <Bold>Controle de Cura:</Bold> exames parasitológicos sucessivos
              no 7º, 14º e 21º dias após o tratamento.
            </P>
          </Subsubsection>
          <Subsubsection title="Estrongiloidíase">
            <P>
              <Bold>Etiologia:</Bold> <Italic>Strongyloides stercoralis</Italic>
              .
            </P>
            <P>
              <Bold>Forma de transmissão:</Bold> penetração através da pele de
              larvas infectantes no estágio terciário presente em solo
              contaminado. A auto-infecção do hospedeiro pode ocorrer. Também é
              transmitido pela via fecal-oral, por alimentos e água
              contaminados, e pelas fezes, por meio de atividade sexual
              envolvendo relação anal.
            </P>
            <P>
              <Bold>Sinais e Sintomas:</Bold> no local da penetração larvária
              pode ser observada uma dermatite com prurido. Os sintomas são
              variáveis e incluem diarreia, dor epigástrica, náuseas, mal-estar,
              perda de peso e, quando há envolvimento pulmonar, tosse,
              estertores e infiltrado pulmonar transitório.
            </P>
            <P>
              <Bold>Diagnóstico:</Bold> achado de larvas nas fezes pelo método
              de Baermann-Moares, ou Rugai modificado. O mesmo método pode ser
              adotado para o achado de larvas em material de tubagem duodenal,
              escarro ou lavado broncoalveolar.
            </P>
            <P>
              <Bold>Complicações:</Bold> há casos de hiperinfecção muito graves
              com disseminação para vários órgãos, com reação inflamatória local
              e formação de granulomas, especialmente em pacientes portadores de
              imunodepressão.
            </P>
            <P>
              <Bold>Tratamento:</Bold> as duas principais drogas indicadas são o
              tiabendazol por 2 ou 3 dias, e o cambendazol em dose única (Tabela
              1). O albendazol, em dose dobrada e durante 3 dias seguidos,
              possui eficácia inferior.
            </P>
            <P>
              Na estrongiloidíase disseminada, aplica-se antibioticoterapia
              contra gram-negativos, associada a tiabendazol durante 10 dias ou
              mais.
            </P>
          </Subsubsection>
          <Subsubsection title="Tricocefalíase ou Tricuríase">
            <P>
              <Bold>Etiologia:</Bold> <Italic>Trichocephalus trichiurus</Italic>{' '}
              ou <Italic>Trichuris trichiura</Italic>.
            </P>
            <P>
              <Bold>Forma de transmissão:</Bold> ingestão de ovos encontrados no
              solo, alimentos e mãos contaminados.
            </P>
            <P>
              <Bold>Sinais e Sintomas:</Bold> em geral, manifestações leves em
              infestação com poucos vermes. Na criança com infecção extensa,
              especialmente desnutrida, pode ocorrer a síndrome disentérica
              associada a diarreia grave com sangue e muco, presença de anemia e
              retardo do crescimento e desenvolvimento. Prolapso retal ocorre em
              alguns casos.
            </P>
            <P>
              <Bold>Diagnóstico:</Bold> achados de ovos nas fezes, pesquisados
              pelos métodos de Faust, Lutz ou Kato-Katz. Na tricuríase maciça, o
              diagnóstico é feito pela retossigmoidoscopia, que permite o
              reconhecimento de inúmeros vermes de 3 a 5 cm de comprimento,
              fixados a uma mucosa hiperemiada e friável.
            </P>
            <P>
              <Bold>Complicações:</Bold> pesquisas mostram boa recuperação de
              peso e estatura nas crianças com tricuríase maciça após tratamento
              específico.
            </P>
            <P>
              <Bold>Tratamento:</Bold> o oxipiriquantel é a droga de escolha,
              com até 90% de eficácia, mas dificilmente encontrada no mercado.
              Veja opções terapêuticas e dose na tabela 1.
            </P>
          </Subsubsection>
          <Subsubsection title="Enterobíase ou Oxiuríase">
            <P>
              <Bold>Etiologia:</Bold> <Italic>Enterobius vermicularis</Italic>{' '}
              ou <Italic>Oxiurus vermiculares</Italic>.
            </P>
            <P>
              <Bold>Forma de transmissão:</Bold> transmissão direta do ânus para
              a boca, principalmente por crianças e adultos sem cuidados de
              higiene e doentes mentais. Transmissão indireta também é possível,
              com a inalação de ovos presentes na poeira e utensílios
              domésticos. A retroinfecção é menos comum, e consiste na migração
              de larvas da região anal, por via ascendente, até os cólons e
              ceco.
            </P>
            <P>
              <Bold>Sinais e Sintomas:</Bold> sua principal característica é o
              prurido anal, mais frequente no período noturno, o que causa
              irritabilidade, sono intranquilo e desassossego. As lesões
              causadas pelo ato de coçar podem resultar em infecções secundárias
              em torno do ânus e pontos hemorrágicos. Outros sintomas: dor
              abdominal, vômitos, tenesmo.
            </P>
            <P>
              <Bold>Diagnóstico:</Bold> a tentativa de encontrar ovos de oxiúros
              em EPF é ocasionalmente infrutífera. O método de swab anal ou fita
              gomada é eficiente para o diagnóstico.
            </P>
            <P>
              <Bold>Complicações:</Bold> nas meninas, o verme pode migrar para a
              região genital, podendo ser encontrado na vulva, vagina e até na
              cavidade peritoneal. Causa intenso prurido vulvar, corrimento e
              até complicações anexiais. Há hipótese de ocorrer apendicite por
              enterobíase, mas não é usual e nem mesmo comprovado.
            </P>
            <P>
              <Bold>Tratamento:</Bold> há 3 medicamentos que atingem 90 a 100%
              de eficácia na eliminação deste parasita: mebendazol (inclusive em
              dose única de 100 mg), albendazol em dose única e pamoato de
              pirvínio em dose única (tabela 1).
            </P>
            <P>
              <Bold>Controle de Cura:</Bold> a recidiva é muito frequente,
              justificando uma boa orientação preventiva, como:
            </P>
            <List>
              <LItem>
                Tratar todos os familiares, especialmente as outras crianças;
              </LItem>
              <LItem>
                Impedir a contaminação dos dedos da criança com ovos (uso de
                macacão, unhas cortadas);
              </LItem>
              <LItem>Lavar o vestuário e roupas de cama;</LItem>
              <LItem>Repetir o medicamento após 15 a 20 dias.</LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Teníase">
            <P>
              <Bold>Etiologia:</Bold> <Italic>Taenia solium</Italic> (embrião
              parasita do porco) e <Italic>Taenia saginata</Italic> (embrião
              parasita do gado bovino).
            </P>
            <P>
              <Bold>Forma de transmissão:</Bold> ingestão de carne de boi ou de
              porco mal cozida que contém as larvas. Período de incubação de
              cerca de três meses da ingestão da larva.
            </P>
            <P>
              <Bold>Sinais e Sintomas:</Bold> náuseas, perda de peso, diarreia
              ou obstipação, e dores abdominais.
            </P>
            <P>
              <Bold>Diagnóstico:</Bold> achado de proglotes nas fezes, roupas
              íntimas ou lençóis. Pode-se utilizar o método de Faust ou outros,
              mas é aconselhado examinar várias amostras de fezes. O teste de
              swab anal pode ajudar no diagnóstico.
            </P>
            <P>
              <Bold>Complicações:</Bold> são raras, mas podem ocorrer suboclusão
              intestinal, apendicite, colangite ou pancreatite.
            </P>
            <P>
              <Bold>Tratamento:</Bold> niclosamida como 1ª escolha, em dose
              única (90% de cura), o praziquantel por 4 dias, mebendazol por 4
              dias em dose dobrada e a nitazoxanida (tabela 1).
            </P>
          </Subsubsection>
          <Subsubsection title="Himenolepíase">
            <P>
              <Bold>Etiologia:</Bold> <Italic>Hymenolepis nana</Italic>, e
              eventualmente <Italic>Hymenolepis diminuta</Italic>.
            </P>
            <P>
              <Bold>Forma de transmissão:</Bold> <Italic>H. nana</Italic>:
              ingestão de ovos do meio externo ou por autoinfestação a partir da
              liberação intraluminal de ovos. <Italic>H. diminuta</Italic>:
              ingestão acidental ou por deficientes mentais de artrópodos
              (pulgas, borboletas, besouros, baratas).
            </P>
            <P>
              <Bold>Sinais e Sintomas:</Bold> em geral assintomática, pelo
              pequeno número de parasitas. Em crianças com grande contaminação,
              desnutridas ou imunodeficientes, a autoinfestação se acelera e
              assim, se dá a hiperinfestação. Podem surgir sintomas gerais como
              cólicas abdominais e diarreia crônica.
            </P>
            <P>
              <Bold>Diagnóstico:</Bold> achado de ovos no EPF, por meio de
              técnicas de concentração de ovos.
            </P>
            <P>
              <Bold>Tratamento:</Bold> praziquantel, dose única (taxa de cura{' '}
              {'>'} 95%). Niclosamida também é efetiva, porém deve ser
              administrada em 5 doses (tabela 1).
            </P>
            <P>
              <Bold>Controle de Cura:</Bold> a autoinfestação promove a recidiva
              da parasitose, o que justifica repetir o tratamento após 20 a 30
              dias.
            </P>
          </Subsubsection>
          <Subsubsection title="Difilobotríase">
            <P>
              <Bold>Etiologia:</Bold> <Italic>Dyphyllobothrium latum</Italic>.
            </P>
            <P>
              <Bold>Forma de transmissão:</Bold> hábito de ingerir peixe
              defumado ou cru (sushi, sashimi, ceviche).
            </P>
            <P>
              <Bold>Sinais e Sintomas:</Bold> a maioria dos indivíduos
              parasitados não apresenta sintomas. As manifestações podem incluir
              diarreia recorrente, dor ou desconforto abdominal, perda de peso,
              e outros sintomas inespecíficos como fraqueza, emagrecimento e
              vertigem. Quando a infecção persiste por mais de 3 a 4 anos, pode
              haver anemia megoblástica, uma vez que os parasitas infestam o
              intestino delgado e são consumidores de vitamina B12. Quando em
              grande número, chegam a desencadear o quadro completo de anemia
              perniciosa.
            </P>
            <P>
              <Bold>Diagnóstico:</Bold> identificação de ovos ou proglotes nas
              fezes.
            </P>
            <P>
              <Bold>Complicações:</Bold> raramente podem provocar obstrução
              intestinal (infecções maciças).
            </P>
            <P>
              <Bold>Tratamento:</Bold> niclosamida ou praziquantel (tabela 1),
              associado à suplementação de vitamina B12 e ácido fólico.
            </P>
          </Subsubsection>
          <Subsubsection title="Esquistosssomose">
            <P>
              <Bold>Etiologia:</Bold> <Italic>Schistosoma mansoni</Italic>.
            </P>
            <P>
              <Bold>Forma de transmissão:</Bold> contato com cercárias em águas
              infectadas, denominadas “lagoas de coceira”.
            </P>
            <P>
              <Bold>Sinais e Sintomas:</Bold> a fase aguda pode ser
              assintomática ou apresentar-se como dermatite urticariforme com
              erupção papular, eritema, edema e prurido até 5 dias após a
              exposição. Cerca de 3 a 7 semanas depois, pode evoluir para a
              forma de esquistossomose aguda ou febre de Katayama, caracterizada
              por febre, anorexia, dor abdominal e cefaleia. Esses sintomas
              podem ser acompanhados por diarreia, náuseas ou vômitos, tosse
              seca e hepatomegalia. Nessa fase, o hemograma pode revelar intensa
              eosinofilia. Após 6 meses de infecção, a doença pode evoluir para
              a fase crônica, segundo as seguintes formas clínicas:
            </P>
            <List>
              <LItem>
                Intestinal: diarreia de repetição, com dor ou desconforto
                abdominal;
              </LItem>
              <LItem>Hepatointestinal: diarreia, hepatomegalia;</LItem>
              <LItem>
                Hepatoesplênica compensada: hepatoesplenomegalia, hipertensão
                portal com formação de varizes esofageanas;
              </LItem>
              <LItem>
                Hepatoesplênica descompensada: uma das formas mais graves, com
                fígado muito aumentado ou já retraído pela fibrose;
                esplenomegalia, ascite, varizes de esôfago, hematêmese, anemia,
                desnutrição e hiperesplenismo.
              </LItem>
            </List>
            <P>
              <Bold>Diagnóstico:</Bold> pelo quadro clínico-epidemiológico e
              exame parasitológico de fezes pelo método de Kato-Katz.
            </P>
            <P>
              <Bold>Tratamento:</Bold> utilizar o praziquantel como a droga de
              escolha. Outra opção é o oxamniquine (tabela 1).
            </P>
          </Subsubsection>
        </Subsection>
        <Subsection title="Parasitoses causadas por Protozoários">
          <Subsubsection title="Amebíase">
            <P>
              <Bold>Etiologia:</Bold> <Italic>Entamoeba histolytica</Italic>.
            </P>
            <P>
              <Bold>Forma de transmissão:</Bold> água contaminada e via
              fecal-oral (homem-homem) por cistos amebianos maduros. Os
              portadores assintomáticos que manipulam alimentos são importantes
              fontes de disseminação. O período de incubação varia de 2 a 4
              semanas.
            </P>
            <P>
              <Bold>Sinais e Sintomas:</Bold> o quadro clínico pode ser leve a
              moderado, caracterizado por desconforto abdominal até a presença
              de diarreia aguda intensa, com sangue e/ou muco, acompanhada de
              febre e calafrios. Nos casos graves, as formas trofozoítas se
              disseminam por meio da corrente sanguínea, podendo causar abscesso
              no fígado, nos pulmões ou no cérebro.
            </P>
            <P>
              <Bold>Diagnóstico:</Bold> identificação dos trofozoítos ou cistos
              nas fezes, em aspirados, raspados ou biópsias obtidas por
              endoscopia ou colonoscopia. A USG e a TC são úteis no diagnóstico
              de abscesso amebiano.
            </P>
            <P>
              <Bold>Complicações:</Bold> granulomas no intestino, abscesso
              hepático, pulmonar ou cerebral, empiema, pericardite e colite com
              perfuração.
            </P>
            <P>
              <Bold>Tratamento:</Bold> o tratamento das formas intestinais pode
              ser feito com secnidazol, metronidazol, tinidazol e nitazoxanida.
              Para as formas graves (amebíase intestinal intensa e amebíase
              extraintestinal), a primeira escolha é o metronidazol (tabela 2).
              No tratamento do abscesso hepático pode ser necessário a aspiração
              ou drenagem cirúrgica aberta.
            </P>
          </Subsubsection>
          <Subsubsection title="Balantidíase">
            <P>
              <Bold>Etiologia:</Bold> <Italic>Balantidium coll</Italic>.
            </P>
            <P>
              <Bold>Forma de transmissão:</Bold> ingestão de alimentos ou água
              contaminados com cistos.
            </P>
            <P>
              <Bold>Sinais e Sintomas:</Bold> a maioria dos casos é
              assintomática. As manifestações, quando presentes, incluem
              diarreia persistente, ocasionalmente disenteria, dor abdominal e
              perda de peso. A doença pode ser mais grave em pessoas com
              imunodeficiência.
            </P>
            <P>
              <Bold>Diagnóstico:</Bold> detecção de trofozoítos nas fezes ou em
              tecido coletado durante endoscopia.
            </P>
            <P>
              <Bold>Tratamento:</Bold> a droga de escolha é a tetraciclina, e
              para crianças menores de 8 anos, indica-se o metronidazol (tabela
              2).
            </P>
          </Subsubsection>
          <Subsubsection title="Giardíase">
            <P>
              <Bold>Etiologia:</Bold> <Italic>Giardia lamblia</Italic>.
            </P>
            <P>
              <Bold>Forma de transmissão:</Bold> via fecal-oral, especialmente
              por água contaminada.
            </P>
            <P>
              <Bold>Sinais e Sintomas:</Bold> a maioria é assintomática. Os
              pacientes podem apresentar diarreia aguda ou crônica, leve a
              grave, acompanhada por desconforto abdominal, cólicas, distensão
              abdominal, náuseas, vômitos e fadiga. O protozoário pode causar
              atapetamento da mucosa duodenal, atrofia vilositária em graus
              variados no intestino delgado, com má absorção de açúcares,
              gorduras e vitaminas A, D, E, K, B12, ácido fólico e ferro.
            </P>
            <P>
              <Bold>Diagnóstico:</Bold> achado de cistos no EPF, através do
              método de Faust, ou de trofozoítos quando as fezes são líquidas.
              Recomenda-se o exame de pelo menos 3 amostras de fezes, coletadas
              a intervalos de 3 a 4 dias.
            </P>
            <P>
              <Bold>Complicações:</Bold> nos casos de diarreia crônica
              esteatorreica, podem ocorrer: desnutrição proteico-energética,
              parada de crescimento, má absorção secundária de lactose,
              enteropatia perdedora de proteínas, edema, hipoproteinemia,
              deficiência de ferro, zinco, vitamina B12, ácido fólico, vitaminas
              A e E.
            </P>
            <P>
              <Bold>Tratamento:</Bold> os derivados nitroimidazólicos são as
              melhores opções para eliminação dessa infecção (tabela 2).
            </P>
          </Subsubsection>
          <Subsubsection title="Criptosporidiose">
            <P>
              <Bold>Etiologia:</Bold> <Italic>Cryptosporidium</Italic> sp.
            </P>
            <P>
              <Bold>Forma de transmissão:</Bold> ingestão de água ou alimentos
              contaminados com os oocistos. Apesar de ser um microrganismo
              oportunista, pode provocar também infecção em pessoas
              imunocompetentes.
            </P>
            <P>
              <Bold>Sinais e Sintomas:</Bold> assintomática na maioria dos
              infectados imunocompetentes. Pode ocorrer quadro de diarreia aguda
              aquosa, volumosa e autolimitada, com 3 a 12 dias de duração,
              quando os mecanismos imunológicos estão intactos. Nas pessoas
              imunodeprimidas por AIDS, neoplasias, hipogamaglobulinemia ou uso
              crônico de corticosteróides, ocorre diarreia grave, prolongada e
              recidivante. Essa diarreia pode cursar com síndrome de má absorção
              e grande perda de peso.
            </P>
            <P>
              <Bold>Diagnóstico:</Bold> identificação de oocistos nas fezes,
              pelos métodos de coloração de Ziehl-Neelsen e da carbolfuccina de
              Kinyoun. A biópsia de mucosa de intestino delgado, corada com
              hematoxilina-eosina, permite boa visualização destes protozoários,
              geralmente na borda em escova dos enterócitos.
            </P>
            <P>
              <Bold>Complicações:</Bold> colecistite, colangite, estenose de
              colédoco distal, hepatite ou pancreatite.
            </P>
            <P>
              <Bold>Tratamento:</Bold> medidas de suporte geral e reidratação
              são suficientes para os portadores de diarreia autolimitada. Em
              casos graves e para os pacientes imunodeprimidos deve-se indicar o
              tratamento medicamentoso (tabela 2).
            </P>
          </Subsubsection>
          <Subsubsection title="Isosporíase">
            <P>
              <Bold>Etiologia:</Bold> <Italic>Isospora belli</Italic>.
            </P>
            <P>
              <Bold>Forma de transmissão:</Bold> ingestão de oocistos na água e
              alimentos contaminados.
            </P>
            <P>
              <Bold>Sinais e Sintomas:</Bold> na maioria das vezes, a infecção é
              assintomática ou provoca diarreia autolimitada. Em portadores de
              imunodeficiência, o quadro é mais grave e arrastado, cursando com
              síndrome de má absorção. Pode determinar adenite mesentérica,
              invasão do baço e fígado e colecistite acalculosa.
            </P>
            <P>
              <Bold>Diagnóstico:</Bold> EPF, com as colorações especiais de
              Ziehl-Neelsen ou de Kinyoun modificados.
            </P>
            <P>
              <Bold>Tratamento:</Bold> permite ótimos resultados com
              sulfametoxazol-trimetoprim por 10 dias, seguido de mais 20 dias
              com dose única diária profilática (tabela 2).
            </P>
          </Subsubsection>
          <Subsubsection title="Microsporíase">
            <P>
              <Bold>Etiologia:</Bold> o grupo causador desta doença é
              representado por cerca de 14 microrganismos, e os mais descritos
              são: <Italic>Encephalitozoon intestinalis</Italic>,{' '}
              <Italic>Enterocystozoon bieneusi</Italic>,{' '}
              <Italic>Anncallia</Italic>, <Italic>Pleistophora</Italic>,{' '}
              <Italic>Trachipleistophora</Italic> e <Italic>Nosema</Italic> spp.
            </P>
            <P>
              <Bold>Forma de transmissão:</Bold> via feca-oral, com destaque
              para água contaminada, por meio da ingestão de esporos, que são
              disseminados para os tecidos como o fígado e rins.
            </P>
            <P>
              <Bold>Sinais e Sintomas:</Bold> diarreia, infecção da córnea,
              colecistite, hepatite, nefrite e peritonite, podendo evoluir para
              formas graves em pacientes com imunodepressão.
            </P>
            <P>
              <Bold>Diagnóstico:</Bold> microscopia e coloração pelo método
              tricrômico em fezes ou outras secreções humanas.
            </P>
            <P>
              <Bold>Tratamento:</Bold> em geral melhora os sintomas, mas nem
              sempre erradica os microrganismos. As drogas indicadas são
              albendazol e fumagilina, porém o E. bieneusi não responde a
              albendazol.
            </P>
          </Subsubsection>
          <Subsubsection title="Blastocistose">
            <P>
              <Bold>Etiologia:</Bold> <Italic>Blastocystis hominis</Italic>.
            </P>
            <P>
              <Bold>Forma de transmissão:</Bold> via fecal-oral por alimentos e
              água contaminados.
            </P>
            <P>
              <Bold>Sinais e Sintomas:</Bold> em imunodeprimidos pode causar
              doenças tanto do intestino delgado como do intestino grosso. As
              manifestações clínicas envolvem desde sintomas gastrointestinais
              inespecíficos, até um quadro de diarreia aguda e eventualmente
              crônica.
            </P>
            <P>
              <Bold>Diagnóstico:</Bold> identificação de cistos nas fezes.
            </P>
            <P>
              <Bold>Tratamento:</Bold> metronidazol, iodoquinol e nitazoxanida
              têm sido as opções mais empregadas nos casos que não são
              autolimitados.
            </P>
          </Subsubsection>
          <Subsubsection title="Ciclosporíase">
            <P>
              <Bold>Etiologia:</Bold> <Italic>Cyclospora cayetanensis</Italic>.
            </P>
            <P>
              <Bold>Forma de transmissão:</Bold> via fecal-oral por alimentos e
              água contaminados.
            </P>
            <P>
              <Bold>Sinais e Sintomas:</Bold> ocasiona processo inflamatório e
              atrofia vilositária no intestino delgado. Os sintomas de diarreia
              e má absorção intestinal podem ser graves nos imunodeprimidos, e
              por outro lado, leves e autolimitados ou ausentes em pessoas
              imunocompetentes.
            </P>
            <P>
              <Bold>Diagnóstico:</Bold> detecção de oocistos nas fezes por
              microscopia óptica, coloração de Ziehl-Neelsen ou da carbolfuccina
              de Kinyoun.
            </P>
            <P>
              <Bold>Tratamento:</Bold> sulfametoxazol-trimetoprim por 7 dias é
              considerado a droga de escolha.
            </P>
          </Subsubsection>
        </Subsection>
      </Section>
      <Section title="Tratamento">
        <Table
          colWidths={[150, 200, 200]}
          header={['Etiologia', 'Tratamento de Escolha', 'Outras Opções']}
          data={[
            [
              'Ascaridíase',
              'Albendazol 10mg/kg, dose única ou Mebendazol 100 mg 2x/dia, 3 dias',
              'Levamisol (dose única)\nCrianças < 8 anos: 40 mg\nCrianças > 8 anos: 80 mg'
            ],
            [
              'Ancilostomíase',
              'Mebendazol 100 mg 2x/dia, 3 dias',
              'Albendazol dose única (2 comprimidos de 200 mg ou 10ml de suspensão oral. 5ml=200mg)'
            ],
            [
              'Estrongilodíase',
              'Tiabendazol\n25mg/kg, 5 a 7 dias ou 50mg/kg, 2x/dia, 2 dias\nou\nCambendazol 5 mg/kg, dose única\nou\nAlbendazol 400 mg, 2x/dia, 2 dias',
              'Para pacientes imunodeprimidos ou com doença disseminada recomenda-se a associação: ivermectina 200 mcg/kg/dia, 2 dias + albendazol 400 mg, 2 dias, durante 7 dias '
            ],
            [
              'Tricocefalíase ou Tricuríase',
              'Albendazol:\n Quadro leve: 400 mg/dia, dose única\nQuadro moderado/grave: 400 mg/dia, durante 3 dias',
              'Mebendazol 100 mg, 2x/dia, por 3 dias'
            ],
            [
              'Enterobíase ou Oxiuríase',
              'Pamoato de pirvínio: 10 mg/kg dose única\nRecomenda-se repetir o tratamento após 2 semanas',
              'Mebendazol 100mg, dose única\nAlbendazol 400 mg, dose única'
            ],
            [
              'Teníase',
              'Niclosamida, dose única\n<35 kg: 1g (em jejum)\n>35kg: 2g',
              'Praziquantel 20mg/kg, 1x/dia, 4 dias\nMebendazol 200 mg, 2x/dia, 4 dias\nNitazoxanida 7,5mg/kg, 2x/dia, 3 dias'
            ],
            [
              'Himenolepíase',
              'Praziquantel 20 mg/kg, dose única',
              'Niclosamida, 1x/dia, 5 dias\n<35 kg: 1g\n>35kg: 2g'
            ],
            [
              'Difilobotríase',
              'Praziquantel 10 a 20 mg/kg, dose única',
              'Niclosamida, dose única\n<35 kg: 1g\n>35kg: 2g'
            ],
            [
              'Esquistossomose',
              'Praziquantel\nCrianças ≥ 2 anos: 60 mg/kg, dose única\nAdultos: 50 mg/kg, dose única',
              'Oxamniquine\nCrianças > 2 anos: 20 mg/kg, dose única\nAdultos: 15 mg/kg, dose única'
            ]
          ]}
          title="Tabela 1. Tratamento dos parasitoses causadas por Helmintos."
        />
        <Table
          colWidths={[125, 200, 200]}
          header={['Etiologia', 'Tratamento de Escolha', 'Outras Opções']}
          data={[
            [
              'Amebíase',
              'Forma intestinal\nSecnidazol 30 mg/kg/dia, dose única (dose máxima 2g/dia)\nEvitar uso no 1º trimestre de gestação e durante amamentação\n\nFormas graves intestinais ou extraintestinais (abscesso hepático)\nMetronidazol 50mg/kg/dia, 8/8h, 10 dias',
              'Metronidazol 35 mg/kg/dia, 8/8h, 5 dias\nou\nTinidazol 50 mg/kg/dia, após refeição, 2 dias\nou\nNitazoxanida 7,5mg/kg, 2x/dia, 3 dias\n\n\nTinidazol 50 mg/kg/dia, após refeição, 3 dias'
            ],
            [
              'Balantidíase',
              'Crianças < 8 anos\nMetronidazol 35 a 50 mg/kg/dia, 8/8h, 5 dias\nCrianças > 8 anos\nTetraciclina 40 mg/kg/dia, 6/6h, 10 dias',
              ''
            ],
            [
              'Giardíase',
              'Secnidazol 30 mg/kg/dia, após refeição, dose única\nou\nMetronidazol 15 mg/kg/dia, 8/8h, 5 a 7 dias',
              'Nitazoxanida 7,5mg/kg, 2x/dia, 3 dias\nou\nTinidazol 50 mg/kg/dia, dose única'
            ],
            [
              'Criptosporidiose',
              'Crianças Imunocompetentes\nNitazoxanida\nCriança 1 a 3 anos: 100 mg, 12/12h, 3 dias\nCriança 4 a 11 anos: 200 mg. 12/12h, 3 dias\nCriança > 12 anos: 500 mg, 12/12h, 3 dias',
              'Para crianças com HIV/aids e outras imunodeficiências\nNitazoxanida (conforme esquema apresentado) + Azitromicina 10 mg/kg no 1º dia e 5 mg/kg do 2º ao 10º dia'
            ],
            [
              'Isosporíase',
              'Sulfametoxazol-trimetoprim\nSMX 25 mg/kg, TMP 5 mg/kg, 12/12h, 10 dias',
              ''
            ],
            [
              'Microsporíase',
              'E. intestinalis: Albendazol 15 mg/kg/dia, 12/12h, 21 dias\nE. bieneusi: Fumagilina 20 mg, 8/8h, 14 dias',
              'A dose de fumagilina é a indicada para adultos. Efeitos adversos: neutropenia e plaquetopenia.'
            ],
            [
              'Blastocistose',
              'Metronidazol 35 a 50 mg/kg/dia, 8/8h, 5 dias',
              'Iodoquinol 30 a 40 mg/kg/dia, 8/8h, 20 dias\nNitazoxanida 7,5mg/kg, 2x/dia, 3 dias'
            ],
            [
              'Ciclosporíase',
              'Sulfametoxazol-trimetoprim\nSMX 25 mg/kg, TMP 5 mg/kg, 12/12h, 10 dias',
              'Nitazoxanida 7,5mg/kg, 2x/dia, 3 dias'
            ]
          ]}
          title="Tabela 2. Tratamento das parasitores causadas por Protozoários"
        />
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Marques HHS, Sakane PT e Baldacci ER.Infectologia/Coleção Pediatria Instituto da Criança Hospital das Clínicas).  Barueri, SP: Manole, 2011. "
        />
        <Reference
          idx={2}
          body="Carvalho E, Ferreira CT, Silva LR. Gastroenterologia e nutrição em pediatria. Barueri, SP: Manole, 2012."
        />
      </Section>
    </Routine>
  )
}
