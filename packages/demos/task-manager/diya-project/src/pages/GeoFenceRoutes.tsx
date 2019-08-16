import React from 'react'
import { SimpleGet, SimplePost } from 'technoidentity-devfractal'
import { geoFenceAPI, paths } from '../common'
import { GeoFenceForm, GeoFenceList } from '../views'

const geoFencePaths = paths('geo_fences')

const GeoFenceRoute = () => (
  <SimplePost
    path={geoFencePaths.create}
    api={geoFenceAPI}
    component={GeoFenceForm}
    redirectPath={geoFencePaths.list}
  />
)

const GeoFenceListRoute = () => (
  <SimpleGet
    path={geoFencePaths.list}
    component={GeoFenceList}
    api={geoFenceAPI}
  />
)

export const GeoFenceRoutes = () => (
  <>
    <GeoFenceListRoute />
    <GeoFenceRoute />
  </>
)
