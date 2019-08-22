import React from 'react'
import { component, Section, v2 } from 'technoidentity-devfractal'
import { Employee } from '../common'
import { CreateLink, HeadTitle } from '../components'

export const EmployeeListProps = v2.listProps(Employee)

const employeeLinks = v2.links('employees')

export const EmployeeList = component(
  EmployeeListProps,
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
