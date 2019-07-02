import React from 'react'
import { taskApi } from '../api'
import { Task } from '../common'
import { Post } from '../utils'
import { TaskForm } from '../views'

export const CreateTaskRoute: React.FC = () => (
  <Post<Task>
    title="Create Task"
    redirectURL="/tasks"
    onPost={taskApi.create}
    component={TaskForm}
  />
)
