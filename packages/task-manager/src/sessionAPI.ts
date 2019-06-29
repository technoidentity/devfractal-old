import { LoginValues } from './LoginForm'
import { rest } from './rest'
import { SessionRT } from './types'

const sessionApi = rest(
  { baseURL: 'http://localhost:9999', withCredentials: true },
  SessionRT,
  'session',
)

export const loginUser = async (data: LoginValues) => {
  return sessionApi.create(data)
}
