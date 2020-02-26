import { boolean, number, req, string, TypeOf } from 'technoidentity-utils'

// tslint:disable typedef

export const User = req({
  userName: string,
  department: string,
  country: string,
  language: string,
  phoneNumber: number,
  areaCode: number,
  ISOCode: number,
  email: string,
  title: string,
  currency: number,
  contactNumber: number,
  FAXNumber: number,
  allPrivileges: boolean,
})

export type User = TypeOf<typeof User>

export const UserGroup = req({
  groupName: string,
  groupOwner: string,
})

export type UserGroup = TypeOf<typeof UserGroup>
