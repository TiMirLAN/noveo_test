import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import FilesPagination from 'components/files_pagination'

const mapStateToProps = ({ files: { offset, limit, total } }) => ({
  showPagination: total > limit,
  haveNext: offset + limit < total,
  havePrev: offset - limit >= 0,
  offset,
  limit
})

function mergeProps ({ offset, limit, ...stateProps }, _, { history, match }) {
  const nextPage = () => {
    history.push(`${match.url}?offset=${offset + limit}`)
  }
  const prevPage = () => {
    history.push(`${match.url}?offset=${offset - limit}`)
  }
  return {
    nextPage,
    prevPage,
    ...stateProps
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    null,
    mergeProps
  )(FilesPagination)
)
