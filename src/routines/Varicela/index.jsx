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

export default class Varicela extends React.Component {

  static title = "Varicela"
  static category = "Infectologia"
  static authors = "Dr. Marco Antônio Alves Cunha"
  static tags = ["catapora", "exantema", "bolhoso", "zoster"]

    render = () =>
      <Routine title={Varicela.title} category={Varicela.category} authors={Varicela.authors}>
        <Section title="Diagnóstico Clínico">
          <Subsection title="Fatores de Risco">
              <List>
                  <LItem>
                      Crianças não vacinadas;
                  </LItem>
                  <LItem>
                      Crianças nascidas antes de setembro de 2012 (a vacinação foi iniciada em 2013).  
                  </LItem>
              </List>
          </Subsection>
          <Subsection title="Sinais e sintomas de suspeição">
              <List>
                <LItem>
                  Febre;
                </LItem>
                <LItem>
                  Erupção vésico-bolhosa com polimorfismo regional e mais numerosas em tronco;
                </LItem>
                <LItem>
                  Bolhas de conteúdo cristalino;
                </LItem>
                <LItem>
                  Crostas;
                </LItem>
                <LItem>
                  Cefaleia;
                </LItem>
                <LItem>
                  Coriza de intensidade variável.
                </LItem>
              </List>
          </Subsection>
        </Section>
        <Section title="Complicações Mais Frequentes">
          <P>
            Infecções tegumentares de diversos tipos, sendo as mais frequentes os impetigos bolhosos, as celulites e os abscessos tegumentares. Muitas vezes há abscessos subcutâneos múltiplos, sendo que alguns são intercomunicantes e que drenam para lesões de varicela ulceradas. Os agentes etiológicos que predominam são os Streptococcus do grupo A e os Staphylococcus aureus.
          </P>
          <P>
            Algumas crianças têm quadros infecciosos mais graves. Pneumonias bacterianas, inclusive com derrame e casos de sepse não são incomuns. Deve-se fazer acompanhamento da criança em nível ambulatorial nas semanas imediatamente seguintes à varicela, pois a doença causa imunodepressão transitória e muitas das complicações infecciosas ocorrem após a fase aguda.
          </P>
          <P>
            Uma complicação de frequência menor, porém muito grave, é a púrpura trombocitopênica imunológica (PTI) associada ao vírus varicela-zoster. Ao contrário da PTI encontrada com outros estímulos antigênicos, a plaquetopenia na varicela é abrupta e instala-se muito rapidamente, chegando a níveis de potenciais hemorragias graves em questão de horas. Dessa forma, a identificação de plaquetopenia abaixo de 100.000 plaquetas por mm3, durante ou após o quadro febril de varicela, deverá ser prontamente tratada com imunoglobulina humana intravenosa (IGIV), mesmo na ausência de sangramentos, conforme descrito a seguir.
          </P>
          <P>
            Pacientes que foram expostos a uma carga infectante muito elevada podem apresentar quadros mais intensos, geralmente aqueles que contraíram varicela a partir de um caso índice residente no domicílio e não a partir de um caso índice da escola ou da comunidade. Estes podem apresentar maior número de vesículas, erupção franca em membros além do tronco, febre mais alta ou contínua e menor polimorfismo regional. A ausência de polimorfismo e a distribuição centrífuga que no passado eram encontradas na extinta varíola foram as razões pelas quais frequentemente tais casos têm sido referidos como varicela “varioliforme” em nosso serviço.
          </P>
          <P>
            Síndrome de ataxia com ou sem vertigens e hiperemese, geralmente interpretada como cerebelite, pode ocorrer e é melhor conduzida com o paciente internado. Não se deve utilizar ácido acetil salicílico ou correlatos durante o quadro de varicela para evitar casos de síndrome de Reye, quando identifica-se degeneração hepática e neurológica fulminantes, com hipoglicemia, aumento de transaminases e hipertensão intracrania com coma e óbito.
          </P>
          <P>
            Também são mais raros os casos de encefalite e pneumonite virais. Estas são graves complicações com risco iminente de morte, identificados por quadro neurológico agressivo, com convulsões, sinais de lateralização e coma; ou por dispneia até insuficiência respiratória associadas a infiltrado intersticial difuso ao RX. Casos de envolvimento da córnea (ceratite) podem ocorrer e deve-se solicitar avaliação oftalmológica quando houver hiperemia ocular ou dor.
          </P>
        </Section>
        <Section title="Diagnóstico Laboratorial">
          <P>
            Não são feitas sorologias de rotina e o diagnóstico é clínico, fundamentado na observação do exantema bolhoso típico.
          </P>
          <P>
            Em todas as crianças que não estiverem bem, sobretudo para os que forem internar, é obrigatória a solicitação de pelo menos um hemograma para rastreamento de plaquetopenia.
          </P>
        </Section>
        <Section title="Critérios de Internação">
          <P>
            Critérios relativos: idade menor de 6 meses; prostração; febre maior de 39 graus, contínua por mais de 24 horas; retorno da febre após mais de 2 dias de período afebril; baixa ingesta a ponto de interferir no estado de hidratação; reconhecimento de infecções secundárias (cutâneas ou respiratórias); síndrome de Down; outras comorbidades; imunossuprimidos e imunodeprimidos.
          </P>
          <P>
            Critérios absolutos: sonolência; dispneia; ataxia; plaquetopenia; leucopenia; convulsão; desidratação; qualquer sinal de choque, qualquer outro sinal de gravidade.
          </P>
        </Section>
        <Section title="Tratamento Sintomático">
          <P>
            A grande maioria dos casos merece tratamento apenas sintomático.
          </P>
          <Subsection title="Febre">
            <P>
              Usar paracetamol ou dipirona. Explicar à mãe que o ácido acetil-salicílico não pode ser usado. A razão é a possibilidade de síndrome de Reye, que é uma degeneração hepática grave e irreversível, na qual o paciente cursa com hipoglicemia, aumento abrupto de transaminases e hipertensão intracraniana. Essa síndrome tem como fatores de risco: a varicela, a gripe e o uso de salicilatos. Embora não seja bem definida a associação com outros antiinflamatórios não hormonais, por similaridade, sugere-se evitar o uso de ibuprofeno para o controle da febre.
            </P>
          </Subsection>
          <Subsection title="Prurido">
            <P>
              Pasta d’agua mentolada ou produtos tópicos à base de calamina podem ser usados nas lesões novas (antes da fase de crosta). Banhos com chá de camomila podem dar muito alívio também. Não temos usado o talco mentolado. Crianças com prurido intenso podem ser medicadas com anti-histamínicos. Um exemplo é a hidroxizina, que pode ser usada em 2 ou 3 doses diárias, sendo que o medicamento é apresentado em xarope pediátrico na concentração de 2 mg/ml. Cada dose, nessa concentração, deve ser de 0,25 ml/kg, com o máximo de 10 ml/dose. Avisar à mãe que a criança poderá ficar sonolenta, ou irritada.
            </P>
          </Subsection>
          <Subsection title="Prevenção de complicações infecciosas na pele">
            <P>
              Permanganato de potássio 1:20.000 (diluir 1 unidade em 2 litros de água morna) em 2 ou 3 banhos ao dia. Orientar a mãe para cortar as unhas da criança.
            </P>
          </Subsection>
        </Section>
        <Section title="Tratamento Específico">
          <Subsection title="Aciclovir">
            <Subsubsection title="Indicações">
              <List>
                <LItem>
                  Desnutridos graves;
                </LItem>
                <LItem>
                  Portadores de infecção pelo HIV;
                </LItem>
                <LItem>
                  Pacientes com outras comorbidades (diabéticos, nefropatas, cardiopatas, pneumopatas, falcêmicos, entre outras);
                </LItem>
                <LItem>
                  Pacientes em corticoterapia por mais de 2 semanas;
                </LItem>
                <LItem>
                  Demais pacientes imunocomprometidos;
                </LItem>
                <LItem>
                  Prostração fora dos períodos de febre;
                </LItem>
                <LItem>
                  Lesões hemorrágicas;
                </LItem>
                <LItem>
                  Grande número de lesões com pouco polimorfismo regional, o que indica intensa viremia (varicela que lembra a varíola, ou "varioliforme");
                </LItem>
                <LItem>
                  Envolvimento pulmonar, encefálico, hepático ou cardíaco;
                </LItem>
                <LItem>
                  Pacientes que tenham contraído a doença em seu domicílio (quanto houver caso prévio na família) já que nesses casos, a carga viral infectante é presumivelmente maior, o que leva a quadros mais intensos;
                </LItem>
                <LItem>
                  Contactantes sadios susceptíveis que permaneçam internados entre o 9º e o 14º dia após o contato e para os quais tenha sido indicada a vacinação de bloqueio. Nesse caso a droga deve ser feita entre o 9º e o 14º dia após o contato;
                </LItem>
                <LItem>
                  Contactantes imunocomprometidos para os quais tenha sido indicada a imunoglobulina hiperimune específica, IGVZ. Nesse caso a droga deve ser iniciada no 9º dia após o contato.
                </LItem>
              </List>
            </Subsubsection>
            <Subsubsection title="Doses e Posologia">
              <List>
                <LItem>
                  Aciclovir intravenoso: 10 mg/Kg/Dose, diluído em solução glicosada e correndo em 60 minutos, com doses de 8/8 horas. Casos graves como os de encefalite, pneumonite e imunossupressão devem receber 500 mg/m2/dose. Tão logo haja melhora, substituir pela apresentação oral. A maioria dos pacientes terá um tratamento efetivo, incluindo as fases intravenosa e oral, com uma duração de 5 a 7 dias na maioria das indicações, mas nos casos graves, o tempo total deverá ser de pelo menos 14 dias;
                </LItem>
                <LItem>
                  Aciclovir oral: 20 mg/Kg/Dose, até uma dose máxima de 400 mg, com 4 doses de 6/6 horas. Adolescentes com mais de 60 Kg deverão receber o esquema de adultos: 400 mg de 4/4 horas, falhando a dose da madrugada, totalizando 5 doses ao dia;
                </LItem>
              </List>
            </Subsubsection>
            <Subsubsection title="Duração">
              <P>
                A duração padrão do tratamento em imunocompetentes é de 5 dias. Pode ser considerado um tratamento de 7 a 14 dias em imunocomprometidos ou em casos graves.
              </P>
            </Subsubsection>
          </Subsection>
        </Section>
        <Section title="Tratamento das Complicações">
          <Subsection title="Infecções tegumentares relacionadsa à varicela">
            <Subsubsection title="Cefazolina">
              <P>
                50 a 100 mg/Kg/Dia, fracionados em 4 infusões intravenosas de 6/6 horas; tão logo haja melhora da complicação, geralmente do 3o ao 5o dia de tratamento, procede-se à substituição por cefalexina. A duração total dessa sequência de antibióticos é variável, mas a maioria dos pacientes terá um tratamento efetivo de 10 dias, garantindo-se assim também a erradicação de possíveis focos estrepetocóccicos.
              </P>
            </Subsubsection>
            <Subsubsection title="Cefalexina">
              <P>
                50 a 100 mg/Kg/Dia, fracionados em 4 tomadas de 6/6 horas; a apresentação de 250 mg/5 ml em frascos de 100 ml é a mais comum. Há também comprimidos de 500 mg para adolescentes. Pelas razões anteriores, recomendam-se 10 dias de tratamento para a maioria dos pacientes.
              </P>
            </Subsubsection>
          </Subsection>
          <Subsection title="Trobocitopenia relacionada à varicela">
            <Subsubsection title="Imunoglobulina humana intravenosa (IGIV)">
              <P>
                Utilizar nos casos de plaquetopenia abaixo de 90.000 plaquetas por mm3, durante ou após o quadro febril de varicela. Fazer 400 mg/Kg/dia de 3 a 5 dias, conforme resposta hematológica satisfatória. Verificar se os frascos de IGIV são de 5 gramas ou de 6 gramas e calcular uma dose final em múltiplos de 5 ou 6 gramas, a fim de evitar qualquer desperdício (para tanto, a dose diária pode ser ligeiramente maior que 400 mg/Kg). A infusão deve ser em bomba de infusão, em 3 horas, a velocidade de infusão deverá ser calculada conforme o volume final do produto diluído, o que depende do fabricante, de modo que sugere-se calcular a partir da análise da bula. Durante a infusão, medir frequência cardíaca e pressão arterial a cada hora.
              </P>
            </Subsubsection>
          </Subsection>
        </Section>
        <Section title="Cuidados Antiinfecciosos">
          <P>
            De modo ideal o paciente deve ser mantido em regime de precauções de contato, gotículas e aerossóis. Quando não for possível fazer precauções contra aerossóis, sugere-se o seguinte:
          </P>
          <List>
            <LItem>
              Manter o paciente em quarto privativo, com antecâmera;
            </LItem>
            <LItem>
              Manter o quarto sempre com porta fechada;
            </LItem>
            <LItem>
              Restringir a entrada ao quarto a apenas pessoas não susceptíveis;
            </LItem>
            <LItem>
              Restringir a entrada ao quarto a apenas objetos esssenciais;
            </LItem>
            <LItem>
              Vigiar para que todos lavem muito bem as mãos antes e depois de entrar no quarto, mesmo se não examinarem o paciente e mesmo se não tocarem em qualquer objeto;
            </LItem>
            <LItem>
              Limpar com álcool a 70% o estetoscópio, termômetro e outros aparalhos que entrarem em contato com o paciente.
            </LItem>
          </List>
        </Section>
        <Section title="Cuidados quando houver um caso na enfermaria de Pediatria">
          <List>
            <LItem>
              Identificar o caso índice e estabelecer o período de transmissibilidade: 48h antes da 1ª vesícula até 7 dias depois;
            </LItem>
            <LItem>
              Colocar o caso índice em regime de precauções de contato e gotículas;
            </LItem>
            <LItem>
              Identificar quem teve contato com o caso índice: define-se como contactante quem esteve pelo menos 1 hora no mesmo recinto que o caso índice, ou quem tocou no caso índice;
            </LItem>
            <LItem>
              Identificar entre os contactantes que tem indicação para imunização passiva e ativa:
            </LItem>
            <LItem>
              Indicações de IGVZ – imunoglobulina hiperimune (imunização passiva);
            </LItem>
            <LItem>
              Indicações de vacinação (imunização ativa);
            </LItem>
            <LItem>
              Remanejar profissionais de saúde susceptíveis para não ter contato com o caso índice;
            </LItem>
            <LItem>
              Instituir precauções de contato e gotículas para os contactantes, entre o 8º e 21º dia depois da 1ª vesícula no caso índice (ou até 28º dia para quem usou IGVZ);
            </LItem>
            <LItem>
              Aciclovir pode ser usado para contactantes susceptíveis que não preencham os critérios para IGVZ entre o 9º e o 14º dia após o contato.
            </LItem>
          </List>
        </Section>
        <Section title="Critérios de Alta">
          <P>
            Bom estado geral; ausência de febre há mais de 48 horas; Lesões de pele frias, indolores e em processo de cicatrização; em casos de drenagem cirúrgica de abscessos, providenciar a retirada do dreno; analisar critérios de alta em conjunto com a enfermagem se o paciente estiver em uso de curativos que necessitem de coberturas especiais.
          </P>
        </Section>
        <Section title="Prognóstico e Orientações para o Seguimento">
          <P>
            Todos os casos deverão retornar para reavaliação na enfermaria após a alta, em no máximo 1 semana. Retornos precoces em até 2 dias poderão ser necessários em alguns poucos casos selecionados quando o objetivo for monitorar recaídas ou falhas terapêuticas. Em casos de plaquetopenia, durante a internação, fazer hemograma diário para monitorar resposta terapêutica, salvo casos especiais.
          </P>
        </Section>
        <Section title="Imunização Passiva (Imunoglobulina Hiperimune - IGVZ)">
          <List>
            <LItem>
              Imunocomprometidos susceptíveis;
            </LItem>
            <LItem>
              Gestantes susceptíveis;
            </LItem>
            <LItem>
              RN prematuro com menos de 28 semanas (ou 1000 g);
            </LItem>
            <LItem>
              RN prematuro com mãe sem história de varicela;
            </LItem>
            <LItem>
              RN nascido de mãe com varicela na época do parto (5 dias antes até 2 dias depois);
            </LItem>
            <LItem>
              IMUNIZAÇÃO ATIVA (VACINA);
            </LItem>
            <LItem>
              Imunocompetentes susceptíveis;
            </LItem>
            <LItem>
              Profissionais de saúde;
            </LItem>
            <LItem>
              Outros pacientes susceptíveis da enfermaria (vacinação de bloqueio);
            </LItem>
            <LItem>
              Imunocomprometidos especiais;
            </LItem>
            <LItem>
              Paciente com infecção pelo HIV, assintomático e com CD4 normal;
            </LItem>
            <LItem>
              Paciente com LLA ou tumor sólido em remissão há pelo menos 12 meses (com pelo menos 1200 linfócitos/mm3);
            </LItem>
            <LItem>
              Paciente com LLA em quimioterapia, desde que não tenham sido administrados quimioterápicos nos últimos 7 dias e não venham a ser administrados nos 7 dias seguintes.
            </LItem>
          </List>
        </Section>
        <Section title="Referências">
        <Reference idx={1} body="Amaku M, Azevedo RS, Castro RM, Massad E, Coutinho FA. Relationship among epidemiological parameters of six childhood infections in a non-immunized Brazilian community. Mem Inst Oswaldo Cruz 2009;104:897-900."/>
        <Reference idx={2} body="Lecuyer A, Levy C, Gaudelus J, et al. Hospitalization of newborns and young infants for chickenpox in France. Eur J Pediatr 2010;169:1293-7."/>
        <Reference idx={3} body="Reis AD, Pannuti CS, de Souza VA. [Prevalence of varicella-zoster virus antibodies in young adults from different Brazilian climatic regions]. Rev Soc Bras Med Trop 2003;36:317-20."/>
        <Reference idx={4} body="Reynolds MA, Watson BM, Plott-Adams KK, et al. Epidemiology of varicella hospitalizations in the United States, 1995-2005. J Infect Dis 2008;197 Suppl 2:S120-6."/>
        <Reference idx={5} body="Sakane P, Rossi Jr A, Baldacci E, Aoshima D, Marques HHS. Medidas de controle em comunicantes de varicela em ambiente hospitalar. Pediatria (São Paulo). 2005;27(3):206-9."/>
        <Reference idx={6} body="SBP. Pediatria: prevenção e controle de infecção hospitalar. Ed. Anvisa, Brasília, 2006. Disponível em <http://www.anvisa.gov.br/servicosaude/manuais/manual_pediatria.pdf>, acessado em 22/04/2019."/>
        <Reference idx={7} body="Succi RC, Peres LV. Varicela-Zoster. In: Farhat CK, Carvalho ES, Carvalho LH, Succi RC, editors. Infectologia Pediátrica. 2.ed. São Paulo: Atheneu; 1998. p.497-506."/>
        <Reference idx={8} body="Valentim J, Sartori AM, de Soarez PC, Amaku M, Azevedo RS, Novaes HM. Cost-effectiveness analysis of universal childhood vaccination against varicella in Brazil. Vaccine 2008;26:6281-91."/>
        </Section>
    </Routine>
}