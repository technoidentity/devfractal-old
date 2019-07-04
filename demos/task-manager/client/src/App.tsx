import React from 'react'
import { Switch } from 'react-router'
import { NotFound, Router, SafeRoute as Route } from 'technoidentity-devfractal'
import {
  CreateTaskRoute,
  EditTaskRoute,
  LoginRoute,
  SignUpFormRoute,
  TaskListRoute,
} from './pages'
import { AuthProvider } from './utils'
import { Header } from './views'

export const App: React.FC = () => (
  <AuthProvider>
    <Router variant="browser">
      <Header />
      <Switch>
        <Route exact path="/" component={SignUpFormRoute} />
        <Route exact path="/login" component={LoginRoute} />
        <Route exact path="/tasks" component={TaskListRoute} />
        <Route exact path="/tasks/add" component={CreateTaskRoute} />
        <Route exact path="/tasks/:id/edit" component={EditTaskRoute} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </AuthProvider>
)
