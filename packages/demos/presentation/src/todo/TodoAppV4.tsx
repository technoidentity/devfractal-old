import React from 'react'
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
} from 'technoidentity-devfractal'
import { Todo, todoAPI } from './common'
import { CreateLink } from './CreateLink'

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

    <CreateLink alignment="centered" createTo={ls.create}>
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
