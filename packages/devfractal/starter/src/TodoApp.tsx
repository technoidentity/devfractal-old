import { boolean, number, string } from 'io-ts'
import React from 'react'
import {
  ButtonsGroup,
  Editor,
  rest,
  Router,
  Section,
  SimpleRedirect,
  SimpleTable,
  Title,
  v2,
} from 'technoidentity-devfractal'
import { ISODate, props } from 'technoidentity-utils'

const Todo = props(
  { id: number },
  { title: string, scheduled: ISODate, done: boolean },
)

const todoApi = rest(Todo, 'id', {
  baseURL: 'http://localhost:3000',
  resource: 'todos',
})

const paths = v2.paths('todos')
const links = v2.links('todos')

const TodoForm = v2.formComponent(Todo, ({ onSubmit, initial }) => (
  <>
    <Title textAlignment="centered">Create Todo</Title>
    <Editor id="id" data={initial} onSubmit={onSubmit} />
  </>
))

const CreateTodoRoute = () => (
  <>
    <v2.Create
      path={paths.create}
      form={TodoForm}
      api={todoApi}
      redirectTo={links.list}
    />
  </>
)

export const EditTodoRoute = () => (
  <v2.Edit
    path={paths.edit}
    api={todoApi}
    form={TodoForm}
    redirectTo={links.list}
  />
)

const TodoListView = v2.listComponent(Todo, ({ data }) => (
  <>
    <ButtonsGroup alignment="right">
      <v2.ButtonLink to={links.create} variant="primary">
        Add
      </v2.ButtonLink>
    </ButtonsGroup>
    <SimpleTable data={data} />
  </>
))

const TodoListRoute = () => {
  return (
    <>
      <Title textAlignment="centered">Todo List</Title>
      <v2.All
        path={paths.list}
        api={todoApi}
        list={TodoListView}
        editTo={links.edit}
        createTo={links.create}
      />
    </>
  )
}

export const TodoApp = () => (
  <Router>
    <Section>
      <SimpleRedirect from="/" to={links.list} />
      <EditTodoRoute />
      <TodoListRoute />
      <CreateTodoRoute />
    </Section>
  </Router>
)
