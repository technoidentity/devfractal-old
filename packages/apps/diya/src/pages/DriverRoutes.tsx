import React from 'react'
import {
  Create,
  Get,
  http as httpAPI,
  links,
  paths,
  Put,
  Route,
  useMatch,
} from 'technoidentity-devfractal'
import { string, type } from 'technoidentity-utils'
import {
  AuthUserInfo,
  driverAdd,
  driverAPI,
  DriverData,
  DriverEdit as DE,
  driverEditAPI,
  DriverResponse,
} from '../common'
import { baseURL } from '../config'
import { DriverForm, DriverList1 } from '../views'

const ps = paths(driverAPI.resource)
const ls = links(driverAPI.resource)

async function getDriverList(): Promise<DriverResponse['data']['rows']> {
  const userData = localStorage.getItem('loginData')
  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(userData)
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })
    const drivers = await http.get({ resource: 'drivers' }, DriverResponse)
    return drivers.data.rows
  }
  throw Error('Invalid login')
}
async function getDriver(id: string): Promise<DE['data']> {
  const userData = localStorage.getItem('loginData')

  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(userData)
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })
    const drivers = await http.get({ resource: 'drivers', path: id }, DE)
    return drivers.data
  }
  throw Error('Invalid login')
}

async function putDriver(data: DriverData): Promise<DE['data']> {
  const userData = localStorage.getItem('loginData')

  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(userData)
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })
    const drivers = await http.put({ resource: 'drivers' }, data, DE)
    return drivers.data
  }
  throw Error('Invalid login')
}

const DriverListRoute = () => (
  <Get asyncFn={getDriverList} component={DriverList1} />
)

const DriverAdd = () => (
  <Create
    path={ps.create}
    api={driverAdd}
    form={DriverForm}
    redirectTo={ls.list}
  />
)

const DriverEdit = () => {
  const { params } = useMatch(type({ [driverEditAPI.idKey]: string }))
  return (
    <Put
      id={params[driverEditAPI.idKey as string] as any}
      doGet={getDriver}
      onPut={(_id, data) => putDriver(data)}
      component={DriverForm}
      redirectTo="/drivers"
    />
  )
}

export const DriverRoutes = () => (
  <>
    <DriverAdd />
    <Route path="/drivers" render={() => <DriverListRoute />} />
    <Route path={ps.edit} render={() => <DriverEdit />} />
  </>
)
