import React from 'react'
import { batteryAPI } from '../common'
import { CrudRoutes } from '../crud'
import { BatteryForm, BatteryList } from '../views'

export const BatteryRoutes = () => (
  <CrudRoutes
    api={batteryAPI}
    formComponent={BatteryForm}
    listComponent={BatteryList}
    resource="batteries"
  />
)
