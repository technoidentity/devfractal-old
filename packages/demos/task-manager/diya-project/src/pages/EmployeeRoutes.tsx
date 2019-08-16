import React from 'react'
import { SimpleGet, SimplePost } from 'technoidentity-devfractal'
import { employeeAPI, paths } from '../common'
import { EmployeeForm, EmployeeList } from '../views'

const employeePaths = paths('employees')

const EmployeeRoute = () => (
  <SimplePost
    path={employeePaths.create}
    api={employeeAPI}
    redirectPath={employeePaths.list}
    component={EmployeeForm}
  />
)

const EmployeeListRoute = () => (
  <SimpleGet
    api={employeeAPI}
    path={employeePaths.list}
    component={EmployeeList}
  />
)

export const EmployeeRoutes = () => (
  <>
    <EmployeeListRoute />
    <EmployeeRoute />
  </>
)
