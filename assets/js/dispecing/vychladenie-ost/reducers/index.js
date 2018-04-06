import { combineReducers } from 'redux'

import vychladenie from './vychladenie'
import vychladenieost from './vychladenieost'
import {reducer as notifications} from 'react-notification-system-redux'

export default combineReducers({
    vychladenie,
    vychladenieost,
    notifications
})