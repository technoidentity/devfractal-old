import React from 'react'
import { component, Section } from 'technoidentity-devfractal'
import { GeoFence, listProps } from '../common'
import {
  CreateLink,
  CrudTable,
  HeadTitle,
  StaticPagination,
} from '../components'

export const GeoFenceListProps = listProps(GeoFence)

export const GeoFenceList = component(
  GeoFenceListProps,
  ({ data: geoFenceList }) => (
    <Section>
      <HeadTitle>GeoFence</HeadTitle>

      <CreateLink to="geo_fence/add">Create GeoFence</CreateLink>

      <CrudTable
        data={geoFenceList}
        headers={['areaName', 'assignVehicle', 'assignClient']}
        editURL={v => `geo_fence/${v.id}/edit`}
      />

      <StaticPagination />
    </Section>
  ),
)
