import React from 'react'
import { Route } from 'react-router-dom'
import {
  Container,
  SimpleRedirect,
  TableContentLoader,
} from '../docs/examples/devfractal'
import {
  BasicColumnExample,
  BoxExample,
  BreadcrumbExample,
  ButtonExample,
  CardExample,
  CheckBoxExample,
  ColorHelpersExample,
  ContainerExample,
  ContentExample,
  Counter,
  DeleteExample,
  DropdownExample,
  DropdownExampleRoutes,
  FieldsGeneralForm,
  FileExample,
  FooterExample,
  GapColumnExample,
  GeneralExample,
  HelpersExample,
  HeroExample,
  IconExample,
  ImageExample,
  InputExample,
  LevelExample,
  LoginFormVariants,
  LoginFormVariantsRoutes,
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
  RadioExample,
  ResponsiveColumnExample,
  SectionExample,
  SelectExample,
  SimpleExamples,
  SimpleFormExample,
  SimpleTodo,
  SizesColumnExample,
  TableExample,
  TabsExample,
  TagExample,
  TextAreaExample,
  TileExample,
  TitleExample,
  Todo,
  TypographyHelpersExample,
} from './examples'
import { TodoRoutes } from './examples/crud/TodoRoutes'
import {
  BottomSection,
  ExploreUIComponents,
  FooterSection,
  IndexPageHeader,
  UIComponentsOverview,
} from './IndexPage'
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
    <SimpleRedirect exact from="/form" to="/form/general" />
    <Route path="/form/general" exact component={GeneralExample} />
    <Route path="/form/input" exact component={InputExample} />
    <Route path="/form/select" exact component={SelectExample} />
    <Route path="/form/checkbox" exact component={CheckBoxExample} />
    <Route path="/form/button" exact component={ButtonExample} />
    <Route path="/form/radio" exact component={RadioExample} />
    <Route path="/form/textarea" exact component={TextAreaExample} />
    <Route path="/form/file" exact component={FileExample} />
  </>
)

export const CompositesRoutes: React.SFC = () => (
  <>
    <SimpleRedirect exact from="/composites" to="/composites/simple" />
    <Route path="/composites/simple" exact component={SimpleExamples} />
    <Route path="/composites/simple-form" exact component={SimpleFormExample} />
    <Route
      path="/composites/general-form"
      exact
      component={FieldsGeneralForm}
    />
    <Route path="/composites/counter" exact component={Counter} />
    <Route path="/composites/todo" exact component={Todo} />
    <Route path="/composites/simple-todo" exact component={SimpleTodo} />
    <Route
      path="/composites/login-form-variants"
      exact
      component={LoginFormVariants}
    />
  </>
)

export const CrudRoutes: React.SFC = () => <TodoRoutes />

export const ColumnsRoutes: React.SFC = () => (
  <>
    <SimpleRedirect exact from="/columns" to="/columns/basics" />
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
    <SimpleRedirect exact from="/layout" to="/layout/container" />
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
    <SimpleRedirect exact from="/elements" to="elements/box" />
    <Route path="/elements/box" exact component={BoxExample} />
    <Route
      path="/elements/notification"
      exact
      component={NotificationExample}
    />
    <Route path="/elements/content" exact component={ContentExample} />
    <Route path="/elements/title" exact component={TitleExample} />
    <Route path="/elements/delete" exact component={DeleteExample} />
    <Route path="/elements/icon" exact component={IconExample} />
    <Route path="/elements/image" exact component={ImageExample} />
    <Route path="/elements/bars" exact component={ProgressBarExample} />
    <Route path="/elements/tag" exact component={TagExample} />
    <Route path="/elements/table" exact component={TableExample} />
    <Route
      path="/elements/table-content"
      exact
      component={TableContentLoader}
    />
  </>
)

export const ComponentsRoutes: React.SFC = () => (
  <>
    <SimpleRedirect exact from="/components" to="/components/card" />
    <Route path="/components/card" exact component={CardExample} />
    <Route path="/components/dropdown" exact component={DropdownExample} />
    <Route path="/components/message" exact component={MessageExample} />
    <Route path="/components/tabs" exact component={TabsExample} />
    <Route path="/components/panel" exact component={PanelExample} />
    <Route path="/components/modal" exact component={ModalExample} />
    <Route path="/components/navbar" exact component={NavbarExample} />
    <Route path="/components/menu" exact component={MenuExample} />
    <Route path="/components/pagination" exact component={PaginationExample} />
    <Route path="/components/breadcrumb" component={BreadcrumbExample} />
  </>
)

export const ModifiersRoutes: React.SFC = () => (
  <>
    <SimpleRedirect exact from="/modifiers" to="/modifiers/helpers" />
    <Route path="/modifiers/helpers" exact component={HelpersExample} />
    <Route path="/modifiers/colors" exact component={ColorHelpersExample} />
    <Route
      path="/modifiers/typography"
      exact
      component={TypographyHelpersExample}
    />
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
    <Route exact path="/" component={UIComponentsOverview} />
    <Route exact path="/" component={ExploreUIComponents} />
    <Route exact path="/" component={BottomSection} />
    <Route exact path="/" component={FooterSection} />
  </>
)

export const Routes: React.SFC = () => (
  <Container>
    <IndexRoutes />
    <TabsRoutes />
    <FormRoutes />
    <CompositesRoutes />
    <TodoRoutes />
    <ElementsRoutes />
    <ComponentsRoutes />
    <LayoutRoutes />
    <ColumnsRoutes />
    <ModifiersRoutes />
    <DropdownExampleRoutes />
    <LoginFormVariantsRoutes />
  </Container>
)
