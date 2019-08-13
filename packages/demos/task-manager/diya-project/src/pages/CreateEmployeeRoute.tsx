import { Post } from 'devfractal-api'
import { Section } from 'devfractal-ui-core'
import { omit } from 'lodash-es'
import React from 'react'
import { Employee, employeeAPI } from '../common'
import { EmployeeForm } from '../views/EmployeeForm'

export const CreateEmployeeRoute: React.FC = () => (
  <Section>
    <Post<Employee>
      onPost={values => employeeAPI.create(omit(values, 'id'))}
      redirectPath="/employees"
      component={EmployeeForm}
    />
  </Section>
)
