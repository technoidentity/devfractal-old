import { History } from 'history'
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
  VehicleAdd as VA,
  vehicleAPI,
  VehicleData,
  VehicleEdit as VE,
  vehicleEditAPI,
  VehicleResponse,
} from '../common'
import { baseURL } from '../config'
import { VehicleForm, VehicleList1 } from '../views'
const ps = paths(vehicleAPI.resource)

async function getVehicleList(): Promise<VehicleResponse['data']['rows']> {
  const userData = localStorage.getItem('loginData')
  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(userData)
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })
    const vehicles = await http.get({ resource: 'vehicles' }, VehicleResponse)
    return vehicles.data.rows
  }
  throw Error('Invalid login')
}

async function getVehicle(id: string): Promise<VE['data']> {
  const userData = localStorage.getItem('loginData')

  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(userData)
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })
    const vehicles = await http.get({ resource: 'vehicles', path: id }, VE)
    return vehicles.data
  }
  throw Error('Invalid login')
}

async function putVehicle(data: VehicleData): Promise<VE['data']> {
  const userData = localStorage.getItem('loginData')
  const { vehicleName, ...rest } = data

  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(userData)
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })

    const vehicles = await http.put({ resource: 'vehicles' }, rest, VE)
    return vehicles.data
  }
  throw Error('Invalid login')
}

async function postVehicle(data: VA): Promise<VE['data']> {
  const userData = localStorage.getItem('loginData')
  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(userData)
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })

    const vehicles = await http.post({ resource: 'vehicles' }, data, VE)
    return vehicles.data
  }
  throw Error('Invalid login')
}

export const deleteVehicle = async (id: string, history: History<any>) => {
  const userData = localStorage.getItem('loginData')
  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(userData)
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })
    await http.del(`vehicles/${id}`)
    return history.push('/vehicles')
  }
  throw Error('Invalid login')
}

const VehicleListRoute = () => (
  <Get asyncFn={getVehicleList} component={VehicleList1} />
)

const VehicleAdd = () => (
  <Post redirectTo="/vehicles" component={VehicleForm} onPost={postVehicle} />
)

const VehicleEdit = () => {
  const { params } = useMatch(type({ [vehicleEditAPI.idKey]: string }))
  return (
    <Put
      id={params[vehicleEditAPI.idKey as string] as any}
      doGet={getVehicle}
      onPut={(_id, data) => putVehicle(data)}
      component={VehicleForm}
      redirectTo="/vehicles"
    />
  )
}

export const VehicleRoutes = () => (
  <>
    <Route path={ps.create} render={() => <VehicleAdd />} />
    <Route path="/vehicles" render={() => <VehicleListRoute />} />
    <Route path={ps.edit} render={() => <VehicleEdit />} />
  </>
)
