import { combineReducers } from 'redux'

import sprava from './sprava'
import opravnenia from './opravnenia'
import hlavny from './hlavny'
import dodavkatepla from './dodavkatepla'
import vstupy from './vstupy'
import {reducer as notifications} from 'react-notification-system-redux'

export default combineReducers({
    sprava,
    opravnenia,
    hlavny,
    dodavkatepla,
    vstupy,
    notifications
})