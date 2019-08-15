import React from 'react'
import { Post, Section } from 'technoidentity-devfractal'
import { GeoFence, geoFenceAPI } from '../common'
import { GeoFenceForm } from '../views'

export const GeoFenceRoute: React.FC = () => (
  <Section>
    <Post<GeoFence>
      onPost={geoFenceAPI.create}
      component={GeoFenceForm}
      redirectPath="/geo_fences"
    />
  </Section>
)
