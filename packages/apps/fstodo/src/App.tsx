import 'bulma'
import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { render } from 'react-dom'
import {
  APIComponents,
  Router,
  SimpleRedirect,
  UIComponents,
} from 'technoidentity-devfractal'
import { FSTodoApp } from './v3'

const App: React.FC = () => (
  <Router>
    <APIComponents.Provider value={UIComponents}>
      <SimpleRedirect from="/" to="/todos" />
      <FSTodoApp />
    </APIComponents.Provider>
  </Router>
)

render(<App />, document.getElementById('root'))
