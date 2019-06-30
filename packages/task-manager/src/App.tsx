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
  <AuthProvider>
    <Router variant="browser">
      <Header />
      <Switch>
        <Route path="/" component={SignUpFormRoute} />
        <Route path="/login" component={LoginRoute} />
        <Route path="/tasks" component={TaskListRoute} />
        <Route path="/tasks/add" component={CreateTaskRoute} />
        <Route path="/tasks/:id/edit" component={EditTaskRoute} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </AuthProvider>
)
