import { rest } from 'technoidentity-core'
import { verify } from 'technoidentity-utils'
import { Session, Task, TaskFilter, User } from './types'

export const apiOptions = {
  baseURL: 'http://localhost:9999',
  withCredentials: true,
}

export const userAPI = rest(User, 'id', 'users', apiOptions)

export const sessionAPI = rest(Session, 'id', 'session', apiOptions)

export const taskAPI = rest(Task, '_id', 'tasks', apiOptions)

export async function getTasks(path: TaskFilter): Promise<readonly Task[]> {
  verify(TaskFilter, path)

  return taskAPI.many({
    path: path !== 'all' ? path : undefined,
    query: { limit: 2, page: 2 },
  })
}
