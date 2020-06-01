import { combineReducers } from 'redux'

import nastroje from './nastroje'
import vypocet from './vypocet'
import historia from './historia'

import opravnenia from './opravnenia'
import pristupy from './pristupy'
import vyberpolozky from './vyberpolozky'
import moznosti from './moznosti'

import hlavny from './hlavny'
import varianty from './varianty'
import poznamky from './poznamky'

import ocakavanadodavka from './ocakavanadodavka'
import zemnyplyn from './zemnyplyn'
import normativnemnozstvo from './normativnemnozstvo'
import nakuptepla from './nakuptepla'
import ocakavanenaklady from './ocakavanenaklady'
import ocakavanenakladyvarianty from './ocakavanenakladyvarianty'

import vstupy from './vstupy'
import {reducer as notifications} from 'react-notification-system-redux'

export default combineReducers({
  nastroje,
  vypocet,
  historia,

  opravnenia,
  pristupy,
  vyberpolozky,
  moznosti,

  hlavny,
  varianty,
  poznamky,

  ocakavanadodavka,
  zemnyplyn,
  normativnemnozstvo,
  nakuptepla,
  ocakavanenaklady,
  ocakavanenakladyvarianty,

  vstupy,
  notifications
})