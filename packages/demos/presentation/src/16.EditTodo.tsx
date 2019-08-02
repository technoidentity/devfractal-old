import { Put } from 'devfractal-api'
import { useMatch } from 'devfractal-router'
import { string } from 'io-ts'
import React from 'react'
import { req } from 'technoidentity-utils'
import { Todo, todoApi } from './11.todoAPI'
import { TodoForm } from './12.TodoForm'

const Params = req({ id: string })
export const EditTodoRoute: React.FC = () => {
  const { params } = useMatch(Params)

  return (
    <Put<Todo>
      id={params.id}
      doGet={todoApi.get}
      onPut={todoApi.update}
      component={TodoForm}
      redirectPath="/"
    />
  )
}
