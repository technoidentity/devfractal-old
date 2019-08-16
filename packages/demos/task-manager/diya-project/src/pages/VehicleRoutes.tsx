import React from 'react'
import { SimpleGet, SimplePost, SimplePut } from 'technoidentity-devfractal'
import { paths, vehicleAPI } from '../common'
import { VehicleForm, VehicleList } from '../views'

const vehiclePaths = paths('vehicles')

const VehicleRoute = () => (
  <SimplePost
    path={vehiclePaths.create}
    redirectPath={vehiclePaths.list}
    api={vehicleAPI}
    component={VehicleForm}
  />
)

const VehicleListRoute: React.FC = () => (
  <SimpleGet
    api={vehicleAPI}
    path={vehiclePaths.list}
    component={VehicleList}
  />
)

const EditVehicleRoute = () => (
  <SimplePut
    path={vehiclePaths.edit}
    api={vehicleAPI}
    component={VehicleForm}
    redirectPath={vehiclePaths.list}
  />
)

export const VehicleRoutes = () => (
  <>
    <VehicleListRoute />
    <EditVehicleRoute />
    <VehicleRoute />
  </>
)
