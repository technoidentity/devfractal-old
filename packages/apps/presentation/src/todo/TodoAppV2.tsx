import React from 'react'
import {
  maxLength,
  minLength,
  required,
  useParamsSafe,
} from 'technoidentity-core'
import { Get, Post, Put, SubmitAction } from 'technoidentity-crud'
import { Simple, Title } from 'technoidentity-ui'
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
    <Simple.Form initialValues={initial || empty(Todo)} onSubmit={onSubmit}>
      <Simple.Text
        name="title"
        validations={[required(), minLength(3), maxLength(20)]}
      />
      <Simple.Checkbox name="done" />
      <Simple.Date name="scheduled" validations={[required()]} />

      <Simple.FormButtons />
    </Simple.Form>
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
