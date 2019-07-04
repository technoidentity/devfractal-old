import { string, TypeOf } from 'io-ts'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Put, Section, Title } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { Task, taskApi } from '../common'
import { TaskForm } from '../views'

const EditTaskRouteParams = req({ id: string })
export type EditTaskRouteParams = TypeOf<typeof EditTaskRouteParams>

// @TODO: Use useRouter, fix 'match' type
export const EditTaskRoute: React.FC<
  RouteComponentProps<EditTaskRouteParams>
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
