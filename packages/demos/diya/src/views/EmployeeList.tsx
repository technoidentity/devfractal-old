import React from 'react'
import { Section, v2 } from 'technoidentity-devfractal'
import { Employee } from '../common'
import { CreateLink, HeadTitle } from '../components'

const employeeLinks = v2.links('employees')

export const EmployeeList = v2.listComponent(
  Employee,
  ({ data: employeeList }) => (
    <Section>
      <HeadTitle>Employee</HeadTitle>

      <CreateLink to={employeeLinks.create}> Add Employee</CreateLink>

      <v2.CrudTable
        data={employeeList}
        headers={['name', 'role']}
        editLink={v => employeeLinks.edit(v.id)}
      />

      <v2.RoutedPager />
    </Section>
  ),
)
