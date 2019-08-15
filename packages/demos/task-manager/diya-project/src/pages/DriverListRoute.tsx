import React from 'react'
import { Get } from 'technoidentity-devfractal'
import { driverAPI } from '../common'
import { DriverList } from '../views/DriverList'

export const DriverListRoute: React.FC = () => (
  <Get asyncFn={() => driverAPI.many()}>
    {data => <DriverList driverList={data} />}
  </Get>
)
