import { connect } from 'react-redux'

import Files from 'components/files'
import { ls } from 'actions/yandex_api'
import { setFiles } from 'actions/files'

let prevPath = ''

const mapStateToProps = ({ files: { items, isLoading }, auth: { token } }) => ({
  files: items,
  token,
  isLoading
})

const mapDispatchToProps = {
  ls,
  setFiles
}

function mergeProps (stateProps, dispatchProps, ownProps) {
  const { token, files, isLoading } = stateProps
  const { ls, setFiles } = dispatchProps
  const {
    history,
    location: { state = {} },
    match: { params, url }
  } = ownProps

  if (!token) {
    history.push('/')
  }

  if (history.action === 'POP' && state.files) {
    setTimeout(() => setFiles(state.files))
  } else {
    if (prevPath !== params.path) {
      setTimeout(async () => {
        const files = await ls(`/${params.path || ''}`)
        history.replace(url, { files })
      })
    }
  }
  prevPath = params.path


  return {
    files,
    isLoading
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Files)
