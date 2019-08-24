import { Form, Formik } from 'formik'
import React from 'react'
import {
  CheckboxField,
  DateField,
  Get,
  InputField,
  Post,
  Put,
  SubmitAction,
  Title,
} from 'technoidentity-devfractal'
import { empty } from 'technoidentity-utils'
import { Todo, todoAPI } from './common'
import { TodoTable } from './TodoTable'

interface TodoFormProps {
  readonly initial?: Todo
  readonly onSubmit: SubmitAction<Todo>
}

const TodoFormInner = () => (
  <Form>
    <InputField type="text" name="title" />
    <CheckboxField name="done" />
    <DateField name="scheduled" />
  </Form>
)

const TodoForm: React.FC<TodoFormProps> = ({ initial, onSubmit }) => (
  <Formik
    initialValues={initial || empty(Todo)}
    onSubmit={onSubmit}
    component={TodoFormInner}
  />
)

const CreateTodo = () => (
  <Post<Todo>
    component={TodoForm}
    onPost={todoAPI.create}
    redirectTo="/todos"
  />
)

interface EditTodoProps {
  readonly id: number
}

const EditTodo: React.FC<EditTodoProps> = ({ id }) => (
  <Put<Todo, 'id'>
    id={id}
    doGet={todoAPI.get}
    onPut={todoAPI.update}
    component={TodoForm}
    redirectTo="/todos"
  />
)

const TodoList = () => (
  <>
    <Title textAlignment="centered">Todo List</Title>
    <Get asyncFn={() => todoAPI.many()}>
      {data => <TodoTable data={data} />}
    </Get>
  </>
)

export { CreateTodo, EditTodo, TodoList }
