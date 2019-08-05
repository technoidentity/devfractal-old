import { Put } from 'devfractal-api'
import { useMatch } from 'devfractal-router'
import React from 'react'
import { Driver, driverAPI, Params } from '../common'
import { DriverForm } from '../views'

export const EditDriverRoute: React.FC = () => {
  const { params } = useMatch(Params)
  return (
    <Put<Driver>
      id={params.id}
      doGet={driverAPI.get}
      onPut={driverAPI.update}
      component={DriverForm}
      redirectPath="/drivers"
    />
  )
}
