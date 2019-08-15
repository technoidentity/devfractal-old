import React from 'react'
import { Get } from 'technoidentity-devfractal'
import { vehicleAPI } from '../common'
import { VehicleList } from '../views/VehicleList'

export const VehicleListRoute: React.FC = () => (
  <Get asyncFn={() => vehicleAPI.many()}>
    {data => <VehicleList vehicleList={data} />}
  </Get>
)
