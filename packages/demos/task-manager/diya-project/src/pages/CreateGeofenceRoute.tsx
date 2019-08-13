import { Post } from 'devfractal-api'
import { Section } from 'devfractal-ui-core'
import { omit } from 'lodash-es'
import React from 'react'
import { Geofence, geofenceAPI } from '../common'
import { GeofenceForm } from '../views'

export const CreateGeofenceRoute: React.FC = () => (
  <Section>
    <Post<Geofence>
      onPost={values => geofenceAPI.create(omit(values, 'id'))}
      component={GeofenceForm}
      redirectPath="/geofence"
    />
  </Section>
)
