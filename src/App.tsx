import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
  AllFieldExamples,
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
import { BasicColumn } from './bulma/examples/column-examples/Basics'
import { IconExample } from './bulma/examples/IconExample'
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
    <Route path="/form-general" exact component={AllFieldExamples} />
    <Route path="/form-input" exact component={InputExample} />
    <Route path="/form-select" exact component={SelectExample} />
    <Route path="/form-checkbox" exact component={CheckBoxExample} />
    <Route path="/form-field" exact component={FieldExample} />
    <Route path="/form-button" exact component={ButtonExample} />
    <Route path="/form-radio-button" exact component={RadioButtonExample} />
    <Route path="/form-textarea" exact component={TextAreaExample} />
    <Route path="/form-file" exact component={FileExample} />
  </>
)

export const ColumnsRoutes: React.SFC = () => (
  <>
    <Route path="/columns-basics" exact component={BasicColumn} />
  </>
)

export const LayoutRoutes: React.SFC = () => (
  <Container>
    <Route path="/layout-container" exact component={ContainerExample} />
    <Route path="/layout-hero" exact component={HeroExample} />
    <Route path="/layout-footer" exact component={FooterExample} />
    <Route path="/layout-level" exact component={LevelExample} />
    <Route path="/layout-object" exact component={MediaObjectExample} />
    <Route path="/layout-section" exact component={SectionExample} />
    <Route path="/layout-tiles" exact component={TileExample} />
  </Container>
)

export const ElementsRoutes: React.SFC = () => (
  <>
    <Route
      path="/elements-notification"
      exact
      component={NotificationExample}
    />
    <Route path="/elements-title" exact component={TitleExample} />
    <Route path="/elements-delete" exact component={DeleteExample} />
    <Route path="/elements-icon" exact component={IconExample} />
    <Route path="/elements-image" exact component={ImageExample} />
    <Route path="/elements-bars" exact component={ProgressBarExample} />
    <Route path="/elements-tag" exact component={TagExample} />
    <Route path="/elements-box" exact component={BoxExample} />
    <Route path="/elements-table" exact component={TableExample} />
  </>
)

export const ComponentsRoutes: React.SFC = () => (
  <>
    <Route path="/components-dropdown" exact component={DropDownExample} />
    <Route path="/components-breadcrumb" exact component={BreadcrumbExample} />
    <Route path="/components-message" exact component={MessageExample} />
    <Route path="/components-tabs" exact component={TabsExample} />
    <Route path="/components-panel" exact component={PanelExample} />
    <Route path="/components-modal" exact component={ModalExample} />
    <Route path="/components-card" exact component={CardExample} />
    <Route path="/components-navbar" exact component={NavbarExample} />
    <Route path="/components-menu" exact component={MenuExample} />
    <Route path="/components-pagination" exact component={PaginationExample} />
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
    <ColumnsRoutes />
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
