import React from 'react'
import {
  All,
  Create,
  CreateLink,
  CrudTable,
  Edit,
  Editor,
  formComponent,
  links,
  listComponent,
  paths,
  rest,
  Router,
  Section,
  SimpleRedirect,
  Title,
} from 'technoidentity-devfractal'
import { boolean, number, string } from 'technoidentity-spec'
import { ISODate, props } from 'technoidentity-utils'

const Todo = props(
  { id: number },
  { title: string, scheduled: ISODate, done: boolean },
)

const todoApi = rest(Todo, 'id', {
  baseURL: 'http://localhost:3000',
  resource: 'todos',
})

const ps = paths(todoApi.resource)
const ls = links(todoApi.resource)

const CenteredTitle: React.FC = ({ children }) => (
  <Title textAlignment="centered">{children}</Title>
)

const TodoForm = formComponent(Todo, ({ onSubmit, initial, edit }) => (
  <>
    <CenteredTitle>{edit ? 'Edit Todo' : 'Create Todo'}</CenteredTitle>
    <Editor id="id" data={initial} onSubmit={onSubmit} />
  </>
))

const TodoList = listComponent(Todo, ({ data }) => (
  <>
    <CreateLink alignment="right" variant="primary" to={ls.create}>
      Add
    </CreateLink>

    <CrudTable
      data={data}
      headers={['title', 'scheduled', 'done']}
      editTo={v => ls.edit(v.id)}
    />
  </>
))

const CreateTodoRoute = () => (
  <Create path={ps.create} form={TodoForm} api={todoApi} redirectTo={ls.list} />
)

export const EditTodoRoute = () => (
  <Edit path={ps.edit} api={todoApi} form={TodoForm} redirectTo={ls.list} />
)

const TodoListRoute = () => {
  return (
    <>
      <CenteredTitle>Todo List</CenteredTitle>
      <All path={ps.list} api={todoApi} list={TodoList} />
    </>
  )
}

export const TodoApp = () => (
  <Router>
    <Section>
      <SimpleRedirect from="/" to={ls.list} />
      <EditTodoRoute />
      <TodoListRoute />
      <CreateTodoRoute />
    </Section>
  </Router>
)
