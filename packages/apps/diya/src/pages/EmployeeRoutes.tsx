import React from 'react'
import { All, Create, links, paths } from 'technoidentity-devfractal'
import { employeeAPI } from '../common'
import { EmployeeForm, EmployeeList } from '../views'

const ps = paths('employees')
const ls = links('employees')

const EmployeeRoute = () => (
  <Create
    path={ps.create}
    api={employeeAPI}
    redirectTo={ls.list}
    form={EmployeeForm}
  />
)

const EmployeeListRoute = () => (
  <All api={employeeAPI} path={ps.list} list={EmployeeList} />
)

export const EmployeeRoutes = () => (
  <>
    <EmployeeListRoute />
    <EmployeeRoute />
  </>
)
