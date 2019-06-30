import { rest, SessionRT, Task, TaskRT, UserRT } from '../utils'

export const apiOptions = {
  baseURL: 'http://localhost:9999',
  withCredentials: true,
}

export const userApi = rest(apiOptions, UserRT, 'users')
export const sessionApi = rest(apiOptions, SessionRT, 'session')
export const taskApi = rest(apiOptions, TaskRT, 'tasks')

export type TaskFilter = 'all' | 'completed' | 'pending' | 'today' | 'deadline'

export async function getTasks(path: TaskFilter): Promise<ReadonlyArray<Task>> {
  return taskApi.many({ path: path !== 'all' ? path : undefined })
}
