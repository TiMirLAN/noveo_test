export const SET_LOADING = 'SET_LOADING'
export const SET_FILES = 'SET_FILES'

export const setLoading = (value = true) => ({
  type: SET_LOADING,
  value
})

export const setFiles = (items = []) => ({
  type: SET_FILES,
  items
})
