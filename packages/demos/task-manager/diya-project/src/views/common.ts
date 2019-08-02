import { Int, keyof, string, TypeOf } from 'io-ts'
import { date } from 'io-ts-types/lib/date'
import { req } from 'technoidentity-utils'

const Shift = keyof({
  morning: true,
  evening: true,
})

const Status = keyof({
  active: true,
  inActive: true,
})

type Shift = TypeOf<typeof Shift>

type Status = TypeOf<typeof Status>

export const Driver = req({
  name: string,
  lastActive: date,
  shift: Shift,
  status: Status,
})

const Group = keyof({
  Retail: true,
  Cargo: true,
})

type Group = TypeOf<typeof Group>

export const Battery = req({
  name: string,
  id: string,
  group: Group,
  remainingCycles: Int,
  lastCharged: date,
  status: Status,
})

export const Vehicle = req({
  name: string,
  numberPlate: string,
  group: Group,
  nextService: date,
  insuranceDue: date,
  vehicleStatus: Status,
})
