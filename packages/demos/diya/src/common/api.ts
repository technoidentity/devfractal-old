import { Mixed } from 'io-ts'
import { rest, toJSONServerQuery } from 'technoidentity-devfractal'
import { HasProps } from 'technoidentity-utils'
import {
  AdManager,
  Battery,
  Client,
  Driver,
  Employee,
  Ev,
  GeoFence,
  Invoice,
  PlanRoute,
  Trip,
  User,
  Vehicle,
} from './models'

// tslint:disable-next-line: typedef
function api<Spec extends Mixed & HasProps>(spec: Spec, resource: string) {
  return rest(
    spec,
    'id',
    { resource, baseURL: 'http://localhost:9999' },
    toJSONServerQuery,
  )
}

export const driverAPI = api(Driver, 'drivers')
export const vehicleAPI = api(Vehicle, 'vehicles')
export const batteryAPI = api(Battery, 'batteries')
export const clientAPI = api(Client, 'clients')
export const userAPI = api(User, 'users')
export const evAPI = api(Ev, 'evs')
export const planRouteAPI = api(PlanRoute, 'routes')
export const employeeAPI = api(Employee, 'employees')
export const invoiceAPI = api(Invoice, 'invoices')
export const geoFenceAPI = api(GeoFence, 'geo_fences')
export const tripAPI = api(Trip, 'trips')
export const adManagerAPI = api(AdManager, 'adManagers')
