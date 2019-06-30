import { rest, SessionRT, UserRT } from '../utils'

export * from './taskAPI'

export const userApi = rest(
  { baseURL: 'http://localhost:9999', withCredentials: true },
  UserRT,
  'users',
)

export const sessionApi = rest(
  { baseURL: 'http://localhost:9999', withCredentials: true },
  SessionRT,
  'session',
)
