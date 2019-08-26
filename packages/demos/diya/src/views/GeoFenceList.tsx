import React from 'react'
import {
  CreateLink,
  CrudTable,
  links,
  listComponent,
  RoutedPager,
  Section,
} from 'technoidentity-devfractal'
import { GeoFence } from '../common'
import { HeadTitle } from '../components'

const geoFenceLinks = links('geo_fences')

export const GeoFenceList = listComponent(
  GeoFence,
  ({ data: geoFenceList }) => (
    <Section>
      <HeadTitle>GeoFence</HeadTitle>

      <CreateLink to={geoFenceLinks.create}>Create GeoFence</CreateLink>

      <CrudTable
        data={geoFenceList}
        headers={['areaName', 'assignVehicle', 'assignClient']}
        editTo={v => geoFenceLinks.edit(v.id)}
      />

      <RoutedPager />
    </Section>
  ),
)
