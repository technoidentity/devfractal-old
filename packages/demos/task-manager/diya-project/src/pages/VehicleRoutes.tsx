import React from 'react'
import { SimpleGet, SimplePost, SimplePut } from 'technoidentity-devfractal'
import { vehicleAPI } from '../common'
import { VehicleForm, VehicleList } from '../views'

const VehicleRoute = () => (
  <SimplePost
    path="/vehicles/add"
    redirectPath="/vehicles"
    api={vehicleAPI}
    component={VehicleForm}
  />
)

const VehicleListRoute: React.FC = () => (
  <SimpleGet api={vehicleAPI} path="/vehicles" component={VehicleList} />
)

const EditVehicleRoute = () => (
  <SimplePut
    path="/vehicles/:id/edit"
    api={vehicleAPI}
    component={VehicleForm}
    redirectPath="/vehicles"
  />
)

export const VehicleRoutes = () => (
  <>
    <VehicleListRoute />
    <EditVehicleRoute />
    <VehicleRoute />
  </>
)
