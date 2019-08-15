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

export const EmployeeListProps = req({
  employeeList: readonlyArray(Employee),
})

export const EmployeeList = component(EmployeeListProps, ({ employeeList }) => (
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
))

export const EmployeeListRoute: React.FC = () => (
  <Get asyncFn={() => employeeAPI.many()}>
    {data => <EmployeeList employeeList={data} />}
  </Get>
)
