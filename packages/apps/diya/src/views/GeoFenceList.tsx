import React from 'react'
import {
  CreateLink,
  links,
  listComponent,
  Section,
} from 'technoidentity-devfractal'
import { GeoFence } from '../common'
import { HeadTitle } from '../components'
import { Table } from '../reacttable/Table'

const geoFenceLinks = links('geo_fences')

export const GeoFenceList = listComponent(
  GeoFence,
  ({ data: geoFenceList }) => {
    const tableData = geoFenceList.map(data => ({
      ...data,
      actions: 'actions',
    }))
    return (
      <Section>
        <HeadTitle>GeoFence</HeadTitle>

        <CreateLink
          alignment="right"
          variant="primary"
          to={geoFenceLinks.create}
        >
          Create GeoFence
        </CreateLink>
        <Table
          tableData={[...tableData]}
          sorting={true}
          pagination={true}
          headerNames={['areaName', 'assignVehicle', 'assignClient']}
          filterOption={[{ columnName: 'areaName', filterType: 'search' }]}
          actions={{
            editTo: id => geoFenceLinks.edit(id),
          }}
        />
      </Section>
    )
  },
)
