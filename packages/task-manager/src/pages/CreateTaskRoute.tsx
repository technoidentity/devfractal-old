import React from 'react'
import { taskApi } from '../api'
import { Post, Task } from '../utils'
import { TaskForm } from '../views'

export const CreateTaskRoute: React.FC = () => (
  <Post<Task>
    title="Create Task"
    url="/tasks"
    onPost={taskApi.create}
    component={TaskForm}
  />
)
