import React from 'react'
import { SimpleGet, SimplePost, SimplePut } from 'technoidentity-devfractal'
import { driverAPI } from '../common'
import { DriverForm, DriverList } from '../views'

const DriverRoute = () => (
  <SimplePost
    path="/drivers/add"
    redirectPath="/drivers"
    api={driverAPI}
    component={DriverForm}
  />
)

const DriverListRoute = () => (
  <SimpleGet api={driverAPI} path="/drivers" component={DriverList} />
)

const EditDriverRoute = () => (
  <SimplePut
    path="/drivers"
    api={driverAPI}
    component={DriverForm}
    redirectPath="/drivers"
  />
)

export const DriverRoutes = () => (
  <>
    <DriverListRoute />
    <EditDriverRoute />
    <DriverRoute />
  </>
)
