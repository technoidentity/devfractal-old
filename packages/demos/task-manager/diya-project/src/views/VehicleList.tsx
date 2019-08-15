import React from 'react'
import { component, Section } from 'technoidentity-devfractal'
import { listProps, Vehicle } from '../common'
import {
  CreateLink,
  CrudTable,
  HeadTitle,
  StaticPagination,
} from '../components'

const VehicleListProps = listProps(Vehicle)

export const VehicleList = component(
  VehicleListProps,
  ({ data: vehicleList }) => (
    <Section>
      <HeadTitle>Vehicles</HeadTitle>

      <CreateLink to="/vehicles/add">Add Vehicle</CreateLink>

      <CrudTable
        data={vehicleList}
        headers={[
          'name',
          'numberPlate',
          'group',
          'nextService',
          'insuranceDue',
          'vehicleStatus',
        ]}
        editURL={v => `vehicles/${v.id}/edit`}
      />

      <StaticPagination />
    </Section>
  ),
)
