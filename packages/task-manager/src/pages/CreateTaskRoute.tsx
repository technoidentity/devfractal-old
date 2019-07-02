import React from 'react'
import { Task, taskApi } from '../common'
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
