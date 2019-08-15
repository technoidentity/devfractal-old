import React from 'react'
import { Get, Post, Put, useMatch } from 'technoidentity-devfractal'
import { batteryAPI, Params } from '../common'
import { BatteryForm, BatteryList } from '../views'

export const BatteryEditRoute = () => {
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

export const BatteryListRoute = () => (
  <Get asyncFn={() => batteryAPI.many()}>
    {data => <BatteryList batteryList={data} />}
  </Get>
)

export const BatteryRoute = () => (
  <Post
    redirectPath="/batteries"
    onPost={batteryAPI.create}
    component={BatteryForm}
  />
)
