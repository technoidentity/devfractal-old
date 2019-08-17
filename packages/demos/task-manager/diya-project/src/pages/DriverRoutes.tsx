import React from 'react'
import { driverAPI } from '../common'
import { CrudRoutes } from '../components'
import { DriverForm, DriverList } from '../views'

export const DriverRoutes = () => (
  <CrudRoutes
    api={driverAPI}
    resource="drivers"
    formComponent={DriverForm}
    listComponent={DriverList}
  />
)
