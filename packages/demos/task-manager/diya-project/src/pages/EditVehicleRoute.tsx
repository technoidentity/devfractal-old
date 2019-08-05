import { Put } from 'devfractal-api'
import { useMatch } from 'devfractal-router'
import React from 'react'
import { Params, Vehicle, vehicleAPI } from '../common'
import { VehicleForm } from '../views'

export const EditVehicleRoute: React.FC = () => {
  const { params } = useMatch(Params)

  return (
    <Put<Vehicle>
      id={params.id}
      doGet={vehicleAPI.get}
      onPut={vehicleAPI.update}
      component={VehicleForm}
      redirectPath="/vehicles"
    />
  )
}
