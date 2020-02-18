import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { rest } from 'technoidentity-core'
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
} from 'technoidentity-crud'
import { Router, SimpleRedirect } from 'technoidentity-router'
import { boolean, ISODate, number, obj, string } from 'technoidentity-utils'

const Todo = obj(
  { id: number },
  { title: string, scheduled: ISODate, done: boolean },
)

const todoApi = rest(Todo, 'id', 'todos', {
  baseURL: 'http://localhost:3000',
})

const ps = paths(todoApi.resource)
const ls = links(todoApi.resource)

const CenteredTitle: React.FC = ({ children }) => (
  <Typography align="center">{children}</Typography>
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
  <Router>
    <Paper>
      <SimpleRedirect from="/" to={ls.list} />
      <EditTodoRoute />
      <TodoListRoute />
      <CreateTodoRoute />
    </Paper>
  </Router>
)
