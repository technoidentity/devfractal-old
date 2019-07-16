import React from 'react'
import { Route } from 'react-router-dom'
import { Container, SimpleRedirect } from 'technoidentity-devfractal'
import {
  BreadcrumbExample,
  CardApp,
  CardExample,
  Cart,
  ColumnsLinks,
  ColumnsRoutes,
  Counter,
  DropdownExample,
  DropdownExampleRoutes,
  ElementsLinks,
  ElementsRoutes,
  FieldsGeneralForm,
  FormLinks,
  FormRoutes,
  LayoutLinks,
  LayoutRoutes,
  LoginFormVariants,
  LoginFormVariantsRoutes,
  MenuExample,
  MessageExample,
  ModalExample,
  ModifiersLinks,
  ModifiersRoutes,
  NavbarExample,
  PaginationExample,
  PanelExample,
  SimpleFormExample,
  SimpleTodo,
  StepComponent,
  TabsExample,
  Todo,
  TreeViewStructure,
} from './examples'
import { TodoRoutes } from './examples/crud/TodoRoutes'
import {
  BottomSection,
  ExploreUIComponents,
  FooterSection,
  IndexPageHeader,
  ResourceSection,
  UIComponentsOverview,
} from './IndexPage'
import { ComponentsTab, CompositesTab } from './Tabs'

export const CompositesRoutes: React.FC = () => (
  <>
    <SimpleRedirect exact from="/composites" to="/composites/simple-form" />
    <Route path="/composites/simple-form" exact component={SimpleFormExample} />
    <Route
      path="/composites/general-form"
      exact
      component={FieldsGeneralForm}
    />
    <Route path="/composites/counter" exact component={Counter} />
    <Route path="/composites/todo" exact component={Todo} />
    <Route path="/composites/treeview" exact component={TreeViewStructure} />
    <Route path="/composites/simple-todo" exact component={SimpleTodo} />
    <Route path="/composites/github-card" exact component={CardApp} />
    <Route path="/composites/cart-app" exact component={Cart} />
    <Route
      path="/composites/login-form-variants"
      exact
      component={LoginFormVariants}
    />
  </>
)

export const CrudRoutes: React.FC = () => <TodoRoutes />

export const ComponentsRoutes: React.FC = () => (
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
    <Route path="/components/step" component={StepComponent} />
  </>
)

export const TabsRoutes: React.FC = () => (
  <>
    <Route path="/form" component={FormLinks} />
    <Route path="/composites" component={CompositesTab} />
    <Route path="/components" component={ComponentsTab} />
    <Route path="/elements" component={ElementsLinks} />
    <Route path="/modifiers" component={ModifiersLinks} />
    <Route path="/layout" component={LayoutLinks} />
    <Route path="/columns" component={ColumnsLinks} />
  </>
)

export const IndexRoutes: React.FC = () => (
  <div className="has-background-black">
    <Container textBackgroundColor="white">
      <Route path="/" component={IndexPageHeader} />
      <Route exact path="/" component={UIComponentsOverview} />
      <Route exact path="/" component={ExploreUIComponents} />
      <Route exact path="/" component={BottomSection} />
      <Route exact path="/" component={ResourceSection} />
      <Route exact path="/" component={FooterSection} />
    </Container>
  </div>
)

export const Routes: React.FC = () => (
  <>
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
  </>
)
