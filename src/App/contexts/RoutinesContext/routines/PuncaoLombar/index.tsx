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

export default function PuncaoLombar(): JSX.Element {
  return (
    <Routine
      id="puncao-lombar"
      name="Punção Lombar"
      categories={['emergencia', 'infectologia']}
      authors={['manuela']}
      tags={['meningite']}
    >
      <Section title="Definições">
        <P>
          É um procedimento realizado com frequência nos serviços de emergência
          para fins diagnósticos, como suspeitas de meningite, hemorragia
          subaracnoideia ou outros quadros infecciosos e / ou inflamatórios.
          Também pode ser usada para fins terapêuticos, como diminuir o volume
          do líquor e alívio dos sintomas em pacientes com pseudotumor cerebral
          ou hidrocefalia de pressão normal.
        </P>
        <P>
          O início do quadro de infecção do sistema nervoso central pode ser de
          difícil diagnóstico apenas com a anamnese e o exame físico, visto que
          muitos processos virais podem causar sinais e sintomas semelhantes,
          como cefaleia, dor na nuca e/ou nas costas e febre. A punção lombar só
          deve ser realizada após o exame neurológico e a avaliação da pressão
          intracraniana, porém nunca deve atrasar as intervenções que podem
          salvar a vida do paciente, como a administração de antibióticos e
          corticoides em pacientes com suspeita de meningite bacteriana.
        </P>
        <P>
          A tomografia computadorizada de crânio deve ser realizada antes da
          punção lombar em todos os pacientes com história clínica, sinais ou
          sintomas de hipertensão intracraniana (HIC), que pode ser decorrente
          de lesão expansiva, hemorragia ou edema cerebral importante.
        </P>
        <P>
          Principais sinais e sintomas de HIC: vômitos, anisocoria, papiledema,
          cefaleia de forte intensidade, alterações do estado mental ou sinais
          localizatórios. A HIC é mais comum em pacientes com imunodepressão
          (mais suscetíveis a lesões cerebrais expansivas, como abscessos ou
          tumores) e nos pacientes com suspeita de hemorragia subaracnoidea.
        </P>
      </Section>
      <Section title="Indicações">
        <List>
          <LItem>Suspeita de hemorragia subaracnoidea;</LItem>
          <LItem>Suspeita de infecção do sistema nervoso central (SNC);</LItem>
          <LItem>Alívio terapêutico no pseudotumor cerebral;</LItem>
          <LItem>
            Suspeita de doença do sistema nervoso central, como síndrome de
            Guillain-Barré, esclerose múltipla e meningite carcinomatosa.
          </LItem>
        </List>
      </Section>
      <Section title="Contraindicações Relativas">
        <List>
          <LItem>Aumento da pressão intracraniana;</LItem>
          <LItem>
            Coagulopatias / trombocitopenia (plaquetas &lt; 50.000);
          </LItem>
          <LItem>Abscesso cerebral;</LItem>
          <LItem>Neutropenia.</LItem>
        </List>
        <P>
          OBS: Na suspeita de HIC com neuroimagem normal, há indicação da punção
          lombar com manometria (medida da pressão de abertura).
        </P>
      </Section>
      <Section title="Contraindicações Absolutas">
        <List>
          <LItem>Infecção cutânea no local de penetração da agulha;</LItem>
          <LItem>
            Diferença de pressão entre os compartimentos supratentorial e
            infratentorial, quando presentes as seguintes alterações na
            tomografia de crânio: desvio da linha média, apagamento das
            cisternas supraquiasmática e basilar, massa na fossa posterior,
            perda da cisterna cerebelar superior e apagamento da cisterna da
            placa quadrigeminal.
          </LItem>
        </List>
        <P>
          OBS: Evitar realizar a punção lombar em pacientes com iminência de
          herniação cerebral, como rebaixamento do nível de consciência,
          alterações pupilares, anisocoria, posturas típicas, respiração
          irregular e crise epiléptica recente.
        </P>
      </Section>
      <Section title="Indicações de TC de Crânio antes da Punção Lombar">
        <List>
          <LItem>Pacientes imunodeprimidos;</LItem>
          <LItem>
            Pacientes com lesões conhecidas no sistema nervoso central;
          </LItem>
          <LItem>
            Pacientes com história de crise epiléptica há menos de uma semana;
          </LItem>
          <LItem>Pacientes com nível de consciência alterado;</LItem>
          <LItem>Pacientes com sinais focais no exame neurológico;</LItem>
          <LItem>
            Pacientes com papiledema ao exame físico e suspeita clínica de
            aumento da pressão intracraniana.
          </LItem>
        </List>
      </Section>
      <Section title="Complicações">
        <P>
          As complicações são muito raras e a punção lombar costuma ser
          considerada um procedimento seguro. A mais comum é a cefaleia
          pós-punção, que pode ocorrer em 10% a 40% dos pacientes, mas pode ser
          reduzida se forem utilizadas agulhas menos calibrosas. A dor também
          está associada a procedimentos com dificuldades técnicas, quando são
          feitas várias tentativas de inserção da agulha sem sucesso. Embora a
          cefaleia pós-punção não seja perigosa, pode ser muito forte e
          resistente à analgesia comum. Outras complicações menos frequentes são
          hemorragia, infecção (cutânea – no local da introdução da agulha, ou
          meníngea) e lesões em estruturas adjacentes, como os nervos da cauda
          equina.
        </P>
      </Section>
      <Section title="Passo a Passo">
        <List>
          <LItem>1 - Reunir o material:</LItem>
          <List>
            <LItem>Clorexidina alcóolica 0,5%;</LItem>
            <LItem>
              Pinça <Italic>cheron</Italic> ou similar;
            </LItem>
            <LItem>Campo estéril;</LItem>
            <LItem>Gaze;</LItem>
            <LItem>
              Material para anestesia local: seringa 3 ml, agulha 13x 4,5 mm,
              agulha 25x7 mm, frasco de lidocaína 1%;
            </LItem>
            <LItem>Agulha de punção liquórica 22G;</LItem>
            <LItem>Frascos / tubos estéreis identificados e numerados;</LItem>
            <LItem>Luva estéril, gorro, máscara e óculos de proteção;</LItem>
            <LItem>Lavar as mãos.</LItem>
          </List>
          <LItem>
            2 - Orientar paciente e responsável sobre o procedimento.
          </LItem>
          <LItem>
            3 - Colocar paciente sentado com cabeça fletida ou em decúbito
            lateral horizontal com cabeça fletida e joelhos flexionados.
          </LItem>
          <LItem>
            4 - Assegurar adequada paramentação para o procedimento.
          </LItem>
          <LItem>
            5 - Fazer antissepsia da região dorsal e colocar o campo estéril.
          </LItem>
          <LItem>6 - Palpar espinha ilíaca póstero-superior.</LItem>
          <LItem>
            7 - Através do alinhamento com as espinhas ilíacas, palpar o espaço
            de L3-L4.
          </LItem>
          <LItem>
            8 - Fazer anestesia tópica com lidocaína 1% com agulha de insulina
            (opcional).
          </LItem>
          <LItem>
            9 - Introduzir agulha com mandril 22G a 90 graus com o bisel
            orientado lateralmente.
          </LItem>
          <LItem>
            10 - Progredir introduzindo a agulha até encontrar resistência
            (ligamento amarelo).
          </LItem>
          <LItem>
            11 - Perfurar o ligamento, girar o bisel para a posição cefálica.
          </LItem>
          <LItem>12 - Retira mandril da agulha.</LItem>
          <LItem>13 - Aguardar gotejamento.</LItem>
          <LItem>
            14 - Coletar cerca de 10 gotas para cada frasco estéril.
          </LItem>
          <LItem>
            15 - Se, após a punção, não houver refluxo liquórico, reintroduzir o
            mandril, virar novamente o bisel para a posição lateral, recuar a
            agulha até o tecido celular subcutâneo e reintroduzir a agulha até
            encontrar o local adequado.
          </LItem>
          <LItem>
            16 - Se a saída do liquor for muito lenta, peça ao paciente para
            tossir ou fazer manobra de Valsalva, ou pedir a um assistente para
            pressionar de forma intermitente o abdome do paciente a fim de
            aumentar o fluxo.
          </LItem>
          <LItem>
            17 - Após a coleta reintroduzir o bisel, virar novamente o bisel
            para a posição lateral e retirar a agulha.
          </LItem>
          <LItem>18 - Avaliar aspecto e pressão do líquor.</LItem>
          <LItem>
            19 - Desprezar a agulha em caixa de coleta de material contaminante.
          </LItem>
          <LItem>20 - Retirar a luvas e lavar as mãos.</LItem>
          <LItem>
            21 - Descrever o procedimento no prontuário do paciente lembrando-se
            de especificar as características do líquor puncionado.
          </LItem>
        </List>
      </Section>
      <Section title="Análises Laboratoriais">
        <P>
          Os principais exames solicitados no líquor são contagem de células e
          diferencial, níveis de glicose e proteínas, coloração de Gram, cultura
          e sensibilidade. A celularidade e seu diferencial podem ser repetidas
          no 4º tubo.
        </P>
        <P>
          O aumento do número leucócitos, sugere infecção. As infecções
          bacterianas estão associadas a um predomínio de leucócitos
          polimorfonucleares, mas a fase aguda da meningite viral e da
          encefalite pode ter uma apresentação semelhante. O predomínio de
          linfócitos sugere meningite viral ou tuberculosa.
        </P>
        <P>
          Outras causas de aumento da leucometria: vasculite, infiltração
          leucêmica e acidente de punção.
        </P>
        <P>
          O nível de glicose no líquor corresponde aproximadamente 60% do nível
          de glicose no sangue periférico. Recomenda-se a dosagem da glicemia
          capilar. Baixos níveis de glicose no líquor estão associados a
          infecção bacteriana.
        </P>
        <P>
          A presença de hemácias no líquor geralmente ocorre por acidente de
          punção. Solicitar a celularidade nos tubos nº 1 e nº 4 permite
          comparar a contagem de hemácias e diferenciar os casos de acidentes
          dos casos de hemorragia subaracnoidea, quando a contagem de hemácias
          permanece estável em todos os tubos. A ausência ou queda da proporção
          de hemácias entre o primeiro e o último tubo sugerem acidente de
          punção.
        </P>
        <P>
          OBS: No acidente de punção, observa-se aproximadamente 1 leucócito a
          cada 1.000 hemácias.
        </P>
        <P>
          A avaliação do nível de proteína no líquor, embora não específica,
          pode fornecer pistas sobre doenças neurológicas, como esclerose
          múltipla e Síndrome de Guillain-Barré. O acidente de punção também
          pode introduzir proteína no liquido cefalorraquidiano. Pode-se usar a
          aproximação de 1 mg de proteína para cada 750 hemácias encontradas,
          mas sugere-se repetir a punção.
        </P>
        <P>A coloração de Gram deve estar livre de microrganismos.</P>
      </Section>
      <Section title="Critérios de Alta">
        <P>
          A depender do resultado do exame e da suspeita clínica que motivou o
          exame.
        </P>
      </Section>
      <Section title="Referências">
        <Reference
          idx={1}
          body="Perry J, et al. Sensitivity of computed tomography performed within six hours of onset of headache for diagnosis of subarachnoid haemorrhage: prospective cohort study. BMJ. 2011;343:d4277."
        />
        <Reference
          idx={2}
          body="Hasbun R, Abrahams J, Jekel J, Quagliarello VJ. Computed tomography of the head before lumbar puncture in adults with suspected meningitis. N Engl J Med. 2001 Dec 13. 345(24):1727-33."
        />
        <Reference
          idx={3}
          body="van Oosterhout WP, van der Plas AA, van Zwet EW, et al. Postdural puncture headache in migraineurs and nonheadache subjects: a prospective study. Neurology. 2013 Mar 5;80(10):941-8."
        />
        <Reference
          idx={4}
          body="Kokki M, Sjövall S, Kokki H. Epidural blood patches are effective for postdural puncture headache in pediatrics--a 10-year experience. Paediatr Anaesth. 2012 Dec;22(12):1205-10."
        />
        <Reference
          idx={5}
          body="Frank RL. Lumbar Puncture and Post-Dural Puncture Headaches: Implications for the Emergency Physician. J Emerg Med. 2008;35(2):149-157."
        />
        <Reference
          idx={6}
          body="Ahmed SV, Jayawarna C, Jude E. Post lumbar puncture headache: diagnosis and management. Postgrad Med J. 2006 Nov; 82(973): 713–716."
        />
        <Reference
          idx={7}
          body="Jabbari A, Roushan MRH. Impact of postdural puncture headache after diagnostic lumbar puncture. Caspian J Intern Med. 2014 Spring; 5(2): 56–58. PMCID: PMC3992228."
        />
        <Reference
          idx={8}
          body="Best Practices: Lumbar Puncture: Medscape Drugs & Diseases. https://emedicine.medscape.com/article/80773-overview. Último acesso em 30 de setembro de 2018."
        />
        <Reference
          idx={9}
          body="Thoennissen J, Herkner H, Lang W, et al. Does bed rest after cervical or lumbar puncture prevent headache? A systematic review and meta-analysis. CMAJ. 2001;165(10):1311."
        />
        <Reference
          idx={10}
          body="Ebinger F, Kosel C, Pietz J, et al. Strict bed rest following lumbar puncture in children and adolescents is of no benefit. Neurology. 2004;62(6):1003."
        />
      </Section>
    </Routine>
  )
}
