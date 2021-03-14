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

export default function IVAS3(): JSX.Element {
  return (
    <Routine
      id="ivas3"
      name="IVAS 3 - Rinossinusite Aguda"
      categories={['pneumologia']}
      authors={['renato']}
      tags={['sinusite']}
    >
      <Section title="Introdução">
        <P>
          Os seios paranasais constituem-se de cavidades que pertencem a quatro
          estruturas ósseas: etmoidal, maxilar, esfenoidal e frontal. Apenas os
          seios etmoidais estão pneumatizados ao nascimento; os maxilares
          pneumatizam-se após os 4 meses de vida, e os esfenoidais por volta dos
          3 aos 5 anos e os frontais, entre 7 e 10 anos.
        </P>
      </Section>
      <Section title="Definição">
        <P>
          Trata-se de uma doença que resulta da infecção de um ou mais seios
          paranasais, causada por agentes virais ou bacterianos.
        </P>
      </Section>
      <Section title="Epidemiologia">
        <P>
          Vários fatores sistêmicos e locais referentes às crianças devem ser
          considerados na patogênese da sinusite, dentre elas: infecções de vias
          aéreas superiores de repetição, permanência em creche, rinite alérgica
          não tratada, exposição a agentes irritantes (tabaco, poluição, ar
          seco), discinesia ciliar primária.
        </P>
        <P>
          Hipertrofia de adenóides, desvio de septo, concha bolhosa, pólipo
          nasal ou até mesmo, corpo estranho, muito frequente na faixa etária
          pediátrica, podem predispor à rinossinusite bacteriana. As crianças
          que apresentam suspeita de fatores predisponentes anatômicos devem
          realizar endoscopia nasal.
        </P>
      </Section>
      <Section title="Etiologia">
        <P>
          A maioria das rinossinusites é de etiologia viral (rinovírus,
          adenovírus, vírus sincicial respiratório, parainfluenza), consequência
          direta das rinofaringites virais.
        </P>
        <P>
          Nas rinossinusites bacterianas agudas (RBA), os principais agentes
          envolvidos são os microorganismos aeróbios que habitualmente colonizam
          a cavidade nasal: <Italic>Streptococcus pneumoniae</Italic> (30%),{' '}
          <Italic>Haemophilus influenzae</Italic> não tipável (20%) e{' '}
          <Italic>Moraxella catarrhalis</Italic> (10% a 20%).
        </P>
        <P>
          Aproximadamente 50% dos casos de H. influenzae e 100% dos casos de{' '}
          <Italic>M. catarrhalis</Italic> são produtores de Beta-lactamase.
        </P>
        <P>
          Nos casos de obstrução ostial prolongada, levando a sinusite crônica,
          outros microorganismos, como o <Italic>Staphylococcus aureus</Italic>{' '}
          e diversas bactérias anaeróbias, podem desenvolver-se.
        </P>
      </Section>
      <Section title="Quadro Clínico">
        <P>
          As manifestações clínicas da rinosinusite aguda podem ser
          inespecíficas: congestão/secreção nasal, febre, tosse, halitose,
          diminuição do olfato, edema periorbital.
        </P>
        <P>
          A tosse e o corrimento nasal, embora não sejam específicos, podem
          estar presentes e se acentuar ao decúbito dorsal.
        </P>
        <P>
          Durante todo o episódio infeccioso, a mucosa está hiperemiada. A
          secreção inicialmente é hialina, tornando-se mucóide e depois,
          francamente purulenta (verde e espessa), especialmente pela manhã ao
          acordar, sem significar, necessariamente, que a infecção seja
          bacteriana.
        </P>
        <P>
          Queixas de cefaleia e dor facial (no seio da face afetado ou nos
          dentes) são mais comuns em adolescentes e incomuns em crianças.
        </P>
      </Section>
      <Section title="Diagnóstico">
        <P>É eminentemente clínico, dispensando exames de imagem.</P>
        <P>
          Segundo o <Italic>guideline</Italic> de 2013 da Associação Americana
          de Pediatria (AAP), o diagnóstico de RBA deve ser realizado quando a
          criança apresentar infecção aguda das vias aéreas superiores nas
          seguintes situações:
        </P>
        <List>
          <LItem>
            Persistência dos sintomas: secreção nasal de qualquer quantidade ou
            tosse diurna e noturna ou ambas com duração superior a 10 dias sem
            melhora;
          </LItem>
          <LItem>
            Início com sintomas respiratórios graves: febre superior a 39°C e
            secreção nasal purulenta por 3 a 4 dias consecutivos;
          </LItem>
          <LItem>
            Piora do curso da doença: piora ou início de secreção nasal, tosse
            diurna ou febre após melhora inicial.
          </LItem>
        </List>
        <P>
          O exame da cavidade nasal pode ser realizado com o próprio otoscópio,
          utilizando um espéculo com maior diâmetro. O exame da cavidade nasal
          visa verificar a coloração da mucosa e o aspecto da secreção. Ao exame
          físico, podem-se encontrar mucosa nasal eritematosa e/ou edemaciada e,
          também, a secreção mucopurulenta em nasofaringe posterior, "sinal da
          gota pós-nasal”.
        </P>
        <P>
          Exames de imagem confirmam apenas a presença de inflamação dos seios,
          não possibilitando a distinção das causas virais, bacterianas ou
          alérgicas. É indicado realização de exame de imagem apenas quando
          houver suspeita de complicações orbitárias ou intracranianas.
        </P>
      </Section>
      <Section title="Tratamento">
        <Subsection title="Soluções salinas a 0,9%">
          <P>
            A irrigação da mucosa nasal com soluções salinas aumenta a
            frequência do batimento ciliar e reduz o edema da mucosa, diminuindo
            a obstrução nasal. Podem ser usadas como terapêutica adjuvante, sem
            os riscos potenciais e as inconveniências das drogas, além da
            comodidade e do baixo custo. As irrigações podem ser realizadas
            várias vezes ao dia, principalmente antes da criança dormir e antes
            de se alimentar ou mamar. As soluções salinas hipertônicas são,
            geralmente, pouco toleradas pelas crianças (irritam a mucosa nasal)
            e possuem indicações mais restritas na faixa etária pediátrica.
          </P>
        </Subsection>
        <Subsection title="Antibióticos">
          <P>
            A Amoxicilina é o agente antimicrobiano de escolha para tratamento
            de primeira linha de RBA não complicada, em situações em que não há
            suspeita de resistência antimicrobiana.
          </P>
          <P>Dose: 50 mg/kg/dia, dividido em 3 doses, por 14 dias.</P>
          <P>
            Deve-se aumentar a dose de amoxicilina para 80 - 100 mg/kg/dia,
            dividido em três doses (máximo 500 mg por dose), se houver fatores
            de risco: uso de amoxicilina nos últimos três meses, rotina de
            frequentar creche, idade inferior a 2 anos, frequência alta de
            pneumococo parcialmente resistente na comunidade.
          </P>
          <P>
            Amoxicilina com Clavulanato de potássio é indicado para crianças com
            doença moderada, idade inferior a 2 anos ou que tenham sido tratadas
            recentemente com antibiótico, febre maior que 39°C, crianças que
            frequentam creche, cefaleia intensa.
          </P>
          <P>
            Dose: 90 mg/kg/dia de amoxicilina com 6,4 mg/kg/dia de Clavulanato
            de potássio, dividido em 3 doses, por 14 dias.
          </P>
          <P>
            <Bold>Ceftriaxona:</Bold> utilizada em crianças com vômitos,
            incapazes de tolerar medicação oral ou com pouca probabilidade de
            aderir às doses iniciais de antibiótico.
          </P>
          <P>
            Dose: 50 mg/kg, dose única diária, por 3 a 5 dias. Após as doses
            iniciais, o tratamento deve ser complementado com uma cefalosporina
            de segunda geração (Cefuroxima), por via oral.
          </P>
          <P>
            Ao suspeitar de <Italic>H. influenzae</Italic> ou{' '}
            <Italic>M catarrhalis</Italic>, deve-se optar por Amoxicilina com
            Clavulanato de potássio, Azitromicina, Claritromicina ou Cefuroxima.
            Tais opções também devem ser realizadas nos casos em que houve falha
            terapêutica com amoxicilina.
          </P>
          <P>Paciente alérgicos à penicilina podem ser tratados com:</P>
          <List>
            <LItem>
              Azitromicina – 10 mg/kg/dia de 24 em 24 horas, por 5 dias;
            </LItem>
            <LItem>
              Cefuroxima – 30 mg/kg/dia de 12 em 12 horas, por 10 dias;
            </LItem>
            <LItem>
              Claritromicina – 15 mg/kg/dia de 12 em 12 horas, por 10 dias;
            </LItem>
            <LItem>
              Clindamicina – 15 mg/kg/dia de 8 em 8 horas, por 7 dias.
            </LItem>
          </List>
          <P>
            Se o paciente não apresentar melhora ou se houver piora após 72
            horas, deve-se suspeitar de complicações e a conduta será solicitar
            tomografia de seios da face e considerar a internação com
            escalonamento do antimicrobiano.
          </P>
        </Subsection>
        <Subsection title="Corticoides Tópicos Nasais">
          <P>
            Devem ser utilizados para diminuir o edema da mucosa nasal e
            especialmente do óstio do seio paranasal, facilitando a drenagem.
          </P>
          <P>
            Dose recomendada (budesonida - 50 microgramas por jato): um jato em
            cada cavidade nasal, 2 vezes ao dia.
          </P>
        </Subsection>
        <Subsection title="Anti-Histamínicos e Desconfestionantes">
          <P>Não estão indicados para o tratamento.</P>
        </Subsection>
        <Subsection title="Cirurgia">
          <P>
            Eventualmente o tratamento cirúrgico é necessário, principalmente
            quando a sinusite é secundária a fatores obstrutivos ou malformação
            dos seios paranasais.
          </P>
        </Subsection>
      </Section>
      <Section title="Diagnóstico Diferencial">
        <P>
          Corpo estranho, Infecção das vias aéreas superiores, outras rinites (não-alérgicas).
        </P>
      </Section>
      <Section title="Complicações">
        <P>
          As complicações secundárias à rinossinusite, como abscessos, celulite
          periorbital, meningite, osteomielite e trombose de seio cavernoso, são
          sempre graves.
        </P>
        <P>
          Se a criança apresentar edema de órbita ou prostração intensa é
          indicada a realização de tomografia computadorizada ou ressonância
          magnética de seios paranasais.
        </P>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Araujo JM. Infecções das vias aéreas superiores. IN: Rotinas ambulatoriais em infectologia para o pediatra; Cruz MLS, Cardoso CAA, Gaspar MCS, organizadores. São Paulo: Editora Atheneu. 2012. p.159-81."
        />
        <Reference
          idx={2}
          body="Berezin EN. Infecções de vias aéreas superiores. IN: Sociedade Brasileira de Pediatria; Campos Junior D, Burns DAR, Lopez FA, organizadores. TRATADO DE PEDIATRIA. Barueri: Manole; 2014. p.1478-81."
        />
        <Reference
          idx={3}
          body="Godinho RN, Ibiapina CC, Ganem CA. Infecções das vias aéreas superiores, rinites e rinossinusites. IN: Sociedade Brasileira de Pediatria; Leone C, Cabral SA, organizadores. PROPED Programa de Atualização em Terapêutica Pediátrica: Ciclo 5. Porto Alegre: Artmed Panamericana; 2018. p.51-71. (Sistema de Educação Continuada a Distância, v.1)."
        />
        <Reference
          idx={4}
          body="Oliveira RG. Otite. Blacbook Pediatria. 5ed. Belo Horizonte: Black Book Editora. 2014. p. 354-8."
        />
        <Reference
          idx={5}
          body="Pechebea MD, Vita WP. Otite média, Sinusite e Tonsilite Agudas. IN: Sociedade Brasileira de Pediatria; Simon Junior H, Pascolat G, organizadores. PROEMPED Programa de Atualização em Emergência Pediátrica: Ciclo 2. Porto Alegre: Artmed Panamericana; 2018. p.55-103. Sistema de Educação Continuada a Distância, v.2)."
        />
        <Reference
          idx={6}
          body="Pignatari SSN, Piganatari ACC. Antibióticos no tratamento das rinossinusites aguda: up-to-date. IN: Associação Brasileira de Otorrinolaringologia e Cirurgia Cérvico-Facial; Lessa MM, FR, Abrahão M, Caldas Neto SS, organizadors. PRO-ORL Programa de Atualização em Otorrinolaringologia: Ciclo 12. Porto Alegre: Artmed Panamericana; 2018. p.141-55. (Sistema de Educação Continuada a Distância, v.2)."
        />
        <Reference
          idx={7}
          body="Ramos BD. Rinossinusites recorrentes. IN: Sociedade Brasileira de Pediatria; Leone C, Cabral SA, organizadores. PROPED Programa de Atualização em Terapêutica Pediátrica: Ciclo 3. Porto Alegre: Artmed Panamericana; 2016. p.113-36. (Sistema de Educação Continuada a Distância, v.3)."
        />
        <Reference
          idx={8}
          body="Ramos BD, Pereira MBR. Otite Média Aguda Recorrente. IN: Sociedade Brasileira de Pediatria; Ramos BD, organizador. PRONAP Programa Nacional de Educação Continuada em Pediatria: Ciclo 18. São Paulo: 2015. p.18-29. Sistema de Educação Continuada a Distância, n.1."
        />
      </Section>
    </Routine>
  )
}
