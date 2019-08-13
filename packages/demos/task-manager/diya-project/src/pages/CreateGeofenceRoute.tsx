import React from 'react'
import { Post, Section } from 'technoidentity-devfractal'
import { Geofence, geofenceAPI } from '../common'
import { GeofenceForm } from '../views'

export const CreateGeofenceRoute: React.FC = () => (
  <Section>
    <Post<Geofence>
      onPost={geofenceAPI.create}
      component={GeofenceForm}
      redirectPath="/geofence"
    />
  </Section>
)
