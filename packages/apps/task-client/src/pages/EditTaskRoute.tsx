import React from 'react'
import { Put, Section, Title, useParamsSafe } from 'technoidentity-devfractal'
import { req, string } from 'technoidentity-utils'
import { taskAPI } from '../common'
import { TaskForm } from '../views'

const Params = req({ id: string })

export const EditTaskRoute: React.FC = () => {
  const params = useParamsSafe(Params)

  return (
    <Section>
      <Title textAlignment="centered">Edit Task</Title>
      <Put
        id={params.id}
        doGet={taskAPI.get}
        onPut={taskAPI.update}
        component={TaskForm}
        redirectTo={'/tasks'}
      />
    </Section>
  )
}
