import { useParams } from 'technoidentity-router'
import { Put } from 'technoidentity-crud'
import { Section, Title } from 'technoidentity-ui'
import React from 'react'
import { string } from 'technoidentity-utils'
import { req } from 'technoidentity-utils'
import { taskAPI } from '../common'
import { TaskForm } from '../views'

const Params = req({ id: string })

export const EditTaskRoute: React.FC = () => {
  const params = useParams(Params)

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
