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

import { TableExample } from './bulma/examples/TableExample'
import { MenuExample } from './bulma/examples/MenuExample'
import { PaginationExample } from './bulma/examples/PaginationExample'
import { NotificationExample } from './bulma/examples/NotificationExample'
import { TitleExample } from './bulma/examples/TitleExample'
import { DeleteExample } from './bulma/examples/DeleteExample'
import { ImageExample } from './bulma/examples/ImageExample'
import { ProgressBarExample } from './bulma/examples/ProgressBarExample'
import { TagExample } from './bulma/examples/TagExample'
import { SectionExample } from './bulma/examples/SectionExample'
import { ContainerExample } from './bulma/examples/ContainerExample'
import { FieldExample } from './bulma/examples/FieldExample'

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
                <li>
                  <Link to="/menu-example">Menu Example</Link>
                </li>
                <li>
                  <Link to="/table-example">Table Example</Link>
                </li>
                <li>
                  <Link to="/pagination-example">Pagination Example</Link>
                </li>
                <li>
                  <Link to="/notification-example">Notification Example</Link>
                </li>
                <li>
                  <Link to="/title-example">Title Example</Link>
                </li>
                <li>
                  <Link to="/delete-example">delete Example</Link>
                </li>
                <li>
                  <Link to="/image-example">Image Example</Link>
                </li>
                <li>
                  <Link to="/progressbar-example">ProgressBar Example</Link>
                </li>
                <li>
                  <Link to="/tag-example">Tag Example</Link>
                </li>
                <li>
                  <Link to="/section-example"> Section Example</Link>
                </li>
                <li>
                  <Link to="/container-example"> Container Example</Link>
                </li>
                <li>
                  <Link to="/field-example"> Field Example</Link>
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
              <Route path="/menu-example" exact component={MenuExample} />
              <Route path="/table-example" exact component={TableExample} />
              <Route
                path="/pagination-example"
                exact
                component={PaginationExample}
              />
              <Route
                path="/notification-example"
                exact
                component={NotificationExample}
              />
              <Route path="/title-example" exact component={TitleExample} />
              <Route path="/delete-example" exact component={DeleteExample} />
              <Route path="/image-example" exact component={ImageExample} />
              <Route
                path="/progressbar-example"
                exact
                component={ProgressBarExample}
              />
              <Route path="/tag-example" exact component={TagExample} />
              <Route path="/section-example" exact component={SectionExample} />
              <Route
                path="/container-example"
                exact
                component={ContainerExample}
              />
              <Route path="/field-example" exact component={FieldExample} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

// tslint:disable-next-line:no-default-export
export default hot(module)(App)
