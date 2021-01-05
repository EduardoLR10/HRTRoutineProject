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

export default function DesidratacaoHipernametrica(): JSX.Element {
  return (
    <Routine
      id="desidratacao-hipernatremica"
      name="Desidratação Hipernatrêmica no RN"
      category="emergencia"
      authors={['carlos']}
      tags={['recém', 'nascido', 'distúrbio', 'eletrolítico']}
    >
      <Section title="Introdução">
        <P>
          Nos recém-nascidos (RN) saudáveis está geralmente associada a aporte
          hídrico insuficiente em situações de aleitamento materno ineficaz
          (baixa produção de leite e/ou dificuldade na extração) ou, mais
          raramente, a erros na preparação de fórmulas infantis.
        </P>
      </Section>
      <Section title="Conceito">
        <P>Em termos laboratoriais definido como sódio sérico {'>'}145.</P>
      </Section>
      <Section title="Clínica">
        <P>
          RN em aleitamento materno exclusivo, com perda ponderal excessiva
          (acima dos 7-10%) na 1ª semana de vida.
        </P>
        <P>
          A clínica é inespecífica . Manifesta-se a partir da primeira semana de
          vida e os sinais clássicos de desidratação estão geralmente ausentes.
        </P>
        <P>
          O RN pode apresenta-se letárgico, sem sinais de fome, alternadamente,
          pode ter períodos de irritabilidade e choro gritado. O débito urinário
          e o número de dejeções estão diminuídos. Sinais frequentemente
          associados são a febre e a icterícia. Nos casos graves, pode existir
          choque hipovolêmico (com taquicardia, hipotensão e má perfusão
          periférica). As manifestações neurológicas incluem a hipertonia e
          hiperreflexia; mais raramente podem evoluir com convulsões e coma.
        </P>
        <P></P>
        <P>Diagnóstico diferencial:</P>
        <P>
          sepsis neonatal,
          <Italic>Kernicterus</Italic>, doença metabólica.
        </P>
      </Section>
      <Section title="Fatores de Risco">
        <P>
          Recém nascidos prematuros entre 35-36 semanas, principalmente. Segundo
          as recomendações da Academia Americana de Pediatria, uma perda
          ponderal maior que 7% durante a primeira semana de vida deve
          constituir um sinal de alerta quanto à possibilidade de que o
          aleitamento materno seja insuﬁciente. Nestes casos, têm de ser
          avaliados o estado clínico e, mais especiﬁcamente, as técnicas de
          aleitamento. Outros sinais de alerta que devem ser monitorados são:
          perda ponderal contínua, além da primeira semana de vida, e
          incapacidade de atingir o peso do nascimento até o décimo dia de vida.
        </P>
      </Section>
      <Section title="Exames Complementares">
        <List>
          <LItem>Hemograma,PCR;</LItem>
          <LItem>Ureia, creatinina;</LItem>
          <LItem>Ionograma;</LItem>
          <LItem>
            Bilirrubina total e conjugada; gasometria e exames de imagem.
          </LItem>
        </List>
        <Subsection title="Ecografia Cerebral Transfontanelar">
          <P>
            Eventual ressonância magnética ou tomografia axial computorizada
            crânio-encefálica se houver complicações neurológicas.
          </P>
          <P>Teste do pezinho: checar coleta e resultados.</P>
        </Subsection>
      </Section>
      <Section title="Tratamento">
        <P>
          <Bold>
            <Italic>Internar o Recém-Nascido.</Italic>
          </Bold>
        </P>
      </Section>
      <Section title="Antibioterapia">
        <P>
          Não podendo excluir sepsis neonatal em RN gravemente doente, deve ser
          iniciada antibioterapia empírica após coletas de exames para culturas.
        </P>
      </Section>
      <Section title="Alimentação">
        <P>
          Se RN estável, aceitando alimentação entérica, reforço hídrico com
          leite materno ( ou LHP - leite humano processado, oriundo do Banco de
          Leite) e reavaliação clínica com peso aferido em 24 horas. Se o estado
          clínico for duvidoso, deve-se proceder a internação, mantendo
          alimentação entérica, se necessário por sonda nasogástrica (SNG) -
          leite materno (LM) extraído, LHP ou Fórmula.
        </P>
      </Section>
      <Section title="Fluidoterapia">
        <P>Deve ser realizada em duas fases:</P>
        <Subsection title="Fase de Emergência">
          <P>
            Reposição do volume intravascular no caso de hipovolemia
            significativa. Está indicada a administração de bolus de 10 a 20
            ml/Kg de soro fisiológico NaCl 0,9%.
          </P>
        </Subsection>
        <Subsection title="Fase de Re-Hidratação">
          <Subsubsection title="Parte 1">
            <P>
              No caso de <Bold>Na+ ({'<'} 170 mEq/l):</Bold> está recomendada a
              utilização de soro fisiológico, 10 a 20 ml/Kg de soro, a cada
              20-45 min. Podendo ser repetido se necessário, até obter-se
              diurese. CORRIGIR EM 48 HORAS.
            </P>
            <P>
              Se a desidratação hipernatrêmica com{' '}
              <Bold>Na+ (= ou {'>'} 170 mEq/L):</Bold> deverá ser administrado
              bolus de soro preparado com uma concentração de sódio com, no
              máximo, 15 mEq/l abaixo da natremia do doente.
            </P>
            <P>Pode ser calculada recorrendo à seguinte fórmula:</P>
            <P>
              (ml) = [(sódio sérico do doente - 15) / 3,4], que representa a
              quantidade de cloreto de sódio (NaCl) a 20% a adicionar para
              completar 100 ml de soro (feito com água destilada).CORRIGIR EM 72
              HORAS.
            </P>
          </Subsubsection>
          <Subsubsection title="Parte 2">
            <P>Volume de manutenção + déficit de água.</P>
            <P>
              Para o cálculo das necessidades diárias de manutenção :100
              ml/Kg/dia.
            </P>
            <P>
              Assumindo que 70% do peso corporal do RN é água, o déficit de água
              livre será (ml) = [0,7 x peso (g) x ((Na+ sérico / Na+ desejado) –
              1)].
            </P>
            <P>
              Lembrar de utilizar na fase de hidratação o sódio, cálcio, glicose
              a 5% (fornece cerca de 20% das necessidades calóricas diárias) e,
              após normalização da função renal e diurese, deverá ser adicionado
              o potássio.
            </P>
            <P>
              A monitorização clínica e laboratorial deve ser realizada a cada 4
              a 6 horas, com o respectivo ajuste da solução intravenosa
              (osmolaridade e/ou velocidade de perfusão), de modo a assegurar a
              descida lenta da natremia, a um ritmo inferior a 0,6 mEq/l/h.
            </P>
          </Subsubsection>
        </Subsection>
        <Subsubsection title="Se Desidratação Hipertrêmica + Convulsões">
          <P>
            É a manifestação clínica mais comum de edema cerebral. Nesta
            situação está recomendada a administração de NaCl a 3% (85 ml de
            água destilada + 15 ml de NaCl a 20%), na dose de 4 a 6 ml/Kg, sendo
            que cada 1 ml/ Kg de NaCl a 3% aumenta 1 mEq/l na concentração
            sérica de sódio.
          </P>
          <P>
            Monitorização clínica permanente - atenção ao estado de consciência/
            convulsões.
          </P>
          <P>
            Controlar o ionograma a cada 2 h na fase inicial e posteriormente
            cada 4-6 horas; ajustar ritmo/ tipo de soro se diminuição do Na{' '}
            {'>'} 0,5 mEq/l/h (diminuir o ritmo de perfusão ou aumentar Na no
            soro)
          </P>
          <P>
            <Bold>Notas:</Bold>
          </P>
          <List>
            <LItem>NaCl 0,45% - 77 mEq/l Na;</LItem>
            <LItem>NaCl 0,9% - 154 mEq/l Na;</LItem>
            <LItem>
              NaCl 3% - 513 mEq/l Na (preparação: 15 ml NaCl 20% + 85 ml água
              destilada);
            </LItem>
            <LItem>NaCl 20% - 3400 mEq/l Na.</LItem>
          </List>
        </Subsubsection>
      </Section>
      <Section title="Orientações para os RN de risco">
        <Subsection title="Vigilância da Perda Ponderal">
          <List>
            <LItem>{'<'} 7% - normal.</LItem>
            <LItem>
              7-10% - verificar adaptação ao aleitamento materno, reforçar
              sinais de alarme, reavaliação do peso 24-48 horas após a alta.
            </LItem>
            <LItem>
              10-12% - internação, suplementação com fórmula se necessário.
            </LItem>
            <LItem>≥ 12% - avaliação analítica (ionograma).</LItem>
          </List>
          <P>
            <Bold>Na alta:</Bold> ensinar às mães os sinais de alarme de perda
            ponderal excessiva e orientar retorno em 48h.
          </P>
        </Subsection>
        <Subsection title="Após Alta">
          <P>Avaliação do peso ao 2º, 5º dia e novamente até ao 10º dia.</P>
          <P>
            Treinamento contínuo de proﬁssionais da saúde para reconsiderar
            certos conceitos fundamentalistas a respeito do aleitamento materno
            e para aumentar o nível de suspeita quanto a esta patologia,
            especialmente naqueles pacientes que apresentam hiperbilirrubinemia.
          </P>
          <P>
            Desenvolvimento de uma melhor comunicação com os Centros de Atenção
            Primária, para alertar os médicos de família quanto a esta doença e
            promover uma avaliação precoce do peso ponderal e estado clínico da
            criança, conforme proposto pelo Programa Nacional de Vigilância em
            Saúde da Criança.
          </P>
        </Subsection>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Laing IA, Wong CM. Hypernatraemia in the ﬁrst few days: is the incidence rising? Arch Dis Child Fetal Neonatal Ed. 2002;87(3): F158-62."
        />
        <Reference
          idx={2}
          body="Peñalver Giner O, Gisbert Mestre J, Casero Soriano J, Bernal Ferrer A, Oltra Benavent M, Tómas Vila M. Hypernatremic dehydration associated with breast-feeding. An Pediatr (Barc). 2004;61(4):340-343."
        />
        <Reference
          idx={3}
          body="Caglar MK, Ozer I, Altugan FS. Risk factors for excess weight loss and hypernatremia in exclusively breast-fed infants. Braz J Med Biol Res. 2006;39(4):539-44."
        />
        <Reference
          idx={4}
          body="Livingstone VH, Willis CE, Abdel-Wareth LO, Thiessen P, Lockitch G. Neonatal hypernatremic dehydration associated with breast-feeding malnutrition: a retrospective survey. CMAJ. 2000;162(5):647-52."
        />
        <Reference
          idx={5}
          body="Gartner LM, Morton J, Lawrence RA, Naylor AJ, O’Hare D, Schanler RJ, et al. Breastfeeding and the use of human milk. Pediatrics. 2005;115(2): 496-506."
        />
        <Reference
          idx={6}
          body="Yaseen H, Salem M, Darwich M. Clinical presentation of hypernatremic dehydration in exclusively breast-fed neonates. Indian J Pediatr. 2004;71(12):1059-62."
        />
        <Reference
          idx={7}
          body="Moritz ML, Manole MD, Bogen DL, Ayus JC. Breastfeeding- associated hypernatremia: are we missing the diagnosis? Pediatrics. 2005;116(3):e343-7."
        />
        <Reference
          idx={8}
          body="Ergenekon E, Unal S, Gücüyener K, Soysal SE, Koç E, Okumus N, et al. Hypernatremic dehydration in the newborn period and long-term follow up. Pediatr Int. 2007;49(1):19-23."
        />
        <Reference
          idx={9}
          body="Laing IA. Hypernatremic dehydration in newborn infants. Acta Pharmacol Sin. 2002;23(Suppl):48-51."
        />
        <Reference
          idx={10}
          body="Bhat SR, Lewis P, David A, Liza SM. Dehydration and hypernatremia in breast- fed term healthy neonates. Indian J Pediatr. 2006;73(1):39-41."
        />
        <Reference
          idx={11}
          body="American Academy of Pediatrics Subcommittee on Hyperbilirubinemia.Management of hyperbilirubinemia in the newborn infant 35 or more weeks of gestation. Pediatrics. 2004;114(1):297-316."
        />
        <Reference
          idx={12}
          body="Oddie S, Richmond S, Coulthard M. Hypernatraemic dehydration and breast feeding: a population study. Arch Dis Child. 2001;85(4):318-20."
        />
        <Reference
          idx={13}
          body="Manganaro R, Mamì C, Marrone T, Marseglia L, Gemelli M. Incidence of dehydration and hypernatremia in exclusively breast-fed infants. J Pediatr. 2001;139(5):673-5."
        />
        <Reference
          idx={14}
          body="Cooper WO, Atherton HD, Kahana M, Kotagal UR. Increased incidence of severe breastfeeding malnutrition and hypernatremia in a metropolitan area. Pediatrics. 1995;96(5 Pt 1):957-60."
        />
        <Reference
          idx={15}
          body="Macdonald PD, Grant L, Ross SR. Hypernatraemia in the ﬁrst few days: a tragic case. Arch Dis Fetal Neonatal Ed. 2003;88(4): F350."
        />
        <Reference
          idx={16}
          body="Williams AF. Weighing breast fed babies. Arch Dis Child Fetal Neonatal Ed. 2002;86(1): F69."
        />
        <Reference
          idx={17}
          body="Harding D, Cairns P, Gupta S, Cowan F. Hypernatraemia: why bother weighing breast fed babies? Arch Dis Child Fetal Neonatal Ed. 2001;85(2):F145."
        />
        <Reference
          idx={18}
          body="Macdonald PD, Ross SR, Grant L, Young D. Neonatal weight loss in breast and formula fed infants. Arch Dis Child Fetal Neonatal Ed. 2003;88(6):F472-6."
        />
        <Reference
          idx={19}
          body="Van Dommelen P, van Wouwe JP, Breuning-Boers JM, van Buuren S, Verkerk PH. Reference chart for relative weight change to detect hypernatraemic dehydration. Arch Dis Child. 2007;92(6):490-4."
        />
      </Section>
    </Routine>
  )
}
