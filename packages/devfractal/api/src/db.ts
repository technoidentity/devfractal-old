import * as t from 'technoidentity-spec'
import { props } from 'technoidentity-utils'
// tslint:disable typedef

// export const todo = req({ id: t.number, title: t.string, done: t.boolean })

const Status = t.keyof({ active: true, inActive: true })

const Group = t.keyof({ Retail: true, Cargo: true })

export const Battery = props(
  {
    name: t.string,
    id: t.string,
    group: Group,
    remainingCycles: t.Int,
    status: Status,
  },
  {
    batteryID: t.string,
    batteryMake: t.string,
    batteryModel: t.string,
    capacity: t.string,
    batteryCycles: t.Int,
  },
)
