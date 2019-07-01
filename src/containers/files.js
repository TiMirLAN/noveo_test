import { connect } from 'react-redux'

import Files from 'components/files'
import { ls } from 'actions/yandex_api'

const mapStateToProps = ({ files: { items, isLoading }, auth: { token } }) => ({
  isAuthenticated: token != null,
  files: items,
  isLoading
})

const mapDispatchToProps = {
  ls
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Files)
