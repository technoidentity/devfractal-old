import 'bulma/css/bulma.css'
import React from 'react'
import {
  Column,
  Columns,
  Route,
  Router,
  SimpleRedirect,
} from 'technoidentity-devfractal'
import { SideMenuView, Visibility } from './components'
import { NavBar } from './components/NavBar'
import { FilterDataEVs } from './maps/FilterMap'
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
import './stylesheets/styles.scss'
import { AssignDriverRoute } from './views'
import { AssignBatteryRoute } from './views/AssignBattery'
import { AssignVehicleRoute } from './views/AssignVehicle'

export const SuperAdmin = () => {
  const [visibility, setVisibility] = React.useState<Visibility>('full')
  const handleClick = () => {
    setVisibility(visibility === 'full' ? 'minimal' : 'full')
  }

  return (
    <Router variant="browser">
      <Columns>
        <SideMenuView visibility={visibility} onClick={handleClick} />

        <Column>
          <NavBar />
          <SimpleRedirect from="/" to="/home" />
          <Route path="/home" render={() => <FilterDataEVs />} />
          <DriverRoutes />
          <AssignDriverRoute />
          <BatteryRoutes />
          <AssignBatteryRoute />
          <ClientRoutes />
          <VehicleRoutes />
          <AssignVehicleRoute />
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
}
