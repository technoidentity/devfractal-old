import React from 'react'
import { Put, useMatch } from 'technoidentity-devfractal'
import { todoApi } from './11.Todo'
import { TodoForm } from './12.TodoForm'

export const EditTodoRoute: React.FC = () => {
  const { params } = useMatch<{ readonly id: string }>()

  return (
    <Put
      id={params.id}
      doGet={todoApi.get}
      onPut={todoApi.update}
      component={TodoForm}
      redirectURL="/"
    />
  )
}
