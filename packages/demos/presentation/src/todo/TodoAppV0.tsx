import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import {
  CheckBox,
  Field as UIField,
  Get,
  Input,
  ServerError,
  SubmitAction,
  Title,
  useSubmitRedirect,
} from 'technoidentity-devfractal'
import { Todo, todoAPI } from './common'
import { TodoTable } from './TodoTable'

const TodoFormInner = () => (
  <Form>
    <UIField>
      <Field name="title" component={Input} />
      <ErrorMessage name="title" />
    </UIField>

    <UIField>
      <Field name="done" component={CheckBox} />
      <ErrorMessage name="title" />
    </UIField>

    <UIField>
      <Field component={Date} name="scheduled" />
    </UIField>
  </Form>
)

const initialValues: Todo = { title: '', done: false, scheduled: new Date() }

interface TodoFormProps {
  readonly initial?: Todo
  readonly onSubmit: SubmitAction<Todo>
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, initial }) => (
  <Formik
    initialValues={initial || initialValues}
    onSubmit={onSubmit}
    component={TodoFormInner}
  />
)

const CreateTodo = () => {
  const { serverError, onSubmit } = useSubmitRedirect(todoAPI.create, '/todos')

  return (
    <>
      <Title textAlignment="centered">Create Todo</Title>
      <ServerError error={serverError} />
      <TodoForm onSubmit={onSubmit} />
    </>
  )
}

interface EditTodoProps {
  readonly id: number
}

const EditTodo: React.FC<EditTodoProps> = ({ id }) => {
  const { serverError, onSubmit } = useSubmitRedirect(
    data => todoAPI.update(id, data),
    '/todos',
  )

  return (
    <>
      <Title textAlignment="centered">Edit Todo</Title>
      <ServerError error={serverError} />
      <Get asyncFn={todoAPI.get} deps={[id]}>
        {(data: Todo) => <TodoForm initial={data} onSubmit={onSubmit} />}
      </Get>
    </>
  )
}

const TodoList = () => (
  <>
    <Title textAlignment="centered">Todo List</Title>
    <Get asyncFn={() => todoAPI.many()}>
      {data => <TodoTable data={data} />}
    </Get>
  </>
)

export { CreateTodo, EditTodo, TodoList }
