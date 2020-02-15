import { startFakeJSONServer } from 'technoidentity-dev-utils'
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
  VehicleLocation,
} from './common/models'

startFakeJSONServer(
  [
    { name: 'drivers', spec: Driver, count: 100 },
    { name: 'vehicles', spec: Vehicle, count: 100 },
    { name: 'batteries', spec: Battery, count: 100 },
    { name: 'clients', spec: Client, count: 100 },
    { name: 'users', spec: User, count: 100 },
    { name: 'evs', spec: Ev, count: 100 },
    { name: 'routes', spec: PlanRoute, count: 100 },
    { name: 'employees', spec: Employee, count: 100 },
    { name: 'invoices', spec: Invoice, count: 100 },
    { name: 'geo_fences', spec: GeoFence, count: 100 },
    { name: 'trips', spec: Trip, count: 100 },
    { name: 'vehicles_location', spec: VehicleLocation, count: 50 },
  ],
  9999,
)
