import {
  enumerate,
  Int,
  number,
  props,
  req,
  string,
  TypeOf,
} from 'technoidentity-utils'
import { ISODate } from 'technoidentity-utils'

const Shift = enumerate('morning', 'evening')
const Status = enumerate('active', 'inactive')
const Verified = enumerate('yes', 'pending')
const Relation = enumerate('father', 'spouse')

export const Driver = props(
  {
    id: string,
    lastActive: ISODate,
    status: Status,
  },
  {
    name: string,
    phone: string,
    driverLicence: string,
    shift: Shift,
    address1: string,
    address2: string,
    adharNumber: string,
    accountName: string,
    accountNumber: string,
    confirmAccountNumber: string,
    bankName: string,
    bankBranch: string,
    branchIFSCNumber: string,
    verified: Verified,
    emergencyContactPerson: string,
    emergencyContactNumber: string,
    relation: Relation,
  },
)

export type Driver = TypeOf<typeof Driver>

const Group = enumerate('retail', 'cargo')

export const Battery = props(
  {
    id: string,
    name: string,
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
    id: string,
    name: string,
    numberPlate: string,
    group: Group,
    nextService: ISODate,
    insuranceDue: ISODate,
    status: Status,
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

const ContractType = enumerate('weekly', 'monthly')

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

export const Role = enumerate('admin', 'reporter', 'dispatcher')

export const User = props(
  { dateOfJoining: ISODate, id: string, email: string },
  {
    userName: string,
    role: Role,
    phone: string,
    licenceNo: string,
    adharNumber: string,
    address1: string,
    address2: string,
    accountName: string,
    accountNumber: string,
    confirmAccountNumber: string,
    bankName: string,
    bankBranch: string,
    branchIFSCNumber: string,
    verified: Verified,
    emergencyContactPerson: string,
    emergencyContactNumber: string,
    relation: Relation,
  },
)

export type User = TypeOf<typeof User>

const Frequency = enumerate('once', 'weekly', 'monthly', 'yearly')

export const Ev = props(
  { id: string },
  { driverName: string, additionalEVsRequired: Int, frequency: Frequency },
)

export type Ev = TypeOf<typeof Ev>

const RouteStatus = enumerate('enroute', 'complete')

export const PlanRoute = props(
  { id: string },
  {
    customerName: string,
    address: string,
    contactNumber: Int,
    status: RouteStatus,
  },
)

const EmployeeRole = enumerate('clientDispatcher', 'reporter')

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

export const SelectVehicles = enumerate('vehicle1', 'vehicle2', 'vehicle3')

export const AdManager = props(
  {
    id: number,
  },
  {
    uploadImage: string,
    client: string,
    vehicle: SelectVehicles,
    startDate: ISODate,
    endDate: ISODate,
  },
)

export type AdManager = TypeOf<typeof AdManager>

const role = enumerate(
  'driver',
  'customer',
  'client_admin',
  'super_admin',
  'dispatcher',
  'reporter',
  'client_dispatcher',
  'client_reporter',
)

export const LoginResponse = req({
  data: req({
    token: string,
    user: req({
      firstName: string,
      lastName: string,
      email: string,
      phone: string,
      role,
    }),
  }),
})

export type LoginResponse = TypeOf<typeof LoginResponse>

const VehicleNumbers = enumerate('first', 'second')

export const AssignDriver = req({
  id: string,
  vehicleNumber: VehicleNumbers,
  batteryID: string,
  client: string,
})

export type AssignDriver = TypeOf<typeof AssignDriver>

export const AssignVehicle = req({
  id: string,
  client: string,
  batteryID: string,
  driver: string,
  startDate: ISODate,
  endDate: ISODate,
  contractType: ContractType,
})

export type AssignVehicle = TypeOf<typeof AssignVehicle>

export const AssignBattery = req({
  id: string,
  client: string,
  vehicleID: string,
  driver: string,
})

export type AssignBattery = TypeOf<typeof AssignBattery>

// export const VehicleInfo = req({
//   id: string,
//   customerName: string,
//   address: string,
//   contactNumber: Int,
//   status: RouteStatus,
// })

// export type VehicleInfo = TypeOf<typeof VehicleInfo>