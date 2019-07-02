import { SET_ERROR, CLEAR_ERROR } from 'actions/error'

const DEFAULT_STATE = {
  text: null,
  header: null
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        text: action.text,
        header: action.header
      }
    case CLEAR_ERROR:
      return DEFAULT_STATE
    default:
      return state
  }
}
