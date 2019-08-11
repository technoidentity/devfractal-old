import { FormikActions } from 'formik'
import { boolean, number, readonlyArray, string, TypeOf, union } from 'io-ts'
import { date } from 'io-ts-types/lib/date'
import { DateFromISOString } from 'io-ts-types/lib/DateFromISOString'
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { NavLink } from 'react-router-dom'
import {
  ButtonsGroup,
  component,
  Editor,
  rest,
  Router,
  Section,
  SimpleTable,
  Title,
} from 'technoidentity-devfractal'
import { empty, fn, props, req } from 'technoidentity-utils'
import { SimpleGet, SimplePost, SimplePut } from './rest'

const ISODate = union([date, DateFromISOString])

const Todo = props(
  { id: number },
  {
    title: string,
    scheduled: ISODate,
    done: boolean,
  },
)

type Todo = TypeOf<typeof Todo>

const todoApi = rest(Todo, 'id', {
  baseURL: 'http://localhost:3000',
  resource: 'todos',
})

const TodoFormProps = props(
  { initial: Todo },
  {
    onSubmit: fn<
      (values: Todo, actions: FormikActions<Todo>) => Promise<void>
    >(),
  },
)

const TodoForm = component(
  TodoFormProps,
  ({ onSubmit, initial = empty(Todo) }) => (
    <Editor id="id" data={initial} onSubmit={onSubmit} />
  ),
)

const CreateTodoRoute = () => (
  <>
    <Title textAlignment="centered">Create Todo</Title>
    <SimplePost
      path="/todos/new"
      component={TodoForm}
      api={todoApi}
      redirectPath={'/'}
    />
  </>
)

export const EditTodoRoute = () => (
  <SimplePut
    path="/todos/:id/edit"
    api={todoApi}
    component={TodoForm}
    redirectPath="/"
  />
)

const TodoListViewProps = req({ data: readonlyArray(Todo) })

const TodoListView = component(TodoListViewProps, ({ data }) => (
  <>
    <ButtonsGroup alignment="right">
      <NavLink to="/todos/new" className="button is-primary">
        Add
      </NavLink>
    </ButtonsGroup>
    <SimpleTable data={data} />
  </>
))

const TodoListRoute = () => {
  return (
    <>
      <Title textAlignment="centered">Todo List</Title>
      <SimpleGet path="/" api={todoApi} component={TodoListView} />
    </>
  )
}

export const TodoApp = () => (
  <Section>
    <Router variant="browser">
      <TodoListRoute />
      <CreateTodoRoute />
      <EditTodoRoute />
    </Router>
  </Section>
)
