import React from 'react'
import { Post, Section } from 'technoidentity-devfractal'
import { Employee, employeeAPI } from '../common'
import { EmployeeForm } from '../views/EmployeeForm'

export const EmployeeRoute: React.FC = () => (
  <Section>
    <Post<Employee>
      onPost={employeeAPI.create}
      redirectPath="/employees"
      component={EmployeeForm}
    />
  </Section>
)
