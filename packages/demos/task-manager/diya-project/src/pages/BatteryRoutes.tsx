import React from 'react'
import { SimpleGet, SimplePost, SimplePut } from 'technoidentity-devfractal'
import { batteryAPI } from '../common'
import { BatteryForm, BatteryList } from '../views'

const BatteryEditRoute = () => (
  <SimplePut
    path="/batteries/:id/edit"
    api={batteryAPI}
    component={BatteryForm}
    redirectPath="/batteries"
  />
)

const BatteryListRoute = () => (
  <SimpleGet api={batteryAPI} component={BatteryList} path="/batteries" />
)

const BatteryRoute = () => (
  <SimplePost
    path="/batteries/add"
    redirectPath="/batteries"
    api={batteryAPI}
    component={BatteryForm}
  />
)

export const BatteryRoutes = () => (
  <>
    <BatteryListRoute />
    <BatteryEditRoute />
    <BatteryRoute />
  </>
)
