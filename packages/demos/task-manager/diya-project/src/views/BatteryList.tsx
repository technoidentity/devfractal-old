import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonsGroup, component, SimpleTable } from 'technoidentity-devfractal'
import { fake, req } from 'technoidentity-utils'
import { Battery } from './common'

export const SingleBatteryProps = req({
  singleBatteryDetails: Battery,
})

export type SingleBatteryProps = TypeOf<typeof SingleBatteryProps>

const BatteryListProps = req({
  batteryList: readonlyArray(Battery),
})

type BatteryListProps = TypeOf<typeof BatteryListProps>

export const BatteryListForm = component(
  BatteryListProps,
  ({ batteryList }) => (
    <>
      <ButtonsGroup alignment="right">
        <Link to="/batteries/add" className="button is-primary">
          Add Battery
        </Link>
      </ButtonsGroup>
      <SimpleTable data={batteryList} striped />
    </>
  ),
)

export const multipleBatteries = (n: Number) => {
  const batteries = []
  for (let i = 0; i < n; i += 1) {
    batteries.push(fake(Battery))
  }
  return batteries
}

export const BatteryList: React.FC = () => (
  <BatteryListForm batteryList={multipleBatteries(10)} />
)
