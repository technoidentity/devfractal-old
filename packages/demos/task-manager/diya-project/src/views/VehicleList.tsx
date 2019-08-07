import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  ButtonsGroup,
  component,
  Navbar,
  NavbarBrand,
  NavbarItem,
  Section,
  SimpleTable,
  Title,
} from 'technoidentity-devfractal'
import { fake, req } from 'technoidentity-utils'
import { Vehicle } from '../common'

const VehicleListProps = req({ vehicleList: readonlyArray(Vehicle) })

export type VehicleListProps = TypeOf<typeof VehicleListProps>

export const VehicleListForm = component(
  VehicleListProps,
  ({ vehicleList }) => (
    <>
      <ButtonsGroup alignment="right">
        <Link to="/vehicles/add" className="button is-primary">
          Add Vehicle
        </Link>
      </ButtonsGroup>
      <SimpleTable
        data={vehicleList}
        headers={[
          'name',
          'numberPlate',
          'group',
          'nextService',
          'insuranceDue',
          'vehicleStatus',
        ]}
        striped
      />
    </>
  ),
)

export const multipleVehicles = (n: Number) => {
  const vehicles = []
  for (let i = 0; i < n; i += 1) {
    vehicles.push(fake(Vehicle))
  }
  return vehicles
}

export const VehicleList: React.FC = () => (
  <>
    <Navbar textColor="info" textBackgroundColor="light">
      <NavbarBrand>
        <NavbarItem>
          <Title size="4">Vehicles</Title>
        </NavbarItem>
      </NavbarBrand>
    </Navbar>
    <Section>
      <VehicleListForm vehicleList={multipleVehicles(10)} />
    </Section>
  </>
)
