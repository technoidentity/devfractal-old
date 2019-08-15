import React from 'react'
import { Post } from 'technoidentity-devfractal'
import { batteryAPI } from '../common'
import { BatteryForm } from '../views'

export const BatteryRoute = () => (
  <Post
    redirectPath="/batteries"
    onPost={batteryAPI.create}
    component={BatteryForm}
  />
)
