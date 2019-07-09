import React from 'react'
import { Put, Section, Title, useMatch } from 'technoidentity-devfractal'
import { Task, taskApi } from '../common'
import { TaskForm } from '../views'

export const EditTaskRoute: React.FC = () => {
  const { params } = useMatch<{ readonly id: string }>()
  return (
    <Section>
      <Title textAlignment="centered">Edit Task</Title>
      <Put<Task>
        id={params.id}
        doGet={taskApi.get}
        onPut={taskApi.update}
        component={TaskForm}
        redirectURL={'/tasks'}
      />
    </Section>
  )
}
