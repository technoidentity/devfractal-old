import React from 'react'
import { Put, useMatch } from 'technoidentity-devfractal'
import { driverAPI, Params } from '../common'
import { DriverForm } from '../views'

export const EditDriverRoute = () => {
  const { params } = useMatch(Params)

  return (
    <Put
      id={params.id}
      doGet={driverAPI.get}
      onPut={driverAPI.update}
      component={DriverForm}
      redirectPath="/drivers"
    />
  )
}
