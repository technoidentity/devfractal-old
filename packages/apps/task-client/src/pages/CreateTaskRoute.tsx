import React from 'react'
import { Post } from 'srtp-crud'
import { Section, Title } from 'srtp-ui'
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
