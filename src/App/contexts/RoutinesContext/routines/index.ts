import Routine from '../../../../models/Routine'
import TestRoutine from './_TestRoutine'
import SindromeNefrotica from './SindromeNefrotica'
import Adenomegalias from './Adenomegalias'

export default [
  new Routine(TestRoutine()),
  new Routine(SindromeNefrotica()),
  new Routine(Adenomegalias())
]
