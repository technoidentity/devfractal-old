import { string } from 'io-ts'
import React from 'react'
import { Put } from 'technoidentity-devfractal-api'
import { useMatch } from 'technoidentity-devfractal-router'
import { req } from 'technoidentity-utils'
import { Todo, todoAPI } from './11.todoAPI'
import { TodoForm } from './12.TodoForm'

const Params = req({ id: string })
export const EditTodoRoute: React.FC = () => {
  const { params } = useMatch(Params)

  return (
    <Put<Todo>
      id={params.id}
      doGet={todoAPI.get}
      onPut={todoAPI.update}
      component={TodoForm}
      redirectPath="/"
    />
  )
}
