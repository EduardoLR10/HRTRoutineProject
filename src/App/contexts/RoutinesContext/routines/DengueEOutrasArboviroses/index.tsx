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

export default function DengueEOurasArboviroses(): JSX.Element {
  return (
    <Routine
      id="dengue"
      name="Dengue e Outras Arboviroses"
      categories={['infectologia']}
      authors={['marco']}
      tags={['hemorrágico', 'zika', 'chikungunya', 'febre', 'amarela']}
    >
      <Section title="Introdução">
        <List>
          <LItem>
            Arboviroses são doenças virais transmitidas por artrópodes e têm
            causado epidemias devastadoras e rapidamente progressivas com
            milhões de casos na última no Brasil na última década.
          </LItem>
          <LItem>
            A febre amarela é doença hemorrágica grave com 10% de letalidade,
            enquanto que a dengue e chikungunya também têm potencial para
            manifestações hemorrágicas graves, além do que a Zika causa
            importante teratogenia, especialmente microcefalia em bebês de mães
            doentes.
          </LItem>
        </List>
      </Section>
      <Section title="Etiologia">
        <P>
          Vírus RNA da família <Italic>Flaviviridae</Italic> (febre amarela,
          dengue e zika) e <Italic>Togaviridae</Italic> (Chikungunya – gênero{' '}
          <Italic>alphavirus</Italic>)
        </P>
      </Section>
      <Section title="Febre Amarela">
        <P>
          Doença aguda febril de curta duração (máximo 12 dias) e gravidade
          variável, potencialmente fatal (10%). As formas graves evoluem com
          insuficiência hepática e renal.
        </P>
        <P>
          É a mais famosa arbovirose, sendo uma zoonose endêmica, com epidemias
          esporádicas.
        </P>
        <Subsection title="Epidemologia">
          <List>
            <LItem>
              Possui duplo comportamento epidemiológico nas américas:
            </LItem>
            <List>
              <LItem>
                Febre amarela silvestre: macacos são o principal reservatório e
                os vetores são mosquitos dos gêneros <Italic>Haemagogus</Italic>{' '}
                e <Italic>Sabethes</Italic>; o ser humano não vacinado contrai a
                doença acidentalmente ao entrar na mata;
              </LItem>
              <LItem>
                Febre amarela urbana: o ciclo ocorre entre um ser humano e
                outro, sendo que o vetor principal é o{' '}
                <Italic>Aedes aegypti</Italic> e até 1942 existia como endemia
                no Brasil, com grande mortalidade.
              </LItem>
            </List>
            <LItem>
              Desde o início do século XX, é prevenível por vacina bastante
              efeitiva, segura e de baixo custo;
            </LItem>
            <LItem>
              Continua sendo um enorme problema de saúde pública pelo temor do
              retorno da forma urbana;
            </LItem>
            <LItem>Período de incubação: 3 a 6 dias;</LItem>
            <LItem>
              Período de incubação extrínseco (no vetor): 9 a 12 dias;
            </LItem>
            <LItem>
              Período de transmissibilidade: 1 dia antes da febre até o 4° dia
              de doença;
            </LItem>
            <LItem>
              Mais comum após a época das chuvas, no Brasil, no final do ano e
              início do ano seguinte
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Bases para o Diagnóstico">
          <Subsubsection title="Quadro Clínico">
            <List>
              <LItem>
                Quadro clínico nas formas anictéricas: febre, cefaleia, dor no
                corpo, dor muscular.
              </LItem>
              <LItem>Formas graves:</LItem>
              <List>
                <LItem>Febre hemorrágica;</LItem>
                <LItem>Hepatite grave;</LItem>
                <LItem>Insuficiência renal.</LItem>
              </List>
            </List>
          </Subsubsection>
          <Subsubsection title="Dados epidemiológicos compatíveis">
            <List>
              <LItem>Procedência de área epizoótica/enzoótica.</LItem>
              <LItem>Ausência de vacinação válida.</LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Demonstração da Infecção Viral">
            <List>
              <LItem>Isolamento viral/ PCR/ Imunohistoquímica.</LItem>
              <LItem>Anatomia patológica.</LItem>
              <LItem>Métodos sorológicos.</LItem>
            </List>
          </Subsubsection>
        </Subsection>
        <Subsection title="Tratamento">
          <List>
            <LItem>Controle hidroelétrolítico.</LItem>
            <LItem>Vitamina K.</LItem>
            <LItem>Diuréticos osmóticos.</LItem>
            <LItem>Terapia Intensiva.</LItem>
          </List>
        </Subsection>
        <Subsection title="Prevenção">
          <List>
            <LItem>Notificação compulsória.</LItem>
            <LItem>Vacinação: 1 dose é suficiente para toda a vida.</LItem>
            <LItem>Controle do vetor urbano.</LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Dengue, Chikungunya e Zika">
        <Subsection title="Epidemiologia">
          <P>
            Os vetores da dengue, chikungunya e zika são os mosquitos Aedes
            aegypti e Aedes albopictus, os quais possuem as seguintes
            características:
          </P>
          <List>
            <LItem>Amplamente disseminados no Brasil;</LItem>
            <LItem>Hábitos diurnos;</LItem>
            <LItem>Extremamente adaptado ao convívio doméstico;</LItem>
            <LItem>Reprodução depende de água limpa e parada;</LItem>
            <LItem>A fêmea contamina-se ao picar durante viremia;</LItem>
            <LItem>Após um intervalo de 8 a 14 dias torna-se infectante;</LItem>
            <LItem>O mosquito vive de 30 a 45 dias.</LItem>
          </List>
        </Subsection>
        <Subsection title="Fisiopatologia">
          <P>
            Componentes fisiopatológicos característicos dos PACIENTES GRAVES
            (dengue e chikungunya):
          </P>
          <Subsubsection title="Aumento da Permeabilidade Vascular">
            <List>
              <LItem>Perda de plasma para o interstício.</LItem>
              <LItem>Hemoconcentração.</LItem>
              <LItem>Coleções líquidas serosas.</LItem>
              <LItem>Choque.</LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Alterações Complexas da Hemostasia">
            <List>
              <LItem>Trombocitopenia.</LItem>
              <LItem>Coagulopatia.</LItem>
              <LItem>Fenômenos Hemorrágicos.</LItem>
            </List>
          </Subsubsection>
        </Subsection>
        <Subsection title="Quadro Clínico">
          <P>
            Embora diferentes, há muitas similaridades entre as arboviroses.
          </P>
          <Subsubsection title="Dengue Clássica">
            <List>
              <LItem>Contexto epidemiológico compatível;</LItem>
              <LItem>Febre;</LItem>
              <LItem>Cefaleia;</LItem>
              <LItem>Dor retro-orbital;</LItem>
              <LItem>Dores no corpo (mialgias e artralgias);</LItem>
              <LItem>Náuseas (e vômitos eventuais);</LItem>
              <LItem>Exantema róseo, fino, muito pruriginoso;</LItem>
              <LItem>Leucopenia e plaquetopenia;</LItem>
              <LItem>
                Indício de hemoconcentração moderada: elevação do hematócrito
                até 20% (por exemplo: Ht basal = 40%, chega até 48%).
              </LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Dengue Complicada">
            <List>
              <LItem>
                Início como o dengue clássico e demais sintomas após o 3° dia de
                febre;
              </LItem>
              <LItem>Súbita elevação da febre ({'>'} 39°, até 40°-41°);</LItem>
              <LItem>
                Dor abdominal (geralmente epigástrica ou no hipocôndio direito);
              </LItem>
              <LItem>Hepatomegalia de grau variável;</LItem>
              <LItem>Fenômenos hemorrágicos:</LItem>
              <List>
                <LItem>
                  Geralmente petéquias em extremidades, axilas, face e palato;
                </LItem>
                <LItem>Hemorragias conjuntivais;</LItem>
                <LItem>Gengivorragias e epistaxes (menos comuns).</LItem>
                <LItem>
                  Sangramento gastrointestinal nos casos fatais (gematêmese e
                  melena);
                </LItem>
                <LItem>
                  O teste do torniquete é pouco específico e pouco sensível para
                  diagnóstico de gravidade.
                </LItem>
              </List>
              <LItem>
                Trombocitopenia importante ({'<'} 100.000 plaquetas/mm³);
              </LItem>
              <LItem>
                Sinais de falência circulatória de vários graus (choque);
              </LItem>
              <LItem>Hemoconcentração grave:</LItem>
              <List>
                <LItem>
                  Elevação do hematócrito {'>'} 20% (por exemplo: Ht basal =
                  40%, ultrapassa 48%).
                </LItem>
              </List>
              <LItem>Derrames serosos (derrame pleural mais à direita).</LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Chikungunya">
            <P>
              Significa "andar curvado" na língua Makonde do sul na Tanzânia.
            </P>
            <List>
              <LItem>
                Intenso acomentimento articular (mais de uma articulação,
                simétric; o edema é comum, sem muitos outros sinais de
                inflamação);
              </LItem>
              <LItem>Seu quadro clínico se confunde com a dengue;</LItem>
              <LItem>Também pode ter choque e complicações;</LItem>
              <LItem>Pode tornar-se crônica na forma articular.</LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Zika">
            <List>
              <LItem>Exantemas intensos, menos pruriginosos;</LItem>
              <LItem>Febres mais brandas ou ausentes;</LItem>
              <LItem>Exames complementaes inespecíficos;</LItem>
              <LItem>Hiperemia ocular;</LItem>
              <LItem>Leucopenia é menos comum.</LItem>
            </List>
          </Subsubsection>
        </Subsection>
        <Subsection title="Exames Complementares">
          <Subsubsection title="Dengue">
            <List>
              <LItem>Sorologia padrão:</LItem>
              <List>
                <LItem>MAC-ELISA para detecção de IgM - feita no LACEN;</LItem>
                <LItem>
                  Pedir ápos o 7° dia (contando o primeiro dia como o dia do
                  início da febre).
                </LItem>
              </List>
              <LItem>Pesquisa de antígeno solúvel NS1:</LItem>
              <List>
                <LItem>
                  Pedir até o 5° dia (contando o primeiro dia como o dia do
                  início da febre);
                </LItem>
                <LItem>
                  Se o NS1 vier também com resultados de IgM e IgG (kit dengue
                  duo): questionar esta sorologia se for feita antes do 7° dia.
                  Mesmo se positiva, não confiar.
                </LItem>
              </List>
              <LItem>Isolamento viral/métodos genômicos:</LItem>
              <List>
                <LItem>Pedir para todo caso complicado;</LItem>
                <LItem>
                  Pedir ápos o 5° dia (contando o primeiro dia como o dia do
                  início da febre).
                </LItem>
              </List>
            </List>
          </Subsubsection>
          <Subsubsection title="Chikungunya e Zika">
            <P>Seguir o mesmo raciocínio da dengue.</P>
            <List>
              <LItem>
                Sorologias: pedir após o 7° dia (contando o 1° dia como o dia do
                início da febre);
              </LItem>
              <LItem>
                Isolamento viral/métodos genômicos: pedir até o 5° dia (contando
                o 1° dia como o dia do início da febre).
              </LItem>
            </List>
          </Subsubsection>
        </Subsection>
        <Subsection title="Condução de um caso de dengue">
          <Subsubsection title="Sequência de ações">
            <List>
              <LItem>
                1º{')'} Diagnosticar casos suspeitos (mesmo sem confirmação por
                exames específicos);
              </LItem>
              <LItem>2º{')'} Fazer a classificação de risco;</LItem>
              <LItem>3º{')'} Instituir condutas;</LItem>
              <LItem>4º{')'} Monitorar.</LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Classificação de risco na dengue">
            <P>
              Ao fazer a classificação de risco para estabelecer a conduta, os
              diagnosticados com dengue já deverão ter pelo menos um hemograma,
              TGO, TGP, ureia e creatinina.
            </P>
            <List>
              <LItem></LItem>
              <LItem>Grupo A:</LItem>
              <List>
                <LItem>Caso suspeito de dengue +;</LItem>
                <LItem>Ausência de sinais de alarme +;</LItem>
                <LItem>
                  Ausência de comorbidades ou não é grupo de risco, nem tem
                  condições clínicas especiais.
                </LItem>
              </List>
              <LItem>Grupo B:</LItem>
              <List>
                <LItem>Caso suspeito de dengue +;</LItem>
                <LItem>Ausência de sinais de alarme +;</LItem>
                <LItem>
                  Presença de pelo menos uma das situações a seguir:
                </LItem>
                <List>
                  <LItem>Sangramento espontâneo de pele (petéquias);</LItem>
                  <LItem>
                    Sangramento de pele (petéquias) induzido pela prova do laço;
                  </LItem>
                  <LItem>
                    Condições clínicas especiais: menores de 2 anos de idade,
                    crianças institucionalizadas, crianças de famílias
                    desestruturadas, indígenas.
                  </LItem>
                  <LItem>
                    Comorbidades: cardiopatas, encefalopatas, renais crônicos,
                    diabéticos, falcêmicos, doenças auto-imunes, portadores de
                    HI, outras doenças crônicas em atividade.
                  </LItem>
                </List>
              </List>
              <LItem>Grupo C:</LItem>
              <List>
                <LItem>Caso suspeito de dengue +;</LItem>
                <LItem>
                  Presença de pelo menos um dos seguintes sinais de alarme:
                </LItem>
                <List>
                  <LItem>
                    Dor abdominal intensa (referida ou à palpação) e contínua;
                  </LItem>
                  <LItem>Vômitos persistentes;</LItem>
                  <LItem>
                    Acúmulo de líquidos (ascite, derrame pleural, derrame
                    pericárdico);
                  </LItem>
                  <LItem>Hipotensão postural e/ou lipotimia;</LItem>
                  <LItem>
                    Hepatomegalia maior do que 2 cm abaixo do rebordo costal;
                  </LItem>
                  <LItem>Sangramento de mucosa;</LItem>
                  <LItem>Letargia e/ou irritabilidade;</LItem>
                  <LItem>Aumento progressivo do hematócrito.</LItem>
                </List>
              </List>
              <LItem>Grupo D:</LItem>
              <List>
                <LItem>Caso suspeito de dengue +;</LItem>
                <LItem>
                  Presença de sinais de choque, sangramento grave ou disfunção
                  orgânica grave:
                </LItem>
                <List>
                  <LItem>Taquicardia;</LItem>
                  <LItem>Extremidades distais frias;</LItem>
                  <LItem>Pulso fraco e filiforme;</LItem>
                  <LItem>Enchimento capilar lento (mais que 2 segundos);</LItem>
                  <LItem>
                    Pressão arterial convergente (menos de 20 mm Hg);
                  </LItem>
                  <LItem>Taquipneia;</LItem>
                  <LItem>Oligúria (menos de 1.5 ml/kg/h);</LItem>
                  <LItem>Hipotensão arterial (fase tardia do choque).</LItem>
                </List>
              </List>
            </List>
          </Subsubsection>
          <Subsubsection title="Condutas por Grupo de Risco:">
            <P>Grupo A:</P>
            <List>
              <LItem>
                Notificar (pegar ficha de notificação na internet - pesquisar o
                PDF no Google);
              </LItem>
              <LItem>
                Controlar a febre com dipirona (500 mg/ml), 1 gota/Kg, até o
                máximo de 40 gotas 6/6h;
              </LItem>
              <LItem>
                Não utilizar salicilatos ou outros anti-inflamatórios não
                esteroides;
              </LItem>
              <LItem>Preescrever hidratação oral:</LItem>
              <List>
                <LItem>Crianças até 10 kg: 130 ml/kg/dia;</LItem>
                <LItem>Crianças de 10 a 20 kg: 100 ml/kg/dia;</LItem>
                <LItem>Crianças acima de 20 kg: 80 ml/kg/dia.</LItem>
                <LItem>
                  Oferecer 1/3 na forma de soro de reidratação oral (SRO);
                </LItem>
                <List>
                  <LItem>
                    Oferecer 2/3 através da oferta de água, sucos e chás;
                  </LItem>
                  <LItem>
                    Nas primeiras 4 a 6 horas do atendimento ofertar de 1/3
                    deste volume;
                  </LItem>
                  <LItem>
                    Especificar em receita médica ou no cartão da dengue o
                    volume;
                  </LItem>
                  <LItem>
                    Manter a hidratação até 5 dias após o desaparecimento da
                    febre;
                  </LItem>
                </List>
                <LItem>
                  A alimentação não deve ser interrompida durante a hidratação;
                </LItem>
                <List>
                  <LItem>
                    O aleitamento materno deve ser mantido e estimulado.
                  </LItem>
                </List>
              </List>
              <LItem>Orientar repouso;</LItem>
              <LItem>
                Orientar por escrito retorno se houver sinais de alarme (cartão
                da dengue se disponível);
              </LItem>
              <LItem>
                Orientar Orientar a família para procurar e eliminar criadouros
                de Aedes no domícílio.
              </LItem>
            </List>

            <P>Grupo B:</P>
            <List>
              <LItem>Notificar e controlar a febre como no grupo A;</LItem>
              <LItem>
                Avaliar o grau de hemoconcentração por meio do hematócrito médio
                para idade;
              </LItem>
              <LItem>
                Em pacientes com hematócrito igual ou menor que o hematócrito
                médio para idade, pescrever a hidratação oral preconizada para o
                grupo A e liberar para o domicílio com retornos diários. Além
                disso:
              </LItem>
              <List>
                <LItem>
                  Orientar retorno no pronto-socorro no dia seguinte para novo
                  hemograma, reavaliação clínica e reclassificação diária;
                </LItem>
                <LItem>
                  Os retornos diários devem continuar até o dia seguinte ao
                  desaparecimento da febre.
                </LItem>
              </List>
              <LItem>
                Se houver hemoconcentração, isto é, se o hematócrito for maior
                que o hematócrito médio para a idade, proceder como no grupo C.
              </LItem>
            </List>

            <Table
              title="Grau de Hemoconcentração por meio do Hematócrito (Grupo B)"
              colWidths={[150, 75, 75, 75, 75, 75]}
              header={[
                'Idade',
                '3 meses',
                '6 meses',
                '1 a 2 anos',
                '5 anos',
                '10 anos'
              ]}
              data={[
                ['Hematócrito médio (%)', '37', '35', '36', '37', '40'],
                [
                  'Faixa de hematócrito 2 desvios padrões acima e abaixo da média (%)',
                  '33-41',
                  '31 a 39',
                  '32 - 40',
                  '33 a 42',
                  '36 a 44'
                ]
              ]}
              caption="Fonte: Fallace, R. Hemograma: manual de interpretação. 4ª ed. Porto Alegre, 2003. Apud Ministério da Saúde. Dengue: diagnóstico e manejo clínico: adulto e criança, 2016."
            />
            <P>Grupo C:</P>
            <List>
              <LItem>Internar;</LItem>
              <LItem>
                Notificar e controlar a febre como nos grupos anteriores;
              </LItem>
              <LItem>
                Controlar a febre com dipirona EV 0,05 ml/Kg até o máximo de 2
                ml, até 6 em 6 horas;
              </LItem>
              <LItem>
                Além dos exames complementares iniciais, solicitar RX de tórax
                para pesquisar derrame pleural (pacientes graves podem ter
                transudato que é resultado do extravasamento plasmático que leva
                aos diversos graus de hemoconcentração);
              </LItem>
              <LItem>
                Fazer hidratação venosa com soro fisiológico 20 ml/Kg em 1 hora;
              </LItem>
              <LItem>
                Repetir o hemograma pelo menos 1 vez ao dia e reavaliar a
                situação clínica pelo menos manhã, tarde e noite para vigiar
                sinais de choque (fazer hemograma diário enquanto estiver
                internado);
              </LItem>
              <LItem>
                Após a fase rápida, prescrever hidratação venosa de manutenção
                acrescentando 30% a mais de volume conforme a tabela abaixo.
                Nessa hidratação de manutenção, calcular a quantidade de sódio
                seguindo as orientações clássicas (5 ml de NaCl a 20% para cada
                500 ml de solução glicosada a 5%) em formulação hipotônica em
                vez de isotônica.
              </LItem>
            </List>
            <Table
              colWidths={[100, 150, 150]}
              header={[
                'Peso Corporal',
                'Volumes para crianças sem dengue',
                'Volume para crianças com dengue'
              ]}
              data={[
                ['Até 10 kg', '100 ml/kg', 'Acrescentar 30% a mais'],
                [
                  '11 - 20 kg',
                  '1000 ml + 50 ml/kg por Kg > 10 kg',
                  'Acrescentar 30% a mais'
                ],
                [
                  '> 20 kg',
                  '1500 ml + 20 ml/kg por Kg > 20 kg (máx 2400 ml/dia)',
                  'Acrescentar 30% a mais'
                ]
              ]}
            />
            <P>Grupo D:</P>
            <List>
              <LItem>Seguir as rotinas de choque hipovolêmico/séptico;</LItem>
              <LItem>Soliciatar vaga em UTI pediátrica;</LItem>
              <LItem>Monitorar e expandir enquanto aguarda vaga em UTI;</LItem>
              <LItem>
                Enquanto aguarda vaga em UTI, repetir o hemograma com intervalos
                curtos para avaliar a eficácia da expansão volumétrica por meio
                do grau de hemoconcentração refletido no hematócito.
              </LItem>
            </List>
          </Subsubsection>
        </Subsection>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Brasil. Ministério da Saúde. Dengue : diagnóstico e manejo clínico: adulto e criança. 5. ed. – Brasília : Ministério da Saúde, 2016."
        />
        <Reference
          idx={2}
          body="Singhi S, Kissoon N, Bansal A. Dengue e dengue hemorrágico: aspectos do manejo na unidade de terapia intensiva. J Pediatr (Rio J). 2007;83(2 Suppl):S22-35."
        />
        <Reference
          idx={3}
          body="Mourão MP, Alecrim WD, Albuquerque BC, Lacerda MV. Dengue. In: Lacerda, Marcus Vinícius Guimarães de - Manual de Rotinas da Fundação de Medicina Tropical do Amazonas/Marcus Vinícius Guimarães de Lacerda, Maria Paula Gomes Mourão, Antônio Magela Tavares. Manaus: Fundação de Medicina Tropical do Amazonas (FMT/IMT-AM), 2003."
        />
      </Section>
    </Routine>
  )
}
