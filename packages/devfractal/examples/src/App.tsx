import 'bulma/css/bulma.css'
import { Route, Router } from 'devfractal-router'
import React from 'react'
import { render } from 'react-dom'
import {
  FSAddForm,
  FSEditForm,
  FsList,
} from './composites/firestore-todo/views'

export const App: React.FC = () => (
  <Router variant="browser">
    <Route exact path="/list" component={FsList} />
    <Route exact path="/list/add" component={FSAddForm} />
    <Route exact path="/list/:id/edit" component={FSEditForm} />
  </Router>
)

render(<App />, document.getElementById('root'))
