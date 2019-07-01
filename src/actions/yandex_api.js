import { setFiles, setLoading } from './files'
import { DEBUG_TOKEN } from '../../config/defaults'

const queryAPI = async (path, queryParams) => {
  const queryString = queryParams
    ? new URLSearchParams(queryParams).toString()
    : ''
  const response = await window.fetch(`https://cloud-api.yandex.net/v1/${path}?${queryString}`, {
    headers: {
      Authorization: `OAuth ${DEBUG_TOKEN}`
    }
  })
  return response.json()
}

export const ls = (path) => async (dispatch) => {
  dispatch(setLoading())
  dispatch(setFiles())
  const { _embedded: { items } } = await queryAPI('disk/resources', { path })
  dispatch(setLoading(false))
  dispatch(setFiles(items))
  return items
}
