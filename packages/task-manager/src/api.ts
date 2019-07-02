import { Session, Task, User } from './common'
import { rest } from './utils'
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

export type TaskFilter = 'all' | 'completed' | 'pending' | 'today' | 'deadline'

export async function getTasks(path: TaskFilter): Promise<ReadonlyArray<Task>> {
  return taskApi.many({ path: path !== 'all' ? path : undefined })
}
