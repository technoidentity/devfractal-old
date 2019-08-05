import React from 'react'
import { Post, Section } from 'technoidentity-devfractal'
import { driverAPI } from '../common/api'
import { Driver } from '../views'
import { AddDriverForm } from '../views/AddDriverForm'

export const CreateDriverForm: React.FC = () => (
  <Section>
    <Post<Driver>
      redirectPath="/drivers"
      onPost={driverAPI.create}
      component={AddDriverForm}
    />
  </Section>
)
