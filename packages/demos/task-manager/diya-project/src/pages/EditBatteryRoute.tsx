import React from 'react'
import { Put, useMatch } from 'technoidentity-devfractal'
import { batteryAPI, Params } from '../common'
import { BatteryForm } from '../views'

export const EditBatteryRoute = () => {
  const { params } = useMatch(Params)

  return (
    <Put
      id={params.id}
      doGet={batteryAPI.get}
      onPut={batteryAPI.update}
      component={BatteryForm}
      redirectPath="/batteries"
    />
  )
}
