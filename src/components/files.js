import React from 'react'

const Files = ({
  files,
  isLoading,
  ls,
  match: {
    params: {
      path = ''
    }
  }
}) => {
  const fullPath = `/${path}`

  if (isLoading == null) {
    ls(fullPath)
  }

  if(isLoading) {
    return (<div>Loading...</div>)
  }

  return (
    <div>{JSON.stringify(files, null, 2)}</div>
  )
}

export default Files
