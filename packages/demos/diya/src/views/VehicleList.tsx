import React from 'react'
import {
  CrudTable,
  links,
  listComponent,
  RoutedPager,
  Section,
} from 'technoidentity-devfractal'
import { Vehicle } from '../common'
import { CreateLink, HeadTitle } from '../components'

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
        'status',
      ]}
      editTo={v => vehicleLinks.edit(v.id)}
    />

    <RoutedPager />
  </Section>
))
