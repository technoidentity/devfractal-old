import React from 'react'
import { Get } from 'technoidentity-devfractal'
import { employeeAPI } from '../common'
import { EmployeeList } from '../views'

export const EmployeeListRoute = () => (
  <Get asyncFn={() => employeeAPI.many()}>
    {data => <EmployeeList employeeList={data} />}
  </Get>
)
