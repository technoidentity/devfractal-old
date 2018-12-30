import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {
  BasicColumnExample,
  BoxExample,
  BreadcrumbExample,
  ButtonExample,
  CardExample,
  CheckBoxExample,
  ContainerExample,
  Counter,
  DeleteExample,
  DropDownExample,
  FieldsGeneralForm,
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
  SimpleExample,
  SimpleLoginForm,
  SizesColumnExample,
  TableExample,
  TabsExample,
  TagExample,
  TextAreaExample,
  TileExample,
  TitleExample,
  Todo,
} from '../bulma/examples'
import { DropDownExampleRoutes } from '../bulma/examples/components/DropDownExample'
import { IndexPageBody, IndexPageHeader } from './IndexPage'
import {
  ColumnsTab,
  ComponentsTab,
  CompositesTab,
  ElementsTab,
  FormTab,
  LayoutTab,
  ModifiersTab,
} from './Tabs'

export const FormRoutes: React.SFC = () => (
  <>
    <Route exact path="/form" render={() => <Redirect to="/form/general" />} />
    <Route path="/form/general" exact component={GeneralExample} />
    <Route path="/form/input" exact component={InputExample} />
    <Route path="/form/select" exact component={SelectExample} />
    <Route path="/form/checkbox" exact component={CheckBoxExample} />
    <Route path="/form/button" exact component={ButtonExample} />
    <Route path="/form/radio-button" exact component={RadioButtonExample} />
    <Route path="/form/textarea" exact component={TextAreaExample} />
    <Route path="/form/file" exact component={FileExample} />
  </>
)

export const CompositesRoutes: React.SFC = () => (
  <>
    <Route
      exact
      path="/composites"
      render={() => <Redirect to="/composites/simple" />}
    />
    <Route path="/composites/simple" exact component={SimpleExample} />
    <Route
      path="/composites/general-form"
      exact
      component={FieldsGeneralForm}
    />
    <Route path="/composites/login-form" exact component={SimpleLoginForm} />
    <Route path="/composites/counter" exact component={Counter} />
    <Route path="/composites/todo" exact component={Todo} />
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

export const TabsRoutes: React.SFC = () => (
  <>
    <Route path="/form" component={FormTab} />
    <Route path="/composites" component={CompositesTab} />
    <Route path="/components" component={ComponentsTab} />
    <Route path="/elements" component={ElementsTab} />
    <Route path="/modifiers" component={ModifiersTab} />
    <Route path="/layout" component={LayoutTab} />
    <Route path="/columns" component={ColumnsTab} />
  </>
)

export const IndexRoutes: React.SFC = () => (
  <>
    <Route path="/" component={IndexPageHeader} />
    <Route exact path="/" component={IndexPageBody} />
  </>
)

export const Routes: React.SFC = () => (
  <>
    <IndexRoutes />
    <TabsRoutes />
    <FormRoutes />
    <CompositesRoutes />
    <ElementsRoutes />
    <ComponentsRoutes />
    <LayoutRoutes />
    <ColumnsRoutes />
    <DropDownExampleRoutes />
  </>
)
