import { SET_TOKEN } from 'actions/auth'
import { DEBUG_TOKEN } from '../../config/defaults'

const DEFAULT_STATE = {
  token: DEBUG_TOKEN
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      }
    default:
      return state
  }
}

