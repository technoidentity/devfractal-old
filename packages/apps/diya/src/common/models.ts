import {
  enumerate,
  Int,
  number,
  obj,
  req,
  string,
  TypeOf,
} from 'technoidentity-utils'
import { ISODate } from 'technoidentity-utils'

const Shift = enumerate('morning', 'evening')
const Status = enumerate('active', 'inactive')
const Verified = enumerate('yes', 'pending')
const Relation = enumerate('father', 'spouse')

export const Driver = obj(
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

export const Battery = obj(
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

export const Vehicle = obj(
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

export const Client = obj(
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

export const User = obj(
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

export const Ev = obj(
  { id: string },
  { driverName: string, additionalEVsRequired: Int, frequency: Frequency },
)

export type Ev = TypeOf<typeof Ev>

const RouteStatus = enumerate('enroute', 'complete')

export const PlanRoute = obj(
  { id: string },
  {
    customerName: string,
    address: string,
    contactNumber: Int,
    status: RouteStatus,
  },
)

const EmployeeRole = enumerate('clientDispatcher', 'reporter')

export const Employee = obj(
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

export const Invoice = obj(
  { id: string },
  { invoicesNo: Int, valid: ISODate, dueDate: ISODate, amount: Int },
)

export type Invoice = TypeOf<typeof Invoice>

export const GeoFence = obj(
  { id: string },
  {
    areaName: string,
    assignVehicle: string,
    assignClient: string,
    comments: string,
  },
)

export type GeoFence = TypeOf<typeof GeoFence>

export const Trip = obj(
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

export const AdManager = obj(
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

export const AuthUserInfo = req({
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

export type AuthUserInfo = TypeOf<typeof AuthUserInfo>

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
const Lat = enumerate(
  '17.398037',
  '17.395334',
  '17.389764',
  '17.422595',
  '17.450436',
  '17.432585',
  '17.470615',
  '17.496258',
)
const Lng = enumerate(
  '78.493558',
  '78.480775',
  '78.476056',
  '78.447684',
  '78.465251',
  '78.410859',
  '78.428688',
  '78.396739',
)

export const VehicleLocation = obj(
  {
    id: string,
  },
  {
    lat: Lat,
    lng: Lng,
    description: string,
  },
)

export type VehicleLocation = TypeOf<typeof VehicleLocation>
