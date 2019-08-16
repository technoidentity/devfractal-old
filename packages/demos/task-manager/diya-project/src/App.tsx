// tslint:disable no-console
import 'bulma/css/bulma.css'
import React from 'react'
import {
  Column,
  Columns,
  Router,
  SafeRoute as Route,
  SimpleRedirect,
} from 'technoidentity-devfractal'
import { SideMenu } from './components'
import {
  BatteryRoutes,
  ClientRoutes,
  DriverRoutes,
  EmployeeRoutes,
  EVSRoutes,
  GeoFenceRoutes,
  InvoiceListRoute,
  PlanRouteMapRoute,
  TripListRoute,
  VehicleRoutes,
} from './pages'

// tslint:disable-next-line: no-console no-void-expression

export const App = () => (
  <Router variant="browser">
    <Columns>
      <Route exact={false} path="/" component={SideMenu} />
      <Column>
        <SimpleRedirect from="/" to="/employees" />
        <DriverRoutes />
        <BatteryRoutes />
        <ClientRoutes />
        <VehicleRoutes />
        <EmployeeRoutes />
        <GeoFenceRoutes />
        <EVSRoutes />
        <Route path="/invoices" component={InvoiceListRoute} />
        <Route path="/planRoute" component={PlanRouteMapRoute} />
        <Route path="/trips" component={TripListRoute} />
      </Column>
    </Columns>
  </Router>
)
