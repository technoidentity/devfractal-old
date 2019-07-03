import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Section } from 'technoidentity-devfractal'
import { Task, taskApi } from '../common'
import { Put } from '../utils'
import { TaskForm } from '../views'

// @TODO: Use useRouter, fix 'match' type
export const EditTaskRoute: React.FC<
  RouteComponentProps<{
    readonly id: string
  }>
> = ({ match }) => (
  <Section>
    <h1 className="title has-text-centered">Edit Task</h1>
    <Put<Task>
      redirectURL="/tasks"
      id={match.params.id}
      doGet={taskApi.get}
      onPut={taskApi.update}
      component={TaskForm}
    />
  </Section>
)
