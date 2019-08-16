import { Int, keyof, string, TypeOf } from 'io-ts'
import { ISODate, props, req } from 'technoidentity-utils'

const Shift = keyof({ morning: true, evening: true })

const Status = keyof({ active: true, inactive: true })

type Shift = TypeOf<typeof Shift>

type Status = TypeOf<typeof Status>

// @TODO: Remove re-enter account number

// @TODO: use props instead of opt

export const Driver = props(
  {
    lastActive: ISODate,
    id: string,
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

const Group = keyof({ retail: true, cargo: true })

type Group = TypeOf<typeof Group>

export const Battery = props(
  {
    name: string,
    id: string,
    group: Group,
    remainingCycles: Int,
    status: Status,
  },
  {
    make: string,
    model: string,
    capacity: string,
    cycles: Int,
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
    status: Status,
    id: string,
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

const ContractType = keyof({ weekly: true, monthly: true })

export const Client = props(
  { id: string },
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

export const Role = keyof({ admin: true, reporter: true, dispatcher: true })

export const User = props(
  { dateOfJoining: ISODate, id: string },
  { userName: string, role: Role },
)

export type User = TypeOf<typeof User>

const Frequency = keyof({
  once: true,
  weekly: true,
  monthly: true,
  yearly: true,
})

export const Ev = props(
  { id: string },
  { driverName: string, additionalEVsRequired: Int, frequency: Frequency },
)

export type Ev = TypeOf<typeof Ev>

const RouteStatus = keyof({ enroute: true, complete: true })

export const PlanRoute = props(
  { id: string },
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
  { id: string },
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
  { id: string },
  { invoicesNo: Int, valid: ISODate, dueDate: ISODate, amount: Int },
)

export type Invoice = TypeOf<typeof Invoice>

export const GeoFence = props(
  { id: string },
  {
    areaName: string,
    assignVehicle: string,
    assignClient: string,
    comments: string,
  },
)

export type GeoFence = TypeOf<typeof GeoFence>

export const Trip = props(
  { id: string },
  {
    customerName: string,
    address: string,
    contactNumber: Int,
    status: RouteStatus,
  },
)

export type Trip = TypeOf<typeof Trip>

export const resources = keyof({
  batteries: 0,
  clients: 1,
  drivers: 2,
  employees: 3,
  evs: 4,
  geoFences: 5,
  invoices: 6,
  plans: 7,
  trips: 8,
  users: 9,
  vehicles: 10,
})
