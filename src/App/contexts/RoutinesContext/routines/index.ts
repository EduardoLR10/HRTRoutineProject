import Routine from '../../../../models/Routine'
import TestRoutine from './_TestRoutine'
import SindromeNefrotica from './SindromeNefrotica'
import Adenomegalias from './Adenomegalias'
import Afogamento from './Afogamento'
import AlergiaAProteinaDoLeiteDeVaca from './AlergiaAProteinaDoLeiteDeVaca'
import AlimentacaoNos2PrimeirosAnosDeVida from './AlimentacaoNos2PrimeirosAnosDeVida'
import AnemiaFalciforme from './AnemiaFalciforme'
import AnemiaFerropriva from './AnemiaFerropriva'
import ArtriteAbordagemInicial from './ArtritesAbordagemInicial'
import ArtriteSeptica from './ArtriteSeptica'
import ArtritesReativas from './ArtritesReativas'
import Cefaleias from './Cefaleias'
import ConstipacaoIntestinal from './ConstipacaoIntestinal'
import ConvulsaoFebril from './ConvulsaoFebril'
import Coqueluche from './Coqueluche'
import CriseHipoxia from './CriseHipoxia'
import Crupe from './Crupe'
import DerramesPleurais from './DerramesPleurais'
import DiarreiasAgudas from './DiarreisAgudas'
import DiarreiaInfecciosa from './DiarreiaInfecciosa'
import DisturbioMetabolico from './DisturbioMetabolico'
import DisturbiosAcidoBase from './DisturbiosAcidoBase'
import DisturbiosEletroliticos from './DisturbiosEletroliticos'
import DoencaDeKawasaki from './DoencaDeKawasaki'

export default [
  new Routine(TestRoutine()),
  new Routine(SindromeNefrotica()),
  new Routine(Adenomegalias()),
  new Routine(Afogamento()),
  new Routine(AlergiaAProteinaDoLeiteDeVaca()),
  new Routine(AlimentacaoNos2PrimeirosAnosDeVida()),
  new Routine(AnemiaFalciforme()),
  new Routine(AnemiaFerropriva()),
  new Routine(ArtriteAbordagemInicial()),
  new Routine(ArtriteSeptica()),
  new Routine(ArtritesReativas()),
  new Routine(Cefaleias()),
  new Routine(ConstipacaoIntestinal()),
  new Routine(ConvulsaoFebril()),
  new Routine(Coqueluche()),
  new Routine(CriseHipoxia()),
  new Routine(Crupe()),
  new Routine(DerramesPleurais()),
  new Routine(DiarreiasAgudas()),
  new Routine(DiarreiaInfecciosa()),
  new Routine(DisturbioMetabolico()),
  new Routine(DisturbiosAcidoBase()),
  new Routine(DisturbiosEletroliticos()),
  new Routine(DoencaDeKawasaki())
]
