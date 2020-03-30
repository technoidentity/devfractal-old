import React from 'react'
import { Switch } from 'react-router'
import { SafeRoute, SafeRouter } from 'technoidentity-core'
import { NotFound } from 'technoidentity-ui'
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
    <SafeRouter variant="browser">
      <Header />
      <Switch>
        <SafeRoute exact path="/" component={SignUpFormRoute} />
        <SafeRoute exact path="/login" component={LoginRoute} />
        <SafeRoute exact path="/tasks" component={TaskListRoute} />
        <SafeRoute exact path="/tasks/:filter" component={TaskListRoute} />
        <SafeRoute exact path="/add" component={CreateTaskRoute} />
        <SafeRoute exact path="/tasks/:id/edit" component={EditTaskRoute} />
        <SafeRoute component={NotFound} />
      </Switch>
    </SafeRouter>
  </AuthProvider>
)
