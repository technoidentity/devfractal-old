import { startFakeJSONServer } from 'technoidentity-dev-utils'
import { Battery, Driver, Vehicle } from './common/models'

const faker = {
  drivers: Driver,
  batteries: Battery,
  vehicles: Vehicle,
}

startFakeJSONServer(faker, 9999, 2)
