import React from 'react'
import { Router, SafeRoute as Route } from 'technoidentity-devfractal'
import { CreateTodoRoute } from './demo/13.CreateTodo'
import { TodoListRoute } from './demo/15.TodoList'
import { EditTodoRoute } from './demo/16.EditTodo'

// export const App: React.FC = () => <TaskManager />

export const App: React.FC = () => (
  <Router variant="browser">
    <Route exact path="/" component={TodoListRoute} />
    <Route exact path="/todos/add" component={CreateTodoRoute} />
    <Route exact path="/todos/:id" component={EditTodoRoute} />
  </Router>
)

// export const App: React.FC = () => <h1>Hello, World</h1>
