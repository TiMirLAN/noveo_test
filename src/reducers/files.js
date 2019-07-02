import { SET_LOADING, SET_FILES } from 'actions/files'

const DEFAULT_STATE = {
  isLoading: false,
  items: [],
  offset: null,
  limit: null,
  total: null
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.value
      }
    case SET_FILES:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}
