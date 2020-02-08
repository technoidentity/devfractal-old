import { Route, SimpleRedirect } from 'technoidentity-router'
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
import React from 'react'

export const ComponentsRoutes: React.FC = () => (
  <>
    <SimpleRedirect from="/components" to="/components/card" />
    <Route exact={false} path="/components/card" component={CardExample} />
    <Route
      exact={false}
      path="/components/dropdown"
      component={DropdownExample}
    />
    <Route
      exact={false}
      path="/components/message"
      component={MessageExample}
    />
    <Route exact={false} path="/components/tabs" component={TabsExample} />
    <Route exact={false} path="/components/panel" component={PanelExample} />
    <Route exact={false} path="/components/modal" component={ModalExample} />
    <Route exact={false} path="/components/navbar" component={NavbarExample} />
    <Route exact={false} path="/components/menu" component={MenuExample} />
    <Route
      exact={false}
      path="/components/pagination"
      component={PaginationExample}
    />
    <Route
      exact={false}
      path="/components/breadcrumb"
      component={BreadcrumbExample}
    />
  </>
)
