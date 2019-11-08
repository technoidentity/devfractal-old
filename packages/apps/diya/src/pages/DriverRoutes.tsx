import React from 'react'
import {
  Get,
  http as httpAPI,
  paths,
  Post,
  Put,
  Route,
  useMatch,
} from 'technoidentity-devfractal'
import { string, type } from 'technoidentity-utils'
import {
  AuthUserInfo,
  driverAPI,
  DriverData,
  driverEditAPI,
  DriverListResponse,
  DriverResponse,
} from '../common'
import { baseURL } from '../config'
import { DriverForm, DriverList1 } from '../views'

const ps = paths(driverAPI.resource)
// const ls = links(driverAPI.resource)

export async function getDriverList(): Promise<
  DriverListResponse['data']['rows']
> {
  const userData = localStorage.getItem('loginData')
  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(userData)
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })
    const drivers = await http.get({ resource: 'drivers' }, DriverListResponse)
    return drivers.data.rows
  }
  throw Error('Invalid login')
}
async function getDriver(id: string): Promise<DriverResponse['data']> {
  const userData = localStorage.getItem('loginData')

  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(userData)
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })
    const drivers = await http.get(
      { resource: 'users', path: id },
      DriverResponse,
    )
    return drivers.data
  }
  throw Error('Invalid login')
}

async function putDriver(data: DriverData): Promise<DriverResponse['data']> {
  const userData = localStorage.getItem('loginData')

  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(userData)
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })
    const drivers = await http.put({ resource: 'users' }, data, DriverResponse)
    return drivers.data
  }
  throw Error('Invalid login')
}

async function postDriver(data: DriverData): Promise<DriverResponse['data']> {
  const userData = localStorage.getItem('loginData')
  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(userData)
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })
    const user = await http.post({ resource: 'users' }, data, DriverResponse)
    return user.data
  }
  throw Error('Invalid login')
}

const DriverListRoute = () => (
  <Get asyncFn={getDriverList} component={DriverList1} />
)

const DriverAdd = () => (
  <Post redirectTo={ps.list} component={DriverForm} onPost={postDriver} />
)

const DriverEdit = () => {
  const { params } = useMatch(type({ [driverEditAPI.idKey]: string }))
  return (
    <Put
      id={params[driverEditAPI.idKey as string] as any}
      doGet={getDriver}
      onPut={(_id, data) => putDriver(data)}
      component={DriverForm}
      redirectTo={ps.list}
    />
  )
}

export const DriverRoutes = () => (
  <>
    <Route path={ps.create} render={() => <DriverAdd />} />
    <Route path={ps.list} render={() => <DriverListRoute />} />
    <Route path={ps.edit} render={() => <DriverEdit />} />
  </>
)
