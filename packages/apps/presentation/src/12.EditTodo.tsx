import React from 'react'
import { Put, useParams } from 'technoidentity-devfractal'
import { string } from 'technoidentity-utils'
import { req } from 'technoidentity-utils'
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
