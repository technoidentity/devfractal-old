import { startFakeJSONServer } from 'srtp-dev-utils'
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
    { spec: Driver, count: 100 },
    { spec: Vehicle, count: 100 },
    { spec: Battery, count: 100 },
    { spec: Client, count: 100 },
    { spec: User, count: 100 },
    { spec: Ev, count: 100 },
    { spec: PlanRoute, count: 100 },
    { spec: Employee, count: 100 },
    { spec: Invoice, count: 100 },
    { spec: GeoFence, count: 100 },
    { spec: Trip, count: 100 },
    { spec: VehicleLocation, count: 50 },
  ],
  9999,
)
