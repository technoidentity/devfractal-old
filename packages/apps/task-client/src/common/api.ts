import { rest } from 'srtp-core'
import { verify } from 'srtp-utils'
import { Session, Task, TaskFilter, User } from './types'

export const apiOptions = {
  baseURL: 'http://localhost:9999',
  withCredentials: true,
}

const idPath = ({ id }: { readonly id: string }) => `${id}`

export const userAPI = rest(User, idPath, 'users', apiOptions)

export const sessionAPI = rest(Session, idPath, 'session', apiOptions)

export const taskAPI = rest(Task, ({ _id }) => `${_id}`, 'tasks', apiOptions)

export async function getTasks(path: TaskFilter): Promise<readonly Task[]> {
  verify(TaskFilter, path)

  return taskAPI.many({
    path: path !== 'all' ? path : undefined,
    query: { limit: 2, page: 2 },
  })
}
