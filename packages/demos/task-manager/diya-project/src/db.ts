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
} from './common'

const faker = {
  drivers: Driver,
  vehicles: Vehicle,
  batteries: Battery,
  clients: Client,
  users: User,
  evs: Ev,
  routes: PlanRoute,
  employees: Employee,
  invoices: Invoice,
  geo_fences: GeoFence,
  trips: Trip,
}

startFakeJSONServer(faker, 9999, 10)
