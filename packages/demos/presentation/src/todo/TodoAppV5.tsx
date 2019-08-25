import React from 'react'
import {
  CrudRoutes,
  CrudTable,
  Editor,
  formComponent,
  links,
  listComponent,
  Router,
  Section,
  SimpleRedirect,
  Title,
} from 'technoidentity-devfractal'
import { Todo, todoAPI } from './common'
import { CreateLink } from './CreateLink'

const { create, edit, list } = links(todoAPI.resource)

const TodoForm = formComponent(Todo, ({ onSubmit, initial }) => (
  <>
    <Title textAlignment="centered">Todo Form</Title>
    <Editor id="id" data={initial} onSubmit={onSubmit} />
  </>
))

const TodoList = listComponent(Todo, ({ data }) => (
  <>
    <Title textAlignment="centered">Todo List</Title>

    <CreateLink alignment="right" createTo={create}>
      Add
    </CreateLink>

    <CrudTable
      data={data}
      headers={['title', 'scheduled', 'done']}
      editTo={v => edit(v.id)}
    />
  </>
))

export const TodoApp = () => (
  <Router>
    <Section>
      <SimpleRedirect from="/" to={list} />

      <CrudRoutes api={todoAPI} form={TodoForm} list={TodoList} />
    </Section>
  </Router>
)
