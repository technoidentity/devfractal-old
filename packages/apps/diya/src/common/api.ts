import { rest, toJSONServerQuery } from 'technoidentity-devfractal'
import { ObjC, Props } from 'technoidentity-utils'
import { AuthUserInfo } from '../common'
import { baseURL, fakeBaseURL } from '../config'
import {
  AdManager,
  AssignBattery,
  AssignDriver,
  AssignVehicle,
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
  // Vehicle,
  VehicleResponse,
} from './models'

// tslint:disable-next-line: typedef
function api<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
  resource: string,
) {
  return rest(spec, 'id', { resource, baseURL: fakeBaseURL }, toJSONServerQuery)
}

function apiServer<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
  resource: string,
) {
  const data = localStorage.getItem('loginData')

  if (data) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(data)
    return rest(
      spec,
      'id',
      {
        resource,
        baseURL,
        headers: { Authorization: `bearer ${token}` },
      },
      toJSONServerQuery,
    )
  } else {
    throw new Error('token is require')
  }
}

export const driverAPI = api(Driver, 'drivers')
export const vehicleAPI = apiServer(VehicleResponse, 'vehicles')
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
export const assignDriverAPI = api(AssignDriver, 'assignDriver')
export const assignVehicleAPI = api(AssignVehicle, 'assignVehicle')
export const assignBatteryAPI = api(AssignBattery, 'assignBattery')
