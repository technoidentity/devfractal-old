import React from 'react'
import { Post, Section } from 'technoidentity-devfractal'
import { driverAPI } from '../common/api'
import { AddDriverForm } from '../views/AddDriverForm'
import { Driver } from '../views'

export const CreateDriverForm: React.FC = () => (
  <Section>
    <Post<Driver>
      redirectPath="/drivers"
      onPost={driverAPI.create}
      component={AddDriverForm}
    />
  </Section>
)
