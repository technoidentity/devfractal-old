import { readonlyArray } from 'io-ts'
import React from 'react'
import { component, Get, Section } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { Employee, employeeAPI } from '../common'
import {
  CreateLink,
  CrudTable,
  HeadTitle,
  StaticPagination,
} from '../components'

export const EmployeeListProps = req({ employeeList: readonlyArray(Employee) })

export const EmployeeListTable = component(
  EmployeeListProps,
  ({ employeeList }) => (
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

export const EmployeeList: React.FC = () => (
  <Get asyncFn={() => employeeAPI.many()}>
    {data => <EmployeeListTable employeeList={data} />}
  </Get>
)
