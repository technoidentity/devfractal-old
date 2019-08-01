import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { component, SimpleTable } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { SingleVehicleDetails } from './common'

const SingleVehicleProps = req({ singleVehicleDetails: SingleVehicleDetails })

type SingleVehicleProps = TypeOf<typeof SingleVehicleProps>

const VehicleListProps = req({
  vehicleList: readonlyArray(SingleVehicleDetails),
})

type VehicleListProps = TypeOf<typeof VehicleListProps>

export const VehicleList = component(VehicleListProps, ({ vehicleList }) => (
  <SimpleTable data={vehicleList} striped />
))
