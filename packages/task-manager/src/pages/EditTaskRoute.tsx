import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Task, taskApi } from '../common'
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
