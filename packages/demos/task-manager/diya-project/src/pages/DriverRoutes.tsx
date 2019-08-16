import React from 'react'
import { SimpleGet, SimplePost, SimplePut } from 'technoidentity-devfractal'
import { driverAPI, paths } from '../common'
import { DriverForm, DriverList } from '../views'

const { create, list, edit } = paths('drivers')

const DriverRoute = () => (
  <SimplePost
    path={create}
    redirectPath={list}
    api={driverAPI}
    component={DriverForm}
  />
)

const DriverListRoute = () => (
  <SimpleGet api={driverAPI} path={list} component={DriverList} />
)

const EditDriverRoute = () => (
  <SimplePut
    path={edit}
    api={driverAPI}
    component={DriverForm}
    redirectPath={list}
  />
)

export const DriverRoutes = () => (
  <>
    <DriverListRoute />
    <EditDriverRoute />
    <DriverRoute />
  </>
)
