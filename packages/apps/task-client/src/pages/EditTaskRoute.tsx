import React from 'react'
import { useParamsSafe } from 'technoidentity-core'
import { Put } from 'technoidentity-crud'
import { Section, Title } from 'technoidentity-ui'
import { pickID } from 'technoidentity-utils'
import { taskAPI } from '../common'
import { TaskForm } from '../views'

export const EditTaskRoute: React.FC = () => {
  const params = useParamsSafe(pickID(taskAPI.spec))

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
