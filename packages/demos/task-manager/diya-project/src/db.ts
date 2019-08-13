import { startFakeJSONServer } from 'technoidentity-dev-utils'
import {
  Battery,
  Client,
  Driver,
  Employee,
  Evs,
  Geofence,
  Invoice,
  PlanRoute,
  User,
  Vehicle,
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
  geofence: Geofence,
}

startFakeJSONServer(faker, 9999, 10)
