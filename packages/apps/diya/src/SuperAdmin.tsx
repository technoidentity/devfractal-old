import 'bulma/css/bulma.css'
import React from 'react'
import {
  Column,
  Columns,
  Route,
  Router,
  SimpleRedirect,
} from 'technoidentity-devfractal'
import { useAuth } from './auth/AuthContext'
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
import { EVsAssignedRoutes } from './pages/EVsAssignedRoutes'
import { TabletFormRoute } from './pages/TabletFormRoute'
import { ReportsRoute } from './reports/ReportsRoute'
import './stylesheets/styles.scss'
import { AssignBatteryRoute } from './views/AssignBattery'

export const SuperAdmin = () => {
  const { headerText } = useAuth()
  const [visibility, setVisibility] = React.useState<Visibility>('full')

  const handleClick = () => {
    setVisibility(visibility === 'full' ? 'minimal' : 'full')
  }

  return (
    <Router variant="browser">
      <Columns>
        <SideMenuView visibility={visibility} onClick={handleClick} />

        <Column>
          <NavBar headerText={headerText} />
          <SimpleRedirect from="/" to="/home" />
          <Route path="/home" render={() => <FilterDataEVs />} />
          <DriverRoutes />
          <BatteryRoutes />
          <AssignBatteryRoute />
          <ClientRoutes />
          <VehicleRoutes />
          <EmployeeRoutes />
          <GeoFenceRoutes />
          <UserRoutes />
          <EVSRoutes />
          <InvoiceListRoute />
          <PlanRouteMapRoute />
          <TripListRoute />
          <EVsAssignedRoutes />
          <ReportsRoute />
          <TabletFormRoute />
        </Column>
      </Columns>
    </Router>
  )
}
