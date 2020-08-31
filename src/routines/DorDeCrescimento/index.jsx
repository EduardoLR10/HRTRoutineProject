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

export default class DorDeCrescimento extends React.Component {

  static title = "Dor de Crescimento"
  static category = "Hematologia, Reumatologia e Nefrologia"
  static authors = "Dra. Dania Lemos Dionízio"
  static tags = ["dor", "pernas", "perna"]

    render = () =>
      <Routine title={DorDeCrescimento.title} category={DorDeCrescimento.category} authors={DorDeCrescimento.authors}>
          <Section title="Causa">
            <P>
                É a causa mais comum de dores em membros na infância: 
            </P>
            <P>
                É um termo incorreto, pois nunca se provou qualquer relação entre as dores e a estatura final ou entre o peso e a velocidade de crescimento. Como a dor é de difícil definição e não persiste após cessado o crescimento, apesar de incorreta e não traduzir a etiologia, o termo “dor de crescimento” foi consagrado pelo uso, sendo capaz de tranquilizar a família, que o aceita não como uma doença, mas como um evento passageiro durante a infância.
            </P>
          </Section>
          <Section title="Como Acontece">
            <P>
                É um complexo sintomático muito específico, consistindo em uma dor profunda, bilateral, de localização vaga, geralmente em membros inferiores, especialmente na porção anterior das pernas, coxas, panturrilhas e espaços poplíteos. Podem ocorrer também nos ombros, braços e virilhas. A dor é tipicamente muscular, às vezes periarticular e, raramente, articular. Pode ser tão intensa, a ponto de interromper as atividades prazerosas da criança ou despertando-a do sono aos prantos. Os episódios dolorosos são geralmente intermitentes, surgem principalmente no fim da tarde ou à noite e tendem a ser mais acentuados nos dias em que a criança fez mais atividade física. Habitualmente, a criança estava bem quando foi dormir, acordando no meio da noite chorando de dor, durando de 20 a 30 minutos, melhorando com calor local e massagem. A criança acorda no outro dia totalmente assintomática. Essas dores podem se repetir diariamente ou com longos intervalos, recorrendo por meses ou anos antes de entrarem completamente em remissão.
            </P>
          </Section>
          <Section title="Associações">
            <P>
                Com histórico familiar positivo para dores em membros, com distúrbios emocionais, assim como com outras queixas dolorosas, como dor abdominal recorrente(22%) e cefaléia(28%).
            </P>
          </Section>
          <Section title="Características">
            <List>
                <LItem>
                    Idade: 2 a 12 anos;
                </LItem>
                <LItem>
                    Duração maior de 3 meses e em episódios recorrentes;
                </LItem>
                <LItem>
                    Não localizadas especificamente em articulações;
                </LItem>
                <LItem>
                    Severas a ponto de interromper as atividades e o sono;
                </LItem>
                <LItem>
                    Recuperação completa, sem sequelas;
                </LItem>
                <LItem>
                    Diagnóstico: clínico e de exclusão;
                </LItem>
                <LItem>
                    Exame físico: completamente normal;
                </LItem>
                <LItem>
                    Exames laboratoriais: todos normais.
                </LItem>
            </List>
          </Section>
          <Section title="Rotina">
            <P>
                HC, VHS, PCR, DHL e Raio X de pernas e coxas (AP e Perfil), bilateral e comparativo.
            </P>
          </Section>
          <Section title="Tratamento">
            <P>
                Geralmente calor local e massagens costumam ser suficientes para trazer alívio. Raramente são necessários analgésicos(paracetamol) ou anti-inflamatórios. Em alguns casos, uma avaliação e/ou acompanhamento psicológico são indicados.
            </P>
          </Section>
        <Section title="Referências">
        <Reference idx={1} body="Oliveira, SKF.; Azevedo, ECL. Reumatologia Pediátrica. 2.ed .Rio de Janeiro: Revinter, 2001."/>
        <Reference idx={2} body="Cassidy, JT(coord). Textbook of Rheumatology. 2.ed.Philadelphia: Elsevier, 2010."/>
        <Reference idx={3} body="Oliveira, SKF.Reumatologia para Pediatras. 1.ed .Rio de Janeiro: Revinter, 2003."/>
        <Reference idx={4} body="Oliveira, SKF; Rodrigues, MCF. Reumatologia na Prática para Pediatras. 1.ed .Rio de Janeiro: Revinter, 2010."/>
        <Reference idx={5} body="Terreri, MTRA; Sacchetti, SB. Reumatologia para o Pediatra. Sociedade de Pediatria de São Paulo, Departamento de Pediatria. 1.ed. São Paulo: Atheneu, 2008."/>
        </Section>
    </Routine>
}