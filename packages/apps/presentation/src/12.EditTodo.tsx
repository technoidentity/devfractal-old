import React from 'react'
import { Put, useParams } from '@stp/devfractal'
import { string } from '@stp/utils'
import { req } from '@stp/utils'
import { todoApi } from './08.todoAPI'
import { TodoForm } from './09.TodoForm'

const Params = req({ id: string })
export const EditTodoRoute: React.FC = () => {
  const params = useParams(Params)

  return (
    <Put
      id={params.id}
      doGet={todoApi.get}
      onPut={todoApi.update}
      component={TodoForm}
      redirectTo="/"
    />
  )
}
