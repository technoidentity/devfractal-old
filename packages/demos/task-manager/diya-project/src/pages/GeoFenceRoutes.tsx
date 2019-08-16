import React from 'react'
import { SimpleGet, SimplePost } from 'technoidentity-devfractal'
import { geoFenceAPI } from '../common'
import { paths } from '../crud'
import { GeoFenceForm, GeoFenceList } from '../views'

const { create, list } = paths('geo_fences')

const GeoFenceRoute = () => (
  <SimplePost
    path={create}
    api={geoFenceAPI}
    component={GeoFenceForm}
    redirectPath={list}
  />
)

const GeoFenceListRoute = () => (
  <SimpleGet path={list} component={GeoFenceList} api={geoFenceAPI} />
)

export const GeoFenceRoutes = () => (
  <>
    <GeoFenceListRoute />
    <GeoFenceRoute />
  </>
)
