import React from 'react'
import PropTypes from 'prop-types'
import Pagination from 'react-bootstrap/Pagination'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const FilesPagination = ({
  showPagination,
  haveNext,
  havePrev,
  nextPage,
  prevPage
}) => {
  if (!showPagination) {
    return null
  }
  return (
    <Row>
      <Col>
        <Pagination>
          <Pagination.Prev
            disabled={!havePrev}
            onClick={prevPage}
          />
          <Pagination.Next
            disabled={!haveNext}
            onClick={nextPage}
          />
        </Pagination>
      </Col>
    </Row>
  )
}

FilesPagination.propTypes = {
  showPagination: PropTypes.bool.isRequired,
  haveNext: PropTypes.bool.isRequired,
  havePrev: PropTypes.bool.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired
}

export default FilesPagination
