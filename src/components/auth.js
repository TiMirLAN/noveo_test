import React from 'react'
import PropTypes from 'prop-types'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import { YANDEX_OAUTH_CLIENT_ID } from '../../config/defaults'
import { saveAuth } from 'utils/auth'

export default class Auth extends React.PureComponent {
  static propTypes = {
    setToken: PropTypes.func.isRequired,
    isAuthorized: PropTypes.bool.isRequired
  }
  token = null

  render () {
    const { setToken, isAuthorized } = this.props

    if (isAuthorized) {
      return null
    }

    return [
      (
        <Row key='text'>
          <Col>
            <p> use <a
              href={`https://oauth.yandex.ru/authorize?response_type=token&client_id=${YANDEX_OAUTH_CLIENT_ID}`}
              target="_blank"
              rel="noopener noreferrer"
            >auth link</a> to get auth token and put it to field below.
            </p>
          </Col>
        </Row>
      ),
      (
        <Row key='form'>
          <Col>
            <InputGroup>
              <FormControl
                placeholder="token"
                onChange={(event) => {
                  this.token = event.target.value
                }}
              />
              <InputGroup.Append>
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    saveAuth(this.token)
                    setToken(this.token)
                  }}
                >OK</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
      )
    ]
  }
}
