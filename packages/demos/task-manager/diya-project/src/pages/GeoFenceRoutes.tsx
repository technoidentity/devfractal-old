import React from 'react'
import { geoFenceAPI } from '../common'
import { CrudRoutes, paths } from '../crud'
import { GeoFenceForm, GeoFenceList } from '../views'

export const GeoFenceRoutes = () => (
  <>
    <CrudRoutes
      api={geoFenceAPI}
      resource="geo_fences"
      formComponent={GeoFenceForm}
      listComponent={GeoFenceList}
    />
  </>
)
