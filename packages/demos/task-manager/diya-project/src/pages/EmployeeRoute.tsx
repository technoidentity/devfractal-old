import React from 'react'
import { Post } from 'technoidentity-devfractal'
import { employeeAPI } from '../common'
import { EmployeeForm } from '../views'

export const EmployeeRoute = () => (
  <Post
    onPost={employeeAPI.create}
    redirectPath="/employees"
    component={EmployeeForm}
  />
)
