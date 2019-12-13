import {
  array,
  boolean,
  enumerate,
  Int,
  number,
  obj,
  req,
  string,
  TypeOf,
} from 'technoidentity-utils'
import { ISODate } from 'technoidentity-utils'

const Shift = enumerate('', 'morning', 'evening')
const Status = enumerate('active', 'inactive')
const Verified = enumerate('yes', 'pending')
const Relation = enumerate(
  '',
  'father',
  'mother',
  'brother',
  'sister',
  'wife',
  'husband',
  'other',
  'spouse',
)

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

export const BatteryAdd = obj(
  {},
  {
    batterySerialNum: string,
    make: string,
    model: string,
    capacity: string,
    cycles: number,
    warrantyUpto: ISODate,
    lastCharged: ISODate,
    isActive: boolean,
    status: Status,
    batteryName: string,
  },
)

export type BatteryAdd = TypeOf<typeof BatteryAdd>

export const BatteryData = obj(
  {
    createdAt: ISODate,
    updatedAt: ISODate,
    id: string,
    createdById: string,
    updatedById: string,
  },
  {
    batterySerialNum: string,
    make: string,
    model: string,
    capacity: string,
    cycles: number,
    warrantyUpto: ISODate,
    lastCharged: ISODate,
    isActive: boolean,
    status: Status,
    batteryName: string,
  },
)

const BatteryData1 = obj(
  {
    id: string,
  },
  {
    batterySerialNum: string,
    // vehicleId: string,
    // lastCharged: ISODate,
    make: string,
    model: string,
    status: string,
    cycles: number,
  },
)

export type BatteryData1 = TypeOf<typeof BatteryData1>
export const BatteryResponse = req({
  data: req({
    rows: array(BatteryData1),
    count: number,
  }),
})

export type BatteryData = TypeOf<typeof BatteryData>
export type BatteryResponse = TypeOf<typeof BatteryResponse>
export const BatteryEdit = req({
  data: BatteryData,
})

export type BatteryEdit = TypeOf<typeof BatteryEdit>

export const VehicleData = obj(
  {
    id: string,
    warrantyExpiry: ISODate,
    lastService: ISODate,
    photo: string,
    createdAt: ISODate,
    vehicleName: string,
    updatedAt: ISODate,
    status: string,
    createdById: string,
    updatedById: string,
    isActive: boolean,
    vehicleNameCount: number,
  },
  {
    vehicleSerialNum: string,
    registrationNumber: string,
    makersClass: string,
    vehicleClass: string,
    manufactureYear: ISODate,
    color: string,
    insuranceExpiry: ISODate,
  },
)

export const VehicleAdd = obj(
  { warrantyExpiry: ISODate, lastService: ISODate, photo: string },
  {
    vehicleSerialNum: string,
    registrationNumber: string,
    makersClass: string,
    vehicleClass: string,
    manufactureYear: ISODate,
    color: string,
    insuranceExpiry: ISODate,
  },
)

export type VehicleAdd = TypeOf<typeof VehicleAdd>

export type VehicleData = TypeOf<typeof VehicleData>

export const VehicleResponse = req({
  data: req({
    rows: array(VehicleData),
    count: number,
  }),
})

export type VehicleResponse = TypeOf<typeof VehicleResponse>

export const VehicleEdit = req({
  data: VehicleData,
})

export type VehicleEdit = TypeOf<typeof VehicleEdit>

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
const BillingType = enumerate(
  'contract_per_month',
  'pay_per_delivery',
  'pay_per_kms_and_time',
  'pay_per_use',
  'remarks',
)
export const ClientData = obj(
  { latitude: number, longitude: number, id: string, remarks: string },
  {
    name: string,
    billingType: BillingType,
    contactName: string,
    contactNumber: string,
    contractDoc: string,
    email: string,
    numberOfEvsOrDrivers: number,
    address: string,
  },
)
export type ClientData = TypeOf<typeof ClientData>

export const ClientRequest = ClientData
export type ClientRequest = TypeOf<typeof ClientRequest>

export const ClientListResponse = req({
  data: req({
    rows: array(ClientData),
    count: number,
  }),
})

export type ClientListResponse = TypeOf<typeof ClientListResponse>

export const ClientResponse = req({
  data: ClientData,
})

export type ClientResponse = TypeOf<typeof ClientResponse>

export const Role = enumerate(
  '',
  'dispatcher',
  'associate',
  'reporter',
  'driver',
)

export const BankDetails = req({
  name: string,
  branch: string,
  accountName: string,
  accountNumber: string,
  ifscNumber: string,
})

export const UserRequest = obj(
  {
    aadhaar: string,
    address1: string,
    address2: string,
    avatar: string,
  },
  {
    name: string,
    phone: string,
    license: string,
    email: string,
    verified: boolean,
    emergencyContactPerson: string,
    emergencyContactNumber: string,
    relation: Relation,
    bankDetails: BankDetails,
    role: Role,
  },
)

export type UserRequest = TypeOf<typeof UserRequest>

export const UserData = obj(
  {
    //  id: string,
    aadhaar: string,

    address2: string,
    address1: string,
    avatar: string,
    //  createdById: string,
    //  updatedById: string,
    //  createdAt: string,
    //  updatedAt: string,
    //  isActive: boolean,
    emergencyContactPerson: string,
    emergencyContactNumber: string,
    relation: Relation,
    bankDetails: BankDetails,
    license: string,
  },
  {
    name: string,
    phone: string,
    email: string,
    verified: boolean,
    role: Role,
  },
)
export type UserData = TypeOf<typeof UserData>

export const UserListResponse = req({
  data: req({
    rows: array(UserData),
    count: number,
  }),
})
export const UserEdit = req({
  data: UserData,
})

export type UserEdit = TypeOf<typeof UserEdit>
export type UserListResponse = TypeOf<typeof UserListResponse>

export const UserResponse = req({
  data: UserData,
})

export type UserResponse = TypeOf<typeof UserResponse>

export const TabletData = obj(
  {
    fcm: string,
  },
  {
    androidDeviceId: string,
    vehicleId: string,
  },
)

export const TabletData1 = obj(
  {
    id: string,
  },
  {
    androidDeviceId: string,
    vehicleId: string,
    fcm: string,
  },
)

export type TabletData1 = TypeOf<typeof TabletData1>
export type TabletData = TypeOf<typeof TabletData>

export const TabletListResponse = req({
  data: req({
    rows: array(TabletData1),
    count: number,
  }),
})
export const TabletResponse = req({
  data: TabletData,
})
export type TabletResponse = TypeOf<typeof TabletResponse>
export type TabletListResponse = TypeOf<typeof TabletListResponse>

// export const DriverRequest =  union([ UserRequest, req({shift: Shift})])
export const DriverRequest = UserRequest
export type DriverRequest = TypeOf<typeof DriverRequest>
// export const DriverData = union([UserData, req({shift: Shift})])
export const DriverData = obj(
  {
    //  id: string,
    aadhaar: string,
    address1: string,
    address2: string,
    avatar: string,
    //  createdById: string,
    //  updatedById: string,
    //  createdAt: string,
    //  updatedAt: string,
    //  isActive: boolean,
    emergencyContactPerson: string,
    emergencyContactNumber: string,
    relation: Relation,
    bankDetails: BankDetails,
    license: string,
  },
  {
    name: string,
    phone: string,
    email: string,
    verified: boolean,
    shift: Shift,
  },
)

export const DriverData1 = obj(
  {
    id: string,
  },
  {
    name: string,
    verified: boolean,
    shift: Shift,
  },
)

export type DriverData = TypeOf<typeof DriverData>
export type DriverData1 = TypeOf<typeof DriverData1>
export const DriverListResponse = req({
  data: req({
    rows: array(DriverData1),
    count: number,
  }),
})
export type DriverListResponse = TypeOf<typeof DriverListResponse>
export const DriverResponse = req({
  data: DriverData,
})
export type DriverResponse = TypeOf<typeof DriverResponse>

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
  { tripId: string },
  {
    evId: string,
    date: ISODate,
    candidateName: string,
    companyDispatcher: string,
    startTime: string,
  },
)

export type Trip = TypeOf<typeof Trip>

export const TripData = obj(
  {
    createdAt: string,
    updatedAt: string,
    id: string,
    createdById: string,
    updatedById: string,
    isActive: string,
    cashCollected: number,
    vehicleName: string,
    tripName: string,
  },
  {
    startDate: string,
    startTime: string,
    vehicleId: string,
    tripStatus: string,
  },
)
export const TripListResponse = req({
  data: req({
    rows: array(TripData),
    count: number,
  }),
})
export type TripListResponse = TypeOf<typeof TripListResponse>

export const EVsAssignedData = obj(
  {
    associateId: string,
    createdAt: string,
    updatedAt: string,
    id: string,
    createdById: string,
    updatedById: string,
    isActive: string,
    driverName: string,
    vehicleName: string,
    clientName: string,
  },
  {
    clientId: string,
    driverId: string,
    vehicleId: string,
    start: ISODate,
    end: string,
  },
)
export type EVsAssignedData = TypeOf<typeof EVsAssignedData>

export const EVsTripData = obj(
  {},
  {
    vehicleId: string,
    startDate: ISODate,
    startTime: string,
  },
)

export type EVsTripData = TypeOf<typeof EVsTripData>

export const EVsTripResponse = obj(
  {
    createdById: string,
    updatedById: string,
  },
  {
    startDate: ISODate,
    startTime: string,
    vehicleId: string,
    tripStatus: string,

    isActive: boolean,
    id: string,
  },
)

export const EVsAddTripResponse = req({
  data: EVsTripResponse,
})
export type EVsAddTripResponse = TypeOf<typeof EVsAddTripResponse>

export const EVsAssignedResponse = req({
  data: req({
    rows: array(EVsAssignedData),
    count: number,
  }),
})
export type EVsAssignedResponse = TypeOf<typeof EVsAssignedResponse>

export const DriverDataReport = obj(
  {
    id: string,
  },
  {
    evId: string,
    driverName: string,
    clientName: string,
    assignedDate: ISODate,
  },
)

export type DriverDataReport = TypeOf<typeof DriverDataReport>

export const DriverTripReportData = obj(
  {
    id: string,
  },
  {
    noOfCustomers: number,
    start: ISODate,
    end: ISODate,
    successfulDeliveries: number,
    cashCollected: number,
  },
)

export type DriverTripReportData = TypeOf<typeof DriverTripReportData>

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
      name: string,
      email: string,
      phone: string,
      role,
    }),
  }),
})

export type AuthUserInfo = TypeOf<typeof AuthUserInfo>

const VehicleNumbers = enumerate('first', 'second')

export const AssignForm = obj(
  {},
  {
    driverId: string,
    clientId: string,
    vehicleId: string,
    start: ISODate,
    end: ISODate,
  },
)

export type AssignForm = TypeOf<typeof AssignForm>
export const AssignFormResponse = req({
  data: AssignForm,
})
export type AssignFormResponse = TypeOf<typeof AssignFormResponse>

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

const Clients = enumerate('Amazon', 'Flipkart', 'Myntra')

export const VehicleLocation = obj(
  {
    id: string,
  },
  {
    lat: Lat,
    lng: Lng,
    client: Clients,
    description: string,
  },
)

export type VehicleLocation = TypeOf<typeof VehicleLocation>
