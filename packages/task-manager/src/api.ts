import { rest, SessionRT, Task, TaskRT, UserRT } from './utils'

export const apiOptions = {
  baseURL: 'http://localhost:9999',
  withCredentials: true,
}

export const userApi = rest({ resource: 'users', type: UserRT, ...apiOptions })

export const sessionApi = rest({
  resource: 'session',
  type: SessionRT,
  ...apiOptions,
})

export const taskApi = rest({ resource: 'tasks', type: TaskRT, ...apiOptions })

export type TaskFilter = 'all' | 'completed' | 'pending' | 'today' | 'deadline'

export async function getTasks(path: TaskFilter): Promise<ReadonlyArray<Task>> {
  return taskApi.many({ path: path !== 'all' ? path : undefined })
}
