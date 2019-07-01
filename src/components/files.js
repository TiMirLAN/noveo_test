import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
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
    })
  }
  path = ''

  render () {
    const {
      files,
      isLoading,
      ls,
      match: {
        params: {
          path = ''
        }
      }
    } = this.props
    const fullPath = `/${path}`

    if (this.path !== fullPath) {
      ls(fullPath)
      this.path = fullPath
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

    return chunk(files,3).map(row => (
      <Row>{row.map(file => (
        <Col xs={12} md={4}>
          <FileItem {...file}/>
        </Col>
      ))}</Row>
    ))
  }
}
