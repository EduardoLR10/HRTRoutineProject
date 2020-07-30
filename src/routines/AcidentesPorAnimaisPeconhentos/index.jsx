import React from 'react'
import { Image } from 'react-native'
import P from '../../components/templates/Paragraph'
import Routine from '../../components/templates/Routine'
import Section from '../../components/templates/Section'
import Subsection from '../../components/templates/Subsection'

import img1 from './images/image1.jpg'
import img2 from './images/image2.jpg'
import img3 from './images/image3.jpg'

export default class AcidentensPorAnimaisPeconhentos extends React.Component {

  render = () =>
    <Routine title="Acidentes Por Animais Peçonhentos">
      <Section title="Introdução">
        <P>
          São aqueles provocados por picadas ou mordeduras de animais dotados de glândulas secretoras e
          aparelhos inoculadores de veneno.
        </P><P>
          Estes acidentes são de notificação compulsória no Brasil, desde 31 de agosto de 2010, publicado na Portaria Nº 2.472 (ratificada na Portaria Nº 204, de 17 de fevereiro de 2016)¹.
        </P><P>
          No Brasil a incidência destes acidentes em 2000 era de 18,7 e saltou para 108,2 em 2017. A região centro-oeste saltou de 19,6 para 77,7 e no Distrito Federal de 21,9 para 41,5, nos respectivos anos².
        </P><P>
          O diagnóstico deve levar em consideração vários aspectos para determinar o tratamento, como o local do acidente, o tempo decorrido até a assistência, os sinais e sintomas iniciais e a evolução destes, os exames laboratoriais e o conhecimento do socorrista.
        </P><P>
          Antes de descrevermos sobre os acidentes é bom entender que para todos os casos o tratamento deve ser geral e específico.
        </P>
        <Subsection title="Tratamento geral">
          <P>
            Consiste em dar suporte no estado de hidratação, analgesia, suporte ventilatório e circulatório, renal e efeitos adversos dos medicamentos.
          </P>
        </Subsection>
        <Subsection title="Tratamento específico">
          <P>
            O soro contra o veneno será descrito para cada caso, porém devemos saber que a dose calculada deve ser única, não fracionada, IV, diluído ou não e para crianças ou adulto a quantidade é a mesma, varia conforme a gravidade. Não fazer teste de sensibilidade, deve-se fazer pré-medicação com corticoide e anti-histamínico. Se ocorrer anafilaxia o soro deve ser suspenso e o tratamento de suporte respiratório e circulatório deve ser instituído, assim como iniciar adrenalina, corticoide e anti-histamínico. Tão logo o quadro seja controlado o soro deve ser retomado, porém mais lento. Assim se repete quantas vezes for necessária. A prednisona pode ser indicada para controle de reação tardia.
          </P>
        </Subsection>
        <P>
          Os principais animais peçonhentos que causam acidentes graves no Brasil são algumas
          espécies de serpentes, de escorpiões, de aranhas e lagartas.
        </P><P>
          A reação à picada depende de algumas variáveis como a parte do corpo atingida, a quantidade
          de veneno injetado, o peso e as comorbidades da vítima, o tempo de início do tratamento e a
          espécie do animal envolvido.
        </P><P>
          O diagnóstico e a classificação de gravidade são eminentemente clínicos, uma vez que o
          agente causador do acidente raramente é trazido ao hospital.
        </P><P>
          O tratamento geral e específico depende das reações apresentadas que podem ser leves,
          moderadas ou graves. Especialistas recomendam às vítimas que recebam o soro o mais rápido
          possível, de preferência antes das primeiras três horas após o ataque.
        </P><P>
          Operatório: quando houver necessidade de desbridamento de tecido necrótico ou fasciotomia
          por síndrome compartimental.
        </P>
      </Section>

      <Section title="Serpentes">
        <P>
          As cobras venenosas do Brasil são facilmente identificáveis por causa da fosseta loreal que
          consiste em dois orifícios situados entre a narina e o olho, um em cada lado da cabeça (com
          exceção do coral verdadeira) – fig.1.
        </P>
        <Image source={img1} />
        <Subsection title="Acidente botrópico(causado por serpentes do grupo das jararacas – fig.2).">
          <P>
            Causa a maioria dos acidentes com cobras no Brasil – 75% a 85%. O Cerrado é o seu
            principal habitat. Possuem escamas, é o que as diferencia de outras espécies. Variadas tonalidades de marrom.
          </P>
          <Image source={img2} />
          <Image source={img3} />
        </Subsection>
      </Section>
    </Routine>
} 