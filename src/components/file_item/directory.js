import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const preparePath = (path) => (
  `/files${path.slice(5)}`
)

const Directory = ({ name, path }) => (
  <div>
    <Link to={preparePath(path)}>{name}</Link>
  </div>
)

Directory.propTypes = {
  name: PropTypes.string.isRequired,
  preview: PropTypes.string
}

export default Directory 

