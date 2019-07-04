import { rest } from 'technoidentity-devfractal'
import { Session, Task, TaskFilter, User } from './types'
import { typeInvariant } from 'technoidentity-utils'

export const apiOptions = {
  baseURL: 'http://localhost:9999',
  withCredentials: true,
}

export const userApi = rest({ resource: 'users', type: User, ...apiOptions })

export const sessionApi = rest({
  resource: 'session',
  type: Session,
  ...apiOptions,
})

export const taskApi = rest({ resource: 'tasks', type: Task, ...apiOptions })

export async function getTasks(path: TaskFilter): Promise<ReadonlyArray<Task>> {
  typeInvariant(TaskFilter, path)

  return taskApi.many({ path: path !== 'all' ? path : undefined })
}
