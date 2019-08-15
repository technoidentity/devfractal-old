import { rest } from 'technoidentity-devfractal'
import {
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

export const apiOptions = {
  baseURL: 'http://localhost:9999',
}

export const driverAPI = rest(Driver, 'id', {
  resource: 'drivers',
  ...apiOptions,
})

export const vehicleAPI = rest(Vehicle, 'id', {
  resource: 'vehicles',
  ...apiOptions,
})

export const batteryAPI = rest(Battery, 'id', {
  resource: 'batteries',
  ...apiOptions,
})

export const clientAPI = rest(Client, 'id', {
  resource: 'clients',
  ...apiOptions,
})

export const userAPI = rest(User, 'id', {
  resource: 'users',
  ...apiOptions,
})

export const evAPI = rest(Ev, 'id', { resource: 'evs', ...apiOptions })

export const planRouteAPI = rest(PlanRoute, 'id', {
  resource: 'routes',
  ...apiOptions,
})

export const employeeAPI = rest(Employee, 'id', {
  resource: 'employees',
  ...apiOptions,
})

export const invoiceAPI = rest(Invoice, 'id', {
  resource: 'invoices',
  ...apiOptions,
})

export const geoFenceAPI = rest(GeoFence, 'id', {
  resource: 'geo_fences',
  ...apiOptions,
})

export const tripAPI = rest(Trip, 'id', {
  resource: 'trips',
  ...apiOptions,
})
