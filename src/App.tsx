import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { SampleForm } from './bulma/examples/SampleForm'
import { LoginForm } from './bulma/examples/LoginForm'
import { DropDownExample } from './bulma/examples/Dropdown'
import { LayoutExample } from './bulma/examples/LayoutExamples'
import { LevelExample } from './bulma/examples/LevelExample'

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
            <li>
              <Link to="/dropdown">DropDownExample</Link>
              <Link to="/layout-example">Layout Example</Link>
            </li>
            <li>
              <Link to="/level-example">Level Example</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="section">
        <div className="container">
          <Route path="/sample-form" exact component={SampleForm} />
          <Route path="/login-form" exact component={LoginForm} />
          <Route path="/dropdown" exact component={DropDownExample} />
          <Route path="/layout-example" exact component={LayoutExample} />
          <Route path="/level-example" exact component={LevelExample} />
        </div>
      </div>
    </div>
  </Router>
)
