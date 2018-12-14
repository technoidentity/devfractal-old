import * as React from 'react'

import { hot, setConfig } from 'react-hot-loader'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Column } from './bulma/Column'
import { Columns } from './bulma/Columns'
import { Container } from './bulma/Container'
import { Content } from './bulma/Content'
import {
  BreadcrumbExample,
  BoxExample,
  ButtonExample,
  CardExample,
  CheckBoxExample,
  ContainerExample,
  Counter,
  DeleteExample,
  DropDownExample,
  FieldExample,
  FooterExample,
  FormikLoginFormExample,
  HeroExample,
  ImageExample,
  InputExample,
  LayoutExample,
  LevelExample,
  LoginForm,
  MediaObjectExample,
  MenuExample,
  MessageExample,
  ModalExample,
  NavbarExample,
  NotificationExample,
  PaginationExample,
  PanelExample,
  ProgressBarExample,
  SampleForm,
  SectionExample,
  SelectExample,
  TableExample,
  TabsExample,
  TagExample,
  TextAreaExample,
  TextExample,
  TileExample,
  TitleExample,
  TodoListApp,
} from './bulma/examples'
import { Section } from './bulma/Section'
import { FormikSignUpForm } from './bulma/examples/SignupFormExample'
import { FileExample } from './bulma/examples/FileExample'

setConfig({
  ignoreSFC: true,
  pureSFC: true,
  pureRender: true,
})

class App extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <div className="title has-text-centered">
          Examples using Bulma components in devfractal
        </div>
        <Router>
          <Columns>
            <Column>
              <Content>
                <nav>
                  <ul>
                    <li>
                      <Link to="/sample-form">Sample Form</Link>
                    </li>
                    <li>
                      <Link to="/login-form">Login Form</Link>
                    </li>
                    <li>
                      <Link to="/todo-example">Todo Example</Link>
                    </li>
                    <li>
                      <Link to="/counter-example">Counter Example</Link>
                    </li>
                    <li>
                      <Link to="/formik-login-form-example">
                        Formik LoginForm Example
                      </Link>
                    </li>
                    <li>
                      <Link to="/input-example">InputExample</Link>
                    </li>
                    <li>
                      <Link to="/select-example">SelectExample</Link>
                    </li>
                    <li>
                      <Link to="/checkbox-example">CheckBoxExample</Link>
                    </li>
                    <li>
                      <Link to="/hero-example">HeroExample</Link>
                    </li>
                    <li>
                      <Link to="/box-example">BoxExample</Link>
                    </li>
                    <li>
                      <Link to="/footer-example">FooterExample</Link>
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
                      <Link to="/mediaobject-example">
                        Media Object Example
                      </Link>
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
                      <Link to="/notification-example">
                        Notification Example
                      </Link>
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
                    <li>
                      <Link to="/button-example">Button Example</Link>
                    </li>
                    <li>
                      <Link to="/textarea-example">Textarea Example</Link>
                    </li>
                    <li>
                      <Link to="/text-example">Text Example</Link>
                    </li>
                    <li>
                      <Link to="/signup-form">SignUp Example</Link>
                    </li>
                    <li>
                      <Link to="/file-example">File Example</Link>
                    </li>
                  </ul>
                </nav>
              </Content>
            </Column>
            <Column>
              <Section>
                <Container>
                  <Route path="/sample-form" exact component={SampleForm} />
                  <Route path="/login-form" exact component={LoginForm} />
                  <Route path="/todo-example" exact component={TodoListApp} />
                  <Route path="/input-example" exact component={InputExample} />
                  <Route
                    path="/select-example"
                    exact
                    component={SelectExample}
                  />
                  <Route path="/hero-example" exact component={HeroExample} />
                  <Route
                    path="/footer-example"
                    exact
                    component={FooterExample}
                  />
                  <Route
                    path="/checkbox-example"
                    exact
                    component={CheckBoxExample}
                  />
                  <Route path="/dropdown" exact component={DropDownExample} />
                  <Route
                    path="/layout-example"
                    exact
                    component={LayoutExample}
                  />
                  <Route path="/level-example" exact component={LevelExample} />
                  <Route
                    path="/breadcrumb-example"
                    exact
                    component={BreadcrumbExample}
                  />
                  <Route
                    path="/message-example"
                    exact
                    component={MessageExample}
                  />
                  <Route path="/tabs-example" exact component={TabsExample} />
                  <Route path="/panel-example" exact component={PanelExample} />
                  <Route
                    path="/formik-login-form-example"
                    exact
                    component={FormikLoginFormExample}
                  />
                  <Route path="/modal-example" exact component={ModalExample} />
                  <Route
                    path="/mediaobject-example"
                    exact
                    component={MediaObjectExample}
                  />
                  <Route path="/card-example" exact component={CardExample} />
                  <Route
                    path="/navbar-example"
                    exact
                    component={NavbarExample}
                  />
                  <Route path="/tile-example" exact component={TileExample} />
                  <Route path="/counter-example" exact component={Counter} />
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
                  <Route
                    path="/delete-example"
                    exact
                    component={DeleteExample}
                  />
                  <Route path="/image-example" exact component={ImageExample} />
                  <Route
                    path="/progressbar-example"
                    exact
                    component={ProgressBarExample}
                  />
                  <Route path="/tag-example" exact component={TagExample} />
                  <Route
                    path="/section-example"
                    exact
                    component={SectionExample}
                  />
                  <Route
                    path="/container-example"
                    exact
                    component={ContainerExample}
                  />
                  <Route path="/field-example" exact component={FieldExample} />
                  <Route path="/box-example" exact component={BoxExample} />
                  <Route
                    path="/button-example"
                    exact
                    component={ButtonExample}
                  />
                  <Route
                    path="/textarea-example"
                    exact
                    component={TextAreaExample}
                  />
                  <Route path="/text-example" exact component={TextExample} />
                  <Route
                    path="/signup-form"
                    exact
                    component={FormikSignUpForm}
                  />
                  <Route path="/file-example" exact component={FileExample} />
                </Container>
              </Section>
            </Column>
          </Columns>
        </Router>
      </div>
    )
  }
}

// tslint:disable-next-line:no-default-export
export default hot(module)(App)
