import React from 'react'
import {
  links,
  listComponent,
  RoutedPager,
  Section,
} from 'technoidentity-devfractal'
import { Vehicle } from '../common'
import { HeadTitle } from '../components'
import { DiyaTable } from '../components/DiyaTable'
import { CreateLink } from './CreateLink'

const vehicleLinks = links('vehicles')

export const VehicleList = listComponent(Vehicle, ({ data: vehicleList }) => {
  return (
    <Section>
      <HeadTitle>Vehicles</HeadTitle>

      <CreateLink to={vehicleLinks.create}>Add Vehicle</CreateLink>

      <DiyaTable
        data={vehicleList}
        select={[
          'name',
          'numberPlate',
          'group',
          'nextService',
          'insuranceDue',
          'status',
        ]}
        editTo={v => vehicleLinks.edit(v.id)}
        assignTo={v => `/assignVehicle/${v.id}`}
      />
      <RoutedPager />
    </Section>
  )
})
