import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'


const SIZE_SUFFIXES = ['B', 'KB', 'MB', 'GB', 'TB']

function fileSize(size) {
  if (size === 0) {
    return '0'
  }
  for (const i in SIZE_SUFFIXES) {
    if (size < (2**(10*i))) {
      return `${Math.round(size / (2**((i-1)*10)))}${SIZE_SUFFIXES[i-1]}`
    }
  }
  const l = SIZE_SUFFIXES.length - 1
  return `${Math.round(size / (2**l))}${SIZE_SUFFIXES[l]}`
}

const File = ({ name, preview, size }) => (
  <div>
    <FontAwesomeIcon icon={faFile}/>
    &nbsp;
    <span>{name}</span>
    &nbsp;
    <span>{fileSize(size)}</span>
  </div>
)

File.propTypes = {
  name: PropTypes.string.isRequired,
  preview: PropTypes.string
}

export default File

