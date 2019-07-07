import React from 'react'
import { SimpleAsync } from 'technoidentity-devfractal'
import { todoApi } from './11.Todo'
import { TodoList } from './14.TodoListView'

export const TodoListRoute: React.FC = () => (
  <SimpleAsync asyncFn={todoApi.many}>
    {({ data }) => <TodoList todoList={data} />}
  </SimpleAsync>
)
