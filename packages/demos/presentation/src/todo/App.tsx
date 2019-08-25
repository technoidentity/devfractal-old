import React from 'react'
import {
  Route,
  Router,
  Section,
  SimpleRedirect,
} from 'technoidentity-devfractal'
import { CreateTodo, EditTodo, TodoList } from './TodoAppV0'

export const TodoApp = () => (
  <Router>
    <Section>
      <SimpleRedirect from="/" to="todos" />
      <Route path="/todos" component={TodoList} />
      <Route path="/todos/new" component={CreateTodo} />
      <Route path="/todos/:id/edit" component={EditTodo} />
    </Section>
  </Router>
)
