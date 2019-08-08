import { startFakeJSONServer } from 'technoidentity-dev-utils'
import { Battery, Client, Driver, Vehicle } from './common'

const faker = {
  drivers: Driver,
  vehicles: Vehicle,
  batteries: Battery,
  clients: Client,
}

startFakeJSONServer(faker, 9999, 10)
