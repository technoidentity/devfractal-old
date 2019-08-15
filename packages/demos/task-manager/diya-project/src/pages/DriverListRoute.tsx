import React from 'react'
import { Get } from 'technoidentity-devfractal'
import { driverAPI } from '../common'
import { DriverList } from '../views'

export const DriverListRoute = () => (
  <Get asyncFn={() => driverAPI.many()}>
    {data => <DriverList driverList={data} />}
  </Get>
)
