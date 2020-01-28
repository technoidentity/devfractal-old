import { rest } from '@stp/api'
import { verify } from '@stp/utils'
import { Session, Task, TaskFilter, User } from './types'

export const apiOptions = {
  baseURL: 'http://localhost:9999',
  withCredentials: true,
}

export const userAPI = rest(User, 'id', 'users', apiOptions)

export const sessionAPI = rest(Session, 'id', 'session', apiOptions)

export const taskAPI = rest(Task, '_id', 'tasks', apiOptions)

export async function getTasks(path: TaskFilter): Promise<ReadonlyArray<Task>> {
  verify(TaskFilter, path)

  return taskAPI.many({
    path: path !== 'all' ? path : undefined,
    query: { limit: 2, page: 2 },
  })
}
