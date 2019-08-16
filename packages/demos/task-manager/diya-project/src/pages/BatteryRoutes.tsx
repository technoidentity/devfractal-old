import React from 'react'
import { SimpleGet, SimplePost, SimplePut } from 'technoidentity-devfractal'
import { batteryAPI, paths } from '../common'
import { BatteryForm, BatteryList } from '../views'

const batteryPaths = paths('batteries')

const BatteryEditRoute = () => (
  <SimplePut
    path={batteryPaths.edit}
    api={batteryAPI}
    component={BatteryForm}
    redirectPath={batteryPaths.list}
  />
)

const BatteryListRoute = () => (
  <SimpleGet
    api={batteryAPI}
    component={BatteryList}
    path={batteryPaths.list}
  />
)

const BatteryRoute = () => (
  <SimplePost
    path={batteryPaths.create}
    redirectPath={batteryPaths.list}
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
