import React from 'react'
import {
  Editor,
  Get,
  Post,
  Put,
  SubmitAction,
  Title,
  useParamsSafe,
} from 'technoidentity-devfractal'
import { empty, pickID } from 'technoidentity-utils'
import { Todo, todoAPI } from './common'
import { TodoTable } from './TodoTable'

interface TodoFormProps {
  readonly initial?: Todo
  readonly onSubmit: SubmitAction<Todo>
}

const TodoForm: React.FC<TodoFormProps> = ({ initial, onSubmit }) => (
  <>
    <Title textAlignment="centered">Create/Update Todo</Title>
    <Editor id="id" data={initial || empty(Todo)} onSubmit={onSubmit} />
  </>
)

const CreateTodo = () => (
  <Post component={TodoForm} onPost={todoAPI.create} redirectTo="/todos" />
)

const EditTodo: React.FC = () => {
  const id = useParamsSafe(pickID(todoAPI.spec))

  return (
    <Put
      id={id}
      doGet={todoAPI.get}
      onPut={todoAPI.replace}
      component={TodoForm}
      redirectTo="/todos"
    />
  )
}

const TodoList = () => (
  <>
    <Title textAlignment="centered">Todo List</Title>
    <Get asyncFn={todoAPI.many} component={TodoTable} />
  </>
)

export { CreateTodo, EditTodo, TodoList }
