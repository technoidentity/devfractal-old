import React from 'react'
import { RouteComponentProps } from 'react-router'
import { taskApi } from '../api'
import { Put, Task } from '../utils'
import { TaskForm } from '../views'

// @TODO: Use useRouter, fix 'match' type
export const EditTaskRoute: React.FC<
  RouteComponentProps<{
    readonly id: string
  }>
> = ({ match }) => (
  <Put<Task>
    title="Edit Task"
    url="/tasks"
    id={match.params.id}
    doGet={taskApi.get}
    onPut={taskApi.update}
    component={TaskForm}
  />
)
