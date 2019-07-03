import React from 'react'
import { Section } from 'technoidentity-devfractal'
import { Task, taskApi } from '../common'
import { Post } from '../utils'
import { TaskForm } from '../views'

export const CreateTaskRoute: React.FC = () => (
  <Section>
    <h1 className="title has-text-centered">Edit Task</h1>
    <Post<Task>
      redirectURL="/tasks"
      onPost={taskApi.create}
      component={TaskForm}
    />
  </Section>
)
