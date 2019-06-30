import { rest, SessionRT } from '../utils'
import { LoginValues } from '../views'

const sessionApi = rest(
  { baseURL: 'http://localhost:9999', withCredentials: true },
  SessionRT,
  'session',
)

export const loginUser = async (data: LoginValues) => {
  return sessionApi.create(data)
}
