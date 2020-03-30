import React from 'react'
import { CrudTable, links, listComponent, RoutedPager } from 'srtp-crud'
import { Section } from 'srtp-ui'
import { GeoFence } from '../common'
import { HeadTitle } from '../components'
import { CreateLink } from './CreateLink'

const geoFenceLinks = links('geo_fences')

export const GeoFenceList = listComponent(
  GeoFence,
  ({ data: geoFenceList }) => (
    <Section>
      <HeadTitle>GeoFence</HeadTitle>

      <CreateLink to={geoFenceLinks.create}>Create GeoFence</CreateLink>

      <CrudTable
        data={geoFenceList}
        select={['areaName', 'assignVehicle', 'assignClient']}
        editTo={v => geoFenceLinks.edit(v.id)}
      />

      <RoutedPager />
    </Section>
  ),
)
