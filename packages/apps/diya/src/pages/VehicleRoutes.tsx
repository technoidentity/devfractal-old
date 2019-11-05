import React from 'react'
import {
  // All,
  Create,
  Get,
  http as httpAPI,
  links,
  paths,
  Route,
} from 'technoidentity-devfractal'
import {
  AuthUserInfo,
  vehicleAdd,
  vehicleAPI,
  VehicleResponse,
} from '../common'
import { baseURL } from '../config'
import { VehicleList1, VehicleForm } from '../views'

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

// const VehicleEdit = () => (
//   <Put
//     id={vehicleAPI.idKey}
//     doGet={vehicleAPI.get}
//     onPut={vehicleAPI.replace}
//     component={VehicleForm}
//     redirectTo="/vehicles"
//   />
// )

export const VehicleRoutes = () => (
  // <CrudRoutes api={vehicleAPI} form={VehicleForm} list={VehicleList} />
  <>
    <VehicleAdd />
    <Route path="/vehicles" render={() => <VehicleListRoute />} />
  </>
  // <VehicleListRoute />
)
