import { rest } from './rest'
import { Task, TaskRT } from './types'

const taskApi = rest({ baseURL: 'http://localhost:9999' }, TaskRT, 'tasks')

export async function createTask(data: Task): Promise<Task> {
  return taskApi.create(data)
}

export async function getTask(id: string): Promise<Task> {
  return taskApi.get(id)
}

export async function updateTask(id: string, data: Task): Promise<Task> {
  return taskApi.update(id, data)
}

export async function allTasks(): Promise<ReadonlyArray<Task>> {
  return taskApi.many()
}

export async function completedList(): Promise<ReadonlyArray<Task>> {
  return taskApi.many({ path: 'completed' })
}

export async function pendingList(): Promise<ReadonlyArray<Task>> {
  return taskApi.many({ path: 'pending' })
}

export const scheduledToday = async () => {
  return taskApi.many({ path: 'today' })
}

export const deadlineToday = async () => {
  return taskApi.many({ path: 'deadline' })
}
