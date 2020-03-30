import React from 'react'
import { CrudRoutes } from 'srtp-crud'
import { driverAPI } from '../common'
import { DriverForm, DriverList } from '../views'

export const DriverRoutes = () => (
  <CrudRoutes api={driverAPI} form={DriverForm} list={DriverList} />
)
