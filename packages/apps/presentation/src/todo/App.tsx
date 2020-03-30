import React from 'react'
import { SafeRoute, SafeRouter, SimpleRedirect } from 'srtp-core'
import { Section } from 'srtp-ui'
import { CreateTodo, EditTodo, TodoList } from './TodoAppV0'

export const TodoApp = () => (
  <SafeRouter>
    <Section>
      <SimpleRedirect from="/" to="todos" />
      <SafeRoute path="/todos" component={TodoList} />
      <SafeRoute path="/todos/new" component={CreateTodo} />
      <SafeRoute path="/todos/:id/edit" component={EditTodo} />
    </Section>
  </SafeRouter>
)
