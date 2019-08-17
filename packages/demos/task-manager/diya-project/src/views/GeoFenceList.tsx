import React from 'react'
import { component, Section } from 'technoidentity-devfractal'
import { GeoFence } from '../common'
import {
  CreateLink,
  CrudTable,
  HeadTitle,
  Pager,
  StatePager,
} from '../components'
import { links, listProps } from '../crud'

export const GeoFenceListProps = listProps(GeoFence)

const geoFenceLinks = links('geo_fences')

export const GeoFenceList = component(
  GeoFenceListProps,
  ({ data: geoFenceList }) => (
    <Section>
      <HeadTitle>GeoFence</HeadTitle>

      <CreateLink to={geoFenceLinks.create}>Create GeoFence</CreateLink>

      <CrudTable
        data={geoFenceList}
        headers={['areaName', 'assignVehicle', 'assignClient']}
        editLink={v => geoFenceLinks.edit(v.id)}
      />

      <StatePager />
    </Section>
  ),
)
