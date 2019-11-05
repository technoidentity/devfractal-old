import React from 'react'
import { Get, http as httpAPI, Route } from 'technoidentity-devfractal'
import { AuthUserInfo, BatteryResponse } from '../common'
import { baseURL } from '../config'
import { BatteryList } from '../views'

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

const BatteryListRoute = () => (
  <Get asyncFn={getBatteryList} component={BatteryList} />
)

export const BatteryRoutes = () => (
  <Route path="/batteries" render={() => <BatteryListRoute />} />
)
