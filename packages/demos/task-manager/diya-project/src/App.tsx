// tslint:disable no-console
import 'bulma/css/bulma.css'
import React from 'react'
import {
  Column,
  Columns,
  Router,
  SafeRoute as Route,
} from 'technoidentity-devfractal'
import { SideMenu } from './components'
import {
  DriverListRoute,
  InvoiceListRoute,
  PlanRouteMapRoute,
  TripListRoute,
} from './pages'
import {
  BatteriesRoutes,
  ClientsRoutes,
  DriversRoutes,
  EmployeesRoutes,
  EVSRoutes,
  GeoFencesRoutes,
  VehiclesRoutes,
} from './Routes'

// tslint:disable-next-line: no-console no-void-expression

export const App = () => (
  <Router variant="browser">
    <Columns>
      <Route exact={false} path="/" component={SideMenu} />
      <Column>
        <Route path="/" component={DriverListRoute} />
        <BatteriesRoutes />
        <ClientsRoutes />
        <DriversRoutes />
        <VehiclesRoutes />
        <EmployeesRoutes />
        <GeoFencesRoutes />
        <EVSRoutes />

        <Route path="/invoices" component={InvoiceListRoute} />
        <Route path="/planRoute" component={PlanRouteMapRoute} />
        <Route path="/trips" component={TripListRoute} />
      </Column>
    </Columns>
  </Router>
)
