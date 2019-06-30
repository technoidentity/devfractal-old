import React from 'react'
import { Section } from 'technoidentity-devfractal'
import { createTask } from '../api'
import { ServerError, useSubmit } from '../utils'
import { TaskForm } from '../views'

export const CreateTaskRoute: React.FC = () => {
  const [serverError, onSubmit] = useSubmit('/', createTask)
  return (
    <Section>
      <h1 className="title has-text-centered">Create Task</h1>
      <ServerError serverError={serverError} />
      <TaskForm onSubmit={onSubmit} />
    </Section>
  )
}
