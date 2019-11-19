import React from 'react'
import {
  Get,
  paths,
  Post,
  Put,
  Route,
  useMatch,
} from 'technoidentity-devfractal'
import { string, type } from 'technoidentity-utils'
import {
  cargosUrl,
  driverAPI,
  DriverAssign,
  DriverAssignResponse,
  DriverData,
  driverEditAPI,
  DriverListResponse,
  DriverResponse,
} from '../common'
import { AssignDriverForm, DriverForm, DriverList1 } from '../views'

const ps = paths(driverAPI.resource)

export async function getDriverList(): Promise<
  DriverListResponse['data']['rows']
> {
  try {
    const drivers = await cargosUrl().get(
      { resource: 'drivers' },
      DriverListResponse,
    )
    return drivers.data.rows
  } catch (error) {
    throw Error(error)
  }
}
export async function getDriver(id: string): Promise<DriverResponse['data']> {
  try {
    const drivers = await cargosUrl().get(
      { resource: 'users', path: id },
      DriverResponse,
    )
    return drivers.data
  } catch (error) {
    throw Error(error)
  }
}

async function putDriver(data: DriverData): Promise<DriverResponse['data']> {
  try {
    const drivers = await cargosUrl().put(
      { resource: 'users' },
      data,
      DriverResponse,
    )
    return drivers.data
  } catch (error) {
    throw Error(error)
  }
}

async function postDriver(data: DriverData): Promise<DriverResponse['data']> {
  try {
    const user = await cargosUrl().post(
      { resource: 'users' },
      data,
      DriverResponse,
    )
    return user.data
  } catch (error) {
    throw Error(error)
  }
}

async function postDriverAssign(
  data: DriverAssign,
): Promise<DriverAssignResponse['data']> {
  try {
    const assignDriver = await cargosUrl().post(
      { resource: 'vehicles/assign/clients' },
      data,
      DriverAssignResponse,
    )
    return assignDriver.data
  } catch (error) {
    throw Error(error)
  }
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

const DriverAssignRoute = () => {
  return (
    <Post
      redirectTo={ps.list}
      component={AssignDriverForm}
      onPost={postDriverAssign}
    />
  )
}

export const DriverRoutes = () => (
  <>
    <Route path={ps.create} render={() => <DriverAdd />} />
    <Route path={ps.list} render={() => <DriverListRoute />} />
    <Route path={ps.edit} render={() => <DriverEdit />} />
    <Route
      path="/drivers/assignDriver/:id"
      render={() => <DriverAssignRoute />}
    />
  </>
)
