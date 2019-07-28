import React from 'react'
import { Get } from 'technoidentity-devfractal-api'
import { todoAPI } from './11.todoAPI'
import { TodoListView } from './14.TodoListView'

export const TodoListRoute: React.FC = () => (
  <Get asyncFn={() => todoAPI.many()}>
    {data => <TodoListView todoList={data} />}
  </Get>
)
