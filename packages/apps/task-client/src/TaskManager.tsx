import { Route, Router, Switch } from 'devfractal-router'
import { NotFound } from 'devfractal-ui-api'
import React from 'react'
import {
  CreateTaskRoute,
  EditTaskRoute,
  LoginRoute,
  SignUpFormRoute,
  TaskListRoute,
} from './pages'
import { AuthProvider } from './utils'
import { Header } from './views'

export const TaskManager = () => (
  <AuthProvider>
    <Router variant="browser">
      <Header />
      <Switch>
        <Route exact path="/" component={SignUpFormRoute} />
        <Route exact path="/login" component={LoginRoute} />
        <Route exact path="/tasks" component={TaskListRoute} />
        <Route exact path="/tasks/:filter" component={TaskListRoute} />
        <Route exact path="/add" component={CreateTaskRoute} />
        <Route exact path="/tasks/:id/edit" component={EditTaskRoute} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </AuthProvider>
)
