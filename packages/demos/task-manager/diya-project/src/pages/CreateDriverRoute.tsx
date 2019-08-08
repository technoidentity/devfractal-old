import { omit } from 'lodash-es'
import React from 'react'
import { Post, Section } from 'technoidentity-devfractal'
import { Driver, driverAPI } from '../common'
import { DriverForm } from '../views'

export const CreateDriverRoute: React.FC = () => (
  <Section>
    <Post<Driver>
      redirectPath="/drivers"
      onPost={values => driverAPI.create(omit(values, 'id'))}
      component={DriverForm}
    />
  </Section>
)
