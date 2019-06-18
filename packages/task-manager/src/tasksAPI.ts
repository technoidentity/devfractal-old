import axios from 'axios'
import { api } from './api'
import { Task, TaskRT } from './types'

const taskApi = api('http://localhost:9999/tasks/', TaskRT)

export const allList = () => taskApi.all()

export const completedList = async () => {
  const result = await axios.get('http://localhost:9999/tasks/completed')
  return result.data
}

export const pendingList = async () => {
  const result = await axios.get('http://localhost:9999/tasks/pending')
  return result.data
}

export const postData = (data: Task) => taskApi.create(data)

export const getTask = (id: string) => taskApi.one(id)

export const putTask = async (id: string, data: Task) =>
  taskApi.update(id, data)
