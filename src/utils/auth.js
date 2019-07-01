export function saveAuth(token, expiresIn) {
  if (typeof localStorage !== 'undefined') {
    const currentDate = new Date()
    localStorage['authToken'] = token
//    localStorage['authExpiresIn'] = currentDate+getTime() + (expiresIn * 1000)
  }
}

export function getSavedToken() {
  const { authToken, authExpiresIn } = localStorage
  if (!authToken) {
    return
  }
//  if (+authExpiresIn <= new Date().getTime()) {
//    return
//  }
  return authToken
}
