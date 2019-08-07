import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  ButtonsGroup,
  component,
  Get,
  Section,
  SimpleTable,
  Title,
} from 'technoidentity-devfractal'
import { fake, range, req } from 'technoidentity-utils'
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

export const VehicleListTable = component(
  VehicleListProps,
  ({ vehicleList }) => (
    <Section>
      <Title size="4">Vehicles</Title>
      <VehicleListForm vehicleList={vehicleList} />
    </Section>
  ),
)

export const VehicleList: React.FC = () => (
  <Get asyncFn={async () => range(10).map(i => fake(Vehicle))}>
    {data => <VehicleListTable vehicleList={data} />}
  </Get>
)
