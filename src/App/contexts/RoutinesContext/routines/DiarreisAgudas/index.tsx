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

export default function DiarreiasAgudas(): JSX.Element {
  return (
    <Routine
      id="diarreias-agudas"
      name="Diarréias Agudas"
      categories={['emergencia', 'gastroenterologia']}
      authors={['renato']}
      tags={['GECA', 'rotavirose', 'viral', 'desidratação']}
    >
      <Section title="Definição">
        <P>
          Ocorrência de três ou mais evacuações amolecidas ou líquidas nas
          últimas 24 horas, segundo a Organização Mundial de Saúde (OMS). Quando
          paciente em aleitamento materno exclusivo, pode apresentar este padrão
          sem que seja considerado diarreia.
        </P>
      </Section>
      <Section title="Classificação">
        <P>De acordo com a OMS pode ser classificada em categorias:</P>
        <List>
          <LItem>
            Diarréia Aguda Aquosa: pode durar até 14 dias (a maioria dos casos
            resolve-se em até 7 dias) e caracteriza-se por perda de grande
            volume de fluidos. Vírus são os principais causadores.
          </LItem>
          <LItem>
            Diarréia Persistente: quando a duração se estende por 14 dias ou
            mais, constituindo alto risco de complicações.
          </LItem>
          <LItem>
            Diarréia Crônica: quando a duração for superior a 30 dias ou
            ocorrência de três episódios característicos de diarreia no período
            de 60 dias.
          </LItem>
          <LItem>
            Diarréia Aguda com sangue (Disenteria): há lesão na mucosa
            intestinal e consequente presença de sangue nas fezes e/ou
            leucócitos nas fezes. Bactérias do gênero Shigella são as principais
            causadoras.
          </LItem>
        </List>
      </Section>
      <Section title="Etiologia">
        <P>
          A diarreia, na maior parte das vezes, representa uma infecção do tubo
          digestivo e tem evolução autolimitada. Nem sempre é possível
          identificar o agente causador. Pode ter origem não infecciosa (ex:
          alergias, medicamentos, intolerâncias e erros alimentares) ou
          infecciosa (vírus, bactérias, parasitos); é mais prevalente e
          impactante na saúde das crianças. Os vírus são os principais
          causadores de diarreia infecciosa, pois são altamente infectantes.
        </P>
        <P>
          Os principais agentes virais são: Rotavírus (mais prevalente e pico de
          incidência na faixa etária de 6 a 24 meses), Calicivírus (principal
          agente de surtos epidêmicos de gastroenterites virais, ocorrendo em
          todas as faixas etárias), Adenovírus e Astrovírus.
        </P>
        <P>
          Os principais agentes parasitários são{' '}
          <Italic>Giardia lamblia</Italic> e{' '}
          <Italic>Entamoeba histolytica</Italic> (diferencial com Shigella, pode
          complicar com abscesso hepático). O <Italic>Cryptosporidium</Italic> e
          a <Italic>Cyclospora</Italic> são agentes observados em crianças nos
          países em desenvolvimento e com frequência são assintomáticos.
        </P>
        <P>
          Os principais agentes bacterianos, dentre outros, são{' '}
          <Italic>Escherichia coli</Italic>, <Italic>Campylobacter spp</Italic>{' '}
          (associado à Síndrome de Guillain-Barré),{' '}
          <Italic>Clostridium difficile</Italic> (associada à Colite
          pseudomembranosa), <Italic>Salmonella</Italic> (Febre Tifoide e
          Salmonelose não tifoide), <Italic>Shigella</Italic> (dor abdominal
          intensa, febre alta, associada à Enterocolite, Síndrome
          Hemolítico-Urêmica), <Italic>Vibrio cholerae</Italic> (início abrupto,
          diarreia líquida, incolor, com grumos de muco, semelhante à “água de
          arroz”; vômitos) e <Italic>Yersinia</Italic> enterocolítica (associada
          à Enterocolite, Linfadenite mesentérica e inflamação do íleo).
        </P>
        <P>
          Obs: agentes etiológicos normalmente associados à desidratação:
          Rotavírus, <Italic>Escherichia coli</Italic> enterotoxigênica e{' '}
          <Italic>Vibrio cholerae</Italic> (durante epidemias).
        </P>
      </Section>
      <Section title="Transmissão">
        <P>
          Ocorre pela via fecal-oral (principalmente), pelo contato direto ou
          pela veiculação dos patógenos por meio de alimentos ou água.
        </P>
      </Section>
      <Section title="Diagnóstico">
        <P>O diagnóstico é eminentemente clínico</P>
        <Subsection title="Anamnese">
          <List>
            <LItem>Idade e indagar a respeito do peso da criança;</LItem>
            <LItem>
              Caracterização da diarreia: início, duração, número de episódios
              diários, se há presença de sangue, muco, restos alimentares;
            </LItem>
            <LItem>
              Presença de febre ou outras manifestações clínicas associadas;
            </LItem>
            <LItem>
              Informações sobre diurese (volume, cor e horário da última
              micção);
            </LItem>
            <LItem>
              Aceitação de líquidos e alimentos (tipo e quantidade);
            </LItem>
            <LItem>
              Práticas alimentares prévias e vigentes e se há associação com
              episódio de vômito;
            </LItem>
            <LItem>Outros casos de diarreia em domicílio ou escola;</LItem>
            <LItem>
              Uso de medicamentos (destaca-se uso recente de antibiótico);
            </LItem>
            <LItem>
              História de viagem recente, contato com pessoas com diarreia;
            </LItem>
            <LItem>Histórico de imunizações;</LItem>
            <LItem>Presença de doença de base.</LItem>
          </List>
        </Subsection>
        <Subsection title="Exame Físico">
          <P>
            Importante exame físico detalhado, principalmente em relação à
            desidratação, checagem do peso atual, palpação e percussão abdominal
            e exame/toque da região anal (avaliar presença de fissura quando
            relato de sangue, avaliar possibilidade de encoprese – acúmulo de
            fezes ressecadas no intestino pode provocar o vazamento de fezes
            amolecidas ao redor do acúmulo fecal).
          </P>
        </Subsection>
        <Subsection title="Exames Complementares">
          <P>
            A investigação da etiologia da DA não é obrigatória, todavia deve
            ser realizada nos menores de quatro meses, em pacientes
            imunodeprimidos, quando presença de sangue nas fezes e nos casos
            graves. Em todos esses casos, indica-se solicitar: hemograma
            (avaliar anemia e padrão leucocitário), hemocultura, eletrólitos
            (Na, K, Cl – avaliar distúrbios hidroeletrolíticos –), função renal,
            glicose e gasometria venosa (verificar acidose metabólica), vitamina
            A, zinco.
          </P>
          <P>
            Em indicações específicas, a coleta da função hepática, exame
            parasitológico de fezes, pesquisa de sangue oculto nas fezes,
            pesquisa de vírus nas fezes (Rotavírus nas fezes), leucócitos
            fecais, pH fecal, pesquisa de substâncias redutoras e gordura fecal,
            coprocultura, ELISA para vírus e pesquisa de toxina para{' '}
            <Italic>Clostridium</Italic> mostram-se importantes.
          </P>
          <P>
            Obs.: A ausência de leucócitos fecais não exclui a presença de
            bactéria invasiva, mas a sua presença indica inflamação e organismos
            que invadem a mucosa intestinal.
          </P>
        </Subsection>
      </Section>
      <Section title="Complicação">
        <P>
          A principal complicação da DA é a desidratação, que nos casos de maior
          gravidade pode levar ao distúrbio hidroeletrolítico e acidobásico,
          choque hipovolêmico e até a morte. Outras complicações são Dermatite
          da Área de Fraldas e SHU (tríade composta por Anemia Hemolítica
          Não-Imune, Trombocitopenia e Insuficiência Renal).
        </P>
      </Section>
      <Section title="Tratamento">
        <Subsection title="Alimentação">
          <P>O aleitamento materno deve sempre ser mantido e incentivado.</P>
          <P>
            A fórmula infantil ou preparação láctea oferecidas para crianças não
            devem ser diluídas.
          </P>
          <P>
            Na diarreia não há recomendação de fórmula sem lactose para
            lactentes tratados ambulatorialmente; entretanto, para os pacientes
            hospitalizados com DA e nos com DP tratados no hospital ou
            ambulatorialmente, há vantagens na prescrição de fórmula sem
            lactose.
          </P>
          <P>
            Para os pacientes com DP, que não respondem adequadamente à dieta
            sem lactose, deve ser prescrita dieta isenta de proteínas do leite
            de vaca (pode-se empregar fórmula hipoalergênica para sua
            substituição). No caso dos lactentes, fórmula com proteína
            extensamente hidrolisada ou fórmula de aminoácidos, dependendo da
            gravidade do paciente, podem ser prescritas.
          </P>
        </Subsection>
        <Subsection title="Terapia de Reidratação Oral (TRO)"></Subsection>
        <Subsection title="Zinco">
          <P>
            Deve ser usado em menores de 5 anos, durante 10 dias, uma única vez
            ao dia.
          </P>
          <Table
            colWidths={[150, 150]}
            header={['Idade', 'Dose (concentração 2mg/0,5ml)']}
            data={[
              ['Até 6 meses de idade', '10 mg/dia (2,5ml)'],
              ['Maiores de 6 meses de idade', '20 mg/dia (5ml)']
            ]}
          />
        </Subsection>
        <Subsection title="Probiótico">
          <P>
            Uso nas diarreias após uso de antibióticos (diminuição da
            incidência) e nos quadros de DA infecciosa. Não são recomendados
            para pacientes imunodeprimidos e na prevenção de diarreia.
          </P>
        </Subsection>
        <Subsection title="Antissecretório">
          <P>
            A Racecadotrila pode ser utilizada como coadjuvante no tratamento da
            DA. O tratamento deve ser interrompido assim que cessar a diarreia.
          </P>
          <Subsubsection title="Dose">
            <P>1,5mg/kg/dose, 3x/dia, VO, máximo de 400mg/dia</P>
          </Subsubsection>
          <Subsubsection title="Apresentações">
            <P>1,5mg/kg/dose, 3x/dia, VO, máximo de 400mg/dia</P>
            <List>
              <LItem>
                sachês 10mg (contraindicado para menores de 3 meses)
              </LItem>
              <LItem>
                {' '}
                sachês 30mg (contraindicado para menores de 3 anos)
              </LItem>
            </List>
          </Subsubsection>
          <Table
            colWidths={[150, 150, 150, 150]}
            header={[
              'Idade',
              '3 - 9 meses',
              '10 - 35 meses',
              '3 - 8 anos',
              '9 - 14 anos'
            ]}
            data={[
              [
                'Peso',
                'Menos de 9 Kg',
                '9 a 13 Kg',
                '14 a 27 Kg',
                'Mais de 27 Kg'
              ],
              ['Dose', '10mg', '20mg', '30mg', '60mg']
            ]}
          />
        </Subsection>
        <Subsection title="Antidiarreicas">
          <P>
            Não apresentam benefícios e, por isso, não devem ser indicados no
            tratamento da diarreia aguda.
          </P>
        </Subsection>
        <Subsection title="Vitamina A">
          <P>
            Deve ser administrada em populações com risco de deficiência desta
            vitamina (zonas mais carentes das regiões Norte e Nordeste do
            Brasil).
          </P>
        </Subsection>
        <Subsection title="Antibióticos">
          <P>
            Quando necessários, indica-se a coleta de amostra de fezes
            anteriormente para realização de coprocultura e antibiograma.
          </P>
          <P>
            O uso de antibióticos está indicado em lactentes menores de quatro
            meses, em pacientes imunodeprimidos, nos pacientes que apresentam
            Cólera ou Disenteria (associada à febre e comprometimento do estado
            geral), nos pacientes com Anemia Falciforme (alto índice de{' '}
            <Italic>Salmonella</Italic>), em crianças com sinais de disseminação
            bacteriana extraintestinal, e também na infecção aguda comprovada
            por <Italic>Entamoeba hystolitica</Italic> ou{' '}
            <Italic> Giardia lamblia</Italic>.
          </P>
          <P>
            Inicialmente, mesmo que não comprovada laboratorialmente, prevalece
            a hipótese de infecção por <Italic>Shigella</Italic>. Outros agentes
            como <Italic>Campylobacter</Italic>,{' '}
            <Italic> Clostridium difficile</Italic>,{' '}
            <Italic>Escherichia coli</Italic> enteroinvasiva,{' '}
            <Italic>Salmonella</Italic>, <Italic>Vibrium cholerae</Italic>{' '}
            necessitam tratamento com antibiótico quando causam casos graves.
          </P>
          <Subsubsection title="Shingella">
            <P>
              De acordo com a OMS devem ser prescritos, nos quadros
              disentéricos, considerando a possibilidade de infecção por{' '}
              <Italic>Shigella</Italic>:
            </P>
            <List>
              <LItem>
                Ciprofloxacino (primeira escolha)- Dose: 20 a 40mg/kg/dia,
                2x/dia, por 3 dias, VO; máximo 750mg/dose (1,5g/dia). Obs: no
                Brasil não existe a medicação na apresentação em suspensão ou
                solução para uso oral, o que dificulta seu uso em pacientes
                pediátricos.
              </LItem>
              <LItem>
                Azitromicina (segunda escolha) - Dose: 10 mg/kg/dia no primeiro
                dia, dose única; e 5 mg/kg/dia por mais 4 dias, dose única, VO,
                máximo 500mg/dia.
              </LItem>
              <LItem>
                Ceftriaxona (nos casos graves que requerem hospitalização) -
                Dose: 50 a 100mg/kg/dia, 1x/dia, por 3 - 5 dias, EV ou IM;
                máximo 2g/dose (4g/dia).
              </LItem>
              <LItem>
                Cefotaxima (nos casos graves que requerem hospitalização)- Dose:
                50 a 200mg/kg/dia, 3 - 4x/dia, por 3 - 5 dias, EV; máximo
                2g/dose (6g/dia).
              </LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Cryptosporidium parvum, Entamoeba hystolitica ou Giardia lamblia">
            <P>
              De acordo com a OMS devem ser prescritos, nos quadros
              disentéricos, considerando a possibilidade de infecção por{' '}
              <Italic>Cryptosporidium parvum</Italic>,{' '}
              <Italic>Entamoeba hystolitica</Italic>, ou{' '}
              <Italic>Giardia lamblia</Italic>:
            </P>
            <List>
              <LItem>
                Metronidazol ou análogos (Tinidazol ou Secnidazol) - Dose: 15 a
                30mg/kg/dia, 2 a 3x/dia, por 7 - 10 dias, VO; máximo 250mg/dose.
              </LItem>
            </List>
            <P>
              Obs: A Nitazoxanida é opção na diarreia causada por parasitos; e
              para redução da diarreia por Rotavírus, quando administrada
              precocemente.
            </P>
            <List>
              <LItem>
                Dose (suspensão): 0,375 ml/kg/dose, 2x/dia, 3 dias
                (contraindicado para menores de 1 ano).
              </LItem>
              <LItem>
                Dose (comprimido): 500mg, 2x/dia, 3 dias (contraindicado para
                menores de 12 anos).
              </LItem>
            </List>
            <P>
              O comprimido dever ser engolido por inteiro e próximo às
              refeições, o que garante uma elevada absorção do medicamento.
            </P>
          </Subsubsection>
          <Subsubsection title="Clostridium difficile">
            <P>
              De acordo com a OMS devem ser prescritos, nos quadros
              disentéricos, considerando a possibilidade de infecção por{' '}
              <Italic>Clostridium difficile</Italic>:
            </P>
            <List>
              <LItem>Metronidazol (vide acima)</LItem>
              <LItem>
                Vancomicina - Dose: 40 - 60mg/kg/dia, 3 - 4x/dia, EV; máximo
                (2g/dia).
              </LItem>
            </List>
            <P>
              Obs.: Infundir em 30 a 60 minutos. Se pouco diluída, causa dor e
              flebite. Reduzir a velocidade de infusão se ocorrer hiperemia de
              pele ou exantema. Não usar IM por ser irritante e dolorosa.
            </P>
            <P>
              Obs.: A Cólera deve ser tratada com Ciprofloxacino ou
              Azitromicina.
            </P>
            <P>
              Obs.: <Italic>Campylobacter</Italic> deve ser tratado com
              Ciprofloxacino ou Azitromicina.
            </P>
            <P>
              Obs.: <Italic>Escherichia coli</Italic> enteropatogênica,
              enterotoxigênica e invasiva devem ser tratadas com Ciprofloxacino
              ou Ceftriaxona.
            </P>
          </Subsubsection>
        </Subsection>
      </Section>
      <Section title="Prevenção">
        <P>
          O aleitamento materno exclusivo durante os 6 primeiros meses e após
          esta idade, acompanhado de alimentação complementar adequada, o uso de
          água tratada, de alimentos adequadamente preparados e acondicionados e
          esgotamento sanitário apropriado previnem a incidência de diarreia.
        </P>
      </Section>
      <Section title="Desidratação">
        <P>
          Desidratação é a contração do volume extracelular devido a perdas
          hidroeletrolíticas, e sua gravidade dependerá da proporção do déficit
          em relação às reservas corpóreas e da relação entre o déficit de água
          e de eletrólitos, sobretudo do sódio. Em razão da maior proporção de
          água corpórea em crianças menores, elas são mais suscetíveis ao Choque
          Hipovolêmico, principal causa de morte na criança por perdas de
          líquidos e eletrólitos.
        </P>
        <P>
          Diarreia e vômito ocasionam perda de água corporal e são as principais
          causas de desidratação.
        </P>
        <Subsection title="Exame Físico">
          <Table
            colWidths={[100, 100, 100, 100]}
            header={['Observar', 'A', 'B', 'C']}
            data={[
              [
                'Condição',
                'Bem alerta',
                'Irritado, tranquilo',
                'Comatoso, hipotônico'
              ],
              ['Olhos', 'Normais', 'Fundos', 'Muito fundos'],
              ['Lágrimas', 'Presentes', 'Ausentes', 'Ausentes'],
              ['Boca e língua', 'Úmidas', 'Secas', 'Muito secas'],
              [
                'Sede',
                'Bebe normalmente',
                'Sedento, bebe rápido e avidamente',
                'bebe mal ou não é capaz de beber'
              ]
            ]}
            title="Avaliação e Classificação do Quadro de Desidratação"
          />
          <Table
            colWidths={[125, 125, 150, 150]}
            header={['Examinar', 'A', 'B', 'C']}
            data={[
              [
                'Sinal de prega',
                'Desaparece rapidamente',
                'Desaparece lentamente',
                'Desaparece muito lentamente (mais de 2 segundos)'
              ],
              ['Pulso', 'Cheio', 'Rápido, débil', 'Muito débil ou ausente'],
              [
                'Enchimento capilar (1)',
                'Até 3 segundos',
                '3 a 5 segundos',
                'Mais de 5 segundos'
              ]
            ]}
            caption="Para avaliar o enchimento capilar, a mão da criança deve ser mantida fechada e comprimida por 15 segundos; posteriormente deve-se abrir a mão da criança e observar o tempo no qual a coloração da palma da mão volta ao normal."
          />
          <Table
            colWidths={[100, 150, 150, 150]}
            header={['', 'A', 'B', 'C']}
            data={[
              [
                'Conclusão',
                'Não tem desidratação OU há Desidratação Leve',
                'Se apresentar dois ou mais dos sinais descritos acima, há Desidratação Moderada',
                'Se apresentar dois ou mais dos sinais descritos, incluindo pelo menos um dos destacados, há Desidratação Grave'
              ]
            ]}
          />
          <Table
            colWidths={[100, 150, 150, 150]}
            header={['', 'A', 'B', 'C']}
            data={[['Perda Hídrica', 'Até 5%', '5% - 10%', 'Maior que 10%']]}
          />
          <Table
            colWidths={[100, 150, 150, 150]}
            header={['', 'A', 'B', 'C']}
            data={[
              [
                'Tratamento',
                'Plano A\nTratamento Domiciliar',
                'Plano B\n(TRO) na Unidade de Saúde',
                'Plano C\nTerapia de Reidratação Parenteral (TRP) na US'
              ]
            ]}
          />
        </Subsection>
        <Subsection title="Classificação de Desidratação de acordo com a Concentração de Sódio">
          <Subsubsection title="Desidratação Hiponatrêmica/Hipotônica">
            <P>É caracterizada por sódio sérico menor que 135mEq/L.</P>
            <P>
              A complicação mais temida da Hiponatremia é a Encefalopatia por
              Edema Cerebral (normalmente quando sódio {'<'} 125mEq/L, e
              manifesta-se por náusea, vômito e confusão mental, com
              possibilidade de apresentar convulsão, parada respiratória e edema
              pulmonar não cardiogênico).
            </P>
            <P>
              Quadro clínico: pouca sede, turgor e elasticidade da pele muito
              alterada, letargia, hipotonia, crises convulsivas e até coma.
            </P>
            <P>
              Tratamento: a Fase de Expansão é semelhante ao da Desidratação
              Isonatrêmica. A Hiponatremia pode dificultar a hidratação ou a sua
              manutenção, por isso, deve-se corrigí-la utilizando-se a fórmula:
            </P>
            <P>Na mEq = Peso x 0,6 x (Na desejado – Na encontrado)</P>
            <P>
              Obs.: O ideal nessa fórmula é usar um sódio esperado que seja
              apenas 6 ou 8 mEq/L acima do sódio encontrado (mais seguro) e no
              máximo, 12mEq/L em 24 horas ou 20mEq/L em 48 horas. O sódio final
              não deve ultrapassar 135mEq/L. A correção rápida da Hiponatremia
              pode levar à Mielinólise Pontina Central (tetraparesia,
              tetraplegia, insuficiência respiratória aguda, alteração aguda no
              estado mental com depressão da consciência, coma, podendo
              progredir para morte). Indica-se uso de NaCl 3% para correção:
              15mL de NaCl 20% + 85mL de Água Bidestilada.
            </P>
          </Subsubsection>
          <Subsubsection title="Desidratação Isonatrêmica/Isotônica">
            <P>
              É caracterizada por sódio sérico entre 135 a 145mEq/L. Tipo mais
              frequente de desidratação.
            </P>
          </Subsubsection>
          <Subsubsection title="Desidratação Hipernatrêmica/Hipertônica">
            <P>É caracterizada por sódio sérico maior que 145mEq/L.</P>
            <P>
              A correção deve ser feita de forma gradual para evitar uma queda
              brusca da natremia e consequente Edema Cerebral.
            </P>
            <P>
              Quadro clínico: sede intensa, mucosas muito secas, irritabilidade,
              hipertonia muscular (chegando a crises convulsivas com maior risco
              quando sódio maior que 165mEq/L), oligúria.
            </P>
            <P>
              Tratamento: inicialmente deve-se tratar a desidratação com volume
              (Fase Rápida / Etapa de Expansão) e posteriormente calcular o
              “Déficit de Água Livre” (DAL). O cálculo e o uso de soluções,
              varia conforme o valor do Na sérico encontrado:
            </P>
            <P>
              Se Na {'<'} 170mEq/L, indica-se uso de soro fisiológico (SF0,9%)
              ou Soro Glicofisiológico (1:1)
            </P>
            <P>DAL (litros) = Peso x 0,6 x [(Na mEq encontrado – 150) / 150]</P>
            <P>
              Se Na = ou {'>'}170mEq/L, indicasse uso de Soro Glicosado (SG)5%
            </P>
            <P>DAL (litros) = Peso x 0,6 x [(Na mEq encontrado – 170) / 170]</P>
            <P>
              Objetiva-se variar no máximo 12mEq/L/24 horas (limite de
              segurança).
            </P>
            <P>
              Obs.: Choque é uma situação clínica caracterizada por um estado
              fisiológico de redução da perfusão tecidual, em que o resultado
              final é o déficit agudo de oxigênio nas células. O desequilíbrio
              entre a oferta de nutrientes e a demanda metabólica dos tecidos
              resulta em um estado anaeróbico, com acúmulo de ácido láctico.
              Para tratamento, o paciente deve ser levado ao Box de Emergência
              onde será tomada todas as medidas para estabilização clínica e
              hidratação. É importante avaliar, durante o tratamento, se há
              sinais de sobrecarga hídrica (estertores à ausculta pulmonar,
              ritmo de galope e hepatomegalia) e outros sinais como presença de
              edema e turgência jugular.
            </P>
          </Subsubsection>
        </Subsection>
      </Section>
      <Section title="Hidratação">
        <P>
          Após ser estabelecido o diagnóstico de desidratação, deve-se seguir
          com o tratamento específico.
        </P>
        <P>
          Atentar para possibilidade de Hipoglicemia. Caso presente, deverá ser
          corrigida anteriormente à Hidratação.
        </P>
        <Subsection title="Plano A">
          <P>
            É indicada na Desidratação Leve. O tratamento é realizado no
            domicilio por Terapia de Reidratação Oral (TRO).
          </P>
          <List>
            <LItem>
              Oferecer ou ingerir mais líquido que o habitual para prevenir a
              desidratação;
            </LItem>
            <LItem>Manter a alimentação habitual;</LItem>
            <LItem>
              Se o paciente não melhorar em 2 dias ou se apresentar &quot;Sinal
              de Alarme&quot;, levar imediatamente a Unidade de Saúde (US);
            </LItem>
          </List>
          <Subsubsection title="Sinais de Alarme">
            <List>
              <LItem>Piora na diarréia;</LItem>
              <LItem>Muita sede;</LItem>
              <LItem>Recusa de alimentos e/ou líquidos;</LItem>
              <LItem>Vômitos repetidos;</LItem>
              <LItem>Diminuição da diurese;</LItem>
              <LItem>Piora do estado geral;</LItem>
              <LItem>Sangue nas fezes;</LItem>
              <LItem>Febre.</LItem>
            </List>
          </Subsubsection>
          <Table
            colWidths={[150, 250]}
            header={[
              'Idade',
              'Quantidade de líquidos que devem ser ingeridos após cada evacuação diarreica'
            ]}
            data={[
              ['Menores de 2 anos', '50 - 100 ml'],
              ['De 2 a 10', '100 - 200 ml'],
              ['Maiores de 10 anos', 'Quantidade que o paciente aceitar']
            ]}
          />
        </Subsection>
        <Subsection title="Plano B">
          <P>
            É indicada na Desidratação Moderada. O tratamento é realizado na US
            por TRO.
          </P>
          <P>
            Deve-se manter o aleitamento materno e suspender os outros alimentos
            (jejum apenas durante o período da TRO).
          </P>
          <Subsubsection title="Administrar Soro de Reidratação Oral">
            <List>
              <LItem>
                Realiza-se a reposição com 50 a 100ml/kg em 4 a 6 horas,
                oferecendo a SRO em pequenos volumes;
              </LItem>
              <LItem>
                A TRO deverá ser administrada continuamente, até que desapareçam
                os sinais de desidratação;
              </LItem>
              <LItem>
                Avalia-se o paciente pelo menos a cada hora, com base no
                desaparecimento dos sinais de hidratação. É importante
                considerar que a criança deve ser hidratada dentro de 6 horas.
              </LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Reidratação">
            <Bold>
              Durante a reidratação, reavaliar o paciente seguindo os
              sinais/sintomas indicados anteriormente:
            </Bold>
            <List>
              <LItem>
                Se desaparecerem os sinais de desidratação, utilize o PLANO A;
              </LItem>
              <LItem>
                Se agravo da desidratação, perda de peso após 2 horas de TRO ou
                dificuldade de ingestão de SRO - Sonda Nasogástrica
                (GASTRÓCLISE): 20ml/kg/hora por 4 a 6 horas. Se o abdômen ficar
                distendido, deve ser reduzida a velocidade de administração;
              </LItem>
              <LItem>
                Se o paciente evoluir para desidratação grave, seguir o PLANO C.
              </LItem>
            </List>
            <P>
              Obs: Os pacientes devem permanecer na US até a reidratação
              completa e reinício da alimentação.
            </P>
          </Subsubsection>
        </Subsection>
        <Subsection title="Plano C">
          <P>
            É indicado na Desidratação Grave. O tratamento é realizado na US por
            Terapia de Reidratação Parenteral (TRP) (Fase Rápida / Etapa de
            Expansão).
          </P>
          <P>
            Indicações para TRP: desidratação grave, falha na TRO por VO ou por
            Gastróclise, Choque Hipovolêmico, vômitos biliosos ou de difícil
            controle, contraindicação de hidratação oral (íleo paralítico,
            abdômen agudo, alteração do estado de consciência ou convulsões).
          </P>
          <P>
            Em geral, o paciente deve ser mantido na US até que tenha condições
            de se alimentar e receber líquidos por VO na quantidade adequada.
          </P>
          <Table
            colWidths={[150, 200, 150]}
            header={['Solução', 'Volume', 'Tempo de Administração']}
            data={[
              [
                'Soro fisiológico a 0,9%',
                '20ml/kg de peso. Repetir o volume até que a criança esteja hidratada.\n10ml/kg de peso se recém-nascidos e/ou cardiopata graves.',
                '30 minutos'
              ]
            ]}
            title="Fase Rápida (Expansão) - Menores de 5 anos"
          />
          <Table
            colWidths={[150, 150, 150]}
            header={['Solução', 'Volume', 'Tempo de Administração']}
            data={[
              ['1° Soro Fisiológico a 0,9%', '30 ml/kg', '30 minutos'],
              ['2° Ringer Lactato', '70 ml/kg', '2 horas e 30 minutos']
            ]}
            title="Fase Rápida (Expansão) - Maiores de 5 anos"
          />
          <Table
            colWidths={[150, 150, 150]}
            header={['Solução', 'Volume', 'Tempo de Administração']}
            data={[
              ['Soro Fisiológico a 0,9%', '30ml/kg de peso', '30 minutos'],
              ['Ringer Lactato', '70ml/kg de peso', '2 horas 30 minutos']
            ]}
            title="Fase Rápida (Expansão) - Maiores de 5 anos"
          />
          <P>
            Considera-se o paciente hidratado e pronto para a Fase de
            Manutenção/Reposição após duas micções claras e ausência de sinais
            clínicos de desidratação.
          </P>
        </Subsection>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Diarreia aguda. Diagnóstico e tratamento SBP, Guia prático de atualização nº1 março de 2017."
        />
        <Reference
          idx={2}
          body="Joseph W. St. Geme III MD, Richard E.Behrman MD. Gastroenterite aguda em crianças. Nelson Tratado de Pediatria 2014; 332:4558-93."
        />
        <Reference
          idx={3}
          body="Leão E. Diarreia aguda, desidratação e reidratação. Pediatria Ambulatorial 2013; 36:379-85. 37:386-90."
        />
      </Section>
    </Routine>
  )
}
