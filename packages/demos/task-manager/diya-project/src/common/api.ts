import { rest } from 'technoidentity-devfractal'
import { Battery, Client, Driver, User, Vehicle } from './models'

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
