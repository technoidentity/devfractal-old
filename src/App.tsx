import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { SampleForm } from './bulma/examples/SampleForm'
import { LoginForm } from './bulma/examples/LoginForm'

export const App: React.SFC = () => (
  <Router>
    <div>
      <div className="content">
        Examples using Bulma components in devfractal
        <nav>
          <ul>
            <li>
              <Link to="/sample-form">Sample Form</Link>
            </li>
            <li>
              <Link to="/login-form">Login Form</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="section">
        <div className="container">
          <Route path="/sample-form" exact component={SampleForm} />
          <Route path="/login-form" exact component={LoginForm} />
        </div>
      </div>
    </div>
  </Router>
)
