import React from 'react'
import { SimpleGet, SimplePost, SimplePut } from 'technoidentity-devfractal'
import { paths, vehicleAPI } from '../common'
import { VehicleForm, VehicleList } from '../views'

const { create, edit, list } = paths('vehicles')

const VehicleRoute = () => (
  <SimplePost
    path={create}
    redirectPath={list}
    api={vehicleAPI}
    component={VehicleForm}
  />
)

const VehicleListRoute: React.FC = () => (
  <SimpleGet api={vehicleAPI} path={list} component={VehicleList} />
)

const EditVehicleRoute = () => (
  <SimplePut
    path={edit}
    api={vehicleAPI}
    component={VehicleForm}
    redirectPath={list}
  />
)

export const VehicleRoutes = () => (
  <>
    <VehicleListRoute />
    <EditVehicleRoute />
    <VehicleRoute />
  </>
)
