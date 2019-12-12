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
  cargosUrl,
  sessionExpire,
  VehicleAdd as VA,
  vehicleAPI,
  VehicleData,
  VehicleEdit as VE,
  vehicleEditAPI,
  VehicleResponse,
} from '../common'
import { toastMessage } from '../components/Message'
import { VehicleForm, VehicleList1 } from '../views'
import { AssignVehicleForm } from '../views/AssignVehicle'
import { postAssignForm } from './DriverRoutes'
const ps = paths(vehicleAPI.resource)

export async function getVehicleList({
  setUser,
  logout,
  setHeaderText,
}: any): Promise<VehicleResponse['data']['rows']> {
  try {
    const vehicles = await cargosUrl().get(
      { resource: 'vehicles' },
      VehicleResponse,
    )
    setHeaderText('Vehicles')
    return vehicles.data.rows
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    setHeaderText(undefined)
    throw Error(error)
  }
}

export async function getVehicle(
  id: string,
  { setUser, logout }: any,
): Promise<VE['data']> {
  try {
    const vehicles = await cargosUrl().get(
      { resource: 'vehicles', path: id },
      VE,
    )
    return vehicles.data
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    throw Error(error)
  }
}

async function putVehicle(
  data: VehicleData,
  { setUser, logout }: any,
): Promise<VE['data']> {
  const { vehicleName, ...rest } = data

  try {
    const vehicles = await cargosUrl().put({ resource: 'vehicles' }, rest, VE)
    toastMessage('success', 'Vehicle Updated')
    return vehicles.data
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    toastMessage('fail', error.response.data.errors)
    throw Error(error)
  }
}

async function postVehicle(
  data: VA,
  { setUser, logout }: any,
): Promise<VE['data']> {
  try {
    const vehicles = await cargosUrl().post({ resource: 'vehicles' }, data, VE)
    toastMessage('success', 'Vehicle Added')
    return vehicles.data
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    toastMessage('fail', error.response.data.errors)
    throw Error(error)
  }
}

export const deleteList = async (
  url: string,
  msg: string,
  { setUser, logout }: any,
) => {
  try {
    await cargosUrl().del(url)
    toastMessage('success', msg)
    return
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    toastMessage('fail', error.response.data.errors)
    throw Error(error)
  }
}

const VehicleListRoute = ({ push, setUser, logout, setHeaderText }: any) => {
  return (
    <Get
      asyncFn={() => getVehicleList({ push, setUser, logout, setHeaderText })}
      component={VehicleList1}
    />
  )
}

const VehicleAdd = ({ push, setUser, logout }: any) => (
  <Post
    redirectTo={ps.list}
    component={VehicleForm}
    onPost={data => postVehicle(data, { push, setUser, logout })}
  />
)
const VehicleEdit = ({ push, setUser, logout }: any) => {
  const { params } = useMatch(type({ [vehicleEditAPI.idKey]: string }))
  return (
    <Put
      id={params[vehicleEditAPI.idKey as string] as any}
      doGet={id => getVehicle(id as string, { push, setUser, logout })}
      onPut={(_id, data) => putVehicle(data, { push, setUser, logout })}
      component={VehicleForm}
      redirectTo={ps.list}
    />
  )
}

const VehicleAssignRoute = ({ setUser, logout }: any) => {
  return (
    <Post
      redirectTo={ps.list}
      component={AssignVehicleForm}
      onPost={data => postAssignForm(data, { setUser, logout })}
    />
  )
}

export const VehicleRoutes = () => {
  const { logout, setUser, setHeaderText } = useAuth()
  return (
    <>
      <Route
        path={ps.create}
        render={() => <VehicleAdd setUser={setUser} logout={logout} />}
      />
      <Route
        path={ps.list}
        render={() => (
          <VehicleListRoute
            setUser={setUser}
            logout={logout}
            setHeaderText={setHeaderText}
          />
        )}
      />
      <Route
        path={ps.edit}
        render={() => <VehicleEdit setUser={setUser} logout={logout} />}
      />
      <Route
        path="/vehicles/assignVehicle/:id"
        render={() => <VehicleAssignRoute setUser={setUser} logout={logout} />}
      />
    </>
  )
}
