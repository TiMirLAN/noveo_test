import React from 'react'
import PropTypes from 'prop-types'

import FileItem from './file_item'

export default class Fiels extends React.PureComponent {
  static propTypes = {
    files: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    isLoading: PropTypes.bool.isRequired,
    ls: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        path: PropTypes.string
      })
    })
  }
  path = ''

  render () {
    const {
      files,
      isLoading,
      ls,
      match: {
        params: {
          path = ''
        }
      }
    } = this.props
    const fullPath = `/${path}`
    console.log(this.path, fullPath)

    if (this.path !== fullPath) {
      ls(fullPath)
      this.path = fullPath
    }

    if(isLoading) {
      return (<div>Loading...</div>)
    }

    return (
      <div>{
        files.map(f => <FileItem key={f.path} {...f}/>)
      }</div>
    )
  }
}
