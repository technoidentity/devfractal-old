import React from 'react'
import { SimpleAsync } from 'technoidentity-devfractal'
import { todoApi } from './11.Todo'
import { TodoListView } from './14.TodoListView'

export const TodoListRoute: React.FC = () => (
  <SimpleAsync asyncFn={todoApi.many}>
    {({ data }) => <TodoListView todoList={data} />}
  </SimpleAsync>
)
