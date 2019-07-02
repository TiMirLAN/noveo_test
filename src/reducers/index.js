import {
  combineReducers
} from 'redux'

import files from './files'
import auth from './auth'
import error from './error'

export default combineReducers({
  files,
  auth,
  error
})
