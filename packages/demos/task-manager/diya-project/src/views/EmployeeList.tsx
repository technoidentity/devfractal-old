import React from 'react'
import { component, Section } from 'technoidentity-devfractal'
import { Employee, links, listProps } from '../common'
import {
  CreateLink,
  CrudTable,
  HeadTitle,
  StaticPagination,
} from '../components'

export const EmployeeListProps = listProps(Employee)

const employeeLinks = links('employees')

export const EmployeeList = component(
  EmployeeListProps,
  ({ data: employeeList }) => (
    <Section>
      <HeadTitle>Employee</HeadTitle>

      <CreateLink to={employeeLinks.create}> Add Employee</CreateLink>

      <CrudTable
        data={employeeList}
        headers={['name', 'role']}
        editURL={v => employeeLinks.edit(v.id)}
      />

      <StaticPagination />
    </Section>
  ),
)
