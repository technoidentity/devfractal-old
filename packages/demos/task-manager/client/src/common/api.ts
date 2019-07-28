import { rest } from 'technoidentity-devfractal-api'
import { verify } from 'technoidentity-utils'
import { Session, Task, TaskFilter, User } from './types'

export const apiOptions = {
  baseURL: 'http://localhost:9999',
  withCredentials: true,
}

export const userAPI = rest({ resource: 'users', type: User, ...apiOptions })

export const sessionAPI = rest({
  resource: 'session',
  type: Session,
  ...apiOptions,
})

export const taskAPI = rest({ resource: 'tasks', type: Task, ...apiOptions })

export async function getTasks(path: TaskFilter): Promise<ReadonlyArray<Task>> {
  verify(TaskFilter, path)

  return taskAPI.many({
    path: path !== 'all' ? path : undefined,
    query: { limit: 2, page: 2 },
  })
}
