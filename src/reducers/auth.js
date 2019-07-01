import { SET_TOKEN } from 'actions/auth'
import { getSavedToken } from 'utils/auth'

const DEFAULT_STATE = {
  token: getSavedToken()
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
