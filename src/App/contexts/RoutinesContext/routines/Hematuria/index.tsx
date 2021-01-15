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

export default function Hematuria(): JSX.Element {
  return (
    <Routine
      id="hematuria"
      name="Hematúria"
      category="emergencia"
      authors={['fabricio']}
      tags={['infecção', 'urinária', 'distúrbio', 'metabólico']}
    >
      <Section title="Introdução">
        <P>
          A hematúria é definida como a presença de 5 ou mais hemácias por campo
          ao exame microscópio de urina. Confirmação diagnóstica: pelo menos 2
          amostras de urina positivas colhidas com intervalo de 2 semanas ou
          mais.
        </P>
      </Section>
      <Section title="Classificação">
        <Subsection title="Origem do Sangramento">
          <List>
            <LItem>no início da micção: sangramento uretral;</LItem>
            <LItem>no fim da micção: vesical;</LItem>
            <LItem>durante todo o ato miccional: renal ou ureteral.</LItem>
          </List>
        </Subsection>
        <Subsection title="Duração">
          <List>
            <LItem>
              Recorrente: surtos de hematúria com urina normal nos intervalos.
            </LItem>
            <LItem>
              Persistente: Hematúria contínua, podendo ser macroscópica,
              mantendo hematúria microscópica persistente entre os surtos.
            </LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Raciocínio Diagnóstico-Hematúria">
        <Subsection title="História Clínica Completa">
          <P>
            Idade de início da hematúria, caracterização da hematúria, outros
            sinais e sintomas associados (dor lombar ou abdominal, sintomas
            urinários baixos, febre, hipertensão arterial), AP (história de
            faringotonsilite prévia), AF (doenças renais, parentes que fazem
            diálise ou com diagnóstico de litíase renal).
          </P>
        </Subsection>
      </Section>
      <Section title="Exame Físico">
        <P>
          Peso, edema, PA, palidez, lesões de pele, massas abdominais, sinal de
          Giordano.
        </P>
      </Section>
      <Section title="Exames Laboratoriais">
        <P>
          Urina 1* (EAS), Dismorfismo eritrocitário*, Urocultura*, HC*, uréia*,
          creatinina*, complemento sérico, proteinúria de 24h, cálcio e ácido
          úrico na urina de 24h, eletroforese de Hg.
        </P>
        <P>
          * Exames que devem ser solicitados e realizados, sempre que possível,
          ainda no Pronto Socorro.
        </P>
      </Section>
      <Section title="Exames de Imagem">
        <P>
          RX de abdome*, US*, TC*, Urografia excretora, Uretrocistografia
          miccional, Cistoscopia.
        </P>
        <P>Exames realizáveis, de acordo com cada caso, ainda na emergência.</P>
        <P>
          Dismorfismo eritrocitário: exame simples e barato, que consiste em
          observar a presença e a forma de hemácias presentes na urina. Deve ser
          realizado na vigência da hematúria macroscópica ou com contagem
          elevada de hemáceas no exame de Urina 1. É de grande praticidade e
          utilidade pois nos permite categorizar rapidamente a hematúria em
          Glomerular, com a presença de hemácias dismórficas e Não-Glomerular,
          com hemácias isomórficas.
        </P>
      </Section>
      <Section title="Categorias Clínicas">
        <P>Categorias descritas segundo o dismorfismo eritrocitário.</P>
        <Subsection title="Hematúria Glomerular">
          <Subsubsection title="Micro ou Macroscópica">
            <P>
              {'>'} 80% de eritrócitos são dismórficos e/ou proteinúria
              significativa; cilindros eritrocitários presentes.
            </P>
          </Subsubsection>
          <Subsubsection title="Hematúria Indeterminada">
            <P>
              Micro ou macroscópica; {'>'} 20% e {'<'} 80% de eritrócitos são
              dismórficos e/ou proteinúria discreta; cilindros(exceto
              eritrocitários) variavelmente presentes.
            </P>
          </Subsubsection>
        </Subsection>
        <Subsection title="Hematúria Não Glomerular">
          <P>
            Micro ou macroscópica; {'<'} 80% de eritrócitos são dismórficos e/ou
            excreção proteica normal ou levemente aumentada; cilindros ausentes.
          </P>
          <Subsubsection
            title={
              <>
                <Italic>Causas Glomerulares</Italic>
              </>
            }
          >
            <List>
              <LItem>Hematúria recorrente ou persistente benigna;</LItem>
              <LItem>Esporádica;</LItem>
              <LItem>Familiar.</LItem>
            </List>
            <P>
              <Bold>Glomerulopatia Primária:</Bold>
            </P>
            <List>
              <LItem>Glomerulonefrite aguda;</LItem>
              <LItem>Nefrite purpúrica;</LItem>
              <LItem>Nefrite lúpica;</LItem>
              <LItem>GNF membranoproliferativa;</LItem>
              <LItem>Síndrome de Alport;</LItem>
              <LItem>Nefropatia por IgA(Berger).</LItem>
            </List>
          </Subsubsection>
          <Subsubsection
            title={
              <>
                <Italic>Causas Extra-glomerulares</Italic>
              </>
            }
          >
            <List>
              <LItem>ITU;</LItem>
              <LItem>Hipercalciúria e hiperuricosúria;</LItem>
              <LItem>Nefrolitíase;</LItem>
              <LItem>Mal-formações renais: rins císticos, em ferradura;</LItem>
              <LItem>Obstrução do trato urinário: estenose de JUP.</LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Causas Hematológicas">
            <List>
              <LItem>Doença Falciforme, coagulopatias;</LItem>
              <LItem>Tumores: Wilms, de bexiga;</LItem>
              <LItem>Trauma abdominal;</LItem>
              <LItem>Nefrite;</LItem>
              <LItem>
                Outras: Tuberculose, medicamentosa, fístula AV, queimados.
              </LItem>
            </List>
          </Subsubsection>
        </Subsection>
      </Section>
      <Section title="Prognóstico de Hematúria">
        <P>
          Muito variável. Depende: da causa da hematúria; atraso no diagnóstico;
          retardo e adequação no tratamento; estado nutricional e imunológico do
          paciente; associação com outras mal-formações.
        </P>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Vasconcellos, L. S. et al. Importância do dismorfismo eritrocitário na investigação da origem da hematúria: revisão da literatura. J Bras Patol Med Lab  v. 41  n. 2  p. 83-94  abril 2005."
        />
        <Reference
          idx={2}
          body="Fogazzi, G.B. et al. Urine erythrocyte morphology in patients with microscopic hematuria caused by a glomerulopathy. Pediatr Nephrol 2008; 23:1093-1100. "
        />
        <Reference
          idx={3}
          body="Toporovski Julio (coord.). Nefrologia Pediátrica.2.ed. Rio de Janeiro: Guanabara Koogan, 2006."
        />
        <Reference
          idx={4}
          body="Atualização de condutas em pediatria – Recomendações. Departamento de Nefrologia da Sociedade de Pediatria de São Paulo, n.77, ago 2016."
        />
      </Section>
    </Routine>
  )
}
