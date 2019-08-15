import React from 'react'
import { Get, Post, Put, useMatch } from 'technoidentity-devfractal'
import { driverAPI, Params } from '../common'
import { DriverForm, DriverList } from '../views'

export const DriverRoute = () => (
  <Post
    redirectPath="/drivers"
    onPost={driverAPI.create}
    component={DriverForm}
  />
)

export const DriverListRoute = () => (
  <Get asyncFn={() => driverAPI.many()}>
    {data => <DriverList driverList={data} />}
  </Get>
)

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
