import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'


const preparePath = (path) => (
  `/files${path.slice(5)}`
)

const Directory = ({ name, path }) => (
  <div>
    <FontAwesomeIcon icon={faFolder}/>
    &nbsp;
    <Link to={preparePath(path)}>{name}</Link>
  </div>
)

Directory.propTypes = {
  name: PropTypes.string.isRequired,
  preview: PropTypes.string
}

export default Directory 

