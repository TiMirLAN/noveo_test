import { connect } from 'react-redux'

import Auth from 'components/auth'
import { setToken } from 'actions/auth'

const mapStateToProps = ({ auth: { token } }) => ({
  token
})

const mapDispatchToProps = {
  setToken
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)
