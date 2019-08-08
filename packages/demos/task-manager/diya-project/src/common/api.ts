import { rest } from 'technoidentity-devfractal'
import { Battery, Client, Driver, User, Vehicle } from './models'

export const apiOptions = {
  baseURL: 'http://localhost:9999',
}

export const driverAPI = rest(Driver, { resource: 'drivers', ...apiOptions })

export const vehicleAPI = rest(Vehicle, { resource: 'vehicles', ...apiOptions })

export const batteryAPI = rest(Battery, {
  resource: 'batteries',
  ...apiOptions,
})

export const clientAPI = rest(Client, { resource: 'clients', ...apiOptions })

export const userAPI = rest(User, { resource: 'users', ...apiOptions })
