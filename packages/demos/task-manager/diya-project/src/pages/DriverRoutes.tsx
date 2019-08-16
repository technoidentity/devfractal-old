import React from 'react'
import { SimpleGet, SimplePost, SimplePut } from 'technoidentity-devfractal'
import { driverAPI, paths } from '../common'
import { DriverForm, DriverList } from '../views'

const driverPaths = paths('drivers')

const DriverRoute = () => (
  <SimplePost
    path={driverPaths.create}
    redirectPath={driverPaths.list}
    api={driverAPI}
    component={DriverForm}
  />
)

const DriverListRoute = () => (
  <SimpleGet api={driverAPI} path={driverPaths.list} component={DriverList} />
)

const EditDriverRoute = () => (
  <SimplePut
    path={driverPaths.list}
    api={driverAPI}
    component={DriverForm}
    redirectPath={driverPaths.list}
  />
)

export const DriverRoutes = () => (
  <>
    <DriverListRoute />
    <EditDriverRoute />
    <DriverRoute />
  </>
)
