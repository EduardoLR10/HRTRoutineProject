import { contentToRoutine } from '../../../../models/Routine'

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
import DoencasExantematicasAgudas from './DoencasExantematicasAgudas'
import DorAbdominalAguda from './DorAbdominalAguda'
import DorDeCrescimento from './DorDeCrescimento'
import EmergenciaDoChoque from './EmergenciaDoChoque'
import EmergenciaRespiratoria from './EmergenciaRespiratoria'
import EndocarditeInfecciosa from './EndocarditeInfecciosa'
import Epilepsia from './Epilepsia'
import FebreReumatica from './FebreReumatica'
import GlomerulonefriteDifusaAguda from './GlomerulonefriteDifusaAguda'

export default [
  TestRoutine,
  SindromeNefrotica,
  Adenomegalias,
  Afogamento,
  AlergiaAProteinaDoLeiteDeVaca,
  AlimentacaoNos2PrimeirosAnosDeVida,
  AnemiaFalciforme,
  AnemiaFerropriva,
  ArtriteAbordagemInicial,
  ArtriteSeptica,
  ArtritesReativas,
  Cefaleias,
  ConstipacaoIntestinal,
  ConvulsaoFebril,
  Coqueluche,
  CriseHipoxia,
  Crupe,
  DerramesPleurais,
  DiarreiasAgudas,
  DiarreiaInfecciosa,
  DisturbioMetabolico,
  DisturbiosAcidoBase,
  DisturbiosEletroliticos,
  DoencaDeKawasaki,
  DoencasExantematicasAgudas,
  DorAbdominalAguda,
  DorDeCrescimento,
  EmergenciaDoChoque,
  EmergenciaRespiratoria,
  EndocarditeInfecciosa,
  Epilepsia,
  FebreReumatica,
  GlomerulonefriteDifusaAguda
].map(contentToRoutine)
