import React from 'react'
import { Switch } from 'react-router'
import {
  CreateTaskRoute,
  EditTaskRoute,
  LoginRoute,
  SignUpFormRoute,
  TaskListRoute,
} from './pages'
import { AuthProvider, Router, SafeRoute as Route } from './utils'
import { NotFound } from './utils/NotFound'
import { Header } from './views'

export const App: React.FC = () => (
  <Router variant="browser">
    <AuthProvider>
      <Header />
      <Switch>
        <Route exact path="/" component={SignUpFormRoute} />
        <Route exact path="/login" component={LoginRoute} />
        <Route exact path="/tasks" component={TaskListRoute} />
        <Route exact path="/tasks/add" component={CreateTaskRoute} />
        <Route exact path="/tasks/:id/edit" component={EditTaskRoute} />
        <Route component={NotFound} />
      </Switch>
    </AuthProvider>
  </Router>
)
