import React from 'react'
import { rest, SafeRouter, SimpleRedirect } from 'srtp-core'
import {
  All,
  Create,
  CrudTable,
  Edit,
  Editor,
  formComponent,
  links,
  listComponent,
  paths,
} from 'srtp-crud'
import { ButtonLink, ButtonsGroup, Section, Title } from 'srtp-ui'
import { boolean, ISODate, NumID, obj, string } from 'srtp-utils'

const Todo = obj(
  { id: NumID },
  { title: string, scheduled: ISODate, done: boolean },
)

const todoApi = rest(Todo, ({ id }) => `${id}`, 'todos', {
  baseURL: 'http://localhost:3000',
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
    <ButtonsGroup alignment="right">
      <ButtonLink variant="primary" to={ls.create}>
        Add
      </ButtonLink>
    </ButtonsGroup>
    <CrudTable
      data={data}
      select={['title', 'scheduled', 'done']}
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
  <SafeRouter>
    <Section>
      <SimpleRedirect from="/" to={ls.list} />
      <EditTodoRoute />
      <TodoListRoute />
      <CreateTodoRoute />
    </Section>
  </SafeRouter>
)
