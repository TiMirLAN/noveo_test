import { setFiles, setLoading } from './files'
import { setError } from './error'
import { DEBUG_TOKEN } from '../../config/defaults'

const FILES_LIMIT = 20

const queryAPI = async (path, queryParams) => {
  const queryString = queryParams
    ? new URLSearchParams(queryParams).toString()
    : ''
  const response = await fetch(`https://cloud-api.yandex.net/v1/${path}?${queryString}`, {
    headers: {
      Authorization: `OAuth ${DEBUG_TOKEN}`
    }
  })
  return response.json()
}

export const ls = (path, itemsOffset = 0) => async (dispatch) => {
  dispatch(setLoading())
  try {
    const { _embedded } = await queryAPI('disk/resources', {
      path,
      offset: itemsOffset,
      limit: FILES_LIMIT
    })
    dispatch(setFiles(_embedded))
    return _embedded
  } catch (e) {
    dispatch(setError('Yandex API error', e.message))
  } finally {
    dispatch(setLoading(false))
  }
}
