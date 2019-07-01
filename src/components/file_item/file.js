import React from 'react'
import PropTypes from 'prop-types'

const File = ({ name, preview }) => (
  <div>
    <div>{name}</div>
    <img src={preview} alt={preview}/>
  </div>
)

File.propTypes = {
  name: PropTypes.string.isRequired,
  preview: PropTypes.string
}

export default File

