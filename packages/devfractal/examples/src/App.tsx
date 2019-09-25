import 'bulma/css/bulma.css'
import { Router } from 'devfractal-router'
import React from 'react'
import { render } from 'react-dom'
import { FSTodoApp } from './composites/firestore-todo/v3'

export const App: React.FC = () => (
  <Router variant="browser">
    <FSTodoApp />
  </Router>
)

render(<App />, document.getElementById('root'))
