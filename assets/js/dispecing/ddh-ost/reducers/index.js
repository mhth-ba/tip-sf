import { combineReducers } from 'redux'

import prilohy from './prilohy'
import opravnenia from './opravnenia'
import ost from './ost'
import dispeceri from './dispeceri'
import poruchovka from './poruchovka'
import auditlog from './auditlog'
import hlavny from './hlavny'
import pracenaostprevadzka from './pracenaostprevadzka'
import pracenaostdispecing from './pracenaostdispecing'
import planovanepraceodstavky from './planovanepraceodstavky'
import odstavkyostnad24hod from './odstavkyostnad24hod'
import poznamky from './poznamky'
import filterView from './filterView'

import { reducer as notifications } from 'react-notification-system-redux'

export default combineReducers({
  prilohy,
  opravnenia,
  ost,
  dispeceri,
  poruchovka,
  auditlog,
  hlavny,
  pracenaostprevadzka,
  pracenaostdispecing,
  planovanepraceodstavky,
  odstavkyostnad24hod,
  poznamky,
  filterView,

  notifications
})
