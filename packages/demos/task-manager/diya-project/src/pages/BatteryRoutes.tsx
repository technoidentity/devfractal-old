import React from 'react'
import { v2 } from 'technoidentity-devfractal'
import { batteryAPI } from '../common'
import { BatteryForm, BatteryList } from '../views'

export const BatteryRoutes = () => (
  <v2.CrudRoutes api={batteryAPI} form={BatteryForm} list={BatteryList} />
)
