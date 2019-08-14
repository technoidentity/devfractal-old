import React from 'react'
import { Post, Section } from 'technoidentity-devfractal'
import { Driver, driverAPI } from '../common'
import { DriverForm } from '../views'

export const DriverRoute: React.FC = () => (
  <Section>
    <Post<Driver>
      redirectPath="/drivers"
      onPost={driverAPI.create}
      component={DriverForm}
    />
  </Section>
)
