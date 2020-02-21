import React from 'react'
import {
  CrudTable,
  links,
  listComponent,
  RoutedPager,
  Section,
} from 'technoidentity-devfractal'
import { Employee } from '../common'
import { HeadTitle } from '../components'
import { CreateLink } from './CreateLink'

const employeeLinks = links('employees')

export const EmployeeList = listComponent(
  Employee,
  ({ data: employeeList }) => (
    <Section>
      <HeadTitle>Employee</HeadTitle>

      <CreateLink to={employeeLinks.create}>Add Employee</CreateLink>

      <CrudTable
        data={employeeList}
        select={['name', 'role']}
        editTo={v => employeeLinks.edit(v.id)}
      />

      <RoutedPager />
    </Section>
  ),
)
