import React from 'react'
import { Get, Post, SimpleGet, SimplePost } from 'technoidentity-devfractal'
import { employeeAPI } from '../common'
import { EmployeeForm, EmployeeList } from '../views'

const EmployeeRoute = () => (
  <SimplePost
    path="/employees/add"
    api={employeeAPI}
    redirectPath="/employees"
    component={EmployeeForm}
  />
)

const EmployeeListRoute = () => (
  <SimpleGet api={employeeAPI} path="/employees" component={EmployeeList} />
)

export const EmployeeRoutes = () => (
  <>
    <EmployeeListRoute />
    <EmployeeRoute />
  </>
)
