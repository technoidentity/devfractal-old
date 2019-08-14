import { Int, keyof, string, TypeOf } from 'io-ts'
import { number } from 'prop-types'
import { ISODate, props, req } from 'technoidentity-utils'

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

export const Driver = props(
  {
    lastActive: ISODate,
    driverID: string,
    status: Status,
  },
  {
    name: string,
    phone: string,
    driverLicence: string,
    shift: Shift,
    adharNumber: string,
    accountName: string,
    accountNumber: string,
    confirmAccountNumber: string,
    bankName: string,
    bankBranch: string,
    branchIFSCNumber: string,
  },
)

export type Driver = TypeOf<typeof Driver>

const Group = keyof({
  Retail: true,
  Cargo: true,
})

type Group = TypeOf<typeof Group>

export const Battery = props(
  {
    name: string,
    batteryID: string,
    group: Group,
    remainingCycles: Int,
    status: Status,
  },
  {
    batteryMake: string,
    batteryModel: string,
    capacity: string,
    batteryCycles: Int,
    lastCharged: ISODate,
  },
)

export type Battery = TypeOf<typeof Battery>

export const Vehicle = props(
  {
    name: string,
    numberPlate: string,
    group: Group,
    nextService: ISODate,
    insuranceDue: ISODate,
    vehicleStatus: Status,
    vehicleID: string,
  },
  {
    makersClass: string,
    vehicleClass: string,
    yearOfManufacturing: Int,
    color: string,
    regnNumber: string,
    warranty: Int,
    lastServicedDate: ISODate,
    insuranceExpiryDate: ISODate,
  },
)

export type Vehicle = TypeOf<typeof Vehicle>

export const Params = req({ id: string })

const ContractType = keyof({
  Weekly: true,
  Monthly: true,
})

export const Client = props(
  { clientID: string },
  {
    clientName: string,
    contractType: ContractType,
    email: string,
    numberOfEVS: Int,
    rateOfEVS: Int,
    assignedEVSHistory: Int,
  },
)

export type Client = TypeOf<typeof Client>

export const Role = keyof({
  Admin: true,
  Reporter: true,
  Dispatcher: true,
})

export const User = props(
  { dateOfJoining: ISODate, userID: string },
  { userName: string, role: Role },
)

export type User = TypeOf<typeof User>

const Frequency = keyof({
  once: true,
  weekly: true,
  monthly: true,
  yearly: true,
})

export const Evs = props(
  { evID: string },
  { driverName: string, additionalEVsRequired: Int, frequency: Frequency },
)

export type Evs = TypeOf<typeof Evs>

const RouteStatus = keyof({ Enroute: true, complete: true })

export const PlanRoute = props(
  { ID: string },
  {
    customerName: string,
    address: string,
    contactNumber: Int,
    status: RouteStatus,
  },
)

const EmployeeRole = keyof({
  ClientDispatcher: true,
  Reporter: true,
})

export const Employee = props(
  {
    employeeID: string,
  },
  {
    name: string,
    phone: Int,
    adharNumber: string,
    role: EmployeeRole,
    accountName: string,
    accountNumber: Int,
    confirmAccountNumber: Int,
    bankName: string,
    branchIFSCNumber: string,
  },
)

export type Employee = TypeOf<typeof Employee>

export const Invoice = props(
  { ID: string },
  { invoicesNo: Int, valid: ISODate, dueDate: ISODate, amount: Int },
)

export type Invoice = TypeOf<typeof Invoice>

export const GeoFence = props(
  {
    ID: string,
  },
  {
    areaName: string,
    assignVehicle: string,
    assignClient: string,
    comments: string,
  },
)

export type GeoFence = TypeOf<typeof GeoFence>

export const ViewTrips = props(
  { ID: string },
  {
    customerName: string,
    address: string,
    contactNumber: Int,
    status: RouteStatus,
  },
)

export type ViewTrips = TypeOf<typeof ViewTrips>
