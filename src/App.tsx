import React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import {
  BasicColumnExample,
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
  GapColumnExample,
  GeneralExample,
  HeroExample,
  IconExample,
  ImageExample,
  InputExample,
  LevelExample,
  MediaObjectExample,
  MenuExample,
  MessageExample,
  ModalExample,
  NavbarExample,
  NestingColumnExample,
  NotificationExample,
  OptionsColumnExample,
  PaginationExample,
  PanelExample,
  ProgressBarExample,
  RadioButtonExample,
  ResponsiveColumnExample,
  SectionExample,
  SelectExample,
  SizesColumnExample,
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
  Layout,
  MainPageRoutes,
  Modifiers,
} from './bulma/front-page'
import { Section } from './bulma/layout'

export const FormRoutes: React.SFC = () => (
  <>
    <Route exact path="/form" render={() => <Redirect to="/form/general" />} />
    <Route path="/form/general" exact component={GeneralExample} />
    <Route path="/form/input" exact component={InputExample} />
    <Route path="/form/select" exact component={SelectExample} />
    <Route path="/form/checkbox" exact component={CheckBoxExample} />
    <Route path="/form/field" exact component={FieldExample} />
    <Route path="/form/button" exact component={ButtonExample} />
    <Route path="/form/radio-button" exact component={RadioButtonExample} />
    <Route path="/form/textarea" exact component={TextAreaExample} />
    <Route path="/form/file" exact component={FileExample} />
  </>
)

export const ColumnsRoutes: React.SFC = () => (
  <>
    <Route
      exact
      path="/columns"
      render={() => <Redirect to="/columns/basics" />}
    />
    <Route path="/columns/basics" exact component={BasicColumnExample} />
    <Route path="/columns/size" exact component={SizesColumnExample} />
    <Route
      path="/columns/responsive"
      exact
      component={ResponsiveColumnExample}
    />
    <Route path="/columns/nesting" exact component={NestingColumnExample} />
    <Route path="/columns/gap" exact component={GapColumnExample} />
    <Route path="/columns/options" exact component={OptionsColumnExample} />
  </>
)

export const LayoutRoutes: React.SFC = () => (
  <>
    <Route
      exact
      path="/layout"
      render={() => <Redirect to="/layout/container" />}
    />
    <Route path="/layout/container" exact component={ContainerExample} />
    <Route path="/layout/hero" exact component={HeroExample} />
    <Route path="/layout/footer" exact component={FooterExample} />
    <Route path="/layout/level" exact component={LevelExample} />
    <Route path="/layout/object" exact component={MediaObjectExample} />
    <Route path="/layout/section" exact component={SectionExample} />
    <Route path="/layout/tiles" exact component={TileExample} />
  </>
)

export const ElementsRoutes: React.SFC = () => (
  <>
    <Route
      exact
      path="/elements"
      render={() => <Redirect to="elements/box" />}
    />
    <Route path="/elements/box" exact component={BoxExample} />
    <Route
      path="/elements/notification"
      exact
      component={NotificationExample}
    />
    <Route path="/elements/title" exact component={TitleExample} />
    <Route path="/elements/delete" exact component={DeleteExample} />
    <Route path="/elements/icon" exact component={IconExample} />
    <Route path="/elements/image" exact component={ImageExample} />
    <Route path="/elements/bars" exact component={ProgressBarExample} />
    <Route path="/elements/tag" exact component={TagExample} />
    <Route path="/elements/table" exact component={TableExample} />
  </>
)

export const ComponentsRoutes: React.SFC = () => (
  <>
    <Route
      exact
      path="/components"
      render={() => <Redirect to="/components/breadcrumb" />}
    />
    <Route path="/components/breadcrumb" exact component={BreadcrumbExample} />
    <Route path="/components/dropdown" exact component={DropDownExample} />
    <Route path="/components/message" exact component={MessageExample} />
    <Route path="/components/tabs" exact component={TabsExample} />
    <Route path="/components/panel" exact component={PanelExample} />
    <Route path="/components/modal" exact component={ModalExample} />
    <Route path="/components/card" exact component={CardExample} />
    <Route path="/components/navbar" exact component={NavbarExample} />
    <Route path="/components/menu" exact component={MenuExample} />
    <Route path="/components/pagination" exact component={PaginationExample} />
  </>
)

export const FrontPageRoutes: React.SFC = () => (
  <>
    <Route path="/form" component={Form} />
    <Route path="/components" component={Components} />
    <Route path="/elements" component={Elements} />
    <Route path="/modifiers" component={Modifiers} />
    <Route path="/layout" component={Layout} />
    <Route path="/columns" component={Columns} />
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
    <MainPageRoutes />
    <FrontPageRoutes />
    <FormRoutes />
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
