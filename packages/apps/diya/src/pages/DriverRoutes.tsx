import React from 'react'
import { Get, http as httpAPI, Route } from 'technoidentity-devfractal'
import { AuthUserInfo, DriverResponse } from '../common'
import { baseURL } from '../config'
import { DriverList1 } from '../views'
async function getDriverList(): Promise<DriverResponse['data']['rows']> {
  const userData = localStorage.getItem('loginData')
  if (userData) {
    const {
      data: { token },
    }: AuthUserInfo = JSON.parse(userData)
    const http = httpAPI({
      baseURL,
      headers: { Authorization: `bearer ${token}` },
    })
    const drivers = await http.get({ resource: 'drivers' }, DriverResponse)
    return drivers.data.rows
  }
  throw Error('Invalid login')
}

const DriverListRoute = () => (
  <Get asyncFn={getDriverList} component={DriverList1} />
)

export const DriverRoutes = () => (
  <Route path="/drivers" render={() => <DriverListRoute />} />
)
