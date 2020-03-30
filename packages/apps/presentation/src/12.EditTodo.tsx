import React from 'react'
import { useParamsSafe } from 'technoidentity-core'
import { Put } from 'technoidentity-crud'
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
