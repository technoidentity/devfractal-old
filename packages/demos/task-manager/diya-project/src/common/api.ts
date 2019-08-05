import { rest } from 'technoidentity-devfractal'
import { Driver } from './models'

export const apiOptions = {
  baseURL: 'http://localhost:5555',
}

export const driverAPI = rest({
  resource: 'drivers',
  type: Driver,
  ...apiOptions,
})
