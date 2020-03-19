import React from 'react'
import { Put, Section, Title, useParamsSafe } from 'technoidentity-devfractal'
import { idProps, req } from 'technoidentity-utils'
import { taskAPI } from '../common'
import { TaskForm } from '../views'

export const EditTaskRoute: React.FC = () => {
  const params = useParamsSafe(req(idProps(taskAPI.spec)))

  return (
    <Section>
      <Title textAlignment="centered">Edit Task</Title>
      <Put
        id={params}
        doGet={taskAPI.get}
        onPut={taskAPI.update}
        component={TaskForm}
        redirectTo={'/tasks'}
      />
    </Section>
  )
}
