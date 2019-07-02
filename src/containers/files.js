import { connect } from 'react-redux'

import Files from 'components/files'
import { ls } from 'actions/yandex_api'
import { setFiles } from 'actions/files'

let prevPath = ''

const mapStateToProps = ({ files, auth: { token } }) => ({
  files,
  token
})

const mapDispatchToProps = {
  ls,
  setFiles
}

function mergeProps (stateProps, dispatchProps, ownProps) {
  const { token, files } = stateProps
  const { ls, setFiles } = dispatchProps
  const {
    history,
    location: { state = {}, search = '' },
    match: { params, url }
  } = ownProps
  const fullPath = url + search

  if (!token) {
    history.push('/')
  }

  console.log(ownProps.location, ownProps.match, ownProps.history)
  if (prevPath !== fullPath) {
    if (history.action === 'POP' && state.files) {
      setTimeout(() => {
        setFiles(state.files)
      })
    } else {
      setTimeout(async () => {
        const offset = new URLSearchParams(search).get('offset')
        const files = await ls(
          `/${params.path || ''}`,
          offset || 0
        )
        history.replace(fullPath, { files })
      })
    }
  }
  prevPath = fullPath


  return {
    files: files.items,
    isLoading: files.isLoading,
    path: `/${prevPath || ''}`
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Files)
