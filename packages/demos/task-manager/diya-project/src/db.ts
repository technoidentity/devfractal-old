import { startFakeJSONServer } from 'technoidentity-dev-utils'
import { Battery, Driver, Vehicle } from './common'

const faker = {
  drivers: Driver,
  batteries: Battery,
  vehicles: Vehicle,
}

startFakeJSONServer(faker, 9999, 10)
