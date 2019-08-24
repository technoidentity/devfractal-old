import React from 'react'
import { Section, v2 } from 'technoidentity-devfractal'
import { GeoFence } from '../common'
import { CreateLink, HeadTitle } from '../components'

const geoFenceLinks = v2.links('geo_fences')

export const GeoFenceList = v2.listComponent(
  GeoFence,
  ({ data: geoFenceList }) => (
    <Section>
      <HeadTitle>GeoFence</HeadTitle>

      <CreateLink to={geoFenceLinks.create}>Create GeoFence</CreateLink>

      <v2.CrudTable
        data={geoFenceList}
        headers={['areaName', 'assignVehicle', 'assignClient']}
        editLink={v => geoFenceLinks.edit(v.id)}
      />

      <v2.RoutedPager />
    </Section>
  ),
)
