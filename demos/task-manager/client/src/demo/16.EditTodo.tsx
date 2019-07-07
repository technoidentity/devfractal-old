import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Put } from 'technoidentity-devfractal'
import { Todo, todoApi } from './11.todo'
import { TodoForm } from './12.TodoForm'

export const EditTodoRoute: React.FC<
  RouteComponentProps<{ readonly id: string }>
> = ({ match }) => (
  <Put<Todo>
    id={match.params.id}
    doGet={todoApi.get}
    onPut={todoApi.update}
    component={TodoForm}
  />
)
