import { Post } from 'technoidentity-crud'
import { Section, Title } from 'technoidentity-ui'
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
