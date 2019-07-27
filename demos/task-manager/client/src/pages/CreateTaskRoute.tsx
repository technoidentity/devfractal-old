import React from 'react'
import { Post } from 'technoidentity-devfractal-api'
import { Section, Title } from 'technoidentity-devfractal-ui-core'
import { Task, taskApi } from '../common'
import { TaskForm } from '../views'

export const CreateTaskRoute: React.FC = () => (
  <Section>
    <Title textAlignment="centered">Create Task</Title>
    <Post<Task>
      redirectPath="/tasks"
      onPost={taskApi.create}
      component={TaskForm}
    />
  </Section>
)
