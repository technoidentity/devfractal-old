import { startFakeJSONServer } from 'technoidentity-dev-utils'
import { Battery, Client, Driver, User, Vehicle } from './common'

const faker = {
  drivers: Driver,
  vehicles: Vehicle,
  batteries: Battery,
  clients: Client,
  users: User,
}

startFakeJSONServer(faker, 9999, 10)
