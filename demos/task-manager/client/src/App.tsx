import React from 'react'
import {} from 'react-router'
import { Router, SafeRoute as Route } from 'technoidentity-devfractal'
import { CreateTodoRoute } from './demo/13.CreateTodo'
import { TodoListRoute } from './demo/15.TodoList'

// export const App: React.FC = () => <TaskManager />

export const App: React.FC = () => (
  <Router variant="browser">
    <Route path="/" component={TodoListRoute} />
    <Route path="/add" component={CreateTodoRoute} />
  </Router>
)
