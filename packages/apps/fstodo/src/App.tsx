import { Router, SimpleRedirect } from '@stp/devfractal'
import 'bulma'
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { render } from 'react-dom'
import { FSTodoApp } from './v3'

const App: React.FC = () => (
  <Router>
    <SimpleRedirect from="/" to="/todos" />
    <FSTodoApp />
  </Router>
)

render(<App />, document.getElementById('root'))
