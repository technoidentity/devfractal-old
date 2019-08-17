import { startFakeJSONServer } from 'technoidentity-dev-utils'
import { Battery } from './db'

// tslint:disable typedef

startFakeJSONServer([{ name: 'batteries', spec: Battery, count: 50 }], 9999)
