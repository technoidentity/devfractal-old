import { rest } from 'technoidentity-devfractal'
import {
  Battery,
  Client,
  Driver,
  Employee,
  Evs,
  GeoFence,
  Invoice,
  PlanRoute,
  User,
  Vehicle,
  ViewTrips,
} from './models'

export const apiOptions = {
  baseURL: 'http://localhost:9999',
}

export const driverAPI = rest(Driver, 'driverID', {
  resource: 'drivers',
  ...apiOptions,
})

export const vehicleAPI = rest(Vehicle, 'vehicleID', {
  resource: 'vehicles',
  ...apiOptions,
})

export const batteryAPI = rest(Battery, 'batteryID', {
  resource: 'batteries',
  ...apiOptions,
})

export const clientAPI = rest(Client, 'clientID', {
  resource: 'clients',
  ...apiOptions,
})

export const userAPI = rest(User, 'userID', {
  resource: 'users',
  ...apiOptions,
})

export const evsAPI = rest(Evs, 'evID', { resource: 'evs', ...apiOptions })

export const planRouteAPI = rest(PlanRoute, 'ID', {
  resource: 'planRoute',
  ...apiOptions,
})

export const employeeAPI = rest(Employee, 'employeeID', {
  resource: 'employees',
  ...apiOptions,
})

export const invoiceAPI = rest(Invoice, 'ID', {
  resource: 'invoices',
  ...apiOptions,
})

export const geofenceAPI = rest(GeoFence, 'ID', {
  resource: 'geofence',
  ...apiOptions,
})

export const viewTripsAPI = rest(ViewTrips, 'ID', {
  resource: 'viewTrips',
  ...apiOptions,
})
