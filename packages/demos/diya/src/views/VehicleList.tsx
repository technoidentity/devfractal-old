import React from 'react'
import {
  CreateLink,
  CrudTable,
  links,
  listComponent,
  RoutedPager,
  Section,
} from 'technoidentity-devfractal'
import { Vehicle } from '../common'
import { HeadTitle } from '../components'

const vehicleLinks = links('vehicles')

export const VehicleList = listComponent(Vehicle, ({ data: vehicleList }) => (
  <Section>
    <HeadTitle>Vehicles</HeadTitle>

    <CreateLink alignment="right" variant="primary" to={vehicleLinks.create}>
      Add Vehicle
    </CreateLink>

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
