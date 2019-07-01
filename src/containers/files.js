import { connect } from 'react-redux'

import Files from 'components/files'
import { ls } from 'actions/yandex_api'

const mapStateToProps = ({files: {items, isLoading}}) => ({
  files: items,
  isLoading
})

const mapDispatchToProps = {
  ls
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Files)

