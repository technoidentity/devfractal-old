import { CrudRoutes } from '@stp/devfractal'
import React from 'react'
import { vehicleAPI } from '../common'
import { VehicleForm, VehicleList } from '../views'

export const VehicleRoutes = () => (
  <CrudRoutes api={vehicleAPI} form={VehicleForm} list={VehicleList} />
)
