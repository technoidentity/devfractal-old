import React from 'react'
import { Section } from 'technoidentity-devfractal'
import { Vehicle } from '../common'
import {
  CreateLink,
  CrudTable,
  HeadTitle,
  StaticPagination,
} from '../components'
import { links, listComponent } from '../crud'

const vehicleLinks = links('vehicles')

export const VehicleList = listComponent(Vehicle, ({ data: vehicleList }) => (
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
))
