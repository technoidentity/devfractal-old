import React from 'react'
import { RouteComponentProps } from 'react-router'
import { taskApi } from '../api'
import { Task } from '../common'
import { Put } from '../utils'
import { TaskForm } from '../views'

// @TODO: Use useRouter, fix 'match' type
export const EditTaskRoute: React.FC<
  RouteComponentProps<{
    readonly id: string
  }>
> = ({ match }) => (
  <Put<Task>
    title="Edit Task"
    redirectURL="/tasks"
    id={match.params.id}
    doGet={taskApi.get}
    onPut={taskApi.update}
    component={TaskForm}
  />
)
