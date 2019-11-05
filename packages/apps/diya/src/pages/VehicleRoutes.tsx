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
  vehicleAdd,
  vehicleAPI,
  VehicleData,
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
  console.log(rest)

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

const VehicleListRoute = () => (
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
    <VehicleAdd />
    <Route path="/vehicles" render={() => <VehicleListRoute />} />
    <Route path={ps.edit} render={() => <VehicleEdit />} />
  </>
)
