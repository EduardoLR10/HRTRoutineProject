import React from 'react'
import Text from 'react-native'
import Figure from '../../components/templates/Figure'
import { List, LItem } from '../../components/templates/List'
import P from '../../components/templates/Paragraph'
import Reference from '../../components/templates/Reference'
import Routine from '../../components/templates/Routine'
import Section from '../../components/templates/Section'
import Subsection from '../../components/templates/Subsection'
import Subsubsection from '../../components/templates/Subsubsection'
import Table from '../../components/templates/Table'

export default class DesidratacaoHipernatremica extends React.Component {

  static title = "Desidratação Hipernatrêmica no RN"
  static category = "Emergência e Terapia Intensiva"
  static authors = "Dra. Maria Aparecida Soares Moreira Machado"

    render = () =>
      <Routine title={DesidratacaoHipernatremica.title} category={DesidratacaoHipernatremica.category} authors={DesidratacaoHipernatremica.authors}>
          <P>
                Nos recém-nascidos (RN) saudáveis está geralmente associada a aporte hídrico insuficiente em situações de aleitamento materno ineficaz (baixa produção de leite e/ou dificuldade na extração) ou, mais raramente, a erros na preparação de fórmulas infantis.
          </P>
          <Section title="Conceito">
            <P>
                Em termos laboratoriais  definido como Sódio Serico {'>'}145.
            </P>
          </Section>
          <Section title="Clínica">
            <P>
                RN em aleitamento materno exclusivo, com perda ponderal excessiva (acima dos 7-10%) na 1° semana.
            </P>
            <P>
                A clínica é inespecífica . Manifesta-se a partir da primeira semana de vida e os sinais clássicos de desidratação estão geralmente ausentes.
            </P>
            <P>
                RN pode apresenta-se   letárgico, sem sinais de fome, alternadamente, pode ter períodos de irritabilidade e choro gritado.O débito urinário e o número de dejecções estão diminuídos.  Sinais frequentemente associados são a febre e a icterícia;
            </P>
            <P>
                Casos graves pode existir choque hipovolêmico (com taquicardia, hipotensão e má perfusão periférica). As manifestações neurológicas incluem a hipertonia e hiperreflexia; mais raramente podem evoluir com convulsões e coma.
            </P>
            <P>
                Diagnóstico diferencial:
            </P>
            <P>
                Sepsis neonatal/<P style={{fontStyle:'italic'}}>Kernicterus</P>/Doença metabólica.
            </P>
          </Section>
          <Section title="Fatores de Risco">
            <P>
                Recém nascidos prematuros entre 35-36 semanas ,principalmente. Segundo as  recomendações da Aca-demia Americana de Pediatria, uma perda ponderal maior que 7% durante a primeira semana de vida deve constituir um sinal de alerta quanto à possibilidade de que o aleitamento materno seja insuﬁciente. Nestes casos, têm de ser avaliados o estado clínico, e, mais especiﬁcamente, as técnicas de aleitamento. Outros sinais de alerta que devem ser monitorados são perda ponderal contínua, além da primeira semana de vida, e incapacidade de atingir o peso do nascimento até o décimo dia de vida.
            </P>
          </Section>
          <Section title="Exames Complementares">
            <List>
                <LItem>
                    Hemograma,PCR;
                </LItem>
                <LItem>
                    Ureia,Creatinina;
                </LItem>
                <LItem>
                    Ionograma;
                </LItem>
                <LItem>
                    Bilirrubina total e conjugada; gasometria e Imageologia.
                </LItem>
            </List>
            <Subsection title="Ecografia Cerebral Transfontanelar">
                <P>
                    Eventual ressonância magnética ou tomografia axial computorizada crânio-encefálica se complicações neurológicas.
                </P>
                <P>
                    Teste do pezinho: checar coleta e resultados.
                </P>
            </Subsection>
          </Section>
          <Section title="Tratamento">
            <Subsection title="Internar o Récem-Nascido">
            </Subsection>
            <Subsection title="Antibioterapia">
                <P>
                    Não podendo excluir sepsis neonatal em RN gravemente doente deve ser iniciada antibioterapia empírica após colheitas para exames culturais.
                </P>
            </Subsection>
            <Subsection title="Alimentação">
                <P>
                    Se RN estável, a aceitar alimentação entérica ,reforço hídrico com leite materno ( ou LHP) e reavaliação clínica com peso em 24 horas. Se estado clínico duvidoso internar, mantendo alimentação entérica, se necessário por sonda nasogástrica (SNG) - leite materno (LM) extraído, LHP ou Fórmula.
                </P>
            </Subsection>
            <Subsection title="Fluidoterapia">
                <P>
                    Deve ser realizada em duas fases:
                </P>
                <Subsubsection title="Fase de Emergência">
                    <P>
                        (reposição do volume intravascular no caso de hipovolemia significativa);está indicada a administração de bólus de 10 a 20 mL/Kg de soro.
                    </P>
                </Subsubsection>
                <Subsubsection title="Fase de Re-Hidratação">
                    <Subsubsection title="Parte 1">
                        <P>
                            No caso de NA+ ({'<'} 170 mEq/L) está recomendada a utilização de soro fisiológico,10 a 20 mL/Kg de soro,a cada 20-45 min. Podendo ser repetido se necessário,até ter diurese. CORRIGIR EM 48H.
                        </P>
                        <P>
                            Se a Desidratação Hipernatrémica  com  NA+ (= ou {'>'} 170 mEq/L):
                        </P>
                        <P>
                            Deverá ser administrado bólus de soro preparado com uma concentração de sódio no máximo 15 mEq/L abaixo da natremia do doente. 
                        </P>
                        <P>
                            Pode ser calculada recorrendo à seguinte fórmula: 
                        </P>
                        <P>
                            (mL) = [(sódio sérico do doente - 15) / 3,4], que representa a quantidade de cloreto de sódio (NaCl) a 20% a adicionar para completar 100 mL de soro (feito com água destilada).CORRIGIR EM 72H.
                        </P>
                    </Subsubsection>
                    <Subsubsection title="Parte 2">
                        <P>
                            Volume De Manutenção + Deficit De Agua.
                        </P>
                        <P>
                            Para o cálculo das necessidades diárias de manutenção :100 mL/Kg/dia.
                        </P>
                        <P>
                            Assumindo que 70% do peso corporal do RN é água, o défice de água livre será (mL) = [0,7 x peso (g) x ((Na+ sérico / Na+ desejado) – 1)].
                        </P>
                        <P>
                            Lembrar de utilizar na fase de hidratação  o sódio, cálcio, glicose a 5% (fornece cerca de 20% das necessidades calóricas diárias) e, após normalização da função renal e diurese, deverá ser adicionado potássio.
                        </P>
                        <P>
                            A monitorização clínica e laboratorial deve ser realizada a cada 4 a 6 horas, com o respectivo ajuste da solução intravenosa (osmolaridade e/ou velocidade de perfusão), de modo a assegurar a descida lenta da natremia, a um ritmo inferior a 0,6 mEq/L/h.
                        </P>
                    </Subsubsection>
                </Subsubsection>
                <Subsubsection title="Se Desidratação Hipertrémica + Convulsões">
                    <P>
                        É a manifestação clínica mais comum de edema cerebral. Nesta situação está recomendada a administração de NaCl a 3% (85 mL de água destilada + 15 mL de NaCl a 20%), na dose de 4 a 6 mL/Kg, sendo que cada 1 mL/ Kg de NaCl a 3% aumenta 1 mEq/L na concentração sérica de sódio.
                    </P>
                    <P>
                        Monitorização clínica permanente - atenção ao estado de consciência/ convulsões.
                    </P>
                    <P>
                        Controlar  o Ionograma a cada 2 h na fase inicial e posteriormente cada 4-6 h; ajustar ritmo/ tipo de soro se diminuição do Na {'>'} 0,5 mEq/L/h (diminuir o ritmo de perfusão ou aumentar Na no soro)
                    </P>
                    <P>
                        Notas:
                    </P>
                    <List>
                        <LItem>
                            NaCl 0,45% - 77 mEq/L Na;
                        </LItem>
                        <LItem>
                            NaCl 0,9% - 154 mEq/L Na;
                        </LItem>
                        <LItem>
                            NaCl 3% - 513 mEq/L Na (preparação: 15 mL NaCl 20% + 85 mL água destilada);
                        </LItem>
                        <LItem>
                            NaCl 20% - 3400 mEq/L Na.
                        </LItem>
                    </List>
                </Subsubsection>
            </Subsection>
          </Section>
          <Section title="Orientações para os RN de risco">
            <Subsection title="Vigilância da Perda Ponderal">
                <List>
                    <LItem>
                        {'<'} 7% - normal.
                    </LItem>
                    <LItem>
                        7-10% - verificar adaptação ao aleitamento materno, reforçar sinais de alarme, reavaliação do peso 24-48 horas após a alta.
                    </LItem>
                    <LItem>
                        10-12% - internamento, suplementação com fórmula se necessário.
                    </LItem>
                    <LItem>
                        ≥ 12% - avaliação analítica (ionograma).
                    </LItem>
                </List>
                <P>
                    Na alta: ensino às mães dos sinais de alarme de perda ponderal excessiva e orientar retorno em 48h.
                </P>
            </Subsection>
            <Subsection title="Após Alta">
                <P>
                    Avaliação do peso ao 2º,5º dia e novamente até ao 10º dia.       
                </P>
                <P>
                    Treinamento contínuo de proﬁssionais da saúde para reconsiderar certos conceitos fundamentalistas a respeito do aleitamento materno e para aumentar o nível de suspeita quanto a esta patologia, especialmente naqueles pacientes que apresentam hiperbilirrubinemia. 
                </P>
                <P>
                    Desenvolvimento de uma melhor comunicação com os Centros de Atenção Primária, para alertar os médicos de família quanto a esta doença e promover uma avaliação precoce do peso ponderal e estado clínico da criança, conforme proposto pelo Programa Nacional de Vigilância em Saúde da Criança.
                </P>
            </Subsection>
          </Section>
        <Section title="Referências">
        <Reference idx={1} body="Laing IA, Wong CM. Hypernatraemia in the ﬁrst few days: is the incidence rising? Arch Dis Child Fetal Neonatal Ed. 2002;87(3): F158-62."/>
        <Reference idx={2} body="Peñalver Giner O, Gisbert Mestre J, Casero Soriano J, Bernal Ferrer A, Oltra Benavent M, Tómas Vila M. Hypernatremic dehydration associated with breast-feeding. An Pediatr (Barc). 2004;61(4):340-343."/>
        <Reference idx={3} body="Caglar MK, Ozer I, Altugan FS. Risk factors for excess weight loss and hypernatremia in exclusively breast-fed infants. Braz J Med Biol Res. 2006;39(4):539-44."/>
        <Reference idx={4} body="Livingstone VH, Willis CE, Abdel-Wareth LO, Thiessen P, Lockitch G. Neonatal hypernatremic dehydration associated with breast-feeding malnutrition: a retrospective survey. CMAJ. 2000;162(5):647-52."/>
        <Reference idx={5} body="Gartner LM, Morton J, Lawrence RA, Naylor AJ, O’Hare D, Schanler RJ, et al. Breastfeeding and the use of human milk. Pediatrics. 2005;115(2): 496-506."/>
        <Reference idx={6} body="Yaseen H, Salem M, Darwich M. Clinical presentation of hypernatremic dehydration in exclusively breast-fed neonates. Indian J Pediatr. 2004;71(12):1059-62."/>
        <Reference idx={7} body="Moritz ML, Manole MD, Bogen DL, Ayus JC. Breastfeeding- associated hypernatremia: are we missing the diagnosis? Pediatrics. 2005;116(3):e343-7."/>
        <Reference idx={8} body="Ergenekon E, Unal S, Gücüyener K, Soysal SE, Koç E, Okumus N, et al. Hypernatremic dehydration in the newborn period and long-term follow up. Pediatr Int. 2007;49(1):19-23."/>
        <Reference idx={9} body="Laing IA. Hypernatremic dehydration in newborn infants. Acta Pharmacol Sin. 2002;23(Suppl):48-51."/>
        <Reference idx={10} body="Bhat SR, Lewis P, David A, Liza SM. Dehydration and hypernatremia in breast- fed term healthy neonates. Indian J Pediatr. 2006;73(1):39-41."/>
        <Reference idx={11} body="American Academy of Pediatrics Subcommittee on Hyperbilirubinemia.Management of hyperbilirubinemia in the newborn infant 35 or more weeks of gestation. Pediatrics. 2004;114(1):297-316."/>
        <Reference idx={12} body="Oddie S, Richmond S, Coulthard M. Hypernatraemic dehydration and breast feeding: a population study. Arch Dis Child. 2001;85(4):318-20."/>
        <Reference idx={13} body="Manganaro R, Mamì C, Marrone T, Marseglia L, Gemelli M. Incidence of dehydration and hypernatremia in exclusively breast-fed infants. J Pediatr. 2001;139(5):673-5."/>
        <Reference idx={14} body="Cooper WO, Atherton HD, Kahana M, Kotagal UR. Increased incidence of severe breastfeeding malnutrition and hypernatremia in a metropolitan area. Pediatrics. 1995;96(5 Pt 1):957-60."/>
        <Reference idx={15} body="Macdonald PD, Grant L, Ross SR. Hypernatraemia in the ﬁrst few days: a tragic case. Arch Dis Fetal Neonatal Ed. 2003;88(4): F350."/>
        <Reference idx={16} body="Williams AF. Weighing breast fed babies. Arch Dis Child Fetal Neonatal Ed. 2002;86(1): F69."/>
        <Reference idx={17} body="Harding D, Cairns P, Gupta S, Cowan F. Hypernatraemia: why bother weighing breast fed babies? Arch Dis Child Fetal Neonatal Ed. 2001;85(2):F145."/>
        <Reference idx={18} body="Macdonald PD, Ross SR, Grant L, Young D. Neonatal weight loss in breast and formula fed infants. Arch Dis Child Fetal Neonatal Ed. 2003;88(6):F472-6."/>
        <Reference idx={19} body="Van Dommelen P, van Wouwe JP, Breuning-Boers JM, van Buuren S, Verkerk PH. Reference chart for relative weight change to detect hypernatraemic dehydration. Arch Dis Child. 2007;92(6):490-4."/>
        </Section>
    </Routine>
}