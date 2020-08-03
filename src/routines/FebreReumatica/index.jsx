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

export default class FebreReumatica extends React.Component {

  static title = "Febre Reumática"
  static category = "Hematologia, Reumatologia e Nefrologia"
  static authors = "Dra. Dania Lemos Dionízio"

    render = () =>
      <Routine title={FebreReumatica.title} category={FebreReumatica.category} authors={FebreReumatica.authors}>
          <Section title="Conceito">
            <P>
                Considerada complicação tardia, de natureza inflamatória, não supurativa, de caráter imunológico, de uma estreptococcia, causada pelo estreptococo beta hemolítico do grupo A de Lancefield. Ocorre em indivíduos predispostos geneticamente e acomete, principalmente, as articulações, o coração, os vasos, a pele e o SNC.
            </P>
          </Section>
          <Section title="Aspectos Gerais">
            <P>
                Maior incidência nos escolares, de 7 a 14 anos. Acomete mais crianças pobres que vivem em aglomerados, com ligeira predominância no sexo feminino. Em epidemias de faringo-tonsilites estreptocócicas, cerca de 3 a 5% dos pacientes desenvolverão FR, caindo para 0,3% nas endemias. A fisiopatogenia se dá por reação cruzada entre proteínas estreptocócicas e vários tecidos humanos, como o miocárdio, endocárdio, tecidos neuronais e sinoviais e pele. O tratamento adequado com penicilina, feito até o 5º dia da doença é capaz de impedir seu desenvolvimento.
            </P>
          </Section>
          <Section title="Diagnṍstico">
            <P>
                Clínico: critérios de Jones. O diagnóstico é feito na presença de 2 critérios maiores ou 1 critério maior e 2 menores + comprovação de estreptococcia recente.
            </P>
            <Subsection title="Critérios Maiores">
                <Subsubsection title="Artrite">
                    <P>
                        Ocorre em 75% dos casos. Pode ser clássica, do tipo poliarticular migratória de grandes articulações ou atípica(até 30% dos casos), com acometimento aditivo de pequenas articulações, com ou sem entesite.
                    </P>
                </Subsubsection>
                <Subsubsection title="Cardite">
                    <P>
                        Ocorre em aproximadamente 45-50% dos casos e é o fator mais importante para determinar o prognóstico do paciente. Caracterizado principalmente pelo acometimento do endocárdio – valva mitral, determinando o surgimento do sopro característico, de caráter aspirativo, de regurgitação em foco mitral. Podem ocorrer ainda sinais decorrentes do envolvimento do miocárdio(bradi ou taquicardia, extrassistolia, sinais de insuficiência cardíaca) ou do pericárdio(pericardite).
                    </P>
                </Subsubsection>
                <Subsubsection title="Coréia de Sydenhan">
                    <P>
                        Ocorre em cerca de 30%  dos casos quando associada a outros sinais e, isoladamente, em 60%. Caracterizada classicamente pela presença de movimentos involuntários, incoordenação motora e fraqueza muscular.
                    </P>
                </Subsubsection>
                <Subsubsection title="Eritema Marginado">
                    <P>
                        Acomete 5 a 10% dos pacientes e manifesta-se por lesões róseas serpiginosas e evanescentes, não pruriginosas, principalmente no tronco.
                    </P>
                </Subsubsection>
                <Subsubsection title="Nódulos Subcutâneos">
                    <P>
                        Ocorre em 10% dos casos e são pequenas lesões nodulares, semelhantes a grão de arroz, indolores, localizados principalmente em superfícies extensoras das articulações, couro cabeludo e coluna. Geralmente são associados a presença de cardite.
                    </P>
                </Subsubsection>
            </Subsection>
            <Subsection title="Critérios Menores">
                <Subsubsection title="Artralgia">
                    <P>
                        Considerada apenas se não houver artrite.
                    </P>
                </Subsubsection>
                <Subsubsection title="Febre">
                </Subsubsection>
                <Subsubsection title="ECG">
                    <P>
                        Aumento do intervalo Qtc(aumento do intervalo PR corrigido pela FC).
                    </P>
                </Subsubsection>
                <Subsubsection title="Comprovação da Infecção Estreptocócica">
                    <P>
                        Dosagem da ASLO, mostrando-se positiva em cerca de 80% dos casos. Há outro exame que avalia um pool de 5 anticorpos produzidos contra o estreptococo, o Streptozyme, que aumenta a sensibilidade para 95%.
                    </P>
                </Subsubsection>
            </Subsection>
            <Subsection title="Examples Complementares">
                <Subsubsection title="HC">
                    <P>
                        Normal ou discreta anemia normocítica e normocrômica / leucocitose leve às custas de neutrófilos.
                    </P>
                </Subsubsection>
                <Subsubsection title="Provas de Fase Aguda">
                    <P>
                        VHS, PCR, alfa 1 glicoproteína aumentados, assim como a fração alfa 2 da eletroforese de proteínas.
                    </P>
                </Subsubsection>
                <Subsubsection title="ASLO">
                    <P>
                        Começa a se positivar a partir de 1 semana, atinge pico com 3 a 5 semanas e decai com 12 semanas. Em alguns casos, pode se manter positiva por 6 a 12 meses.
                    </P>
                </Subsubsection>
                <Subsubsection title="Raio X de Tórax">
                    <P>
                        Pode detectar alterações devido à miocardite, insuficiência cardíaca, derrame pericárdico.

                    </P>
                </Subsubsection>
                <Subsubsection title="Raio X Contrastado do Coração e Vasos de Base">
                    <P>
                        Demonstra o aumento do volume cardíaco às custas das câmaras esquerdas, especialmente do átrio esquerdo.
                    </P>
                </Subsubsection>
                <Subsubsection title="ECG">
                    <P>
                        Distúrbios de condução e de ritmo, sinais de miocardite e pericardite, aumento do Qtc.
                    </P>
                </Subsubsection>
                <Subsubsection title="Ecocardiograma Doppler Bidimensional">
                    <P>
                        De grande valor atual para o diagnóstico de função cardíaca, endocardite e pericardite.
                    </P>
                </Subsubsection>
                <Subsubsection title="Cintilografia Cardíaca com Gálio 67">
                    <P>
                        Exame muito sensível para detectar cardite, mas pouco específico. Valores alterados quando os níveis de captação forem maiores que 130%.
                    </P>
                </Subsubsection>
            </Subsection>
          </Section>
          <Section title="Tratamento">
            <Subsection title="Profilaxia Primária">
                <P>
                    Tem como objetivo erradicar o foco estreptocócico da orofaringe. A droga de escolha é a penicilina benzatina, em dose única, por via IM. Em crianças com até 25Kg, a dose é de 600.000U. Nas crianças com peso maior, 1.200.000U. Considerar outras alternativas apenas em impossibilidade absoluta de uso da penicilina benzatina: penicilina procaína (400.000U de 12/12h) ; penicilina V (50.000U/Kg/dia, de 6/6h) ; amoxicilina (80-100mg/Kg/dia, de 8/8h) ; cefalexina (50-75 mg/Kg/dia, de 6/6h) ; claritromicina (7,5 mg/Kg/dose, de 12/12h), TODAS durante 10 dias.
                </P>
            </Subsection>
            <Subsection title="Profilaxia Secundária">
                <P>
                    Necessária para impedir novas recorrências da doença. Deve ser feita com a penicilina benzatina, a cada 21 dias, por via IM. Em crianças com até 25Kg, a dose é de 600.000U. Nas crianças com peso maior, 1.200.000U. Na impossibilidade de usar a penicilina, a droga de escolha é a sulfadiazina(500 – 1000mg/dia). Nos pacientes sem acometimento cardíaco recomenda-se a manutenção até os 18 anos de idade ou 5 anos após o primeiro surto, o que for maior. Naqueles com comprometimento cardíaco, a profilaxia será mantida indefinidamente. Nos pacientes reumáticos sem sequelas, mas que irão prestar o serviço militar, esta será mantida ao longo do período.
                </P>
            </Subsection>
            <Subsection title="Artrite">
                <P>
                    É indicado o ácido acetil salicílico (AAS), na dose de 80 a 100mg/Kg/dia, de 6/6h, máximo de 2g/dia, tendo cuidado com o salicilismo (intoxicação pelo AAS).
                </P>
            </Subsection>
            <Subsection title="Cardite">
                <P>
                    O corticóide é indicado para qualquer grau de comprometimento cardíaco. A droga de escolha é a prednisona (ou a prednisolona), na dose de 2mg/Kg/dia (em crianças, a dose mínima é de 40mg/dia e máximo de 60 mg/dia), em 3 doses fracionadas ao longo do dia. A dose máxima deve ser mantida por 2 a 4 semanas, a depender da intensidade da cardite, seguindo-se o desmame de 20% da dose a cada 7 a 10 dias, em dose única matinal, até completar o tempo total de tratamento de 90 a 110 dias. Devemos ter o cuidado de, antes de iniciar o tratamento com corticóide, solicitar PPD e EPF, ou prescrever diretamente o anti-helmíntico. A dieta deverá ser hipossódica durante o uso dessa medicação e aferir regularmente a pressão arterial.
                </P>
            </Subsection>
            <Subsection title="Coréia">
                <P>
                    Indicado o haloperidol, na dose de 1 a 4 mg/dia. Há comprimidos de 1 e de 5mg e solução(gotas) em que 10 gotas/1 mg. Alternativamente, o ácido valpróico pode ser utilizado na dose de 20 a 40mg/Kg/dia, de 6/6h. Iniciar o desmame após as 4 primeiras semanas de uso, reduzindo 30 a 50% da dose diária mensalmente, até completar o período total do tratamento(12 semanas).
                </P>
                <P>
                    Tratamento da ICC: diuréticos, vasodilatadores, digitálicos, cloreto de potássio, etc.
                </P>
                <P>
                    Manipulação de foco séptico ou que possa induzir bacteremia(por exemplo, dentário): fazer dose extra de antibiótico, sendo indicada a amoxicilina 1 grama, 1 hora antes e outra dose 4 horas após o procedimento.
                </P>
            </Subsection>
            <Subsection title="Prognóstico">
                <P>
                    Excelente para os pacientes sem lesão cardíaca. Nos casos de cardite, o prognóstico dependerá do grau de comprometimento do coração, bem como da agilidade para o diagnóstico e tratamento corretos e da adesão à profilaxia secundária. 
                </P>
            </Subsection>
          </Section>
          <Section title="Referências">
            <Reference idx={1} authors="Oliveira, SKF.; Azevedo, ECL." title="Reumatologia Pediãtrica. 2.ed." local="Rio de Janeiro" publisher="Revinter" year="2001"/>
            <Reference idx={2} authors="Cassidy, JT." title="TExtbook of Rheumatology. 2.ed." local="Philadelphia" publisher="Elssevier" year="2010"/>
            <Reference idx={3} authors="Silva, CAA. Instituto da Criança Hospital das Clínicas FMUSP. Departamento de Pediatria." title="Doenças Reumáticas na Criança e no Adolescente. 1.ed." local="São Paulo" publisher="Manole" year="2006"/>
            <Reference idx={4} authors="Naspitz, CK. Guias de Medicina Ambulatorial e Hospitalar UNIFESP." title="Alergia, Imunologia e Reumatologia em Pediatria. 1.ed." local="São Paulo" publisher="Manole" year="2006"/>
            <Reference idx={5} authors="Oliveira, SKF." title="Reumatologia para Pediatras. 1.ed." local="Rio de Janeiro" publisher="Revinter" year="2003"/>
            <Reference idx={6} authors="Oliveira, SKF; Rodrigues, MCF." title="Reumatologia na Prática para Pediatras. 1.ed." local="Rio de Janeiro" publisher="Revinter" year="2010"/>
            <Reference idx={7} authors="Terreri, MTRA; Sacchetti, SB." title="Reumatologia para o Pediatra. 1.ed." local="Sociedade de Pediatria de São Paulo, Departamento de Pediatria." publisher="Atheneu" year="2008"/>
          </Section>
    </Routine>
}