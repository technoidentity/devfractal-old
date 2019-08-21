import React from 'react'
import { component, Section, v2 } from 'technoidentity-devfractal'
import { GeoFence } from '../common'
import { CreateLink, HeadTitle } from '../components'

export const GeoFenceListProps = v2.listProps(GeoFence)

const geoFenceLinks = v2.links('geo_fences')

export const GeoFenceList = component(
  GeoFenceListProps,
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
