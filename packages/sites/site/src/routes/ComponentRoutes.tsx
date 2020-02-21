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
import { SafeRoute, SimpleRedirect } from 'technoidentity-core'

export const ComponentsRoutes: React.FC = () => (
  <>
    <SimpleRedirect from="/components" to="/components/card" />
    <SafeRoute exact={false} path="/components/card" component={CardExample} />
    <SafeRoute
      exact={false}
      path="/components/dropdown"
      component={DropdownExample}
    />
    <SafeRoute
      exact={false}
      path="/components/message"
      component={MessageExample}
    />
    <SafeRoute exact={false} path="/components/tabs" component={TabsExample} />
    <SafeRoute
      exact={false}
      path="/components/panel"
      component={PanelExample}
    />
    <SafeRoute
      exact={false}
      path="/components/modal"
      component={ModalExample}
    />
    <SafeRoute
      exact={false}
      path="/components/navbar"
      component={NavbarExample}
    />
    <SafeRoute exact={false} path="/components/menu" component={MenuExample} />
    <SafeRoute
      exact={false}
      path="/components/pagination"
      component={PaginationExample}
    />
    <SafeRoute
      exact={false}
      path="/components/breadcrumb"
      component={BreadcrumbExample}
    />
  </>
)
