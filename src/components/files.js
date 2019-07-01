import React from 'react'
import PropTypes from 'prop-types'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import chunk from 'lodash/chunk'

import FileItem from './file_item'

export default class Fiels extends React.PureComponent {
  static propTypes = {
    files: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    isLoading: PropTypes.bool.isRequired,
    ls: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        path: PropTypes.string
      })
    }),
    history: PropTypes.shape({
      replace: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired
    })
  }
  path = null

  render () {
    const {
      files,
      isLoading,
      isAuthenticated,
      ls,
      match: {
        params: {
          path = ''
        }
      },
      history
    } = this.props

    if(!isAuthenticated) {
      history.push('/')
    }

    if (this.path !== path) {
      ls(`/${path}`)
      this.path = path
    }

    if(isLoading) {
      return (
        <Row>
          <Col>
            <Spinner animation="border"/>
          </Col>
        </Row>
      )
    }

    return chunk(files,3).map((row, index) => (
      <Row key={index}>{row.map(file => (
        <Col xs={12} md={4} key={file.path}>
          <FileItem {...file}/>
        </Col>
      ))}</Row>
    ))
  }
}
