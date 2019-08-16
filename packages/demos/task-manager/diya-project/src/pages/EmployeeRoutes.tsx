import React from 'react'
import { SimpleGet, SimplePost } from 'technoidentity-devfractal'
import { employeeAPI } from '../common'
import { paths } from '../crud'
import { EmployeeForm, EmployeeList } from '../views'

const { create, list } = paths('employees')

const EmployeeRoute = () => (
  <SimplePost
    path={create}
    api={employeeAPI}
    redirectPath={list}
    component={EmployeeForm}
  />
)

const EmployeeListRoute = () => (
  <SimpleGet api={employeeAPI} path={list} component={EmployeeList} />
)

export const EmployeeRoutes = () => (
  <>
    <EmployeeListRoute />
    <EmployeeRoute />
  </>
)
