import { rest, Task, TaskRT } from '../utils'

export type TaskFilter = 'all' | 'completed' | 'pending' | 'today' | 'deadline'

const taskApi = rest(
  { baseURL: 'http://localhost:9999', withCredentials: true },
  TaskRT,
  'tasks',
)

export async function createTask(data: Task): Promise<Task> {
  return taskApi.create(data)
}

export async function deleteTask(id: string): Promise<void> {
  return taskApi.del(id)
}

export async function getTask(id: string): Promise<Task> {
  return taskApi.get(id)
}

export async function updateTask(id: string, data: Task): Promise<Task> {
  return taskApi.update(id, data)
}

export async function getTasks(path: TaskFilter): Promise<ReadonlyArray<Task>> {
  return taskApi.many({ path: path !== 'all' ? path : undefined })
}
