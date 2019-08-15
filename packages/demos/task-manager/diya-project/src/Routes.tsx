import React from 'react'
import { SafeRoute as Route } from 'technoidentity-devfractal'
import {
  BatteryEditRoute,
  BatteryListRoute,
  BatteryRoute,
  ClientListRoute,
  ClientRoute,
  DriverListRoute,
  DriverRoute,
  EditClientRoute,
  EditDriverRoute,
  EditUserRoute,
  EditVehicleRoute,
  EmployeeListRoute,
  EmployeeRoute,
  EVSAssignedRoute,
  GeoFenceListRoute,
  GeoFenceRoute,
  RaiseRequestRoute,
  UserListRoute,
  UserRoute,
  VehicleListRoute,
  VehicleRoute,
} from './pages'

export const BatteriesRoutes = () => (
  <>
    <Route path="/batteries" component={BatteryListRoute} />
    <Route path="/batteries/:id/edit" component={BatteryEditRoute} />
    <Route path="/batteries/add" component={BatteryRoute} />
  </>
)

export const ClientsRoutes = () => (
  <>
    <Route path="/clients" component={ClientListRoute} />
    <Route path="/clients/:id/edit" component={EditClientRoute} />
    <Route path="/clients/add" component={ClientRoute} />
  </>
)

export const DriversRoutes = () => (
  <>
    <Route path="/drivers" component={DriverListRoute} />
    <Route path="/drivers/:id/edit" component={EditDriverRoute} />
    <Route path="/drivers/add" component={DriverRoute} />
  </>
)

export const UsersRoutes = () => (
  <>
    <Route path="/users" component={UserListRoute} />
    <Route path="/users/:id/edit" component={EditUserRoute} />
    <Route path="/users/add" component={UserRoute} />
  </>
)

export const VehiclesRoutes = () => (
  <>
    <Route path="/vehicles" component={VehicleListRoute} />
    <Route path="/vehicles/:id/edit" component={EditVehicleRoute} />
    <Route path="/vehicles/add" component={VehicleRoute} />
  </>
)

export const EmployeesRoutes = () => (
  <>
    <Route path="/employees" component={EmployeeListRoute} />
    <Route path="/employees/add" component={EmployeeRoute} />
  </>
)

export const GeoFencesRoutes = () => (
  <>
    <Route path="/geo_fence" component={GeoFenceListRoute} />
    <Route path="/geo_fence/add" component={GeoFenceRoute} />
  </>
)

export const EVSRoutes = () => (
  <>
    <Route path="/evs" component={EVSAssignedRoute} />
    <Route path="/evs/add" component={RaiseRequestRoute} />
  </>
)
