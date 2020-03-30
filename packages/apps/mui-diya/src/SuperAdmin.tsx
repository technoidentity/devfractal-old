import 'bulma/css/bulma.css'
import React from 'react'
import { SafeRouter, SimpleRedirect } from 'technoidentity-core'
import { Column, Columns } from 'technoidentity-ui'
import { SideMenuView, Visibility } from './components'
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
    <SafeRouter variant="browser">
      <Columns>
        <SideMenuView visibility={visibility} onClick={handleClick} />

        <Column>
          <SimpleRedirect from="/" to="/drivers" />

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
    </SafeRouter>
  )
}
