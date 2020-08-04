import React from 'react'
import Figure from '../../components/templates/Figure'
import { List, LItem } from '../../components/templates/List'
import P from '../../components/templates/Paragraph'
import Reference from '../../components/templates/Reference'
import Routine from '../../components/templates/Routine'
import Section from '../../components/templates/Section'
import Subsection from '../../components/templates/Subsection'
import Subsubsection from '../../components/templates/Subsubsection'
import Table from '../../components/templates/Table'

import img1 from './images/image1.png'
import img2 from './images/image2.png'
import img3 from './images/image3.png'

export default class ChoqueSeptico extends React.Component {

  static title = "Choque Séptico"
  static category = "Emergência e Terapia Intensiva"
  static authors = "Dr. Rafael Belotti Fialho"

    render = () =>
      <Routine title={ChoqueSeptico.title} category={ChoqueSeptico.category} authors={ChoqueSeptico.authors}>
          <P>
            Tentar padronizar o atendimento a condução do paciente pediátrico com choque séptico, em unidades de urgência/emergência, unidades regulares de internação pediátrica e unidades de terapia intensiva (UTI) pediátrica.
          </P>
          <Section title="Introdução">
            <P>
                Apesar dos avanços na terapia antimicrobiana, manejo de drogas vasoativas e novos métodos de suporte avançadoo de vida, o choque séptico permanece uma importante causa de morbimortalidade em Unidades de Terapia Intensiva (UTI). Dados recentes têm demonstrado uma melhora da sobrevida em crianças com choque séptico, relacionada ao advento das UTIs Pediátrica e Neonatal e ao uso da terapêutica guiada por metas (semelhante à sugerida pelo American College of Critical Care Medicine” (ACCM) – “Clinical Parameters for Hemodynamic Support in Pediatric and Neonatal Septic Shock”).
            </P>
          </Section>
          <Section title="Diagnóstico de Sepse">
            <Subsection title="Sinais de Alarme">
                <List>
                    <LItem>
                        Febre;
                    </LItem>
                    <LItem>
                        Alteração Neurológica (sonolência, não fixa o olhar, comportamento diferente do habitual);
                    </LItem>
                    <LItem>
                        Leucocitose.
                    </LItem>
                </List>
            </Subsection>
            <Subsection title="Definições">
                <P>
                    Se alteração de 2 ou mais parâmetros (exceto a combinação de febre + leucocitose) -{'>'} SEPSE GRAVE -{'>'} Fazer PEWS Se febre + leucocitose, mas com outros parâmetros normais -{'>'} DOENÇA FEBRIL GRAVE (fazer antibióticos + hidratação venosa, mas protocolo de sepse/ choque séptico não se aplica)
                </P>
            </Subsection>
            <Subsection title="SIRS Modificado">
                <List>
                    <LItem>
                        Temperatura {'>'} 38.5 ou {'<'} 36 °C;
                    </LItem>
                    <LItem>
                        Alteração neurológica (sonolento, não fixa o olhar, comportamento diferente do basal);
                    </LItem>
                    <LItem>
                        Hemograma anormal;
                    </LItem>
                    <LItem>
                        Taquipneia;
                    </LItem>
                    <LItem>
                        Frequência Cardíaca alterada para idade.
                    </LItem>
                </List>
                <Table head={['Idade', 'Frequência Cardíaca', 'Frequência Respiratória', 'Pressão Arterial Sistólica', 'Leucócitos 1000/mm3']} data={[
                    ['1 mês a 1 ano', '> 180\n< 90', '> 34', '< 94', '> 17.5\n< 5'],
                    ['1 ano a 5 anos', '> 140', '> 22', '< 100', '> 15.5\n< 6'],
                    ['6 anos a 12 anos', '> 130', '> 18', '< 105', '> 13.5\n< 4.5'],
                    ['13 anos a 18 anos', '> 110', '> 14', '< 117', '> 11.5\n< 4.5']
                ]} />
            </Subsection>
            <Subsection title="PEWS Modificado">
                <Table head={['', '0', '1', '2', '3']} data={[
                        ['Comportamento', 'Brincando/apropriado ou Dormindo, mas despertável', 'Inquieto, mas consolável', 'Irritado, difícil de consolar', 'Letárgico/confuso\nResposta reduzida a dor'],
                        ['Cardiovascular', 'Corado ou Perfusão capilar 1-2 segundos', 'Pálido OU Perfusão capilar 3 segundos', 'Cianótio OU Enchimento capilar acima de 4 segundos OU FC no limite ou acima do normal para a idade', 'Cianótico e moteado OU Perfusão capilar 5 segundos OU Taquicardia > 10 limite normal para a idade OU FC < 60 para idade 4 anos e maior'],
                        ['Respiratório', 'Parâmetros normais\nSem uso de musculatura acessória\nAusência de retrações', 'FR no limite ou acima do normal OU Uso de musculatura acessória OU O2 suplementar', 'FR > 10 acima do limite normal para a idade\nRetratações OU FiO2 40% OU Alto-Fluxo/CPAP/VNI', 'FR < 20 para lactentes, < 10 para 4 anos e maior, com retratações e gemência OU - FiO2 > 50% / Alto-Fluxo > 4 L/min OU Salbutamol contínuo']
                ]} />
            </Subsection>
            <Subsection title="SE">
                <P>
                    PEWS 3-5 pontos, colher gasometria + lactato e repetir  PEWS em 30 minutos OU Considerar início do tratamento.
                </P>
                <P>
                    PEWS 6-9 -{'>'} CHOQUE SÉPTICO, Iniciar Tratamento conforme protocolo.
                </P>
                <P>
                    SE: SIRS alterado + Hipotensão OU Lactato aumentado -{'>'} CHOQUE SÉPTICO, Iniciar Tratamento conforme protocolo
                </P>
            </Subsection>
          </Section>
          <Section title="Tratamento">
            <Subsection title="Metas Básicas">
                <P>
                    Bolus IV 20mL/kg soro fisiológico em 5-10 minutos ou o mais rápido possível. Antibióticos de largo espectro imediatamente, na dose máxima permitida. Coleta de hemocultura. Gasometria e Lactato (arterial ou venoso), Glicemia, Cálcio (iônico de preferência), Na / K, Creatinina, Hemograma (se ainda não foi colhido), PCR. Exames adicionais se possível: TGO/TGP, bilirrubinas, Ureia.
                </P>
            </Subsection>
            <Subsection title="Metas Adicionais">
                <Subsubsection title="Oferta de Oxigênio">
                    <P>
                        Oferecer oxigênio por cateter nasal de alto fluxo ou máscara não reinalante para todos os pacientes. Considerar VNI ou Intubação orotraqueal conforme gravidade ou se necessidade de sedação para procediementos invasivos.
                    </P>
                </Subsubsection>
                <Subsubsection title="Acesso Vascular">
                    <P>
                        Dois acessos venosos imediatamente. Se não for possível acesso periférico, obter acesso intraósseo. Considerar assim que possível a colocação de acesso central. A concentraçãoo máxima de Adrenalina para ser feita em veia periférica deverá ser de 20 mcg/ mL ou menor. 
                    </P>
                </Subsubsection>
                <Subsubsection title="Administração de Fluidos">
                    <P>
                        Administração de Fluidos Infusões Sequenciais de 20 mL/kg de solução cristaloide, podendo chegar até um total de 60 mL/kg. Infundir o volume de forma rápida, sempre com reavaliação clínica da perfusão, pressão arterial, saturação venosa central e ecocardiograma, quando disponíveis entre as infusões. Se necessário infusões adicionais, utilizar coloides (albumina 5%). Se observada hepatomegalia ou estertores pulmonares e aumento do esforço respiratório, interromper as infusões e considerar furosemida. 
                    </P>
                </Subsubsection>
                <Subsubsection title="Drogas Inotrópicas">
                    <P>
                        A droga inicial de escolha é a Adrenalina. Iniciar com a dose de 0.1 mcg/kg/min e aumentar progressivamente (0,1 a 1,0 mcg/kg/min) se necessário conforme avaliação clínica. Em caso de hipotensão refratária, associar noradrenalina (0,1 a 1,0 mcg/kg/min). Outras drogas vasoativas podem ser necessárias, como a Milrinona, no caso do choque frio, com resistência periférica aumentada. O que leva ao aumento da PA. (Milrinona 0,25 a 0,75mcg/kg/min iniciar com dose baixa e aumentar lentamente, droga tem meia vida longa {'>'}4h).
                    </P>
                    <Table head={['Droga', 'Dose (mcg/kg/min)', 'Apresentação', 'MCG/ML']} data={[
                    ['Dobutamina', '5 - 20', '250 mg/20ml', '12.500 mcg/ml'],
                    ['Dopamina', '5 - 20', '50 mg/10ml', '5.000 mcg/ml'],
                    ['Epinefrina', '0.1 - 1.0', '1 mg/ml', '1.000 mcg/ml'],
                    ['Norepinefrina', '0.1 - 1.0', '4 mg/4ml*', '1.000 mcg/ml'],
                    ['Milrinona', '0.25 - 0.75', '20 mg/20ml', '1.000 mcg/ml']
                    ]}  label="*Hemitartarato de Norepinefrina, na ampola há descrição de 2 mg/ml, no entanto apenas 1mg é a parte ativa da solução. A outra parte é apenas veículo, sendo a dose = 1 mg/ml."/>
                    <Figure source={img1}/>
                    <Figure source={img3}/>
                    <Figure source={img2}/>
                </Subsubsection>
                <Subsubsection title="Nível de Hemoglobina">
                    <P>
                A meta para nível de hemoglobina é de 7 g/dL. Nos pacientes descompensados mais graves, considerar transfusão para obter nível igual ou maior a 9 g/dL. Nas crianças com anemia grave ({'<'} 5 g/dL), por hemólise autoimune, sangramento ou crise de falcização, não expandir com cristaloides, devem receber primeiro concentrado de hemácias.
                    </P>
                </Subsubsection>
                <Subsubsection title="Correção de glicose e cálcio">
                    <P>
                        Recomenda-se 1 mg/kg de glicose em bolus: lactentes e crianças SG 25% 4 mL/kg; adolescentes SG25% 4 mL/kg ou SG 50% 20 mL. Gluconato de Cálcio a 10%, na dose de 1 mL/kg, máximo de 20 mL, infusão em 30 minutos. Fazer em acesso central.
                    </P>
                </Subsubsection>
                <Subsubsection title="Antibióticos">
                    <P>
                        Devem ser administrados o quanto antes, dentro da primeira hora de atendimento. Ceftriaxona para criança com foco domiciliar, previamente hígida. Associar clindamicina se síndrome do choque tóxico. Crianças com doença de base, foco intra-hospitalar ou internação prévia recente: cefepime ou meropenem + vancomicina (se dispositivos invasivos ou imunodeprimido) Considerar indicações de antivirais ou antifúngicos conforme o caso.
                    </P>
                </Subsubsection>
                <Subsubsection title="Corticóide">
                    <P>
                        Nos casos de Purpura fulminans ou uso crônico de corticosteroides. Hidrocortisona 2 mg/kg/dia dividida em 3 doses. Diminuição gradual após 5 dias.
                    </P>
                </Subsubsection>
            </Subsection>
            <Subsection title="Monitorização">
                <Subsubsection title="Na Primeira Hora do Choque">
                    <List>
                        <LItem>
                            Oximetria de Pulso Contínua (dar preferência ao Oxímetro Masimo e monitorizar o Índice de Perfusão);
                        </LItem>
                        <LItem>
                            Monitorização Cardíaca: ECG Contínuo;
                        </LItem>
                        <LItem>
                            Controle de pressão arterial (PA) de 15/15 minutos;
                        </LItem>
                        <LItem>
                            Monitorização de Temperatura;
                        </LItem>
                        <LItem>
                            Monitorização de débito urinário por sonda vesical;
                        </LItem>
                        <LItem>
                            Ecocardiograma funcional, se disponível.
                        </LItem>
                    </List>
                </Subsubsection>
                <Subsubsection title="Após a Primeira Hora">
                    <List>
                        <LItem>
                            Monitorização da Pressão Arterial Invasiva (Pai) através de Cateterização arterial;
                        </LItem>
                        <LItem>
                            Monitorização da Saturação Venosa Central de Oxigênio: através da coleta de gasometria venosa central seriada;
                        </LItem>
                        <LItem>
                            Ecocardiograma funcional: avaliação do débito cardíaco e complacência da veia cava inferior.
                        </LItem>
                    </List>
                </Subsubsection>
            </Subsection>
            <Subsection title="Outras Considerações">
                <List>
                    <LItem>
                        PLASMA: se coagulopatia presente E sangramento ativo ou necessidade de procedimento invasivo;
                    </LItem>
                    <LItem>
                        PLAQUETAS: se plaquetas {'<'} 50.000 mm3;
                    </LItem>
                    <LItem>
                        VENTILAÇÃO MECÃNICA: estratégias de ventilação protetora;
                    </LItem>
                    <LItem>
                        SEDAÇÃO E ANALGESIA: evitar uso de etomidato (bloqueio da adrenal) e propofol (hipotensão);
                    </LItem>
                    <LItem>
                        CONTROLE DA GLICEMIA: manter glicemia abaixo de 180 mg%;
                    </LItem>
                    <LItem>
                        DIURÉTICOS: usar diuréticos de forma precoce, uma vez atingida a estabilidade hemodinâmica para evitar balanço hídrico acumulado positivo acima de 10% do peso corporal;
                    </LItem>
                    <LItem>
                        NUTRIÇÃO: dar preferência a nutrição enteral;
                    </LItem>
                    <LItem>
                        IMUNOGLOBULINA ENDOVENOSA: considerar no choque tóxico e fascite necrosante.
                    </LItem>
                </List>
            </Subsection>
          </Section>
          <Section title="Indicadores">
            <List>
                <LItem>
                    Mortalidade institucional de sepse e choque séptico;
                </LItem>
                <LItem>
                    Taxa de aderência ao tratamento inicial (antibióticos, fluido, inotrópico, hemocultura, acessos venosos, monitorização);
                </LItem>
                <LItem>
                    Tempo para dose de antibióticos (meta {'<'} 60 minutos);
                </LItem>
                <LItem>
                    Tempo para fluidos (SF) (meta 40 mL/kg {'<'} 60 minutos).
                </LItem>
            </List>
          </Section>
        <Section title="Referências">
        <Reference idx={1} authors="Dellinger R." title="Surviving Sepsis Campaign: International Guidelines for Management of Severe Sepsis and Septic Shock: 2012 (Vol 41, No. 2)" publisher="CritCareMed 2013"/>
        <Reference idx={2} authors="Brierley J." title="Clinical practice parameters for hemodynamic support of pediatric and neonatal septic shock: 2007 update from the American College of Critical Care Medicine (Vol. 37, No. 2)." publisher="Crit Care med 2009"/>
        <Reference idx={3} authors="Goldstein B." title="International pediatric sepsis consensus conference: Definitions for sepsis and organ dysfunction in pediatric (Vol. 6, No. 1)." publisher="PediatrCrit Care Med 2005."/>
        <Reference idx={4} authors="Kissoon N." title="Sepsis guideline implementation: benefits, pitfalls and possible solutions (18(2):207)." publisher="Crit Care 2014"/>
        <Reference idx={5} authors="Kissoon N." title="Sepsis guidelines: Suggestions to improve adherence (71 Suppl1:S36-41)." publisher="J Infect 2015"/>
        <Reference idx={6} authors="Noritomi DT, Ranzani OT, Monteiro MB, Ferreira EM, Santos ST, Leibel F." title="Implementation of a multifaceted sepsis education program in an emerging country setting: clinical outcomes and cost-effectiveness in a long-term follow-up study (40(2):182-91)." publisher="Intensive Care Med 2014"/>
        </Section>
    </Routine>
}