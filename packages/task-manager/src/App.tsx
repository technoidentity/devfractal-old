import React from 'react'
import {
  CreateTaskRoute,
  EditTaskRoute,
  LoginRoute,
  SignUpFormRoute,
  TaskListRoute,
} from './pages'
import { Router, SafeRoute as Route } from './utils'

export const App: React.FC = () => (
  <Router variant="browser">
    <Route exact path="/" component={SignUpFormRoute} />
    <Route exact path="/login" component={LoginRoute} />
    <Route exact path="/tasks" component={TaskListRoute} />
    <Route path="/add" component={CreateTaskRoute} />
    <Route path="/edit/:id" component={EditTaskRoute} />
  </Router>
)
