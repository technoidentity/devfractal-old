import React from 'react'
import { component, Section } from 'technoidentity-devfractal'
import { links, listProps, Vehicle } from '../common'
import {
  CreateLink,
  CrudTable,
  HeadTitle,
  StaticPagination,
} from '../components'

const VehicleListProps = listProps(Vehicle)

const vehicleLinks = links('vehicles')

export const VehicleList = component(
  VehicleListProps,
  ({ data: vehicleList }) => (
    <Section>
      <HeadTitle>Vehicles</HeadTitle>

      <CreateLink to={vehicleLinks.create}>Add Vehicle</CreateLink>

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
        editLink={v => vehicleLinks.edit(v.id)}
      />

      <StaticPagination />
    </Section>
  ),
)
