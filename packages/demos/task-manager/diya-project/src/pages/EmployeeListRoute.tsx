import React from 'react'
import { Get } from 'technoidentity-devfractal'
import { employeeAPI } from '../common'
import { EmployeeList } from '../views/EmployeeList'

export const EmployeeListRoute: React.FC = () => (
  <Get asyncFn={() => employeeAPI.many()}>
    {data => <EmployeeList employeeList={data} />}
  </Get>
)
