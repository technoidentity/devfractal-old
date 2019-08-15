import React from 'react'
import { Post } from 'technoidentity-devfractal'
import { vehicleAPI } from '../common'
import { VehicleForm } from '../views'

export const VehicleRoute = () => (
  <Post
    redirectPath="/vehicles"
    onPost={values => vehicleAPI.create(values)}
    component={VehicleForm}
  />
)
