import {
  BreadcrumbExample,
  CardExample,
  DropdownExample,
  MenuExample,
  MessageExample,
  ModalExample,
  NavbarExample,
  PaginationExample,
  PanelExample,
  TabsExample,
} from 'devfractal-examples'
import { Route, SimpleRedirect } from 'devfractal-router'
import React from 'react'

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
    {/* <Route path="/components/step" component={StepComponent} /> */}
  </>
)
