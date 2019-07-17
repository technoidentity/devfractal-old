import { string } from 'io-ts'
import React from 'react'
import { Put, Section, Title, useMatch } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { Task, taskApi } from '../common'
import { TaskForm } from '../views'

const Params = req({ id: string })

export const EditTaskRoute: React.FC = () => {
  const { params } = useMatch(Params)
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
