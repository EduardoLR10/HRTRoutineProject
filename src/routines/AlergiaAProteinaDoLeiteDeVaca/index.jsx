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

import img1 from './images/image1.jpg'
import img2 from './images/image2.jpg'
import img3 from './images/image3.jpg'

export default class AlergiaAProteinaDoLeiteDeVaca extends React.Component {

  static title = "Alergia à Proteína do Leite de Vaca"
  static category = "Gastroenterologia"
  static authors = "Dra. Ana Luiza Melo dos Santos"

    render = () =>
      <Routine title={AlergiaAProteinaDoLeiteDeVaca.title} category={AlergiaAProteinaDoLeiteDeVaca.category} authors={AlergiaAProteinaDoLeiteDeVaca.authors}>
          <Section title="Introdução">
            <P>
                Considerada atualmente um problema de saúde pública, a alergia alimentar é definida como uma doença consequente a uma resposta imunológica anômala, que ocorre após a ingestão e/ou contato com um determinado alimento. As reações imunológicas dependem de susceptibilidade individual e podem ser classificadas segundo o mecanismo imunológico envolvido. “Alergia alimentar” é um termo utilizado para descrever as reações adversas a alimentos, dependentes de mecanismos imunológicos, mediados por anticorpos IgE ou não. 
            </P>
          </Section>
          <Section title="Classificação">
            <P>
                As reações de hipersensibilidade aos alimentos podem ser classificadas de acordo com o mecanismo imunológico envolvido em:
            </P>
            <Subsection title="Mediadas por IgE">
                <P>
                    Decorrem de sensibilização a alérgenos alimentares com formação de anticorpos específicos da classe IgE, que se fixam a receptores de mastócitos e basófilos. Contatos subsequentes com este mesmo alimento e sua ligação a duas moléculas de IgE próximas determinam a liberação de mediadores vasoativos e citocinas Th2, que induzem às manifestações clínicas de hipersensibilidade imediata.
                </P>
            </Subsection>
            <Subsection title="Reações Mistas (mediadas por IgE e hipersensibilidade celular)">
                <P>
                    Neste grupo estão incluídas as manifestações decorrentes de mecanismos mediados por IgE associados à participação de linfócitos T e de citocinas pró-inflamatórias. 
                </P>
            </Subsection>
            <Subsection title="Reações não mediadas por IgE">
                <P>
                    As manifestações não mediadas por IgE não são de apresentação imediata e caracterizam-se basicamente pela hipersensibilidade mediada por células (Tabela 1). Embora pareçam ser mediadas por linfócitos T, há muitos pontos que necessitam ser mais estudados nesse tipo de reações. 
                </P>
            </Subsection>
            <Figure source={img1} bottom_label="Fonte: Consenso Brasileiro sobre Alergia Alimentar: 2018 - Parte 1."/>
          </Section>
          <Section title="Epidemiologia">
                <P>
                    Na infância, os alimentos mais responsabilizados pelas alergias alimentares são leite de vaca, ovo, trigo e soja, que em geral são transitórias. Menos de 10% dos casos persistem até a vida adulta. Nos casos de alergia à proteína do leite de vaca (APLV) não IgE-mediada, a maioria supera aos 3 anos. Por outro lado, nos casos de alergia IgE-mediada 10-25% dos pacientes permanecem alérgicos, e cerca de 50% apresenta sensibilização outros alimentos. A taxa de tolerância à proteína do leite de vaca após dieta de exclusão em lactentes é de 30% com 1 ano de idade, 54% aos 2 anos e 70% aos 3 anos. 
                </P>
          </Section>
          <Section title="Quadro Clínico">
                <P>
                    As manifestações clínicas são diversas, e dependem do mecanismo imunológico envolvido (IgE ou não IgE mediado) e do órgão acometido. Nos casos de hipersensibilidade imediata (IgE) os sinais e sintomas são agudos (minutos ou horas após ingestão), e nos casos de hipersensibilidade tardia (não IgE) os sintomas são subagudos ou crônicos. Os órgãos mais acometidos são: trato gastrointestinal (50-60%), pele (50-60%), e trato respiratório (20-30%). 
                </P>
          </Section>
          <Section title="Principais Manifestações">
            <Subsection title="Gastrointestinais (Não IgE Mediadas)">
                <Subsubsection title="Proctocolite Eosinofílica/Alérgica">
                    <P>
                        Forma mais comum de manifestação de APLV.
                    </P>
                    <P>
                        Caracterizada por diarreia com muco e/ou sangue nas fezes.
                    </P>
                    <P>
                        Aumento da incidência nas ũltimas décadas.
                    </P>
                    <P>
                        Mais em meninos do que em meninas (60% X 40%).
                    </P>
                    <P>
                        Início nos primeiros meses de vida (80% antes do 6 meses), e na maior parte dos casos as fezes não apresentam redução de consistência (70% dos casos).
                    </P>
                    <P>
                        Eosinofilia periférica em cerca da metade dos casos (44%) pode ser observado.
                    </P>
                    <P>
                        Em geral, não há comprometimento do estado geral e a criança apresenta-se saudável e com bom ganho de peso.
                    </P>
                    <P>
                        Na maioria dos casos, a perda de sangue é discreta, porém, pode ocorrer anemia por deficiência de ferro.
                    </P>
                    <P>
                        50% dos casos ocorre na vigência de aleitamento materno exclusivo (AME): reações às proteínas ingeridas pela mãe com transmissão através do leite materno.
                    </P>
                    <P>
                        Nas crianças em AM misto ou artificial, PLV é a causa mais frequente, mas há descrição de reações à soja.
                    </P>
                    <P>
                        Em menos de 10% dos casos: fórmula extensamente hidrolisada (FeH) podem provocar proctocolite alérgica.
                    </P>
                    <P>
                        Melhora com dieta de exclusão materna ou uso de fórmula de aminoácidos (FAA) ou FeH.
                    </P>
                </Subsubsection>
                <Subsubsection title="Enteropatia induzida por proteína alimentar">
                    <P>
                    Acomete lactente nos primeiros meses de vida, mas também crianças maiores.
                    </P>
                    <P>
                        Caracterizada por diarreia não sanguinolenta 🡪 má absorção intestinal e déficit do crescimento + vômitos e anemia (em muitos casos).
                    </P>
                    <P>
                        Perda proteica🡪 hipoalbuminemia 🡪 edema carencial.
                    </P>
                    <P>
                        Primeiros meses de vida: APLV é a principal causa, seguido de soja, ovo e trigo.
                    </P>
                    <P>
                        Crianças maiores: reações com arroz, carne de galinha e peixe.
                    </P>
                    <P>
                        Provas diagnósticas para alergia IgE mediada são negativas!!!
                    </P>
                    <P>
                        Diagnóstico: EDA com biópsia 🡪 graus variados de atrofia vilositária (diferencial com doença celíaca).
                    </P>
                </Subsubsection>
                <Subsubsection title="Síndrome da enterocolite induzida por proteína alimentar (FPIES)">
                    <P>
                        Manifestação potencialmente grave da alergia alimentar não-IgE mediada, com manifestações clínicas heterogêneas (diferentes fenótipos).
                    </P>
                    <P>
                        Considerada uma urgência na APLV: gravidade 🡪 pacientes com situações de choque. 
                    </P>
                    <P>
                        Antes considerada uma entidade rara, contudo atualmente mais diagnosticada.
                    </P>
                    <P>
                        Lactentes: náuseas, vômitos intratáveis, hipotonia, palidez, apatia e diarreia com muco e/ou sangue ou não que iniciam 1 a 3 h após a ingestão da proteína desencadeante.
                    </P>
                    <P>
                        Pode haver desidratação, acidose metabólica, choque hipovolêmico, levando ao diagnóstico equivocado de sepse ou de alergia alimentar IgE mediada.
                    </P>
                    <P>
                        Diarreia pode ser mais tardia (5 a 10 horas após).
                    </P>
                    <P>
                        Manifestações respiratórias e cutâneas estão ausentes na FPIES, o que diferencia da anafilaxia.
                    </P>
                    <P>
                        Alimentos desencadeantes: PLV e da soja, mas também por peixe, galinha, trigo, arroz.
                    </P>
                    <P>
                        Raramente em crianças em AME: em geral início quando introduz fórmula infantil ou alimentação complementar.
                    </P>
                    <P>
                        Crianças maiores: alimentos sólidos são os mais comuns. 
                    </P>
                    <P>
                        Diagnóstico clínico: eliminação do alimentos suspeito por 4 semanas 🡪 reprodução de sintomas com teste de provocação oral (TPO).
                    </P>
                </Subsubsection>
            </Subsection>
            <Subsection title="Cutâneas e Sistêmicas (IgE Mediadas)">
                <Subsubsection title="Urticária e Anioedema">
                    <P>
                        A pele é o principal órgão acometido nas reações IgE mediadas.
                    </P>
                    <P>
                        São os sintomas mais prevalentes neste tipo de reação.
                    </P>
                    <P>
                        Lembrar!!! Alergia alimentar como causa de urticária: cerca de 20% dos casos de urticária aguda e menos de 8% nos casos de crônica 🡪 cuidado na valorização do alimento como fonte desencadeante.
                    </P>
                    <P>
                        Urticária pode ser o sintoma inicial de anafilaxia: 90% dos que desenvolvem esta reação grave apresentam manifestações dermatológicas.
                    </P>
                </Subsubsection>
                <Subsubsection title="Anafilaxia">
                    <P>
                        Manifestações súbitas de sintomas: quadro emergencial com risco de morte.Portanto, exige conduta imediata.
                    </P>
                    <P>
                        Complexo de sintomas é decorrente da ação de mediadores que atuam em alvos como os sistemas respiratório, cardiovascular, gastrointestinal, cutâneo e nervoso.
                    </P>
                    <P>
                        Alimentos mais apontados: leite de vaca, ovo, camarão, peixe, amendoim e nozes.
                    </P>
                </Subsubsection>
            </Subsection>
          </Section>
          <Section title="Diagnóstico">
            <Subsection title="História Clínica Minuciosa">
                <P>
                    Recordatório alimentar.
                </P>
                <P>
                    Associação dos sintomas aos alimentos.
                </P>
                <P>
                    Avaliar se a reação é reproduzível.
                </P>
                <P>
                    Intervalo de tempo entre a ingestão do alimento e dos sintomas.
                </P>
            </Subsection>
            <Subsection title="Identificação do Alimento">
                <P>
                    Eliminação do alimento suspeito da dieta por 2-4 semanas.
                </P>
                <P>
                    Confirmação: teste de desencadeamento e/ou exames complementares.
                </P>
                <P>
                    Padrão-ouro: teste de provocação com alimento, duplo=cego e controlado por placebo.
                </P>
            </Subsection>
            <Subsection title="Teste de Provocação Oral">
                <P>
                    Tem papel importante na abordagem diagnóstica e na avaliação do desenvolvimento de tolerância ao alimento.
                </P>
                <P>
                    Realização: Restrição do alimento suspeito por pelo menos 2 semanas (ideal 4 semanas). Posteriormente, com paciente estável (sem sintomas alérgicos) e sem doenças agudas, deve ser oferecido o alimento em doses crescentes e intervalos regulares, sob supervisão médica, para detecção de possíveis reações (principalmente para reações IgE mediadas). Lembrar que nas alergias não IgE mediadas o sintomas são tardios (podem surgir após 2 semanas ou mais do TPO). Em geral, inicia-se com alimentos com leite na forma de assados (protocolo “baked”).
                </P>
                <P>
                    OBS: Os pacientes não devem ser submetidos ao TPO se tiverem recebido corticosteroides sistêmicos recentemente (por exemplo, dentro de 7 a 14 dias), porque a recuperação da doença pode confundir a interpretação dos resultados. Aspirina, drogas anti-inflamatórias não esteroides, inibidores da enzima de conversão da angiotensina, álcool e antiácidos podem atuar como fatores indesejáveis, aumentando a reatividade em pacientes suscetíveis. Os beta-bloqueadores podem representar um problema de segurança, se a adrenalina for necessária para tratamento. Anti-histamínicos devem ser descontinuados por mais de 72h.
                </P>
            </Subsection>
          </Section>
          <Section title="Exames Complementares">
            <P>
                Investigação de sensibilização IgE específica: 
            </P>
            <P>
                Auxilia apenas na identificação das alergias alimentares mediadas por IgE e nas reações mistas, e este é um dado fundamental.
            </P>
            <P>
                Testes cutâneos (in vivo) – Prick Test.
            </P>
            <P>
                Testes no sangue (in vitro) – RAST.
            </P>
            <P>
                A detecção de IgE específica tem sido considerada como indicativo de sensibilização ao alimento, na maioria das vezes apenas orientando o alimento a ser utilizado no TPO.
            </P>
            <P>
                Portanto é necessária história clínica minuciosa para definir se o resultado tem relação com a doença alérgica.
            </P>
            <P>
                Teste de contato atópico com alimentos (atopy patch test - APT):
            </P>
            <P>
                O APT para alimentos (leite, ovo, trigo e soja) está em investigação para aumentar a especificidade do diagnóstico das reações tardias em pacientes com dermatite atópica ou esofagite eosinofílica e com sensibilização IgE específica a alimentos. 
            </P>
            <P>
                Estes testes permanecem não recomendados para o uso na prática clínica, devido à ausência de padronização e à baixa sensibilidade.
            </P>
            <Subsection title="Exames Coprológicos">
                <P>
                    Pesquisa de sangue oculto: atualmente é feita pelo método específico para hemoglobina humana. Contribui quando há dúvida pela anamnese se realmente a perda referida é de sangue. Por outro lado, não tem valor no diagnóstico de alergia alimentar.
                </P>
                <P>
                    Dosagem de alfa-1-antitripsina fecal: muito empregada no passado, tem valor apenas nas alergias gastrointestinais associadas à síndrome de enteropatia perdedora de proteínas. Sua utilização isolada não tem valor definido, tanto para diagnosticar como para descartar alergia alimentar em pacientes com manifestações inespecíficas.
                </P>
                <P>
                    Calprotectina fecal: é uma proteína ligadora de zinco produzida principalmente por neutrófilos, monócitos e macrófagos. Está aumentada nos processos inflamatórios do intestino. Na alergia alimentar, observa-se redução nos valores médios de calprotectina após o início da dieta de exclusão. No entanto, não há definição dos pontos de corte relacionados com o teste de provocação oral.
                </P>
            </Subsection>
            <Subsection title="Endoscopia digestiva alta e colonoscopia com biópsias">
                <P>
                    Tanto a endoscopia alta como a colonoscopia atualmente podem ser indicadas para o diagnóstico diferencial de alergia alimentar em alguns pacientes, mas vale ressaltar que estes exames apenas devem ser indicados por gastroenterologistas, pois são exames invasivos.
                </P>
            </Subsection>
            <Subsection title="Resposta ao Teste Terapêutico seguida por Teste de Provocação Oral">
                <P>
                    Em pacientes com alergia alimentar não-IgE mediada tem sido recomendada a dieta de exclusão por 4 semanas, seguida por teste de provocação oral, para confirmação do diagnóstico.
                </P>
                <P>
                    No caso de APLV, a dieta de exclusão diagnóstica é recomendada ser feita com fórmulas com proteínas extensamente hidrolisadas à base da proteína do leite de vaca, sem especificação se de caseína ou de proteína do soro. Caso não haja melhora clínica, após duas semanas, recomenda-se a substituição por fórmula de aminoácidos. Se houver melhora, deve ser realizado o teste de provocação oral. Se o resultado for positivo, a dieta de exclusão terapêutica com a mesma fórmula deve ser mantida pelo período de 6 a 12 meses. Nas crianças pequenas amamentadas, a mãe deve retirar da sua dieta os produtos à base de leite de vaca, e os sintomas do lactente devem ser monitorados.
                </P>
            </Subsection>
          </Section>
          <Section title="Tratamento">
            <P>
                Uma vez estabelecido o diagnóstico de APLV, a única terapia comprovadamente eficaz é a exclusão dietética da proteína do leite de vaca. A base do tratamento da alergia alimentar é essencialmente nutricional e está apoiada sob dois grandes pilares: (a) a exclusão dos alérgenos alimentares responsáveis pela reação alérgica com substituição apropriada, (b) a utilização de fórmulas ou dietas hipoalergênicas, em lactentes, em situações de APLV.
            </P>
            <P>
                Os pacientes, seus responsáveis ou ambos, devem ser educados e informados detalhadamente sobre como garantir de fato a exclusão da proteína do leite de vaca (p. ex: leitura de rótulos), evitar situações de risco (p. ex: alimentação em aniversários, festas e buffets), reconhecer os sintomas e instituir o tratamento precoce de possíveis reações anafiláticas.
            </P>
            <P>
                Duração da dieta e reintrodução alimentar: Para a APLV, preconiza-se que a dieta de exclusão seja, no mínimo, de 6 a 12 meses. Crianças com colite alérgica, diagnosticada antes dos 6 meses de idade, podem vir a tolerar a reintrodução do alimento 6 a 8 meses após a dieta de exclusão. Entretanto, esse prazo pode ser ampliado, pois cada paciente deve ser avaliado periodicamente de forma individualizada. Recomenda-se postergar a exposição ao alimento, quando as reações envolvidas são mediadas por IgE.
            </P>
            <Figure source={img3}/>
            <Figure source={img2} bottom_label="Fonte: Consenso Brasileiro sobre Alergia Alimentar: 2018 - Parte 1"/>
          </Section>
          <Section title="Referências">
            <Reference idx={1} authors="Solé D, Silva LR, Cocco RR, Ferreira CT." title="Consenso Brasileiro sobre Alergia Alimentar: 2018 - Parte 1. Arq Asma Alerg Imunol - Volume.2.N° 1" year="2018"/>
            <Reference idx={2} authors="Solé D, Silva LR, Cocco RR, Ferreira CT." title="Consenso Brasileiro sobre Alergia Alimentar: 2018 - Parte 2. Arq Asma Alerg Imunol - Volume.2.N° 1" year="2018"/>
            <Reference idx={3} authors="Carvalho E, Ferreira CT, Silva LR." title="Gastroenterologia e nutrição em pediatria." local="Barueri, São Paulo: Manole" year="2012"/>
          </Section>
    </Routine>
}