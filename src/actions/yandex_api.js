import { setFiles, setLoading } from './files'
import { setError } from './error'

const FILES_LIMIT = 20

const queryAPI = async (path, token, queryParams) => {
  const queryString = queryParams
    ? new URLSearchParams(queryParams).toString()
    : ''
  const response = await fetch(`https://cloud-api.yandex.net/v1/${path}?${queryString}`, {
    headers: {
      Authorization: `OAuth ${token}`
    }
  })
  if (response.status !== 200) {
    throw new Error(`API responsed with status ${response.status}`)
  }
  return response.json()
}

export const ls = (path, itemsOffset = 0) => async (dispatch, getState) => {
  const { auth: { token } } = getState()
  dispatch(setLoading())
  try {
    const { _embedded } = await queryAPI('disk/resources', token, {
      path,
      offset: itemsOffset,
      limit: FILES_LIMIT
    })
    dispatch(setFiles(_embedded))
    return _embedded
  } catch (e) {
    console.log(e)
    dispatch(setError('Yandex API error', e.message))
  } finally {
    dispatch(setLoading(false))
  }
}
