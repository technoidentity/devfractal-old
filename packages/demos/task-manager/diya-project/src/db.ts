import { startFakeJSONServer } from 'technoidentity-dev-utils'
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
} from './common'

const faker = {
  drivers: Driver,
  vehicles: Vehicle,
  batteries: Battery,
  clients: Client,
  users: User,
  evs: Evs,
  planRoute: PlanRoute,
  employees: Employee,
  invoices: Invoice,
  geofence: GeoFence,
  viewTrips: ViewTrips,
}

startFakeJSONServer(faker, 9999, 10)
