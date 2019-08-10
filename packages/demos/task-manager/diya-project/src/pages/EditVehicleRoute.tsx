import React from 'react'
import { Put, useMatch } from 'technoidentity-devfractal'
import { Params, vehicleAPI } from '../common'
import { VehicleForm } from '../views'

export const EditVehicleRoute: React.FC = () => {
  const { params } = useMatch(Params)

  return (
    <Put
      id={params.id}
      doGet={vehicleAPI.get}
      onPut={vehicleAPI.update}
      component={VehicleForm}
      redirectPath="/vehicles"
    />
  )
}
