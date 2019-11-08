export const isAuthenticated = () => {
  const logData = localStorage.getItem('loginData')
  if (logData) {
    return JSON.parse(logData)
  }
  return
}
