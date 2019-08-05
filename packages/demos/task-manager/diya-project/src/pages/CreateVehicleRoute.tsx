import React from 'react'
import { Post } from 'technoidentity-devfractal'
import { Vehicle, vehicleAPI } from '../common'
import { VehicleForm } from '../views'

export const CreateVehicleRoute: React.FC = () => (
  <Post<Vehicle>
    redirectPath="/vehicles"
    onPost={vehicleAPI.create}
    component={VehicleForm}
  />
)
