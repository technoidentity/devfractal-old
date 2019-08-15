import React from 'react'
import { Post } from 'technoidentity-devfractal'
import { geoFenceAPI } from '../common'
import { GeoFenceForm } from '../views'

export const GeoFenceRoute = () => (
  <Post
    onPost={geoFenceAPI.create}
    component={GeoFenceForm}
    redirectPath="/geo_fences"
  />
)
