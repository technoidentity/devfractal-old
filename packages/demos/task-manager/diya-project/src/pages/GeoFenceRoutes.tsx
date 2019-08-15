import React from 'react'
import { Post, SimpleGet, SimplePost } from 'technoidentity-devfractal'
import { geoFenceAPI } from '../common'
import { GeoFenceForm, GeoFenceList } from '../views'

const GeoFenceRoute = () => (
  <SimplePost
    path="/geo_fences/add"
    api={geoFenceAPI}
    component={GeoFenceForm}
    redirectPath="/geo_fences"
  />
)

const GeoFenceListRoute = () => (
  <SimpleGet path="/geo_fences" component={GeoFenceList} api={geoFenceAPI} />
)

export const GeoFenceRoutes = () => (
  <>
    <GeoFenceListRoute />
    <GeoFenceRoute />
  </>
)
