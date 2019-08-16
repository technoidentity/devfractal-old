import React from 'react'
import { component, Section } from 'technoidentity-devfractal'
import { GeoFence, links, listProps } from '../common'
import {
  CreateLink,
  CrudTable,
  HeadTitle,
  StaticPagination,
} from '../components'

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

      <StaticPagination />
    </Section>
  ),
)
