import { rest, toJSONServerQuery } from 'technoidentity-core'
import { ObjC, Props, TypeOfID } from 'technoidentity-utils'
import { fakeBaseURL } from '../config'
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
  Vehicle,
} from './models'

// tslint:disable-next-line: typedef
function api<Opt extends Props, Req extends Props>(
  spec: ObjC<Opt, Req>,
  idPath: (id: TypeOfID<Opt, Req>) => string,
  resource: string,
) {
  return rest<Opt, Req>(
    spec,
    idPath,
    resource,
    { baseURL: fakeBaseURL },
    toJSONServerQuery,
  )
}

const idPath = ({ id }: TypeOfID<any, any>) => `${id}`

export const driverAPI = api(Driver, idPath, 'drivers')
export const vehicleAPI = api(Vehicle, idPath, 'vehicles')
export const batteryAPI = api(Battery, idPath, 'batteries')
export const clientAPI = api(Client, idPath, 'clients')
export const userAPI = api(User, idPath, 'users')
export const evAPI = api(Ev, idPath, 'evs')
export const planRouteAPI = api(PlanRoute, idPath, 'routes')
export const employeeAPI = api(Employee, idPath, 'employees')
export const invoiceAPI = api(Invoice, idPath, 'invoices')
export const geoFenceAPI = api(GeoFence, idPath, 'geo_fences')
export const tripAPI = api(Trip, idPath, 'trips')
export const adManagerAPI = api(AdManager, idPath, 'adManagers')
export const assignDriverAPI = api(AssignDriver, idPath, 'assignDriver')
export const assignVehicleAPI = api(AssignVehicle, idPath, 'assignVehicle')
export const assignBatteryAPI = api(AssignBattery, idPath, 'assignBattery')
