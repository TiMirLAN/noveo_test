import React from 'react'
import PropTypes from 'prop-types'

import File from './file'
import Directory from './directory'

const FileItem = props => {
  switch (props.type) {
    case 'file':
      return <File {...props}/>
    case 'dir':
      return <Directory {...props}/>
    default:
      return null
  }
}

FileItem.propTypes = {
  type: PropTypes.string.isRequired
}

export default FileItem
