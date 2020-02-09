import { CrudRoutes } from '@stp/devfractal'
import React from 'react'
import { driverAPI } from '../common'
import { DriverForm, DriverList } from '../views'

export const DriverRoutes = () => (
  <CrudRoutes api={driverAPI} form={DriverForm} list={DriverList} />
)
