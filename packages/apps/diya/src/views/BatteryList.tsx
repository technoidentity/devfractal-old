import React from 'react'
import {
  CreateLink,
  links,
  listComponent,
  Section,
  Title,
} from 'technoidentity-devfractal'
import { Battery } from '../common'
import { Table } from '../reacttable/Table'

const batteryLinks = links('batteries')

export const BatteryList = listComponent(Battery, ({ data: batteryList }) => {
  const tableData = batteryList.map(data => ({ ...data, actions: 'actions' }))
  return (
    <Section>
      <Title size="4" textColor="info">
        Batteries
      </Title>
      <CreateLink alignment="right" variant="primary" to={batteryLinks.create}>
        Add Battery
      </CreateLink>
      <Table
        tableData={[...tableData]}
        sorting={true}
        pagination={true}
        headerNames={['name', 'group', 'remainingCycles', 'status']}
        filterOption={[{ columnName: 'name', filterType: 'search' }]}
        actions={{
          editTo: id => batteryLinks.edit(id),
          assignTo: id => `assignBattery/${id}`,
        }}
      />
    </Section>
  )
})
