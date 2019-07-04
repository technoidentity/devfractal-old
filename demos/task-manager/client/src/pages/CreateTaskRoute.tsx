import React from 'react'
import { Post, Section, Title } from 'technoidentity-devfractal'
import { Task, taskApi } from '../common'
import { TaskForm } from '../views'

export const CreateTaskRoute: React.FC = () => (
  <Section>
    <Title textAlignment="centered">Create Task</Title>
    <Post<Task>
      redirectURL="/tasks"
      onPost={taskApi.create}
      component={TaskForm}
    />
  </Section>
)
