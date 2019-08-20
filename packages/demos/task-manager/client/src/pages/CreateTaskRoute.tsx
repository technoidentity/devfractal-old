import { Post } from 'devfractal-ui-api'
import { Section, Title } from 'devfractal-ui-core'
import React from 'react'
import { Task, taskAPI } from '../common'
import { TaskForm } from '../views'

export const CreateTaskRoute: React.FC = () => (
  <Section>
    <Title textAlignment="centered">Create Task</Title>
    <Post<Task>
      redirectTo="/tasks"
      onPost={taskAPI.create}
      component={TaskForm}
    />
  </Section>
)
