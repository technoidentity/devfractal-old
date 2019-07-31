import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { component, SimpleTable } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { SingleBatteryDetails } from './common'

export const SingleBatteryProps = req({
  singleBatteryDetails: SingleBatteryDetails,
})

export type SingleBatteryProps = TypeOf<typeof SingleBatteryProps>

const BatteryListProps = req({
  batteryList: readonlyArray(SingleBatteryDetails),
})

type BatteryListProps = TypeOf<typeof BatteryListProps>

export const BatteryList = component(BatteryListProps, ({ batteryList }) => (
  <SimpleTable data={batteryList} striped />
))
