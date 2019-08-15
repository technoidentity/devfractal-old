import React from 'react'
import { Get, Post, Put, useMatch } from 'technoidentity-devfractal'
import { Params, vehicleAPI } from '../common'
import { VehicleForm, VehicleList } from '../views'

export const VehicleRoute = () => (
  <Post
    redirectPath="/vehicles"
    onPost={values => vehicleAPI.create(values)}
    component={VehicleForm}
  />
)

export const VehicleListRoute: React.FC = () => (
  <Get asyncFn={() => vehicleAPI.many()}>
    {data => <VehicleList vehicleList={data} />}
  </Get>
)

export const EditVehicleRoute = () => {
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
