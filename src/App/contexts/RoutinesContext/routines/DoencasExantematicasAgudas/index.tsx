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

export default function DoencasExantematicasAgudas(): JSX.Element {
  return (
    <Routine
      id="doencas-examtematicas"
      name="Doenças Exantemáticas Agudas"
      categories={['infectologia']}
      authors={['marco']}
      tags={[
        'sarampo',
        'rubéola',
        'escarlatina',
        'eritema',
        'infeccioso',
        'roséola',
        'exantema'
      ]}
    >
      <Section title="Sarampo">
        <P>
          Doença viral grave, respiratória/sistêmica, com alta
          morbidade/letalidade e exantema clássico.
        </P>
        <Subsection title="Etiologia">
          <P>
            <Text style={{ fontStyle: 'italic' }}>Morbillivirus</Text>; RNA;
            cult. Rim 1954
          </P>
        </Subsection>
        <Subsection title="Incubação">
          <P>10-11 dias.</P>
        </Subsection>
        <Subsection title="Transmissão">
          <P>d7 exantema.</P>
        </Subsection>
        <Subsection title="Pródromos">
          <List>
            <LItem>
              Febre (alta - evolui gradualmente com pico no exantema);
            </LItem>
            <LItem>Coriza (hialina até catarral);</LItem>
            <LItem>Conjuntivite / fotofobia;</LItem>
            <LItem>Tosse e fácies característica;</LItem>
            <LItem>Enantema de Koplik.</LItem>
          </List>
        </Subsection>
        <Subsection title="Exantema">
          <List>
            <LItem>3 a 4 dias após os pródromos;</LItem>
            <LItem>Atrás das orelhas (d1) em direção caudal (d3-d4);</LItem>
            <LItem>
              Morbiliforme (maculopapular, vermelho/vinhoso, grosseiro,
              confluente, descamação furfurácea).
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Complicações">
          <List>
            <LItem>OMA;</LItem>
            <LItem>Pneumonia;</LItem>
            <LItem>Encefalomielite;</LItem>
            <LItem>PES (panencefalite esclerosante subaguda)</LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Rubéola">
        <P>
          Doença viral benigna para crianças, com sintomas mínimos. Doença
          importante em recém-nascidos e para a saúde pública.
        </P>
        <Subsection title="Etiologia">
          <P>(família togaviridae); RNA; cult. Rim 1962</P>
        </Subsection>
        <Subsection title="Incubação">
          <P>14-21 dias.</P>
        </Subsection>
        <Subsection title="Transmissão">
          <P>d5 exantema.</P>
        </Subsection>
        <Subsection title="Pródromos">
          <List>
            <LItem>De 1 a 5 dias;</LItem>
            <LItem>Febre baixa;</LItem>
            <LItem>Coriza sem importância clínica;</LItem>
            <LItem>Conjuntivite mínima ou ausente;</LItem>
            <LItem>Linfadenopatias múltiplas (retroauricular);</LItem>
            <LItem>Enantema palatal hiperêmico.</LItem>
          </List>
        </Subsection>
        <Subsection title="Exantema">
          <List>
            <LItem>1 a 5 dias de duração;</LItem>
            <LItem>
              Face (d1) até tronco e membros (d2) róseo, fino, uniforme quando
              confluente, não descama.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Complicações">
          <List>
            <LItem>Artrite (adolescentes e adultos);</LItem>
            <LItem>Púrpura e encefalites (raríssimos).</LItem>
          </List>
        </Subsection>
        <Subsection title="Precauções">
          <P>Grávidas e candidatas.</P>
        </Subsection>
      </Section>
      <Section title="Escarlatina">
        <P>Doença bacteriana aguda, de tratamento fácil mas obrigatório.</P>
        <Subsection title="Etiologia">
          <P>Estreptococo beta-hemolítico do grupo A.</P>
        </Subsection>
        <Subsection title="Incubação">
          <P>2-4 dias.</P>
        </Subsection>
        <Subsection title="Transmissão">
          <P>Inexata.</P>
        </Subsection>
        <Subsection title="Pródromos">
          <List>
            <LItem>De 12 horas a 2 dias;</LItem>
            <LItem>Febre alta e contínua;</LItem>
            <LItem>Linfadenopatia ângulomandibular;</LItem>
            <LItem>Enantema palatal petequial;</LItem>
            <LItem>Língua morango/framboesa.</LItem>
          </List>
        </Subsection>
        <Subsection title="Exantema">
          <List>
            <LItem>Até 1 semana de duração;</LItem>
            <LItem>Face, tronco e membros (d1);</LItem>
            <LItem>Puntiforme, eritematoso, áspero;</LItem>
            <LItem>Mais palpável do que visível;</LItem>
            <LItem>Palidez perioral (Filatov);</LItem>
            <LItem>Predileção por dobras (Pastia);</LItem>
            <LItem>Descamação em placas.</LItem>
          </List>
        </Subsection>
        <Subsection title="Complicações">
          <Subsubsection title="Supurativas">
            <List>
              <LItem>Abscesso periamigdaliano.</LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Não-supurativas">
            <List>
              <LItem>Febre reumática;</LItem>
              <LItem>GNDA (glomerulonefrite difusa aguda).</LItem>
            </List>
          </Subsubsection>
        </Subsection>
        <Subsection title="Tratamento">
          <List>
            <LItem>Penicilina Benzetatina 600.000 UI até 25Kg;</LItem>
            <LItem>1.200.000 após ou 50.000 UI/kg (lactentes).</LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Exantema Súbito">
        <P>
          Doença viral com febres altas, geralmente benigna, ocorre 95% das
          vezes entre 6 meses e 3 anos.
        </P>
        <Subsection title="Etiologia">
          <P>Herpes 6 (1986).</P>
        </Subsection>
        <Subsection title="Incubação">
          <P>10-15 dias.</P>
        </Subsection>
        <Subsection title="Transmissão">
          <P>Desconhecida.</P>
        </Subsection>
        <Subsection title="Pródromos">
          <List>
            <LItem>3 a 5 dias;</LItem>
            <LItem>Febre alta / hiperpirexia;</LItem>
            <LItem>Excelente estado geral;</LItem>
            <LItem>Sem enantemas.</LItem>
          </List>
        </Subsection>
        <Subsection title="Exantema">
          <List>
            <LItem>1 ou 2 dias de duração;</LItem>
            <LItem>Todo o corpo ou só o tronco (d1);</LItem>
            <LItem>Maculas róseas (2-3mm), não coalescentes;</LItem>
            <LItem>Empalidecem à compressão;</LItem>
            <LItem>Não descama.</LItem>
          </List>
        </Subsection>
        <Subsection title="Complicações">
          <P>Convulsões (pela febre).</P>
        </Subsection>
      </Section>
      <Section title="Eritema Infeccioso">
        <P>
          Doença viral antes conhecida por “quinta doença”, curso quase sempre
          benigno e sintomas leve.
        </P>
        <Subsection title="Etiologia">
          <P>Parvovírus B19 (1983).</P>
        </Subsection>
        <Subsection title="Incubação">
          <P>Possivelmente 3 semanas (experimental).</P>
        </Subsection>
        <Subsection title="Pródromos">
          <P>Inexistentes.</P>
        </Subsection>
        <Subsection title="Exantema">
          <List>
            <LItem>Pode ter até várias semanas de duração;</LItem>
            <LItem>Início súbito na face (face esbofetada);</LItem>
            <LItem>
              Segue um rendilhado maculopapular nos membros e tronco;
            </LItem>
            <LItem>Evanescente, aparece e reaparece várias vezes;</LItem>
            <LItem>
              O sol, irritantes e atrito podem estimular o exantema.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Outras doenças causadas pelo Parvo B19">
          <List>
            <LItem>Aplasia eritrocitária transitória;</LItem>
            <LItem>Artrite em adultos;</LItem>
            <LItem>Anemia crônica em imunocomprometidos.</LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Varicela">
        <P>
          Doença viral clássica, não tão benigna como antes descrita; muito
          prevalente em nosso meio.
        </P>
        <Subsection title="Etiologia">
          <P>Vírus VZ (varicela-zoster).</P>
        </Subsection>
        <Subsection title="Incubação">
          <P>15-21 dias.</P>
        </Subsection>
        <Subsection title="Transmissão">
          <P>d7 do exantema.</P>
        </Subsection>
        <Subsection title="Pródromos">
          <List>
            <LItem>Horas (crianças) - 1 a 2 dias (adolescentes);</LItem>
            <LItem>Febre alta (enquanto durar as novas lesões);</LItem>
            <LItem>Cefaléia;</LItem>
            <LItem>Mal-estar.</LItem>
          </List>
        </Subsection>
        <Subsection title="Exantema">
          <List>
            <LItem>Lesões novas aparecem por 3 a 7 dias;</LItem>
            <LItem>As crostas duram de 1 a 3 semanas;</LItem>
            <LItem>
              Começam nas extremidades, predominam no tronco, poupam face e
              membros;
            </LItem>
            <LItem>
              Lesão evolutiva: mácula-pápula-vesícula-pústula-crosta;
            </LItem>
            <LItem>
              Polimorfismo regional: vários estágios de apresentação de lesões
              numa mesma área.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Complicações">
          <List>
            <LItem>Infecções de pele;</LItem>
            <LItem>Pneumonias / Otites;</LItem>
            <LItem>Encefalite / Síndrome de Reye.</LItem>
          </List>
        </Subsection>
        <P>Vide rotina de varicela para maiores detalhes.</P>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Farhat CK, Carvalho ES, Carvalho LH, Succi RC, editors. Infectologia Pediátrica. 3.ed. São Paulo: Atheneu; 2007."
        />
        <Reference
          idx={2}
          body="Krugman S, Katz SL, Gershon AA, Wilfert CM. Doenças Infecciosas na Infância. 9.ed. Rio de Janeiro: Guanabara Koogan; 1994."
        />
      </Section>
    </Routine>
  )
}
