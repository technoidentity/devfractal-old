import React from 'react'
import { vehicleAPI } from '../common'
import { CrudRoutes } from '../components'
import { VehicleForm, VehicleList } from '../views'

export const VehicleRoutes = () => (
  <CrudRoutes
    api={vehicleAPI}
    resource="batteries"
    formComponent={VehicleForm}
    listComponent={VehicleList}
  />
)
