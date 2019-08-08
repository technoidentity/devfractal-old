import { omit } from 'lodash-es'
import React from 'react'
import { Post, Section } from 'technoidentity-devfractal'
import { Vehicle, vehicleAPI } from '../common'
import { VehicleForm } from '../views'

export const CreateVehicleRoute: React.FC = () => (
  <Section>
    <Post<Vehicle>
      redirectPath="/vehicles"
      onPost={values => vehicleAPI.create(omit(values, 'id'))}
      component={VehicleForm}
    />
  </Section>
)
