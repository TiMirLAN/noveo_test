import React from 'react'
import PropTypes from 'prop-types'

import { YANDEX_OAUTH_CLIENT_ID } from '../../config/defaults'

export default class Auth extends React.PureComponent {
  static propTypes = {
    token: PropTypes.string,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    })
  }

  render() {
    const {
      token,
      setToken,
      history
    } = this.props

    if (token) {
      history.push('/files/')
      return null
    }

    return (
      <div>
        <div> use <a
            href={`https://oauth.yandex.ru/authorize?response_type=token&client_id=${YANDEX_OAUTH_CLIENT_ID}`}
            target="_blank"
          >auth link</a> to get auth token and put it to field below.
        </div>
        <div>
          <input onChange={(event) => {
            setToken(event.value)
          }}/>
        </div>
      </div>
    )
  }
}
