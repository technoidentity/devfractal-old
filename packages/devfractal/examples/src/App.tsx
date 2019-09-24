import 'bulma/css/bulma.css'
import { Route, Router } from 'devfractal-router'
import React from 'react'
import { render } from 'react-dom'
import {
  FSAddTodo,
  FSEditTodo,
  FSTodoList,
} from './composites/firestore-todo/v1'

export const App: React.FC = () => (
  <Router variant="browser">
    <Route exact path="/todos" component={FSTodoList} />
    <Route exact path="/todos/new" component={FSAddTodo} />
    <Route exact path="/todos/:id/edit" component={FSEditTodo} />
  </Router>
)

render(<App />, document.getElementById('root'))
