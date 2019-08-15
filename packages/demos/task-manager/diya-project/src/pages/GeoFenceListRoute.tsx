import React from 'react'
import { Get } from 'technoidentity-devfractal'
import { geoFenceAPI } from '../common'
import { GeoFenceList } from '../views'

export const GeoFenceListRoute = () => (
  <Get asyncFn={() => geoFenceAPI.many()}>
    {data => <GeoFenceList geoFenceList={data} />}
  </Get>
)
