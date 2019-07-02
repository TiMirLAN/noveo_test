import { connect } from 'react-redux'

import { clearError } from 'actions/error'
import ErrorToast from 'components/error_toast'

const mapStateToProps = ({ error: { text, header } }) => ({
  text,
  header
})

const mapDispatchToProps = {
  clearError
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorToast)
