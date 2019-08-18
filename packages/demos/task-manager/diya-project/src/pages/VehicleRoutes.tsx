import React from 'react'
import { vehicleAPI } from '../common'
import { CrudRoutes } from '../crud'
import { VehicleForm, VehicleList } from '../views'

export const VehicleRoutes = () => (
  <CrudRoutes
    api={vehicleAPI}
    resource="vehicles"
    formComponent={VehicleForm}
    listComponent={VehicleList}
  />
)
