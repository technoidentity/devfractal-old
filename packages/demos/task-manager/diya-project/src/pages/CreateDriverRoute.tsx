import React from 'react'
import { Post, Section } from 'technoidentity-devfractal'
import { Driver, driverAPI } from '../common'
import { AddDriverForm } from '../views'

export const CreateDriverRoute: React.FC = () => (
  <Section>
    <Post<Driver>
      redirectPath="/drivers"
      onPost={driverAPI.create}
      component={AddDriverForm}
    />
  </Section>
)
