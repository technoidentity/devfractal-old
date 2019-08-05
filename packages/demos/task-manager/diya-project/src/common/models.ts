import { Int, keyof, number, string, TypeOf } from 'io-ts'
import { date } from 'io-ts-types/lib/date'
import { opt, req } from 'technoidentity-utils'

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

// @TODO: Remove re-enter account number

// @TODO: use props instead of opt

export const Driver = opt({
  name: string,
  lastActive: date,
  shift: Shift,
  status: Status,
  driverId: string,
  phone: string,
  driverLicence: string,
  adharNumber: string,
  accountName: string,
  accountNumber: number,
  reEnterAccountNumber: number,
  bankName: string,
  bankBranch: string,
  branchIfscNumber: string,
})

export type Driver = TypeOf<typeof Driver>

const Group = keyof({
  Retail: true,
  Cargo: true,
})

type Group = TypeOf<typeof Group>

export const Battery = opt({
  name: string,
  id: string,
  group: Group,
  remainingCycles: Int,
  lastCharged: date,
  status: Status,
  batteryId: string,
  batteryMake: string,
  batteryModel: string,
  capacity: string,
  batteryCycles: number,
})

export type Battery = TypeOf<typeof Battery>

export const Vehicle = opt({
  name: string,
  numberPlate: string,
  group: Group,
  nextService: date,
  insuranceDue: date,
  vehicleStatus: Status,
  vehicleId: string,
  makersClass: string,
  vehicleClass: string,
  yearOfManufacturing: number,
  color: string,
  regnNumber: string,
  warranty: number,
  lastServicedDate: date,
  insuranceExpiryDate: date,
})

export type Vehicle = TypeOf<typeof Vehicle>

export const Params = req({ id: string })
