import { connect } from 'react-redux'

import Auth from 'components/auth'

const mapStateToProps = ({auth: { token }}) => ({
  token
})

export default connect(
  mapStateToProps,
  null
)(Auth)
