import * as React from 'react'
import { hot, setConfig } from 'react-hot-loader'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import {
  BreadcrumbExample,
  CardExample,
  DropDownExample,
  LayoutExample,
  LevelExample,
  LoginForm,
  MediaObjectExample,
  MessageExample,
  ModalExample,
  NavbarExample,
  PanelExample,
  SampleForm,
  TabsExample,
  TileExample,
} from './bulma/examples'

setConfig({
  ignoreSFC: true,
  pureSFC: true,
  pureRender: true,
})

class App extends React.Component {
  render(): JSX.Element {
    return (
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
                <li>
                  <Link to="/card-example">Card Example</Link>
                </li>
                <li>
                  <Link to="/navbar-example">Navbar Example</Link>
                </li>
                <li>
                  <Link to="/tile-example">Tile Example</Link>
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
              <Route path="/card-example" exact component={CardExample} />
              <Route path="/navbar-example" exact component={NavbarExample} />
              <Route path="/tile-example" exact component={TileExample} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

// tslint:disable-next-line:no-default-export
export default hot(module)(App)
