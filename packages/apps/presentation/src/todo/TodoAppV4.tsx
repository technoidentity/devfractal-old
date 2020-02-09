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
  Router,
  Section,
  SimpleRedirect,
  Title,
} from '@stp/devfractal'
import { CreateLink } from '@stp/devfractal'
import React from 'react'
import { Todo, todoAPI } from './common'

const ps = paths(todoAPI.resource)
const ls = links(todoAPI.resource)

const TodoForm = formComponent(Todo, ({ onSubmit, initial }) => (
  <>
    <Title textAlignment="centered">Todo Form</Title>
    <Editor id="id" data={initial} onSubmit={onSubmit} />
  </>
))

const TodoList = listComponent(Todo, ({ data }) => (
  <>
    <Title textAlignment="centered">Todo List</Title>

    <CreateLink alignment="centered" to={ls.create}>
      Add
    </CreateLink>

    <CrudTable
      data={data}
      select={['title', 'scheduled', 'done']}
      editTo={v => ls.edit(v.id)}
    />
  </>
))

const CreateTodoRoute = () => (
  <Create path={ps.create} form={TodoForm} api={todoAPI} redirectTo={ls.list} />
)

const EditTodoRoute = () => (
  <Edit path={ps.edit} api={todoAPI} form={TodoForm} redirectTo={ls.list} />
)

const TodoListRoute = () => <All path={ps.list} api={todoAPI} list={TodoList} />

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
