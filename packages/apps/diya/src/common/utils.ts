import { http as httpAPI } from 'technoidentity-devfractal'
import { baseURL } from '../config'
import { AuthUserInfo } from './models'

export const isAuthenticated = () => {
  const logData = localStorage.getItem('loginData')
  if (logData) {
    return JSON.parse(logData)
  }
  return
}

export const cargosUrl = () => {
  const userData = isAuthenticated()
  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = userData
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })
    return http
  }
  throw Error('login is required')
}

export const sessionExpire = ({ error, logout, setUser, toastMessage }: any) => {
  if (error.response && error.response.status === 401) {
    logout()
    // tslint:disable-next-line:no-null-keyword
    setUser(null)
    toastMessage('401')
  }
}
