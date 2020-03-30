import React from 'react'
import { useParamsSafe } from 'srtp-core'
import { Put } from 'srtp-crud'
import { Section, Title } from 'srtp-ui'
import { pickID } from 'srtp-utils'
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
