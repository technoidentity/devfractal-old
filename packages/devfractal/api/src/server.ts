import { startFakeJSONServer } from 'technoidentity-dev-utils'
import { Battery } from './db'

// tslint:disable typedef

startFakeJSONServer({ batteries: Battery }, 9999, 50)
