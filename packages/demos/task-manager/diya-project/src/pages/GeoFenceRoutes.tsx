import React from 'react'
import { SimpleGet, SimplePost } from 'technoidentity-devfractal'
import { geoFenceAPI, paths } from '../common'
import { GeoFenceForm, GeoFenceList } from '../views'

const { create, edit, list } = paths('geo_fences')

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
