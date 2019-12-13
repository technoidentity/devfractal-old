import { rest, toJSONServerQuery } from 'technoidentity-devfractal'
import { ObjC, Props } from 'technoidentity-utils'
import { fakeBaseURL } from '../config'
import {
  AdManager,
  AssignBattery,
  AssignDriver,
  AssignVehicle,
  BatteryData,
  BatteryEdit,
  BatteryResponse,
  Client,
  DriverData,
  DriverResponse,
  Employee,
  Ev,
  EVsAssignedResponse,
  GeoFence,
  Invoice,
  PlanRoute,
  TabletData,
  TabletListResponse,
  TripListResponse,
  UserData,
  UserEdit,
  UserListResponse,
  VehicleData,
  VehicleEdit,
  VehicleResponse,
} from './models'

// tslint:disable-next-line: typedef
function api<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
  resource: string,
) {
  return rest(spec, 'id', { resource, baseURL: fakeBaseURL }, toJSONServerQuery)
}

// function apiServer<Opt extends Props, Req extends Props>(
//   spec: ObjC<Opt, Req>,
//   resource: string,
// ) {
//   const data = localStorage.getItem('loginData')
//   if (data) {
//     const {
//       data: { token },
//     }: AuthUserInfo = JSON.parse(data)
//     return rest(
//       spec,
//       'id',
//       {
//         resource,
//         baseURL,
//         headers: { Authorization: `bearer ${token}` },
//       },
//       toJSONServerQuery,
//     )
//   }
// }

export const driverAPI = api(DriverResponse, 'drivers')
export const driverAdd = api(DriverData, 'drivers')
export const driverEditAPI = api(DriverData, 'drivers')

export const batteryAPI = api(BatteryResponse, 'batteries')
export const batteryAdd = api(BatteryData, 'batteries')
export const batteryEditAPI = api(BatteryEdit, 'batteries')

export const vehicleAPI = api(VehicleResponse, 'vehicles')
export const vehicleEditAPI = api(VehicleEdit, 'vehicles')
export const vehicleAdd = api(VehicleData, 'vehicles')

export const tabletAPI = api(TabletListResponse, 'tablets')
export const tabletEditAPI = api(TabletData, 'tablets')
export const tabletAdd = api(TabletData, 'tablets')

export const clientAPI = api(Client, 'clients')
export const userAPI = api(UserListResponse, 'users')
export const userAdd = api(UserData, 'users')
export const userEditAPI = api(UserEdit, 'users')
export const evAPI = api(Ev, 'evs')
export const planRouteAPI = api(PlanRoute, 'routes')
export const employeeAPI = api(Employee, 'employees')
export const invoiceAPI = api(Invoice, 'invoices')
export const geoFenceAPI = api(GeoFence, 'geo_fences')
export const tripAPI = api(TripListResponse, 'trips')
export const evsAssignedAPI = api(EVsAssignedResponse, 'evs_assigned')
export const adManagerAPI = api(AdManager, 'adManagers')
export const assignDriverAPI = api(AssignDriver, 'assignDriver')
export const assignVehicleAPI = api(AssignVehicle, 'assignVehicle')
export const assignBatteryAPI = api(AssignBattery, 'assignBattery')
