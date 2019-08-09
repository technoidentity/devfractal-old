import { rest } from 'devfractal-api'
import { verify } from 'technoidentity-utils'
import { Session, Task, TaskFilter, User } from './types'

export const apiOptions = {
  baseURL: 'http://localhost:9999',
  withCredentials: true,
}

export const userAPI = rest(User, 'id', { resource: 'users', ...apiOptions })

export const sessionAPI = rest(Session, 'id', {
  resource: 'session',
  ...apiOptions,
})

export const taskAPI = rest(Task, '_id', { resource: 'tasks', ...apiOptions })

export async function getTasks(path: TaskFilter): Promise<ReadonlyArray<Task>> {
  verify(TaskFilter, path)

  return taskAPI.many({
    path: path !== 'all' ? path : undefined,
    query: { limit: 2, page: 2 },
  })
}
