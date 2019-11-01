import React from 'react'
import {
  CreateLink,
  links,
  listComponent,
  Section,
} from 'technoidentity-devfractal'
import { Vehicle } from '../common'
import { HeadTitle } from '../components'
import { Table } from '../reacttable/Table'

const vehicleLinks = links('vehicles')

export const VehicleList = listComponent(Vehicle, ({ data: vehicleList }) => {
  const tableData = vehicleList.map(data => ({ ...data, actions: 'actions' }))
  return (
    <Section>
      <HeadTitle>Vehicles</HeadTitle>

      <CreateLink alignment="right" variant="primary" to={vehicleLinks.create}>
        Add Vehicle
      </CreateLink>
      <Table
        tableData={[...tableData]}
        sorting={true}
        pagination={true}
        headerNames={[
          'name',
          'numberPlate',
          'group',
          'nextService',
          'insuranceDue',
          'status',
        ]}
        filterOption={[{ columnName: 'name', filterType: 'search' }]}
        actions={{
          editTo: id => vehicleLinks.edit(id),
          assignTo: id => `/assignVehicle/${id}`,
        }}
      />
    </Section>
  )
})
