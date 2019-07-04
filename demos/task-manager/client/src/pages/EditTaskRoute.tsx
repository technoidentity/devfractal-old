import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Put, Section, Title } from 'technoidentity-devfractal'
import { Task, taskApi } from '../common'
import { TaskForm } from '../views'

// @TODO: Use useRouter, fix 'match' type
export const EditTaskRoute: React.FC<
  RouteComponentProps<{
    readonly id: string
  }>
> = ({ match }) => (
  <Section>
    <Title textAlignment="centered">Edit Task</Title>
    <Put<Task>
      redirectURL="/tasks"
      id={match.params.id}
      doGet={taskApi.get}
      onPut={taskApi.update}
      component={TaskForm}
    />
  </Section>
)
