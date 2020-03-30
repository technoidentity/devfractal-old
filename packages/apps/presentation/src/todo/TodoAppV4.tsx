import React from 'react'
import { SafeRouter, SimpleRedirect } from 'technoidentity-core'
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
} from 'technoidentity-crud'
import { ButtonLink, Section, Title } from 'technoidentity-ui'
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

    <ButtonLink to={ls.create}>Add</ButtonLink>

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
  <SafeRouter>
    <Section>
      <SimpleRedirect from="/" to={ls.list} />
      <EditTodoRoute />
      <TodoListRoute />
      <CreateTodoRoute />
    </Section>
  </SafeRouter>
)
