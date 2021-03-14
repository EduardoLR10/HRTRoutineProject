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

import img1 from './images/image1.jpg'
import img2 from './images/image2.png'

export default function AlergiaAProteinaDoLeiteDeVaca(): JSX.Element {
  return (
    <Routine
      id="alergia-leite"
      name="Alergia à Proteína do Leite de Vaca"
      categories={['gastroenterologia']}
      authors={['ana-luiza']}
      tags={['intolerância', 'lactose']}
    >
      <Section title="Introdução">
        <P>
          Considerada atualmente um problema de saúde pública, a alergia
          alimentar é definida como uma doença consequente a uma resposta
          imunológica anômala, que ocorre após a ingestão e/ou contato com um
          determinado alimento. As reações imunológicas dependem de
          susceptibilidade individual e podem ser classificadas segundo o
          mecanismo imunológico envolvido. “Alergia alimentar” é um termo
          utilizado para descrever as reações adversas a alimentos, dependentes
          de mecanismos imunológicos, mediados por anticorpos IgE ou não.
        </P>
      </Section>
      <Section title="Classificação">
        <P>
          As reações de hipersensibilidade aos alimentos podem ser classificadas
          de acordo com o mecanismo imunológico envolvido em:
        </P>
        <Subsection title="Mediadas por IgE">
          <P>
            Decorrem de sensibilização a alérgenos alimentares com formação de
            anticorpos específicos da classe IgE, que se fixam a receptores de
            mastócitos e basófilos. Contatos subsequentes com este mesmo
            alimento e sua ligação a duas moléculas de IgE próximas determinam a
            liberação de mediadores vasoativos e citocinas Th2, que induzem às
            manifestações clínicas de hipersensibilidade imediata.
          </P>
        </Subsection>
        <Subsection title="Reações Mistas (mediadas por IgE e hipersensibilidade celular)">
          <P>
            Neste grupo estão incluídas as manifestações decorrentes de
            mecanismos mediados por IgE associados à participação de linfócitos
            T e de citocinas pró-inflamatórias.
          </P>
        </Subsection>
        <Subsection title="Reações não mediadas por IgE">
          <P>
            As manifestações não mediadas por IgE não são de apresentação
            imediata e caracterizam-se basicamente pela hipersensibilidade
            mediada por células (Tabela 1). Embora pareçam ser mediadas por
            linfócitos T, há muitos pontos que necessitam ser mais estudados
            nesse tipo de reações.
          </P>
        </Subsection>
        <Figure
          source={img1}
          size={[825, 575]}
          caption="Fonte: Consenso Brasileiro sobre Alergia Alimentar: 2018 - Parte 1."
        />
      </Section>
      <Section title="Epidemiologia">
        <P>
          Na infância, os alimentos mais responsabilizados pelas alergias
          alimentares são leite de vaca, ovo, trigo e soja, que em geral são
          transitórias. Menos de 10% dos casos persistem até a vida adulta. Nos
          casos de alergia à proteína do leite de vaca (APLV) não IgE-mediada, a
          maioria supera aos 3 anos. Por outro lado, nos casos de alergia
          IgE-mediada 10-25% dos pacientes permanecem alérgicos, e cerca de 50%
          apresenta sensibilização outros alimentos. A taxa de tolerância à
          proteína do leite de vaca após dieta de exclusão em lactentes é de 30%
          com 1 ano de idade, 54% aos 2 anos e 70% aos 3 anos.
        </P>
      </Section>
      <Section title="Quadro Clínico">
        <P>
          As manifestações clínicas são diversas, e dependem do mecanismo
          imunológico envolvido (IgE ou não IgE mediado) e do órgão acometido.
          Nos casos de hipersensibilidade imediata (IgE) os sinais e sintomas
          são agudos (minutos ou horas após ingestão), e nos casos de
          hipersensibilidade tardia (não IgE) os sintomas são subagudos ou
          crônicos. Os órgãos mais acometidos são: trato gastrointestinal
          (50-60%), pele (50-60%), e trato respiratório (20-30%).
        </P>
      </Section>
      <Section title="Principais Manifestações">
        <Subsection title="Gastrointestinais (Não IgE Mediadas)">
          <Subsubsection title="Proctocolite Eosinofílica/Alérgica">
            <Bold>
              <Italic>Características:</Italic>
            </Bold>
            <List>
              <LItem>Forma mais comum de manifestação de APLV;</LItem>
              <LItem>
                Caracterizada por diarreia com muco e/ou sangue nas fezes;
              </LItem>
              <LItem>Aumento da incidência nas ũltimas décadas;</LItem>
              <LItem>Mais em meninos do que em meninas (60% X 40%);</LItem>
              <LItem>
                Início nos primeiros meses de vida (80% antes do 6 meses), e na
                maior parte dos casos, as fezes não apresentam redução de
                consistência (70% dos casos);
              </LItem>
              <LItem>
                Eosinofilia periférica em cerca da metade dos casos (44%) pode
                ser observado;
              </LItem>
              <LItem>
                Em geral, não há comprometimento do estado geral e a criança
                apresenta-se saudável e com bom ganho de peso;
              </LItem>
              <LItem>
                Na maioria dos casos, a perda de sangue é discreta, porém, pode
                ocorrer anemia por deficiência de ferro;
              </LItem>
              <LItem>
                50% dos casos ocorre na vigência de aleitamento materno
                exclusivo (AME): reações às proteínas ingeridas pela mãe com
                transmissão através do leite materno;
              </LItem>
              <LItem>
                Nas crianças em AM misto ou artificial, PLV é a causa mais
                frequente, mas há descrição de reações à soja;
              </LItem>
              <LItem>
                Em menos de 10% dos casos: fórmula extensamente hidrolisada
                (FeH) podem provocar proctocolite alérgica;
              </LItem>
              <LItem>
                Melhora com dieta de exclusão materna ou uso de fórmula de
                aminoácidos (FAA) ou FeH.
              </LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Enteropatia induzida por proteína alimentar">
            <Bold>
              <Italic>Características:</Italic>
            </Bold>
            <List>
              <LItem>
                Acomete lactente nos primeiros meses de vida, mas também
                crianças maiores;
              </LItem>
              <LItem>
                Caracterizada por diarreia não sanguinolenta, com má absorção
                intestinal e déficit do crescimento + vômitos e anemia (em
                muitos casos);
              </LItem>
              <LItem>
                Perda proteica com hipoalbuminemia e edema carencial;
              </LItem>
              <LItem>
                Primeiros meses de vida: APLV é a principal causa, seguido de
                soja, ovo e trigo;
              </LItem>
              <LItem>
                Crianças maiores: reações com arroz, carne de galinha e peixe;
              </LItem>
              <LItem>
                Provas diagnósticas para alergia IgE mediada são negativas!!!
              </LItem>
              <LItem>
                Diagnóstico: EDA com biópsia, demonstrando graus variados de
                atrofia vilositária (diferencial com doença celíaca).
              </LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Síndrome da enterocolite induzida por proteína alimentar (FPIES)">
            <Bold>
              <Italic>Características:</Italic>
            </Bold>
            <List>
              <LItem>
                Manifestação potencialmente grave da alergia alimentar não-IgE
                mediada, com manifestações clínicas heterogêneas (diferentes
                fenótipos);
              </LItem>
              <LItem>
                Considerada uma urgência na APLV: gravidade com pacientes em
                situações de choque;
              </LItem>
              <LItem>
                Antes considerada uma entidade rara, contudo atualmente mais
                diagnosticada;
              </LItem>
              <LItem>
                Lactentes: náuseas, vômitos intratáveis, hipotonia, palidez,
                apatia e diarreia com muco e/ou sangue ou não, que iniciam 1 a 3
                h após a ingestão da proteína desencadeante;
              </LItem>
              <LItem>
                Pode haver desidratação, acidose metabólica, choque
                hipovolêmico, levando ao diagnóstico equivocado de sepse ou de
                alergia alimentar IgE mediada;
              </LItem>
              <LItem>Diarreia pode ser mais tardia (5 a 10 horas após);</LItem>
              <LItem>
                Manifestações respiratórias e cutâneas estão ausentes na FPIES,
                o que diferencia da anafilaxia;
              </LItem>
              <LItem>
                Alimentos desencadeantes: PLV e da soja, mas também por peixe,
                galinha, trigo, arroz;
              </LItem>
              <LItem>
                Raramente em crianças em AME: em geral início quando introduz
                fórmula infantil ou alimentação complementar;
              </LItem>
              <LItem>
                Crianças maiores: alimentos sólidos são os mais comuns;
              </LItem>
              <LItem>
                Diagnóstico clínico: eliminação do alimentos suspeito por 4
                semanas e reprodução de sintomas com teste de provocação oral
                (TPO).
              </LItem>
            </List>
          </Subsubsection>
        </Subsection>
        <Subsection title="Cutâneas e Sistêmicas (IgE Mediadas)">
          <Subsubsection title="Urticária e Anioedema">
            <Bold>
              <Italic>Características:</Italic>
            </Bold>
            <List>
              <LItem>
                A pele é o principal órgão acometido nas reações IgE mediadas;
              </LItem>
              <LItem>
                São os sintomas mais prevalentes neste tipo de reação;
              </LItem>
              <LItem>
                Lembrar!!! Alergia alimentar como causa de urticária: cerca de
                20% dos casos de urticária aguda e menos de 8% nos casos de
                crônica. Cuidado na valorização do alimento como fonte
                desencadeante;
              </LItem>
              <LItem>
                Urticária pode ser o sintoma inicial de anafilaxia: 90% dos que
                desenvolvem esta reação grave apresentam manifestações
                dermatológicas.
              </LItem>
            </List>
          </Subsubsection>
          <Subsubsection title="Anafilaxia">
            <P>
              Manifestações súbitas de sintomas: quadro emergencial com risco de
              morte. Portanto, exige conduta imediata. Complexo de sintomas é
              decorrente da ação de mediadores que atuam em alvos como os
              sistemas respiratório, cardiovascular, gastrointestinal, cutâneo e
              nervoso.
            </P>
            <P>
              Alimentos mais apontados: leite de vaca, ovo, camarão, peixe,
              amendoim e nozes.
            </P>
          </Subsubsection>
        </Subsection>
      </Section>
      <Section title="Diagnóstico">
        <Subsection title="História Clínica Minuciosa">
          <P>Recordatório alimentar.</P>
          <P>Associação dos sintomas aos alimentos.</P>
          <P>Avaliar se a reação é reproduzível.</P>
          <P>Intervalo de tempo entre a ingestão do alimento e dos sintomas.</P>
        </Subsection>
        <Subsection title="Identificação do Alimento">
          <P>Eliminação do alimento suspeito da dieta por 2-4 semanas.</P>
          <P>
            Confirmação: teste de desencadeamento e/ou exames complementares.
          </P>
          <P>
            Padrão-ouro: teste de provocação com alimento, duplo=cego e
            controlado por placebo.
          </P>
        </Subsection>
        <Subsection title="Teste de Provocação Oral">
          <P>
            Tem papel importante na abordagem diagnóstica e na avaliação do
            desenvolvimento de tolerância ao alimento.
          </P>
          <P>
            Realização: restrição do alimento suspeito por pelo menos 2 semanas
            (ideal 4 semanas). Posteriormente, com paciente estável (sem
            sintomas alérgicos) e sem doenças agudas, deve ser oferecido o
            alimento em doses crescentes e intervalos regulares, sob supervisão
            médica, para detecção de possíveis reações (principalmente para
            reações IgE mediadas). Lembrar que nas alergias não IgE mediadas o
            sintomas são tardios (podem surgir após 2 semanas ou mais do TPO).
            Em geral, inicia-se com alimentos com leite na forma de assados
            (protocolo “baked”).
          </P>
          <P>
            OBS: Os pacientes não devem ser submetidos ao TPO se tiverem
            recebido corticosteróides sistêmicos recentemente (por exemplo,
            dentro de 7 a 14 dias), porque a recuperação da doença pode
            confundir a interpretação dos resultados. Aspirina, drogas
            anti-inflamatórias não esteróides, inibidores da enzima de conversão
            da angiotensina, álcool e antiácidos podem atuar como fatores
            indesejáveis, aumentando a reatividade em pacientes suscetíveis. Os
            beta-bloqueadores podem representar um problema de segurança, se a
            adrenalina for necessária para tratamento. Anti-histamínicos devem
            ser descontinuados por mais de 72h.
          </P>
        </Subsection>
      </Section>
      <Section title="Exames Complementares">
        <Bold>Investigação de sensibilização IgE específica:</Bold>
        <P>
          Auxilia apenas na identificação das alergias alimentares mediadas por
          IgE e nas reações mistas, e este é um dado fundamental.
        </P>
        <P>Testes cutâneos (in vivo) – Prick Test.</P>
        <P>Testes no sangue (in vitro) – RAST.</P>
        <P>
          A detecção de IgE específica tem sido considerada como indicativo de
          sensibilização ao alimento, na maioria das vezes apenas orientando o
          alimento a ser utilizado no TPO.
        </P>
        <P>
          Portanto é necessária história clínica minuciosa para definir se o
          resultado tem relação com a doença alérgica.
        </P>
        <Bold>
          Teste de contato atópico com alimentos (atopy patch test - APT):
        </Bold>
        <P>
          O APT para alimentos (leite, ovo, trigo e soja) está em investigação
          para aumentar a especificidade do diagnóstico das reações tardias em
          pacientes com dermatite atópica ou esofagite eosinofílica e com
          sensibilização IgE específica a alimentos.
        </P>
        <P>
          Estes testes permanecem <Bold>não recomendados</Bold> para o uso na
          prática clínica, devido à ausência de padronização e à baixa
          sensibilidade.
        </P>
        <Subsection title="Exames Coprológicos">
          <P>
            <Bold>Pesquisa de sangue oculto:</Bold> atualmente é feita pelo
            método específico para hemoglobina humana. Contribui quando há
            dúvida pela anamnese se realmente a perda referida é de sangue. Por
            outro lado,{' '}
            <Bold>
              {' '}
              <Italic>
                não tem valor no diagnóstico de alergia alimentar
              </Italic>{' '}
            </Bold>
            .
          </P>
          <P>
            <Bold>Dosagem de alfa-1-antitripsina fecal:</Bold> muito empregada
            no passado, tem valor apenas nas alergias gastrointestinais
            associadas à síndrome de enteropatia perdedora de proteínas.{' '}
            <Bold>
              <Italic>Sua utilização isolada não tem valor definido</Italic>
            </Bold>
            , tanto para diagnosticar como para descartar alergia alimentar em
            pacientes com manifestações inespecíficas.
          </P>
          <P>
            <Bold>Calprotectina fecal:</Bold> é uma proteína ligadora de zinco
            produzida principalmente por neutrófilos, monócitos e macrófagos.
            Está aumentada nos processos inflamatórios do intestino. Na alergia
            alimentar, observa-se redução nos valores médios de calprotectina
            após o início da dieta de exclusão. No entanto,{' '}
            <Bold>
              <Italic>
                não há definição dos pontos de corte relacionados com o teste de
                provocação oral.
              </Italic>
            </Bold>
          </P>
        </Subsection>
        <Subsection title="Endoscopia digestiva alta e colonoscopia com biópsias">
          <P>
            Tanto a endoscopia alta como a colonoscopia atualmente podem ser
            indicadas para o diagnóstico diferencial de alergia alimentar em
            alguns pacientes, mas vale ressaltar que estes exames apenas devem
            ser indicados por gastroenterologistas, pois são exames invasivos.
          </P>
        </Subsection>
        <Subsection title="Resposta ao Teste Terapêutico seguida por Teste de Provocação Oral">
          <P>
            Em pacientes com alergia alimentar não-IgE mediada tem sido
            recomendada a dieta de exclusão por 4 semanas, seguida por teste de
            provocação oral, para confirmação do diagnóstico.
          </P>
          <P>
            No caso de APLV, a dieta de exclusão diagnóstica é recomendada ser
            feita com fórmulas com proteínas extensamente hidrolisadas à base da
            proteína do leite de vaca, sem especificação se de caseína ou de
            proteína do soro. Caso não haja melhora clínica, após duas semanas,
            recomenda-se a substituição por fórmula de aminoácidos. Se houver
            melhora, deve ser realizado o teste de provocação oral. Se o
            resultado for positivo, a dieta de exclusão terapêutica com a mesma
            fórmula deve ser mantida pelo período de 6 a 12 meses. Nas crianças
            pequenas amamentadas, a mãe deve retirar da sua dieta os produtos à
            base de leite de vaca, e os sintomas do lactente devem ser
            monitorados.
          </P>
        </Subsection>
      </Section>
      <Section title="Tratamento">
        <P>
          Uma vez estabelecido o diagnóstico de APLV, a única terapia
          comprovadamente eficaz é a exclusão dietética da proteína do leite de
          vaca. A base do tratamento da alergia alimentar é essencialmente
          nutricional e está apoiada sob dois grandes pilares: (a) a exclusão
          dos alérgenos alimentares responsáveis pela reação alérgica com
          substituição apropriada, (b) a utilização de fórmulas ou dietas
          hipoalergênicas, em lactentes, em situações de APLV.
        </P>
        <P>
          Os pacientes, seus responsáveis ou ambos, devem ser educados e
          informados detalhadamente sobre como garantir de fato a exclusão da
          proteína do leite de vaca (p. ex: leitura de rótulos), evitar
          situações de risco (p. ex: alimentação em aniversários, festas e
          buffets), reconhecer os sintomas e instituir o tratamento precoce de
          possíveis reações anafiláticas.
        </P>
        <P>
          <Bold>Duração da dieta e reintrodução alimentar:</Bold> para a APLV,
          preconiza-se que a dieta de exclusão seja, no mínimo, de 6 a 12 meses.
          Crianças com colite alérgica, diagnosticada antes dos 6 meses de
          idade, podem vir a tolerar a reintrodução do alimento 6 a 8 meses após
          a dieta de exclusão. Entretanto, esse prazo pode ser ampliado, pois
          cada paciente deve ser avaliado periodicamente de forma
          individualizada. Recomenda-se postergar a exposição ao alimento,
          quando as reações envolvidas são mediadas por IgE.
        </P>
        <Figure
          source={img2}
          size={[844, 1168]}
          caption="Fonte: Consenso Brasileiro sobre Alergia Alimentar: 2018 - Parte 1"
        />
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="SOLÉ D, SILVA LR, COCCO RR, FERREIRA CT et al. Consenso Brasileiro sobre Alergia Alimentar: 2018 - Parte 1. Arq Asma Alerg Imunol – Vol. 2. N° 1, 2018."
        />
        <Reference
          idx={2}
          body="SOLÉ D, SILVA LR, COCCO RR, FERREIRA CT et al. Consenso Brasileiro sobre Alergia Alimentar: 2018 - Parte 2. Arq Asma Alerg Imunol – Vol. 2. N° 1, 2018."
        />
        <Reference
          idx={3}
          body="Carvalho E, Ferreira CT, Silva LR. Gastroenterologia e nutrição em pediatria. Barueri, SP: Manole, 2012."
        />
      </Section>
    </Routine>
  )
}
