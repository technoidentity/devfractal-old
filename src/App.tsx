import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import {
  BoxExample,
  BreadcrumbExample,
  ButtonExample,
  CardExample,
  CheckBoxExample,
  ContainerExample,
  Counter,
  DeleteExample,
  DropDownExample,
  FieldExample,
  FileExample,
  FooterExample,
  FormikSignUpForm,
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
  RadioButtonExample,
  SampleForm,
  SectionExample,
  SelectExample,
  SimpleExamples,
  SimpleLoginForm,
  TableExample,
  TabsExample,
  TagExample,
  TextAreaExample,
  TileExample,
  TitleExample,
  TodoListApp,
  UserForm,
} from './bulma/examples'
import { FrontPage } from './bulma/examples/FrontPage'
import { Columns } from './bulma/front-page-tabs/Columns'
import { Components } from './bulma/front-page-tabs/Components'
import { Elements } from './bulma/front-page-tabs/Elements'
import { Form } from './bulma/front-page-tabs/Form'
import { Layout } from './bulma/front-page-tabs/Layout'
import { Modifiers } from './bulma/front-page-tabs/Modifiers'
import { Container } from './bulma/layout/Container'
import { Section } from './bulma/layout/Section'

export const FormLinks: React.SFC = () => (
  <>
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
      <Link to="/field-example"> Field Example</Link>
    </li>
    <li>
      <Link to="/Radiobutton-example"> Radiobutton Example</Link>
    </li>

    <li>
      <Link to="/textarea-example">Textarea Example</Link>
    </li>

    <li>
      <Link to="/file-example">File Example</Link>
    </li>
  </>
)

export const FormRoutes: React.SFC = () => (
  <>
    <Route path="/select-example" exact component={SelectExample} />
    <Route path="/checkbox-example" exact component={CheckBoxExample} />
    <Route path="/field-example" exact component={FieldExample} />
    <Route path="/Radiobutton-example" exact component={RadioButtonExample} />
    <Route path="/textarea-example" exact component={TextAreaExample} />
    <Route path="/file-example" exact component={FileExample} />
  </>
)

export const LayoutLinks: React.SFC = () => (
  <>
    <li>
      <Link to="/layout-example">Layout Example</Link>
    </li>
    <li>
      <Link to="/container-example"> Container Example</Link>
    </li>
    <li>
      <Link to="/level-example">Level Example</Link>
    </li>
    <li>
      <Link to="/hero-example">HeroExample</Link>
    </li>
    <li>
      <Link to="/section-example"> Section Example</Link>
    </li>
    <li>
      <Link to="/footer-example">FooterExample</Link>
    </li>
    <li>
      <Link to="/media-object-example">Media Object Example</Link>
    </li>
    <li>
      <Link to="/tile-example">Tile Example</Link>
    </li>
  </>
)

export const LayoutRoutes: React.SFC = () => (
  <Container>
    <Route path="/container-example" exact component={ContainerExample} />
    <Route path="/hero-example" exact component={HeroExample} />
    <Route path="/footer-example" exact component={FooterExample} />
    <Route path="/layout-example" exact component={LayoutExample} />
    <Route path="/level-example" exact component={LevelExample} />{' '}
    <Route path="/media-object-example" exact component={MediaObjectExample} />
    <Route path="/section-example" exact component={SectionExample} />
    <Route path="/tile-example" exact component={TileExample} />
  </Container>
)

export const ElementsLinks: React.SFC = () => (
  <>
    <li>
      <Link to="/button-example">Button Example</Link>
    </li>
    <li>
      <Link to="/box-example">BoxExample</Link>
    </li>
    <li>
      <Link to="/delete-example">delete Example</Link>
    </li>
    <li>
      <Link to="/image-example">Image Example</Link>
    </li>
    <li>
      <Link to="/progress-bar-example">ProgressBar Example</Link>
    </li>
    <li>
      <Link to="/notification-example">Notification Example</Link>
    </li>
    <li>
      <Link to="/table-example">Table Example</Link>
    </li>
    <li>
      <Link to="/tag-example">Tag Example</Link>
    </li>
    <li>
      <Link to="/title-example">Title Example</Link>
    </li>
  </>
)

export const ElementsRoutes: React.SFC = () => (
  <>
    <Route path="/notification-example" exact component={NotificationExample} />
    <Route path="/title-example" exact component={TitleExample} />
    <Route path="/delete-example" exact component={DeleteExample} />
    <Route path="/image-example" exact component={ImageExample} />
    <Route path="/progress-bar-example" exact component={ProgressBarExample} />
    <Route path="/tag-example" exact component={TagExample} />
    <Route path="/box-example" exact component={BoxExample} />
    <Route path="/button-example" exact component={ButtonExample} />
    <Route path="/table-example" exact component={TableExample} />
  </>
)

export const ComponentsLinks: React.SFC = () => (
  <>
    <li>
      <Link to="/dropdown">DropDownExample</Link>
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
      <Link to="/card-example">Card Example</Link>
    </li>
    <li>
      <Link to="/navbar-example">Navbar Example</Link>
    </li>

    <li>
      <Link to="/menu-example">Menu Example</Link>
    </li>

    <li>
      <Link to="/pagination-example">Pagination Example</Link>
    </li>
  </>
)

export const ComponentsRoutes: React.SFC = () => (
  <>
    <Route path="/dropdown" exact component={DropDownExample} />
    <Route path="/breadcrumb-example" exact component={BreadcrumbExample} />
    <Route path="/message-example" exact component={MessageExample} />
    <Route path="/tabs-example" exact component={TabsExample} />
    <Route path="/panel-example" exact component={PanelExample} />
    <Route path="/modal-example" exact component={ModalExample} />
    <Route path="/card-example" exact component={CardExample} />
    <Route path="/navbar-example" exact component={NavbarExample} />
    <Route path="/menu-example" exact component={MenuExample} />
    <Route path="/pagination-example" exact component={PaginationExample} />
  </>
)

export const OtherLinks: React.SFC = () => (
  <>
    <li>
      <Link to="/front-page">Front Page</Link>
    </li>
    <li>
      <Link to="/form">Form</Link>
    </li>
    <li>
      <Link to="/layout">Layout</Link>
    </li>
    <li>
      <Link to="/modifiers">Modifiers</Link>
    </li>
    <li>
      <Link to="/columns">Columns</Link>
    </li>
    <li>
      <Link to="/components">Components</Link>
    </li>
    <li>
      <Link to="/elements">Elements</Link>
    </li>
    <li>
      <Link to="/todo-example">Todo Example</Link>
    </li>
    <li>
      <Link to="/counter-example">Counter Example</Link>
    </li>
    <li>
      <Link to="/simple-examples">Simple Examples</Link>
    </li>
    <li>
      <Link to="/sample-form">Sample Form</Link>
    </li>
    <li>
      <Link to="/user-form">User Form</Link>
    </li>
    <li>
      <Link to="/login-form">Login Form</Link>
    </li>
    <li>
      <Link to="/simple-login-form">Simple Login Form</Link>
    </li>
    <li>
      <Link to="/signup-form">SignUp Example</Link>
    </li>
  </>
)

export const OtherRoutes: React.SFC = () => (
  <>
    <Route path="/front-page" exact component={FrontPage} />
    <Route path="/form" exact component={Form} />
    <Route path="/components" exact component={Components} />
    <Route path="/elements" exact component={Elements} />
    <Route path="/modifiers" exact component={Modifiers} />
    <Route path="/layout" exact component={Layout} />
    <Route path="/columns" exact component={Columns} />
    <Route path="/sample-form" exact component={SampleForm} />
    <Route path="/login-form" exact component={LoginForm} />
    <Route path="/simple-login-form" exact component={SimpleLoginForm} />
    <Route path="/input-example" exact component={InputExample} />
    <Route path="/user-form" exact component={UserForm} />
    <Route path="/signup-form" exact component={FormikSignUpForm} />
    <Route path="/todo-example" exact component={TodoListApp} />
    <Route path="/simple-examples" exact component={SimpleExamples} />
    <Route path="/counter-example" exact component={Counter} />
  </>
)

export const Links: React.SFC = () => (
  <>
    <ul>
      <nav>
        <OtherLinks />
        <FormLinks />
        <LayoutLinks />
        <ComponentsLinks />
        <ElementsLinks />
      </nav>
    </ul>
  </>
)

export const Routes: React.SFC = () => (
  <>
    <Route path="/" exact component={FrontPage} />
    <OtherRoutes />
    <FormRoutes />
    <ElementsRoutes />
    <ComponentsRoutes />
    <LayoutRoutes />
  </>
)
export const App: React.SFC = () => (
  <div>
    <Router>
      <Section>
        <Routes />
      </Section>
    </Router>
  </div>
)

// tslint:disable-next-line:no-default-export
export default App
