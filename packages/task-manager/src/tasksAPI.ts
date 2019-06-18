import axios from 'axios'
import { api } from './api'
import { Task, TaskRT } from './types'

const taskApi = api('http://localhost:9999/tasks/', TaskRT)

export async function createTask(data: Task): Promise<Task> {
  return taskApi.create(data)
}

export async function getTask(id: string): Promise<Task> {
  return taskApi.one(id)
}

export async function updateTask(id: string, data: Task): Promise<Task> {
  return taskApi.update(id, data)
}

export async function allTasks(): Promise<ReadonlyArray<Task>> {
  return taskApi.all()
}

export const completedList = async () => {
  const result = await axios.get('http://localhost:9999/tasks/completed')
  return result.data
}

export const pendingList = async () => {
  const result = await axios.get('http://localhost:9999/tasks/pending')
  return result.data
}
