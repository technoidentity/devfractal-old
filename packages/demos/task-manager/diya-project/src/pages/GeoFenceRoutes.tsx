import React from 'react'
import { Get, Post } from 'technoidentity-devfractal'
import { geoFenceAPI } from '../common'
import { GeoFenceForm, GeoFenceList } from '../views'

export const GeoFenceRoute = () => (
  <Post
    onPost={geoFenceAPI.create}
    component={GeoFenceForm}
    redirectPath="/geo_fences"
  />
)

export const GeoFenceListRoute = () => (
  <Get asyncFn={() => geoFenceAPI.many()}>
    {data => <GeoFenceList geoFenceList={data} />}
  </Get>
)
