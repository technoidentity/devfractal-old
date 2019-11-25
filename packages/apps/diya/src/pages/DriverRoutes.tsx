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
import { useAuth } from '../auth/AuthContext'
import {
  AssignForm,
  AssignFormResponse,
  cargosUrl,
  driverAPI,
  DriverData,
  driverEditAPI,
  DriverListResponse,
  DriverResponse,
  sessionExpire,
} from '../common'
import { toastMessage } from '../components/Message'
import { AssignDriverForm, DriverForm, DriverList1 } from '../views'

const ps = paths(driverAPI.resource)

export async function getDriverList({
  setUser,
  logout,
}: any): Promise<DriverListResponse['data']['rows']> {
  try {
    const drivers = await cargosUrl().get(
      { resource: 'drivers' },
      DriverListResponse,
    )
    return drivers.data.rows
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    throw Error(error)
  }
}
export async function getDriver(
  id: string,
  { setUser, logout }: any,
): Promise<DriverResponse['data']> {
  try {
    const drivers = await cargosUrl().get(
      { resource: 'users', path: id },
      DriverResponse,
    )
    return drivers.data
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    throw Error(error)
  }
}

async function putDriver(
  data: DriverData,
  { setUser, logout }: any,
): Promise<DriverResponse['data']> {
  try {
    const drivers = await cargosUrl().put(
      { resource: 'users' },
      data,
      DriverResponse,
    )
    toastMessage('Driver Updated')
    return drivers.data
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    toastMessage('fail')
    throw Error(error)
  }
}

async function postDriver(
  data: DriverData,
  { setUser, logout }: any,
): Promise<DriverResponse['data']> {
  try {
    const user = await cargosUrl().post(
      { resource: 'users' },
      data,
      DriverResponse,
    )
    toastMessage('Driver Added')
    return user.data
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    toastMessage('fail')
    throw Error(error)
  }
}

export async function postAssignForm(
  data: AssignForm,
  { setUser, logout }: any,
): Promise<AssignFormResponse['data']> {
  try {
    const assign = await cargosUrl().post(
      { resource: 'vehicles/assign/clients' },
      data,
      AssignFormResponse,
    )
    toastMessage('assigned')
    return assign.data
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    toastMessage('fail')
    throw Error(error)
  }
}

const DriverListRoute = ({ setUser, logout }: any) => (
  <Get
    asyncFn={() => getDriverList({ setUser, logout })}
    component={DriverList1}
  />
)

const DriverAdd = ({ setUser, logout }: any) => (
  <Post
    redirectTo={ps.list}
    component={DriverForm}
    onPost={data => postDriver(data, { setUser, logout })}
  />
)

const DriverEdit = ({ setUser, logout }: any) => {
  const { params } = useMatch(type({ [driverEditAPI.idKey]: string }))
  return (
    <Put
      id={params[driverEditAPI.idKey as string] as any}
      doGet={id => getDriver(id as string, { setUser, logout })}
      onPut={(_id, data) => putDriver(data, { setUser, logout })}
      component={DriverForm}
      redirectTo={ps.list}
    />
  )
}

const DriverAssignRoute = ({ setUser, logout }: any) => {
  return (
    <Post
      redirectTo={ps.list}
      component={AssignDriverForm}
      onPost={data => postAssignForm(data, { setUser, logout })}
    />
  )
}

export const DriverRoutes = () => {
  const { logout, setUser } = useAuth()
  return (
    <>
      <Route
        path={ps.create}
        render={() => <DriverAdd setUser={setUser} logout={logout}  />}
      />
      <Route
        path={ps.list}
        render={() => <DriverListRoute setUser={setUser} logout={logout}  />}
      />
      <Route
        path={ps.edit}
        render={() => <DriverEdit setUser={setUser} logout={logout}  />}
      />
      <Route
        path="/drivers/assignDriver/:id"
        render={() => <DriverAssignRoute setUser={setUser} logout={logout}  />}
      />
    </>
  )
}
