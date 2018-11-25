import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { SampleForm } from './bulma/examples/SampleForm'
import { LoginForm } from './bulma/examples/LoginForm'
import { DropDownExample } from './bulma/examples/Dropdown'
import { LayoutExample } from './bulma/examples/LayoutExamples'
import { LevelExample } from './bulma/examples/LevelExample'
import { BreadcrumbExample } from './bulma/examples/Breadcrumb'
import { MessageExample } from './bulma/examples/MessageExample'
import { TabsExample } from './bulma/examples/TabsExample'
import { PanelExample } from './bulma/examples/Panelexample'
import { ModalExample } from './bulma/examples/ModalExample'
import { MediaObjectExample } from './bulma/examples/MediaObjectExample'

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
            </li>
            <li>
              <Link to="/layout-example">Layout Example</Link>
            </li>
            <li>
              <Link to="/level-example">Level Example</Link>
            </li>
            <li>
              <Link to="/breadcrumb-example">Breadcrumb Example</Link>
            </li>
            <li>
              <Link to="/message-example">Message Example</Link>
            </li>
            <li>
              <Link to="/tabs-example">Tabs Example</Link>
            </li>
            <li>
              <Link to="/panel-example">Panel Example</Link>
            </li>
            <li>
              <Link to="/modal-example">Modal Example</Link>
            </li>
            <li>
              <Link to="/mediaobject-example">Media Object Example</Link>
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
          <Route
            path="/breadcrumb-example"
            exact
            component={BreadcrumbExample}
          />
          <Route path="/message-example" exact component={MessageExample} />
          <Route path="/tabs-example" exact component={TabsExample} />
          <Route path="/panel-example" exact component={PanelExample} />
          <Route path="/modal-example" exact component={ModalExample} />
          <Route
            path="/mediaobject-example"
            exact
            component={MediaObjectExample}
          />
        </div>
      </div>
    </div>
  </Router>
)
