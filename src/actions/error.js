export const SET_ERROR = 'SET_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'

export const setError = (header, text) => ({
  type: SET_ERROR,
  header,
  text
})

export const clearError = () => ({
  type: CLEAR_ERROR
})
