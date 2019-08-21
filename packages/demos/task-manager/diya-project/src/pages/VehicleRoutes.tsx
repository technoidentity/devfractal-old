import React from 'react'
import { v2 } from 'technoidentity-devfractal'
import { vehicleAPI } from '../common'
import { VehicleForm, VehicleList } from '../views'

export const VehicleRoutes = () => (
  <v2.CrudRoutes api={vehicleAPI} form={VehicleForm} list={VehicleList} />
)
