import React from 'react'
import { Post, Section } from 'technoidentity-devfractal'
import { GeoFence, geofenceAPI } from '../common'
import { GeoFenceForm } from '../views'

export const GeoFenceRoute: React.FC = () => (
  <Section>
    <Post<GeoFence>
      onPost={geofenceAPI.create}
      component={GeoFenceForm}
      redirectPath="/geofence"
    />
  </Section>
)
