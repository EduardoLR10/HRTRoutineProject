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

export default class Adenomegalias extends React.Component {

  static title = "Adenomegalias"
  static category = "Infectologia"
  static authors = "Dr. Marco Antônio Alves Cunha e Dr. Iúri Leão de Almeida"

    render = () =>
      <Routine title={Adenomegalias.title} category={Adenomegalias.category} authors={Adenomegalias.authors}>
        <Section title="Conceito">
            <List>
                <LItem>
                    Supraclaviculares - sempre anormais.
                </LItem>
                <LItem>
                    Ilíacos - sempre anormais.
                </LItem>
                <LItem>
                    Poplíteos - sempre anormais.
                </LItem>
                <LItem>
                    Epitrocleares - normais até 5 mm.
                </LItem>
                <LItem>
                    Inguinais - normais até 15 mm.
                </LItem>
                <LItem>
                    Demais regiões - normais até 10 mm.
                </LItem>
            </List>
        </Section>
        <Section title="Causas Infecciosas">
            <List>
                <LItem>
                    Reação ganglionar a infecções na área de drenagem linfática;
                </LItem>
                <LItem>
                    Adenites inespecíficas: S.aureus;
                </LItem>
                <LItem>
                    Streptococcus do grupo A;
                </LItem>
                <LItem>
                    Infecções por vírus da família herpes: CMV e EBV;
                </LItem>
                <LItem>
                    Tuberculose ganglionar;
                </LItem>
                <LItem>
                    Infecção pelo BCG;
                </LItem>
                <LItem>
                    Infecção pelo HIV;
                </LItem>
                <LItem>
                    Rubéola;
                </LItem>
                <LItem>
                    Toxoplasmose;
                </LItem>
                <LItem>
                    Doença da Arranhadura do gato: Bartonella henselae;
                </LItem>
                <LItem>
                    Alguns vírus respiratórios: adenovírus, coxackie;
                </LItem>
                <LItem>
                    Micoses profundas: esporotricose, paracoccidioidomicose;
                </LItem>
                <LItem>
                    Kawasaki.
                </LItem>
            </List>
        </Section>
        <Section title="Causas Neoplásticas">
            <List>
                <LItem>
                    Linfomas;
                </LItem>
                <LItem>
                    Leucemias;
                </LItem>
                <LItem>
                    Tumores da tireóide;
                </LItem>
                <LItem>
                    Neuroblastoma;
                </LItem>
                <LItem>
                    Outros tumores;
                </LItem>
                <LItem>
                    Metástases.
                </LItem>
            </List>
        </Section>
        <Section title="Parece, mas não é Adenomegalia">
            <List>
                <LItem>
                    Cisto Branquial;
                </LItem>
                <LItem>
                    Cisto Broncogênico;
                </LItem>
                <LItem>
                    Higromas císticos;
                </LItem>
                <LItem>
                    Cisto tireoglosso;
                </LItem>
                <LItem>
                    Cisto epidermóide.
                </LItem>
            </List>
        </Section>
        <Section title="Adenite">
            <List>
                <LItem>
                    Caso particular de adenomegalia;
                </LItem>
                <LItem>
                    Geralmente de causa infecciosa;
                </LItem>
                <LItem>
                    Inflamação local (com dor e eritema);
                </LItem>
                <LItem>
                    Flutuação às vezes;
                </LItem>
                <LItem>
                    Drenagem de material purulento, ocasionalmente;
                </LItem>
                <LItem>
                    Sinais e sintomas sistêmicos (febre, toxemia).
                </LItem>
            </List>
        </Section>
        <Section title="Dados para colher na História">
            <List>
                <LItem>
                    Faixa etária;
                </LItem>
                <LItem>
                    Estado da dentição;
                </LItem>
                <LItem>
                    Contatos com animais;
                </LItem>
                <LItem>
                    Lesões de pele;
                </LItem>
                <LItem>
                    Presença de esplenomegalia;
                </LItem>
                <LItem>
                    Perdas de peso;
                </LItem>
                <LItem>
                    Contatos com pessoas doentes;
                </LItem>
                <LItem>
                    Estado vacinal.
                </LItem>
            </List>
        </Section>
        <Section title="Padrões de Adenomegalias Observados Habitualmente">
            <List>
                <LItem>
                    Padrão 1: Cervicais benignos recorrentes.
                </LItem>
                <LItem>
                    Padrão 2: Cervicais unilaterais agudas.
                </LItem>
                <LItem>
                    Padrão 3: Generalizadas febris com síndrome mono-like.
                </LItem>
                <LItem>
                    Padrão 4: Complicadas (demoradas, ou com sinais de malignidade).
                </LItem>
            </List>
            <Subsection title="Padrão 1">
                <P>
                    Criança sadia; ganhando peso; bem corada; lactente ou pré-escolar;
                </P>
                <P>
                    Gânglios cervicais bilaterais, pequenos (até 0,5 cm), indolores, múltiplos, móveis, elásticos, não aderidos, sem sinais flogísticos;
                </P>
                <P>
                    Recorrentes: reaparecem a cada episódio de infecção de vias aéreas;
                </P>
            </Subsection>
            <Subsection title="Padrão 2">
                <P>
                    É o padrão típico da adenite. Geralmente a adenite é cervical. Geralmente ocorre em pré-escolares e lactentes. É mais rara em escolares. A adenite causa sinais e sintomas sistêmicos, com febre, leucocitose, desvio à esquerda, e toxemia. Localmente ocorre dor, rubor, calor, edema quente, endurecimento no local do(s) gângli(os) e a possibilidade de envolvimento de uma massa ganglionar. Pode ocorrer a formação de pus no interior dos gânglios, os quais passam a comportar-se como abscessos, com melhora após drenagem ou, mais lentamente, após reabsorção. Na adenite, a segurança e a certeza de benignidade acontece com a redução do gânglio na vigência de tratamento com antibióticos; como quase sempre a etiologia é estafilocóccica ou estreptocóccica (GAS), opta-se por uma cefalosporina de 1ª geração (cefazolina seguida de/ou cefalexina); menos comumente, pode ocorrer casos de adenomegalia com rinossinusite, quando o melhor é ceftriaxona ou ampicilina-sulbactam se forem internados (estes pacientes apresentam-se como: respiradores bucais, com roncos noturnos, tosse há semanas, catarro antigo em vias aéreas superiores, olheiras, velamento de seios maxilares ao RX, velamento da coluna aérea do cavum por hipertrofia de adenoides). Neste padrão de adenomegalia, solicita-se apenas hemograma pela urgência. Se o gânglio estiver reduzindo com os antibióticos e, se não houver alterações grosseiras (anemia com hto {'<'} 27%; plaquetopenia; leucopenia; blastos), dá-se o caso por resolvido. Não esqueça de prescrever budesonida nasal!
                </P>
            </Subsection>
            <Subsection title="Padrão 3">
                <P>
                    São adenomegalias que fazem parte de uma síndrome maior; ocorrem alguns dos seguintes achados: febre, hepatoesplenomegalia, exantema; edema palpebral simétrico, exsudato amigdaliano, linfocitose atípica, pouca elevação de transaminases, aumento de DHL na faixa de 1000 a 1500. Nestes pacientes, é importante a pesquisa sorológica abrangente, além de 
                </P>
                <P>
                    Hemograma pelo Banco de Sangue; VHS; DHL; Sorologias (ELISA):Toxo; CMV; EBV-Capsídeo Viral; HIV. Além de: PPD; Rx (ou TC) de tórax. Novamente, há certa tranquilidade em verificar que houve redução dos gânglios a dado momento da doença, o que diminui o risco de malignidade.
                </P>
            </Subsection>
            <Subsection title="Padrão 4">
                <P>
                    São adenomegalias com gânglios crônicos ({'>'} 8 semanas) ou de rápido crescimento sem sinais flogísticos, ou com sinais de malignidade, ou que preocupam a família ou o médico com a possibilidade de malignidade. Nestes casos, está indicada a biópsia do gânglio. O paciente deverá ser internado para investigação e, enquanto se batalha para conseguir a biópsia, solicitam-se os exames de sorologia e imagem do padrão 3, além de hemograma e DHL seriados.
                </P>
            </Subsection>
        </Section>
        <Section title="Sinais de Alerta para Malignidade">
            <List>
                <LItem>
                    Palidez cutâneomucosa ou anemia moderadas;
                </LItem>
                <LItem>
                    Febre persistente;
                </LItem>
                <LItem>
                    Emagrecimento;
                </LItem>
                <LItem>
                    Hepato e/ou Esplenomegalia acentuadas e persistentes;
                </LItem>
                <LItem>
                    Gânglios: aderidos; coalescentes; endurecidos (com consistência lenhosa ou pétrea); supraclaviculares ou ilíacos; DHL acima de 2000 ou VHS acima de 100; envolvimento mediastinal no RX de tórax;
                </LItem>
                <LItem>
                    Indicações formais de biópsia;
                </LItem>
                <LItem>
                    Gânglio supraclavicular;
                </LItem>
                <LItem>
                    Massas de crescimento rápido sem diagnóstico confirmado;
                </LItem>
                <LItem>
                    Gânglios endurecidos ou aderidos a outros planos;
                </LItem>
                <LItem>
                    Ausência de sinais flogísticos em massa ganglionar;
                </LItem>
                <LItem>
                    Adenomegalia que incomoda por mais de 8 semanas.
                </LItem>
            </List>
            <Figure source={img1} top_label="Condução após Identificação do Padrão da Adenomegalia" bottom_label="HC: Hemograma completo; IVAS: infecção de vias aéreas superiores."/>
        </Section>
        <Section title="Critérios de Internação">
            <P>
                Por razões locais que são específicas do nosso serviço, recomendamos internar as crianças com os padrões 3 ou 4 para facilitar a condução dos casos. Em qualquer contexto, devem ser internadas as crianças com estado geral comprometido, em especial as menores de 2 anos; Intolerância à medicação oral ou falha de tratamento oral prévio também são motivos de internação.
            </P>
        </Section>
        <Section title="Tratamento Específico de Pacientes com Adenite Bacteriana">
            <Subsection title="1ª escolha">
                <List>
                    <LItem>
                        EV cefazolina 100 mg/kg/dia de 6/6h ou
                    </LItem>
                    <LItem>
                        VO cefalexina 50 a 100 mg/kg/dia de 6/6h.
                    </LItem>
                </List>
            </Subsection>
            <Subsection title="2ª escolha">
                <P>
                    Clindamicina 10 mg/kg/dose de 8/8h ou 6/6h. A clindamicina deve ser administrada preferencialmente por via venosa. A formulação oral manipulada pode ser tentada, mas é mais apropriada para terminar os tratamentos iniciados por via venosa, uma vez que dão muita dispepsia e o sabor é muito amargo.
                </P>
            </Subsection>
        </Section>
        <Section title="Casos que NÃO se encaixam nos Padrões Descritos">
            <P>
                A maioria dos pacientes vai enquadrar-se em um dos padrões descritos, mas nem todos. Por isso, o seguimento é indispensável. Pensar nas muitas etiologias possíveis é também muito importante para o diagnóstico. Em todos os casos são necessários anamnese e exame físico minuciosos e exames complementares bem indicados, de forma gradativa.
            </P>
        </Section>
        <Section title="Referências">
        <Reference idx={1} body="Farhat CK, Carvalho ES, Carvalho LH, Succi RC, editors. Infectologia Pediátrica. 3.ed. São Paulo: Atheneu; 2007."/>
        <Reference idx={2} body="Krugman S, Katz SL, Gershon AA, Wilfert CM. Doenças Infecciosas na Infância. 9.ed. Rio de Janeiro: Guanabara Koogan; 1994."/>
        <Reference idx={3} body="Kelly CS, Kelly Jr RE. Lymphadenopathy in Children. Pediatr Clin North Am 1998 Aug;45 (4):875-88."/>
        <Reference idx={4} body="Freire LM, Teixeira Júnior JF. Diagnóstico Diferencial das Adenomegalias. In: : Tonelli E, Freire LM, editors. Doenças Infecciosas na Infância e Adolescência. 2.ed. Rio de Janeiro: Editora Medsi; 2000. p.1850-67."/>
        </Section>
    </Routine>
}