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

export default function MedidasDePrecaucaoEIsolamento(): JSX.Element {
  return (
    <Routine
      id="medidas-precaucao"
      name="Medidas de Precaução e Isolamento em Doenças Infecciosas"
      categories={['infectologia']}
      authors={['iuri']}
      tags={['prevenção', 'preventivas', 'profilaxia']}
    >
      <Section title="Introdução">
        <P>
          Essa rotina aborda a prevenção de transmissão da infecção no ambiente
          hospitalar.
        </P>
        <P>
          As normas apresentadas a seguir são embasadas em atualização realizada
          pelo Center for Diseases Control, adaptadas à nossa realidade.
        </P>
        <P>
          Todas as medidas de precaução e isolamento têm como característica
          evitar a transmissão nosocomial de doenças. O isolamento deve ser
          prescrito pelo médico e aplicado pela enfermeira do setor seguindo as
          normas da CCIH.
        </P>
      </Section>
      <Section title="Transmissão da Infecção no Hospital">
        <P>
          Para ocorrer a transmissão das infecções no ambiente hospitalar são
          necessários 3 elementos:
        </P>
        <List>
          <LItem>Fontes de Infecção;</LItem>
          <LItem>Hospedeiro Susceptível;</LItem>
          <LItem>Meios de transmissão;</LItem>
        </List>
        <Subsection title="Fontes de Infecção">
          <List>
            <LItem>
              Pacientes, funcionários e, ocasionalmente os visitantes;
            </LItem>
            <LItem>
              Objetos inanimados e superfícies do ambiente hospitalar, incluindo
              equipamentos e medicamentos.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Hospedeiro Susceptível">
          <P>
            Pacientes no ambiente hospitalar possuem fatores que os tornam mais
            susceptíveis aos microrganismos, principalmente pacientes
            imunossuprimidos como recém-nascidos, pacientes em quimioterapia ou
            portadores de imunodeficiências.
          </P>
        </Subsection>
        <Subsection title="Meios de Transmissão">
          <P>
            Os microrganismos são transmitidos no hospital por vários meios: por
            contato, por gotículas, por via aérea , por meio de um veículo comum
            ou por vetores.
          </P>
          <List>
            <LItem>
              Contato: É o mais frequente e importante meio de transmissão de
              infecções hospitalares. Pode ocorrer através das mãos dos
              profissionais; através das luvas quando não trocadas entre um
              paciente e outro; pelo contato entre pacientes e também através de
              instrumentos contaminados.
            </LItem>
            <LItem>
              Gotículas: A geração de gotículas pela pessoa que é a fonte ocorre
              durante a tosse, espirro, aspiração de secreções, realização de
              procedimentos (como broncoscopia) e mesmo pela conversação
              habitual. Quando estas partículas são depositadas na conjuntiva,
              mucosa nasal ou na boca do hospedeiro susceptível, ocorre a
              transmissão do agente. As partículas podem atingir uma distância
              de um metro. Essa forma de transmissão não é aérea porque as
              gotículas não permanecem suspensas no ar.
            </LItem>
            <LItem>
              Aérea: A transmissão aérea ocorre quando os microrganismos estão
              em pequenas partículas suspensas no ar (≤5 μm) ou gotículas
              evaporadas que permanecem suspensas no ar por longo tempo. Os
              microrganismos carreados desta forma são disseminados por
              correntes de ar e podem ser inalados por hospedeiros susceptíveis,
              mesmo a longas distâncias.
            </LItem>
            <LItem>
              Veículo comum: Ocorre quando os microrganismos são transmitidos
              por veículo comum como alimentos, água, medicamentos ou mesmo
              equipamentos.
            </LItem>
            <LItem>
              Vetores: Ocorre quando vetores como moscas, mosquitos, etc,
              transmitem microrganismos.
            </LItem>
          </List>
          <P>
            As precauções devem ser baseadas na forma de transmissão do agente.
            No entanto, é fundamental o conhecimento e seguimento das precauções
            padrão, até recentemente denominadas de precauções universais. Para
            a normatização das práticas de isolamentos nos hospitais, é
            necessário que alguns itens sejam observados entre eles os
            “Fundamentos para Isolamentos” e as “Precauções Padrão”.
          </P>
        </Subsection>
      </Section>
      <Section title="Isolamentos Hospitalares">
        <P>
          Os isolamentos hospitalares podem ser agrupados da seguinte forma:
        </P>
        <List>
          <LItem>Fundamentos para Isolamentos Hospitalares</LItem>
          <LItem>Precauções Padrão</LItem>
          <LItem>Precauções para Transmissão Aérea</LItem>
          <LItem>Precauções para Transmissão por Gotículas</LItem>
          <LItem>Precauções para Transmissão por Contato</LItem>
        </List>
        <Subsection title="Fundamentos para Isolamentos Hospitalares">
          <List>
            <LItem>
              Higienização das mãos: é a medida mais importante de evitar a
              transmissão de microrganismos de um paciente para outro; as mãos
              devem ser lavadas antes e após contato com pacientes e após
              contato com sangue, secreções, excreções e equipamentos ou artigos
              contaminados; devem ser lavadas antes e imediatamente após a
              retirada das luvas (as mãos podem ser contaminadas por furos nas
              luvas ou durante a remoção destas). Uma outra forma até mais
              eficaz e prática de higienizar as mãos é através do uso de solução
              alcoólica 70%, desde que não evidenciada a presença de sujidade
              nas mãos.
            </LItem>
            <LItem>
              <Bold>
                O uso das luvas não substitui a lavagem das mãos. A falta de
                troca das luvas entre um paciente e outro pode disseminar
                microrganismos no hospital.
              </Bold>
              As luvas são utilizadas por 3 razões:
            </LItem>
            <List>
              <LItem>
                Para proteção individual: é obrigatório ao contato com sangue e
                líquidos corporais e ao contato com mucosas e pele não íntegra
                de todos os pacientes por todos os profissionais da saúde. Ex:
                venopunção e demais procedimentos invasivos;
              </LItem>
              <LItem>
                Para redução da possibilidade de microrganismos das mãos do
                profissional contaminarem o campo operatório;
              </LItem>
              <LItem>
                Para redução da possibilidade de transmissão de microrganismo de
                um paciente para outro nas situações de precaução de contato. As
                luvas devem ser trocadas entre um paciente e outro.
              </LItem>
            </List>
            <LItem>
              Acomodações dos pacientes: O quarto privativo é importante para
              prevenir a transmissão por contato quando o paciente tem hábitos
              higiênicos precários ou não consegue compreender as medidas de
              controle de infecção. Se possível, é recomendado quarto privativo
              para pacientes com microrganismos altamente transmissíveis ou
              epidemiologicamente importantes. Quando não for possível, deve-se
              escolher para compartilharem o mesmo quarto, pacientes infectados
              ou colonizados pelo mesmo microrganismo (coorte). Quando não for
              possível estabelecer-se coorte, é ainda viável escolher
              cuidadosamente outro paciente, com menor risco, mas sempre sob
              supervisão da CCIH. Quartos com ventilação especial e pressão
              negativa são recomendados para pacientes que tem possibilidade de
              transmitir microrganismos por via aérea.
            </LItem>
            <LItem>
              Transporte: o paciente portador de microrganismos altamente
              transmissíveis ou epidemiologicamente importantes deve deixar o
              quarto apenas em situações essenciais ao seu tratamento. Deve ser
              usada barreira apropriada para cada paciente, de acordo com a
              possibilidade de transmissão: colocar máscara cirúrgica no
              paciente com possibilidade de geração de partículas infectantes,
              proteger com curativos impermeáveis as secreções que possam
              contaminar o ambiente, entre outras.
            </LItem>
            <LItem>
              Máscara, proteção ocular ou proteção facial: devem ser utilizados
              pelo profissional da saúde na realização de procedimentos de risco
              de contaminação de mucosas (nariz, boca e olhos) com sangue ou
              líquidos corporais.
            </LItem>
            <LItem>
              Aventais, sapatos e propés: são utilizados para proteção
              individual, nas situações onde há risco de contaminação com sangue
              e líquidos corporais. Caso sejam usados aventais em quartos com
              precauções de transmissão por contato, os mesmos devem ficar
              dentro do quarto. Vale ressaltar que o uso de propés tem como
              única finalidade a proteção do profissional de saúde, não tendo
              qualquer papel na prevenção de infecção hospitalar.
            </LItem>
            <LItem>
              Equipamentos e artigos: materiais perfurocortantes depois de
              utilizados devem ser transportados ou descartados com cuidado para
              prevenir acidentes e transferência de microrganismos para o
              ambiente ou outros pacientes. Equipamentos utilizados em pacientes
              sob precauções de contato devem ser desinfetados depois do uso
              (ex: estetoscópios, termômetros, esfigmomanômetros, etc.).
            </LItem>
            <LItem>
              Roupas/lavanderia: o risco de transmissão de microrganismos é
              desprezível se as roupas forem manipuladas, transportadas e
              lavadas de maneira a evitar a transferência de microrganismos para
              pacientes/funcionários ou ambiente.
            </LItem>
            <LItem>
              Pratos, talheres e copos: a combinação de calor e detergente é
              suficiente para descontaminação dos utensílios, não sendo
              necessária a separação quando utilizados por pacientes em
              isolamento.
            </LItem>
            <LItem>
              Limpeza de rotina e terminal: a limpeza dos equipamentos do
              ambiente do paciente em precauções especiais deve ser determinada
              de acordo com a possibilidade de contaminação, devendo cada
              hospital seguir as recomendações padronizadas pela CCIH local.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Precauções Padrão">
          <P>
            As precauções padrão com sangue e líquidos corporais são medidas
            recomendadas para serem utilizadas em todos os pacientes,
            independentemente dos fatores de risco ou da doença de base.
            Compreendem a lavagem/higienização correta das mãos, uso de luvas,
            aventais, máscaras ou proteção facial para evitar o contato do
            profissional com material biológico do paciente (sangue, líquidos
            corporais, secreções e excretas, exceto suor), pele não-intacta e
            mucosas.
          </P>
        </Subsection>
        <Subsection title="Precauções para Transmissão Aérea">
          <List>
            <LItem>Devem ser usadas, juntamente com precauções - padrão;</LItem>
            <LItem>
              Utilizar em pacientes portadores de doenças transmitidas pelo ar;
            </LItem>
            <LItem>
              Quarto privativo e, se possível com ventilação especial (pressão
              negativa e filtro);
            </LItem>
            <LItem>Portas e janelas devem permanecer fechadas;</LItem>
            <LItem>
              É necessário uso de máscara (N95) ao entrar no quarto; pacientes
              com a mesma doença podem dividir o mesmo quarto, exceção feita
              para pacientes com tuberculose multirresistente.
            </LItem>
          </List>
          <P>São consideradas doenças de transmissão aérea:</P>
          <List>
            <LItem>
              Tuberculose pulmonar (confirmada ou suspeita) e laríngea: uso de
              máscaras com filtro especial (N95). Nos casos suspeitos, deve-se
              aguardar resultado da baciloscopia; se negativa, suspender
              precauções. Manter precauções até três baciloscopias negativas
              colhidas em dias diferentes.
            </LItem>
            <List>
              <LItem>
                <Bold>Atenção:</Bold> não devem compartilhar quarto casos
                suspeitos de tuberculose com casos confirmados, pacientes com
                diagnóstico de tuberculose multirressistente, pacientes em
                esquemas de tratamento diferentes.
              </LItem>
            </List>
            <LItem>
              Varicela, herpes zoster disseminado ou herpes zoster localizado em
              imunossuprimidos: As pessoas sabidamente não-imunes devem evitar
              entrar no quarto. Caso isso não seja possível, devem usar as
              máscaras N95. As pessoas sabidamente imunes estão dispensadas do
              uso de máscaras. É recomendado o uso de luvas ao contato com
              lesões do paciente e avental ao contato direto. Estas precauções
              deverão ser mantidas até que todas as lesões estejam na forma de
              crostas.
            </LItem>
            <LItem>
              Sarampo - o uso de máscara N95 é semelhante ao descrito para
              varicela, para pessoas não-imunes.
            </LItem>
            <LItem>
              Influenza, coronavirus e outros vírus relacionados às síndromes
              respiratórias agudas graves.
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Precauções para Transmissão por Gotículas">
          <P>
            São utilizadas para pacientes com doenças, conhecidas ou suspeitas,
            transmitidas por partícula grandes ({'>'} 5 μm), distâncias maiores
            de um metro são suficientes para evitar a transmissão destas
            doenças.
          </P>
          <List>
            <LItem>Usar máscara comum ao entrar no quarto;</LItem>
            <LItem>
              Recomendado quarto privativo durante o período das precauções para
              crianças em enfermarias de pediatria. Para recém-nascidos o quarto
              privativo pode ser substituído por incubadora, mantendo-se
              distância mínima de um metro entre um leito e outro.
            </LItem>
            <LItem>Demais procedimentos seguem as Precauções-Padrão.</LItem>
          </List>
          <P>
            Exemplos de doenças transmitidas por gotículas e tempo de precaução:
          </P>
          <List>
            <LItem>
              Doença invasiva por H. influenzae tipo b (epligotite, meningite,
              pneumonia): manter precauções até 24 h do início da
              antibioticoterapia.
            </LItem>
            <LItem>
              Doença invasiva por meningococo (sepsis, meningite, pneumonia):
              manter precauções até 24 h do início da antibioticoterapia.
            </LItem>
            <LItem>
              Difteria laríngea: manter precauções até duas culturas negativas.
            </LItem>
            <LItem>
              Coqueluche: manter precauções até 5 dias após o inicio da
              antibioticoterapia.
            </LItem>
            <LItem>
              Caxumba: manter precauções até 9 dias do inicio da exteriorização
              ou tumefação das parótidas
            </LItem>
            <LItem>
              Rubéola: manter precauções até 7 dias após o inicio do exantema
            </LItem>
            <LItem>
              Escarlatina: manter precauções até 24 h após o inicio da
              antibioticoterapia
            </LItem>
          </List>
        </Subsection>
        <Subsection title="Precauções para Transmissão por Contato">
          <P>
            Ao lado das Precauções-Padrão, deve-se salientar as precauções para
            transmissão por contato para pacientes suspeitos ou confirmados de
            ter doença facilmente transmitida por contato direto com o paciente
            ou com dispositivos ao seu redor.
          </P>
          <P>
            <Bold>Usar luvas ao contato com o paciente</Bold>
          </P>
          <P>
            Para neonatologia não é obrigatório quarto privativo, desde que as
            práticas de Precaução de Contato estejam sinalizadas no leito e toda
            a equipe de saúde bem orientada. Manter o RN em incubadora.
          </P>
          <P>
            O quarto privativo é recomendado para crianças maiores, podendo
            estas serem agrupadas quando portadoras do mesmo microrganismo e
            mesmo perfil de suscetibilidade.
          </P>
          <P>
            Exemplo de doenças onde o uso de Precauções pelo Contato é
            necessário:
          </P>
          <List>
            <LItem>Herpes simples mucocutâneo severo;</LItem>
            <LItem>
              Herpes simples em neonatos em contato com doença materna: para
              recém-nascidos de parto vaginal ou cesárea, se a mãe tiver lesão
              ativa e bolsa rota por mais que 4 a 6 horas;
            </LItem>
            <LItem>Abscessos não contidos pelo curativo;</LItem>
            <LItem>Rubéola congênita: até um ano de idade;</LItem>
            <LItem>
              Infecções entéricas por Shigella sp, rotavirus e hepatite A: para
              crianças com incontinência fecal;
            </LItem>
            <LItem>
              Infecção por vírus sincicial respiratório em lactentes,
              pré-escolares e adultos imunosuprimidos;
            </LItem>
            <LItem>
              Microrganismos multirresistentes: de acordo com as definições da
              CCIH de cada hospital, devendo ser mantido as precauções até a
              alta hospitalar;
            </LItem>
            <LItem>Conjuntivites virais (agudas hemorrágicas);</LItem>
            <LItem>
              Herpes simples mucocutâneo (pele, oral, genital), o herpes
              neonatal e o herpes disseminado;
            </LItem>
            <LItem>Impetigo (durante as primeiras 24h de tratamento).</LItem>
          </List>
          <P>
            Exemplos de doenças onde uso de Precauções-Padrão são suficientes:
          </P>
          <List>
            <LItem>Abscessos com drenagem contida pelo curativo;</LItem>
            <LItem>Infecções por Citomegalovirus;</LItem>
            <LItem>
              Conjuntivite bacteriana, incluindo conjuntivite gonocócica do
              recém-nascido e Chlamydia trachomatis;
            </LItem>
            <LItem>Enterocolite necrosante;</LItem>
            <LItem>
              Enterocolites e gastroenterites infecciosas, inclusive por
              Salmonella e Shigella (pacientes com controle esfincteriano);
            </LItem>
            <LItem>
              Hepatites A (para hepatite A, se o paciente estiver incontinente,
              usar precaução de contato);
            </LItem>
            <LItem>Hepatite B, (Hbs Ag positivo), vírus C e outros;</LItem>
            <LItem>Meningites virais;</LItem>
            <LItem>SIDA;</LItem>
            <LItem>
              Sífilis primária ou secundária com lesões de pele ou de mucosas,
              incluindo a forma congênita.
            </LItem>
          </List>
        </Subsection>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Brasil. Ministério da Saúde. Agência Nacional de Vigilância Sanitária."
        />
        <Reference
          idx={2}
          body="Pediatria: prevenção e controle de infecção hospitalar/ Ministério da Saúde, Agência Nacional de Vigilância Sanitária. – Brasília : Ministério da Saúde, 2005."
        />
      </Section>
    </Routine>
  )
}
