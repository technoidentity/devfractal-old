import React from 'react'
import { Section, v2 } from 'technoidentity-devfractal'
import { Vehicle } from '../common'
import { CreateLink, HeadTitle } from '../components'

const vehicleLinks = v2.links('vehicles')

export const VehicleList = v2.listComponent(
  Vehicle,
  ({ data: vehicleList }) => (
    <Section>
      <HeadTitle>Vehicles</HeadTitle>

      <CreateLink to={vehicleLinks.create}>Add Vehicle</CreateLink>

      <v2.CrudTable
        data={vehicleList}
        headers={[
          'name',
          'numberPlate',
          'group',
          'nextService',
          'insuranceDue',
          'status',
        ]}
        editLink={v => vehicleLinks.edit(v.id)}
      />

      <v2.RoutedPager />
    </Section>
  ),
)
