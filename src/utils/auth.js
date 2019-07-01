export function saveAuth (token, expiresIn) {
  if (typeof localStorage !== 'undefined') {
    localStorage['authToken'] = token
    //    const currentDate = new Date()
    //    localStorage['authExpiresIn'] = currentDate+getTime() + (expiresIn * 1000)
  }
}

export function getSavedToken () {
  // eslint-disable-next-line no-unused-vars
  const { authToken, authExpiresIn } = localStorage
  if (!authToken) {
    return
  }
  //  if (+authExpiresIn <= new Date().getTime()) {
  //    return
  //  }
  return authToken
}
