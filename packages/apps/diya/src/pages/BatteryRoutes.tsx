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
  BatteryAdd as BA,
  batteryAPI,
  BatteryData,
  BatteryEdit as BE,
  batteryEditAPI,
  BatteryResponse,
  cargosUrl,
  sessionExpire,
} from '../common'
import { toastMessage } from '../components/Message'
import { BatteryForm, BatteryList } from '../views'

const ps = paths(batteryAPI.resource)

export async function getBatteryList({
  setUser,
  logout,
  setHeaderText,
}: any): Promise<BatteryResponse['data']['rows']> {
  try {
    const batteries = await cargosUrl().get(
      { resource: 'batteries' },
      BatteryResponse,
    )
    setHeaderText('Batteries')
    return batteries.data.rows
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    setHeaderText(undefined)
    throw Error(error)
  }
}

async function getBattery(
  id: string,
  { setUser, logout }: any,
): Promise<BE['data']> {
  try {
    const batteries = await cargosUrl().get(
      { resource: 'batteries', path: id },
      BE,
    )
    return batteries.data
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    throw Error(error)
  }
}

async function putBattery(
  data: BatteryData,
  { setUser, logout }: any,
): Promise<BE['data']> {
  try {
    const batteries = await cargosUrl().put({ resource: 'batteries' }, data, BE)
    toastMessage('success', 'Battery Updated')
    return batteries.data
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    toastMessage('fail', error.response.data.errors)
    throw Error(error)
  }
}

async function postBattery(
  data: BA,
  { setUser, logout }: any,
): Promise<BE['data']> {
  try {
    const batteries = await cargosUrl().post(
      { resource: 'batteries' },
      data,
      BE,
    )
    toastMessage('success', 'Battery Added')
    return batteries.data
  } catch (error) {
    sessionExpire({ error, setUser, logout, toastMessage })
    toastMessage('fail', error.response.data.errors)
    throw Error(error)
  }
}

const BatteryListRoute = ({ setUser, logout, setHeaderText }: any) => (
  <Get
    asyncFn={() => getBatteryList({ setUser, logout, setHeaderText })}
    component={BatteryList}
  />
)

const BatteryAdd = ({ setUser, logout }: any) => (
  <Post
    redirectTo="/batteries"
    component={BatteryForm}
    onPost={data => postBattery(data, { setUser, logout })}
  />
)

const BatteryEdit = ({ setUser, logout }: any) => {
  const { params } = useMatch(type({ [batteryEditAPI.idKey]: string }))
  return (
    <Put
      id={params[batteryEditAPI.idKey as string] as any}
      doGet={id => getBattery(id as string, { setUser, logout })}
      onPut={(_id, data) => putBattery(data, { setUser, logout })}
      component={BatteryForm}
      redirectTo="/batteries"
    />
  )
}
export const BatteryRoutes = () => {
  const { logout, setUser, setHeaderText } = useAuth()
  return (
    <>
      <Route
        path={ps.create}
        render={() => <BatteryAdd setUser={setUser} logout={logout} />}
      />
      <Route
        path="/batteries"
        render={() => (
          <BatteryListRoute
            setUser={setUser}
            logout={logout}
            setHeaderText={setHeaderText}
          />
        )}
      />
      <Route
        path={ps.edit}
        render={() => <BatteryEdit setUser={setUser} logout={logout} />}
      />
    </>
  )
}
