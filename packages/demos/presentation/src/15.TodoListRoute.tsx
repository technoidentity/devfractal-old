import React from 'react'
import { Get } from 'technoidentity-devfractal-api'
import { todoApi } from './11.todoAPI'
import { TodoListView } from './14.TodoListView'

export const TodoListRoute: React.FC = () => (
  <Get asyncFn={() => todoApi.many()}>
    {data => <TodoListView todoList={data} />}
  </Get>
)
