import { Get } from 'devfractal-api'
import React from 'react'
import { todoApi } from './11.todoAPI'
import { TodoListView } from './14.TodoListView'

export const TodoListRoute: React.FC = () => (
  <Get asyncFn={() => todoApi.many()}>
    {data => <TodoListView todoList={data} />}
  </Get>
)
