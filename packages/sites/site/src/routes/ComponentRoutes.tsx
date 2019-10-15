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
    <SimpleRedirect from="/components" to="/components/card" />
    <Route path="/components/card" component={CardExample} />
    <Route path="/components/dropdown" component={DropdownExample} />
    <Route path="/components/message" component={MessageExample} />
    <Route path="/components/tabs" component={TabsExample} />
    <Route path="/components/panel" component={PanelExample} />
    <Route path="/components/modal" component={ModalExample} />
    <Route path="/components/navbar" component={NavbarExample} />
    <Route path="/components/menu" component={MenuExample} />
    <Route path="/components/pagination" component={PaginationExample} />
    <Route path="/components/breadcrumb" component={BreadcrumbExample} />
  </>
)
