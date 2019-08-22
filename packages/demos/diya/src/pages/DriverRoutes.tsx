import React from 'react'
import { v2 } from 'technoidentity-devfractal'
import { driverAPI } from '../common'
import { DriverForm, DriverList } from '../views'

export const DriverRoutes = () => (
  <v2.CrudRoutes api={driverAPI} form={DriverForm} list={DriverList} />
)
