import { combineReducers } from 'redux'

import opravnenia from './opravnenia'
import analyzy from './analyzy'
import vylucene from './vylucene'
import prehlad from './prehlad'

export default combineReducers({
  opravnenia,
  analyzy,
  vylucene,
  prehlad
})
