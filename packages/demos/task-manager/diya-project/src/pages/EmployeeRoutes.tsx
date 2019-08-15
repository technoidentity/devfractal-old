import React from 'react'
import { Get, Post } from 'technoidentity-devfractal'
import { employeeAPI } from '../common'
import { EmployeeForm, EmployeeList } from '../views'

export const EmployeeRoute = () => (
  <Post
    onPost={employeeAPI.create}
    redirectPath="/employees"
    component={EmployeeForm}
  />
)

export const EmployeeListRoute = () => (
  <Get asyncFn={() => employeeAPI.many()}>
    {data => <EmployeeList employeeList={data} />}
  </Get>
)
