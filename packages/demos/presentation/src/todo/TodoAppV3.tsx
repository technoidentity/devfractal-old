import { type } from 'io-ts'
import { IntFromString } from 'io-ts-types/lib/IntFromString'
import React from 'react'
import {
  Editor,
  Get,
  Post,
  Put,
  SubmitAction,
  Title,
  useParams,
} from 'technoidentity-devfractal'
import { empty } from 'technoidentity-utils'
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
  <Post<Todo>
    component={TodoForm}
    onPost={todoAPI.create}
    redirectTo="/todos"
  />
)

const EditTodo: React.FC = () => {
  const { id } = useParams(type({ id: IntFromString }))

  return (
    <Put<Todo, 'id'>
      id={id}
      doGet={todoAPI.get}
      onPut={todoAPI.update}
      component={TodoForm}
      redirectTo="/todos"
    />
  )
}
const TodoList = () => (
  <>
    <Title textAlignment="centered">Todo List</Title>
    {/* @TODO: let Get take component */}
    {/* @TODO: handle error */}
    <Get asyncFn={() => todoAPI.many()}>
      {data => <TodoTable data={data} />}
    </Get>
  </>
)

export { CreateTodo, EditTodo, TodoList }
