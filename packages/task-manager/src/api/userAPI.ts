import { rest, User, UserRT } from '../utils'

const userApi = rest(
  { baseURL: 'http://localhost:9999', withCredentials: true },
  UserRT,
  'users',
)

export async function createUser(data: any): Promise<User> {
  return userApi.create(data)
}

export async function getUser(id: string): Promise<User> {
  return userApi.get(id)
}
