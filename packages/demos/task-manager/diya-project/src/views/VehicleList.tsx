import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonsGroup, component, SimpleTable } from 'technoidentity-devfractal'
import { fake, req } from 'technoidentity-utils'
import { SingleVehicleDetails } from './common'

const SingleVehicleProps = req({ singleVehicleDetails: SingleVehicleDetails })

type SingleVehicleProps = TypeOf<typeof SingleVehicleProps>

const VehicleListProps = req({
  vehicleList: readonlyArray(SingleVehicleDetails),
})

type VehicleListProps = TypeOf<typeof VehicleListProps>

export const VehicleListForm = component(
  VehicleListProps,
  ({ vehicleList }) => (
    <>
      <ButtonsGroup alignment="right">
        <Link to="/vehicles/add" className="button is-primary">
          Add Vehicle
        </Link>
      </ButtonsGroup>
      <SimpleTable data={vehicleList} striped />
    </>
  ),
)

export const multipleVehicles = (n: Number) => {
  const vehicles = []
  for (let i = 0; i < n; i += 1) {
    vehicles.push(fake(SingleVehicleDetails))
  }
  return vehicles
}

export const VehicleList: React.FC = () => (
  <VehicleListForm vehicleList={multipleVehicles(10)} />
)
