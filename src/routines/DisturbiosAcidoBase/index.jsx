import React from 'react'
import { Text } from 'react-native';
import Figure from '../../components/templates/Figure'
import { List, LItem } from '../../components/templates/List'
import P from '../../components/templates/Paragraph'
import Reference from '../../components/templates/Reference'
import Routine from '../../components/templates/Routine'
import Section from '../../components/templates/Section'
import Subsection from '../../components/templates/Subsection'
import Subsubsection from '../../components/templates/Subsubsection'
import Table from '../../components/templates/Table'

export default class DisturbiosAcidosBase extends React.Component {

  static title = "Distúrbios Ácido-Base"
  static category = "Emergência e Terapia Intensiva"
  static authors = "Dr. Francisco Rufino Rose Neto"

    render = () =>
      <Routine title={DisturbiosAcidosBase.title} category={DisturbiosAcidosBase.category} authors={DisturbiosAcidosBase.authors}>
          <P>
            A fisiopatologia do desequilíbrio ácido-básico pode ser complexa e desafiadora tanto para médicos experientes quanto para os estudantes de medicina e residentes e para começarmos a falar de distúrbio ácido-base precisamos de alguns valores de referência para entendermos os termos a seguir.
          </P>
          <List>
              <LItem>
                    pH: 7,35 a 7,45
              </LItem>
              <LItem>
                    paCO<Text style={{fontSize: 8}}>2</Text>: 35 a 45 mmHg  
              </LItem>
              <LItem>
                    HCO<Text style={{fontSize: 8}}>3</Text>: 22 a 26 mEq/L  
              </LItem>
              <LItem>
                    nion gap: 8 a 12 mEq/L  
              </LItem>
              <LItem>
                    Albumina: 40 g/L ou 4,0 g/dL  
              </LItem>
              <LItem>
                    NaHCO<Text style={{fontSize: 8}}>3</Text> 8,4%: 1 mEq/mL  
              </LItem>
          </List>
          <Section title="Acidose Metabólica">
            <P>
                Acidemia é o termo usado para a simples queda do pH. Acidose metabólica é o distúrbio ácido-base mais comum e decorre do acúmulo de ácidos fixos e queda da concentração de bicarbonato no sangue. Como consequência e tentativa de compensação haverá hiperventilação na tentativa de eliminar H+ na forma de gás carbônico e água, tendo como resultado final, queda da pCO<Text style={{fontSize: 8}}>2</Text> no sangue. Importante lembrar que a magnitude dessa compensação não consegue elevar o valor do pH sérico acima do normal.
            </P>
            <Subsection title="Causas de Acidose Metabólica">
                <P>
                    Para entender as causas de acidose metabólica é necessário conhecer o ânion gap (diferença de ânions não mensurados na neutralização de cátions e ânions). A soma de cátions e ânions no sangue levaria a uma neutralidade, porém, em situação normal, quando somamos os principais cátions e ânions extracelulares temos uma diferença a favor dos cátions. A fórmula a seguir é usada para o cálculo do ânion gap.
                </P>
                <P>
                    nion  gap = (Na+) – ((Cl-) + (HCO<Text style={{fontSize: 8}}>3</Text>-))
                </P>
                <P>
                    nion  gap corrigido quando há hipoalbuminemia = ânion gap + gap albumina / 4
                </P>
                <P>
                    <Text style={{fontStyle: 'italic'}}>Gap</Text> albumina = albumina normal (40g/L) – albumina dosada (g/L)
                </P>
                <Subsubsection title="Causas de Acidose Metabólica com Ânion Gap Normal">
                    <List>
                        <LItem>
                            Diarreia com desidratação;
                        </LItem>
                        <LItem>
                            Acidose tubular renal;
                        </LItem>
                        <LItem>
                            Uso de anidrase carbônica (acetazolamida).
                        </LItem>
                    </List>
                </Subsubsection>
                <Subsubsection title="Causas de Acidose Metabólica com Ânion Gap Aumentado">
                    <List>
                        <LItem>
                            Cetoacidose diabética;
                        </LItem>
                        <LItem>
                            Insuficiência renal;
                        </LItem>
                        <LItem>
                            Acidose lática;
                        </LItem>
                        <LItem>
                            Intoxicação;
                        </LItem>
                        <LItem>
                            Erros inatos do metabolismo;
                        </LItem>
                        <LItem>
                            Rabdomiólise.
                        </LItem>
                    </List>
                </Subsubsection>
            </Subsection>
            <Subsection title="Sinais Clínicos e Diagnóstico">
                <P>
                    O diagnóstico pode ser sugerido pela história e exame físico, a manifestação clínica esperada é a taquipneia, associado pode haver taquicardia, vasodilatação arterial e vasoconstrição venosa, diminuição do peristaltismo, náuseas e vômitos. O diagnóstico laboratorial é feito pela gasometria arterial. A dosagem de eletrólitos é importante quando se tem uma acidose metabólica, pois há uma variação importante do potássio nessa situação. Para cada 0,1 de queda do pH ocorre aumento de 0,3 a 0,6 mEq/L do potássio sérico devido a troca transcelular desse íon.
                </P>
            </Subsection>
            <Subsection title="Tratamento">
                <P>
                    O tratamento consiste em tratar a doença de base que esteja causando a acidose e corrigir a acidemia se esta estiver em situação crítica (pH {'<'} 7,1 ou bicarbonato {'<'} 10 mEq/L). A correção deverá ser feita lentamente (em 2 a 4 horas) em solução isosmolar (diluir NaHCO3 8,4% na diluição de 1:5 de água destilada ou SG5%).
                </P>
                <P>
                    A fórmula usada para a correção da acidose se baseia na dosagem de bicarbonato sérico, peso e a constante 0,3.
                </P>
                <P>
                    Bic a ser infundido (em mEq) = (15 – bic encontrado) x peso (kg) x 0,3
                </P>
                <Subsubsection title="Exemplo">
                    <P>
                        Criança com peso de 10kg, gasometria evidencia bicarbonato de 7 mEq%.
                    </P>
                    <P>
                        Bic a ser infundido = (15 – 7) x 10 x 0,3
                    </P>
                    <P>
                        Bic a ser infundido = 24mEq
                    </P>
                    <P>
                        Prescrição: NaHCO3 8,4% ---- 24ml
                    </P>
                    <P>
                            SG 5% ou AD ----120ml
                    </P>
                    <P>
                        Correr EV em 2 a 4 horas.
                    </P>
                </Subsubsection>
                <Subsubsection title="Situações Especiais">
                    <List>
                        <LItem>
                            Em situações muito graves e PCR (parada cardiorrespiratória) é necessário infusão rápida (em bolo);
                        </LItem>
                        <LItem>
                            Na cetoacidose diabética deve-se evitar a infusão de bicarbonato de sódio;
                        </LItem>
                        <LItem>
                            Em situações de acidose metabólica com hipopotassemia, deve-se fazer a correção do potássio pois o aumento do pH irá diminuir ainda mais o potássio sérico;
                        </LItem>
                        <LItem>
                            Em situações em que o trato respiratório esteja comprometido, deve-se ter cuidado com a correção de bicarbonato pois haverá aumento da paCO<Text style={{fontSize: 8}}>2</Text>.
                        </LItem>
                    </List>
                </Subsubsection>
            </Subsection>
          </Section>
          <Section title="Acidose Respiratória">
            <P>
                Distúrbio causado pelo acúmulo de CO<Text style={{fontSize: 8}}>2</Text> no sangue arterial, que acontece devido a uma hipoventilação ou a uma troca gasosa prejudicada. A compensação desse distúrbio acontece pelo acúmulo de bicarbonato por retenção renal, porém como a compensação renal é lenta só veremos em situação de acidose respiratória crônica.
            </P>
            <Subsection title="Causas">
                <List>
                    <LItem>
                        Hipoventilação (Dça neuromuscular, Depressão SNC, Intoxicação);
                    </LItem>
                    <LItem>
                        Troca inadequada (Pneumonia, Asma, Obstrução VAS, Pneumotórax);
                    </LItem>
                    <LItem>
                        Iatrogênica (falha nos ajustes da ventilação mecânica).
                    </LItem>
                </List>
            </Subsection>
            <Subsection title="Tratamento">
                <P>
                    Geralmente o tratamento da causa base é o suficiente, quando há aumento importante da paCO<Text style={{fontSize: 8}}>2</Text> ({'>'}65 mmHg), é necessário uso de ventilação mecânica para otimizar a troca gasosa.
                </P>
                <P>
                    Atenção para pacientes com Acidose respiraria crônica, pois a correção rápida pode levar a alcalose metabólica.
                </P>
            </Subsection>
          </Section>
          <Section title="Alcalose Metabólica">
            <P>
                Distúrbio pouco comum, onde há aumento do pH por excessiva perda de hidrogênio ou pela elevada retenção de bicarbonato. O mecanismo compensatório é hipoventilação com consequente aumento da paCO<Text style={{fontSize: 8}}>2</Text>.
            </P>
            <Subsection title="Causas">
                <P>
                    As causas farão parte de um dos grupos:
                </P>
                <List>
                    <LItem>
                        Perda de cloretos (uso de diuréticos, perdas gástricas como vômitos, sondagem gástrica);
                    </LItem>
                    <LItem>
                        Perda de potássio e/ou excesso de mineralocorticoide;
                    </LItem>
                    <LItem>
                        Administração excessiva de bicarbonato (iatrogênica).
                    </LItem>
                </List>
                <P>
                    O diagnóstico é feito pela gasometria arterial e o tratamento deve se basear na dosagem do cloro urinário diferenciando então dois grupos, o cloreto responsiva (cloro urinário  10 mEq/L) e cloreto resistente (cloro {'>'} 10 mEq/L).
                </P>
                <P>
                    O primeiro grupo é mais comum e se deve geralmente à diminuição do volume extracelular (vômitos, sonda gástrica drenando continuamente, diarreia com perda de cloro, uso de furosemida e hidroclorotiazida), e o tratamento consiste em tratar a causa base com NaCl ou KCl a depender dos valores dos eletrólitos, na insuficiência cardíaca associada a alcalose metabólica pode ser necessário usar a acetazolamida para promover a excreção de bicarbonato.
                </P>
                <P>
                    O segundo grupo está associado a volume extracelular normal ou aumentado e é decorrente do excesso de efeito mineralocorticoide (uso de glicocorticoides, hiperaldosteronismo primário, síndrome de Cushing, hipopotassemia grave, excesso de administração de bicarbonato), devendo então o tratamento ser baseado na correção dos distúrbios eletrolíticos e retirar a causa do excesso de mineralocorticoide. A aldosterona pode auxiliar no tratamento desses casos.
                </P>
            </Subsection>
          </Section>
          <Section title="Alcalose Respiratória">
            <P>
                Distúrbio também pouco comum na pediatria e que consiste em queda da paCO2 decorrente de hiperventilação.
            </P>
            <P>
                As causas estão relacionadas a situações que alteram o ritmo respiratório e envolve dor e/ou ansiedade, distúrbio do SNC, e falhas no ajuste de ventilação mecânica.
            </P>
            <P>
                O tratamento se baseia no tratamento da causa base, uso de analgésicos, ansiolíticos e sedativos muitas vezes é necessário. Em situação que envolver ventilação mecânica é necessário ajustar os parâmetros do ventilador.
            </P>
          </Section>
        <Section title="Referências">
        <Reference idx={1} body="Delgado AF, Kimura HM, Troster EJ. Pediatria – Instituto da Criança Hospital das Clínicas - Terapia Intensiva. 1a Edição. São Paulo: Editora Manole; 2010. p.185-192."/>
        <Reference idx={2} body="Piva JP, Garcia PCR. Medicina Intensiva em Pediatria. 2a Edição. São Paulo: Editora Revinter; 2014."/>
        <Reference idx={3} body="Furoni RM, Pinto Neto SM, Giorgi RB, Guerra EMM. Distúrbios do Equilíbrio Ácido-Básico. Rev Fac Ciênc Med Sorocaba. 2010; 12(1):5-12."/>
        <Reference idx={4} body="Andrade OVB, Flávio OI, Troster EJ. Acidose metabólica na infância: por que, quando e como tratá-la?. Jornal de pediatria. 2007; 83(2):S11-21."/>
        </Section>
    </Routine>
}