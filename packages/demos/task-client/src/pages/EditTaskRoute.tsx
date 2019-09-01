import { useMatch } from 'devfractal-router'
import { Put } from 'devfractal-ui-api'
import { Section, Title } from 'devfractal-ui-core'
import React from 'react'
import { string } from 'technoidentity-spec'
import { req } from 'technoidentity-utils'
import { taskAPI } from '../common'
import { TaskForm } from '../views'

const Params = req({ id: string })

export const EditTaskRoute: React.FC = () => {
  const { params } = useMatch(Params)
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
