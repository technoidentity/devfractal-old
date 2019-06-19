import { api } from './api'
import { Task, TaskRT } from './types'

const taskApi = api('http://localhost:9999/tasks', TaskRT)

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
  return taskApi.many({ paths: 'completed' })
}

export async function pendingList(): Promise<ReadonlyArray<Task>> {
  return taskApi.many({ paths: 'pending' })
}

export const scheduledToday = async () => {
  return taskApi.many({ paths: 'today' })
}

export const deadlineToday = async () => {
  return taskApi.many({ paths: 'deadline' })
}
