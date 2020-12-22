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

export default [
  new Routine(TestRoutine()),
  new Routine(SindromeNefrotica()),
  new Routine(Adenomegalias()),
  new Routine(Afogamento()),
  new Routine(AlergiaAProteinaDoLeiteDeVaca()),
  new Routine(AlimentacaoNos2PrimeirosAnosDeVida()),
  new Routine(AnemiaFalciforme()),
  new Routine(AnemiaFerropriva()),
  new Routine(ArtriteAbordagemInicial())
]
