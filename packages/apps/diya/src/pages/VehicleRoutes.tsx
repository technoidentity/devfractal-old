import React from 'react'
import {
  // All,
  Create,
  Get,
  http as httpAPI,
  links,
  paths,
  Put,
  Route,
} from 'technoidentity-devfractal'
import {
  AuthUserInfo,
  vehicleAdd,
  vehicleAPI,
  VehicleEdit as VE,
  vehicleEditAPI,
  VehicleResponse,
} from '../common'
import { baseURL } from '../config'
import { VehicleForm, VehicleList1 } from '../views'

const ps = paths(vehicleAPI.resource)
const ls = links(vehicleAPI.resource)

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

async function getVehicle(): Promise<VE['data']> {
  const userData = localStorage.getItem('loginData')
  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(userData)
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })
    const vehicles = await http.get(
      { resource: 'vehicles', path: 'baaf3208-231f-45f8-9356-08f647dc846f' },
      VE,
    )
    return vehicles.data
  }
  throw Error('Invalid login')
}

async function putVehicle(data: any): Promise<VE['data']> {
  const userData = localStorage.getItem('loginData')
  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(userData)
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })
    const vehicles = await http.put({ resource: 'vehicles' }, data, VE)
    return vehicles.data
  }
  throw Error('Invalid login')
}

const VehicleListRoute = () => (
  // <All path={ps.list} api={vehicleAPI} list={VehicleList} />
  <Get asyncFn={getVehicleList} component={VehicleList1} />
)

const VehicleAdd = () => (
  <Create
    path={ps.create}
    api={vehicleAdd}
    form={VehicleForm}
    redirectTo={ls.list}
  />
)

const VehicleEdit = () => (
  <Put
    id={vehicleEditAPI.idKey}
    doGet={getVehicle}
    onPut={putVehicle}
    component={VehicleForm}
    redirectTo="/vehicles"
  />
)

export const VehicleRoutes = () => (
  // <CrudRoutes api={vehicleAPI} form={VehicleForm} list={VehicleList} />
  <>
    <VehicleAdd />
    <Route path="/vehicles" render={() => <VehicleListRoute />} />
    <Route path={ps.edit} render={() => <VehicleEdit />} />
  </>
  // <VehicleListRoute />
)
