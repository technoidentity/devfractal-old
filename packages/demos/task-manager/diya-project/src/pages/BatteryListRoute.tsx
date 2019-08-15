import React from 'react'
import { Get } from 'technoidentity-devfractal'
import { batteryAPI } from '../common'
import { BatteryList } from '../views'

export const BatteryListRoute = () => (
  <Get asyncFn={() => batteryAPI.many()}>
    {data => <BatteryList batteryList={data} />}
  </Get>
)
