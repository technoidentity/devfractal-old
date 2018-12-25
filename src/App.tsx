import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  BoxExample,
  BreadcrumbExample,
  ButtonExample,
  CardExample,
  CheckBoxExample,
  ContainerExample,
  DeleteExample,
  DropDownExample,
  FieldExample,
  FileExample,
  FooterExample,
  HeroExample,
  ImageExample,
  InputExample,
  LayoutExample,
  LevelExample,
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
  SectionExample,
  SelectExample,
  TableExample,
  TabsExample,
  TagExample,
  TextAreaExample,
  TileExample,
  TitleExample,
} from './bulma/examples'
import {
  Columns,
  Components,
  Elements,
  Form,
  FrontPage,
  Layout,
  Modifiers,
} from './bulma/front-page'
import { Container, Section } from './bulma/layout'

export const FormRoutes: React.SFC = () => (
  <>
    <Route path="/form-input" exact component={InputExample} />
    <Route path="/form-select" exact component={SelectExample} />
    <Route path="/form-checkbox" exact component={CheckBoxExample} />
    <Route path="/form-field" exact component={FieldExample} />
    <Route path="/form-radio-button" exact component={RadioButtonExample} />
    <Route path="/form-textarea" exact component={TextAreaExample} />
    <Route path="/form-file" exact component={FileExample} />
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

export const FrontPageRoutes: React.SFC = () => (
  <>
    <Route path="/form" exact component={Form} />
    <Route path="/components" exact component={Components} />
    <Route path="/elements" exact component={Elements} />
    <Route path="/modifiers" exact component={Modifiers} />
    <Route path="/layout" exact component={Layout} />
    <Route path="/columns" exact component={Columns} />
    {/* <Route path="/sample-form" exact component={SampleForm} />
    <Route path="/login-form" exact component={LoginForm} />
    <Route path="/simple-login-form" exact component={SimpleLoginForm} />
    <Route path="/input-example" exact component={InputExample} />
    <Route path="/user-form" exact component={UserForm} />
    <Route path="/signup-form" exact component={FormikSignUpForm} />
    <Route path="/todo-example" exact component={TodoListApp} />
    <Route path="/simple-examples" exact component={SimpleExamples} />
    <Route path="/counter-example" exact component={Counter} /> */}
  </>
)

export const Routes: React.SFC = () => (
  <>
    <Route path="/" exact component={FrontPage} />
    <FormRoutes />
    <FrontPageRoutes />
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
