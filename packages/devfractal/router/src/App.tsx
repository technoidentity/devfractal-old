import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import { Router } from './Router'
import { Route } from './SafeRoute'
import { SimpleRedirect } from './SimpleRedirect'

const Hello: React.FC = () => <Link to="/world">hello world</Link>

const App: React.FC = () => (
  <Router>
    <SimpleRedirect from="/" to="/hello" />
    <Route path="/hello" component={Hello} />
    <Route path="/world" render={() => <h1>Hello, World!</h1>} />
  </Router>
)

render(<App />, document.getElementById('root'))
