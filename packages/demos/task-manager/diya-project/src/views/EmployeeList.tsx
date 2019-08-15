import React from 'react'
import { component, Section } from 'technoidentity-devfractal'
import { Employee, listProps } from '../common'
import {
  CreateLink,
  CrudTable,
  HeadTitle,
  StaticPagination,
} from '../components'

export const EmployeeListProps = listProps(Employee)

export const EmployeeList = component(
  EmployeeListProps,
  ({ data: employeeList }) => (
    <Section>
      <HeadTitle>Employee</HeadTitle>

      <CreateLink to="/employees/add"> Add Employee</CreateLink>

      <CrudTable
        data={employeeList}
        headers={['name', 'role']}
        editURL={v => `employees/${v.id}/edit`}
      />

      <StaticPagination />
    </Section>
  ),
)
