import React from 'react'
import { CrudRoutes } from 'technoidentity-devfractal'
import { vehicleAPI } from '../common'
import { VehicleForm, VehicleList } from '../views'

export const VehicleRoutes = () => (
  <CrudRoutes api={vehicleAPI} form={VehicleForm} list={VehicleList} />
)
