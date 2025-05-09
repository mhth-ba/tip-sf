import { combineReducers } from 'redux'

import nastroje from './nastroje'
import vypocet from './vypocet'
import historia from './historia'

import opravnenia from './opravnenia'
import pristupy from './pristupy'
import vyberpolozky from './vyberpolozky'
import moznosti from './moznosti'

import hlavny from './hlavny'

import poznamky from './poznamky'
import subory from './subory'
import konstanty from './konstanty'

import dodavkatepla from './dodavkatepla'                  // uzitocna dodavka tepla
import porovnaniesplanom from './porovnaniesplanom'
import vyrobatepla from './vyrobatepla'                    // vyroba tepla podla zdrojov
import vyrobaelektriny from './vyrobaelektriny'
import delenienakladov from './delenienakladov'
import kotolne from './kotolne'                            // vyroba tepla plynovymi kotolnami
import zemnyplyn from './zemnyplyn'
import zemnyplynklucovanie from './zemnyplynklucovanie'
import normativnemnozstvo from './normativnemnozstvo'
import opravnenenaklady from './opravnenenaklady'
import nakuptepla from './nakuptepla'
import skutocnenaklady from './skutocnenaklady'
import regulovanazlozka from './regulovanazlozka'
import cenatepla from './cenatepla'

import vypocetbuniek from './vypocetbuniek'

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

  poznamky,
  subory,
  konstanty,

  dodavkatepla,
  porovnaniesplanom,
  vyrobatepla,
  vyrobaelektriny,
  delenienakladov,
  kotolne,
  zemnyplyn,
  zemnyplynklucovanie,
  normativnemnozstvo,
  opravnenenaklady,
  nakuptepla,
  skutocnenaklady,
  regulovanazlozka,
  cenatepla,

  vypocetbuniek,

  vstupy,
  notifications
})