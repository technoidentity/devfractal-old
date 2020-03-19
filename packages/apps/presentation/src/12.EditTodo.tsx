import React from 'react'
import { Put, useParamsSafe } from 'technoidentity-devfractal'
import { pickID } from 'technoidentity-utils'
import { todoApi } from './08.todoAPI'
import { TodoForm } from './09.TodoForm'

export const EditTodoRoute: React.FC = () => {
  const id = useParamsSafe(pickID(todoApi.spec))

  return (
    <Put
      id={id}
      doGet={todoApi.get}
      onPut={todoApi.update}
      component={TodoForm}
      redirectTo="/"
    />
  )
}
