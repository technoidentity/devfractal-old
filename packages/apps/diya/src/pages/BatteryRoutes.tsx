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
  BatteryAdd as BA,
  batteryAPI,
  BatteryData,
  BatteryEdit as BE,
  batteryEditAPI,
  BatteryResponse,
  cargosUrl,
} from '../common'
import { toastMessage } from '../components/Message'
import { BatteryForm, BatteryList } from '../views'

const ps = paths(batteryAPI.resource)

export async function getBatteryList(): Promise<
  BatteryResponse['data']['rows']
> {
  try {
    const batteries = await cargosUrl().get(
      { resource: 'batteries' },
      BatteryResponse,
    )
    return batteries.data.rows
  } catch (error) {
    throw Error(error)
  }
}

async function getBattery(id: string): Promise<BE['data']> {
  try {
    const batteries = await cargosUrl().get(
      { resource: 'batteries', path: id },
      BE,
    )
    return batteries.data
  } catch (error) {
    throw Error(error)
  }
}

async function putBattery(data: BatteryData): Promise<BE['data']> {
  try {
    const batteries = await cargosUrl().put({ resource: 'batteries' }, data, BE)
    toastMessage('Battery Updated')
    return batteries.data
  } catch (error) {
    toastMessage('fail')
    throw Error(error)
  }
}

async function postBattery(data: BA): Promise<BE['data']> {
  try {
    const batteries = await cargosUrl().post(
      { resource: 'batteries' },
      data,
      BE,
    )
    toastMessage('Battery Added')
    return batteries.data
  } catch (error) {
    toastMessage('fail')
    throw Error(error)
  }
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
