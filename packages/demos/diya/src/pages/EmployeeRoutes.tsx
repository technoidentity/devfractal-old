import React from 'react'
import { v2 } from 'technoidentity-devfractal'
import { employeeAPI } from '../common'
import { EmployeeForm, EmployeeList } from '../views'

const paths = v2.paths('employees')
const links = v2.links('employees')

const EmployeeRoute = () => (
  <v2.Create
    path={paths.create}
    api={employeeAPI}
    redirectTo={links.list}
    form={EmployeeForm}
  />
)

const EmployeeListRoute = () => (
  <v2.All api={employeeAPI} path={paths.list} list={EmployeeList} />
)

export const EmployeeRoutes = () => (
  <>
    <EmployeeListRoute />
    <EmployeeRoute />
  </>
)
