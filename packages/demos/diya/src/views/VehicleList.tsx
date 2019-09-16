import React from 'react'
import {
  CreateLink,
  links,
  listComponent,
  RoutedPager,
  Section,
} from 'technoidentity-devfractal'
import { Vehicle } from '../common'
import { HeadTitle } from '../components'
import { DiyaTable } from '../components/DiyaTable'

const vehicleLinks = links('vehicles')

export const VehicleList = listComponent(Vehicle, ({ data: vehicleList }) => {
  return (
    <Section>
      <HeadTitle>Vehicles</HeadTitle>

      <CreateLink alignment="right" variant="primary" to={vehicleLinks.create}>
        Add Vehicle
      </CreateLink>

      <DiyaTable
        data={vehicleList}
        headers={[
          'name',
          'numberPlate',
          'group',
          'nextService',
          'insuranceDue',
          'status',
        ]}
        labels={[
          'name',
          'numberPlate',
          'group',
          'nextService',
          'insuranceDue',
          'status',
          'Actions',
        ]}
        editTo={v => vehicleLinks.edit(v.id)}
        assignTo={v => `/assignVehicle/${v.id}`}
      />
      <RoutedPager />
    </Section>
  )
})
