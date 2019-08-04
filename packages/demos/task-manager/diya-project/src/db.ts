import { startFakeJSONServer } from 'technoidentity-dev-utils'
import { Battery, Driver, Vehicle } from './common/common'

const faker = {
  drivers: Driver,
  batteries: Battery,
  vehicles: Vehicle,
}

startFakeJSONServer(faker)
