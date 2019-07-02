import { connect } from 'react-redux'

import Auth from 'components/auth'
import { setToken } from 'actions/auth'

const mapStateToProps = ({ auth: { token } }) => ({
  token
})

const mapDispatchToProps = {
  setToken
}

function mergeProps (stateProps, dispatchProps, ownProps) {
  if (stateProps.token) {
    setTimeout(() => { ownProps.history.push('/files/') })
  }
  return {
    isAuthorized: !!stateProps.token,
    ...dispatchProps
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Auth)
