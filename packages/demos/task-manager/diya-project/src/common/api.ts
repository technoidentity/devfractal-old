import { rest } from 'technoidentity-devfractal'
import { Battery, Driver, Vehicle } from './models'

export const apiOptions = {
  baseURL: 'http://localhost:9999',
}

export const driverAPI = rest({
  resource: 'drivers',
  type: Driver,
  ...apiOptions,
})

export const batteryAPI = rest({
  resource: 'batteries',
  type: Battery,
  ...apiOptions,
})

export const vehicleAPI = rest({
  resource: 'vehicles',
  type: Vehicle,
  ...apiOptions,
})
