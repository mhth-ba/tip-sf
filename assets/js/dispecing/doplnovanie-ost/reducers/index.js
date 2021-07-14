import { combineReducers } from 'redux'

import data from './data'

import {reducer as notifications} from 'react-notification-system-redux'

export default combineReducers({

  data,

  notifications
})