import { startFakeJSONServer } from 'technoidentity-dev-utils'
import { Int, keyof, props, string } from 'technoidentity-utils'

// tslint:disable typedef

// export const todo = req({ id: number, title: string, done: boolean })

const Status = keyof({ active: true, inActive: true })

const Group = keyof({ Retail: true, Cargo: true })

export const Battery = props(
  {
    name: string,
    id: string,
    group: Group,
    remainingCycles: Int,
    status: Status,
  },
  {
    batteryID: string,
    batteryMake: string,
    batteryModel: string,
    capacity: string,
    batteryCycles: Int,
  },
)

startFakeJSONServer([{ name: 'batteries', spec: Battery, count: 50 }], 9999)
