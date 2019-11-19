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
  VehicleAdd as VA,
  vehicleAPI,
  VehicleData,
  VehicleEdit as VE,
  vehicleEditAPI,
  VehicleResponse,
} from '../common'
import { toastMessage } from '../components/Message'
import { VehicleForm, VehicleList1 } from '../views'
const ps = paths(vehicleAPI.resource)
export async function getVehicleList(): Promise<
  VehicleResponse['data']['rows']
> {
  try {
    const vehicles = await cargosUrl().get(
      { resource: 'vehicles' },
      VehicleResponse,
    )
    return vehicles.data.rows
  } catch (error) {
    throw Error(error)
  }
}

async function getVehicle(id: string): Promise<VE['data']> {
  try {
    const vehicles = await cargosUrl().get(
      { resource: 'vehicles', path: id },
      VE,
    )
    return vehicles.data
  } catch (error) {
    throw Error(error)
  }
}

async function putVehicle(data: VehicleData): Promise<VE['data']> {
  const { vehicleName, ...rest } = data

  try {
    const vehicles = await cargosUrl().put({ resource: 'vehicles' }, rest, VE)
    return vehicles.data
  } catch (error) {
    throw Error(error)
  }
}

async function postVehicle(data: VA): Promise<VE['data']> {
  try {
    const vehicles = await cargosUrl().post({ resource: 'vehicles' }, data, VE)
    return vehicles.data
  } catch (error) {
    throw Error(error)
  }
}

export const deleteList = async (url: string, msg: string) => {
  try {
    await cargosUrl().del(url)
    toastMessage(msg)
    return
  } catch (error) {
    toastMessage('fail')
    throw Error(error)
  }
}

const VehicleListRoute = () => (
  <Get asyncFn={getVehicleList} component={VehicleList1} />
)

const VehicleAdd = () => (
  <Post redirectTo={ps.list} component={VehicleForm} onPost={postVehicle} />
)
const VehicleEdit = () => {
  const { params } = useMatch(type({ [vehicleEditAPI.idKey]: string }))
  return (
    <Put
      id={params[vehicleEditAPI.idKey as string] as any}
      doGet={getVehicle}
      onPut={(_id, data) => putVehicle(data)}
      component={VehicleForm}
      redirectTo={ps.list}
    />
  )
}

export const VehicleRoutes = () => (
  <>
    <Route path={ps.create} render={() => <VehicleAdd />} />
    <Route path={ps.list} render={() => <VehicleListRoute />} />
    <Route path={ps.edit} render={() => <VehicleEdit />} />
  </>
)
