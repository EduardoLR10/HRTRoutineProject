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
      categories={['emergencia']}
      authors={['sergio']}
      tags={['GECA', 'rotavirose', 'viral', 'desidratação']}
    >
      <Section title="Definição">
        <P>
          Ocorrência de três ou mais evacuações amolecidas ou líquidas nas
          últimas 24 horas.
        </P>
      </Section>
      <Section title="Classificação">
        <P>De acordo com a OMS pode ser classificada em três categorias:</P>
        <List>
          <LItem>
            Diarréia aguda aquosa: diarreia que pode durar até 14 dias e
            determina perda de grande volume de fluídos e pode causar
            desidratação. Na maioria dos casos causada por vírus e bactérias.
          </LItem>
          <LItem>
            Diarréia aguda com sangue (disenteria): caracterizada pela presença
            de sangue nas fezes. Representa lesão na mucosa intestinal.
            Principal causador bactérias do gênero <Italic>Shigella</Italic>.
          </LItem>
          <LItem>
            Diarréia persistente: quando a diarreia aguda se estende por 14 dias
            ou mais. Pode provocar desnutrição e desidratação. Constituem um
            grupo com alto risco de complicações e elevada mortalidade.
          </LItem>
        </List>
      </Section>
      <Section title="Fatores de Risco">
        <P>
          Tenra idade, deficiência imunológica, sarampo, desnutrição, ausência
          de aleitamento materno, deficiência de vitamina A e zinco.
        </P>
      </Section>
      <Section title="Características da Diarréia Aguda">
        <P>
          Início abrupto, geralmente infeccioso, autolimitado, aumento no volume
          e/ou frequência da evacuação, com perda de água e eletrólitos.
        </P>
        <P>CAUSAS:</P>
        <List>
          <LItem>
            <Bold>Vírus</Bold> - Rotavírus, coronavírus, adenovírus,calicivírus,
            astrovírus.
          </LItem>
          <LItem>
            <Bold>Bactérias</Bold> - E coli enteropatogênica, clássica,
            enterotoxigênica, enterohemorrágica, enteroinvasiva,{' '}
            <Italic>Salmonella</Italic>,<Italic>Shigella</Italic>, etc.
          </LItem>
          <LItem>
            <Bold>Parasitos</Bold> - <Italic>Entamoeba histolytica</Italic>,{' '}
            <Italic>Giardia lamblia</Italic>, Isospora,{' '}
            <Italic>Criptospodium</Italic>.
          </LItem>
          <LItem>
            <Bold>Fungos</Bold> - <Italic>Candida albicans</Italic>.
          </LItem>
          <LItem>
            <Bold>Alimentares</Bold> - APLV, deficiência de lactase, uso de
            laxantes, antibióticos, etc.
          </LItem>
        </List>
      </Section>
      <Section title="Avaliação Clínica">
        <List>
          <LItem>Perda de peso {'<'} 5% = desidratação leve.</LItem>
          <LItem>Perda de peso 5% a 10% = desidratação moderada.</LItem>
          <LItem>Perda de peso {'>'} 10% = desidratação grave.</LItem>
        </List>
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
          title="Avaliação do Estado de Hidratação para Crianças com doença Diarréia"
        />
        <Table
          colWidths={[125, 125, 150, 150]}
          header={['Examinar', 'A', 'B', 'C']}
          data={[
            [
              'Sinal de prega',
              'Desaparece rapidamente',
              'Desaparece lentamente',
              'Desaparece muito lentamente (mais de dois segundos)'
            ],
            ['Pulso', 'Cheio', 'Rápido, débil', 'Muito débil ou ausente'],
            [
              'Enchimento capilar',
              'Normal (até 3 segundos)',
              'Prejudicado (3 a 5 segundos)',
              'Muito prejudicado (mais de 5 segundos)'
            ]
          ]}
        />
        <Table
          colWidths={[100, 150, 150, 150]}
          header={['', 'A', 'B', 'C']}
          data={[
            [
              'Conclusão',
              'Não tem desidratação',
              'Se apresentar dois ou mais dos sinais descritos acima, existe desidratação',
              'Se apresentar dois ou mais dos sinai descritos, incluindo pelo menos um dos assinalados com *, existe uma desidratação grave'
            ]
          ]}
        />
        <Table
          colWidths={[100, 150, 150, 150]}
          header={['', 'A', 'B', 'C']}
          data={[
            [
              'Tratamento',
              'Plano A\nTratamento Domiciliar',
              'Plano B\nTerapia de reidratação oral no serviço de saúde',
              'Plano C\nTerapia de reidratação parenteral'
            ]
          ]}
        />
      </Section>
      <Section title="Tratamento">
        <Subsection title="Plano A">
          <P>Prevenção da desidratação no domicílio.</P>
          <P>Explique ao paciente ou acompanhante para fazer no domicílio:</P>
          <Subsubsection title="Oferecer ou ingerir mais líquido que o habitual para prevenir a desidratação">
            <P>
              O paciente deve tomar líquidos caseiros (água de arroz, soro
              caseiro, chá, suco e sopas) ou solução de reidratação oral (SRO)
              após cada evacuação diarreica;
            </P>
            <P>Não utilizar refrigerantes e não adoçar o chá ou suco;</P>
          </Subsubsection>
          <Subsubsection title="Manter a alimentação habitual para prevenir a desnutrição">
            <P>Continuar o aleitamento materno.</P>
            <P>Manter a alimentação habitual para as crianças e os adultos.</P>
          </Subsubsection>
          <Text style={{ fontWeight: 'bold' }}>
            Se o paciente não melhorar em dois dias ou se apresentar qualquer um
            dos sinais abaixo, levá-lo imediatamente ao serviço de saúde:
          </Text>
          <Table
            colWidths={[150, 150]}
            header={['Sinais de Perigo', '']}
            data={[
              ['Piora na diarréia', 'Recusa de alimentos'],
              ['Vômitos repetidos', 'Sangue nas fezes'],
              ['Muita sede', 'Diminuição na diurese']
            ]}
          />
          <Subsubsection title="Orientar o paciente ou acompanhante">
            <P>Reconhecer os sinais de desidratação.</P>
            <P>Preparar e administrar a solução de reidratação oral.</P>
            <P>
              Praticar medidas de higiene pessoal e domiciliar (lavagem adequada
              das mãos, tratamento da água e higienização dos alimentos).
            </P>
          </Subsubsection>
          <Subsubsection title="Administrar zinco uma vez ao di, durante 10 a 14 dias">
            <P>Até seis meses de idade: 10 mg/dia.</P>
            <P>Maiores de seis meses de idade: 20 mg/dia.</P>
            <Table
              colWidths={[150, 250]}
              header={[
                'Idade',
                'Quantidade de líquidos que devem ser administrados/ingeridos após cada evacuação diarreica'
              ]}
              data={[
                ['Menores', '50 - 100 ml'],
                ['De 1 a 10', '100 - 200 ml'],
                ['Maiores de 10 anos', 'Quantidade que o paciente aceitar']
              ]}
            />
          </Subsubsection>
        </Subsection>
        <Subsection title="Plano B">
          <P>Para evitar a desidratação por via oral na unidade de saúde.</P>
          <Subsubsection title="Administrar solução de reidratação oral (SRO)">
            <P>
              A quantidade de solução ingerida dependerá da sede do paciente.
            </P>
            <P>
              A SRO deverá ser administrada continuamente, até que desapareçam
              os sinais de desidratação.
            </P>
            <P>
              Apenas como orientação inicial, o paciente deverá receber de 50 a
              100 ml/kg para ser administrado no período de 4-6 horas.
            </P>
            <Bold>
              Durante a reidratação reavaliar o paciente seguindo os sinais
              indicados no quadro de avaliação do estado de hidratação.
            </Bold>
            <P>
              Se desaparecerem os sinais de desidratação, utilize o PLANO A.
            </P>
            <P>
              Se continuar desidratado, indicar a sonda nasogástrica
              (gastróclise).
            </P>
            <P>
              Se o paciente evoluir para desidratação grave, seguir o PLANO C.
            </P>
            <Bold>
              Durante a permanência do paciente ou acompanhante no serviço de
              saúde, orientar a:
            </Bold>
            <List>
              <LItem>Reconhecer os sinais de desidratação;</LItem>
              <LItem>
                Preparar e administrar a Solução de Reidratação Oral;
              </LItem>
              <LItem>
                Praticar medidas de higiene pessoal e domiciliar (lavagem
                adequada das mãos, tratamento da água e higienização dos
                alimentos).
              </LItem>
            </List>
          </Subsubsection>
          <P>O Plano B deve ser realizado na unidade de saúde.</P>
          <P>
            Os pacientes deverão permanecer na unidade de saúde até a
            reidratação completa e reinício da alimentação.
          </P>
        </Subsection>
        <Subsection title="Plano C">
          <P>Para tratar a desidratação grave na unidade hospitalar.</P>
          <P>
            O plano C contempla duas fases para todas as faixas etárias: a fase
            rápida e a fase de manutenção e reposição.
          </P>
          <Table
            colWidths={[150, 200, 150]}
            header={['Solução', 'Volume', 'Tempo de Administração']}
            data={[
              [
                'Soro fisiológico a 0,9%',
                'Iniciar com 10 ml/kg de peso. Repetir esse quantidade até que a criança esteja hidratada, reavaliando os sinais clínicos após cada fase de expansão administrada.\nPara recém-nascidos e cardiopatas graves começar com 10 ml/kg de peso.',
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
            header={['Solução', 'Volume em 24 Horas', '']}
            data={[
              [
                'Soro Glicosado a 5% + Soro Fisiológico a 0,9% na proporção de 4:1 (manutenção)',
                'Peso até 10 kg\n\nPeso de 10 a 20kg\n\n\n\nPeso acima de 20kg',
                '100 ml/kg\n\n1000 ml + 50 ml/kg de peso que exceder 10kg\n\n1500 ml + 20 ml/kg de peso que exceder 20 kg'
              ],
              [
                'Soro Glicosado a 5% + Soro Fisiológico a 0,9% na proporção de 1:1 (reposição)\n\nKCl a 10%',
                '\nIniciar com 50 ml/kg/dia. Reavaliar esta quantidade de acordo com as perdas do paciente\n\n2 ml para cada 100 ml de solução da fase de manutenção.',
                ''
              ]
            ]}
            title="Fase de Manutenção e Reposição para Todas as Faixas Etárias"
          />
          <P>
            Avaliar o paciente continuamente. Se não houver melhora da
            desidratação, aumentar a velocidade de infusão.
          </P>
          <List>
            <LItem>
              Quando o paciente puder beber, geralmente 2 a 3 horas após o
              início da reidratação venosa, iniciar a reidratação por via oral
              com SRO, mantendo a reidratação venosa.
            </LItem>
            <LItem>
              Interromper a reidratação por via endovenosa somente quando o
              paciente puder ingerir SRO em quantidade suficiente para se manter
              hidratado. A quantidade de SRO necessária varia de um paciente
              para outro, dependendo do volume das evacuações.
            </LItem>
            <LItem>
              Lembrar que a quantidade de SRO a ser ingerida deve ser maior nas
              primeiras 24 horas de tratamento.
            </LItem>
            <LItem>Observar o paciente por pelo menos seis (6) horas.</LItem>
          </List>
          <P>
            Os pacientes que estiverem sendo reidratados por via endovenosa
            devem permanecer na unidade de saúde até que estejam hidratados e
            conseguindo manter a hidratação por via oral.
          </P>
        </Subsection>
        <Subsection title="Critérios para Internação Hospitalar">
          <List>
            <LItem>Desidratação grave;</LItem>
            <LItem>Não reversão da desidratação após 2 horas de TRO;</LItem>
            <LItem>Choque hipovolêmico;</LItem>
            <LItem>
              Contra indicação de hidratação oral (íleo paralítico,abdome agudo,
              alteração do estado de consciência ou convulsões);
            </LItem>
            <LItem>Vômitos biliosos ou de difícil controle;</LItem>
            <LItem>
              Falta de condições satisfatórias para tratamento domiciliar ou
              acompanhamento ambulatorial.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Quando suspeitar Diarréia Bacteriana">
          <P>
            Diarréia com sangue (disenteria), febre, início abrupto, queda do
            estado geral {'>'} 8 evacuações dia, fezes explosivas. Disenteria
            pensar em <Italic>Shigella</Italic>;
          </P>
          <P>
            A investigação da etiologia da diarreia aguda deve ser realizada nos
            casos graves e nos pacientes hospitalizados.
          </P>
          <P>
            Antibióticos: restrito aos pacientes com disenteria, na cólera,
            imunossuprimidos, anemia falciforme, portador de próteses, infecção
            aguda por <Italic>Giardia lamblia</Italic> ou{' '}
            <Italic>Entamoeba hystolica</Italic> e sinais de disseminação
            bacteriana extra intestinal.
          </P>
          <P>Na suspeita de infecção bacteriana iniciar com os antibióticos:</P>
          <List>
            <LItem>
              Pacientes graves, em HV: ceftriaxona, 70 mg/kg, de 24/24h, IV, por
              5 dias.
            </LItem>
            <LItem>
              Pacientes com colite não-complicada: metronidazol, 20 mg/kg/dia,
              de 8/8h, VO, por 5 dias.
            </LItem>
          </List>
          <P>
            Obs; Se for necessário internar o paciente no pronto socorro com
            hidratação venosa solicitar os exames iniciais: HC, eletrólitos,
            coprocultura e antibiograma.
          </P>
        </Subsection>
      </Section>
      <Section title="Outras Medicações Auxiliares">
        <List>
          <LItem>
            Zinco: {'<'} 6 meses 10 mg; {'>'} 6 meses 20 mg. Durante 10 a 14
            dias.
          </LItem>
          <LItem>
            Vitamina A: administrada em população com risco de deficiência de
            vitamina A.
          </LItem>
          <LItem>
            Antieméticos: ondansetrona 0,1 mg/kg/dia, máximo 4 mg por via oral
            ou IV. Comprimidos 4 mg e ampolas de 4 mg/2ml.
          </LItem>
          <LItem>
            Probióticos: <Italic>Lactobacillus reuteri</Italic>: 5 a 7 dias.{' '}
            <Italic>Saccharomyces boularddi</Italic>: 5 a 7 dias.
          </LItem>
          <LItem>
            Racecadotrila (sachê) 1,5 mg/kg, 3x dia (Sachês de 10 mg e 30 mg),
            até cessar a diarreia.
          </LItem>
        </List>
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
