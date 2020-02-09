import { Put } from '@stp/crud'
import { useParams } from '@stp/router'
import { Section, Title } from '@stp/ui'
import { string } from '@stp/utils'
import { req } from '@stp/utils'
import React from 'react'
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
