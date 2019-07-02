import React from 'react'
import PropTypes from 'prop-types'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import chunk from 'lodash/chunk'

import FilesPagination from 'containers/files_pagination'
import FileItem from './file_item'

export default class Files extends React.PureComponent {
  static propTypes = {
    files: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    isLoading: PropTypes.bool.isRequired
  }

  render () {
    const {
      files,
      isLoading
    } = this.props

    if (isLoading) {
      return (
        <div className="h-100 d-flex align-items-center justify-content-center">
          <Spinner animation="border" className="align-middle"/>
        </div>
      )
    }

    return chunk(files, 3).map((row, index) => (
      <Row key={index}>{row.map(file => (
        <Col xs={12} md={4} key={file.path}>
          <FileItem {...file}/>
        </Col>
      ))}</Row>
    )).concat([
      <FilesPagination key="pagination" />
    ])
  }
}
