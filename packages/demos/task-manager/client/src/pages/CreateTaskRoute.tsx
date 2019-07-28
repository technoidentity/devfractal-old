import React from 'react'
import { Post } from 'technoidentity-devfractal-api'
import { Section, Title } from 'technoidentity-devfractal-ui-core'
import { Task, taskAPI } from '../common'
import { TaskForm } from '../views'

export const CreateTaskRoute: React.FC = () => (
  <Section>
    <Title textAlignment="centered">Create Task</Title>
    <Post<Task>
      redirectPath="/tasks"
      onPost={taskAPI.create}
      component={TaskForm}
    />
  </Section>
)
