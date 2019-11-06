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
  BatteryAdd as BA,
  batteryAPI,
  BatteryData,
  BatteryEdit as BE,
  batteryEditAPI,
  BatteryResponse,
} from '../common'
import { baseURL } from '../config'
import { BatteryForm, BatteryList } from '../views'
const ps = paths(batteryAPI.resource)
async function getBatteryList(): Promise<BatteryResponse['data']['rows']> {
  const userData = localStorage.getItem('loginData')
  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(userData)
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })
    const batteries = await http.get({ resource: 'batteries' }, BatteryResponse)
    return batteries.data.rows
  }
  throw Error('Invalid login')
}

async function getBattery(id: string): Promise<BE['data']> {
  const userData = localStorage.getItem('loginData')

  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(userData)
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })
    const batteries = await http.get({ resource: 'batteries', path: id }, BE)
    return batteries.data
  }
  throw Error('Invalid login')
}

async function putBattery(data: BatteryData): Promise<BE['data']> {
  const userData = localStorage.getItem('loginData')

  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(userData)
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })
    const batteries = await http.put({ resource: 'batteries' }, data, BE)
    return batteries.data
  }
  throw Error('Invalid login')
}

async function postBattery(data: BA): Promise<BE['data']> {
  const userData = localStorage.getItem('loginData')
  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(userData)
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })

    const batteries = await http.post({ resource: 'batteries' }, data, BE)
    return batteries.data
  }
  throw Error('Invalid login')
}

const BatteryListRoute = () => (
  <Get asyncFn={getBatteryList} component={BatteryList} />
)

const BatteryAdd = () => (
  <Post redirectTo="/batteries" component={BatteryForm} onPost={postBattery} />
)

const BatteryEdit = () => {
  const { params } = useMatch(type({ [batteryEditAPI.idKey]: string }))
  return (
    <Put
      id={params[batteryEditAPI.idKey as string] as any}
      doGet={getBattery}
      onPut={(_id, data) => putBattery(data)}
      component={BatteryForm}
      redirectTo="/batteries"
    />
  )
}
export const BatteryRoutes = () => (
  <>
    <Route path={ps.create} render={() => <BatteryAdd />} />
    <Route path="/batteries" render={() => <BatteryListRoute />} />
    <Route path={ps.edit} render={() => <BatteryEdit />} />
  </>
)
