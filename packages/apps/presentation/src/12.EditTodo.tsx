import React from 'react'
import { Put, useParamsSafe } from 'technoidentity-devfractal'
import { idProps, req } from 'technoidentity-utils'
import { todoApi } from './08.todoAPI'
import { TodoForm } from './09.TodoForm'

export const EditTodoRoute: React.FC = () => {
  const id = useParamsSafe(req(idProps(todoApi.spec)))

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
