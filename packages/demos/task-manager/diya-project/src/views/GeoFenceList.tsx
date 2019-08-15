import { readonlyArray, TypeOf } from 'io-ts'
import React from 'react'
import { component, Get, Section } from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import { GeoFence, geoFenceAPI } from '../common'
import {
  CreateLink,
  CrudTable,
  HeadTitle,
  StaticPagination,
} from '../components'

export const GeoFenceListProps = req({ geoFenceList: readonlyArray(GeoFence) })

const GeoFenceListView = component(GeoFenceListProps, ({ geoFenceList }) => (
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
))

export const GeoFenceList: React.FC = () => (
  <Get asyncFn={() => geoFenceAPI.many()}>
    {data => <GeoFenceListView geoFenceList={data} />}
  </Get>
)
