import 'bulma/css/bulma.css'
import React from 'react'
import {
  Column,
  Columns,
  Router,
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
  UserRoutes,
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
        <UserRoutes />
        <EVSRoutes />

        <InvoiceListRoute />
        <PlanRouteMapRoute />
        <TripListRoute />
      </Column>
    </Columns>
  </Router>
)
