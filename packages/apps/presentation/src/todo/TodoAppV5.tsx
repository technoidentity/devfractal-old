import React from 'react'
import { SafeRouter, SimpleRedirect } from 'srtp-core'
import {
  CrudRoutes,
  CrudTable,
  Editor,
  formComponent,
  links,
  listComponent,
} from 'srtp-crud'
import { ButtonLink, Section, Title } from 'srtp-ui'
import { Todo, todoAPI } from './common'

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

    <ButtonLink to={create}>Add</ButtonLink>

    <CrudTable
      data={data}
      select={['title', 'scheduled', 'done']}
      editTo={v => edit(v.id)}
    />
  </>
))

export const TodoApp = () => (
  <SafeRouter>
    <Section>
      <SimpleRedirect from="/" to={list} />

      <CrudRoutes api={todoAPI} form={TodoForm} list={TodoList} />
    </Section>
  </SafeRouter>
)
