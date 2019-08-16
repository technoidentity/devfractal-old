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

export const App = () => (
  <Router variant="browser">
    <Columns>
      <SideMenu />

      <Column>
        <SimpleRedirect from="/" to="/drivers" />

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
